'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExcelAutomationGuide() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "How long does it take to automate Excel spreadsheet processing?",
      answer: "With TaskifAI, Excel automation setup typically takes 2-4 weeks for most businesses. This includes data mapping, testing, and training your team. Traditional automation solutions can take 6-12 months to implement."
    },
    {
      question: "Can AI really handle messy, inconsistent spreadsheet data?",
      answer: "Yes! TaskifAI's AI is specifically trained to handle common spreadsheet issues like inconsistent formatting, varying column structures, and data quality problems. It learns your specific data patterns and improves accuracy over time."
    },
    {
      question: "What's the ROI of automating spreadsheet processing?",
      answer: "Most TaskifAI customers see 10-15x ROI within the first year. With 95% time savings on data processing and elimination of manual errors, teams can focus on strategic analysis rather than data cleanup."
    },
    {
      question: "Will Excel automation work with our existing business processes?",
      answer: "TaskifAI integrates seamlessly with your current workflows. We work with your existing Excel files, email processes, and reporting schedules - no major process changes required."
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
            <span className="gradient-text">Stop Wasting Hours on Excel Spreadsheets</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Transform your manual Excel processes into automated workflows that save 95% of your time and eliminate human errors
          </p>
          <Link 
            href="/#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Automate Your Excel Work Today
          </Link>
        </div>
      </section>

      {/* Problem Deep-Dive */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
            The <span className="text-red-600">Hidden Costs</span> of Manual Excel Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="modern-card p-8">
                <h3 className="text-2xl font-normal text-gray-900 mb-4">Time Drain</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The average business professional spends <strong>4-6 hours per week</strong> on manual spreadsheet work. For growing brands managing reseller data, this can balloon to 15-20 hours weekly.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>Annual cost:</strong> $15,000-$25,000 per employee in lost productivity.
                </p>
              </div>
              
              <div className="modern-card p-8">
                <h3 className="text-2xl font-normal text-gray-900 mb-4">Error Multiplication</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Manual data entry has a <strong>1-5% error rate</strong>. With thousands of rows of reseller data, this creates compounding problems in reporting and decision-making.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <strong>Business impact:</strong> Wrong inventory decisions, missed opportunities, frustrated resellers.
                </p>
              </div>
            </div>
            
            <div className="modern-card p-8 bg-gradient-to-br from-red-50 to-orange-50">
              <h3 className="text-2xl font-normal text-red-700 mb-6">The Cascade of Complexity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-medium text-sm">1</div>
                  <p className="text-gray-700">Different resellers use different Excel templates</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-medium text-sm">2</div>
                  <p className="text-gray-700">Manual standardization takes hours per file</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-medium text-sm">3</div>
                  <p className="text-gray-700">Data inconsistencies multiply with each reseller</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-medium text-sm">4</div>
                  <p className="text-gray-700">Reports become unreliable, decisions suffer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
            Traditional vs <span className="gradient-text">AI-Powered</span> Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Approach */}
            <div className="modern-card p-8 border-l-4 border-red-500">
              <h3 className="text-2xl font-normal text-red-700 mb-6">Traditional Manual Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">Download reseller files</p>
                    <p className="text-gray-600">30-60 minutes per reseller</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">Manual standardization</p>
                    <p className="text-gray-600">2-4 hours per file</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">Data validation & cleanup</p>
                    <p className="text-gray-600">1-2 hours per file</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">Manual report creation</p>
                    <p className="text-gray-600">3-5 hours weekly</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-red-700 font-normal">Total: 15-20 hours per week</p>
                <p className="text-red-600">High error rate, inconsistent results</p>
              </div>
            </div>

            {/* AI-Powered Approach */}
            <div className="modern-card p-8 border-l-4 border-green-500">
              <h3 className="text-2xl font-normal text-green-700 mb-6">TaskifAI Automated Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">Automatic file processing</p>
                    <p className="text-gray-600">2-5 minutes per reseller</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">AI-powered standardization</p>
                    <p className="text-gray-600">Instant, learns patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">Intelligent data validation</p>
                    <p className="text-gray-600">99.5% accuracy rate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-normal text-gray-900">Real-time dashboards</p>
                    <p className="text-gray-600">Always up-to-date insights</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-700 font-normal">Total: 1-2 hours per week</p>
                <p className="text-green-600">95% time savings, consistent results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-center mb-16">
            How TaskifAI <span className="gradient-text">Automates</span> Your Excel Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-normal text-gray-900">The 5 Most Time-Consuming Manual Tasks</h3>
              
              <div className="space-y-6">
                <div className="modern-card p-6">
                  <h4 className="text-xl font-normal text-gray-900 mb-3">1. Data Standardization</h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Manual:</strong> Reformatting columns, standardizing product names, fixing date formats
                  </p>
                  <p className="text-blue-700 font-normal">
                    <strong>TaskifAI:</strong> AI learns your naming conventions and applies them automatically
                  </p>
                </div>

                <div className="modern-card p-6">
                  <h4 className="text-xl font-normal text-gray-900 mb-3">2. Error Detection & Correction</h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Manual:</strong> Scanning for duplicate entries, missing data, calculation errors
                  </p>
                  <p className="text-blue-700 font-normal">
                    <strong>TaskifAI:</strong> Pattern recognition identifies and flags anomalies instantly
                  </p>
                </div>

                <div className="modern-card p-6">
                  <h4 className="text-xl font-normal text-gray-900 mb-3">3. Data Consolidation</h4>
                  <p className="text-gray-700 mb-4">
                    <strong>Manual:</strong> Copy-pasting from multiple files, managing version conflicts
                  </p>
                  <p className="text-blue-700 font-normal">
                    <strong>TaskifAI:</strong> Intelligent merging with conflict resolution and version tracking
                  </p>
                </div>
              </div>
            </div>
            
            <div className="modern-card p-8 bg-white">
              <h3 className="text-2xl font-normal text-gray-900 mb-6">ROI Calculator</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Manual processing time/week:</span>
                  <span className="font-normal">15 hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Hourly cost (including benefits):</span>
                  <span className="font-normal">$35</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">Monthly manual cost:</span>
                  <span className="font-normal text-red-600">$2,275</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700">TaskifAI monthly cost:</span>
                  <span className="font-normal">€1,500</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-green-50 px-4 rounded-lg">
                  <span className="text-green-700 font-normal">Monthly savings:</span>
                  <span className="text-green-700 font-normal text-xl">$775+</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-blue-50 px-4 rounded-lg">
                  <span className="text-blue-700 font-normal">Annual ROI:</span>
                  <span className="text-blue-700 font-normal text-xl">515%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            Frequently Asked Questions About Excel Automation
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
            Ready to Eliminate Excel Busywork?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Join growing brands who've automated their reseller data processing and saved hundreds of hours every month
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Link 
              href="/#contact"
              className="inline-block bg-white text-purple-600 font-medium py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Intro Call
            </Link>
            <Link 
              href="/"
              className="inline-block border-2 border-white text-white font-medium py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}