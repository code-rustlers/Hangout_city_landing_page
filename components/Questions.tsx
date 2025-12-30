'use client'
import { faqItems } from '@/lib/utils'
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const Questions = () => {

     const [openFaq, setOpenFaq] = useState(null);
      const toggleFaq = (index:any) => {
        setOpenFaq(openFaq === index ? -1 : index);
      };
  return (
    <section id="faq" className="py-20" style={{ backgroundColor: "#F8F6F3" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl  text-black font-bold text-center mb-2">
            frequesntly asked questions
          </h2>
          
          <div className="mt-16 space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="pb-6 text-gray-600 leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Questions