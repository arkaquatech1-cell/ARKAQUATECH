// components/home/AboutSection.tsx

"use client";

import { motion } from "framer-motion";

import {
  Fish,
  Waves,
  ShieldCheck,
  Leaf,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const features = [
  {
    icon: Fish,
    title: "Biofloc Technology",
    desc:
      "Advanced biofloc systems for sustainable fish farming and high-yield aquaculture production.",
  },

  {
    icon: Waves,
    title: "RAS Systems",
    desc:
      "Smart recirculating aquaculture systems with intelligent filtration and water recycling solutions.",
  },

  {
    icon: ShieldCheck,
    title: "Water Management",
    desc:
      "Professional water treatment and monitoring systems for healthy aquatic environments.",
  },

  {
    icon: Leaf,
    title: "Eco Aquaculture",
    desc:
      "Sustainable marine infrastructure solutions for modern eco-friendly aquaculture farming.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#03131d]">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

        {/* GLOW */}

        <div className="absolute top-[-150px] right-[-150px] w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute bottom-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-emerald-400/10 blur-[140px]" />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}

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
          >
            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                px-5
                py-2
                rounded-full
                border
                border-cyan-300/15
                bg-white/[0.04]
                backdrop-blur-xl
              "
            >
              <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

              <span className="text-cyan-100 text-sm font-semibold tracking-wide uppercase">
                About ARK AQUATECH
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-8
                text-[48px]
                md:text-[68px]
                leading-[0.95]
                tracking-[-0.04em]
                font-black
                text-white
              "
            >
              Engineering
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                Smart Aquaculture
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
              ARK AQUATECH is a leading aquaculture company
              providing advanced Biofloc technology, RAS
              systems, shrimp farming infrastructure,
              aquaponics solutions, fish farming technology,
              and intelligent water management systems for
              sustainable marine development.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-[2]
                text-cyan-100/70
              "
            >
              Our mission is to empower modern aquaculture
              businesses with innovative marine engineering,
              eco-friendly fish farming systems, and
              next-generation aquatic infrastructure solutions
              designed for high productivity and long-term
              sustainability.
            </p>

            {/* BUTTON */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="
                  group
                  relative
                  overflow-hidden
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  px-9
                  py-5
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-emerald-300
                  text-[#03131d]
                  font-black
                  tracking-wide
                  shadow-[0_15px_60px_rgba(34,211,238,0.3)]
                "
              >
                {/* SHINE */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform
                    duration-1000
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                  "
                />

                <span className="relative z-10">
                  Discover More
                </span>

                <ArrowRight
                  className="
                    relative
                    z-10
                    w-5
                    h-5
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}

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
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-3xl
              p-8
              overflow-hidden
            "
          >
            {/* LIGHT */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

            {/* FEATURES */}

            <div className="relative z-10 grid gap-6">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                    }}
                    className="
                      flex
                      gap-5
                      rounded-3xl
                      border
                      border-white/5
                      bg-white/[0.03]
                      p-6
                      hover:bg-white/[0.05]
                      transition-all
                      duration-300
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        items-center
                        justify-center
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-br
                        from-cyan-300
                        to-emerald-300
                        shrink-0
                        shadow-[0_10px_30px_rgba(34,211,238,0.25)]
                      "
                    >
                      <Icon className="text-[#03131d]" />
                    </div>

                    {/* TEXT */}

                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-cyan-100/70 leading-[1.9]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}