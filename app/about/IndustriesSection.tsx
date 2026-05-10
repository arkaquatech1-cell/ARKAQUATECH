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
    <section className="relative overflow-hidden py-16 sm:py-16 lg:py-16">
      {/* BG */}

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
              Industries We Serve
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
            Engineering Solutions For
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
              Diverse Industries
            </span>
          </h2>

          {/* DESC */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[15px]
              leading-[2]
              text-cyan-100/70
              sm:text-[16px]
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

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                "
              >
                {/* BG HOVER */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-cyan-400/10
                    to-emerald-400/10
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
                      bg-cyan-300
                    "
                  >
                    <Icon className="h-8 w-8 text-[#031018]" />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-7
                      text-[28px]
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
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
                      text-cyan-100/70
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
                      font-medium
                      text-cyan-300
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