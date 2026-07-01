import React from 'react'
import StoreButtons from './StoreButtons'

const Footer = () => {
  return (
    <footer id="get-started" className="py-16" style={{ backgroundColor: "#6C8A7C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-4">
              <span className="text-2xl font-semibold text-white">Hangouts</span>
            </div>

            <div className="mb-8">
              <h4 className="text-xl text-white mb-4">
                Download the <span className="italic">app</span>
              </h4>

              <p className="text-gray-200 mb-6 leading-relaxed">
                Browse upcoming singles events, book your spot, and get venue details 24 hours before.
              </p>

              <StoreButtons variant="light" />
            </div>

            <div className="border-t border-gray-500 pt-6">
              <p className="text-gray-300 text-sm">
                &copy; 2026 Hangout City. All rights reserved.
              </p>
              <div className="flex gap-4 mt-3 text-sm">
                <a href="/privacy-policy" className="text-gray-200 hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="text-gray-200 hover:text-white transition">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start space-y-4 lg:items-end">
            <a href="#get-started" className="text-white hover:text-gray-200 transition">
              Find a mixer in your city
            </a>
            <p className="text-gray-300">
              Curated rooms. Better conversations. Real chemistry.
            </p>
            <div className="text-gray-200 lg:text-right">
              <p className="text-sm uppercase tracking-wide text-gray-300 mb-2">
                Available in
              </p>
              <p className="text-white">
                Mumbai, Delhi, Hyderabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
