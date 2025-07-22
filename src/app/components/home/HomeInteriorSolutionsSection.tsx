"use client";
import React, { useState } from "react";
import Image from "next/image";
import { homeInteriorSolutionsData } from "@/app/utils/constant/homeConstant/homeInteriorSolutionsConstant";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import HomeInteriorProjectsSection from "./HomeInteriorProjectsSection";

interface FormData {
  first_name: string;
  last_name: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  interest: string;
  message: string;
}

export default function HomeInteriorSolutionsSection() {
  const data = homeInteriorSolutionsData;
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log("Form submitted for", data.title, ":", formData);
    // Add your form submission logic here
  };

  return (
    <>
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
              {data.title}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
              {data.subtitle}
            </p>
          </div>
          <div className="relative mb-16">
            <div className="relative h-[400px] lg:h-[550px] rounded object-top overflow-hidden my-10">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {/* Hero Text Overlay */}
              <div className="absolute bottom-6 left-6 text-white space-y-4 lg:space-y-6 p-2 lg:p-4">
                <h2 className="text-3xl lg:text-5xl font-light">
                  {data.title}
                </h2>
              </div>
            </div>
          </div>
          {/* Content Section - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Description & Contact Info */}
            <div className="space-y-8">
              {/* Description */}
              <div className="space-y-6 mb-6">
                <p className="lg:text-lg text-base text-gray-700 lg:leading-9 leading-8 mb-6 font-light">
                  {data.description}
                </p>
              </div>
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-xl font-normal text-black">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <FiPhone className="w-6 h-6 text-black" />
                    <Link
                      href={`tel:${data.contactInfo.phone}`}
                      className="text-gray-700 font-light lg:text-lg text-base hover:underline hover:font-normal"
                    >
                      {data.contactInfo.phone}
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMail className="w-6 h-6 text-black" />
                    <Link
                      href={`mailto:${data.contactInfo.email}`}
                      className="text-gray-700 font-light lg:text-lg text-base hover:underline hover:font-normal"
                    >
                      {data.contactInfo.email}
                    </Link>
                  </div>
                  <div className="flex items-start gap-2">
                    <FiMapPin className="w-6 h-6 text-black mt-1" />
                    <span className="text-gray-700 font-light lg:text-lg text-base">
                      {data.contactInfo.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TbWorld className="w-6 h-6 text-black " />
                    <Link
                      href={data.contactInfo.link || ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 font-light lg:text-lg text-base transition-colors duration-300 hover:underline hover:font-normal"
                    >
                      {data.contactInfo.website}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Contact Form */}
            <div className="bg-[#fbfbfb] p-8 rounded-lg">
              <h3 className="text-2xl font-normal text-black mb-6">
                Get in Touch
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <input
                        type="text"
                        {...register("first_name", {
                          required: "First name is required",
                        })}
                        placeholder="First Name"
                        className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none ${
                          errors.first_name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.first_name && (
                        <div className="mt-1 text-sm text-red-500">
                          {errors.first_name.message as string}
                        </div>
                      )}
                    </div>
                    {/* Last Name */}
                    <div>
                      <input
                        type="text"
                        {...register("last_name", {
                          required: "Last name is required",
                        })}
                        placeholder="Last Name"
                        className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none ${
                          errors.last_name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.last_name && (
                        <div className="mt-1 text-sm text-red-500">
                          {errors.last_name.message as string}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Phone with Country Code */}
                  <div>
                    <div
                      className={`flex items-center border-0 border-b-1 rounded-none focus:ring-0 ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : isPhoneFocused
                          ? "border-black"
                          : "border-neutral-300"
                      }`}
                    >
                      {/* Flag and country code selector */}
                      <div className="flex items-center">
                        <PhoneInput
                          value={watch("countryCode") || "+91"}
                          onChange={(_, countryData) => {
                            if (
                              countryData &&
                              typeof countryData === "object" &&
                              "countryCode" in countryData &&
                              "dialCode" in countryData
                            ) {
                              setValue("countryCode", "+" + countryData.dialCode);
                            }
                          }}
                          inputProps={{
                            readOnly: true,
                            tabIndex: -1,
                            style: {
                              width: 0,
                              padding: 0,
                              border: "none",
                              background: "transparent",
                            },
                          }}
                          buttonClass=""
                          containerClass=""
                          inputClass=""
                          dropdownClass=""
                          disableCountryCode={false}
                          disableDropdown={false}
                          // @ts-expect-error separateDialCode is supported at runtime
                          separateDialCode
                        />
                        <span className="ml-8 font-light">
                          {watch("countryCode") || "+91"}
                        </span>
                      </div>
                      {/* Mobile number input */}
                      <input
                        type="tel"
                        className="w-full border-0 focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 font-light outline-none"
                        maxLength={10}
                        {...register("phoneNumber", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid mobile number",
                          },
                          validate: (value) =>
                            value.length === 10 ||
                            "Phone number must be 10 digits",
                        })}
                        placeholder="Mobile number"
                        style={{ paddingLeft: 12 }}
                        onFocus={() => setIsPhoneFocused(true)}
                        onBlur={() => setIsPhoneFocused(false)}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.phoneNumber.message as string}
                      </div>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Email Address"
                      className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.email.message as string}
                      </div>
                    )}
                  </div>
                  {/* Interest */}
                  <div>
                    <input
                      type="text"
                      {...register("interest", {
                        required: "Interest is required",
                      })}
                      placeholder="Interested In?"
                      className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none ${
                        errors.interest ? "border-red-500" : ""
                      }`}
                    />
                    {errors.interest && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.interest.message as string}
                      </div>
                    )}
                  </div>
                  {/* Message */}
                  <div>
                    <textarea
                      {...register("message")}
                      placeholder="Your Message"
                      rows={4}
                      className="w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none resize-none"
                    ></textarea>
                  </div>
                  <div className="flex justify-start mt-3 sm:mt-7">
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded bg-black text-white text-sm sm:text-base"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <HomeInteriorProjectsSection />
    </>
  );
} 