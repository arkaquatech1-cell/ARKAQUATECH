"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  "Advanced Biofloc Systems",
  "Smart RAS Technology",
  "Industrial Water Management",
  "IoT Aquaculture Automation",
];

export default function CompanyIntroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
      "
    >
      {/* BACKGROUND EFFECT */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0A6EBD]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#63C96A]/10
            blur-[140px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,110,189,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* CONTAINER */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* IMAGE SIDE */}

          <div className="relative">
            {/* GLOW */}

            <div
              className="
                absolute
                inset-0
                rounded-[40px]
                bg-[#0A6EBD]/10
                blur-3xl
              "
            />

            {/* IMAGE CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-[#E5E7EB]
                bg-white
                shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src="/images/about.png"
                alt="ARK AQUATECH"
                width={900}
                height={900}
                className="
                  h-[500px]
                  w-full
                  object-cover
                  lg:h-[620px]
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#021B2F]/70
                  via-transparent
                  to-transparent
                "
              />

              {/* FLOATING CARD */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  rounded-[28px]
                  border
                  border-white/20
                  bg-white/80
                  p-6
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <h3
                  className="
                    text-[32px]
                    font-black
                    text-[#021B2F]
                  "
                >
                  12+ Years Experience
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-[1.9]
                    text-[#4B5563]
                  "
                >
                  Delivering sustainable
                  aquaculture engineering and
                  smart water management
                  solutions across India.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}

          <div>
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
              <Sparkles className="h-4 w-4 text-[#0A6EBD]" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#021B2F]
                "
              >
                Company Introduction
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-8
                text-[40px]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-[#021B2F]
                sm:text-[56px]
                lg:text-[72px]
              "
            >
              Building Sustainable

              <span
                className="
                  mt-3
                  block
                  bg-gradient-to-r
                  from-[#63C96A]
                  via-[#0A6EBD]
                  to-[#15176B]
                  bg-clip-text
                  text-transparent
                "
              >
                Aquaculture Solutions
              </span>
            </h2>

            {/* PARAGRAPHS */}

            <p
              className="
                mt-8
                text-[16px]
                leading-[2]
                text-[#4B5563]
              "
            >
              ARK AQUATECH is a leading
              aquaculture engineering company
              specializing in Biofloc fish farming,
              RAS systems, industrial water
              treatment, marine infrastructure,
              and smart aquaculture automation
              solutions across India.
            </p>

            <p
              className="
                mt-6
                text-[16px]
                leading-[2]
                text-[#4B5563]
              "
            >
              We provide innovative engineering
              solutions for commercial fish farming,
              shrimp farming, sustainable aquatic
              infrastructure, industrial water
              management, and advanced
              aquaculture technologies.
            </p>

            {/* FEATURES */}

            <div
              className="
                mt-10
                grid
                gap-5
                sm:grid-cols-2
              "
            >
              {features.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-white
                    p-4
                    shadow-sm
                  "
                >
                  <CheckCircle2 className="h-5 w-5 text-[#0A6EBD]" />

                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#374151]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}

            <div className="mt-12">
              <Link
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#0A6EBD]
                  to-[#15176B]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_15px_35px_rgba(10,110,189,0.25)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Explore Services

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}