'use client';

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function HowItWorksDetailed() {
  const scrollToContact = () => {
    window.location.href = '/#contact'
  }

  const bookDemo = () => {
    window.location.href = '/#contact'
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">How AI-Powered Reseller Analytics Actually Works</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Go behind the scenes of automated business intelligence. Understand exactly how AI transforms chaotic reseller spreadsheets into reliable insights that drive better decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={bookDemo}
              className="gradient-button text-lg px-8 py-4"
            >
              See It In Action
            </button>
            <button
              onClick={() => {
document.getElementById('process-details')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-lg px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold"
            >
              Explore the Process
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="process-details" className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Introduction */}
        <div className="modern-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The Traditional Problem: Data Chaos</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Before understanding how AI solves reseller analytics, it's crucial to grasp why traditional approaches fail. Every reseller has unique systems, naming conventions, and reporting formats. What looks like simple spreadsheet consolidation quickly becomes a complex data engineering challenge.
          </p>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-3">The Cascade of Complexity</h3>
            <div className="space-y-3 text-red-700">
              <p>• <strong>Reseller A:</strong> "Nike Air Max 90" in column "Product_Name"</p>
              <p>• <strong>Reseller B:</strong> "AIR MAX90" in column "Item Description"</p>
              <p>• <strong>Reseller C:</strong> "AM90-BLK" in column "SKU_Detail"</p>
              <p className="font-medium">Same product, three completely different data structures.</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Multiply this by 25+ resellers, 500+ products, and monthly reporting cycles, and you have a data nightmare that consumes weeks of manual work and produces unreliable insights.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-purple-600">Why Traditional Solutions Fail</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Manual Mapping Approaches</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Requires constant maintenance as resellers change formats</li>
                <li>• Breaks with new products or naming variations</li>
                <li>• Cannot handle typos or abbreviated product names</li>
                <li>• Scales poorly beyond 10-15 resellers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Traditional ETL Tools</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Require technical expertise and months of setup</li>
                <li>• Rigid rules that don't adapt to variations</li>
                <li>• No contextual understanding of product relationships</li>
                <li>• Expensive implementation and ongoing maintenance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The AI Solution Breakdown */}
        <div className="modern-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How AI Changes Everything: The 4-Stage Process</h2>
          
          <div className="space-y-12">
            {/* Stage 1 */}
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Intelligent Data Ingestion</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Unlike rigid traditional systems, AI-powered ingestion understands context. It doesn't just read cell values—it comprehends the meaning and structure of entire spreadsheets.
                  </p>
                  
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">What Happens Behind the Scenes:</h4>
                    <div className="space-y-3 text-blue-800">
                      <p>• <strong>Schema Detection:</strong> AI identifies header patterns, data types, and table structures automatically</p>
                      <p>• <strong>Context Analysis:</strong> Machine learning recognizes product names, dates, and quantities regardless of column position</p>
                      <p>• <strong>Validation Rules:</strong> Built-in logic flags suspicious data (negative sales, impossible dates) for review</p>
                      <p>• <strong>Format Adaptation:</strong> Automatically handles Excel, CSV, Google Sheets, and custom formats</p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2">Real Example:</h5>
                    <p className="text-gray-700 text-sm">
                      When a reseller uploads "Q3_SalesData_FINAL.xlsx" with product names in column F and sales in column H, AI immediately recognizes this pattern—even if their previous files had different structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Smart Data Standardization</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This is where AI truly shines. Instead of rigid mapping rules, machine learning models understand product relationships, handle variations, and maintain consistency across all data sources.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-red-800 mb-2">Before AI (Manual Process)</h5>
                      <div className="text-red-700 text-sm space-y-1">
                        <p>• "Nike Air Max 90" → Manual lookup table</p>
                        <p>• "AIR MAX90" → Create new mapping rule</p>
                        <p>• "AM90-BLK" → Requires human interpretation</p>
                        <p>• Result: 20+ hours per month maintaining mappings</p>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">With AI (Automated)</h5>
                      <div className="text-green-700 text-sm space-y-1">
                        <p>• All variations → "Nike Air Max 90" automatically</p>
                        <p>• Learns from your product catalog</p>
                        <p>• Handles typos and abbreviations</p>
                        <p>• Result: 100% automated with 99.5% accuracy</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                    <h5 className="font-semibold text-yellow-800 mb-2">Advanced AI Capabilities:</h5>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• <strong>Fuzzy Matching:</strong> Connects "iPhone12" with "iPhone 12 Pro" intelligently</li>
                      <li>• <strong>Contextual Learning:</strong> Understands your specific product catalog and naming conventions</li>
                      <li>• <strong>Confidence Scoring:</strong> Flags uncertain matches for human review</li>
                      <li>• <strong>Continuous Improvement:</strong> Gets smarter with each file processed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Automated Insights Generation</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Raw data standardization is just the foundation. The real value comes from AI's ability to surface meaningful patterns, anomalies, and actionable insights automatically.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">Pattern Recognition</h4>
                      <p className="text-gray-700 mb-3">
                        AI identifies trends that human analysts would miss or take weeks to discover. Seasonal patterns, geographic preferences, and cross-reseller performance variations become immediately visible.
                      </p>
                      <div className="bg-blue-50 p-3 rounded text-sm text-blue-700">
                        <strong>Example:</strong> "Sales of Product X increased 40% at West Coast resellers but declined 15% at East Coast locations in the past 30 days."
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">Anomaly Detection</h4>
                      <p className="text-gray-700 mb-3">
                        Machine learning models automatically flag unusual data points that require attention—from potential data errors to significant business changes.
                      </p>
                      <div className="bg-green-50 p-3 rounded text-sm text-green-700">
                        <strong>Example:</strong> "Reseller ABC reported 500% increase in Product Y sales—flagged for verification (historical average: 50 units/month)."
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="font-semibold text-lg mb-2">Predictive Analytics</h4>
                      <p className="text-gray-700 mb-3">
                        Advanced models forecast future performance based on historical patterns, seasonality, and current trends across your entire reseller network.
                      </p>
                      <div className="bg-purple-50 p-3 rounded text-sm text-purple-700">
                        <strong>Example:</strong> "Based on current velocity and historical Q4 patterns, forecast shows 25% inventory shortage for Product Z by December."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="relative">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Intelligent Query Processing</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    The final piece transforms static dashboards into dynamic business intelligence. Natural language processing allows anyone on your team to ask complex questions and receive accurate, contextual answers instantly.
                  </p>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-lg mb-4">Real Conversation Examples:</h4>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-600 mb-2"><strong>Question:</strong> "Which resellers are underperforming on our new product line?"</p>
                        <p className="text-blue-600"><strong>AI Response:</strong> "5 resellers are below 75% of network average for Product Line X: RessellerA (45% of avg), ResellerB (52% of avg), ResellerC (61% of avg)... Here are specific action recommendations for each."</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <p className="text-gray-600 mb-2"><strong>Question:</strong> "What's driving the sales increase in the Southeast region?"</p>
                        <p className="text-blue-600"><strong>AI Response:</strong> "Southeast sales increased 32% driven by: Product Y (+45%), seasonal demand (+22%), and 2 new high-performing resellers. Product Y success correlates with promotional campaign launch on Sept 15th."</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-green-800 mb-2">Why This Matters for Business</h5>
                    <p className="text-green-700 text-sm">
                      Instead of waiting for weekly reports or spending hours in spreadsheets, decision-makers get instant answers to critical business questions. This transforms data from a historical record into a real-time strategic asset.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="modern-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">The Technology Stack Behind AI-Powered Analytics</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Understanding the underlying technology helps explain why AI-powered reseller analytics delivers dramatically better results than traditional approaches.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Machine Learning Components</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Natural Language Processing (NLP)</h4>
                  <p className="text-gray-700 text-sm">
                    Understands product names, descriptions, and business context across multiple languages and naming conventions.
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Deep Learning Models</h4>
                  <p className="text-gray-700 text-sm">
                    Neural networks trained on millions of reseller data points to recognize patterns and handle edge cases.
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Time Series Analysis</h4>
                  <p className="text-gray-700 text-sm">
                    Advanced algorithms detect seasonal trends, cyclical patterns, and forecast future performance.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Data Processing Infrastructure</h3>
              <div className="space-y-4">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Real-time Processing Engine</h4>
                  <p className="text-gray-700 text-sm">
                    Streaming architecture processes new data within minutes of upload, not hours or days.
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Distributed Computing</h4>
                  <p className="text-gray-700 text-sm">
                    Cloud-native architecture scales automatically to handle any volume of reseller data.
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Enterprise Security</h4>
                  <p className="text-gray-700 text-sm">
                    SOC 2 compliance, encryption at rest and in transit, and role-based access controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">The Competitive Advantage</h3>
            <p className="text-blue-800">
              This technology stack, previously available only to Fortune 500 companies with million-dollar BI budgets, is now accessible to growing brands through specialized platforms like TaskifAI. The democratization of advanced AI creates significant competitive advantages for early adopters.
            </p>
          </div>
        </div>

        {/* Implementation Reality */}
        <div className="modern-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Implementation Reality: What Actually Happens</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Typical TaskifAI Setup Timeline</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">Day 1</div>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">Account Setup & First Upload</p>
                  <p>Upload sample files, AI begins learning your data patterns</p>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Day 2-3</div>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">AI Training & Validation</p>
                  <p>System processes historical data, creates standardized schema</p>
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">Day 4+</div>
                <div className="text-sm text-gray-700">
                  <p className="font-semibold mb-1">Production Ready</p>
                  <p>Real-time insights, automated reports, AI chat interface active</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-purple-600">What You Actually Do vs. What AI Handles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">Your Involvement (10 minutes/week)</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Upload new reseller files (drag and drop)</li>
                <li>• Review flagged anomalies (if any)</li>
                <li>• Ask business questions via chat interface</li>
                <li>• Configure custom report preferences</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">AI Handles Automatically</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Data cleaning and standardization</li>
                <li>• Product matching across resellers</li>
                <li>• Trend detection and pattern analysis</li>
                <li>• Report generation and distribution</li>
                <li>• Performance monitoring and alerts</li>
                <li>• Forecast modeling and predictions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="modern-card p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How It Works: Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How does reseller analytics work with AI?</h3>
              <p className="text-gray-700 leading-relaxed">
                AI-powered reseller analytics works by automatically ingesting data from multiple sources, standardizing different formats and naming conventions, and using machine learning to identify patterns and generate insights. The process handles data cleaning, product matching, and analysis that would take humans weeks to complete.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What is automated business intelligence?</h3>
              <p className="text-gray-700 leading-relaxed">
                Automated business intelligence uses AI to automatically process raw business data, generate reports, and surface insights without human intervention. Unlike traditional BI that requires manual setup and maintenance, automated BI continuously learns from data patterns and adapts to changes in data structure or business needs.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">How accurate is AI data processing for business analytics?</h3>
              <p className="text-gray-700 leading-relaxed">
                Modern AI data processing achieves 99.5%+ accuracy rates compared to 85-90% with manual processing. AI systems use multiple validation layers, confidence scoring, and continuous learning to maintain accuracy even as data formats change. They also flag uncertain matches for human review.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Can AI handle different reseller data formats automatically?</h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, AI-powered platforms automatically handle Excel, CSV, Google Sheets, and other formats. They use schema detection to understand data structure, natural language processing to interpret column headers, and machine learning to match products across different naming conventions without manual mapping.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What's the difference between traditional BI and AI-powered analytics?</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional BI requires manual data mapping, rigid ETL processes, and technical expertise to maintain. AI-powered analytics automatically handles data standardization, learns from patterns, adapts to changes, and provides natural language query capabilities. Setup time reduces from months to days, and ongoing maintenance is minimal.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="modern-card p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Experience AI-Powered Reseller Analytics</h2>
          <p className="text-xl mb-6 opacity-90">
            See how TaskifAI transforms your data chaos into reliable insights in under 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={bookDemo}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Watch Live Demo
            </button>
            <button
              onClick={() => {
window.location.href = '/excel-automation-guide'
              }}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Read Implementation Guide
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            No technical setup required • See results in 30 minutes • Try risk-free
          </p>
        </div>

      </div>

      <Footer />
    </main>
  )
}

