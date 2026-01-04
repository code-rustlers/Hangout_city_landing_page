import { testimonialsDesktop as testimonials } from '@/lib/utils'
import React from 'react'
import { TestimonialsMobile } from './TestimonialsMobile'
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react'


const TestimonialsDesktop = () => {
  return (
    <section className="py-20 bg-gray-50" style={{ backgroundColor: "#F8F6F3" }}>
      {/* NORMAL CONTENT CONTAINER */}
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
                  <span className="font-semibold text-gray-900">
                    {testimonial.name}
                  </span>
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

            <p className="text-gray-700 leading-relaxed">
              As an introvert, I was nervous about meeting new people. But it was
              a very warm and welcoming vibe, which made it way less intimidating.
              Now I have a solid friend group, and we hang out beyond just the
              organised events.
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 FULL-WIDTH CTA BANNER */}
      <div className="mt-24 w-full">
          <div className="relative w-full h-150 overflow-hidden">  
          {/* Image */}
          <Image
            src="/testi5.png"
            alt="Community playing cards"
            fill
            className="object-cover"

          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">
            <h3 className="text-4xl font-bold text-white leading-tight mb-6 max-w-xl">
              Join a community of <br />
              thousands of{" "}
              <span className="text-[#E07A7A]">people like you!</span>
            </h3>
            <button className="relative flex items-center w-47.5 h-11 rounded-full border border-white text-white hover:bg-white/10 transition-all">
          {/* Centered text */}
          <span className="absolute inset-0 flex items-center justify-center text-md font-medium">
            Join Now
          </span>

          {/* Right arrow */}
          <span className="ml-auto mr-1 w-8 h-8 rounded-full bg-[#E07A7A] flex items-center justify-center">
            <ArrowUpRight className="w-5 h-5 text-white" strokeWidth={2.5} />
          </span>
        </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews">
      {/* Mobile */}
      <div className="md:hidden">
        <TestimonialsMobile />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <TestimonialsDesktop />
      </div>
    </section>
  )
}

export default Testimonials
