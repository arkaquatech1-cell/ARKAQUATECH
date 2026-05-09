// components/home/AboutSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Globe2,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#03131d] py-24 sm:py-32">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* GLOW */}

        <div className="absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-[-180px] h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-[140px]" />

        {/* GRID */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* CENTER LIGHT */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.06),transparent_60%)]" />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* IMAGE SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
            className="relative"
          >
            {/* GLOW */}

            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/20 blur-3xl" />

            {/* CARD */}

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl">
              <Image
                src="/images/about-company.jpg"
                alt="ARK AQUATECH Biofloc Fish Farming & Industrial Water Treatment Company India"
                width={900}
                height={1000}
                priority
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px] lg:h-[680px]"
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#03131d]/90 via-transparent to-transparent" />

              {/* FLOATING CARD */}

              <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-5 w-5 text-cyan-300" />

                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
                    Since 2019
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-black text-white">
                  Sustainable Engineering Excellence
                </h3>

                <p className="mt-3 text-sm leading-[1.9] text-cyan-100/70">
                  Delivering advanced aquaculture,
                  industrial water treatment, marine
                  engineering, and infrastructure
                  solutions across Andhra Pradesh,
                  India, and international markets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            {/* BADGE */}

            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-white/[0.05] px-5 py-2.5 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-cyan-300" />

              <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-100 sm:text-sm">
                About ARK AQUATECH
              </span>
            </div>

            {/* TITLE */}

            <h2 className="mt-7 text-[42px] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[58px] lg:text-[74px]">
              Smart Aquaculture &
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                Marine Engineering Company
              </span>
            </h2>

            {/* CONTENT */}

            <div className="mt-8 space-y-6">
              <p className="text-[15px] leading-[2] text-cyan-100/70 sm:text-[17px] md:text-[18px]">
                ARK AQUATECH is a multi-disciplinary
                aquaculture and engineering company based
                in Mangalagiri, Andhra Pradesh, India,
                specializing in Biofloc fish farming,
                commercial RAS aquaculture systems,
                industrial RO water treatment plants,
                shrimp farming infrastructure, civil
                engineering, marine engineering, and
                sustainable aquatic ecosystem solutions.
              </p>

              <p className="text-[15px] leading-[2] text-cyan-100/70 sm:text-[17px] md:text-[18px]">
                We provide advanced industrial water
                treatment systems, IoT-based smart
                aquaculture automation, aeration systems,
                HDPE pond lining, pumping stations,
                filtration technologies, and intelligent
                engineering solutions for commercial,
                industrial, institutional, and government
                infrastructure projects across India.
              </p>

              <p className="text-[15px] leading-[2] text-cyan-100/70 sm:text-[17px] md:text-[18px]">
                Backed by modern engineering expertise and
                sustainable innovation, ARK AQUATECH
                focuses on delivering high-efficiency,
                cost-effective, and future-ready
                aquaculture infrastructure solutions with
                strong commitment to quality, reliability,
                customer satisfaction, and long-term
                environmental sustainability.
              </p>
            </div>

            {/* FEATURES */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                "Biofloc Fish Farming",
                "RAS Aquaculture Systems",
                "Industrial RO Plants",
                "IoT Smart Automation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />

                  <span className="text-sm font-semibold text-cyan-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-12"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 px-8 py-4 text-[15px] font-black text-[#03131d] shadow-[0_15px_45px_rgba(34,211,238,0.28)]"
              >
                Explore Our Company

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}