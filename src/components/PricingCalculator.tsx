"use client"

import { useState } from "react"
import LazyImage from "./LazyImage"

export default function PricingCalculator() {
  const [resellerCount, setResellerCount] = useState(5)
  const [hasSetupFee, setHasSetupFee] = useState(true)
  const [isAnnualBilling, setIsAnnualBilling] = useState(false)

  // Calculate pricing
  const baseResellerLimit = 5
  const extraResellers = Math.max(0, resellerCount - baseResellerLimit)
  const extraResellerCost = extraResellers * 120

  const setupFee = 4000
  const baseMonthlyCost = 899
  const noSetupMonthlyCost = 1399
  const annualDiscount = 0.15 // 15% discount for annual billing
  
  const monthlyTotal = baseMonthlyCost + extraResellerCost
  const noSetupMonthlyTotal = noSetupMonthlyCost + extraResellerCost
  
  const currentMonthly = hasSetupFee ? monthlyTotal : noSetupMonthlyTotal
  
  // Annual calculations with discount
  const annualCostWithSetup = isAnnualBilling 
    ? Math.round(monthlyTotal * 12 * (1 - annualDiscount))
    : monthlyTotal * 12
  const annualCostWithoutSetup = isAnnualBilling
    ? Math.round(noSetupMonthlyTotal * 12 * (1 - annualDiscount))
    : noSetupMonthlyTotal * 12
  
  const yearOneCost = hasSetupFee 
    ? (isAnnualBilling ? annualCostWithSetup : monthlyTotal * 12) + setupFee
    : (isAnnualBilling ? annualCostWithoutSetup : noSetupMonthlyTotal * 12)
  
  const ongoingYearlyCost = hasSetupFee ? annualCostWithSetup : annualCostWithoutSetup
  
  // Calculate savings
  const regularAnnualCost = hasSetupFee ? monthlyTotal * 12 : noSetupMonthlyTotal * 12
  const annualSavings = isAnnualBilling ? regularAnnualCost - ongoingYearlyCost : 0

  // Calculate time savings
  const hoursPerResellerPerWeek = 2.5
  const weeksPerMonth = 4.33
  const automationEfficiency = 0.85
  const totalHoursPerMonth = resellerCount * hoursPerResellerPerWeek * weeksPerMonth
  const hoursSaved = Math.round(totalHoursPerMonth * automationEfficiency)

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/30 via-transparent to-gray-50/40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Social Proof Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-normal text-gray-900 mb-8">Trusted by Growing Brands</h3>
          
          {/* Partner Logo */}
          <div className="flex justify-center mb-12">
            <a 
              href="https://www.bibbi-parfum.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
            >
              <div className="w-46 h-24 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 bg-transparent">
                <LazyImage 
                  src="/bibbi-logo.png" 
                  alt="BIBBI Parfum logo - Luxury fragrance brand using TaskifAI reseller analytics platform for data management" 
                  width={184}
                  height={92}
                  className="w-full h-full object-contain"
                  priority={false}
                />
              </div>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
              <span className="font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="font-medium">Enterprise Security</span>
            </div>
          </div>
        </div>

        {/* Service Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Reseller Analytics Platform</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium mb-8">
            Complete workflow automation from data chaos to strategic insights. Transform how your business handles reseller data.
          </p>
        </div>

        {/* Pricing Calculator */}
        <div className="max-w-4xl mx-auto">
          <div className="modern-card p-8 bg-white shadow-xl border border-gray-200">
            
            {/* Configuration Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-normal text-gray-900 mb-6 text-center">Configure Your Platform</h3>
              
              {/* Reseller Count Slider */}
              <div className="mb-8">
                <label className="block text-lg font-normal text-gray-700 mb-4">
                  Number of Resellers: <span className="text-blue-600">{resellerCount}</span>
                  {resellerCount >= 50 && <span className="text-sm text-gray-500 ml-2">(Custom pricing available)</span>}
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={resellerCount}
                    onChange={(e) => setResellerCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1</span>
                    <span>25</span>
                    <span>50+</span>
                  </div>
                </div>
              </div>

              {/* Billing Frequency */}
              <div className="mb-8">
                <label className="block text-lg font-normal text-gray-700 mb-4">Billing:</label>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="monthly-billing"
                      name="billing-frequency"
                      checked={!isAnnualBilling}
                      onChange={() => setIsAnnualBilling(false)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="monthly-billing" className="ml-2 text-gray-700 cursor-pointer">
                      <span className="font-medium">Monthly</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="annual-billing"
                      name="billing-frequency"
                      checked={isAnnualBilling}
                      onChange={() => setIsAnnualBilling(true)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="annual-billing" className="ml-2 text-gray-700 cursor-pointer">
                      <span className="font-medium">Annual</span>
                      <span className="inline-block ml-2 px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">Save 15%</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Setup Preference */}
              <div className="mb-8">
                <label className="block text-lg font-normal text-gray-700 mb-4">Setup Preference:</label>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="with-setup"
                      name="setup-preference"
                      checked={hasSetupFee}
                      onChange={() => setHasSetupFee(true)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="with-setup" className="ml-3 text-gray-700 cursor-pointer">
                      <span className="font-medium">Standard Setup</span> - {formatPrice(setupFee)} + {isAnnualBilling ? `${formatPrice(annualCostWithSetup)}/year` : `${formatPrice(baseMonthlyCost)}/month`}
                      <span className="inline-block ml-2 px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">Recommended</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="no-setup"
                      name="setup-preference"
                      checked={!hasSetupFee}
                      onChange={() => setHasSetupFee(false)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="no-setup" className="ml-3 text-gray-700 cursor-pointer">
                      <span className="font-medium">Skip Setup</span> - {isAnnualBilling ? `${formatPrice(annualCostWithoutSetup)}/year` : `${formatPrice(noSetupMonthlyCost)}/month`}
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Results */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-normal text-gray-900 mb-6 text-center">Your Investment</h3>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    {hasSetupFee && (
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700">Setup:</span>
                        <span className="text-xl font-normal text-gray-900">{formatPrice(setupFee)}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700">{isAnnualBilling ? 'Annual:' : 'Monthly:'}</span>
                      <span className="text-xl font-normal text-gray-900">
                        {isAnnualBilling ? formatPrice(ongoingYearlyCost) : formatPrice(currentMonthly)}
                        {isAnnualBilling ? '/year' : '/month'}
                      </span>
                    </div>
                    {extraResellers > 0 && (
                      <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                        <span>Extra resellers ({extraResellers}):</span>
                        <span>{formatPrice(extraResellerCost)}/month</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-700">Year 1 Total:</span>
                      <span className="text-2xl font-normal text-blue-600">{formatPrice(yearOneCost)}</span>
                    </div>
                    {!isAnnualBilling && (
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <span>Ongoing Annual:</span>
                        <span>{formatPrice(ongoingYearlyCost)}</span>
                      </div>
                    )}
                    {isAnnualBilling && annualSavings > 0 && (
                      <div className="flex justify-between items-center text-sm text-emerald-600">
                        <span>Annual Savings:</span>
                        <span className="font-medium">{formatPrice(annualSavings)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Time Savings */}
              <div className="text-center text-sm text-gray-600 mb-6">
                <span className="inline-flex items-center">
                  ⏰ <span className="ml-1">Potential time saved: <strong>~{hoursSaved} hours/month</strong></span>
                </span>
                <div className="text-xs text-gray-500 mt-1">
                  *Based on {resellerCount} resellers, {hoursPerResellerPerWeek} hours cleaning per reseller per week
                </div>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <button 
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="gradient-button px-8 py-3 text-lg font-medium"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="text-center mt-16">
          <div className="modern-card p-8 max-w-5xl mx-auto bg-gradient-to-br from-white via-emerald-50/20 to-green-50/30 border-2 border-emerald-100">
            <h3 className="text-2xl font-normal text-gray-900 mb-8">
              <span className="text-emerald-600">What's Always Included</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-normal text-gray-900 mb-2">Custom Data Parsers</h4>
                <p className="text-gray-600 text-sm">Tailored for each reseller's unique data format</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="font-normal text-gray-900 mb-2">Real-time Dashboard</h4>
                <p className="text-gray-600 text-sm">Built specifically for your business needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-normal text-gray-900 mb-2">AI Chat Interface</h4>
                <p className="text-gray-600 text-sm">Ask questions in natural language</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-normal text-gray-900 mb-2">Complete Implementation</h4>
                <p className="text-gray-600 text-sm">Setup, training, and onboarding support</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-normal text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-gray-600 text-sm">Email support, hosting, and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}