"use client"

import { useState } from 'react'

interface FAQData {
  id: string
  question: string
  answer: string
}

const faqData: FAQData[] = [
  {
    id: "1",
    question: "What is the platform and how does it help my business?",
    answer: "Our platform transforms chaotic reseller spreadsheets into clean, actionable insights that help you make better business decisions. Instead of spending hours manually processing Excel files from different resellers, you get automated dashboards and can ask questions about your data in plain English. This means you can quickly identify top-performing products, spot inventory issues, and understand which resellers are driving the most revenue."
  },
  {
    id: "2",
    question: "How quickly can I see results?",
    answer: "You'll see meaningful insights within 30 minutes of uploading your first file. Our AI processes your data in 5-15 minutes, and then you immediately get access to clean dashboards and can start asking questions about your business. Most customers discover actionable insights on their first day."
  },
  {
    id: "3",
    question: "Do I need technical expertise to use the platform?",
    answer: "Not at all! The platform is designed for business users, not tech experts. You simply upload your Excel or CSV files, and our AI automatically understands your data structure. You can then ask questions like 'Which reseller sold the most last month?' in natural language - no technical skills required."
  },
  {
    id: "4",
    question: "What file formats do you support?",
    answer: "We support all common formats: Excel (.xlsx, .xls), CSV, and other spreadsheet formats. Our AI automatically adapts to different reseller data structures, so even if your partners use different formats, everything gets unified into one clear view."
  },
  {
    id: "5",
    question: "What happens as my business grows?",
    answer: "The platform scales with you. If you exceed your reseller or data limits, we'll notify you in advance so you can upgrade smoothly. We also offer enterprise pricing for larger organizations with 100+ partners. Your investment grows with your business success."
  },
  {
    id: "6",
    question: "How secure is my business data?",
    answer: "Your data security is our top priority. We use Supabase's enterprise-grade infrastructure with SOC 2 Type 2 compliance (audited annually), AES-256 encryption at rest, and TLS 1.2+ encryption in transit. The platform includes PostgreSQL Row-Level Security (RLS) and maintains 99.9% uptime. HIPAA compliance is also available for healthcare applications. Only you and your authorized team members can access your data."
  },
  {
    id: "7",
    question: "What support do I get?",
    answer: "All plans include email support with 24-hour response times during business days. We're here to help you get the most value from your data, whether that's setting up new dashboards, understanding insights, or troubleshooting any issues. Enterprise clients get dedicated account managers."
  },
  {
    id: "8",
    question: "How does the AI chat help my business decisions?",
    answer: "Instead of digging through spreadsheets, you can ask business questions directly: 'Which products are selling best this quarter?' or 'Show me resellers with declining sales.' The AI instantly provides answers with visual charts, helping you make data-driven decisions in seconds rather than hours."
  },
  {
    id: "9",
    question: "Can I export data and share reports?",
    answer: "Absolutely! You can export clean data, charts, and reports in Excel, PDF, or PowerPoint formats. This makes it easy to share insights with your team, present to stakeholders, or integrate findings into existing business processes. Your data remains accessible and actionable."
  }
]

interface FAQItemProps {
  faq: FAQData
  isCompact?: boolean
}

function FAQItem({ faq, isCompact = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="modern-card rounded-xl overflow-hidden border border-purple-100">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <div className="flex items-start gap-4 flex-1">
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
            Q
          </div>
          <h3 className={`font-semibold text-gray-800 pr-4 ${isCompact ? 'text-base' : 'text-lg'}`}>
            {faq.question}
          </h3>
        </div>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div
          id={`faq-answer-${faq.id}`}
          className="px-6 pb-6 border-t border-purple-100/50"
        >
          <div className="flex items-start gap-4 pt-4">
            <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
              A
            </div>
            <div className="flex-1">
              <p className={`text-gray-700 leading-relaxed ${isCompact ? 'text-sm' : 'text-base'}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function HomepageFAQ() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const initialQuestions = faqData.slice(0, 3)
  const additionalQuestions = faqData.slice(3)
  const questionsToShow = isExpanded ? faqData : initialQuestions

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
    <section id="faq" className="py-16 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-blue-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-pink-50/20 via-transparent to-purple-50/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Common </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick answers to help you understand how our platform can transform your reseller data management.
          </p>
        </header>

        {/* FAQ Items */}
        <div className="space-y-3 mb-8">
          {questionsToShow.map((faq) => (
            <FAQItem key={faq.id} faq={faq} isCompact={true} />
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-purple-200 rounded-xl text-purple-700 font-medium hover:bg-purple-50 hover:border-purple-300 transition-all duration-200 shadow-sm"
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                <span>View {additionalQuestions.length} more questions</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
    </>
  )
}