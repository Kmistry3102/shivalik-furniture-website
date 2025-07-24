"use client";
import React from "react";
import Image from "next/image";
import { founderData } from "@/app/utils/constant/aboutConstant/aboutFounderConstant";
import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function AboutFounderSection() {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "linkedin":
        return <FaLinkedinIn className="w-5 h-5" />;
      case "twitter":
        return <FaXTwitter className="w-5 h-5" />;
      case "facebook":
        return <FaFacebookF className="w-5 h-5" />;
      case "globe":
        return <FaGlobe className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
            {founderData.title}
          </h2>
        </div>
        {/* Founder Content */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left Section - Founder Image and Info */}
          <div className="space-y-6 mx-auto">
            {/* Founder Image */}
            <div className="relative">
              <div className="relative w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] bg-[#fbfbfb] rounded">
                <Image
                  src={founderData.image.src}
                  alt={founderData.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Founder Name and Position */}
            <div className="space-y-3 text-center">
              <h3 className="text-2xl font-normal text-black">
                {founderData.name}
              </h3>
              <p className="text-gray-600 text-lg font-normal">
                {founderData.position}
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 justify-center">
              {founderData.socialMedia.map((social) => (
                <Link
                  target="_blank"
                  key={social.id}
                  href={social.url}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={`Visit ${social.platform}`}
                >
                  {getSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Founder Description */}
          <div className="space-y-6">
            {/* Quote */}
            <div>
              <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed">
                "{founderData.description.quote}"
              </p>
            </div>

            {/* Experience */}
            <div>
              <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed">
                {founderData.description.experience}
              </p>
            </div>

            {/* Vision */}
            <div>
              <p className="text-gray-600 text-lg lg:text-xl font-light leading-relaxed ">
                {founderData.description.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
