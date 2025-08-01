"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    acceptTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [termsError, setTermsError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    
    // Clear terms error when checkbox is checked
    if (name === 'acceptTerms' && checked) {
      setTermsError('')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted!')
    setIsSubmitting(true)
    setError('')
    setTermsError('')

    // Validate terms acceptance
    if (!formData.acceptTerms) {
      setTermsError('You must accept the Privacy Policy and Terms of Service to continue.')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://hook.eu2.make.com/43qt6ab60jsnfa56n8186mpc42khbmxd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', company: '', message: '', acceptTerms: false })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-blue-50/60 to-purple-50/80"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/40 via-transparent to-emerald-50/40"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="modern-card p-12 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30 border-2 border-emerald-100">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-8 shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Thank you!</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              We'll be in touch within 24 hours to discuss your reseller analytics needs.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="gradient-button"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-purple-50/60 to-blue-50/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-50/40 via-transparent to-pink-50/40"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-900">Are you ready to take control over your </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600">sell-out data?</span>
        </h2>
        <p className="text-xl text-gray-700 mb-12 font-medium">
          If this sounds like something your team deals with, send us a message and we'll show you how it works.
        </p>

        <div className="modern-card p-8 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20 border-2 border-purple-100">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {error}
            </div>
          )}
          
          {termsError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              {termsError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work email"
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
                />
              </div>
            </div>
            
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your reseller data challenges..."
                rows={5}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
            </div>
            
            {/* Terms and Privacy Policy Acceptance */}
            <div className="flex items-start gap-3">
              <div className="flex items-center h-6">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  aria-describedby="terms-description"
                />
              </div>
              <div className="text-sm">
                <label htmlFor="acceptTerms" className="text-gray-700 cursor-pointer">
                  I accept the{' '}
                  <Link 
                    href="/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link 
                    href="/terms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 underline font-medium"
                  >
                    Terms of Service
                  </Link>
                </label>
                <p id="terms-description" className="text-xs text-gray-500 mt-1">
                  Required to process your inquiry and contact you.
                </p>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !formData.acceptTerms}
              className="w-full gradient-button text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send us a message'}
            </button>
          </form>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-accent-emerald mb-1">24hrs</div>
              <div className="text-gray-600 text-sm">Response time</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-accent-purple mb-1">Free</div>
              <div className="text-gray-600 text-sm">Consultation</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-accent-pink mb-1">Custom</div>
              <div className="text-gray-600 text-sm">Demo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}