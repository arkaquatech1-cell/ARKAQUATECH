// components/home/WhyChooseUsSection.tsx

"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Globe2,
  Fish,
  Cpu,
  Droplets,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Engineering Expertise",
    desc:
      "ARK AQUATECH delivers reliable engineering, aquaculture, and industrial water management solutions for government, commercial, and private sector projects across India.",
  },

  {
    icon: Fish,
    title: "Advanced Aquaculture Systems",
    desc:
      "Complete Biofloc farming, RAS aquaculture systems, shrimp farming infrastructure, crab culture systems, and smart fish farming technologies.",
  },

  {
    icon: Cpu,
    title: "IoT Smart Automation",
    desc:
      "Modern IoT-based aquaculture monitoring including pH sensors, DO monitoring, smart feeders, remote pump control, and cloud-based farm management.",
  },

  {
    icon: Droplets,
    title: "Industrial Water Solutions",
    desc:
      "Industrial RO plants, STP, ETP, WTP systems, water recycling plants, filtration technologies, and sustainable water treatment infrastructure.",
  },

  {
    icon: Building2,
    title: "Civil & Infrastructure Projects",
    desc:
      "Commercial civil construction, pump houses, pipelines, water storage structures, industrial infrastructure, and sustainable engineering development works.",
  },

  {
    icon: Globe2,
    title: "Serving India & Global Markets",
    desc:
      "Based in Mangalagiri, Andhra Pradesh, ARK AQUATECH provides advanced engineering and aquaculture solutions for clients across India and international markets.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#020d14] py-32">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.12),transparent_55%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-[-250px] top-[-250px] h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]"
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
          className="absolute bottom-[-250px] right-[-250px] h-[650px] w-[650px] rounded-full bg-emerald-400/10 blur-[180px]"
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-cyan-300" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Why Businesses Choose ARK AQUATECH
            </span>
          </div>

          <h2 className="mt-10 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            India's Leading
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture Engineering Experts
            </span>
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
            ARK AQUATECH specializes in advanced Biofloc
            farming systems, industrial water treatment,
            smart aquaculture automation, RAS fish farming,
            civil engineering infrastructure, marine engineering,
            and sustainable aquatic solutions for industries,
            institutions, commercial farms, and government
            projects across Andhra Pradesh, India, and global
            aquaculture markets.
          </p>
        </motion.div>

        {/* FEATURES */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

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

                <div className="absolute right-6 top-5 text-7xl font-black text-white/[0.04]">
                  0{index + 1}
                </div>

                {/* ICON */}

                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 via-sky-400 to-emerald-300 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                  <Icon className="h-10 w-10 text-[#021018]" />
                </div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3 className="mt-8 text-3xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[2] text-cyan-100/70">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
                <Sparkles className="h-4 w-4 text-cyan-300" />

                <span className="text-sm font-semibold uppercase tracking-wide text-cyan-100">
                  Sustainable Engineering Solutions
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-black leading-[1] text-white md:text-6xl">
                Future Ready
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Smart Marine Infrastructure
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p className="text-lg leading-[2] text-cyan-100/70">
                Since 2019, ARK AQUATECH has been delivering
                modern engineering excellence in aquaculture,
                water management, industrial infrastructure,
                IoT automation, RO plants, fish farming,
                shrimp farming, civil engineering, and smart
                aquatic ecosystem development with a strong
                commitment to innovation, sustainability,
                quality, and long-term customer success.
              </p>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 px-8 py-4 font-black tracking-wide text-[#021018] shadow-[0_15px_50px_rgba(34,211,238,0.35)]"
                >
                  Contact Our Experts

                  <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}