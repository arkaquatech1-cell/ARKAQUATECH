// components/home/WhyChooseUsSection.tsx

"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Waves,
  Fish,
  Sparkles,
  ArrowRight,
  Leaf,
} from "lucide-react";

import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Advanced Technology",
    desc:
      "Modern aquaculture technologies including Biofloc systems, RAS farming, smart filtration, and automated marine infrastructure solutions.",
  },

  {
    icon: Waves,
    title: "Smart Water Management",
    desc:
      "Professional industrial water treatment systems with intelligent monitoring and sustainable aquatic ecosystem management.",
  },

  {
    icon: Fish,
    title: "Commercial Fish Farming",
    desc:
      "Complete fish farming, shrimp farming, and crab farming solutions designed for high productivity and long-term profitability.",
  },

  {
    icon: Leaf,
    title: "Eco-Friendly Solutions",
    desc:
      "Sustainable aquaculture engineering focused on eco-friendly marine farming and efficient water recycling systems.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#03131d]">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* MAIN GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

        {/* CYAN GLOW */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-220px]
            left-[-220px]
            w-[650px]
            h-[650px]
            rounded-full
            bg-cyan-400/10
            blur-[180px]
          "
        />

        {/* EMERALD GLOW */}

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-220px]
            right-[-220px]
            w-[650px]
            h-[650px]
            rounded-full
            bg-emerald-400/10
            blur-[180px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* TOP */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-300/15
              bg-white/[0.04]
              backdrop-blur-xl
              px-6
              py-3
            "
          >
            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wide">
              Why Choose ARK AQUATECH
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-10
              text-[50px]
              md:text-[74px]
              leading-[0.95]
              tracking-[-0.05em]
              font-black
              text-white
            "
          >
            Smart Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture Experts
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              text-lg
              md:text-xl
              leading-[2]
              text-cyan-100/70
            "
          >
            ARK AQUATECH provides advanced aquaculture
            infrastructure, Biofloc technology, RAS systems,
            industrial water treatment, shrimp farming, and
            sustainable marine engineering solutions for
            modern aquaculture industries across India.
          </p>
        </motion.div>

        {/* FEATURES */}

        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-3xl
                  p-8
                  shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                "
              >
                {/* HOVER LIGHT */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-300/10 to-emerald-300/10" />

                {/* ICON */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-20
                    h-20
                    rounded-3xl
                    bg-gradient-to-br
                    from-cyan-300
                    via-sky-400
                    to-emerald-300
                    text-[#03131d]
                    shadow-[0_0_40px_rgba(34,211,238,0.35)]
                  "
                >
                  <Icon className="w-10 h-10" />
                </motion.div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3
                    className="
                      mt-8
                      text-[30px]
                      leading-tight
                      font-black
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-cyan-100/70
                      leading-[2]
                      text-[15px]
                    "
                  >
                    {item.desc}
                  </p>
                </div>

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    top-5
                    right-6
                    text-[90px]
                    font-black
                    leading-none
                    text-white/[0.03]
                  "
                >
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            mt-24
            p-10
            md:p-14
          "
        >
          {/* LIGHT */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-cyan-300/15
                  bg-white/[0.04]
                  px-5
                  py-2
                "
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />

                <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wide">
                  Sustainable Aquaculture
                </span>
              </div>

              <h3
                className="
                  mt-6
                  text-[42px]
                  md:text-[58px]
                  leading-[0.95]
                  tracking-[-0.04em]
                  font-black
                  text-white
                "
              >
                Future Ready
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Marine Infrastructure
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
                  text-lg
                  leading-[2]
                  text-cyan-100/70
                "
              >
                ARK AQUATECH continues to innovate in smart
                fish farming, Biofloc systems, industrial RO
                plants, sustainable marine engineering, and
                commercial aquaculture infrastructure for
                modern aquatic businesses.
              </p>

              {/* BUTTON */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    px-8
                    py-4
                    bg-gradient-to-r
                    from-cyan-300
                    via-sky-400
                    to-emerald-300
                    text-[#03131d]
                    font-black
                    tracking-wide
                    shadow-[0_15px_50px_rgba(34,211,238,0.35)]
                  "
                >
                  Contact Our Team

                  <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}