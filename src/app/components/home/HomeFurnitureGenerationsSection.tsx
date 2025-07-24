"use client";
import React from "react";
import Image from "next/image";
import { furnitureGenerationsSectionData } from "@/app/utils/constant/homeConstant/homeFurnitureGenerationsConstant";

export default function HomeFurnitureGenerationsSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-black lg:mt-12 mt-8">
      {/* Background Image */}
     
      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-center">
          <div className="lg:text-center text-left mx-auto lg:space-y-6 space-y-4">
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-tight">
              {furnitureGenerationsSectionData.mainHeadline} <br /> {furnitureGenerationsSectionData.subHeadline}
            </h2>
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-100 font-light leading-relaxed lg:max-w-4xl mx-auto">
              {furnitureGenerationsSectionData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 