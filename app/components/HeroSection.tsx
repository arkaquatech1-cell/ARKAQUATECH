// components/home/HeroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Waves,
  Fish,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#03131d] pt-36">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* MAIN SEA GRADIENT */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0c4a6e_0%,#03131d_45%,#010b12_100%)]" />

        {/* TOP LIGHT */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_45%)]" />

        {/* CYAN GLOW */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-250px]
            left-[-250px]
            w-[700px]
            h-[700px]
            rounded-full
            bg-cyan-400/20
            blur-[180px]
          "
        />

        {/* EMERALD GLOW */}

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-250px]
            right-[-250px]
            w-[750px]
            h-[750px]
            rounded-full
            bg-emerald-400/20
            blur-[180px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* WAVE */}

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[150px]"
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

      <div className="relative z-10 max-w-[1550px] mx-auto px-6 lg:px-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-24 items-center w-full">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            {/* BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-cyan-300/15
                bg-white/[0.04]
                backdrop-blur-2xl
                px-6
                py-3
                shadow-[0_0_50px_rgba(34,211,238,0.12)]
              "
            >
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full bg-cyan-300 animate-ping" />

                <div className="relative w-2.5 h-2.5 rounded-full bg-cyan-200" />
              </div>

              <span className="text-cyan-100 text-sm font-bold tracking-wide uppercase">
                Smart Marine Infrastructure
              </span>
            </motion.div>

            {/* TITLE */}

            <h1
              className="
                mt-10
                text-[58px]
                md:text-[92px]
                leading-[0.92]
                tracking-[-0.06em]
                font-black
                text-white
              "
            >
              Next Generation
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-cyan-200
                  via-white
                  to-emerald-200
                  bg-clip-text
                  text-transparent
                "
              >
                Aquaculture
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-10
                max-w-2xl
                text-[18px]
                md:text-[21px]
                leading-[2]
                text-cyan-50/70
                font-medium
              "
            >
              ARK AQUATECH is a leading aquaculture company
              delivering advanced Biofloc technology, RAS
              systems, shrimp farming infrastructure, crab
              farming solutions, fish farming technology,
              marine engineering, and smart water treatment
              systems for sustainable aquaculture growth.
            </p>

            {/* SEO TAGS */}

            <div className="flex flex-wrap gap-4 mt-10">
              {[
                "Biofloc Technology",
                "RAS Systems",
                "Shrimp Farming",
                "Fish Farming",
                "Water Treatment",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    backdrop-blur-xl
                    text-white/80
                    font-semibold
                    text-sm
                    shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                  "
                >
                  {item}
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="flex flex-wrap items-center gap-5 mt-12">
              {/* BUTTON */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  href="/services"
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
                    Explore Services
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

              {/* CONTACT BUTTON */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
              >
                <Link
                  href="/contact"
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-9
                    py-5
                    backdrop-blur-2xl
                    text-white
                    font-bold
                    hover:bg-white/[0.08]
                    transition-all
                    duration-300
                  "
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>

            {/* FEATURES */}

            <div className="grid grid-cols-3 gap-5 mt-16">
              {[
                {
                  icon: Fish,
                  title: "Fish Farming",
                },

                {
                  icon: Waves,
                  title: "Smart RAS",
                },

                {
                  icon: ShieldCheck,
                  title: "Water Safety",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-2xl
                      p-6
                      text-center
                    "
                  >
                    {/* LIGHT */}

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

                    <div className="relative z-10">
                      <div
                        className="
                          mx-auto
                          flex
                          items-center
                          justify-center
                          w-16
                          h-16
                          rounded-2xl
                          bg-gradient-to-br
                          from-cyan-300
                          to-emerald-300
                        "
                      >
                        <Icon className="text-[#03131d]" />
                      </div>

                      <h3 className="mt-5 text-white font-black text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center"
          >
            {/* MAIN GLOW */}

            <div className="absolute inset-0 bg-cyan-300/20 blur-[140px] rounded-full" />

            {/* CARD */}

            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                relative
                rounded-[45px]
                overflow-hidden
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-3xl
                p-10
                shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              "
            >
              {/* LIGHT */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

              {/* IMAGE */}

              <Image
                src="/logo.png"
                alt="ARK AQUATECH"
                width={700}
                height={700}
                className="
                  relative
                  z-10
                  w-full
                  max-w-[520px]
                  object-contain
                  drop-shadow-[0_0_60px_rgba(34,211,238,0.35)]
                "
              />

              {/* FLOATING CARD */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  bottom-8
                  left-[-50px]
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#061924]/90
                  backdrop-blur-2xl
                  px-6
                  py-5
                  shadow-[0_15px_60px_rgba(0,0,0,0.4)]
                "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-300
                      to-emerald-300
                    "
                  >
                    <Sparkles className="text-[#03131d]" />
                  </div>

                  <div>
                    <h3 className="text-white font-black text-lg">
                      Smart Marine
                    </h3>

                    <p className="text-cyan-100/70 text-sm">
                      Sustainable Aquaculture
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}