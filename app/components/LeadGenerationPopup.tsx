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
          top-[50%]
          z-[9999]
          w-[92%]
          max-w-2xl
          max-h-[90vh]
          overflow-y-auto
          pb-4
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-[#E5E7EB]
            bg-white
            shadow-[0_30px_120px_rgba(0,0,0,0.20)]
            sm:rounded-[40px]
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
              right-3
              top-3
              z-20
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-[#F4F8FF]
              text-[#021B2F]
              transition-all
              duration-300
              hover:bg-[#E8F0FF]
              sm:right-5
              sm:top-5
              sm:h-11
              sm:w-11
              sm:rounded-2xl
            "
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* CONTENT */}

          <div className="relative z-10 p-5 sm:p-10">
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
                  px-3
                  py-2
                  sm:px-5
                  sm:py-2.5
                "
              >
                <div className="h-2 w-2 rounded-full bg-[#63C96A]" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    font-semibold
                    text-[#021B2F]
                    sm:text-[11px]
                  "
                >
                  Get Free Consultation
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-5
                  text-[28px]
                  font-black
                  leading-[1.05]
                  tracking-[-0.05em]
                  text-[#021B2F]
                  sm:mt-7
                  sm:text-[52px]
                  sm:leading-[0.95]
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
                  mt-4
                  max-w-2xl
                  text-[13px]
                  leading-[1.8]
                  text-[#6B7280]
                  sm:mt-6
                  sm:text-[16px]
                  sm:leading-[2]
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

            <form className="mt-8 sm:mt-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* NAME */}

                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-[13px]
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                      sm:h-14
                      sm:rounded-2xl
                      sm:px-5
                      sm:text-sm
                    "
                  />
                </div>

                {/* COMPANY */}

                <div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-[13px]
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                      sm:h-14
                      sm:rounded-2xl
                      sm:px-5
                      sm:text-sm
                    "
                  />
                </div>

                {/* PHONE */}

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-[13px]
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                      sm:h-14
                      sm:rounded-2xl
                      sm:px-5
                      sm:text-sm
                    "
                  />
                </div>

                {/* EMAIL */}

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#E5E7EB]
                      bg-[#F8FAFC]
                      px-4
                      text-[13px]
                      text-[#021B2F]
                      outline-none
                      transition-all
                      duration-300
                      focus:border-[#0A6EBD]
                      focus:bg-white
                      sm:h-14
                      sm:rounded-2xl
                      sm:px-5
                      sm:text-sm
                    "
                  />
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-4 sm:mt-5">
                <textarea
                  rows={5}
                  placeholder="Requirement Message"
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-[#F8FAFC]
                    px-4
                    py-4
                    text-[13px]
                    text-[#021B2F]
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#0A6EBD]
                    focus:bg-white
                    sm:px-5
                    sm:py-5
                    sm:text-sm
                  "
                />
              </div>

              {/* BUTTONS */}

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                {/* SUBMIT */}

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
                    rounded-xl
                    bg-gradient-to-r
                    from-[#0A6EBD]
                    to-[#15176B]
                    px-6
                    text-[13px]
                    font-semibold
                    text-white
                    shadow-[0_15px_35px_rgba(10,110,189,0.20)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    sm:h-14
                    sm:rounded-2xl
                    sm:px-8
                    sm:text-sm
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
                    h-12
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#0A6EBD]/10
                    bg-[#F4F8FF]
                    px-6
                    text-[13px]
                    font-semibold
                    text-[#021B2F]
                    transition-all
                    duration-300
                    hover:bg-[#EAF2FF]
                    sm:h-14
                    sm:rounded-2xl
                    sm:px-8
                    sm:text-sm
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