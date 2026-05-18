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
              Work Process
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
            Our Smart

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
              Engineering Workflow
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
            ARK AQUATECH follows a structured
            engineering workflow to deliver
            sustainable aquaculture systems,
            industrial water management,
            and smart automation solutions
            with maximum efficiency and quality.
          </p>
        </div>

        {/* PROCESS GRID */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

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

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    right-6
                    top-5
                    text-[72px]
                    font-black
                    leading-none
                    tracking-[-0.05em]
                    text-[#0A6EBD]/5
                  "
                >
                  0{index + 1}
                </div>

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
                    {step.title}
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
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}