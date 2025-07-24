import React from "react";
import Image from "next/image";
import { philosophySectionData } from "@/app/utils/constant/aboutConstant/aboutPhilosophyConstant";

export default function AboutPhilosophySection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Text Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight mb-4 lg:mb-6">
              {philosophySectionData.title}
            </h2>
            {philosophySectionData.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={`text-gray-600 text-lg lg:text-xl font-light leading-relaxed${idx > 0 ? " mt-6" : ""}`}
              >
                {para}
              </p>
            ))}
          </div>
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <div className="relative w-full h-[300px] lg:h-[370px] max-w-xl rounded overflow-hidden">
              <Image
                src={philosophySectionData.image.src}
                alt={philosophySectionData.image.alt}
                fill
                className="object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 