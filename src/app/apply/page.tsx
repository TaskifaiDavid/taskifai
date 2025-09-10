import type { Metadata } from 'next'
import SocialMediaApplicationForm from '@/components/SocialMediaApplicationForm'

export const metadata: Metadata = {
  title: 'Apply - Content Creator & Brand Builder | TaskifAI',
  description: 'Apply for the Content Creator & Brand Builder role at TaskifAI with 15% revenue share and equity.',
  robots: 'noindex, nofollow', // Hidden page, no search indexing
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/80 via-purple-50/60 to-blue-50/80">
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-50/40 via-transparent to-pink-50/40"></div>
      
      <div className="relative z-10 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">Content Creator & Brand Builder</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600">Application</span>
            </h1>
            <p className="text-xl text-gray-700 mb-4 font-medium">
              15% Revenue Share + Equity • Malmö • Partnership Role
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Help us build TaskifAI into a trusted brand voice on LinkedIn and TikTok, 
              turning complex reseller analytics into engaging, converting content.
            </p>
          </div>

          {/* Application Form */}
          <SocialMediaApplicationForm />
        </div>
      </div>
    </div>
  )
}