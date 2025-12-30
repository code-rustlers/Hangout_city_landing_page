import { testimonialsDesktop as testimonials } from '@/lib/utils'
import React from 'react'
import { TestimonialsMobile } from './TestimonialsMobile'




const TestimonialsDesktop = () => {
  return (
     <section className="py-20 bg-gray-50" style={{ backgroundColor: "#F8F6F3" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-5xl font-bold text-center mb-4 text-black">
                What people say
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mt-16">
                {/* Left Column - Testimonials */}
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-200 rounded-2xl p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">{testimonial.name}</span>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-gray-900 text-xl">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
    
                {/* Right Column - Image & Description */}
                <div className="bg-gray-200 rounded-2xl p-8 flex flex-col">
                  <div className="bg-gray-300 rounded-xl h-64 mb-6 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop" 
                      alt="Community gathering" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      "The beauty of Hangout City is that it takes the awkwardness out of making friends as an adult. You're all there for the same reason, doing something fun together, so conversations flow naturally."
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      "I've been to everything from cooking classes to board game nights, and every time I meet amazing people. Some have become my closest friends in the city!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}


const Testimonials = () => {
  return (
    <section id="reviews">
      {/* Show mobile version on small screens */}
      <div className="md:hidden">
        <TestimonialsMobile />
      </div>

      {/* Show desktop version on medium screens and up */}
      <div className="hidden md:block">
        <TestimonialsDesktop />
      </div>
    </section>
  )
}


export default Testimonials