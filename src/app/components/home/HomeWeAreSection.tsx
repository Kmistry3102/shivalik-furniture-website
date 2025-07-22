"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { weAreSectionData } from "@/app/utils/constant/homeConstant/homeWeAreConstant";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { BiChevronRight } from "react-icons/bi";

export default function HomeWeAreSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 lg:space-y-6 mb-10  lg:mb-16 lg:text-center text-left">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
              {weAreSectionData.title}
            </h2>
          </div>

          {/* Subtitle */}
          <div>
            <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
              {weAreSectionData.subtitle}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Image Slider */}
          <div className="relative">
            <div className="relative h-[250px] lg:h-[350px]">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1000}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                pagination={{
                  clickable: true,
                }}
                className="h-full"
              >
                {weAreSectionData.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={image.id === 1}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </SwiperSlide>
                ))}
                            </Swiper>
              
              {/* Swiper Pagination Dots */}
              <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 rounded"></div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="space-y-4 lg:space-y-6">
            {/* Description */}
            <div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
                {weAreSectionData.description}
              </p>
            </div>

            {/* Mission Statement */}
            <div>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
                {weAreSectionData.mission}
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="lg:pt-1.5">
              <button
                                onClick={() =>
                  (window.location.href = weAreSectionData.buttonAction)
                }
                className="flex items-center gap-2 rounded text-lg group bg-black text-white px-8 py-2.5 border border-black font-light hover:bg-black/90 transition-all duration-300 hover:scale-102 cursor-pointer"
              >
                {weAreSectionData.buttonText}
                <BiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

                        {/* Custom CSS for Swiper */}
            <style jsx global>{`
              .swiper-pagination {
                position: absolute !important;
                bottom: 16px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                z-index: 10 !important;
                display: flex !important;
                gap: 8px !important;
                width: auto !important;
              }
              
              .swiper-pagination-bullet {
                width: 12px !important;
                height: 12px !important;
                background: rgba(255, 255, 255, 0.5) !important;
                opacity: 1 !important;
                margin: 0 4px !important;
                transition: all 0.3s ease !important;
                border-radius: 50% !important;
                cursor: pointer !important;
              }
              
              .swiper-pagination-bullet-active {
                background: white !important;
                transform: scale(1.2) !important;
              }
                .swiper-slide{
                padding-right: 5px !important;
                padding-left: 5px !important;
                }
            `}</style>
          </section>
        );
      }
