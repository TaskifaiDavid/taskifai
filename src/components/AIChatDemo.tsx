"use client"

import { useState } from 'react'

export default function AIChatDemo() {
  const [messages] = useState([
    {
      type: 'user',
      text: 'What products sold best in France last month?'
    },
    {
      type: 'ai',
      text: 'Based on your reseller data, here are the top 3 products in France for last month:\n\n1. **Fragrance A** - 2,847 units (+22% MoM)\n2. **Serum B** - 1,923 units (+18% MoM)\n3. **Mask C** - 1,401 units (+15% MoM)\n\nTotal France sales increased 19% compared to the previous month. The beauty category is showing strong growth across all regions.'
    },
    {
      type: 'user',
      text: 'How did March 2024 compare to March 2025?'
    },
    {
      type: 'ai',
      text: 'Here\'s the year-over-year comparison for March 2024 vs March 2025:\n\n**Overall Performance:**\n• **Total Revenue**: €2.8M (+34% YoY)\n• **Units Sold**: 47,200 (+28% YoY)\n• **Average Order Value**: €59 (+5% YoY)\n\n**Regional Highlights:**\n• **France**: +42% growth, led by new product launches\n• **Germany**: +31% recovery after Q4 2024 challenges\n• **UK**: +18% steady growth across all categories\n\n**Key Trends:**\n• Premium skincare segment up 65% YoY\n• Online sales channel grew 89% vs retail +12%\n• Subscription model contributed 23% of total revenue\n\nMarch 2025 shows strong momentum with particularly impressive growth in digital channels and premium products.'
    }
  ])


  return (
    <section id="demo" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-blue-50/60 to-purple-50/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50/40 via-transparent to-cyan-50/40"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600">AI-Powered</span>
            <span className="text-gray-900"> Insights</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ask questions about your data in plain English and get instant, intelligent responses
          </p>
        </div>

        <div className="modern-card overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-blue-50/30 border-2 border-blue-100">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                <div className="w-3 h-3 bg-white/40 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-white font-normal">AI Analytics Chat</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-8 h-96 overflow-y-auto bg-gray-50/50">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-sm rounded-2xl p-4 shadow-lg ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}>
                    <div className="flex items-start gap-3">
                      {message.type === 'ai' && (
                        <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      )}
                      <div className="whitespace-pre-line text-sm leading-relaxed">{message.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-6 bg-white/80">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask about your sales data..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm"
                disabled
              />
              <button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl opacity-50 cursor-not-allowed shadow-lg"
                disabled
              >
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              * This is a demo interface. The actual AI chat will be fully interactive.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}