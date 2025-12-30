import React from "react";
import { motion } from "framer-motion";

const images = ["hero1.png", "hero2.png", "hero3.png", "hero4.png"];

const Hero = () => {
  return (
    <section
      id="gallery"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center overflow-hidden"
      style={{ backgroundColor: "#F8F6F3" }}
    >
      {/* TEXT */}
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

      {/* AUTO SCROLLING CAROUSEL */}
      <div className="relative w-full overflow-hidden mb-12">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="h-64 w-64 rounded-2xl overflow-hidden shrink-0"
            >
              <img
                src={`./${img}`}
                alt="Hero visual"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <div className="flex flex-row gap-4 justify-center items-center">
        <a
          href="#how-it-works"
          className="bg-gray-700 text-white px-8 py-3 rounded-lg text-sm lg:text-lg font-medium hover:bg-gray-800 transition text-center"
        >
          How it works
        </a>
        <a
          href="#get-started"
          className="text-white px-8 py-3 rounded-lg text-sm lg:text-lg font-medium hover:bg-red-500 transition text-center"
          style={{ backgroundColor: "#E56B5D" }}
        >
          Join a Hangout
        </a>
      </div>
    </section>
  );
};

export default Hero;
