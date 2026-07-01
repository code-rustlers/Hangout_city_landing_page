import { testimonialsDesktop as testimonials } from '@/lib/utils'
import React from 'react'
import { TestimonialsMobile } from './TestimonialsMobile'
import { ArrowUpRight, Star } from 'lucide-react'

const TestimonialsDesktop = () => {
  return (
    <section className="py-20 bg-gray-50" style={{ backgroundColor: "#F8F6F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center mb-4 text-black">
          What people say
        </h2>
        <p className="text-center text-gray-600 text-lg">
          Real reviews from singles who showed up.
        </p>

        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-5" aria-label={`${testimonial.rating} star review`}>
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 text-[#F4B400] fill-[#F4B400]"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>

              <p className="font-semibold text-gray-900">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="flex gap-1 mb-5" aria-label="5 star review">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <Star
                key={starIndex}
                className="w-5 h-5 text-[#F4B400] fill-[#F4B400]"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <p className="text-xl text-gray-800 leading-relaxed mb-6">
            I was tired of dating apps, but this felt easy. The room felt
            thoughtful, the people were warm, and nobody made it weird. I left
            with real conversations and someone I wanted to see again.
          </p>
          <p className="font-semibold text-gray-900">Aarohi Mehta</p>
        </div>
      </div>

      <div className="mt-24 w-full bg-[#464646] py-20">
        <div className="w-full max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Meet singles in a room <br />
            that feels{" "}
            <span className="text-[#E07A7A]">worth showing up for.</span>
          </h3>
          <a href="#home" className="relative flex items-center w-47.5 h-11 rounded-full border border-white text-white hover:bg-white/10 transition-all">
            <span className="absolute inset-0 flex items-center justify-center text-md font-medium">
              Join Now
            </span>
            <span className="ml-auto mr-1 w-8 h-8 rounded-full bg-[#E07A7A] flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews">
      <div className="md:hidden">
        <TestimonialsMobile />
      </div>

      <div className="hidden md:block">
        <TestimonialsDesktop />
      </div>
    </section>
  )
}

export default Testimonials
