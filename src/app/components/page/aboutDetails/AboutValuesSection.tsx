import React from "react";
import { valuesSectionData } from "@/app/utils/constant/aboutConstant/aboutValuesConstant";

export default function AboutValuesSection() {
  return (
    <section className="lg:py-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight mb-10 lg:mb-16 lg:text-center">
          {valuesSectionData.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {valuesSectionData.items.map((item, idx) => (
            <div key={idx} className="text-left p-6 bg-[#fbfbfb] rounded">
              <h3 className="text-2xl font-light text-black mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 