"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Droplets,
  Fish,
  Settings2,
} from "lucide-react";

export default function CompanyIntroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#0A6EBD]/5 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#63C96A]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ==================================================
              LEFT IMAGE
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* MAIN IMAGE */}

            <div className="relative min-h-[480px] overflow-hidden rounded-[36px] sm:min-h-[600px]">
              <Image
                src="/images/about.png"
                alt="ARK AQUATECH smart aquaculture engineering and infrastructure"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#021B2F]/70 via-[#021B2F]/5 to-transparent" />

              {/* IMAGE TEXT */}

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#63C96A]">
                  Smart Aquaculture
                </p>

                <p className="mt-2 max-w-sm text-xl font-black leading-snug text-white sm:text-2xl">
                  Engineering intelligent ecosystems for modern aquaculture.
                </p>
              </div>
            </div>

            {/* EXPERIENCE / BRAND CARD */}

            <div className="absolute -bottom-7 left-5 right-5 rounded-[26px] border border-white/60 bg-white/95 p-5 shadow-[0_20px_60px_rgba(2,27,47,0.15)] backdrop-blur-xl sm:left-auto sm:right-[-20px] sm:w-[280px]">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-[#0A6EBD] to-[#15176B] text-white">
                  <Fish className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-lg font-black text-[#021B2F]">
                    ARK AQUATECH
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Smart Aquaculture Engineering
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="pt-6 lg:pt-0"
          >
            {/* SMALL LABEL */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/10 bg-[#F4F9FD] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#63C96A]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A6EBD]">
                Who We Are
              </span>
            </div>

            {/* HEADING */}

            <h2 className="mt-6 text-[38px] font-black leading-[1.05] tracking-[-0.04em] text-[#021B2F] sm:text-[48px] lg:text-[56px]">
              About
              <span className="ml-3 text-[#0A6EBD]">
                ARK AQUATECH
              </span>
            </h2>

            {/* SUB HEADING */}

            <h3 className="mt-6 text-xl font-bold leading-relaxed text-[#021B2F] sm:text-2xl">
              Engineering the Future of{" "}
              <span className="text-[#0A6EBD]">
                Smart Aquaculture
              </span>
            </h3>

            {/* LINE */}

            <div className="mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#63C96A]" />

            {/* CONTENT */}

            <div className="mt-7 space-y-5 text-[14px] leading-[1.9] text-slate-600 sm:text-[15px] lg:text-[16px]">
              <p>
                <strong className="font-bold text-[#021B2F]">
                  ARK AQUATECH
                </strong>{" "}
                is a technology-driven aquaculture engineering and
                infrastructure company specializing in advanced Biofloc, RAS,
                SIPNSF, hatchery, pond liner, and water management solutions
                for modern commercial aquaculture.
              </p>

              <p>
                We design and develop intelligent aquaculture ecosystems
                engineered for sustainable fish and shrimp farming, combining
                precision engineering, smart water management, and practical
                field expertise to support high-efficiency aquatic production.
              </p>

              <p>
                With a strong focus on innovation, sustainability, and scalable
                infrastructure, ARK AQUATECH delivers customized aquaculture
                solutions tailored to the evolving needs of commercial
                farmers, entrepreneurs, hatcheries, and industrial aquaculture
                projects.
              </p>

              <p>
                From concept planning and infrastructure development to
                installation, operational support, and technical consultancy,
                we provide end-to-end aquaculture solutions designed for
                long-term performance, productivity, and growth.
              </p>
            </div>

            {/* ==================================================
                FEATURE ITEMS
            ================================================== */}

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#63C96A]" />

                <span className="text-sm font-bold text-[#021B2F]">
                  Precision Engineering
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-4">
                <Droplets className="h-5 w-5 shrink-0 text-[#0A6EBD]" />

                <span className="text-sm font-bold text-[#021B2F]">
                  Smart Water Management
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-4">
                <Fish className="h-5 w-5 shrink-0 text-[#0A6EBD]" />

                <span className="text-sm font-bold text-[#021B2F]">
                  Sustainable Aquaculture
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-4">
                <Settings2 className="h-5 w-5 shrink-0 text-[#63C96A]" />

                <span className="text-sm font-bold text-[#021B2F]">
                  End-to-End Solutions
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}