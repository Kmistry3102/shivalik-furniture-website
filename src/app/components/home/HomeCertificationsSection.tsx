"use client";
import React from "react";
import Image from "next/image";
import { certificationsSectionData } from "@/app/utils/constant/homeConstant/homeCertificationsConstant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HomeCertificationsSection() {
  return (
    <section className="lg:py-16 py-10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Title (always visible) */}
        <div className="text-left lg:text-center mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-black leading-tight lg:mb-6 mb-4">
            {certificationsSectionData.title}
          </h2>
        </div>
        {/* Swiper for mobile/tablet */}
        <div className="block lg:hidden">
          <Swiper 
          spaceBetween={16} slidesPerView={1.1} className="pb-8"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          >
            {certificationsSectionData.certifications.map((certification) => (
              <SwiperSlide key={certification.id} className="my-3">
                <div className="bg-white rounded h-full shadow-sm lg:p-6 p-3 border border-gray-100">
                  <div className="relative mb-8">
                    <div className="w-full h-74 mx-auto relative overflow-hidden">
                      <Image
                        src={certification.image.src}
                        alt={certification.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:text-center text-left lg:space-y-3 space-y-2">
                    <h3 className="lg:text-xl text-lg font-normal text-black leading-tight">
                      {certification.title}
                    </h3>
                    <p className="text-gray-600 font-light lg:text-base text-sm leading-relaxed">
                      {certification.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Grid for desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-4 lg:gap-6">
          {certificationsSectionData.certifications.map((certification) => (
            <div key={certification.id} className="group">
              <div className="bg-white rounded h-full hover:shadow-lg transition-all duration-300 lg:p-6 p-3 border border-gray-100 hover:border-gray-200">
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
                <div className="lg:text-center text-left lg:space-y-3 space-y-2">
                  <h3 className="lg:text-xl text-lg font-normal text-black leading-tight">
                    {certification.title}
                  </h3>
                  <p className="text-gray-600 font-light lg:text-base text-sm leading-relaxed">
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
