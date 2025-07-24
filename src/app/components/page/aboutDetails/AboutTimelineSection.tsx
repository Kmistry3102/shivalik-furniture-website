"use client";
import React, { useRef, useEffect, useState } from "react";
import { timelineSectionData } from "@/app/utils/constant/aboutConstant/aboutTimelineConstant";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

export default function AboutTimelineSection() {
  return (
    <section className="lg:py-24 py-16 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight mb-10 lg:mb-16">
          {timelineSectionData.title}
        </h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className=" absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-300 z-0 rounded" />
          <div className="flex flex-col gap-10 lg:gap-20">
            {timelineSectionData.items.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const [ref, inView] = useInView(0.2);
              return (
                <div key={idx} className="relative flex min-h-[120px]">
                  {/* Card */}
                  <div
                    ref={ref}
                    className={`w-full lg:w-1/2 z-10 flex transition-all duration-700 ease-out
                      ${
                        isLeft
                          ? "lg:pr-16 justify-end"
                          : "lg:pl-16 justify-start lg:ml-auto"
                      }
                      ${
                        inView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }
                    `}
                  >
                    <div className="bg-white rounded shadow-md p-6 max-w-md w-full border-l-4 border-black space-y-2">
                      <div className="text-black text-2xl font-normal leading-relaxed">
                        {item.year}
                      </div>
                      <div className="text-black text-lg font-normal leading-relaxed">
                        {item.label}
                      </div>
                      <div className="text-black text-lg font-light leading-relaxed">
                        {item.subtitle}
                      </div>
                      <div className="text-gray-600 text-lg font-light leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <span className="w-4 h-4 bg-white border-2 border-gray-400 rounded-full shadow block" />
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
