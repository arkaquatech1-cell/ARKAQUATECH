"use client";

import { useEffect, useState } from "react";

import {
  X,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

export default function LeadGenerationPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <>
      {/* OVERLAY */}

      <div
        className="
          fixed
          inset-0
          z-[9998]
          bg-[#021B2F]/60
          backdrop-blur-sm
        "
      />

      {/* POPUP */}

      <div
        className="
          fixed
          left-1/2
          top-1/2
          z-[9999]
          w-[94%]
          max-w-2xl
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-[#E5E7EB]
            bg-white
            shadow-[0_30px_120px_rgba(0,0,0,0.20)]
          "
        >
          {/* BACKGROUND */}

          <div className="absolute inset-0 overflow-hidden">
            <div
              className="
                absolute
                left-[-120px]
                top-[-120px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#0A6EBD]/10
                blur-[120px]
              "
            />

            <div
              className="
                absolute
                bottom-[-120px]
                right-[-120px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#63C96A]/10
                blur-[120px]
              "
            />
          </div>

          {/* CLOSE BUTTON */}

          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              right-5
              top-5
              z-20
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-[#F4F8FF]
              text-[#021B2F]
              transition-all
              duration-300
              hover:bg-[#E8F0FF]
            "
          >
            <X className="h-5 w-5" />
          </button>

          {/* CONTENT */}

          <div className="relative z-10 p-8 sm:p-12">
            {/* TOP */}

            <div className="text-center">
              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#0A6EBD]/10
                  bg-[#F4F8FF]
                  px-5
                  py-2.5
                "
              >
                <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    font-semibold
                    text-[#021B2F]
                  "
                >
                  Get Free Consultation
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-7
                  text-[36px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#021B2F]
                  sm:text-[52px]
                "
              >
                Generate Better

                <span
                  className="
                    mt-2
                    block
                    bg-gradient-to-r
                    from-[#63C96A]
                    via-[#0A6EBD]
                    to-[#15176B]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Aquaculture Results
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-[15px]
                  leading-[2]
                  text-[#6B7280]
                  sm:text-[16px]
                "
              >
                Connect with ARK AQUATECH
                for Biofloc systems,
                RAS aquaculture,
                shrimp farming,
                industrial water treatment,
                and smart aquaculture engineering solutions.
              </p>
            </div>

            {/* FORM */}

            <form className="mt-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {/* NAME */}

                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-5
                      text-sm
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />
                </div>

                {/* COMPANY */}

                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-5
                      text-sm
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />
                </div>

                {/* PHONE */}

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-5
                      text-sm
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      h-14
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-5
                      text-sm
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-5">
                <textarea
                  rows={5}
                  placeholder="Requirement Message"
                  className="
                    w-full
                    rounded-[28px]
                    border
                    border-[#E5E7EB]
                    bg-[#F8FAFC]
                    px-5
                    py-5
                    text-sm
                    text-[#021B2F]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#0A6EBD]
                    focus:bg-white
                  "
                />
              </div>

              {/* BUTTONS */}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    h-14
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#0A6EBD]
                    to-[#15176B]
                    px-8
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_35px_rgba(10,110,189,0.20)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Submit Inquiry

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </button>

                {/* CALLBACK */}

                <button
                  type="button"
                  className="
                    group
                    inline-flex
                    h-14
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    border
                    border-[#0A6EBD]/10
                    bg-[#F4F8FF]
                    px-8
                    text-sm
                    font-semibold
                    text-[#021B2F]
                    transition-all
                    duration-300
                    hover:bg-[#EAF2FF]
                  "
                >
                  <PhoneCall className="h-4 w-4 text-[#0A6EBD]" />

                  Request Callback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}