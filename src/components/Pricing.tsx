"use client"

import { useState } from "react"
import ROICalculator from "./ROICalculator"
import LazyImage from "./LazyImage"

export default function Pricing() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false)
  
  const plans = [
    {
      name: "Starter",
      setupFee: "Starting from €15,000",
      monthlyFee: "€599/month",
      resellers: "1-10 resellers",
      timeSavings: "20-30 hours/month",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      popular: false
    },
    {
      name: "Growth",
      setupFee: "Starting from €30,000",
      monthlyFee: "€799/month",
      resellers: "11-20 resellers",
      timeSavings: "35-45 hours/month",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      popular: true
    },
    {
      name: "Enterprise",
      setupFee: "Starting from €50,000",
      monthlyFee: "€999/month",
      resellers: "21-50 resellers",
      timeSavings: "50+ hours/month",
      gradient: "from-emerald-400 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      popular: false
    }
  ]


  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/30 via-transparent to-gray-50/40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Social Proof Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Growing Brands</h3>
          
          {/* Partner Logo */}
          <div className="flex justify-center mb-12">
            <a 
              href="https://www.bibbi-parfum.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-105"
            >
              <div className="w-64 h-40 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <LazyImage 
                  src="/bibbi-logo.png" 
                  alt="BIBBI Parfum logo - Luxury fragrance brand using TaskifAI reseller analytics platform for data management" 
                  width={256}
                  height={160}
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Investment & ROI</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-8">
            Save hours monthly with automated reseller data processing. See your ROI within the first quarter.
          </p>
          
          {/* Value propositions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="modern-card p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200">
              <div className="text-2xl font-bold text-emerald-600 mb-2">95% Time Savings</div>
              <div className="text-gray-700">Eliminate manual data cleanup</div>
            </div>
            <div className="modern-card p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">Real-time Insights</div>
              <div className="text-gray-700">Make decisions with current data</div>
            </div>
            <div className="modern-card p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
              <div className="text-2xl font-bold text-blue-600 mb-2">AI-Powered</div>
              <div className="text-gray-700">Chat interface for instant answers</div>
            </div>
          </div>

          {/* Multiple CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => {
                console.log('Schedule Demo button clicked in Pricing!')
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="gradient-button px-8 py-3 text-lg"
            >
              Schedule Demo
            </button>
            <button 
              onClick={() => {
                console.log('Calculate ROI button clicked in Pricing!')
                setIsROICalculatorOpen(true)
              }}
              className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-xl text-lg font-semibold hover:border-purple-400 hover:text-blue-600 transition-all duration-300"
            >
              Calculate ROI
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`modern-card p-8 text-center hover:scale-105 transform transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500 ring-opacity-50' : ''}`}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.bgGradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${plan.gradient}`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                
                {/* Time Savings Highlight */}
                <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
                  <div className="text-lg font-bold text-emerald-600 mb-1">
                    Save {plan.timeSavings}
                  </div>
                  <div className="text-sm text-gray-600">Manual work eliminated</div>
                </div>
                
                <div className="mb-6">
                  {/* Complete Solution label */}
                  <div className="text-gray-600 text-sm mb-2">Complete Solution</div>
                  {/* Implementation investment - Primary emphasis */}
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {plan.setupFee}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    Custom development, setup & migration included
                  </div>
                  
                  {/* Monthly service */}
                  <div className="text-gray-500 text-sm mb-1">Monthly service</div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    {plan.monthlyFee}
                  </div>
                  
                </div>
                
                <div className="mb-8">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${plan.gradient} text-white`}>
                    {plan.resellers}
                  </div>
                </div>
                

                <button className="w-full bg-white text-gray-800 border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-purple-400 hover:text-blue-600 transition-all duration-300">
                  Get Custom Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="text-center mb-10">
          <div className="modern-card p-6 max-w-4xl mx-auto bg-gradient-to-br from-white via-emerald-50/20 to-green-50/30 border-2 border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
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

        {/* Additional Services */}
        <div className="text-center">
          <div className="modern-card p-8 max-w-2xl mx-auto bg-gradient-to-br from-white via-orange-50/20 to-yellow-50/30 border-2 border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              <span className="text-accent-orange">Additional Services</span>
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span><strong>Additional reseller parser:</strong> €1,500 each</span>
              </div>
              <div className="text-sm text-gray-600 mt-4">
                Need more resellers than Enterprise supports? Contact us for custom enterprise solutions.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator Modal */}
      <ROICalculator 
        isOpen={isROICalculatorOpen}
        onClose={() => setIsROICalculatorOpen(false)}
      />
    </section>
  )
}