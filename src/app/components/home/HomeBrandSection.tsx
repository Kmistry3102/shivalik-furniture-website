"use client";
import React, { useState } from "react";
import Image from "next/image";
import { brandSectionsData } from "@/app/utils/constant/homeConstant/homeBrandSectionsConstant";
import { BiChevronRight } from "react-icons/bi";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

interface FormData {
  first_name: string;
  last_name: string;
  phoneNumber: string;
  countryCode: string;
  email: string;
  interest: string;
  message: string;
}

export default function HomeBrandSection() {
  const [activeBrand, setActiveBrand] = useState("lofy-home-store");
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const currentBrand =
    brandSectionsData.find((brand) => brand.id === activeBrand) ||
    brandSectionsData[0];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted for", currentBrand.title, ":", data);
    // Add your form submission logic here
  };

  return (
    <section id="brand-section" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
            Shivalik Furniture
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
            Discover our curated collection of premium furniture brands.
          </p>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {brandSectionsData.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand.id || "")}
              className={`px-6 py-3 rounded font-normal transition-all duration-300 ${
                activeBrand === brand.id
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {brand.title}
            </button>
          ))}
        </div>

        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="relative h-[400px] lg:h-[550px] rounded object-top overflow-hidden my-10">
            <Image
              src={currentBrand.heroImage || ""}
              alt={currentBrand.heroTitle || ""}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Hero Text Overlay */}
            <div className="absolute bottom-6 left-6 text-white space-y-4 lg:space-y-6 p-2 lg:p-4">
              <h2 className="text-3xl lg:text-5xl font-light">
                {currentBrand.heroTitle}
              </h2>
              <div className="flex items-center gap-2">
                {currentBrand.id === "lofy-home-store" ? (
                  <Link
                    href="https://www.google.com/maps/@23.1330423,72.5710299,3a,90y,85.16h,93.38t/data=!3m8!1e1!3m6!1sCIHM0ogKEICAgICnivLQtAE!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HYNaFUK90dby497bhHQOAlzQvgmY9M1n41XXRXNX4-ZdM_xKQVk04wyBLLGclTPUjKk-4BhYasWu6y9FdeRvU_6-qx1enUUVaai7QV4rb5iga1lgNm5IO2M-Qp2gV0fKDi5D5er_A%3Dw900-h600-k-no-pi-3.3799999999999955-ya26.926376495361325-ro0-fo100!7i8000!8i4000?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <span className="text-lg">{currentBrand.heroSubtitle}</span>
                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                      <BiChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ) : currentBrand.id === "stanley-level-next" ? (
                  <Link
                    href="https://www.lovestanley.com/virtual-tour-ahmedabad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <span className="text-lg">{currentBrand.heroSubtitle}</span>
                    <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                      <BiChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Description & Contact Info */}
          <div className="space-y-8">
            {/* Description */}
            <div className="space-y-6 mb-6">
              {/* <h3 className="text-2xl lg:text-[40px] font-light text-gray-900 ">
                {currentBrand.heroTitle}
              </h3> */}
              <p className="lg:text-lg text-base text-gray-700 lg:leading-9 leading-8 mb-6 font-light">
                {currentBrand.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-xl font-normal text-black">
                Contact Information
              </h4>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FiPhone className="w-6 h-6 text-black" />
                  <Link
                    href={`tel:${currentBrand.contactInfo.phone}`}
                    className="text-gray-700 font-light lg:text-lg text-base hover:underline hover:font-normal"
                  >
                    {currentBrand.contactInfo.phone}
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <FiMail className="w-6 h-6 text-black" />
                  <Link
                    href={`mailto:${currentBrand.contactInfo.email}`}
                    className="text-gray-700 font-light lg:text-lg text-base hover:underline hover:font-normal"
                  >
                    {currentBrand.contactInfo.email}
                  </Link>
                </div>

                <div className="flex items-start gap-2">
                  <FiMapPin className="w-6 h-6 text-black mt-1" />
                  <span className="text-gray-700 font-light lg:text-lg text-base">
                    {currentBrand.contactInfo.address}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <TbWorld className="w-6 h-6 text-black " />
                  <Link
                    href={currentBrand.contactInfo.link || ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 font-light lg:text-lg text-base transition-colors duration-300 hover:underline hover:font-normal"
                  >
                    {currentBrand.contactInfo.website}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#fbfbfb] p-8 rounded-lg">
            <h3 className="text-2xl font-normal text-black mb-6">
              {currentBrand.formTitle}
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
                      placeholder={currentBrand.formFields.first_name}
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
                      placeholder={currentBrand.formFields.last_name}
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
                    placeholder={currentBrand.formFields.email}
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
                    placeholder={currentBrand.formFields.interest}
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
                    placeholder={currentBrand.formFields.message}
                    rows={4}
                    className="w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-start mt-3 sm:mt-7">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded bg-black text-white text-sm sm:text-base"
                  >
                    {currentBrand.submitButtonText}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
