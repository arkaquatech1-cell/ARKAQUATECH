"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#061018]">
      {/* VIDEO BG */}

      <div className="absolute inset-0">
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
            brightness-[0.48]
            contrast-[1.05]
          "
        >
          <source
            src="/herosection/seavideo1.mp4"
            type="video/mp4"
          />
        </video>

        {/* DARK OVERLAY */}

      

        {/* SOFT GRADIENT */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#061018]/30
            via-[#061018]/55
            to-[#061018]
          "
        />

        {/* LIGHT EFFECT */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[300px]
            bg-cyan-400/10
            blur-[120px]
            rounded-full
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          min-h-screen
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto max-w-6xl text-center">
          {/* BADGE */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2.5
              backdrop-blur-md
            "
          >
            <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

            <span
              className="
                text-[10px]
                sm:text-xs
                uppercase
                tracking-[0.22em]
                text-cyan-100/80
                font-medium
              "
            >
              Smart Aquaculture & Water Engineering
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mt-8
              text-[38px]
              sm:text-[52px]
              md:text-[72px]
              lg:text-[92px]
              leading-[0.95]
              tracking-[-0.05em]
              font-semibold
              text-white
            "
          >
            Sustainable Future Of

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
              Smart Aquaculture
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-[15px]
              sm:text-[17px]
              md:text-[18px]
              leading-[1.9]
              text-white/70
              font-normal
            "
          >
            ARK AQUATECH delivers advanced Biofloc systems,
            RAS aquaculture technology, shrimp farming,
            fish farming, industrial water treatment,
            aquaponics, and sustainable aquaculture
            engineering solutions across India and
            international markets.
          </motion.p>

          {/* SEO TAGS */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            {[
              "Biofloc Systems",
              "RAS Technology",
              "Fish Farming",
              "Shrimp Farming",
              "Water Treatment",
              "Aquaculture Engineering",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-4
                  py-2
                  text-[11px]
                  sm:text-xs
                  text-white/75
                  backdrop-blur-sm
                "
              >
                {item}
              </div>
            ))}
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-12
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-4
            "
          >
            {/* PRIMARY */}

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-cyan-300
                  px-7
                  sm:px-8
                  py-4
                  text-sm
                  font-semibold
                  text-[#061018]
                  transition-all
                  duration-300
                  hover:bg-cyan-200
                "
              >
                Explore Services

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </motion.div>

            {/* SECONDARY */}

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-7
                sm:px-8
                py-4
                text-sm
                font-medium
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/[0.08]
              "
            >
              Contact Us
            </Link>
          </div>

          {/* TRUST TEXT */}

          <div
            className="
              mt-14
              text-xs
              sm:text-sm
              text-white/45
              tracking-wide
            "
          >
            Trusted Aquaculture & Water Engineering
            Solutions Across India
          </div>
        </div>
      </div>
    </section>
  );
}