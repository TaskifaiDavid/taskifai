"use client"

export default function ImplementationTimeline() {
  const timelinePhases = [
    {
      week: "Week 1-2",
      title: "Analysis & Planning",
      description: "Deep dive into your data sources and requirements",
      icon: "🔍",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      week: "Week 3-6", 
      title: "Custom Development",
      description: "Building your personalized analytics solution",
      icon: "⚙️",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      week: "Week 7-8",
      title: "Testing & Go-Live",
      description: "Quality assurance and smooth deployment",
      icon: "🚀",
      gradient: "from-emerald-400 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100"
    }
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/60"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/30 via-transparent to-gray-50/40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">45-Day Implementation Process</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Thorough delivery that gets you from messy spreadsheets to automated insights in 6.5 weeks.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {timelinePhases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Connection Line (except for last item) */}
              {index < timelinePhases.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 z-0"></div>
              )}
              
              <div className={`modern-card p-8 text-center hover:scale-105 transform transition-all duration-300 bg-gradient-to-br ${phase.bgGradient} border border-gray-200`}>
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">{phase.icon}</span>
                </div>
                
                {/* Week Badge */}
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${phase.gradient} text-white mb-4`}>
                  {phase.week}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {phase.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}