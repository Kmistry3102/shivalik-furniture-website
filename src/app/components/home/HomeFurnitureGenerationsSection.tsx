"use client";
import React from "react";
import Image from "next/image";
import { furnitureGenerationsSectionData } from "@/app/utils/constant/homeConstant/homeFurnitureGenerationsConstant";

export default function HomeFurnitureGenerationsSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-black mt-12">
      {/* Background Image */}
     
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="lg:text-center text-left mx-auto lg:space-y-6 space-y-4">
            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              {furnitureGenerationsSectionData.mainHeadline}
            </h2>

            {/* Sub Headline */}
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              {furnitureGenerationsSectionData.subHeadline}
            </h3>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-gray-100 font-light leading-relaxed lg:max-w-4xl mx-auto">
              {furnitureGenerationsSectionData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 