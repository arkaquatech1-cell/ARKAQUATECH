



"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Droplets,
  Cpu,
  Waves,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-18
        sm:py-16
        lg:py-16
        bg-gradient-to-br
        from-[#f5f7ff]
        via-[#eef4ff]
        to-[#f3fff6]
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* BLUE GLOW */}

        <div
          className="
            absolute
            top-[-150px]
            right-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#15176B]/15
            blur-[120px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-[-100px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#63C96A]/20
            blur-[120px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,23,107,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(21,23,107,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* IMAGE SECTION */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-[#15176B]/10
                bg-white/70
                shadow-[0_10px_40px_rgba(21,23,107,0.08)]
                backdrop-blur-xl
              "
            >
              <Image
                src="/images/about.png"
                alt="ARK Aquatech Water Engineering and Aquaculture Solutions"
                width={900}
                height={1000}
                priority
                className="
                  h-[400px]
                  sm:h-[520px]
                  lg:h-[650px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.05]
                "
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#15176B]/70 via-transparent to-transparent" />

              {/* FLOAT CARD */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  rounded-3xl
                  border
                  border-white/40
                  bg-white/70
                  p-6
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-[#63C96A]
                    font-semibold
                  "
                >
                  Trusted Engineering Partner
                </span>

                <h3
                  className="
                    mt-3
                    text-[24px]
                    sm:text-[32px]
                    font-bold
                    leading-tight
                    text-[#0F172A]
                  "
                >
                  Smart Aquaculture Infrastructure
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  ARK delivers modern fish farming,
                  RAS technology, industrial water
                  treatment systems, and sustainable
                  aquatic engineering solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SECTION */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#15176B]/10
                bg-white/80
                px-5
                py-2.5
                shadow-lg
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-[#63C96A]" />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.24em]
                  font-semibold
                  text-[#15176B]
                "
              >
                About ARK AQUATECH
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-7
                text-[38px]
                sm:text-[54px]
                lg:text-[62px]
                leading-[0.95]
                tracking-[-0.05em]
                font-black
                text-[#0F172A]
              "
            >
              Advanced Water 
              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-[#63C96A]
                  via-[#15176B]
                  to-[#63C96A]
                  bg-clip-text
                  text-transparent
                "
              >
                Aquaculture Solutions
              </span>
            </h2>

            {/* DESCRIPTION */}

            <div className="mt-8 space-y-6">
              <p
                className="
                  text-[16px]
                  leading-[1.9]
                  text-slate-600
                "
              >
                ARK AQUATECH is a leading aquaculture
                engineering and water technology company
                providing Biofloc systems, RAS fish
                farming technology, industrial RO plants,
                aquaponics systems, pond liners, water
                filtration systems, and smart automation
                solutions across India.
              </p>

              <p
                className="
                  text-[16px]
                  leading-[1.9]
                  text-slate-600
                "
              >
                We specialize in sustainable aquatic
                ecosystem engineering with advanced
                oxygen management, IoT monitoring,
                aeration technology, wastewater
                treatment, and commercial aquaculture
                infrastructure for modern fish and shrimp
                farming projects.
              </p>

             
            </div>

           {/* PREMIUM SEO FEATURES */}

{/* SEO BUTTON TAGS */}

{/* SEO BUTTON TAGS */}

<div
  className="
    mt-10
    grid
    grid-cols-2
    gap-4
    sm:grid-cols-3
  "
>
  {[
    "Industrial RO Plants",
    "Biofloc Fish Farming",
    "RAS Aquaculture Systems",
    "Shrimp Farming Setup",
    "Wastewater Treatment",
    "Marine Engineering",
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
    className="
  group
  relative
  inline-flex
  items-center
  justify-center
  overflow-hidden
  rounded-full
  border
  border-white/40
  bg-gradient-to-r
  from-white
  via-[#f8fbff]
  to-[#f3fff6]
  px-4
  py-2.5
  text-center
  shadow-[0_10px_30px_rgba(21,23,107,0.08)]
  backdrop-blur-xl
  transition-all
  duration-300
  hover:-translate-y-1
  hover:scale-[1.03]
  hover:border-[#63C96A]/40
  hover:shadow-[0_18px_40px_rgba(21,23,107,0.14)]
"
    >
      {/* LIGHT EFFECT */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          bg-gradient-to-r
          from-[#15176B]/5
          via-[#0A6EBD]/5
          to-[#63C96A]/5
        "
      />

      {/* TEXT */}

      <span
        className="
          relative
          z-10
          text-[13px]
          sm:text-[14px]
          font-semibold
          leading-[1.4]
          tracking-[-0.01em]
          text-[#0F172A]
        "
      >
        {item}
      </span>
    </motion.div>
  ))}
</div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}