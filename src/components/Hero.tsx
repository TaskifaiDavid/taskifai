"use client"

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-xy"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-50/50 via-transparent to-cyan-50/50 animate-gradient-xy animation-delay-2000"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full opacity-20 animate-float animation-delay-4000"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-float"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <div className="modern-card p-12 backdrop-blur-sm bg-white/70">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text">We help brands</span>
            <br />
            <span className="text-gray-900">make sense of</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan">reseller data</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Turn spreadsheet chaos into <span className="text-accent-purple font-semibold">clean dashboards</span> and <span className="text-accent-pink font-semibold">instant insights</span>. 
            No more manual data cleanup, no more uncertainty.
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={scrollToContact}
              className="gradient-button text-xl px-12 py-4"
            >
              Book intro call
            </button>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-accent-emerald mb-2">AI powered</div>
              <div className="text-gray-600">Chat interface</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-accent-purple mb-2">95%</div>
              <div className="text-gray-600">Time savings</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-accent-pink mb-2">Real-time</div>
              <div className="text-gray-600">Data insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}