import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found - TaskifAI',
  description: 'Sorry, the page you are looking for does not exist. Return to TaskifAI homepage.',
  robots: 'noindex, nofollow',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gray-200">404</h1>
          <div className="h-1 w-16 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-200 transform hover:scale-105"
          >
            Return Home
          </Link>
          
          <div className="text-sm text-gray-500">
            or{' '}
            <Link 
              href="/contact" 
              className="text-purple-600 hover:text-purple-500 font-medium"
            >
              contact us for help
            </Link>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="space-y-2">
            <Link href="/features" className="block text-purple-600 hover:text-purple-500">
              Features
            </Link>
            <Link href="/excel-automation-guide" className="block text-purple-600 hover:text-purple-500">
              Excel Automation Guide
            </Link>
            <Link href="/reseller-analytics-comparison" className="block text-purple-600 hover:text-purple-500">
              Analytics Comparison
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}