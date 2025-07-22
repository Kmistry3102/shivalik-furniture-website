"use client";
import React from "react";
import Image from "next/image";
import { factorySectionData } from "@/app/utils/constant/homeConstant/homeFactoryConstant";

export default function HomeFactorySection() {
  return (
    <section id="factory-section" className="lg:py-24 py-16 bg-white lg:mt-6 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Main Title */}
            <div className="space-y-4 text-left lg:text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
                {factorySectionData.title}
              </h2>
              <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
                {factorySectionData.subtitle}
              </p>
            </div>
          </div>    

          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded w-full h-[450px]">
              <Image
                src={factorySectionData.image.src}
                alt={factorySectionData.image.alt}
                className="w-full h-full object-cover transition-transform duration-700 grayscale hover:grayscale-0 hover:scale-105"
                priority
                fill
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
