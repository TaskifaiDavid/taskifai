"use client"

import { useState } from 'react'
import ROICalculator from './ROICalculator'

export default function Header() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false)
  const scrollToContact = () => {
    console.log('Contact button clicked!')
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProcess = () => {
    console.log('Process button clicked!')
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToDemo = () => {
    console.log('Demo button clicked!')
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openROICalculator = () => {
    console.log('ROI Calculator button clicked!')
    setIsROICalculatorOpen(true)
  }

  return (
    <header className="glass-card sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">TaskifAI</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={scrollToProcess}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Process
            </button>
            <button 
              onClick={scrollToDemo}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Demo
            </button>
            <button 
              onClick={openROICalculator}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              ROI Calculator
            </button>
            <button 
              onClick={scrollToContact}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={scrollToContact}
              className="gradient-button"
            >
              Book intro call
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => {
                console.log('Mobile ROI Calculator button clicked!')
                setIsROICalculatorOpen(true)
              }}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 rounded-lg transition-colors duration-200"
            >
              ROI Calc
            </button>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all duration-200 shadow-lg"
            >
              Book call
            </button>
          </div>
        </nav>
      </div>
      
      {/* ROI Calculator Modal */}
      <ROICalculator 
        isOpen={isROICalculatorOpen}
        onClose={() => setIsROICalculatorOpen(false)}
      />
    </header>
  )
}