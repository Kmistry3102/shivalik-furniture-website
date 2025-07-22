"use client";
import React from "react";
import Image from "next/image";
import { certificationsSectionData } from "@/app/utils/constant/homeConstant/homeCertificationsConstant";

export default function HomeCertificationsSection() {
  return (
    <section id="certifications-section" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight mb-6">
            {certificationsSectionData.title}
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {certificationsSectionData.certifications.map((certification) => (
            <div key={certification.id} className="group">
              {/* Certificate Card */}
              <div className="bg-white rounded h-full hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-gray-200">
                {/* Certificate Image */}
                <div className="relative mb-8">
                  <div className="w-full h-81 mx-auto relative overflow-hidden">
                    <Image
                      src={certification.image.src}
                      alt={certification.image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-normal text-black leading-tight">
                    {certification.title}
                  </h3>
                  <p className="text-gray-600 font-light text-base leading-relaxed">
                    {certification.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
