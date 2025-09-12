"use client"

import { useState } from "react"
import LazyImage from "./LazyImage"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual')
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small brands getting started with reseller analytics",
      setupFee: 5000,
      monthlyPrice: 799,
      annualPrice: 8390, // 12% discount
      resellers: "1-10 resellers",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      popular: false
    },
    {
      name: "Growth",
      description: "Most popular choice for scaling brands with growing reseller networks",
      setupFee: 6500,
      monthlyPrice: 1099,
      annualPrice: 11540, // 12% discount
      resellers: "11-25 resellers",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      popular: true
    },
    {
      name: "Scale",
      description: "Enterprise-grade solution for established brands with extensive networks",
      setupFee: 7500,
      monthlyPrice: 1299,
      annualPrice: 13650, // 12% discount
      resellers: "26+ resellers",
      gradient: "from-emerald-400 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      popular: false
    }
  ]

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const getPrice = (plan: typeof plans[0]) => {
    return billingPeriod === 'monthly' ? plan.monthlyPrice : plan.annualPrice
  }

  const getSavings = (plan: typeof plans[0]) => {
    return billingPeriod === 'annual' ? plan.monthlyPrice * 12 - plan.annualPrice : 0
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden">
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

          {/* Security Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1L5 6v5a9 9 0 0 0 5 8 9 9 0 0 0 5-8V6l-5-5z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Single-Tenant Security</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Dedicated Database</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Custom Built</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">
              Secure, Personalized Reseller Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-8">
            Get your own dedicated database environment with custom analytics built specifically for your resellers. 
            No shared infrastructure, no competitor data mixing, just pure insights tailored to your business.
          </p>
          
          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="modern-card p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
              <div className="text-2xl font-normal text-emerald-600 mb-2">Maximum Security</div>
              <div className="text-gray-700">Your data never shares infrastructure with competitors</div>
            </div>
            <div className="modern-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-2xl font-normal text-blue-600 mb-2">Custom Built</div>
              <div className="text-gray-700">Every dashboard configured for your specific needs</div>
            </div>
            <div className="modern-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-2xl font-normal text-purple-600 mb-2">White-Glove Service</div>
              <div className="text-gray-700">30-day hands-on implementation included</div>
            </div>
          </div>

          {/* CTA */}
          <div id="pricing" className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => {
                console.log('Schedule Demo button clicked in Pricing!')
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="gradient-button px-8 py-3 text-lg"
            >
              Schedule Demo
            </button>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingPeriod === 'annual'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 12%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const price = getPrice(plan)
            const savings = getSavings(plan)
            const totalFirstYear = plan.setupFee + price

            return (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className={`modern-card p-8 text-center hover:scale-105 transform transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.bgGradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${plan.gradient}`}></div>
                  </div>
                  
                  <h3 className="text-2xl font-normal text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                  {/* Setup Fee */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600">One-time setup</div>
                    <div className="text-2xl font-normal text-gray-900">{formatPrice(plan.setupFee)}</div>
                    <div className="text-xs text-gray-500">Custom development & migration included</div>
                  </div>

                  {/* Monthly/Annual Price */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      {billingPeriod === 'monthly' ? 'Monthly service' : 'Annual service'}
                    </div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl font-normal text-gray-900">{formatPrice(price)}</span>
                      <span className="text-gray-600">
                        {billingPeriod === 'monthly' ? '/month' : '/year'}
                      </span>
                    </div>
                    {billingPeriod === 'annual' && savings > 0 && (
                      <div className="text-sm text-green-600 mt-1">
                        Save {formatPrice(savings)} vs monthly
                      </div>
                    )}
                  </div>


                  {/* Resellers */}
                  <div className="mb-6">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${plan.gradient} text-white`}>
                      {plan.resellers}
                    </div>
                  </div>


                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* What's Included Section */}
        <div className="text-center mb-10">
          <div className="modern-card p-6 max-w-4xl mx-auto bg-gradient-to-br from-white via-emerald-50/20 to-green-50/30 border-2 border-emerald-100">
            <h3 className="text-xl font-normal text-gray-900 mb-6">
              <span className="text-emerald-600">What's Included in Every Plan</span>
            </h3>
            
            {/* First Row - 3 items */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Custom Data Parsers</h4>
                <p className="text-xs text-gray-600">Tailored for each reseller's unique data format</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Personalized Dashboard</h4>
                <p className="text-xs text-gray-600">Built specifically for your business needs</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Data Migration & Testing</h4>
                <p className="text-xs text-gray-600">Complete setup with thorough validation</p>
              </div>
            </div>
            
            {/* Second Row - 2 items centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Team Training & Documentation</h4>
                <p className="text-xs text-gray-600">Complete onboarding and support materials</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900 mb-1 text-sm">Email Support & Hosting</h4>
                <p className="text-xs text-gray-600">Reliable infrastructure and dedicated support</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-10">
          <div className="text-center">
            <h3 className="text-2xl font-normal text-gray-900 mb-4">
              Typical ROI in First Year
            </h3>
            <p className="text-gray-600 mb-8">
              Most clients see their investment pay for itself through improved reseller performance
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-normal text-blue-600 mb-2">3-5%</div>
                <div className="text-gray-600">Average increase in reseller revenue</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-normal text-purple-600 mb-2">40%</div>
                <div className="text-gray-600">Reduction in manual reporting time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-normal text-green-600 mb-2">25%</div>
                <div className="text-gray-600">Faster identification of top performers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}