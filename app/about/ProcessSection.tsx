"use client";

import {
  Search,
  ClipboardCheck,
  PenTool,
  Wrench,
  Cpu,
  Headphones,
  Sparkles,
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Consultation & Analysis",
    description:
      "We understand project requirements, site conditions, water management needs, and aquaculture goals.",
  },

  {
    icon: ClipboardCheck,
    title: "Planning & Strategy",
    description:
      "Our experts create detailed engineering plans, system layouts, and sustainable infrastructure strategies.",
  },

  {
    icon: PenTool,
    title: "Design & Engineering",
    description:
      "Advanced system designs for Biofloc, RAS aquaculture, automation, and industrial water management.",
  },

  {
    icon: Wrench,
    title: "Installation & Execution",
    description:
      "Professional installation of tanks, filtration systems, pipelines, automation, and marine infrastructure.",
  },

  {
    icon: Cpu,
    title: "Automation Integration",
    description:
      "Smart IoT monitoring, oxygen control, pH systems, sensors, and intelligent aquaculture automation.",
  },

  {
    icon: Headphones,
    title: "Support & Maintenance",
    description:
      "Continuous technical support, maintenance services, upgrades, and operational assistance.",
  },
];

export default function ProcessSection() {
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
              Work Process
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
            Our Smart
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
              Engineering Workflow
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
            ARK AQUATECH follows a structured
            engineering workflow to deliver
            sustainable aquaculture systems,
            industrial water management,
            and smart automation solutions
            with maximum efficiency and quality.
          </p>
        </div>

        {/* PROCESS GRID */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
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
                {/* NUMBER */}

                <div
                  className="
                    absolute
                    right-6
                    top-6
                    text-[64px]
                    font-semibold
                    leading-none
                    tracking-[-0.05em]
                    text-white/[0.04]
                  "
                >
                  0{index + 1}
                </div>

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
                  {step.title}
                </h3>

                {/* DESC */}

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-[2]
                    text-cyan-100/70
                  "
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}