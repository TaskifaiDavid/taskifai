export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Spreadsheets get uploaded",
      description: "In your custom built portal",
      icon: "📤",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      number: "02", 
      title: "System automatically cleans",
      description: "And organizes everything",
      icon: "✨",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      number: "03",
      title: "Dashboards get updated",
      description: "Talk to the database and get answers",
      icon: "📊",
      gradient: "from-emerald-400 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100"
    }
  ]

  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-blue-50/60 to-cyan-50/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-50/40 via-transparent to-blue-50/40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Here's </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">how it works</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Three simple steps to transform your reseller data chaos into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="modern-card p-8 text-center hover:scale-105 transform transition-all duration-300">
                {/* Step Number Badge */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.bgGradient} flex items-center justify-center text-3xl mb-6 mx-auto shadow-lg`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 text-gray-300">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}