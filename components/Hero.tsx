import React from 'react'

const Hero = () => {
  return (
    <section 
    id="gallery"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center"
      style={{ backgroundColor: "#F8F6F3" }}
    >
      <div className="text-center mb-16 w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Meet people. Make plans. Feel connected.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          It's not about swiping or networking.<br />
          It's about showing up, connecting, and letting<br />
          friendships grow naturally.
        </p>
      </div>

      {/* Image Grid / Mobile Carousel */}
      <div
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className="
          flex gap-6 overflow-x-auto 
          sm:grid sm:grid-cols-2 lg:grid-cols-4
          mb-12 w-full
          scrollbar-hide 
        "
      >
        <div className="rounded-2xl overflow-hidden h-64 min-w-65 bg-linear-to-br from-orange-200 to-orange-300">
          <img 
            src="./hero1.png" 
            alt="Person with coffee" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden h-64 min-w-65 bg-linear-to-br from-amber-200 to-amber-300">
          <img 
            src="./hero2.png" 
            alt="Friends with drinks" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden h-64 min-w-65 bg-linear-to-br from-rose-200 to-rose-300">
          <img 
            src="./hero3.png" 
            alt="Friends having fun" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="rounded-2xl overflow-hidden h-64 min-w-65 bg-linear-to-br from-yellow-200 to-yellow-300">
          <img 
            src="./hero4.png" 
            alt="Group selfie" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row gap-4 justify-center items-center">
        <a
          href="#how-it-works"
          className="bg-gray-700 text-white px-8 py-3 rounded-lg  text-sm lg:text-lg font-medium hover:bg-gray-800 transition text-center"
        >
          How it works
        </a>
        <a
          href="#get-started"
          className="text-white px-8 py-3 rounded-lg text-sm lg:text-lg font-medium hover:bg-red-500 transition text-center"
          style={{ backgroundColor:"#E56B5D" }}
        >
          Join a Hangout
        </a>
      </div>
    </section>
  )
}

export default Hero