"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { machinerySectionData } from "@/app/utils/constant/homeConstant/homeMachineryConstant";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Custom Swiper styles
const swiperStyles = `
  .machinery-swiper .swiper-pagination {
    position: relative !important;
    margin-top: 3rem !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 8px !important;
    padding-bottom: 1rem !important;
  }
  .machinery-swiper .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    background: rgba(255, 255, 255, 0.5) !important;
    opacity: 1 !important;
    transition: all 0.3s ease;
    margin: 0 4px !important;
    cursor: pointer !important;
    border-radius: 50% !important;
    pointer-events: auto !important;
    z-index: 10 !important;
  }
  .machinery-swiper .swiper-pagination-bullet-active {
    background: #fff !important;
    transform: scale(1.2);
  }
  
  /* Hide scrollbar but keep functionality */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Small scrollbar styles */
  .scrollbar-height-1::-webkit-scrollbar {
    height: 4px;
  }
  .scrollbar-width-1::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 2px;
  }
  .scrollbar-width-1::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
`;

export default function HomeMachinerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSlideChange = (swiper: any) => {
    // Handle loop indices properly
    const realIndex = swiper.realIndex;
    setCurrentImageIndex(realIndex);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    if (swiperInstance) {
      // Use slideToLoop for proper loop navigation
      swiperInstance.slideToLoop(index);
    }
  };

  const handleSwiperInit = (swiper: any) => {
    setSwiperInstance(swiper);
  };

  useEffect(() => {
    if (swiperInstance) {
      const paginationBullets = document.querySelectorAll(
        ".machinery-swiper .swiper-pagination-bullet"
      );
      paginationBullets.forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
          swiperInstance.slideToLoop(index);
        });
      });
    }
  }, [swiperInstance]);

  return (
    <>
      <style jsx global>
        {swiperStyles}
      </style>
      <section className="bg-black lg:py-24 py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="lg:text-center text-left lg:mb-12 mb-8 lg:space-y-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-tight">
              {machinerySectionData.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-100 font-light leading-relaxed ">
              {machinerySectionData.subtitle}
            </p>
          </div>

          {/* Main Image Display */}
          <div className="relative mb-4 lg:mb-8">
            <div className="relative w-full">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: false,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '" data-index="' +
                      index +
                      '"></span>'
                    );
                  },
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  waitForTransition: true,
                }}
                loop={true}
                onSlideChange={handleSlideChange}
                onSwiper={handleSwiperInit}
                className="machinery-swiper"
              >
                {machinerySectionData.images.map((image, index) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative bg-white rounded-lg overflow-hidden">
                      <div className="lg:aspect-[16/8] aspect-[10/13] relative max-w-full max-h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain w-[500px] h-[500px] lg:object-center object-top"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 lg:p-6 p-4 text-white lg:max-w-2xl space-y-4">
                          <p className="lg:text-lg text-base text-white font-light tracking-wide">
                            {image.subtitle}
                          </p>
                          <h3 className="lg:text-3xl text-xl font-light">
                            {image.title}
                          </h3>
                          <p className="lg:text-base text-sm leading-relaxed font-light lg:max-w-xl tracking-wide mb-3">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Arrows */}
              <button
                className="custom-navigation-btn absolute left-4 top-1/2 transform -translate-y-1/2"
                aria-label="Previous image"
                title="Previous image"
                onClick={() => {
                  if (swiperInstance) swiperInstance.slidePrev();
                }}
              >
                <BiChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="custom-navigation-btn absolute right-4 top-1/2 transform -translate-y-1/2"
                aria-label="Next image"
                title="Next image"
                onClick={() => {
                  if (swiperInstance) swiperInstance.slideNext();
                }}
              >
                <BiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Feature Buttons */}
          <div className="flex lg:justify-center justify-start overflow-x-auto lg:gap-6 gap-2 mb-8 pb-2 scrollbar-height-1 scrollbar-width-1">
            {machinerySectionData.features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => {
                  const imageIndex = machinerySectionData.images.findIndex(
                    (img) => img.id === feature.id
                  );
                  if (imageIndex !== -1) {
                    goToImage(imageIndex);
                  }
                }}
                className={`
                bg-black cursor-pointer text-white border border-white/20 lg:px-6 px-4 lg:py-3 py-2 rounded font-light lg:text-base text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0
                ${
                  machinerySectionData.images[currentImageIndex].id ===
                  feature.id
                    ? "bg-white !text-black"
                    : ""
                }
              `}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
