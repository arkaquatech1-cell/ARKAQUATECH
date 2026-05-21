"use client";

import { useEffect, useState } from "react";

import {
  X,
  PhoneCall,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LeadGenerationPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000);

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
          bg-[#021526]/80
          backdrop-blur-sm
        "
      />

      {/* POPUP */}

      <div
        className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          overflow-y-auto
          p-3
          sm:p-5
        "
      >
        <div
          className="
            relative
            w-full
            max-w-5xl
            overflow-hidden
            rounded-[22px]
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
            sm:rounded-[34px]
          "
        >
          {/* MOBILE CLOSE BUTTON FIX */}

          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              right-3
              top-3
              z-[100]
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-lg
              text-[#021526]
              transition-all
              duration-300
              hover:rotate-90
              sm:right-5
              sm:top-5
              sm:h-12
              sm:w-12
            "
          >
            <X className="h-5 w-5" />
          </button>

          {/* CONTENT */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
            "
          >
            {/* LEFT SIDE */}

            <div
              className="
                relative
                overflow-hidden
                bg-gradient-to-br
                from-[#021526]
                via-[#0A6EBD]
                to-[#15176B]
                px-5
                py-8
                text-white
                sm:px-10
                sm:py-14
              "
            >
              {/* BG EFFECT */}

              <div
                className="
                  absolute
                  left-[-60px]
                  top-[-60px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-white/10
                  blur-3xl
                "
              />

              <div
                className="
                  absolute
                  bottom-[-80px]
                  right-[-80px]
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-[#63C96A]/20
                  blur-3xl
                "
              />

              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-2
                  backdrop-blur
                "
              >
                <Sparkles className="h-4 w-4 text-[#63C96A]" />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                  "
                >
                  Free Consultation
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-5
                  text-[32px]
                  font-black
                  leading-[1]
                  tracking-[-0.05em]
                  sm:mt-7
                  sm:text-[56px]
                "
              >
                Smart
                <span className="block text-[#63C96A]">
                  Aquaculture
                </span>
                Solutions
              </h2>

              {/* TEXT */}

              <p
                className="
                  mt-5
                  max-w-lg
                  text-[13px]
                  leading-[1.9]
                  text-white/80
                  sm:text-[15px]
                "
              >
                Biofloc systems, RAS aquaculture,
                shrimp farming, industrial water
                treatment, and smart engineering
                solutions for modern aquaculture.
              </p>

              {/* FEATURES */}

              <div className="mt-7 space-y-3 sm:mt-10">
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    p-4
                    backdrop-blur
                  "
                >
                  <h3 className="text-sm font-bold">
                    Modern Farm Systems
                  </h3>

              
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    p-4
                    backdrop-blur
                  "
                >
                  <h3 className="text-sm font-bold">
                    Smart Water Technology
                  </h3>

                  <p className="mt-1 text-xs text-white/70 sm:text-sm">
                    Water treatment & recirculation
                    systems for better production.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}

            <div
              className="
                px-4
                py-7
                sm:px-10
                sm:py-12
              "
            >
              {/* TITLE */}

              <div>
                <h3
                  className="
                    text-[26px]
                    font-black
                    leading-[1.1]
                    tracking-[-0.04em]
                    text-[#021526]
                    sm:text-[40px]
                  "
                >
                  Let’s Discuss
                  <span className="block text-[#0A6EBD]">
                    Your Project
                  </span>
                </h3>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-[1.8]
                    text-[#6B7280]
                    sm:text-[15px]
                  "
                >
                  Fill the form and our team will
                  contact you quickly.
                </p>
              </div>

              {/* FORM */}

              <form className="mt-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      h-12
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />
                </div>

                {/* MESSAGE */}

                <div className="mt-4">
                  <textarea
                    rows={4}
                    placeholder="Requirement Message"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      py-4
                      text-sm
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                    "
                  />
                </div>

                {/* BUTTONS */}

                <div
                  className="
                    mt-5
                    flex
                    flex-col
                    gap-3
                    sm:mt-7
                    sm:flex-row
                  "
                >
                  <button
                    type="submit"
                    className="
                      group
                      inline-flex
                      h-12
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#0A6EBD]
                      to-[#15176B]
                      px-6
                      text-sm
                      font-semibold
                      text-white
                      shadow-[0_15px_35px_rgba(10,110,189,0.25)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
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

                  <button
                    type="button"
                    className="
                      inline-flex
                      h-12
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      border
                      border-[#0A6EBD]/10
                      bg-[#F4F8FF]
                      px-6
                      text-sm
                      font-semibold
                      text-[#021526]
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
      </div>
    </>
  );
}