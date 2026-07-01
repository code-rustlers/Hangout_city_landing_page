import React from 'react'

const Info = () => {
  return (
    <section className="bg-white pb-20" style={{ backgroundColor: "#F8F6F3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                So... what is<br />Hangouts?
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-4 font-medium">
                We host curated singles mixers where the actual connection and chemistry matters, and meeting someone new is exciting again.
              </p>
              <p className="text-lg italic text-red-400 font-extrabold">
                Real sparks, real chemistry, real connections.
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Info
