"use client";
import React, { useState, useEffect } from "react";
import { homePartnerSectionData } from "@/app/utils/constant/homeConstant/homePartnerSectionConstant";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import PhoneInput, { CountryData } from "react-phone-input-2";

interface FranchiseFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  investment: string;
  background: string;
}

export default function HomePartnerSection() {
  const { title, subtitle, buttonText } = homePartnerSectionData;
  const [showModal, setShowModal] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FranchiseFormData>();

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const onSubmit = (data: FranchiseFormData) => {
    alert("Inquiry submitted!\n" + JSON.stringify(data, null, 2));
    setShowModal(false);
    reset();
  };

  return (
    <section className="relative flex items-center justify-center min-h-[50vh] py-20 px-4 bg-white franchise-section">
      <div className="absolute inset-0 bg-white/90" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
          {title}
        </h2>
        <p className="text-xl sm:text-2xl text-black font-light leading-relaxed lg:max-w-3xl mx-auto">
          {subtitle}
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded font-light text-lg transition-all duration-500 transform hover:scale-105 bg-black text-white border-1 border-black hover:bg-black/80 cursor-pointer shadow"
        >
          {buttonText}
        </button>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay click closes modal */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            aria-label="Close modal overlay"
            onClick={() => setShowModal(false)}
          />
          <div className="bg-white rounded shadow-xl w-full max-w-lg mx-auto p-8 relative z-50 animate-fadeIn overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="lg:text-2xl text-xl font-light text-black">
                Franchise Inquiry
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-black text-2xl p-1 rounded focus:outline-none font-light"
                aria-label="Close"
              >
                <FiX />
              </button>
            </div>
            {/* Modal Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* First-name */}
              <div>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  placeholder="Full Name"
                  className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                />
                {errors.fullName && (
                  <div className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </div>
                )}
              </div>
              {/* Email */}
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Email Address"
                  className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <div className="text-red-500 text-sm">
                    {errors.email.message}
                  </div>
                )}
              </div>    
              {/* Phone Number */}
              <div className="group">
                <div
                  className={`flex items-center border-b focus-within:border-black ${
                    errors.phoneNumber ? "border-red-500" : "border-neutral-300"
                  }`}
                >
                  {/* Flag and country code selector */}
                  <div className="flex items-center pr-2">
                    <PhoneInput
                      value={countryCode}
                      onChange={(value: string, countryData: CountryData) => {
                        if (
                          countryData &&
                          typeof countryData === "object" &&
                          "countryCode" in countryData &&
                          "dialCode" in countryData
                        ) {
                          setCountryCode("+" + countryData.dialCode);
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
                          fontWeight: 300,
                        },
                      }}
                      buttonClass=""
                      containerClass=""
                      inputClass=""
                      dropdownClass=""
                      disableCountryCode={false}
                      disableDropdown={false}
                    />
                    <span className="ml-8 font-light">{countryCode}</span>
                  </div>
                  {/* Mobile number input */}
                  <input
                    type="tel"
                    maxLength={10}
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Invalid mobile number",
                      },
                      validate: (value: string) =>
                        value.length === 10 || "Phone number must be 10 digits",
                    })}
                    placeholder="Phone Number"
                    className={`w-full border-0 font-light pl-0 focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none`}
                    onKeyPress={(e) => {
                      // Only allow numeric keys (0-9)
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onInput={(e) => {
                      // Remove any non-numeric characters that might get through
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/[^0-9]/g, "");
                    }}
                  />
                </div>
                {errors.phoneNumber && (
                  <div className="mt-1 text-sm text-red-500">
                    {errors.phoneNumber.message as string}
                  </div>
                )}
              </div>
              {/* Investment */}
              <div>
                <input
                  type="text"
                  {...register("investment", {
                    required: "Investment Range is required",
                  })}
                  placeholder="Investment Range"
                  className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none ${
                    errors.investment ? "border-red-500" : ""
                  }`}
                />
                {errors.investment && (
                  <div className="text-red-500 text-sm">
                    {errors.investment.message}
                  </div>
                )}
              </div>
              {/* textarea */}
              <div>
                <textarea
                  {...register("background", {
                    required: "This field is required",
                  })}
                  placeholder="Tell us about your business background and interest"
                  rows={3}
                  className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none resize-none ${
                    errors.background ? "border-red-500" : ""
                  }`}
                />
                {errors.background && (
                  <div className="text-red-500 text-sm">
                    {errors.background.message}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="bg-black text-white py-2.5 px-8 rounded w-fit mt-2 font-light text-lg hover:bg-gray-900 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
