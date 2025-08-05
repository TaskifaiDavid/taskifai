"use client"

import { useState } from "react"
import ROICalculator from "./ROICalculator"
import LazyImage from "./LazyImage"

export default function Pricing() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false)
  
  const plans = [
    {
      name: "Starter",
      setupFee: "Starting from €20,000",
      monthlyFee: "€599/month",
      resellers: "1-10 resellers",
      timeSavings: "20-30 hours/month",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      popular: false
    },
    {
      name: "Growth",
      setupFee: "Starting from €35,000",
      monthlyFee: "€799/month",
      resellers: "11-20 resellers",
      timeSavings: "35-45 hours/month",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      popular: true
    },
    {
      name: "Enterprise",
      setupFee: "Starting from €55,000",
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
              <div className="text-2xl font-bold text-purple-600 mb-2">AI-Powered</div>
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
              className="bg-white text-gray-800 border-2 border-gray-300 px-8 py-3 rounded-xl text-lg font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300"
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
                  <div className="text-lg font-semibold text-purple-600 mb-4">
                    {plan.monthlyFee}
                  </div>
                  
                </div>
                
                <div className="mb-8">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${plan.gradient} text-white`}>
                    {plan.resellers}
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Custom data parsers for each reseller</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Personalized dashboard development</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Complete data migration & testing</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Team training & documentation</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Email support & hosting</span>
                  </div>
                </div>

                <button className="w-full bg-white text-gray-800 border-2 border-gray-300 px-6 py-3 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300">
                  Get Custom Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="modern-card p-8 max-w-2xl mx-auto bg-gradient-to-br from-white via-orange-50/20 to-yellow-50/30 border-2 border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              <span className="text-accent-orange">Additional Services</span>
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span><strong>Additional reseller parser:</strong> €2,000 each</span>
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