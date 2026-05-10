"use client";

import {
  Fish,
  Waves,
  Droplets,
  Cpu,
  Building2,
  Factory,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Fish,
    title: "Biofloc Fish Farming",
    description:
      "Advanced Biofloc aquaculture systems designed for sustainable fish farming and high-efficiency aquatic production.",
  },

  {
    icon: Waves,
    title: "RAS Systems",
    description:
      "Modern recirculating aquaculture systems with intelligent water recycling and oxygen management solutions.",
  },

  {
    icon: Droplets,
    title: "Water Treatment",
    description:
      "Industrial RO plants, filtration systems, ETP, STP, and smart water management infrastructure solutions.",
  },

  {
    icon: Cpu,
    title: "IoT Automation",
    description:
      "Smart aquaculture automation with monitoring sensors, feeders, oxygen control, and remote management systems.",
  },

  {
    icon: Building2,
    title: "Aquaculture Infrastructure",
    description:
      "Fish tanks, pond liners, pipelines, pump houses, hatcheries, and commercial aquaculture infrastructure.",
  },

  {
    icon: Factory,
    title: "Marine Engineering",
    description:
      "Sustainable marine engineering and industrial infrastructure solutions for aquatic and industrial projects.",
  },
];

export default function CoreServicesSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* BG */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            top-[-180px]
            left-[-180px]
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
              Core Services
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
            Advanced Aquaculture
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
              Engineering Services
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
            ARK AQUATECH delivers innovative
            aquaculture engineering, smart
            automation, industrial water treatment,
            and sustainable marine infrastructure
            solutions for commercial and industrial
            projects across India.
          </p>
        </div>

        {/* GRID */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

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
                    {service.title}
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
                    {service.description}
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
                    Learn More

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