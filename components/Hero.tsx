import React from "react";
import StoreButtons from "./StoreButtons";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-36 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#F8F6F3" }}
    >
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 w-full">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Meet someone worth dressing up for.
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Curated singles mixers for better conversations.<br />
          No endless swiping.<br />
          Just good people, good energy, and real chemistry.
        </p>
      </div>

      <div className="text-center">
        <p className="text-sm font-medium text-gray-500 mb-3">
          Download the app to browse events and book your spot.
        </p>
        <StoreButtons />
      </div>
    </section>
  );
};

export default Hero;
