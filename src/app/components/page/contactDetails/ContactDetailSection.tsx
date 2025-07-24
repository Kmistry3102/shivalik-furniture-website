"use client";
import React from "react";
import ContactusForm from "./ContactusForm";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

export default function ContactDetailSection() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Description & Contact Info */}
        <div>
          <p className="lg:text-xl text-base text-gray-700 lg:leading-9 leading-8 mb-6 font-light">
            Our dedicated support team is ready to address any concerns or
            issues you may encounter. Count on us for prompt assistance and
            reliable solutions.
          </p>
          <div className="mt-8">
            <h3 className="lg:text-2xl font-normal text-black mb-6">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-black" />
                <Link
                  href="tel:+917575056780"
                  className="text-gray-700 font-light lg:text-lg text-base hover:underline hover:font-normal"
                >
                  +91 75750 56780
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-black" />
                <Link
                  href="mailto:furniture@shivalikgroup.com"
                  className="text-gray-700 font-light lg:text-lg text-base hover:underline hover:font-normal"
                >
                  furniture@shivalikgroup.com
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-black mt-1" />
                <span className="text-gray-700 font-light lg:text-lg text-base">
                  Beside Satellite Police Station, Satellite, Ahmedabad, Gujarat
                  380015
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Form Card */}
        <div className="bg-[#fafafa] p-8 rounded-xl shadow max-w-lg w-full mx-auto">
          <h3 className="lg:text-2xl font-light text-black mb-8">
            Send us a Message
          </h3>
          <ContactusForm />
        </div>
      </div>
    </section>
  );
}
