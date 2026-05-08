// components/home/CTASection.tsx

"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  Waves,
  Fish,
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#03131d]">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* MAIN OCEAN GRADIENT */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0b3b5a_0%,#03131d_45%,#010b12_100%)]" />

        {/* CYAN GLOW */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -50, 0],
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
            bg-cyan-400/15
            blur-[180px]
          "
        />

        {/* EMERALD GLOW */}

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
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
            bg-emerald-400/15
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

        {/* WATER WAVE */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[130px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.44C191.11 92.35 0 30.19 0 30.19V120h1200V16.48s-197.91 78-358.39 44.92C670.59 27.45 562.84-10.3 321.39 56.44z"
              fill="rgba(255,255,255,0.03)"
            />
          </svg>
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            rounded-[45px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            px-8
            md:px-16
            py-20
            md:py-24
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          "
        >
          {/* LIGHT */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

          {/* FLOATING ICONS */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              top-10
              left-10
              hidden
              md:flex
              items-center
              justify-center
              w-16
              h-16
              rounded-2xl
              bg-white/[0.05]
              border
              border-white/10
              backdrop-blur-2xl
            "
          >
            <Fish className="text-cyan-300 w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              top-16
              right-12
              hidden
              md:flex
              items-center
              justify-center
              w-16
              h-16
              rounded-2xl
              bg-white/[0.05]
              border
              border-white/10
              backdrop-blur-2xl
            "
          >
            <Waves className="text-emerald-300 w-8 h-8" />
          </motion.div>

          {/* MAIN CONTENT */}

          <div className="relative z-10 text-center">
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
                px-6
                py-3
                backdrop-blur-xl
              "
            >
              <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

              <span className="text-cyan-100 text-sm font-semibold tracking-wide uppercase">
                Smart Aquaculture Solutions
              </span>
            </div>

            {/* TITLE */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
              }}
              viewport={{
                once: true,
              }}
              className="
                mt-10
                text-[50px]
                md:text-[78px]
                leading-[0.95]
                tracking-[-0.05em]
                font-black
                text-white
              "
            >
              Build The Future Of
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-300
                  via-white
                  to-emerald-300
                  bg-clip-text
                  text-transparent
                "
              >
                Smart Aquaculture
              </span>
            </motion.h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-10
                max-w-4xl
                mx-auto
                text-lg
                md:text-xl
                leading-[2]
                text-cyan-100/70
              "
            >
              ARK AQUATECH specializes in advanced Biofloc
              technology, RAS systems, aquaponics, shrimp
              farming, fish farming infrastructure, industrial
              water treatment systems, and sustainable marine
              engineering solutions for modern aquaculture
              industries across India.
            </p>

            {/* FEATURES */}

            <div className="flex flex-wrap justify-center gap-5 mt-12">
              {[
                "Biofloc Technology",
                "RAS Systems",
                "Fish Farming",
                "Water Treatment",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    backdrop-blur-xl
                  "
                >
                  <Sparkles className="w-4 h-4 text-cyan-300" />

                  <span className="text-white/80 font-semibold text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap justify-center gap-5 mt-14">
              {/* PRIMARY BUTTON */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href="/contact"
                  className="
                    group
                    relative
                    overflow-hidden
                    flex
                    items-center
                    gap-3
                    rounded-full
                    px-10
                    py-5
                    bg-gradient-to-r
                    from-cyan-300
                    via-sky-400
                    to-emerald-300
                    text-[#03131d]
                    font-black
                    tracking-wide
                    shadow-[0_15px_60px_rgba(34,211,238,0.35)]
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
                    Get Started Today
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

              {/* SECOND BUTTON */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
              >
                <Link
                  href="/services"
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-10
                    py-5
                    backdrop-blur-2xl
                    text-white
                    font-bold
                    hover:bg-white/[0.08]
                    transition-all
                    duration-300
                  "
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}