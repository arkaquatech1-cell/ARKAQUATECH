"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Droplets,
  Fish,
  Leaf,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Settings2,
    title: "Precision Engineering",
    description:
      "Engineering-focused aquaculture systems designed for reliable commercial performance.",
  },
  {
    icon: Droplets,
    title: "Smart Water Management",
    description:
      "Intelligent water infrastructure designed to support efficient aquatic production.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Resource-conscious solutions focused on efficient and responsible aquaculture.",
  },
  {
    icon: Fish,
    title: "Practical Field Expertise",
    description:
      "Solutions developed around real-world fish and shrimp farming requirements.",
  },
];

const strengths = [
  "Commercial Fish & Shrimp Farming",
  "Advanced Water Engineering",
  "Scalable Aquaculture Infrastructure",
  "Long-Term Operational Efficiency",
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#0A6EBD]/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#63C96A]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,110,189,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.15) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* LABEL */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/10 bg-[#F4F9FD] px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#63C96A]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A6EBD]">
                Why ARK AQUATECH
              </span>
            </div>

            {/* HEADING */}

            <h2 className="mt-6 text-[38px] font-black leading-[1.08] tracking-[-0.04em] text-[#021B2F] sm:text-[48px] lg:text-[56px]">
              Why Choose
              <span className="block bg-gradient-to-r from-[#0A6EBD] to-[#63C96A] bg-clip-text text-transparent">
                ARK AQUATECH
              </span>
            </h2>

            {/* SUB HEADING */}

            <h3 className="mt-7 max-w-xl text-xl font-bold leading-[1.5] text-[#021B2F] sm:text-[23px]">
              Engineering Smart Aquaculture for Sustainable Commercial Farming
            </h3>

            <div className="mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#63C96A]" />

            {/* EXACT CONTENT */}

            <p className="mt-7 max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base">
              ARK AQUATECH delivers intelligent aquaculture infrastructure and
              advanced water engineering solutions designed for modern fish
              and shrimp farming. Our systems combine precision engineering,
              sustainable practices, and practical field expertise to support
              high-efficiency aquatic production.
            </p>

            {/* STRENGTHS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#63C96A]" />

                  <span className="text-[13px] font-bold leading-5 text-[#021B2F]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT PREMIUM CARDS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* DARK CONTAINER */}

            <div className="relative overflow-hidden rounded-[38px] bg-[#021B2F] p-5 shadow-[0_30px_80px_rgba(2,27,47,0.18)] sm:p-7 lg:p-8">
              {/* LIGHTS */}

              <div className="absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full bg-[#0A6EBD]/30 blur-[100px]" />

              <div className="absolute -bottom-28 -left-20 h-[280px] w-[280px] rounded-full bg-[#63C96A]/15 blur-[100px]" />

              {/* TOP */}

              <div className="relative mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#63C96A]">
                    Our Advantage
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                    Engineered for Performance
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/10 bg-white/10 text-[#63C96A]">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              {/* BENEFIT CARDS */}

              <div className="relative grid gap-4 sm:grid-cols-2">
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="group rounded-[25px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.1]"
                    >
                      {/* ICON */}

                      <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-white/10 text-[#63C96A] transition-all duration-300 group-hover:bg-[#0A6EBD] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h4 className="mt-5 text-[16px] font-black text-white">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-[13px] leading-6 text-slate-300">
                        {item.description}
                      </p>

                      <div className="mt-5 h-[2px] w-8 bg-[#63C96A] transition-all duration-500 group-hover:w-full" />
                    </motion.div>
                  );
                })}
              </div>

              {/* BOTTOM */}

              <div className="relative mt-5 rounded-[22px] border border-white/10 bg-white/[0.05] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#63C96A] opacity-50" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#63C96A]" />
                  </span>

                  <p className="text-xs font-semibold leading-6 text-slate-300 sm:text-sm">
                    Smart engineering for efficient and sustainable commercial
                    aquaculture.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}