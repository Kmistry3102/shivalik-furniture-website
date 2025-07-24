"use client";
import React from "react";
import { homeVideoHeroSectionData } from "@/app/utils/constant/homeConstant/homeVideoHeroSectionConstant";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function HomeVideoHeroSection() {
  const { title, subtitle, videoUrl, externalLink } = homeVideoHeroSectionData;
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <section className="video-hero-section bg-white text-black py-16 md:py-24 flex flex-col items-center justify-center">
      <div className="w-full mx-auto text-center mb-10 px-4 lg:space-y-6 space-y-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
          {title}
        </h2>
        <p className="text-xl sm:text-2xl text-black font-light leading-relaxed lg:max-w-4xl mx-auto">
          {subtitle}
        </p>
      </div>
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
        <Link
          href={externalLink || ""}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 md:top-4 md:right-4 z-20 text-gray-300 hover:text-white transition-colors"
          aria-label="Open video in new tab"
        >
          <FiExternalLink size={24} />
        </Link>
        <div className="w-full aspect-[16/7] bg-black rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
          {!showVideo ? (
            <button
              className="absolute inset-0 flex items-center justify-center w-full h-full group focus:outline-none"
              onClick={() => setShowVideo(true)}
              aria-label="Play video"
            >
              <Image
                priority
                fill
                src="/shivalik-video-poster.png"
                alt="Shivalik Furniture Video Poster"
                className="object-cover transition-opacity duration-300 w-full h-full rounded"
                style={{ pointerEvents: "none" }}
              />
             <IoPlayCircleOutline className="text-white/80 lg:text-8xl text-4xl cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
             
            </button>
          ) : (
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover object-top rounded-lg"
              poster="/shivalik-video-poster.png"
              muted
              loop
              playsInline
            />
          )}
        </div>
      </div>
      <style jsx>{`
        .video-hero-section {
          min-height: 70vh;
        }
      `}</style>
    </section>
  );
}
