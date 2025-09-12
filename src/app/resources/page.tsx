import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Reseller Analytics Resources | Templates & Guides - TaskifAI',
  description: 'Free Excel templates, automation guides, ROI calculators, and best practices for reseller data management. Download resources and boost productivity.',
  keywords: 'reseller analytics resources, excel templates, automation guides, data management templates, spreadsheet optimization',
  alternates: {
    canonical: 'https://www.taskifai.com/resources'
  }
}

const resources = [
  {
    category: 'Templates',
    items: [
      {
        title: 'Standard Reseller Data Template',
        description: 'Pre-formatted Excel template with data validation rules and automated calculations.',
        type: 'Excel Template',
        downloadUrl: '#',
        popular: true
      },
      {
        title: 'Monthly Reseller Report Template',
        description: 'Professional report template with charts and KPI tracking.',
        type: 'Excel Template',
        downloadUrl: '#'
      },
      {
        title: 'ROI Calculator Template',
        description: 'Calculate the return on investment for automation initiatives.',
        type: 'Excel Template',
        downloadUrl: '#'
      }
    ]
  },
  {
    category: 'Guides',
    items: [
      {
        title: 'Excel Automation Quick Start Guide',
        description: 'Step-by-step guide to automating your first reseller data workflow.',
        type: 'PDF Guide',
        downloadUrl: '#',
        popular: true
      },
      {
        title: 'Data Cleaning Best Practices',
        description: 'Comprehensive guide to standardizing and cleaning reseller data.',
        type: 'PDF Guide',
        downloadUrl: '#'
      },
      {
        title: 'Power Query for Beginners',
        description: 'Learn to consolidate data from multiple sources using Power Query.',
        type: 'PDF Guide',
        downloadUrl: '#'
      }
    ]
  },
  {
    category: 'Case Studies',
    items: [
      {
        title: 'BIBBI Parfum: 95% Time Savings',
        description: 'How a luxury fragrance brand automated their reseller data processing.',
        type: 'Case Study',
        downloadUrl: '#',
        popular: true
      },
      {
        title: 'Beauty Brand: From Chaos to Clarity',
        description: 'Transforming 50+ reseller spreadsheets into automated insights.',
        type: 'Case Study',
        downloadUrl: '#'
      },
      {
        title: 'Fashion Retailer: Scaling with Automation',
        description: 'How automation enabled 300% growth without hiring more staff.',
        type: 'Case Study',
        downloadUrl: '#'
      }
    ]
  }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Reseller Analytics Resources
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Free templates, guides, and case studies to help you optimize your reseller 
            data management and get started with Excel automation.
          </p>
        </div>

        {/* Resource Categories */}
        {resources.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {category.category}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="modern-card p-8 hover:shadow-lg transition-all duration-200 relative">
                  {item.popular && (
                    <div className="absolute -top-3 -right-3">
                      <span className="bg-gradient-to-r from-accent-pink to-accent-purple text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
                  
                  <Link 
                    href={item.downloadUrl}
                    className="inline-flex items-center text-accent-purple hover:text-accent-pink font-medium transition-colors"
                  >
                    Download Free →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Newsletter Signup */}
        <div className="modern-card p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get New Resources First
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and be the first to receive new templates, 
            guides, and case studies about reseller data automation.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-purple"
              />
              <button className="gradient-button px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Custom Solution CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            While these free resources are helpful, our custom reseller analytics 
            platform provides fully automated solutions tailored to your specific needs.
          </p>
          <Link href="/#contact" className="gradient-button px-8 py-4 text-lg">
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}