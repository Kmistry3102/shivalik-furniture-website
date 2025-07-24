"use client";
import React from "react";
import { sellFurnitureSectionData } from "@/app/utils/constant/homeConstant/homeSellFurnitureConstant";
import {
  FaIndustry,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaLightbulb,
  FaCogs,
  FaHandshake,
} from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { LuFactory, LuSettings } from "react-icons/lu";
import { LiaAwardSolid } from "react-icons/lia";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function HomeSellFurnitureSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black lg:py-24 py-16 relative lg:my-12 my-3">
      {/* Background Pattern */}

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Main Content */}
        <div className="lg:text-center text-left lg:space-y-8 space-y-4">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-white leading-tight hidden lg:block">
            {sellFurnitureSectionData.mainHeading
              .split("\n")
              .map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index <
                    sellFurnitureSectionData.mainHeading.split("\n").length -
                      1 && <br />}
                </React.Fragment>
              ))}
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-white leading-tight block lg:hidden">
            {sellFurnitureSectionData.mainHeading}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 font-light leading-relaxed lg:max-w-2xl mx-auto">
            {sellFurnitureSectionData.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row lg:gap-6 gap-4 justify-center lg:mb-16 mb-10">
            {sellFurnitureSectionData.buttons.map((button) => {
              const IconComponent =
                button.icon === "factory" ? HiOutlineBuildingOffice2 : FaHandshake;
              return (
                <button
                  key={button.id}
                  className={`
                    flex items-center justify-center lg:gap-2 gap-1 lg:px-8 px-4 lg:py-3 py-2 rounded font-light lg:text-lg text-base w-fit transition-all duration-500 transform hover:scale-105
                    ${
                      button.variant === "primary"
                        ? "bg-white text-black border-1 border-white hover:bg-white/80 cursor-pointer"
                        : "text-white border-1 bg-white/20 border-white hover:bg-white hover:text-black cursor-pointer"
                    }
                  `}
                  onClick={() => {
                    if (button.id === "explore-manufacturing") {
                      scrollToSection("manufacturing-section");
                    } else if (button.id === "bulk-inquiry") {
                      scrollToSection("lets-build-together-section");
                    }
                  }}
                >
                  <IconComponent className="text-xl" />
                  <span>{button.text}</span>
                  <BiChevronRight className="w-5 h-5" />
                </button>
              );
            })}
          </div>

          {/* Feature Cards */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-3xl mx-auto">
            {sellFurnitureSectionData.featureCards.map((card) => {
              const IconComponent =
                card.icon === "factory" ? FaIndustry : FaAward;
              return (
                <div
                  key={card.id}
                  className="bg-white/10 rounded lg:p-8 p-6 border-1 border-white/20 transition-all duration-300 hover:scale-102"
                >
                  <div className="lg:text-center text-left">
                    <IconComponent className="lg:text-4xl text-2xl mb-4 lg:mx-auto mx-0 text-white " />
                    <h3 className="lg:text-xl text-lg text-white mb-2 font-normal">
                      {card.title}
                    </h3>
                    <p className="text-white/80 font-light lg:text-lg text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
