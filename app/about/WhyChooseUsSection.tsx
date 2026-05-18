"use client";

import {
  ShieldCheck,
  Cpu,
  Leaf,
  Users,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Engineering Expertise",
    description:
      "Professional aquaculture engineering solutions with advanced technical knowledge and industry expertise.",
  },

  {
    icon: Cpu,
    title: "Smart Automation Systems",
    description:
      "IoT-enabled aquaculture automation with smart monitoring, oxygen management, and remote control systems.",
  },

  {
    icon: Leaf,
    title: "Sustainable Infrastructure",
    description:
      "Eco-friendly Biofloc systems and sustainable water management technologies for long-term efficiency.",
  },

  {
    icon: Users,
    title: "Dedicated Technical Support",
    description:
      "Complete installation, maintenance, consulting, and technical support for aquaculture projects.",
  },
];

const stats = [
  {
    value: "250+",
    label: "Projects Completed",
  },

  {
    value: "12+",
    label: "Years Experience",
  },

  {
    value: "100%",
    label: "Client Satisfaction",
  },

  {
    value: "24/7",
    label: "Technical Support",
  },
];

export default function WhyChooseUsSection() {
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
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

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
                Why Choose Us
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
              Smart Engineering

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
                Sustainable Solutions
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                text-[16px]
                leading-[2]
                text-[#4B5563]
              "
            >
              ARK AQUATECH provides advanced
              aquaculture engineering,
              industrial water management,
              smart automation,
              and sustainable infrastructure
              solutions designed for long-term
              efficiency and commercial success.
            </p>

            {/* FEATURES */}

            <div className="mt-14 space-y-7">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      gap-5
                      rounded-[28px]
                      border
                      border-[#E5E7EB]
                      bg-white
                      p-6
                      shadow-[0_10px_35px_rgba(0,0,0,0.05)]
                      transition-all
                      duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_20px_50px_rgba(10,110,189,0.10)]
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        min-w-[56px]
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-r
                        from-[#0A6EBD]
                        to-[#15176B]
                        shadow-lg
                      "
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* TEXT */}

                    <div>
                      <h3
                        className="
                          text-[24px]
                          font-bold
                          tracking-[-0.03em]
                          text-[#021B2F]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-[15px]
                          leading-[1.9]
                          text-[#6B7280]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CARD */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-[#E5E7EB]
              bg-white
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              sm:p-10
            "
          >
            {/* BACKGROUND */}

            <div
              className="
                absolute
                inset-0
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
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#0A6EBD]
                  to-[#15176B]
                  shadow-xl
                "
              >
                <BadgeCheck className="h-10 w-10 text-white" />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-[38px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#021B2F]
                "
              >
                Trusted By

                <span
                  className="
                    mt-2
                    block
                    bg-gradient-to-r
                    from-[#63C96A]
                    to-[#0A6EBD]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Industries Across India
                </span>
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-6
                  text-[15px]
                  leading-[2]
                  text-[#6B7280]
                "
              >
                From Biofloc fish farming
                and RAS aquaculture systems
                to industrial water treatment
                and smart marine engineering,
                ARK AQUATECH delivers
                high-performance engineering
                solutions for sustainable growth.
              </p>

              {/* STATS */}

              <div className="mt-12 grid grid-cols-2 gap-5">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-[28px]
                      border
                      border-[#E5E7EB]
                      bg-white
                      p-6
                      shadow-sm
                    "
                  >
                    <h4
                      className="
                        text-[36px]
                        font-black
                        tracking-[-0.04em]
                        text-[#021B2F]
                      "
                    >
                      {item.value}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-[1.8]
                        text-[#6B7280]
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}