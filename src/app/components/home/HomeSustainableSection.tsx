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
    <section className="bg-white lg:py-16 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="lg:bg-[#fbfbfb] bg-white lg:rounded p-0 lg:p-12">
          {/* Section Header */}
          <div className="lg:text-center text-left lg:mb-12 mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black leading-tight lg:mb-6 mb-4">
              {sustainableManufacturingData.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light">
              {sustainableManufacturingData.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {sustainableManufacturingData.features.map((feature) => (
              <div key={feature.id} className="lg:text-center text-left bg-white border border-gray-200 lg:rounded p-4 lg:p-8">
                {/* Icon */}
                <div className="rounded lg:flex md:flex hidden lg:items-center lg:justify-center lg:mx-auto mx-0 mb-6">
                  <div className="text-black">{getIcon(feature.icon)}</div>
                </div>

                {/* Title */}
                <h3 className="lg:text-2xl text-xl font-light text-black tracking-wide lg:mb-4 mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed lg:text-lg text-base font-light">
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
