"use client";
import React from "react";
import { manufacturingSectionData } from "@/app/utils/constant/homeConstant/homeManufacturingConstant";
import { LuFactory } from "react-icons/lu";
import { FiGrid, FiSettings, FiSun, FiTrendingUp } from "react-icons/fi";

export default function HomeManufacturingSection() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "factory":
        return LuFactory;
      case "leaf":
        return FiSun;
      case "award":
        return FiGrid;
      case "lightning":
        return FiSettings;
      case "clock":
        return FiTrendingUp ;
      default:
        return LuFactory;
    }
  };

  return (
    <section id="manufacturing-section" className="bg-white lg:py-24 py-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="lg:space-y-6 space-y-4 lg:text-center text-left lg:mb-12 mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-black leading-tight">
            {manufacturingSectionData.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
            {manufacturingSectionData.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4 justify-items-center">
          {manufacturingSectionData.featureCards.map((card) => {
            const IconComponent = getIconComponent(card.icon);
            return (
              <div
                key={card.id}
                className="bg-white rounded p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="lg:text-center text-left">
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="lg:text-4xl text-2xl lg:mx-auto mx-0 text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="lg:text-xl text-lg font-normal text-black lg:mb-3 mb-2 leading-tight">
                    {card.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-700 font-light lg:text-lg text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
