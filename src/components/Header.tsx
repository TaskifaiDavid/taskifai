"use client"

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import ROICalculator from './ROICalculator'
import { useSwipe } from '@/hooks/useSwipe'
import { HapticFeedback } from '@/utils/haptics'

export default function Header() {
  const [isROICalculatorOpen, setIsROICalculatorOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Swipe gestures for mobile menu
  const swipeHandlers = useSwipe({
    onSwipedLeft: () => {
      // Close mobile menu on swipe left
      if (isMobileMenuOpen) {
        HapticFeedback.light() // Add haptic feedback for swipe close
        setIsMobileMenuOpen(false)
      }
    },
    onSwipedRight: () => {
      // Open mobile menu on swipe right from left edge
      if (!isMobileMenuOpen && window.innerWidth <= 768) {
        HapticFeedback.light() // Add haptic feedback for swipe open
        setIsMobileMenuOpen(true)
      }
    },
    delta: 100 // Require 100px swipe distance
  })

  useEffect(() => {
    // Handle hash navigation when returning to home page
    if (pathname === '/' && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname])

  const navigateToSection = (sectionId: string) => {
    HapticFeedback.selection() // Add haptic feedback for mobile navigation
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
    if (pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home page with hash, useEffect will handle scrolling
      router.push(`/#${sectionId}`)
    }
  }

  const scrollToContact = () => {
    console.log('Contact button clicked!')
    navigateToSection('contact')
  }

  const scrollToProcess = () => {
    console.log('Process button clicked!')
    navigateToSection('process')
  }

  const scrollToDemo = () => {
    console.log('Demo button clicked!')
    navigateToSection('demo')
  }

  const scrollToFAQ = () => {
    console.log('FAQ button clicked!')
    navigateToSection('faq')
  }

  const navigateHome = () => {
    console.log('Home button clicked!')
    HapticFeedback.selection() // Add haptic feedback for home navigation
    setIsMobileMenuOpen(false) // Close mobile menu when navigating
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const openROICalculator = () => {
    console.log('ROI Calculator button clicked!')
    HapticFeedback.medium() // Add haptic feedback for opening calculator
    setIsROICalculatorOpen(true)
  }

  const getNavButtonClass = (isActive: boolean = false) => {
    const baseClass = "font-medium transition-colors duration-200"
    return isActive 
      ? `${baseClass} text-blue-600 font-semibold`
      : `${baseClass} text-gray-700 hover:text-blue-600`
  }

  return (
    <header 
      className="glass-card sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20"
      {...(!isMobileMenuOpen ? swipeHandlers : {})}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main navigation">
          <div className="flex items-center">
            <div className="text-2xl font-bold gradient-text">TaskifAI</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={navigateHome}
              className={getNavButtonClass(pathname === '/')}
              aria-label="Navigate to home page"
            >
              Home
            </button>
            <button 
              onClick={scrollToProcess}
              className={getNavButtonClass()}
              aria-label="Navigate to process section"
            >
              Process
            </button>
            <button 
              onClick={scrollToDemo}
              className={getNavButtonClass()}
              aria-label="Navigate to demo section"
            >
              Demo
            </button>
            <button 
              onClick={openROICalculator}
              className={getNavButtonClass()}
              aria-label="Open ROI calculator"
            >
              ROI Calculator
            </button>
            <button 
              onClick={scrollToFAQ}
              className={getNavButtonClass()}
              aria-label="Navigate to FAQ section"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToContact}
              className={getNavButtonClass()}
              aria-label="Navigate to contact section"
            >
              Contact
            </button>
            <button
              onClick={scrollToContact}
              className="gradient-button"
              aria-label="Book introduction call"
            >
              Book intro call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                HapticFeedback.light() // Add haptic feedback for menu toggle
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 mobile-touch-target"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl" 
          role="menu"
          {...swipeHandlers}
        >
          <div className="px-6 py-4 space-y-3">
            <button 
              onClick={navigateHome}
              className={`mobile-nav-button ${getNavButtonClass(pathname === '/')}`}
              role="menuitem"
              aria-label="Navigate to home page"
            >
              Home
            </button>
            <button 
              onClick={scrollToProcess}
              className={`mobile-nav-button ${getNavButtonClass()}`}
              role="menuitem"
              aria-label="Navigate to process section"
            >
              Process
            </button>
            <button 
              onClick={scrollToDemo}
              className={`mobile-nav-button ${getNavButtonClass()}`}
              role="menuitem"
              aria-label="Navigate to demo section"
            >
              Demo
            </button>
            <button 
              onClick={openROICalculator}
              className={`mobile-nav-button ${getNavButtonClass()}`}
              role="menuitem"
              aria-label="Open ROI calculator"
            >
              ROI Calculator
            </button>
            <button 
              onClick={scrollToFAQ}
              className={`mobile-nav-button ${getNavButtonClass()}`}
              role="menuitem"
              aria-label="Navigate to FAQ section"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToContact}
              className={`mobile-nav-button ${getNavButtonClass()}`}
              role="menuitem"
              aria-label="Navigate to contact section"
            >
              Contact
            </button>
            <div className="pt-3 border-t border-gray-200">
              <button
                onClick={scrollToContact}
                className="block w-full gradient-button text-center"
                role="menuitem"
                aria-label="Book introduction call"
              >
                Book intro call
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* ROI Calculator Modal */}
      <ROICalculator 
        isOpen={isROICalculatorOpen}
        onClose={() => setIsROICalculatorOpen(false)}
      />
    </header>
  )
}