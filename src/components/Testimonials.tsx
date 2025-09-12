export default function Testimonials() {
  const testimonials = [
    {
      quote: "We went from spending 2 full days every week organizing reseller data to getting real-time insights instantly. The ROI was clear within the first month.",
      name: "Sarah Chen",
      title: "Marketing Director",
      company: "Belle Cosmetics",
      initials: "SC"
    },
    {
      quote: "The AI chat feature is incredible. I can ask 'Which products are underperforming in France?' and get instant answers with visualizations.",
      name: "Marcus Rodriguez",
      title: "Operations Manager", 
      company: "Urban Style Co.",
      initials: "MR"
    },
    {
      quote: "Finally, our marketing and ops teams are working with the same data. The unified dashboard has transformed how we make decisions.",
      name: "Emma Thompson",
      title: "VP of Sales",
      company: "Wellness Brands Inc.",
      initials: "ET"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Why Brands Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how consumer brands are transforming their reseller analytics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <svg className="w-8 h-8 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-blue-600 font-medium text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-normal text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-100 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-normal text-gray-900 mb-2">
              Join 50+ Consumer Brands
            </h3>
            <p className="text-gray-600">
              From startup beauty brands to established fashion retailers, companies trust us with their reseller analytics
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}