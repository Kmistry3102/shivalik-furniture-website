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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="lg:space-y-6 space-y-4 text-center lg:mb-12 mb-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
            {manufacturingSectionData.title}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
            {manufacturingSectionData.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {manufacturingSectionData.featureCards.map((card) => {
            const IconComponent = getIconComponent(card.icon);
            return (
              <div
                key={card.id}
                className="bg-white rounded p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="text-4xl mx-auto text-black group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-normal text-black mb-3 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 font-light text-lg leading-relaxed">
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
