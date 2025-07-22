"use client"

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      setupFee: "€20,000–€30,000",
      monthlyFee: "€1,500/month",
      resellers: "1-10 resellers",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      popular: false
    },
    {
      name: "Growth",
      setupFee: "€35,000–€50,000",
      monthlyFee: "€2,500–€3,500/month",
      resellers: "11-20 resellers",
      gradient: "from-purple-400 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      popular: false
    },
    {
      name: "Enterprise",
      setupFee: "€55,000–€65,000",
      monthlyFee: "€4,000+/month",
      resellers: "21-50 resellers",
      gradient: "from-emerald-400 to-emerald-600",
      bgGradient: "from-emerald-50 to-emerald-100",
      popular: false
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Choose the plan that fits your business scale. All plans include support and hosting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <div className="modern-card p-8 text-center hover:scale-105 transform transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.bgGradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${plan.gradient}`}></div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {plan.setupFee}
                  </div>
                  <div className="text-gray-600 text-sm mb-4">Setup Fee</div>
                  
                  <div className="text-2xl font-semibold text-gray-700 mb-2">
                    {plan.monthlyFee}
                  </div>
                  <div className="text-gray-600 text-sm">Monthly Fee</div>
                </div>
                
                <div className="mb-8">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${plan.gradient} text-white`}>
                    {plan.resellers}
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Included Support</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Included Hosting</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="modern-card p-8 max-w-2xl mx-auto bg-gradient-to-br from-white via-orange-50/20 to-yellow-50/30 border-2 border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              <span className="text-accent-orange">Additional Services</span>
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span><strong>Additional reseller parser:</strong> €2,000 each</span>
              </div>
              <div className="text-sm text-gray-600 mt-4">
                Need more resellers than Enterprise supports? Contact us for custom enterprise solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}