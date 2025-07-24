"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  code: string;
  phoneNumber: string;
  message: string;
}

const COUNTRY_OPTIONS = [
  { label: "India", value: "in", code: "+91" },
  { label: "United States", value: "us", code: "+1" },
  { label: "United Kingdom", value: "gb", code: "+44" },
  // Add more countries as needed
];

export default function ContactusForm() {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_OPTIONS[0]);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      code: COUNTRY_OPTIONS[0].code,
    },
  });

  const onSubmit = (data: ContactFormData) => {
    alert("Message sent!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="lg:space-y-6 space-y-4">
        {/* first-name */}
        <div>
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
            className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none ${
              errors.firstName ? "border-red-500" : ""
            }`}
            placeholder="First name"
          />
          {errors.firstName && (
            <div className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </div>
          )}
        </div>
        {/* last-name */}
        <div>
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
            className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none ${
              errors.lastName ? "border-red-500" : ""
            }`}
            placeholder="Last name"
          />
          {errors.lastName && (
            <div className="mt-1 text-sm text-red-500">
              {errors.lastName.message}
            </div>
          )}
        </div>
        {/* email */}
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
            className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <div className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </div>
          )}
        </div>
        {/* phone-number */}
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
                value={watch("code") || "+91"}
                onChange={(_, countryData) => {
                  if (
                    countryData &&
                    typeof countryData === "object" &&
                    "countryCode" in countryData &&
                    "dialCode" in countryData
                  ) {
                    setValue("code", "+" + countryData.dialCode);
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
              />
              <span className="ml-8 font-light">{watch("code") || "+91"}</span>
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
                  value.length === 10 || "Phone number must be 10 digits",
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
        {/* message */}
        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            rows={3}
            className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-3 text-base bg-transparent placeholder-neutral-400 outline-none resize-none ${
              errors.message ? "border-red-500" : ""
            }`}
          ></textarea>
          {errors.message && (
            <div className="mt-1 text-sm text-red-500">
              {String(errors.message)}
            </div>
          )}
        </div>
        <div className="flex justify-start mt-3 sm:mt-7">
          <button
            type="submit"
            className="px-6 py-2.5 rounded bg-black text-white text-sm sm:text-base"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
