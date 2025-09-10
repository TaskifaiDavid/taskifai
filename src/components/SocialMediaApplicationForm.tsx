"use client"

import { useState } from 'react'
import Link from 'next/link'

interface ApplicationFormData {
  // Personal Information
  name: string
  email: string
  location: string
  linkedinUrl: string
  
  // Professional Background
  currentStatus: string
  contentExperienceYears: string
  socialMediaExperienceYears: string
  onCameraComfort: string
  brandSpokespersonExperience: string
  
  // Platform Expertise
  linkedinExperience: string
  tiktokExperience: string
  currentPostingFrequency: string
  b2bB2cRatio: string
  
  // Technical Setup
  technicalSetup: string
  
  // Portfolio Links
  portfolioLink: string
  
  // Application Questions
  whyExcited: string
  creativeIdea: string
  complexTopicsExperience: string
  consistentSchedule: string
  malmoAvailability: string
  
  // Revenue Model Understanding
  revenueShareAcceptance: boolean
  incomeVariabilityAcceptance: boolean
  entrepreneurialExperience: string
  entrepreneurialAttraction: string
  
  // Legal
  acceptTerms: boolean
}

export default function SocialMediaApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>({
    // Personal Information
    name: '',
    email: '',
    location: '',
    linkedinUrl: '',
    
    // Professional Background
    currentStatus: '',
    contentExperienceYears: '',
    socialMediaExperienceYears: '',
    onCameraComfort: '',
    brandSpokespersonExperience: '',
    
    // Platform Expertise
    linkedinExperience: '',
    tiktokExperience: '',
    currentPostingFrequency: '',
    b2bB2cRatio: '',
    
    // Technical Setup
    technicalSetup: '',
    
    // Portfolio Links
    portfolioLink: '',
    
    // Application Questions
    whyExcited: '',
    creativeIdea: '',
    complexTopicsExperience: '',
    consistentSchedule: '',
    malmoAvailability: '',
    
    // Revenue Model Understanding
    revenueShareAcceptance: false,
    incomeVariabilityAcceptance: false,
    entrepreneurialExperience: '',
    entrepreneurialAttraction: '',
    
    // Legal
    acceptTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [termsError, setTermsError] = useState('')

  // Character count helpers
  const getCharCount = (text: string) => text.length
  const getCharCountDisplay = (text: string, limit: number) => {
    const count = getCharCount(text)
    const isNearLimit = count > limit * 0.8
    const isOverLimit = count > limit
    return (
      <span className={`text-xs ${isOverLimit ? 'text-red-600' : isNearLimit ? 'text-yellow-600' : 'text-gray-500'}`}>
        {count}/{limit}
      </span>
    )
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch('/api/social-media-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '', email: '', location: '', linkedinUrl: '', currentStatus: '', contentExperienceYears: '',
          socialMediaExperienceYears: '', onCameraComfort: '', brandSpokespersonExperience: '',
          linkedinExperience: '', tiktokExperience: '', currentPostingFrequency: '', b2bB2cRatio: '',
          technicalSetup: '',
          portfolioLink: '', whyExcited: '', creativeIdea: '',
          complexTopicsExperience: '', consistentSchedule: '', malmoAvailability: '', 
          revenueShareAcceptance: false, incomeVariabilityAcceptance: false, entrepreneurialExperience: '', entrepreneurialAttraction: '',
          acceptTerms: false
        })
      } else {
        const errorData = await response.json().catch(() => ({}))
        if (response.status === 429) {
          throw new Error('Too many requests. Please wait a few minutes before trying again.')
        } else if (response.status === 400 && errorData.details) {
          throw new Error(errorData.details.join(', '))
        } else {
          throw new Error(errorData.error || 'Failed to submit application')
        }
      }
    } catch (error) {
      console.error('Error submitting application:', error)
      setError(error instanceof Error ? error.message : 'Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="modern-card p-12 bg-gradient-to-br from-white via-emerald-50/30 to-blue-50/30 border-2 border-emerald-100">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="gradient-text">Application Submitted!</span>
        </h2>
        <p className="text-xl text-gray-700 mb-8 font-medium text-center">
          Thank you for your application! We'll review your submission and get back to you within 72 hours with next steps.
        </p>
        <div className="text-center">
          <button 
            onClick={() => setIsSubmitted(false)}
            className="gradient-button"
          >
            Submit another application
          </button>
        </div>
      </div>
    )
  }

  return (
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
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold flex items-center justify-center mr-3">1</span>
            Personal Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
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
                placeholder="Email Address"
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location (proximity to Malmö required)"
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
            />
            <input
              type="url"
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              placeholder="LinkedIn profile URL"
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
            />
          </div>
        </section>

        {/* Professional Background */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-bold flex items-center justify-center mr-3">2</span>
            Professional Background
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="currentStatus"
              value={formData.currentStatus}
              onChange={handleChange}
              placeholder="Current company/employment status"
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
            />
            
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="contentExperienceYears"
                value={formData.contentExperienceYears}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 font-medium"
              >
                <option value="">Content creation experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
              
              <select
                name="socialMediaExperienceYears"
                value={formData.socialMediaExperienceYears}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 font-medium"
              >
                <option value="">Social media management experience</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
            
            <select
              name="onCameraComfort"
              value={formData.onCameraComfort}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 font-medium"
            >
              <option value="">On-camera comfort level (1-10)</option>
              <option value="1">1 - Very uncomfortable</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 - Neutral</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 - Very comfortable</option>
            </select>
            
            <div className="relative">
              <textarea
                name="brandSpokespersonExperience"
                value={formData.brandSpokespersonExperience}
                onChange={handleChange}
                placeholder="Describe your experience being a brand spokesperson or representing companies on camera..."
                rows={3}
                maxLength={500}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.brandSpokespersonExperience, 500)}
              </div>
            </div>
          </div>
        </section>

        {/* Platform Expertise */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-bold flex items-center justify-center mr-3">3</span>
            Platform Expertise
          </h3>
          <div className="space-y-4">
            <div className="relative">
              <textarea
                name="linkedinExperience"
                value={formData.linkedinExperience}
                onChange={handleChange}
                placeholder="Describe your LinkedIn content creation experience (years, types of content, engagement rates if available)..."
                rows={3}
                maxLength={300}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.linkedinExperience, 300)}
              </div>
            </div>
            
            <div className="relative">
              <textarea
                name="tiktokExperience"
                value={formData.tiktokExperience}
                onChange={handleChange}
                placeholder="Describe your TikTok content creation experience (years, types of content, follower count if applicable)..."
                rows={3}
                maxLength={300}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.tiktokExperience, 300)}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <select
                name="currentPostingFrequency"
                value={formData.currentPostingFrequency}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 font-medium"
              >
                <option value="">Current posting frequency</option>
                <option value="daily">Daily (7+ posts/week)</option>
                <option value="5-6-week">5-6 posts per week</option>
                <option value="3-4-week">3-4 posts per week</option>
                <option value="1-2-week">1-2 posts per week</option>
                <option value="less">Less than weekly</option>
              </select>
              
              <select
                name="b2bB2cRatio"
                value={formData.b2bB2cRatio}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 font-medium"
              >
                <option value="">B2B vs B2C content ratio</option>
                <option value="mostly-b2b">Mostly B2B (80%+)</option>
                <option value="more-b2b">More B2B (60-80%)</option>
                <option value="balanced">Balanced mix (40-60%)</option>
                <option value="more-b2c">More B2C (60-80%)</option>
                <option value="mostly-b2c">Mostly B2C (80%+)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Technical Setup */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-600 text-white text-sm font-bold flex items-center justify-center mr-3">4</span>
            Technical Setup
          </h3>
          <div>
            <textarea
              name="technicalSetup"
              value={formData.technicalSetup}
              onChange={handleChange}
              placeholder="Describe your equipment and setup (camera, microphone, editing software, workspace, etc.)"
              rows={3}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
            />
          </div>
        </section>

        {/* Portfolio Links */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-pink-600 text-white text-sm font-bold flex items-center justify-center mr-3">5</span>
            Portfolio & Examples
          </h3>
          <div>
            <input
              type="text"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              placeholder="Portfolio link (website, Google Drive, etc.) - optional"
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium"
            />
          </div>
        </section>

        {/* Application Questions */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-600 text-white text-sm font-bold flex items-center justify-center mr-3">6</span>
            Application Questions
          </h3>
          <div className="space-y-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why does this role excite you? *
              </label>
              <textarea
                name="whyExcited"
                value={formData.whyExcited}
                onChange={handleChange}
                placeholder="Tell us why this partnership opportunity excites you..."
                rows={3}
                maxLength={500}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.whyExcited, 500)}
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                One creative idea for turning TaskifAI into engaging content *
              </label>
              <textarea
                name="creativeIdea"
                value={formData.creativeIdea}
                onChange={handleChange}
                placeholder="Describe one specific, creative content idea for making TaskifAI's reseller analytics solution engaging and shareable..."
                rows={4}
                maxLength={500}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.creativeIdea, 500)}
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience making complex/technical topics engaging for business audiences *
              </label>
              <textarea
                name="complexTopicsExperience"
                value={formData.complexTopicsExperience}
                onChange={handleChange}
                placeholder="Describe your experience turning complex, technical, or 'boring' topics into engaging content that converts..."
                rows={3}
                maxLength={300}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.complexTopicsExperience, 300)}
              </div>
            </div>
            
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                How do you maintain consistent 5+ posts/week schedules? *
              </label>
              <textarea
                name="consistentSchedule"
                value={formData.consistentSchedule}
                onChange={handleChange}
                placeholder="Describe your strategies for maintaining consistent, high-frequency posting schedules..."
                rows={3}
                maxLength={300}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.consistentSchedule, 300)}
              </div>
            </div>
            
            
            <select
              name="malmoAvailability"
              value={formData.malmoAvailability}
              onChange={handleChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 font-medium"
            >
              <option value="">Availability for in-person filming in Malmö *</option>
              <option value="weekly">Available weekly</option>
              <option value="bi-weekly">Available every 2 weeks</option>
              <option value="monthly">Available monthly</option>
              <option value="as-needed">Available as needed</option>
              <option value="limited">Limited availability</option>
            </select>
          </div>
        </section>

        {/* Revenue Model Understanding */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold flex items-center justify-center mr-3">7</span>
            Revenue Model & Partnership Understanding
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="flex items-center h-6">
                <input
                  id="revenueShareAcceptance"
                  name="revenueShareAcceptance"
                  type="checkbox"
                  checked={formData.revenueShareAcceptance}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-purple-500 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="text-sm">
                <label htmlFor="revenueShareAcceptance" className="text-gray-700 cursor-pointer font-medium">
                  I understand this is 15% revenue-share, not traditional salary *
                </label>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center h-6">
                <input
                  id="incomeVariabilityAcceptance"
                  name="incomeVariabilityAcceptance"
                  type="checkbox"
                  checked={formData.incomeVariabilityAcceptance}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-purple-500 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="text-sm">
                <label htmlFor="incomeVariabilityAcceptance" className="text-gray-700 cursor-pointer font-medium">
                  I'm comfortable with income variability based on company performance *
                </label>
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous revenue-share, commission, or equity experience (optional)
              </label>
              <textarea
                name="entrepreneurialExperience"
                value={formData.entrepreneurialExperience}
                onChange={handleChange}
                placeholder="Describe any previous experience with performance-based compensation, partnerships, or entrepreneurial ventures..."
                rows={3}
                maxLength={300}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.entrepreneurialExperience, 300)}
              </div>
            </div>
            
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What attracts you to entrepreneurial compensation vs traditional employment? *
              </label>
              <textarea
                name="entrepreneurialAttraction"
                value={formData.entrepreneurialAttraction}
                onChange={handleChange}
                placeholder="Why are you interested in this partnership model rather than traditional employment with fixed salary..."
                rows={3}
                maxLength={300}
                required
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm text-gray-900 placeholder-gray-500 font-medium resize-none"
              />
              <div className="absolute bottom-2 right-2">
                {getCharCountDisplay(formData.entrepreneurialAttraction, 300)}
              </div>
            </div>
          </div>
        </section>

        {/* Terms and Privacy Policy Acceptance */}
        <section>
          <div className="flex items-start gap-3">
            <div className="flex items-center h-6">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-purple-500 border-gray-300 rounded"
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
                  className="text-blue-600 hover:text-purple-700 underline font-medium"
                >
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <Link 
                  href="/terms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-purple-700 underline font-medium"
                >
                  Terms of Service
                </Link>
              </label>
              <p id="terms-description" className="text-xs text-gray-500 mt-1">
                Required to process your application and contact you about this opportunity.
              </p>
            </div>
          </div>
        </section>
        
        <button
          type="submit"
          disabled={isSubmitting || !formData.acceptTerms || !formData.revenueShareAcceptance || !formData.incomeVariabilityAcceptance}
          className="w-full gradient-button text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </button>
      </form>
    </div>
  )
}