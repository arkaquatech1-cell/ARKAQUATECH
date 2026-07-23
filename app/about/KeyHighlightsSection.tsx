"use client";

import { motion } from "framer-motion";
import {
  Award,
  MapPinned,
  Settings2,
  Workflow,
  Leaf,
  Building2,
  Cpu,
  GraduationCap,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    icon: Award,
    title: "50+ Commercial Aquaculture Projects",
    description:
      "Delivering customized aquaculture infrastructure solutions across diverse farming environments.",
  },
  {
    number: "02",
    icon: MapPinned,
    title: "Multi-State Infrastructure Installations",
    description:
      "Successfully executing aquaculture projects across multiple regions with scalable engineering capabilities.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Precision-Engineered Farming Systems",
    description:
      "Advanced Biofloc, RAS, SIPNSF, hatchery, and water management systems designed for performance and operational efficiency.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "End-to-End Aquaculture Development",
    description:
      "From concept planning and infrastructure design to installation, technical support, and operational guidance.",
  },
  {
    number: "05",
    icon: Leaf,
    title: "Smart & Sustainable Solutions",
    description:
      "Focused on intelligent water management, resource optimization, and environmentally responsible farming practices.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Customized Commercial Infrastructure",
    description:
      "Tailor-made aquaculture systems developed based on farm requirements, production goals, and operational needs.",
  },
  {
    number: "07",
    icon: Cpu,
    title: "Technology-Driven Engineering",
    description:
      "Integrating modern aquaculture technologies with practical engineering solutions for long-term farm productivity.",
  },
  {
    number: "08",
    icon: GraduationCap,
    title: "Training & Operational Support",
    description:
      "Providing technical consultancy, farm management guidance, and Build-Operate-Transfer (BOT) services for sustainable operations.",
  },
];

export default function KeyHighlightsSection() {
  return (
    <section className="relative overflow-hidden bg-[#021B2F] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0A6EBD]/25 blur-[150px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#63C96A]/15 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          {/* LABEL */}

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#63C96A]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/80">
              Our Capabilities
            </span>
          </div>

          {/* TITLE */}

          <h2 className="mt-6 text-[38px] font-black leading-[1.08] tracking-[-0.04em] text-white sm:text-[48px] lg:text-[56px]">
            Key
            <span className="ml-3 bg-gradient-to-r from-[#54B5FF] to-[#63C96A] bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-300 sm:text-base">
            Engineering expertise, intelligent technologies and practical
            capabilities built to support high-performance commercial
            aquaculture.
          </p>
        </motion.div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  min-h-[320px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.055]
                  p-6
                  backdrop-blur-sm
                  transition-colors
                  duration-500
                  hover:border-[#63C96A]/30
                  hover:bg-white/[0.09]
                  sm:p-7
                "
              >
                {/* CARD LIGHT */}

                <div
                  className="
                    absolute
                    -right-20
                    -top-20
                    h-[180px]
                    w-[180px]
                    rounded-full
                    bg-[#0A6EBD]/20
                    blur-[70px]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* LARGE NUMBER */}

                <span
                  className="
                    absolute
                    right-5
                    top-3
                    text-[70px]
                    font-black
                    leading-none
                    text-white/[0.035]
                    transition-all
                    duration-500
                    group-hover:text-white/[0.06]
                  "
                >
                  {item.number}
                </span>

                {/* CONTENT */}

                <div className="relative z-10 flex h-full flex-col">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[58px]
                      w-[58px]
                      items-center
                      justify-center
                      rounded-[19px]
                      border
                      border-white/10
                      bg-white/[0.08]
                      text-[#63C96A]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:border-[#0A6EBD]
                      group-hover:bg-[#0A6EBD]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      className="h-6 w-6"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* NUMBER LABEL */}

                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-[2px] w-5 bg-[#63C96A]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#63C96A]">
                      Capability {item.number}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-4 text-[18px] font-black leading-[1.4] tracking-[-0.01em] text-white sm:text-[19px]">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-4 text-[13px] leading-7 text-slate-300 sm:text-[14px]">
                    {item.description}
                  </p>

                  {/* BOTTOM LINE */}

                  <div className="mt-auto pt-7">
                    <div className="h-[2px] w-10 rounded-full bg-[#63C96A] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM FEATURE BAR
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-5
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.05]
            px-6
            py-6
            backdrop-blur-sm
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:px-8
          "
        >
          <div className="flex items-center gap-4">
            {/* ACTIVE ICON */}

            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#63C96A] opacity-40" />

              <span className="relative h-3 w-3 rounded-full bg-[#63C96A]" />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Smart Aquaculture. Engineered for Growth.
              </p>

              <p className="mt-1 text-xs leading-6 text-slate-400">
                From infrastructure development to operational support.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#63C96A]">
              ARK AQUATECH
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}