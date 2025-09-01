"use client"

import { useState } from "react"
import { createPortal } from "react-dom"
import Link from 'next/link'

interface ROICalculatorProps {
  isOpen: boolean
  onClose: () => void
}

interface CalculationResult {
  recommendedTier: string
  monthlySavings: number
  firstYearROI: number
  secondYearROI: number
  thirdYearROI: number
  paybackMonths: number
  tierSetupCost: number
  tierMonthlyCost: number
  manualHoursPerMonth: number
  annualHoursSaved: number
  costPerResellerPerMonth: number
}

export default function ROICalculator({ isOpen, onClose }: ROICalculatorProps) {
  const [formData, setFormData] = useState({
    resellers: 5,
    rowsPerMonth: 10000,
    dataQuality: 'moderate' as 'clean' | 'moderate' | 'messy',
    hourlyCost: 75
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  
  // Contact form state
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    message: 'I\'m interested in learning more about your reseller analytics platform based on my ROI calculation.',
    acceptTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [contactError, setContactError] = useState('')
  const [termsError, setTermsError] = useState('')

  const tiers = [
    {
      name: "Starter",
      setupCost: 15000,
      monthlyCost: 599,
      resellerRange: [1, 10],
      timeSavings: "20-30 hours"
    },
    {
      name: "Growth", 
      setupCost: 30000,
      monthlyCost: 799,
      resellerRange: [11, 20],
      timeSavings: "35-45 hours"
    },
    {
      name: "Enterprise",
      setupCost: 50000,
      monthlyCost: 999,
      resellerRange: [21, 50],
      timeSavings: "50+ hours"
    }
  ]

  const calculateROI = (): CalculationResult | null => {
    const { resellers, rowsPerMonth, dataQuality, hourlyCost } = formData

    // Find recommended tier based ONLY on reseller count
    let recommendedTier = tiers.find(tier => 
      resellers >= tier.resellerRange[0] && resellers <= tier.resellerRange[1]
    )

    // Fallback to Enterprise tier if reseller count exceeds all ranges
    if (!recommendedTier) {
      recommendedTier = tiers[2] // Enterprise
    }

    // Research-based calculation: 2-6 hours per 1,000 rows baseline
    const baseHoursPer1000Rows = 4 // Average of 2-6 hours
    const qualityMultipliers = {
      clean: 1,
      moderate: 3,
      messy: 6
    }
    
    // Calculate manual processing time based on research
    const manualHoursPerMonth = (rowsPerMonth / 1000) * baseHoursPer1000Rows * qualityMultipliers[dataQuality]
    const currentMonthlyCost = manualHoursPerMonth * hourlyCost
    
    // Fixed platform cost
    const platformMonthlyCost = recommendedTier.monthlyCost
    
    const monthlySavings = currentMonthlyCost - platformMonthlyCost
    const annualSavings = monthlySavings * 12
    const paybackMonths = monthlySavings > 0 ? Math.ceil(recommendedTier.setupCost / monthlySavings) : 999
    
    // Multi-year ROI calculations
    const firstYearROI = ((annualSavings - recommendedTier.setupCost) / recommendedTier.setupCost) * 100
    const secondYearROI = (annualSavings / recommendedTier.setupCost) * 100
    const thirdYearROI = (annualSavings / recommendedTier.setupCost) * 100

    // New metrics for fixed pricing
    const costPerResellerPerMonth = platformMonthlyCost / resellers

    return {
      recommendedTier: recommendedTier.name,
      monthlySavings,
      firstYearROI,
      secondYearROI,
      thirdYearROI,
      paybackMonths,
      tierSetupCost: recommendedTier.setupCost,
      tierMonthlyCost: platformMonthlyCost,
      manualHoursPerMonth,
      annualHoursSaved: manualHoursPerMonth * 12,
      costPerResellerPerMonth
    }
  }

  const isFormValid = () => {
    const { resellers, rowsPerMonth, hourlyCost } = formData
    return resellers >= 1 && resellers <= 100 &&
           rowsPerMonth >= 1000 && rowsPerMonth <= 1000000 &&
           hourlyCost >= 20 && hourlyCost <= 200
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (formData.resellers < 1 || formData.resellers > 100) {
      newErrors.resellers = "Please enter between 1-100 resellers"
    }
    if (formData.rowsPerMonth < 1000 || formData.rowsPerMonth > 1000000) {
      newErrors.rowsPerMonth = "Please enter between 1,000-1,000,000 rows"
    }
    if (formData.hourlyCost < 20 || formData.hourlyCost > 200) {
      newErrors.hourlyCost = "Please enter between €20-200 per hour"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string) => {
    if (field === 'dataQuality') {
      setFormData(prev => ({ ...prev, [field]: value as 'clean' | 'moderate' | 'messy' }))
    } else {
      const numValue = parseInt(value) || 0
      setFormData(prev => ({ ...prev, [field]: numValue }))
    }
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setContactData({
      ...contactData,
      [name]: type === 'checkbox' ? checked : value
    })
    
    // Clear terms error when checkbox is checked
    if (name === 'acceptTerms' && checked) {
      setTermsError('')
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setContactError('')
    setTermsError('')

    // Validate terms acceptance
    if (!contactData.acceptTerms) {
      setTermsError('You must accept the Privacy Policy and Terms of Service to continue.')
      setIsSubmitting(false)
      return
    }

    try {
      const calculationResult = result
      
      const response = await fetch('https://hook.eu2.make.com/43qt6ab60jsnfa56n8186mpc42khbmxd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          company: contactData.company,
          message: contactData.message,
          data: calculationResult ? {
            resellers: formData.resellers,
            rowsPerMonth: formData.rowsPerMonth,
            dataQuality: formData.dataQuality,
            hourlyCost: formData.hourlyCost,
            recommendedTier: calculationResult.recommendedTier,
            monthlySavings: calculationResult.monthlySavings,
            firstYearROI: calculationResult.firstYearROI,
            secondYearROI: calculationResult.secondYearROI,
            thirdYearROI: calculationResult.thirdYearROI,
            paybackMonths: calculationResult.paybackMonths
          } : null
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setContactData({ name: '', email: '', company: '', message: 'I\'m interested in learning more about your reseller analytics platform based on my ROI calculation.', acceptTerms: false })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setContactError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const result = isFormValid() ? calculateROI() : null

  if (!isOpen) return null

  // Use portal to render modal at document root level
  // Check if we're in the browser before using createPortal
  if (typeof window === 'undefined') return null
  
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto modern-card p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              ROI Calculator
            </span>
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Tell us about your business</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Resellers
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={formData.resellers}
                  onChange={(e) => handleInputChange('resellers', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.resellers ? 'border-red-300' : 'border-gray-300 focus:border-purple-400'
                  }`}
                  placeholder="e.g. 15"
                />
                {errors.resellers && (
                  <p className="mt-1 text-sm text-red-600">{errors.resellers}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rows of Data Processed Monthly
                </label>
                <input
                  type="number"
                  min="1000"
                  max="1000000"
                  step="1000"
                  value={formData.rowsPerMonth}
                  onChange={(e) => handleInputChange('rowsPerMonth', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.rowsPerMonth ? 'border-red-300' : 'border-gray-300 focus:border-purple-400'
                  }`}
                  placeholder="e.g. 50000"
                />
                {errors.rowsPerMonth && (
                  <p className="mt-1 text-sm text-red-600">{errors.rowsPerMonth}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  Total reseller data rows processed per month
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data Quality Level
                </label>
                <select
                  value={formData.dataQuality}
                  onChange={(e) => handleInputChange('dataQuality', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                >
                  <option value="clean">Clean - Minor formatting issues</option>
                  <option value="moderate">Moderate - Some duplicates and inconsistencies</option>
                  <option value="messy">Very Messy - Major cleanup required</option>
                </select>
                <p className="mt-1 text-sm text-gray-500">
                  Based on industry research: Clean (1x), Moderate (3x), Very Messy (6x) processing time
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employee Hourly Cost (€)
                </label>
                <input
                  type="number"
                  min="20"
                  max="200"
                  value={formData.hourlyCost}
                  onChange={(e) => handleInputChange('hourlyCost', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors ${
                    errors.hourlyCost ? 'border-red-300' : 'border-gray-300 focus:border-purple-400'
                  }`}
                  placeholder="e.g. 75"
                />
                {errors.hourlyCost && (
                  <p className="mt-1 text-sm text-red-600">{errors.hourlyCost}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  Include salary, benefits, and overhead costs
                </p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Your ROI Analysis</h3>
            
            {result ? (
              <div className="space-y-6">
                {/* Recommended Tier */}
                <div className="modern-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
                  <div className="text-lg font-semibold text-purple-800 mb-2">
                    Recommended Plan: {result.recommendedTier}
                  </div>
                  <div className="text-sm text-gray-600">
                    Best fit for {formData.resellers} resellers
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="modern-card p-3 text-center">
                    <div className="text-lg font-bold text-blue-600 mb-1">
                      €{Math.round(result.costPerResellerPerMonth)}
                    </div>
                    <div className="text-xs text-gray-600">Cost per Reseller</div>
                  </div>
                  
                  <div className="modern-card p-3 text-center">
                    <div className="text-lg font-bold text-emerald-600 mb-1">
                      €{result.monthlySavings.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">Monthly Savings</div>
                  </div>
                  
                  <div className="modern-card p-3 text-center">
                    <div className="text-lg font-bold text-blue-600 mb-1">
                      {result.paybackMonths === 999 ? 'N/A' : result.paybackMonths}
                    </div>
                    <div className="text-xs text-gray-600">Months to Payback</div>
                  </div>
                </div>

                {/* Time Savings */}
                <div className="modern-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {Math.round(result.manualHoursPerMonth)}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">Hours Saved Monthly</div>
                    <div className="text-sm text-gray-600">
                      {Math.round(result.annualHoursSaved)} hours saved annually
                    </div>
                  </div>
                </div>

                {/* Multi-Year ROI */}
                <div className="modern-card p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 text-center">ROI by Year</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-xl font-bold text-emerald-600">
                        {result.firstYearROI > 0 ? '+' : ''}{Math.round(result.firstYearROI)}%
                      </div>
                      <div className="text-xs text-gray-600">1st Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-emerald-600">
                        +{Math.round(result.secondYearROI)}%
                      </div>
                      <div className="text-xs text-gray-600">2nd Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-emerald-600">
                        +{Math.round(result.thirdYearROI)}%
                      </div>
                      <div className="text-xs text-gray-600">3rd Year</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-2">
                    1st year includes setup costs
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="modern-card p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Cost Breakdown</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Manual processing cost:</span>
                      <span className="font-medium">€{(result.manualHoursPerMonth * formData.hourlyCost).toLocaleString()}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform monthly cost:</span>
                      <span className="font-medium">€{result.tierMonthlyCost.toLocaleString()}/month</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-600">Setup investment:</span>
                      <span className="font-medium">€{result.tierSetupCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Processing {formData.rowsPerMonth.toLocaleString()} rows ({formData.dataQuality} quality)</span>
                      <span>~{Math.round(result.manualHoursPerMonth)}h manual work</span>
                    </div>
                  </div>
                </div>

                {/* Research Note */}
                <div className="modern-card p-4 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    ℹ️ Calculations based on industry research: Data professionals spend 50-80% of time on cleaning, 
                    with 2-6 hours per 1,000 rows for manual processing.
                  </p>
                </div>

                {/* Contact Form / CTA */}
                {isSubmitted ? (
                  <div className="text-center space-y-4">
                    <div className="modern-card p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-emerald-800 mb-2">Thank you!</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        We'll contact you within 24 hours with a personalized demo based on your ROI calculation.
                      </p>
                      <button 
                        onClick={() => {
                          setIsSubmitted(false)
                          setShowContactForm(false)
                        }}
                        className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        Send another inquiry
                      </button>
                    </div>
                  </div>
                ) : !showContactForm ? (
                  <div className="text-center space-y-4">
                    <button 
                      onClick={() => setShowContactForm(true)}
                      className="gradient-button w-full"
                    >
                      Schedule Demo
                    </button>
                    <p className="text-sm text-gray-600">
                      Get a personalized demo and custom quote
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Schedule Your Demo</h3>
                      <button
                        onClick={() => setShowContactForm(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    {contactError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {contactError}
                      </div>
                    )}
                    
                    {termsError && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                        {termsError}
                      </div>
                    )}
                    
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="name"
                          value={contactData.name}
                          onChange={handleContactChange}
                          placeholder="Your name"
                          required
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        />
                        <input
                          type="email"
                          name="email"
                          value={contactData.email}
                          onChange={handleContactChange}
                          placeholder="Work email"
                          required
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                        />
                      </div>
                      
                      <input
                        type="text"
                        name="company"
                        value={contactData.company}
                        onChange={handleContactChange}
                        placeholder="Company name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      />
                      
                      <textarea
                        name="message"
                        value={contactData.message}
                        onChange={handleContactChange}
                        placeholder="Tell us about your needs..."
                        rows={3}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm resize-none"
                      />
                      
                      <div className="flex items-start gap-2">
                        <input
                          id="acceptTerms"
                          name="acceptTerms"
                          type="checkbox"
                          checked={contactData.acceptTerms}
                          onChange={handleContactChange}
                          className="h-4 w-4 text-blue-600 focus:ring-purple-500 border-gray-300 rounded mt-0.5"
                        />
                        <label htmlFor="acceptTerms" className="text-xs text-gray-600 cursor-pointer">
                          I accept the{' '}
                          <Link 
                            href="/privacy" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-purple-700 underline"
                          >
                            Privacy Policy
                          </Link>
                          {' '}and{' '}
                          <Link 
                            href="/terms" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-purple-700 underline"
                          >
                            Terms of Service
                          </Link>
                        </label>
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting || !contactData.acceptTerms}
                        className="w-full gradient-button py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Schedule Demo'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div className="modern-card p-8 text-center">
                <div className="text-gray-500 mb-4">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Fill in your details to see your ROI calculation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}