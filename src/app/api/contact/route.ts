import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function getRateLimitKey(request: NextRequest): string {
  // Use IP address for rate limiting
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
  return ip
}

function checkRateLimit(key: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // 5 requests per 15 minutes

  const current = rateLimitStore.get(key)
  
  if (!current || now > current.resetTime) {
    // Reset or initialize
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: maxRequests - 1 }
  }

  if (current.count >= maxRequests) {
    return { allowed: false, remaining: 0 }
  }

  current.count++
  return { allowed: true, remaining: maxRequests - current.count }
}

function validateInput(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required')
  } else if (data.name.trim().length < 2 || data.name.trim().length > 100) {
    errors.push('Name must be between 2 and 100 characters')
  } else if (!/^[a-zA-Z\s\-'\.]+$/.test(data.name.trim())) {
    errors.push('Name contains invalid characters')
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required')
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email.trim()) || data.email.trim().length > 254) {
      errors.push('Please enter a valid email address')
    }
  }

  // Company validation
  if (!data.company || typeof data.company !== 'string') {
    errors.push('Company is required')
  } else if (data.company.trim().length < 2 || data.company.trim().length > 100) {
    errors.push('Company must be between 2 and 100 characters')
  }

  // Message validation
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required')
  } else if (data.message.trim().length < 10 || data.message.trim().length > 2000) {
    errors.push('Message must be between 10 and 2000 characters')
  }

  // Terms acceptance validation
  if (!data.acceptTerms || data.acceptTerms !== true) {
    errors.push('You must accept the Privacy Policy and Terms of Service')
  }

  return { isValid: errors.length === 0, errors }
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove basic HTML chars
    .substring(0, 2000) // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
        ? 'https://www.taskifai.com' 
        : 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    // Rate limiting
    const rateLimitKey = getRateLimitKey(request)
    const { allowed, remaining } = checkRateLimit(rateLimitKey)

    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            ...corsHeaders,
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(Date.now() / 1000 + 900).toString()
          }
        }
      )
    }

    // Parse request body
    const data = await request.json()

    // Validate input
    const validation = validateInput(data)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { 
          status: 400,
          headers: {
            ...corsHeaders,
            'X-RateLimit-Remaining': remaining.toString()
          }
        }
      )
    }

    // Sanitize input data
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      company: sanitizeInput(data.company),
      message: sanitizeInput(data.message)
    }

    // Make.com webhook URL (stored securely in environment variable)
    const webhookUrl = process.env.MAKE_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('MAKE_WEBHOOK_URL environment variable not set')
      return NextResponse.json(
        { error: 'Service configuration error. Please try again later.' },
        { 
          status: 500,
          headers: corsHeaders
        }
      )
    }

    // Send to Make.com with timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'TaskifAI-ContactForm/1.0'
        },
        body: JSON.stringify({
          ...sanitizedData,
          timestamp: new Date().toISOString(),
          source: 'website-contact-form',
          ip: rateLimitKey
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`Make.com webhook failed: ${response.status}`)
      }

      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { 
          status: 200,
          headers: {
            ...corsHeaders,
            'X-RateLimit-Remaining': remaining.toString()
          }
        }
      )

    } catch (fetchError) {
      clearTimeout(timeoutId)
      console.error('Make.com webhook error:', fetchError)
      
      return NextResponse.json(
        { error: 'Failed to send message. Please try again later.' },
        { 
          status: 503,
          headers: corsHeaders
        }
      )
    }

  } catch (error) {
    console.error('Contact form API error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
            ? 'https://www.taskifai.com' 
            : 'http://localhost:3000'
        }
      }
    )
  }
}

// Handle preflight requests
export async function OPTIONS(request: NextRequest) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NODE_ENV === 'production' 
        ? 'https://www.taskifai.com' 
        : 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  })
}