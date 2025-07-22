"use client";
import React from "react";
import { sustainableManufacturingData } from "@/app/utils/constant/homeConstant/homeFactoryConstant";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BiRecycle, BiLeaf } from "react-icons/bi";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "leaf":
      return <BiLeaf className="w-8 h-8" />;
    case "factory":
      return <HiOutlineLightningBolt className="w-8 h-8" />;
    case "tree":
      return <BiRecycle className="w-8 h-8" />;
    default:
      return null;
  }
};

export default function HomeSustainableSection() {
  return (
    <section className="bg-white lg:py-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fbfbfb] rounded p-4 lg:p-12">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-tight lg:mb-6 mb-4">
              {sustainableManufacturingData.title}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-light">
              {sustainableManufacturingData.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {sustainableManufacturingData.features.map((feature) => (
              <div key={feature.id} className="text-center bg-white border border-gray-200 rounded p-4 lg:p-8">
                {/* Icon */}
                <div className="rounded flex items-center justify-center mx-auto mb-6">
                  <div className="text-black">{getIcon(feature.icon)}</div>
                </div>

                {/* Title */}
                <h3 className="lg:text-2xl text-xl font-light text-black tracking-wide mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed lg:text-lg text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
