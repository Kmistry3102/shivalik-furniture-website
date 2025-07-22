"use client";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select, { StylesConfig } from "react-select";
import { letsBuildTogetherSectionData } from "../../utils/constant/homeConstant/homeLetsBuildTogetherConstant";
import { BiChevronRight } from "react-icons/bi";

interface FormData {
  companyName: string;
  contactPerson: string;
  businessEmail: string;
  countryCode: string;
  phoneNumber: string;
  projectType: string;
  estimatedQuantity: string;
  projectTimeline: string;
  projectDetails: string;
}

interface CountryData {
  countryCode: string;
  dialCode: string;
}

interface SelectOption {
  value: string;
  label: string;
}

const INTEREST_SELECT_OPTIONS: SelectOption[] = [
  { value: "office-furniture", label: "Office Furniture" },
  { value: "residential-project", label: "Residential Project" },
  { value: "hospitality", label: "Hospitality" },
  { value: "retail-commercial", label: "Retail/Commercial" },
  { value: "custom-manufacturing", label: "Custom Manufacturing" },
];

const selectStyles: StylesConfig<SelectOption, false> = {
  control: (base, state) => ({
    ...base,
    border: 0,
    borderBottom: `1px solid ${state.isFocused ? "#000" : "#d1d5db"}`,
    borderRadius: 0,
    boxShadow: "none",
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "3rem",
    background: "transparent !important",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#a3a3a3",
    fontSize: "1rem",
    textAlign: "left",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#171717",
    fontSize: "1rem",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#a3a3a3",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#222"
      : state.isFocused
      ? "#f3f3f3"
      : "#fff",
    color: state.isSelected ? "#fff" : "#222",
    cursor: "pointer",
  }),
};

const HomeLetsBuildTogetherSection = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <section
      id="lets-build-together-section"
      className="lg:py-24 py-16 px-4 bg-white "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center lg:mb-12 mb-8 lg:space-y-6 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
            {letsBuildTogetherSectionData.title}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed">
            {letsBuildTogetherSectionData.subtitle}
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-10 mt-24">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Why Choose Section */}
            <div>
              <h2 className="text-2xl font-normal text-black mb-6">
                {letsBuildTogetherSectionData.whyChooseTitle}
              </h2>
              <div className="lg:space-y-6 space-y-4 lg:my-10 my-6">
                {letsBuildTogetherSectionData.whyChooseItems.map(
                  (item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-2xl flex-shrink-0 text-black">
                          <IconComponent className="w-7 h-7"/>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-normal text-xl text-black">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Resources Section */}
            <div className="bg-[#fbfbfb] rounded-lg hover:bg-gray-100 transition-colors duration-200 p-6">
              <h2 className="text-2xl font-normal text-black mb-6">
                {letsBuildTogetherSectionData.resourcesTitle}
              </h2>
              <div className="space-y-4">
                {letsBuildTogetherSectionData.resourceItems.map(
                  (item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index}>
                        <button
                          onClick={() => {
                            if (index === 0) {
                              // First button - redirect to Google Drive
                              window.open("https://drive.google.com/file/d/1DFY8OiKReLwAi_ATemFTh649BbS4PF61/view", "_blank");
                            } else if (index === 1) {
                              // Second button - scroll to certifications section
                              const element = document.getElementById('certifications-section');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }
                          }}
                          className="flex items-center justify-between w-full p-3 rounded cursor-pointer border border-gray-200 bg-white hover:scale-102 transition duration-400"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl text-black">
                              <IconComponent />
                            </span>
                            <span className="font-normal text-black">
                              {item.title}
                            </span>
                          </div>
                            <BiChevronRight className="w-6 h-6 ml-auto text-black" />
                          
                        </button>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#fbfbfb] p-8 rounded-lg">
            <h2 className="text-2xl font-normal text-black mb-6">
              {letsBuildTogetherSectionData.formTitle}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div>
                    <input
                      type="text"
                      {...register("companyName", {
                        required: "Company name is required",
                      })}
                      className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none ${
                        errors.companyName ? "border-red-500" : ""
                      }`}
                      placeholder="Company Name"
                    />
                    {errors.companyName && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.companyName.message as string}
                      </div>
                    )}
                  </div>

                  {/* Contact Person */}
                  <div>
                    <input
                      type="text"
                      {...register("contactPerson", {
                        required: "Contact person is required",
                      })}
                      className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none ${
                        errors.contactPerson ? "border-red-500" : ""
                      }`}
                      placeholder="Contact Person"
                    />
                    {errors.contactPerson && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.contactPerson.message as string}
                      </div>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <input
                      type="email"
                      {...register("businessEmail", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none ${
                        errors.businessEmail ? "border-red-500" : ""
                      }`}
                      placeholder="Email Address"
                    />
                    {errors.businessEmail && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.businessEmail.message as string}
                      </div>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="group">
                    <div
                      className={`flex items-center border-b focus-within:border-black ${
                        errors.phoneNumber
                          ? "border-red-500"
                          : "border-neutral-300"
                      }`}
                    >
                      {/* Flag and country code selector */}
                      <div className="flex items-center pr-2">
                        <PhoneInput
                          value={watch("countryCode") || "+91"}
                          onChange={(
                            value: string,
                            countryData: CountryData
                          ) => {
                            if (
                              countryData &&
                              typeof countryData === "object" &&
                              "countryCode" in countryData &&
                              "dialCode" in countryData
                            ) {
                              setValue(
                                "countryCode",
                                "+" + countryData.dialCode
                              );
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
                        <span className="ml-8 font-light">
                          {watch("countryCode") || "+91"}
                        </span>
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
                            value.length === 10 ||
                            "Phone number must be 10 digits",
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

                  {/* Project Type */}
                  <div>
                    <Controller
                      name="projectType"
                      control={control}
                      rules={{ required: "Please select a purpose" }}
                      render={({ field }) => (
                        <Select<SelectOption>
                          inputId="projectType"
                          name="projectType"
                          options={INTEREST_SELECT_OPTIONS}
                          value={
                            INTEREST_SELECT_OPTIONS.find(
                              (opt) => opt.value === field.value
                            ) || null
                          }
                          onChange={(option) =>
                            field.onChange(option ? option.value : "")
                          }
                          placeholder="Project Type"
                          classNamePrefix="react-select"
                          isSearchable={false}
                          styles={selectStyles}
                          className={`${
                            errors.projectType ? "border-red-500" : ""
                          }`}
                        />
                      )}
                    />
                    {errors.projectType && (
                      <div className="mt-1 text-sm text-red-500">
                        {errors.projectType.message as string}
                      </div>
                    )}
                  </div>

                  {/* Estimated Quantity */}
                  <div>
                    <input
                      type="text"
                      {...register("estimatedQuantity")}
                      className="w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none"
                      placeholder="Estimated Quantity"
                    />
                  </div>
                </div>

                {/* Project Timeline */}
                <div>
                  <input
                    type="text"
                    {...register("projectTimeline")}
                    className="w-full border-0 border-b font-light border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none"
                    placeholder="Project Timeline"
                  />
                </div>

                {/* Project Details */}
                <div>
                  <textarea
                    {...register("projectDetails")}
                    rows={4}
                    className="w-full border-0 border-b border-neutral-300 focus:border-black focus:ring-0 text-neutral-900 px-0 py-4 text-base bg-transparent placeholder-neutral-400 outline-none resize-none"
                    placeholder="Project Details & Requirements"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start mt-3 sm:mt-7">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded bg-black text-white text-sm sm:text-base"
                  >
                    {letsBuildTogetherSectionData.submitButtonText}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLetsBuildTogetherSection;
