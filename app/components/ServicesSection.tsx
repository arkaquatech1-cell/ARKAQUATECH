// components/home/ServicesSection.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Waves,
  Fish,
  Droplets,
  Factory,
  Cpu,
  Building2,
  ArrowRight,
  Globe2,
} from "lucide-react";

const services = [
  {
    title: "Biofloc Fish Farming",
    description:
      "Advanced Biofloc fish farming systems for sustainable aquaculture production, shrimp farming, commercial fish culture, and high-density aquatic farming across India.",
    icon: Fish,
  },

  {
    title: "RAS Aquaculture Systems",
    description:
      "Smart Recirculating Aquaculture Systems (RAS) with oxygen balancing, filtration technology, water recycling, and automated marine farming infrastructure.",
    icon: Waves,
  },

  {
    title: "Industrial RO Water Plants",
    description:
      "Industrial and commercial RO water treatment plants, STP, ETP, WTP systems, filtration plants, and smart water purification infrastructure.",
    icon: Droplets,
  },

  {
    title: "IoT Smart Aquaculture",
    description:
      "IoT-enabled aquaculture monitoring systems with pH sensors, DO monitoring, automated feeders, remote pump control, and smart farm automation.",
    icon: Cpu,
  },

  {
    title: "Marine Engineering Works",
    description:
      "Complete marine engineering, aquaculture infrastructure, HDPE pond lining, aeration systems, pumping stations, and sustainable water management solutions.",
    icon: Factory,
  },

  {
    title: "Civil & Infrastructure",
    description:
      "Industrial civil construction, water tank structures, pump houses, pipelines, commercial infrastructure, and engineering development projects.",
    icon: Building2,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#021018] py-28">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.12),transparent_55%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[150px]"
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl">
            <Globe2 className="h-5 w-5 text-cyan-300" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              India's Smart Aquaculture Engineering Company
            </span>
          </div>

          <h2 className="mt-10 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
            Advanced Water,
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture & Engineering Services
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
            ARK AQUATECH provides industrial water treatment,
            Biofloc fish farming systems, RAS aquaculture,
            IoT-based smart aquaculture technology, civil
            engineering infrastructure, and sustainable marine
            engineering services in Mangalagiri, Andhra Pradesh,
            across India and international aquaculture markets.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
              >
                {/* HOVER */}

                <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />

                {/* NUMBER */}

                <div className="absolute right-6 top-4 text-7xl font-black text-white/[0.04]">
                  0{index + 1}
                </div>

                {/* ICON */}

                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 via-sky-400 to-emerald-300 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                  <Icon className="h-10 w-10 text-[#021018]" />
                </div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3 className="mt-8 text-3xl font-black text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[2] text-cyan-100/70">
                    {service.description}
                  </p>

                  <Link
                    href="/services"
                    className="mt-8 inline-flex items-center gap-3 font-bold tracking-wide text-cyan-200"
                  >
                    Explore Services

                    <ArrowRight className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SEO CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-black leading-tight text-white md:text-6xl">
                Leading Aquaculture &
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Water Engineering Company
                </span>
              </h3>
            </div>

            <div>
              <p className="text-lg leading-[2] text-cyan-100/70">
                Based in Mangalagiri, Andhra Pradesh, ARK
                AQUATECH delivers advanced engineering
                solutions including Biofloc systems, fish farming
                technology, industrial RO plants, aquaculture
                automation, smart water treatment systems,
                aeration systems, HDPE pond lining, civil
                infrastructure works, pumping stations, STP,
                ETP, and sustainable marine infrastructure for
                industries, commercial farms, institutions, and
                government projects across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}