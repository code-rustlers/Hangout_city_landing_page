import { testimonialsMobile as testimonials } from '@/lib/utils'
import React, { useState, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

// Mobile Component
export const TestimonialsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-12 bg-[#F8F6F3] px-6">
      <h2 className="text-3xl font-bold text-center text-black mb-20">
        What people say
      </h2>

      {/* Testimonial Carousel */}
      <div className="relative mb-8">
        {/* Eyes positioned above the card */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 w-50 h-50">
          <Image
            src="/eyes.png"
            alt="Eyes"
            fill
            className="object-contain w-40 h-40"
          />
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto scrollbar-hide flex gap-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onScroll={(e) => {
            const scrollLeft = e.currentTarget.scrollLeft
            const cardWidth = e.currentTarget.offsetWidth
            const index = Math.round(scrollLeft / cardWidth)
            setCurrentIndex(index)
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="min-w-full snap-center"
            >
              {/* Testimonial Card */}
              <div className="bg-[#464646] rounded-2xl p-6 pt-16">
                <p className="text-white text-sm leading-relaxed mb-6 text-center">
                  {testimonial.text}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">{testimonial.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-white text-base">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Lines */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * scrollContainerRef.current.offsetWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className={`h-1 w-12 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-[#464646]' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Image Card */}
      <div className="rounded-2xl overflow-hidden relative h-100">
        <img 
          src="/group.png"
          alt="Community gathering" 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-6">
          <h3 className="text-white text-xl font-semibold mb-4">
            Join a community of<br />
            thousands of <span className="text-[#e46f61]">people like you!</span>
          </h3>
          <button className="bg-transparent border-2 border-white text-white pl-6 pr-2 py-2 rounded-full text-base font-semibold flex items-center justify-between hover:bg-white/10 transition-colors w-40">
            Join Now
            <span className="bg-[#e46f61] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}