import Image from "next/image";
import React from "react";

export default function AboutBannerSection() {
  return (
    <section>
      <div className="relative w-full sm:min-h-screen h-[500px]">
        <div className="">
          <Image
            src="/banner/banner-img4.png"
            alt="About Shivalik"
            fill
            className="object-cover w-full h-full"
          />
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Centered Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-6xl px-8 mx-auto text-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-wide  mb-6 leading-tight max-w-3xl mx-auto">
                We Design For Permanence
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white tracking-wide font-light mb-12 max-w-3xl mx-auto">
                At Shivalik Luxe Spaces, we believe that exceptional furniture
                should transcend trends and seasons. Our pieces are designed to
                be cherished heirlooms that grow more beautiful with time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
