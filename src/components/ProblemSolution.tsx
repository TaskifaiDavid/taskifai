export default function ProblemSolution() {
  const problems = [
    {
      title: "Different spreadsheet layouts",
      description: "Every reseller uses their own format",
      icon: "📊",
      gradient: "from-red-400 to-red-600"
    },
    {
      title: "Inconsistent naming",
      description: "Product names and categories don't match",
      icon: "🏷️",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Manual cleaning",
      description: "Hours spent organizing data every week",
      icon: "⏰",
      gradient: "from-red-500 to-pink-600"
    }
  ]

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-orange-50/60 to-pink-50/80"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-50/40 via-transparent to-red-50/40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Problem Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Why </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-600">Manual Reseller Data</span>
            <span className="text-gray-900"> Management Fails</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium">
            Managing all that data is a lot of manual work.<br />The same problems keep coming up:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="modern-card group hover:scale-105 transform transition-all duration-300">
                <div className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center text-2xl mb-6 mx-auto shadow-lg`}>
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider with Arrow */}
        <div className="flex justify-center mb-20">
          <div className="bg-white rounded-full p-6 shadow-xl">
            <div className="w-8 h-8 text-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center">
          <div className="modern-card p-12 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-2 border-blue-100">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-gray-900">We built a system that turns those reports into </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">clean, reliable insights</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              This means <span className="text-accent-emerald font-semibold">no more manual data cleanup</span> and <span className="text-accent-purple font-semibold">no more uncertainty</span>. 
              You get clear answers on what's selling, where it's working, and what needs your attention. <a href="/reseller-analytics-comparison" className="text-blue-600 hover:text-blue-800">Compare solutions</a> to see why TaskifAI works better.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
                  ✨
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic Processing</h3>
                <p className="text-gray-600">AI cleans and organizes your data</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
                  📈
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Dashboards</h3>
                <p className="text-gray-600">See insights as they happen</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-2xl mb-4 mx-auto shadow-lg">
                  💬
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Questions</h3>
                <p className="text-gray-600">Get answers in plain English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}