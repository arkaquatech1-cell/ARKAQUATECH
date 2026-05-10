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
    <section className="relative overflow-hidden py-14 sm:py-14 lg:py-16">
      {/* BG LIGHT */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/10
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
            bg-emerald-400/10
            blur-[140px]
          "
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
                rounded-[32px]
                bg-cyan-400/10
                blur-3xl
              "
            />

            {/* IMAGE CARD */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
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
                  from-[#031018]
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
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/30
                  p-6
                  backdrop-blur-xl
                "
              >
                <h3
                  className="
                    text-[32px]
                    font-semibold
                    text-white
                  "
                >
                  12+ Years Experience
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-[1.9]
                    text-white/70
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
            {/* SMALL BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-4
                py-2
              "
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-cyan-100/80
                "
              >
                Company Introduction
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-8
                text-[38px]
                font-semibold
                leading-[1]
                tracking-[-0.04em]
                text-white
                sm:text-[52px]
                lg:text-[68px]
              "
            >
              Building Sustainable
              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-200
                  via-white
                  to-emerald-200
                  bg-clip-text
                  text-transparent
                "
              >
                Aquaculture Solutions
              </span>
            </h2>

            {/* PARAGRAPH */}

            <p
              className="
                mt-8
                text-[15px]
                leading-[2]
                text-cyan-100/70
                sm:text-[16px]
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
                text-[15px]
                leading-[2]
                text-cyan-100/70
                sm:text-[16px]
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
                gap-4
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
                  "
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                  <span
                    className="
                      text-sm
                      text-white/75
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}

            <div className="mt-10">
              <Link
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-cyan-300
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-[#031018]
                  transition-all
                  duration-300
                  hover:bg-cyan-200
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