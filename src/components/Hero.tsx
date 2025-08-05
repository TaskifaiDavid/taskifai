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
        <div className="modern-card p-6 md:p-12 backdrop-blur-sm bg-white/70">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="text-gray-900">Excel Spreadsheet Automation for </span>
            <span className="gradient-text">Reseller Data Management</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-pink via-accent-purple to-accent-cyan"> - Completely Hands-Off</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Transform spreadsheet chaos into <span className="text-accent-purple font-semibold">automated insights</span> and <span className="text-accent-pink font-semibold">clean dashboards</span>. 
            Save hours monthly with <a href="#faq" className="text-accent-purple hover:text-accent-pink font-semibold">custom-built automation</a> tailored to your resellers.
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
              <div className="text-xl md:text-2xl font-bold text-accent-emerald mb-2">Clean data</div>
              <div className="text-gray-600">auto-standardized</div>
            </div>
            <div className="p-4">
              <div className="text-xl md:text-2xl font-bold text-accent-purple mb-2">Instant answers</div>
              <div className="text-gray-600">AI-powered insights</div>
            </div>
            <div className="p-4">
              <div className="text-xl md:text-2xl font-bold text-accent-pink mb-2">Hands-free processing</div>
              <div className="text-gray-600">zero manual work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}