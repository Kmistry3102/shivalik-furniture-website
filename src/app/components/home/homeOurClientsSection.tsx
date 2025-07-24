"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Client logos data
const clientLogos = [
  { id: 1, name: "Client 1", image: "/client/client-img1.png" },
  { id: 2, name: "Client 2", image: "/client/client-img2.png" },
  { id: 3, name: "Client 3", image: "/client/client-img3.png" },
  { id: 4, name: "Client 4", image: "/client/client-img4.png" },
  { id: 5, name: "Client 5", image: "/client/client-img5.png" },
  { id: 6, name: "Client 6", image: "/client/client-img6.png" },
  { id: 7, name: "Client 7", image: "/client/client-img7.png" },
  { id: 8, name: "Client 8", image: "/client/client-img8.png" },
  { id: 9, name: "Client 9", image: "/client/client-img9.png" },
  { id: 10, name: "Client 10", image: "/client/client-img10.png" },
  { id: 11, name: "Client 11", image: "/client/client-img11.png" },
];

export default function HomeOurClientsSection() {
  return (
    <section className="bg-white py-10 lg:py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="lg:text-center text-left lg:mb-12 mb-8 lg:space-y-4 space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-black leading-tight">
           Our Clients
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Trusted by India's leading corporations and enterprises
          </p>
        </div>

        {/* Client Logos Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: false,
            }}
            speed={5000}
            allowTouchMove={false}
            simulateTouch={false}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 8,
                spaceBetween: 30,
              },
            }}
            className="client-swiper"
          >
            {clientLogos.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="flex items-center justify-center h-24 lg:h-32 group">
                  <div className="relative w-full h-full transition-all duration-500 transform hover:scale-101">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom CSS for Swiper */}
      <style jsx global>{`
        .client-swiper {
          padding: 20px 0;
          overflow: hidden;
        }
        
        .client-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        
        .client-swiper .swiper-slide {
          height: auto;
          transition: transform 0.3s ease;
        }
        
        .client-swiper .swiper-slide img {
          transition: all 0.3s ease;
          will-change: transform;
        }
        
        .client-swiper .swiper-slide:hover img {
          transform: scale(1.05);
        }
        
        /* Ensure smooth infinite loop */
        .client-swiper .swiper-slide-active {
          transition: none;
        }
      `}</style>
    </section>
  );
}
