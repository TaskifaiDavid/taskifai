export default function Problem() {
  const painPoints = [
    "Dozens of Excel formats from different resellers",
    "Weeks of delay in seeing trends", 
    "No unified dashboard",
    "Marketing and ops teams flying blind"
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Say Goodbye to Manual Reseller Reports
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consumer brands waste countless hours wrestling with inconsistent data formats and outdated information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-red-50 rounded-lg">
              <div className="bg-red-100 rounded-full p-2 mt-1">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 italic">
            "We were spending 2 full days every week just organizing reseller data. Now we get insights in real-time."
          </p>
          <p className="text-sm text-gray-500 mt-2">— Marketing Director, Fashion Brand</p>
        </div>
      </div>
    </section>
  )
}