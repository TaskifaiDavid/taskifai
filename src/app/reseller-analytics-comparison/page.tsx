'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResellerAnalyticsComparison() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const comparisonData = [
    {
      feature: 'Implementation Time',
      taskifai: '2-4 weeks',
      traditional: '6-12 months',
      excel: 'Ongoing manual work',
      custom: '12-18+ months'
    },
    {
      feature: 'Data Processing Speed',
      taskifai: '2-5 minutes per reseller',
      traditional: '2-4 hours per file',
      excel: '3-6 hours per file',
      custom: 'Depends on development'
    },
    {
      feature: 'Accuracy Rate',
      taskifai: '99.5% accurate',
      traditional: '85-90% accurate',
      excel: '60-80% accurate',
      custom: 'Variable'
    },
    {
      feature: 'Monthly Cost',
      taskifai: '€1,500 - €3,500',
      traditional: '€5,000 - €15,000',
      excel: 'Hidden costs $2,000+',
      custom: '€10,000+ development'
    }
  ];

  const faqItems = [
    {
      question: "Which reseller analytics solution is best for growing brands?",
      answer: "For growing brands with 5-100 resellers, TaskifAI provides the optimal balance of functionality, speed, and cost-effectiveness. It offers enterprise-grade features without the complexity and cost of traditional BI platforms."
    },
    {
      question: "How does TaskifAI compare to building a custom solution?",
      answer: "Custom solutions take 12-18+ months to develop and cost €50,000-€200,000+. TaskifAI provides the same functionality with 2-4 week implementation and predictable monthly costs, plus ongoing improvements and support."
    },
    {
      question: "Can TaskifAI handle the same volume as enterprise solutions?",
      answer: "Yes! TaskifAI processes thousands of reseller files efficiently. Our AI-powered approach actually scales better than traditional solutions because it learns and improves with more data."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
            <span className="gradient-text">Choose the Right Reseller Analytics Platform</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Compare TaskifAI with traditional BI tools, Excel workflows, and custom solutions to find the best fit for your growing brand
          </p>
          <Link 
            href="/#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            See TaskifAI in Action
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
            Platform <span className="gradient-text">Comparison</span> Matrix
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full modern-card">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <th className="text-left p-6 text-lg font-normal text-gray-900">Feature</th>
                  <th className="text-center p-6 text-lg font-normal text-blue-600">TaskifAI</th>
                  <th className="text-center p-6 text-lg font-normal text-gray-600">Traditional BI</th>
                  <th className="text-center p-6 text-lg font-normal text-gray-600">Excel Manual</th>
                  <th className="text-center p-6 text-lg font-normal text-gray-600">Custom Build</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6 font-normal text-gray-900">{row.feature}</td>
                    <td className="p-6 text-center font-normal text-blue-600">{row.taskifai}</td>
                    <td className="p-6 text-center text-gray-600">{row.traditional}</td>
                    <td className="p-6 text-center text-gray-600">{row.excel}</td>
                    <td className="p-6 text-center text-gray-600">{row.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* In-Depth Analysis */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
            <span className="gradient-text">Detailed</span> Platform Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="modern-card p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-normal text-blue-700 mb-6">🏆 TaskifAI - AI-Powered Analytics</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">2-4 week implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">99.5% accuracy with AI learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">€1,500-€3,500/month predictable cost</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time processing and insights</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Best for:</strong> Growing brands with 5-100 resellers who want enterprise capabilities without the complexity and cost of traditional solutions.
              </p>
            </div>

            <div className="modern-card p-8 border-l-4 border-gray-400">
              <h3 className="text-2xl font-normal text-gray-700 mb-6">🏢 Traditional BI Platforms</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">6-12 month implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">85-90% accuracy (manual rules)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">€5,000-€15,000/month + consulting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700">Complex setup, ongoing maintenance</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>Best for:</strong> Large enterprises with dedicated IT teams and complex, multi-departmental analytics needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            Choosing the Right Reseller Analytics Solution
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="modern-card overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left focus:outline-none focus:bg-gray-50"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-normal text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div className={`transform transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            Ready to See TaskifAI in Action?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Get a personalized demo showing how TaskifAI handles your specific reseller data challenges
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link 
              href="/#contact"
              className="inline-block bg-white text-purple-600 font-medium py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Demo Call
            </Link>
            <Link 
              href="/excel-automation-guide"
              className="inline-block border-2 border-white text-white font-medium py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Learn About Automation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}