"use client";
import React, { useState } from "react";
import Image from "next/image";
import { homeInteriorProjectsData } from "@/app/utils/constant/homeConstant/homeInteriorProjectsConstant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./HomeInteriorProjectsSection.css";

export default function HomeInteriorProjectsSection() {
  const { title, tabs, projects } = homeInteriorProjectsData;
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-light text-black mb-8">
          {title}
        </h2>
        <div className="flex gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 rounded font-normal transition-all duration-300 border text-base min-w-[120px] ${
                activeTab === tab.value
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative pb-16">
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop
          >
            {projects[activeTab]?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full aspect-[4/3] rounded overflow-hidden shadow-md bg-gray-100">
                  <Image
                    src={img}
                    alt={activeTab + " project " + (idx + 1)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
} 