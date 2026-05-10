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
                Why Choose Us
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
              Smart Engineering
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
                Sustainable Solutions
              </span>
            </h2>

            {/* DESC */}

            <p
              className="
                mt-8
                text-[15px]
                leading-[2]
                text-cyan-100/70
                sm:text-[16px]
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

            <div className="mt-12 space-y-7">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      gap-5
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
                        bg-cyan-300
                      "
                    >
                      <Icon className="h-7 w-7 text-[#031018]" />
                    </div>

                    {/* TEXT */}

                    <div>
                      <h3
                        className="
                          text-[24px]
                          font-semibold
                          tracking-[-0.03em]
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-[15px]
                          leading-[1.9]
                          text-cyan-100/70
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

          {/* RIGHT */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              sm:p-10
              backdrop-blur-xl
            "
          >
            {/* BG */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-400/[0.08]
                to-emerald-400/[0.04]
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
                  bg-cyan-300
                "
              >
                <BadgeCheck className="h-10 w-10 text-[#031018]" />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-[36px]
                  font-semibold
                  leading-[1]
                  tracking-[-0.04em]
                  text-white
                "
              >
                Trusted By
                <span
                  className="
                    mt-2
                    block
                    text-cyan-300
                  "
                >
                  Industries Across India
                </span>
              </h3>

              {/* DESC */}

              <p
                className="
                  mt-6
                  text-[15px]
                  leading-[2]
                  text-cyan-100/70
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
                      rounded-3xl
                      border
                      border-white/10
                      bg-black/20
                      p-6
                    "
                  >
                    <h4
                      className="
                        text-[36px]
                        font-semibold
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      {item.value}
                    </h4>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-[1.8]
                        text-white/65
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