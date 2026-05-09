// components/home/HeroSection.tsx

"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Fish,
  Waves,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* VIDEO BACKGROUND */}

      <div className="absolute inset-0">
        {/* VIDEO */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            brightness-[0.72]
            contrast-[1.15]
            saturate-[1.3]
          "
        >
         <source src="/herosection/seavideo1.mp4" type="video/mp4" />
        </video>

        {/* LIGHT OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_bottom,rgba(0,0,0,0.28),rgba(0,0,0,0.45))]
          "
        />

        {/* CENTER FOCUS LIGHT */}

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_45%)]
          "
        />

        {/* TOP LIGHT */}

        <div
          className="
            absolute
            top-0
            left-0
            h-[40%]
            w-full
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_65%)]
          "
        />

        {/* LEFT GLOW */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-180px]
            left-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-400/20
            blur-[140px]
          "
        />

        {/* RIGHT GLOW */}

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-180px]
            right-[-180px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-emerald-400/20
            blur-[140px]
          "
        />

        {/* BOTTOM SHADOW */}

        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[220px]
            bg-gradient-to-t
            from-black
            to-transparent
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

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto w-full max-w-[1400px] text-center">
          {/* BADGE */}

          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/10
              px-7
              py-3
              backdrop-blur-xl
            "
          >
            <div className="relative">
              <div className="absolute h-4 w-4 rounded-full bg-cyan-300 animate-ping" />

              <div className="relative h-2.5 w-2.5 rounded-full bg-cyan-200" />
            </div>

            <span className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-100">
              Smart Aquaculture Technology
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
              mt-10
              text-[60px]
              sm:text-[85px]
              md:text-[120px]
              lg:text-[140px]
              leading-[0.88]
              tracking-[-0.08em]
              font-black
              text-white
            "
          >
            Smart Future Of

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
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="
              mx-auto
              mt-10
              max-w-4xl
              text-[18px]
              md:text-[23px]
              leading-[2]
              text-white/75
              font-medium
            "
          >
            ARK AQUATECH provides advanced Biofloc systems,
            RAS aquaculture technology, shrimp farming,
            fish farming solutions, marine infrastructure,
            industrial water treatment systems, and smart
            sustainable aquaculture engineering services
            across India.
          </motion.p>

          {/* SEO TAGS */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              "Biofloc Technology",
              "RAS Systems",
              "Fish Farming",
              "Shrimp Farming",
              "Water Treatment",
              "Marine Engineering",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-xl
                "
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            {/* PRIMARY */}

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
                  flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-300
                  to-emerald-300
                  px-10
                  py-5
                  text-[#02131d]
                  font-black
                  shadow-[0_15px_60px_rgba(34,211,238,0.4)]
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-transform
                    duration-1000
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10">
                  Explore Services
                </span>

                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* SECONDARY */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
            >
              <Link
                href="/contact"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-10
                  py-5
                  text-white
                  font-bold
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/20
                "
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* FEATURE CARDS */}

         

       

        
           
              

             
      
        </div>
      </div>
    </section>
  );
}