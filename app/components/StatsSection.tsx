// components/home/StatsSection.tsx

"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Fish,
  Waves,
  Globe2,
  Sparkles,
  Cpu,
} from "lucide-react";

const stats = [
  {
    number: "2019+",
    title: "Established Company",
    desc:
      "ARK AQUATECH has been delivering advanced aquaculture engineering, industrial water treatment, and sustainable marine infrastructure solutions since 2019.",
    icon: ShieldCheck,
  },

  {
    number: "500+",
    title: "Projects Delivered",
    desc:
      "Successfully completed Biofloc systems, RAS aquaculture farms, industrial RO plants, civil infrastructure, and smart water management projects.",
    icon: Fish,
  },

  {
    number: "24/7",
    title: "Technical Support",
    desc:
      "Dedicated technical consultancy, maintenance services, aquaculture monitoring, and engineering support for commercial fish farming industries.",
    icon: Waves,
  },

  {
    number: "100%",
    title: "Sustainable Solutions",
    desc:
      "Focused on eco-friendly aquaculture systems, smart IoT automation, water recycling, renewable energy, and sustainable aquatic ecosystem development.",
    icon: Globe2,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#021018] py-32">
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
          className="absolute left-[-220px] top-[-220px] h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]"
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
          className="absolute bottom-[-220px] right-[-220px] h-[650px] w-[650px] rounded-full bg-emerald-400/10 blur-[180px]"
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
          {/* BADGE */}

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-cyan-300" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Company Achievements
            </span>
          </div>

          {/* TITLE */}

          <h2 className="mt-10 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            India's Trusted
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture Engineering Company
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
            ARK AQUATECH specializes in Biofloc fish farming,
            RAS aquaculture systems, industrial RO water
            treatment plants, smart IoT aquaculture
            automation, civil infrastructure, marine
            engineering, and sustainable aquatic ecosystem
            solutions for industries, government projects,
            and commercial aquaculture businesses across
            Andhra Pradesh, India, and global markets.
          </p>
        </motion.div>

        {/* STATS GRID */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
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
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl"
              >
                {/* HOVER */}

                <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />

                {/* NUMBER BG */}

                <div className="absolute right-5 top-5 text-[90px] font-black leading-none text-white/[0.03]">
                  0{index + 1}
                </div>

                {/* ICON */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 via-sky-400 to-emerald-300 text-[#021018] shadow-[0_0_40px_rgba(34,211,238,0.35)]"
                >
                  <Icon className="h-10 w-10" />

                  <div className="absolute inset-0 rounded-3xl bg-white/20 blur-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" />
                </motion.div>

                {/* NUMBER */}

                <h2 className="relative mt-8 bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-[68px] font-black leading-none tracking-[-0.05em] text-transparent">
                  {item.number}
                </h2>

                {/* TITLE */}

                <h3 className="mt-5 text-2xl font-black text-white">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 text-[15px] leading-[2] text-cyan-100/70">
                  {item.desc}
                </p>
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
                <Cpu className="h-4 w-4 text-cyan-300" />

                <span className="text-sm font-semibold uppercase tracking-wide text-cyan-100">
                  Smart Sustainable Innovation
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-black leading-[1] text-white md:text-6xl">
                Future Ready
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Marine Infrastructure
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p className="text-lg leading-[2] text-cyan-100/70">
                ARK AQUATECH continues to innovate in
                Biofloc fish farming, industrial water
                treatment, smart aquaculture automation,
                RAS farming systems, sustainable marine
                engineering, and advanced aquatic
                infrastructure development for modern
                aquaculture industries and engineering
                businesses across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}