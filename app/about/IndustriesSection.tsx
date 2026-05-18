"use client";

import {
  Fish,
  Factory,
  Waves,
  Building2,
  Droplets,
  Ship,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: Fish,
    title: "Fish Farming",
    description:
      "Commercial fish farming infrastructure, Biofloc systems, tanks, aerators, and smart aquaculture engineering.",
  },

  {
    icon: Waves,
    title: "Shrimp Farming",
    description:
      "Advanced shrimp farming systems with RAS technology, oxygen management, and sustainable aquatic solutions.",
  },

  {
    icon: Factory,
    title: "Industrial Water Plants",
    description:
      "Industrial RO plants, ETP, STP, filtration systems, and smart water treatment infrastructure solutions.",
  },

  {
    icon: Building2,
    title: "Aquaculture Infrastructure",
    description:
      "Aquaculture ponds, hatcheries, fish tanks, pipelines, civil works, and sustainable aquatic infrastructure.",
  },

  {
    icon: Droplets,
    title: "Water Management",
    description:
      "Smart water circulation, filtration, treatment, oxygen balancing, and sustainable water systems.",
  },

  {
    icon: Ship,
    title: "Marine Engineering",
    description:
      "Marine infrastructure, aquatic engineering, industrial installations, and sustainable marine projects.",
  },
];

export default function IndustriesSection() {
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
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* GLOW */}

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
        {/* TOP */}

        <div className="mx-auto max-w-4xl text-center">
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
              Industries We Serve
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
            Engineering Solutions For

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
              Diverse Industries
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[16px]
              leading-[2]
              text-[#4B5563]
            "
          >
            ARK AQUATECH delivers advanced
            aquaculture engineering,
            industrial water management,
            smart infrastructure,
            and sustainable marine solutions
            for multiple industries across India.
          </p>
        </div>

        {/* GRID */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-8
                  shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_60px_rgba(10,110,189,0.12)]
                "
              >
                {/* HOVER BG */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-[#0A6EBD]/5
                    to-[#63C96A]/5
                  "
                />

                {/* TOP LINE */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    bg-gradient-to-r
                    from-[#63C96A]
                    via-[#0A6EBD]
                    to-[#15176B]
                  "
                />

                {/* CONTENT */}

                <div className="relative z-10">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#0A6EBD]
                      to-[#15176B]
                      shadow-lg
                    "
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-7
                      text-[28px]
                      font-bold
                      leading-tight
                      tracking-[-0.03em]
                      text-[#021B2F]
                    "
                  >
                    {industry.title}
                  </h3>

                  {/* TEXT */}

                  <p
                    className="
                      mt-5
                      text-[15px]
                      leading-[2]
                      text-[#6B7280]
                    "
                  >
                    {industry.description}
                  </p>

                  {/* BUTTON */}

                  <button
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#0A6EBD]
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >
                    Explore Industry

                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}