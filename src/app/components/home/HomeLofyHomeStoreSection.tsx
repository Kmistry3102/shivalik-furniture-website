"use client";
import React, { useState } from "react";
import Image from "next/image";
import { lofyHomeStoreSectionData } from "@/app/utils/constant/homeConstant/homeLofyHomeStoreConstant";
import { BiChevronRight } from "react-icons/bi";
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from "react-icons/fi";

export default function HomeLofyHomeStoreSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {lofyHomeStoreSectionData.title}
          </h1>
          <p className="text-xl text-gray-600 font-light">
            {lofyHomeStoreSectionData.tagline}
          </p>
        </div>

        {/* Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {lofyHomeStoreSectionData.navigationItems.map((item) => (
            <button
              key={item.id}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                item.isActive
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={lofyHomeStoreSectionData.heroImage}
              alt="Lofy Home Store"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Hero Text Overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                {lofyHomeStoreSectionData.heroTitle}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-lg">{lofyHomeStoreSectionData.heroSubtitle}</span>
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                  <BiChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Description & Contact Info */}
          <div className="space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                {lofyHomeStoreSectionData.heroTitle}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {lofyHomeStoreSectionData.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-3">
                {lofyHomeStoreSectionData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Contact Information</h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{lofyHomeStoreSectionData.contactInfo.phone}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">{lofyHomeStoreSectionData.contactInfo.email}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-5 h-5 text-gray-600 mt-1" />
                  <span className="text-gray-700">{lofyHomeStoreSectionData.contactInfo.address}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiExternalLink className="w-5 h-5 text-gray-600" />
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    {lofyHomeStoreSectionData.contactInfo.website}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {lofyHomeStoreSectionData.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={lofyHomeStoreSectionData.formFields.name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={lofyHomeStoreSectionData.formFields.phone}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={lofyHomeStoreSectionData.formFields.email}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all duration-300"
                  required
                  aria-label="Select your interest"
                >
                  <option value="">{lofyHomeStoreSectionData.formFields.interest}</option>
                  <option value="furniture">Furniture</option>
                  <option value="decor">Decor</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={lofyHomeStoreSectionData.formFields.message}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                {lofyHomeStoreSectionData.submitButtonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 