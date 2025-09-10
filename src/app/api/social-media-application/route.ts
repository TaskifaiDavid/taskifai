import { NextRequest, NextResponse } from 'next/server'

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
  const windowMs = 60 * 1000 // 1 minute window
  const maxRequests = 1 // 1 request per minute
  
  const userLimit = rateLimitStore.get(key)
  
  if (!userLimit || now > userLimit.resetTime) {
    // First request or window has reset
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    })
    return { allowed: true, remaining: maxRequests - 1 }
  }
  
  if (userLimit.count >= maxRequests) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0 }
  }
  
  // Increment count
  userLimit.count += 1
  rateLimitStore.set(key, userLimit)
  
  return { allowed: true, remaining: maxRequests - userLimit.count }
}

function validateInput(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  // Personal Information validation
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2 || data.name.trim().length > 100) {
    errors.push('Name must be between 2 and 100 characters')
  }

  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required')
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email.trim()) || data.email.trim().length > 254) {
      errors.push('Please enter a valid email address')
    }
  }

  if (!data.location || typeof data.location !== 'string' || data.location.trim().length < 2) {
    errors.push('Location is required')
  }

  if (!data.linkedinUrl || typeof data.linkedinUrl !== 'string' || data.linkedinUrl.trim().length < 3) {
    errors.push('LinkedIn URL is required')
  } else {
    const linkedinUrl = data.linkedinUrl.trim().toLowerCase()
    const isValidLinkedinUrl = linkedinUrl.includes('linkedin.com/in/') || 
                               linkedinUrl.includes('www.linkedin.com/in/') ||
                               linkedinUrl.includes('https://linkedin.com/in/') ||
                               linkedinUrl.includes('https://www.linkedin.com/in/')
    if (!isValidLinkedinUrl) {
      errors.push('Please enter a valid LinkedIn profile URL')
    }
  }

  // Professional Background validation
  const requiredFields = [
    'currentStatus', 'contentExperienceYears', 'socialMediaExperienceYears', 
    'onCameraComfort', 'brandSpokespersonExperience'
  ]
  
  requiredFields.forEach(field => {
    if (!data[field] || (typeof data[field] === 'string' && data[field].trim().length === 0)) {
      errors.push(`${field} is required`)
    }
  })

  // Platform Expertise validation
  if (!data.linkedinExperience || data.linkedinExperience.trim().length < 10) {
    errors.push('LinkedIn experience description is too short')
  }
  if (!data.tiktokExperience || data.tiktokExperience.trim().length < 10) {
    errors.push('TikTok experience description is too short')
  }

  // Technical Setup validation
  if (!data.technicalSetup || data.technicalSetup.trim().length === 0) {
    errors.push('Technical setup is required')
  }

  // Required text answers - reduced to 50 character minimum
  const requiredAnswers = [
    'whyExcited', 'creativeIdea', 'complexTopicsExperience', 
    'consistentSchedule', 'entrepreneurialAttraction'
  ]
  
  requiredAnswers.forEach(field => {
    if (!data[field] || data[field].trim().length < 50) {
      errors.push(`${field} requires at least 50 characters`)
    }
  })

  // Revenue model checkboxes
  if (!data.revenueShareAcceptance || data.revenueShareAcceptance !== true) {
    errors.push('You must accept the revenue-share model understanding')
  }
  
  if (!data.incomeVariabilityAcceptance || data.incomeVariabilityAcceptance !== true) {
    errors.push('You must accept income variability comfort')
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

function sanitizeUrl(url: string): string {
  try {
    const cleanUrl = url.trim()
    // Basic URL validation and cleaning
    if (cleanUrl.match(/^https?:\/\/.+/i)) {
      return cleanUrl.substring(0, 500) // Limit URL length
    }
    return ''
  } catch {
    return ''
  }
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
        { error: 'Too many applications submitted. Please wait 1 minute before submitting again.' },
        { 
          status: 429,
          headers: {
            ...corsHeaders,
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': Math.ceil(Date.now() / 1000 + 60).toString()
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
      // Personal Information
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      location: sanitizeInput(data.location),
      linkedinUrl: sanitizeInput(data.linkedinUrl),
      
      // Professional Background
      currentStatus: sanitizeInput(data.currentStatus),
      contentExperienceYears: sanitizeInput(data.contentExperienceYears),
      socialMediaExperienceYears: sanitizeInput(data.socialMediaExperienceYears),
      onCameraComfort: sanitizeInput(data.onCameraComfort),
      brandSpokespersonExperience: sanitizeInput(data.brandSpokespersonExperience),
      
      // Platform Expertise
      linkedinExperience: sanitizeInput(data.linkedinExperience),
      tiktokExperience: sanitizeInput(data.tiktokExperience),
      currentPostingFrequency: sanitizeInput(data.currentPostingFrequency),
      b2bB2cRatio: sanitizeInput(data.b2bB2cRatio),
      
      // Technical Setup
      technicalSetup: sanitizeInput(data.technicalSetup),
      
      // Portfolio Links
      portfolioLink: data.portfolioLink ? sanitizeInput(data.portfolioLink) : '',
      
      // Application Questions
      whyExcited: sanitizeInput(data.whyExcited),
      creativeIdea: sanitizeInput(data.creativeIdea),
      complexTopicsExperience: sanitizeInput(data.complexTopicsExperience),
      consistentSchedule: sanitizeInput(data.consistentSchedule),
      malmoAvailability: sanitizeInput(data.malmoAvailability),
      
      // Revenue Model Understanding
      revenueShareAcceptance: Boolean(data.revenueShareAcceptance),
      incomeVariabilityAcceptance: Boolean(data.incomeVariabilityAcceptance),
      entrepreneurialExperience: data.entrepreneurialExperience ? sanitizeInput(data.entrepreneurialExperience) : '',
      entrepreneurialAttraction: sanitizeInput(data.entrepreneurialAttraction)
    }

    // Make.com webhook URL for social media applications
    const webhookUrl = process.env.SOCIAL_MEDIA_APPLICATION_WEBHOOK_URL || 'https://hook.eu2.make.com/i7o86dydxbeqiwdqntgq5yvrcdo8y5c3'
    
    if (!webhookUrl) {
      console.error('SOCIAL_MEDIA_APPLICATION_WEBHOOK_URL environment variable not set')
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
    const timeoutId = setTimeout(() => controller.abort(), 15000) // 15 second timeout (longer for large application)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'TaskifAI-SocialMediaApplication/1.0'
        },
        body: JSON.stringify({
          ...sanitizedData,
          timestamp: new Date().toISOString(),
          source: 'social-media-application',
          type: 'content-creator-brand-builder',
          compensationModel: '15-percent-revenue-share-plus-equity',
          ip: rateLimitKey
        }),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`Make.com webhook failed: ${response.status}`)
      }

      return NextResponse.json(
        { success: true, message: 'Application submitted successfully' },
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
        { error: 'Failed to submit application. Please try again later.' },
        { 
          status: 503,
          headers: corsHeaders
        }
      )
    }

  } catch (error) {
    console.error('Social media application API error:', error)
    
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