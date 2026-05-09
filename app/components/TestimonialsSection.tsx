// components/home/TestimonialsSection.tsx

"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Star,
  Quote,
  Sparkles,
  Globe2,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Commercial Fish Farm Owner",
    image: "/client1.jpg",
    review:
      "ARK AQUATECH delivered advanced Biofloc fish farming systems with excellent technical support, smart water management, and sustainable aquaculture infrastructure for our commercial fish farm in Andhra Pradesh.",
  },

  {
    name: "Srinivas Reddy",
    role: "Shrimp Farming Business",
    image: "/client2.jpg",
    review:
      "Their RAS aquaculture systems, industrial water treatment solutions, and marine engineering expertise helped us improve shrimp farming productivity and reduce operational costs significantly.",
  },

  {
    name: "Venkatesh Chowdary",
    role: "Aquaculture Investor",
    image: "/client3.jpg",
    review:
      "One of the best aquaculture engineering companies in India for IoT smart aquaculture, Biofloc farming, fish farming infrastructure, and industrial RO water treatment plants.",
  },
];

export default function TestimonialsSection() {
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
          {/* BADGE */}

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-cyan-300" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Client Success Stories
            </span>
          </div>

          {/* TITLE */}

          <h2 className="mt-10 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            Trusted By
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture & Engineering Businesses
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
            ARK AQUATECH is trusted by fish farming
            industries, shrimp farming companies,
            aquaculture investors, industrial businesses,
            and marine infrastructure projects for advanced
            Biofloc systems, industrial RO plants,
            sustainable aquaculture infrastructure,
            IoT automation, and smart engineering solutions
            across Andhra Pradesh, India, and global markets.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
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

              {/* QUOTE */}

              <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 text-[#021018] shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                <Quote className="h-8 w-8" />
              </div>

              {/* STARS */}

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-cyan-300 text-cyan-300"
                  />
                ))}
              </div>

              {/* REVIEW */}

              <p className="mt-8 text-[16px] leading-[2] text-cyan-100/70">
                {item.review}
              </p>

              {/* USER */}

              <div className="mt-10 flex items-center gap-5">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-cyan-100/60">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* NUMBER */}

              <div className="absolute bottom-2 right-5 text-[90px] font-black leading-none text-white/[0.03]">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}

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
                <Globe2 className="h-4 w-4 text-cyan-300" />

                <span className="text-sm font-semibold uppercase tracking-wide text-cyan-100">
                  Sustainable Engineering Excellence
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-black leading-[1] text-white md:text-6xl">
                Trusted Smart
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Aquaculture Partner
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p className="text-lg leading-[2] text-cyan-100/70">
                Since 2019, ARK AQUATECH has successfully
                delivered Biofloc farming systems, industrial
                RO plants, IoT aquaculture automation,
                sustainable marine engineering, fish farming
                infrastructure, shrimp farming solutions,
                civil engineering works, and smart water
                management systems for industries and
                aquaculture businesses across India.
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
                  Work With Our Team

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