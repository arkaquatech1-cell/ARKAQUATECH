"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Target,
  ArrowUpRight,
  CheckCircle2,
  Lightbulb,
  Leaf,
  Cpu,
  TrendingUp,
} from "lucide-react";

const visionPoints = [
  "Sustainable Infrastructure",
  "Intelligent Farming Systems",
  "Future-Ready Aquaculture",
];

const missionPoints = [
  "Advanced Engineering",
  "Smart Technologies",
  "Long-Term Farming Success",
];

export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

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
        {/* =====================================================
            SECTION TITLE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-16"
        >
          {/* LABEL */}

          <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/10 bg-white px-5 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#63C96A]" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A6EBD]">
              Our Purpose
            </span>
          </div>

          {/* HEADING */}

          <h2 className="mt-6 text-[36px] font-black leading-[1.1] tracking-[-0.04em] text-[#021B2F] sm:text-[48px] lg:text-[54px]">
            Building the Future of
            <span className="block bg-gradient-to-r from-[#0A6EBD] to-[#63C96A] bg-clip-text text-transparent">
              Smart Aquaculture
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base">
            Driven by innovation, sustainability and intelligent engineering
            to create efficient aquaculture ecosystems for the future.
          </p>
        </motion.div>

        {/* =====================================================
            VISION + MISSION GRID
        ===================================================== */}

        <div className="grid gap-7 lg:grid-cols-2">
          {/* =================================================
              VISION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[36px] bg-[#021B2F] p-7 shadow-[0_25px_70px_rgba(2,27,47,0.15)] sm:p-10 lg:p-12"
          >
            {/* BACKGROUND LIGHT */}

            <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#0A6EBD]/30 blur-[100px]" />

            <div className="absolute -bottom-28 -left-20 h-[260px] w-[260px] rounded-full bg-[#63C96A]/10 blur-[100px]" />

            {/* NUMBER */}

            <span className="absolute right-7 top-5 text-[90px] font-black leading-none text-white/[0.025] sm:text-[120px]">
              01
            </span>

            <div className="relative z-10">
              {/* ICON */}

              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[22px] border border-white/10 bg-white/10 text-[#54B5FF] backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0A6EBD] group-hover:text-white">
                <Eye className="h-8 w-8" strokeWidth={1.8} />
              </div>

              {/* SMALL LABEL */}

              <div className="mt-9 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#63C96A]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#63C96A]">
                  Where We Are Going
                </span>
              </div>

              {/* TITLE */}

              <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] text-white sm:text-4xl">
                Our Vision
              </h3>

              {/* CONTENT */}

              <p className="mt-6 text-[15px] leading-8 text-slate-300 sm:text-base">
                To become a leading smart aquaculture infrastructure company
                delivering sustainable, intelligent, and future-ready farming
                solutions across global aquaculture industries.
              </p>

              {/* POINTS */}

              <div className="mt-8 space-y-3">
                {visionPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.05] px-4 py-3.5"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#63C96A]" />

                    <span className="text-sm font-semibold text-white/90">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* BOTTOM ICONS */}

              <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.07] text-[#54B5FF]">
                  <Leaf className="h-4 w-4" />
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.07] text-[#54B5FF]">
                  <Lightbulb className="h-4 w-4" />
                </div>

                <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#021B2F]">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              MISSION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[36px] border border-[#0A6EBD]/10 bg-white p-7 shadow-[0_20px_60px_rgba(2,27,47,0.08)] sm:p-10 lg:p-12"
          >
            {/* BACKGROUND */}

            <div className="absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#0A6EBD]/10 blur-[100px]" />

            <div className="absolute -bottom-28 -left-20 h-[260px] w-[260px] rounded-full bg-[#63C96A]/10 blur-[100px]" />

            {/* NUMBER */}

            <span className="absolute right-7 top-5 text-[90px] font-black leading-none text-[#021B2F]/[0.025] sm:text-[120px]">
              02
            </span>

            <div className="relative z-10">
              {/* ICON */}

              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[22px] bg-gradient-to-br from-[#EAF5FF] to-[#F1FFF2] text-[#0A6EBD] transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0A6EBD] group-hover:to-[#15176B] group-hover:text-white">
                <Target className="h-8 w-8" strokeWidth={1.8} />
              </div>

              {/* SMALL LABEL */}

              <div className="mt-9 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#0A6EBD]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A6EBD]">
                  What Drives Us
                </span>
              </div>

              {/* TITLE */}

              <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#021B2F] sm:text-4xl">
                Our Mission
              </h3>

              {/* CONTENT */}

              <p className="mt-6 text-[15px] leading-8 text-slate-600 sm:text-base">
                To empower modern aquaculture through advanced engineering,
                smart technologies, and sustainable water infrastructure
                solutions that improve productivity, efficiency, and long-term
                farming success.
              </p>

              {/* POINTS */}

              <div className="mt-8 space-y-3">
                {missionPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-3.5"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A6EBD]" />

                    <span className="text-sm font-semibold text-[#021B2F]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* BOTTOM ICONS */}

              <div className="mt-9 flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F7FF] text-[#0A6EBD]">
                  <Cpu className="h-4 w-4" />
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F0F7FF] text-[#0A6EBD]">
                  <TrendingUp className="h-4 w-4" />
                </div>

                <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F7FF] text-[#0A6EBD] transition-all duration-300 group-hover:bg-[#0A6EBD] group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}