import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Excel Spreadsheet Automation Features | AI-Powered Reseller Data Management',
  description: 'Discover powerful features for automated Excel processing, AI data cleaning, real-time dashboards, and hands-free reseller analytics. See how we transform spreadsheet chaos.',
  keywords: 'excel automation features, AI data cleaning, automated spreadsheet processing, reseller analytics features, data management tools',
}

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Data Cleaning',
    description: 'Automatically standardize and clean messy reseller data from any format. Our AI recognizes patterns and fixes inconsistencies without manual intervention.',
    benefits: ['95% reduction in data cleaning time', 'Automatic format standardization', 'Error detection and correction', 'Pattern recognition across files']
  },
  {
    icon: '📊',
    title: 'Real-Time Dashboards',
    description: 'Get instant insights with automatically updating dashboards. Track performance, identify trends, and make data-driven decisions in real-time.',
    benefits: ['Live data visualization', 'Customizable KPI tracking', 'Mobile-responsive design', 'Automated report generation']
  },
  {
    icon: '🔄',
    title: 'Automated Data Processing',
    description: 'Upload spreadsheets and watch as they transform into clean, standardized datasets. No more manual copying, pasting, or formatting.',
    benefits: ['Batch processing capabilities', 'Multi-format support', 'Scheduled data updates', 'Version control and backup']
  },
  {
    icon: '💬',
    title: 'Natural Language Queries',
    description: 'Ask questions about your data in plain English. Get instant answers without complex formulas or pivot tables.',
    benefits: ['Conversational data analysis', 'Instant insights generation', 'No Excel expertise required', 'Smart question suggestions']
  },
  {
    icon: '🔗',
    title: 'Multi-Source Integration',
    description: 'Connect data from emails, cloud storage, FTP servers, and more. Automatically pull and process files from multiple sources.',
    benefits: ['Email attachment processing', 'Cloud storage integration', 'API connections', 'Automated file retrieval']
  },
  {
    icon: '🎯',
    title: 'Custom Parser Creation',
    description: 'We build custom parsers for your unique reseller formats. Each brand gets tailored automation that understands their specific data structure.',
    benefits: ['Personalized automation', 'Brand-specific formatting', 'Custom field mapping', 'Ongoing optimization']
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Excel Spreadsheet Automation Features
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transform messy reseller spreadsheets into clean, automated insights with our 
            AI-powered data management platform. See how we eliminate 95% of manual work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="modern-card p-8 hover:shadow-lg transition-all duration-200">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-accent-purple mt-1">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="modern-card p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Our Excel Automation Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upload Your Files</h3>
              <p className="text-gray-700">
                Simply upload your reseller spreadsheets in any format. Our system 
                accepts Excel, CSV, and even PDF files from email attachments.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-pink to-accent-cyan rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Processing</h3>
              <p className="text-gray-700">
                Our AI analyzes your data structure, cleans inconsistencies, 
                standardizes formats, and merges everything into a unified dataset.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-cyan to-accent-emerald rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Insights</h3>
              <p className="text-gray-700">
                Access clean dashboards, ask natural language questions, and get 
                automated reports delivered to your inbox.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Automate Your Reseller Data?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            See how our Excel automation platform can transform your reseller data 
            management and save you hours of manual work every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="gradient-button px-8 py-4 text-lg">
              Schedule a Demo
            </Link>
            <Link href="/blog" className="border-2 border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white px-8 py-4 rounded-lg font-medium transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}