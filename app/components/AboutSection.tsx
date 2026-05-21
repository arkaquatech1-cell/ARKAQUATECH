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
  Fish,
  Factory,
  Leaf,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        bg-gradient-to-br
        from-[#f5f9ff]
        via-[#eef5ff]
        to-[#f4fff7]
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* BLUE GLOW */}

        <div
          className="
            absolute
            top-[-160px]
            right-[-120px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#15176B]/15
            blur-[130px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-[-100px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#63C96A]/20
            blur-[130px]
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
            className="relative order-2 lg:order-1"
          >
            <div
              className="
                overflow-hidden
                rounded-[34px]
                border
                border-[#15176B]/10
                bg-white/70
                shadow-[0_15px_50px_rgba(21,23,107,0.10)]
                backdrop-blur-xl
              "
            >
              <Image
                src="/images/about.png"
                alt="ARK Aquatech Smart Aquaculture Engineering Solutions India"
                width={900}
                height={1000}
                priority
                className="
                  h-[380px]
                  sm:h-[520px]
                  lg:h-[700px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.05]
                "
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#15176B]/80 via-transparent to-transparent" />

              {/* FLOATING CARD */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-3xl
                  border
                  border-white/30
                  bg-white/75
                  p-5
                  sm:p-6
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    text-[#63C96A]
                    font-bold
                  "
                >
                  <Sparkles className="h-4 w-4" />
                  Trusted Aquaculture Engineering Partner
                </span>

                <h3
                  className="
                    mt-3
                    text-[24px]
                    sm:text-[32px]
                    font-black
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
                    sm:text-[15px]
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  ARK AQUATECH delivers advanced
                  Biofloc, RAS, hatchery, pond liner,
                  and industrial water management
                  systems for modern fish and shrimp
                  farming projects across India.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* CONTENT SECTION */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
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
                lg:text-[66px]
                leading-[0.95]
                tracking-[-0.05em]
                font-black
                text-[#0F172A]
              "
            >
              Engineering The Future Of
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
                Smart Aquaculture
              </span>
            </h2>

            {/* DESCRIPTION */}

            <div className="mt-8 space-y-6">

              <p
                className="
                  text-[16px]
                  sm:text-[17px]
                  leading-[2]
                  text-slate-600
                "
              >
                <span className="font-semibold text-[#15176B]">
                  ARK AQUATECH
                </span>{" "}
                is a technology-driven aquaculture
                engineering and infrastructure company
                specializing in advanced Biofloc,
                RAS, SIPNSF, hatchery, pond liner,
                and water management solutions for
                modern commercial aquaculture.
              </p>

              <p
                className="
                  text-[16px]
                  sm:text-[17px]
                  leading-[2]
                  text-slate-600
                "
              >
                We design intelligent aquaculture
                ecosystems engineered for sustainable
                fish and shrimp farming, combining
                precision engineering, smart water
                management, aeration systems, oxygen
                control, and IoT monitoring technology
                to maximize productivity and operational
                efficiency.
              </p>

              <p
                className="
                  text-[16px]
                  sm:text-[17px]
                  leading-[2]
                  text-slate-600
                "
              >
                From infrastructure development and
                turnkey project execution to technical
                consultancy and operational support,
                we deliver complete end-to-end
                aquaculture solutions tailored for
                commercial farmers, hatcheries,
                entrepreneurs, and industrial
                aquaculture projects across India.
              </p>

            </div>

            {/* FEATURES */}

           

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
                "Biofloc Fish Farming",
                "RAS Aquaculture",
                "Shrimp Farming",
                "Fish Hatchery",
                "Pond Liner",
                "Aquaculture India",
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

            {/* BUTTONS */}

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#15176B]
                  to-[#0A6EBD]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Get Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#15176B]/15
                  bg-white/80
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-[#15176B]
                  shadow-lg
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Explore Services
              </Link>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}