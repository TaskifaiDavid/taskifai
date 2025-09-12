"use client"

import VideoEmbed from './VideoEmbed'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToVideo = () => {
    const videoElement = document.getElementById('hero-video')
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      // Small delay to allow scroll, then trigger video play
      setTimeout(() => {
        const videoTrigger = document.querySelector('[data-video-trigger]')
        if (videoTrigger) {
          (videoTrigger as HTMLElement).click()
        }
      }, 800)
    }
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
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="modern-card p-6 md:p-12 backdrop-blur-sm bg-white/70">
          {/* Vertical Stack: Content Above, Video Below */}
          <div className="text-center space-y-8">
            
            {/* Header Content */}
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                <span className="gradient-text">From messy spreadsheets to decisions you can trust</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 mb-8 md:mb-12 leading-relaxed font-medium max-w-4xl mx-auto px-4 sm:px-0">
                TaskifAI turns inconsistent reseller spreadsheets into reliable insights, automatically. <a href="/excel-automation-guide" className="text-blue-600 hover:text-blue-800">Automate your Excel processing</a>, close your books faster, and give your team confidence in the numbers.
              </p>
              
              {/* Dual CTA Strategy */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
                <button
                  onClick={scrollToContact}
                  className="gradient-button text-lg sm:text-xl px-8 sm:px-12 py-4"
                >
                  Book intro call
                </button>
                <button
                  onClick={scrollToVideo}
                  className="text-lg sm:text-xl px-8 sm:px-12 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold"
                  data-video-cta
                >
                  Watch 2-min demo
                </button>
              </div>
            </div>
            
            {/* Massive Video Section */}
            <div id="hero-video" className="w-full scroll-mt-8">
              <div data-video-trigger>
                <VideoEmbed
                  src="https://youtu.be/BM_kanRjDAI"
                  title="TaskifAI Product Demo"
                  aspectRatio="21/9"
                  className="w-full shadow-2xl"
                  cacheBust={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}