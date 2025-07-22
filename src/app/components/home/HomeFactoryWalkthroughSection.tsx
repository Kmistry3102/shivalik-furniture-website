"use client";
import React from "react";
import { factoryWalkthroughSectionData } from "@/app/utils/constant/homeConstant/homeFactoryWalkthroughConstant";

export default function HomeFactoryWalkthroughSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center lg:mb-12 mb-8 lg:space-y-6 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
            {factoryWalkthroughSectionData.title}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed lg:max-w-2xl mx-auto">
            {factoryWalkthroughSectionData.subtitle}
          </p>
        </div>

        {/* Google Street View Embed */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Google Maps Embed */}
            <div className="relative w-full h-[500px]">
              <iframe
                src={factoryWalkthroughSectionData.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Factory 360° Walkthrough - Google Street View"
                className="rounded-2xl"
              />
            </div>

            {/* Location Info Overlay */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <svg 
                  className="w-4 h-4" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                    clipRule="evenodd" 
                  />
                </svg>
                <span className="text-sm font-medium">
                  {factoryWalkthroughSectionData.location.fullAddress}
                </span>
              </div>
            </div>

            {/* Full Screen Button */}
            <button
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/90 transition-all duration-300"
              onClick={() => {
                const iframe = document.querySelector('iframe');
                if (iframe) {
                  iframe.requestFullscreen();
                }
              }}
              aria-label="View in full screen"
              title="View in full screen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
} 