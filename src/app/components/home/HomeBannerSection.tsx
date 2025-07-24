"use client";

import React, { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";

export default function HomeBannerSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images for the slider
  const backgroundImages = [
    {
      src: "/banner/banner-img1.png",
      alt: "Luxury bedroom with elegant furniture",
    },
    {
      src: "/banner/banner-img2.png",
      alt: "Modern living room with premium furniture",
    },
    {
      src: "/banner/banner-img3.png",
      alt: "Sophisticated dining room setup",
    },
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Additional overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 lg:text-center text-left px-8 max-w-7xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-wide  mb-6 leading-tight mx-auto">
            Furniture That Moves With You
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-xl lg:text-2xl text-white tracking-wide font-light lg:mb-12 mb-6 lg:max-w-3xl max-w-full mx-auto">
            Craftsmanship meets modern luxury
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:items-center lg:justify-center gap-4 sm:gap-6">
            {/* Explore Factory Button */}
            <button 
              onClick={() => {
                const element = document.getElementById('factory-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-fit rounded lg:text-lg text-base group bg-white text-black lg:px-8 px-4 lg:py-3 py-2 border border-white font-light hover:bg-white/70 transition-all duration-300 flex items-center gap-2 min-w-[200px] justify-center shadow-lg hover:shadow-xl hover:scale-102 cursor-pointer"
            >
              Explore Factory
              <BiChevronRight className="w-6 h-6" />
            </button>

            {/* Explore Collection Button */}
            <button
              onClick={() => {
                const element = document.getElementById('brand-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-fit rounded lg:text-lg text-base group bg-white/20 text-white border border-white lg:px-8 px-4 lg:py-3 py-2 font-light transition-all duration-500 flex items-center gap-2 min-w-[200px] justify-center shadow-lg hover:shadow-xl hover:bg-white hover:scale-102 hover:text-black cursor-pointer"
            >
              Explore Collection
              <BiChevronRight className="w-6 h-6" />
            </button>

            {/* Explore Interiors Button */}
            <button className="w-fit rounded lg:text-lg text-base group bg-white/20 text-white border border-white lg:px-8 px-4 lg:py-3 py-2 font-light transition-all duration-500 flex items-center gap-2 min-w-[200px] justify-center shadow-lg hover:shadow-xl hover:bg-white hover:scale-102 hover:text-black cursor-pointer">
                Explore Interiors
              <BiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Image Slider Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
