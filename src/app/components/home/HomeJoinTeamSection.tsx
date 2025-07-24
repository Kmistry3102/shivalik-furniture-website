import React from "react";
import { homeJoinTeamSectionData } from "@/app/utils/constant/homeConstant/homeJoinTeamSectionConstant";
import Link from "next/link";

export default function HomeJoinTeamSection() {
  const { title, subtitle, buttonText, buttonLink } = homeJoinTeamSectionData;
  return (
    <section className="relative flex items-center justify-center min-h-[60vh] py-20 px-4 bg-black career-section">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
          {title}
        </h2>
        <p className="text-xl sm:text-2xl text-white font-light leading-relaxed lg:max-w-4xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonLink || ""}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded font-light text-lg transition-all duration-500 transform hover:scale-105 bg-white text-black border-1 border-white hover:bg-white/80 cursor-pointer"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
