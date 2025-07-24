"use client";
import React from "react";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 text-sm py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0 pb-4">
          {/* Logo + Contact */}
          <div className="">
            <Image
              src="/footer-logo.png"
              alt="Shivalik Furniture Logo"
              width={160}
              height={60}
              className="mb-4 filter invert brightness-2"
            />
            <div className="space-y-2">
              <div className="text-white text-base lg:text-lg">
                <p>
                  Shivalik Furniture <br /> Crafted for comfort. Designed for
                  life.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <div className=" transition-colors group hover:scale-105 duration-500">
                <Link
                  href="https://www.instagram.com/shivalik_furniture/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-white text-white/80 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </Link>
              </div>
              <div className=" transition-colors group hover:scale-105 duration-500">
                <Link
                  href="https://www.facebook.com/people/Shivalik-Furniture/61570508726584/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-white text-white/80 transition-colors"
                >
                  <FaFacebook className="text-2xl" />
                </Link>
              </div>
              <div className=" transition-colors group hover:scale-105 duration-500">
                <Link
                  href="https://www.linkedin.com/company/shivalik-furniture/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3By0GECyMVSx2%2BNl8EcNL7hw%3D%3D/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-white text-white/80 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-col items-start gap-2 md:gap-4">
            <button
              onClick={() => {
                const element =
                  document.getElementsByClassName("factory-section");
                if (element) {
                  element[0]?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-base lg:text-lg cursor-pointer"
            >
              Shivalik Factory
            </button>
            <button
              onClick={() => {
                const element = document.getElementsByClassName("brand-section");
                if (element) {
                  element[0]?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-base lg:text-lg cursor-pointer"
            >
              Shivalik Furniture
            </button>
            <button
              onClick={() => {
                const element = document.getElementsByClassName("interior-solutions-section");
                if (element) {
                  element[0]?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-base lg:text-lg cursor-pointer"
            >
              Shivalik Interiors
            </button>
            <button
              onClick={() => {
                const element = document.getElementsByClassName("career-section");
                if (element) {
                  element[0]?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-base lg:text-lg cursor-pointer"
            >
              Career
            </button>
            <button
              onClick={() => {
                const element = document.getElementsByClassName("franchise-section");
                if (element) {
                  element[0]?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors text-base lg:text-lg cursor-pointer"
            >
              Franchise
            </button>
          </nav>

          {/* Social Icons */}
          <div className="space-y-2">
            <div className="space-y-4">
              <Link
                href="mailto:furniture@shivalikgroup.com"
                className="hover:underline hover:text-white transition-colors flex items-center gap-2 text-base lg:text-lg"
              >
                <FiMail className="text-base lg:text-xl" />{" "}
                furniture@shivalikgroup.com
              </Link>
              <Link
                href="tel:+917575056780"
                className="hover:underline hover:text-white transition-colors flex items-center gap-2 text-base lg:text-lg"
              >
                <FiPhone className="text-base lg:text-xl" /> +91 75750 56780
              </Link>
              <Link
                href="https://www.google.com/maps/place/Shivalik+House/@23.0275788,72.5082116,1000m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e9b41236d4b1b:0xab774f3c5c086bd3!8m2!3d23.0275739!4d72.5107865!16s%2Fg%2F1tx4mrvg?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D" // TODO: Change to actual map link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white transition-colors flex items-start gap-2 text-base lg:text-lg"
              >
                <FiMapPin className="text-base lg:text-xl mt-2" /> Beside
                Satellite Police Station, <br /> Satellite, Ahmedabad, Gujarat
                380015
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#232733] pt-3 flex flex-col md:flex-row justify-between items-center lg:text-lg text-sm text-[#A1A1AA] gap-2">
          <div>© 2025 Shivalik Furniture. All rights reserved.</div>

          <div>
            Powered By:{" "}
            <Link
              href="https://shivalikgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Shivalik Group
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
