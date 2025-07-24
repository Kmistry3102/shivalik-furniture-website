"use client";
import React from "react";
import { careerJoinSectionData } from "@/app/utils/constant/careerConstant/CareerJoinConstant";
import CareerForm from "./CareerForm";

export default function CareerJoinSection() {
  const { title, paragraphs } = careerJoinSectionData;
  return (
    <section className="bg-white py-16 lg:py-30 px-4 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Heading & Paragraphs */}
        <div className="lg:space-y-8 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-light">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="lg:text-lg text-base text-gray-700 lg:leading-9 leading-8 mb-6 font-light">
              {p}
            </p>
          ))}
        </div>
        {/* Right Column - Form */}
        <div className="bg-[#fbfbfb] p-8 rounded shadow-md">
          <CareerForm />
        </div>
      </div>
    </section>
  );
}
