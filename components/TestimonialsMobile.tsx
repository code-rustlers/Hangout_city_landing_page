import { testimonialsMobile as testimonials } from '@/lib/utils'
import React, { useState, useRef } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'

export const TestimonialsMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-12 bg-[#F8F6F3] px-6">
      <h2 className="text-3xl font-bold text-center text-black mb-3">
        What people say
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Real reviews from singles who showed up.
      </p>

      <div className="relative mb-8">
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
            <div key={index} className="min-w-full snap-center">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-66 flex flex-col">
                <div className="flex justify-center gap-1 mb-5" aria-label={`${testimonial.rating} star review`}>
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-5 h-5 text-[#F4B400] fill-[#F4B400]"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed text-center">
                  {testimonial.text}
                </p>

                <div className="mt-auto text-center pt-6">
                  <span className="font-semibold text-gray-900">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

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

      <div className="rounded-2xl bg-[#464646] p-6">
        <h3 className="text-white text-xl font-semibold mb-4">
          Meet singles in a room<br />
          that feels <span className="text-[#e46f61]">worth showing up for.</span>
        </h3>
        <a href="#home" className="bg-transparent border-2 border-white text-white pl-6 pr-2 py-2 rounded-full text-base font-semibold flex items-center justify-between hover:bg-white/10 transition-colors w-40">
          Join Now
          <span className="bg-[#e46f61] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
            <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </section>
  )
}
