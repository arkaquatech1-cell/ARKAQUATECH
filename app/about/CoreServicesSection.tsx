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
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        sm:py-28
        lg:py-32
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
        {/* TOP SECTION */}

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
              Core Services
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
            Advanced Aquaculture

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
              Engineering Services
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
            ARK AQUATECH delivers innovative
            aquaculture engineering, smart
            automation, industrial water treatment,
            and sustainable marine infrastructure
            solutions for commercial and industrial
            projects across India.
          </p>
        </div>

        {/* SERVICES GRID */}

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
                  rounded-[32px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-8
                  shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(10,110,189,0.12)]
                "
              >
                {/* HOVER EFFECT */}

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
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-5
                      text-[15px]
                      leading-[2]
                      text-[#6B7280]
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
                      font-semibold
                      text-[#0A6EBD]
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >
                    Learn More

                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}