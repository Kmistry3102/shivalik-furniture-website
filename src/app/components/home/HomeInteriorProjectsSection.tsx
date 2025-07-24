"use client";
import React, { useState } from "react";
import Image from "next/image";
import { homeInteriorProjectsData } from "@/app/utils/constant/homeConstant/homeInteriorProjectsConstant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function HomeInteriorProjectsSection() {
  const { title, tabs, projects } = homeInteriorProjectsData;
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const getActiveProjects = () => {
    return projects[activeTab] || [];
  };

  const getTabLabel = (value: string) => {
    return tabs.find(tab => tab.value === value)?.label || value;
  };

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex);
  };

  return (
    <>
      <section className="interior-projects-section bg-white py-8 lg:py-10" aria-labelledby="interior-projects-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="interior-projects-title" className="text-3xl sm:text-4xl font-light text-black mb-8">
            {title}
          </h2>
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 mb-8" role="tablist" aria-label="Project categories">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                role="tab"
                aria-controls={`projects-${tab.value}`}
                className={`px-6 py-2 cursor-pointer rounded font-normal transition-all duration-300 border text-base min-w-[120px] focus:outline-none focus:ring-0 focus:ring-none focus:ring-offset-0 ${
                  activeTab === tab.value
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Projects Slider */}
          <div className="relative" role="tabpanel" id={`projects-${activeTab}`} aria-label={`${getTabLabel(activeTab)} projects`}>
            {getActiveProjects().length > 0 ? (
              <Swiper 
                spaceBetween={24}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  900: { slidesPerView: 2 },
                  1200: { slidesPerView: 3.5 },
                }}
                modules={[Pagination, Autoplay]}
                pagination={{ 
                  clickable: true,
                  dynamicBullets: false,
                  type: 'bullets'
                }}
                autoplay={{ 
                  delay: 3000, 
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                loop={true}
                className="interior-projects-swiper !pb-16"
                aria-label={`${getTabLabel(activeTab)} project gallery`}
                onSwiper={setSwiperInstance}
                onSlideChange={handleSlideChange}
              >
                {getActiveProjects().map((img, idx) => (
                  <SwiperSlide key={`${activeTab}-${idx}`}>
                    <div className="w-full aspect-[4/3] rounded overflow-hidden shadow-sm bg-gray-100 group">
                      <Image
                        src={img}
                        alt={`${getTabLabel(activeTab)} project ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded"
                        sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        priority={idx < 4}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No projects available for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <style jsx>{`
        .interior-projects-section :global(.swiper-pagination) {
          position: relative !important;
          bottom: -16px !important;
          z-index: 10 !important;
          gap: 8px !important;
          width: auto !important;
        }
        .interior-projects-section :global(.swiper-pagination-bullet) {
          width: 12px !important;
          height: 12px !important;
          background: rgba(0, 0, 0, 0.2) !important;
          opacity: 1 !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
          border-radius: 50% !important;
          cursor: pointer !important;
        }
        .interior-projects-section :global(.swiper-pagination-bullet-active) {
          background: black !important;
          transform: scale(1.2) !important;
        }
        .interior-projects-section :global(.swiper-slide) {
          padding-right: 5px !important;
          padding-left: 5px !important;
        }
      `}</style>
    </>
  );
}
