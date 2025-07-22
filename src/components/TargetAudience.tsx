export default function TargetAudience() {
  const industries = [
    {
      name: "Beauty & Cosmetics",
      description: "Track sell-through rates across Sephora, Ulta, and specialty retailers",
      icon: "💄"
    },
    {
      name: "Fashion & Accessories", 
      description: "Monitor performance across department stores, boutiques, and online retailers",
      icon: "👗"
    },
    {
      name: "Wellness & Lifestyle",
      description: "Analyze sales data from health stores, pharmacies, and wellness retailers", 
      icon: "🌱"
    },
    {
      name: "D2C Brands Expanding Through Wholesale",
      description: "Transition smoothly from direct-to-consumer to wholesale distribution",
      icon: "📈"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Designed for Consumer Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perfect for Consumer Brands That Sell Through Resellers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl">{industry.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-100 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Is Your Brand Ready?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>5+ reseller partners</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Monthly Excel reports</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Data-driven growth goals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}