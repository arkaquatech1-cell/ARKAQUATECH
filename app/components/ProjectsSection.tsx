// components/home/ProjectsSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  Globe2,
  Cpu,
} from "lucide-react";

const projects = [
  {
    title: "Advanced Biofloc Fish Farming Project",
    location: "Andhra Pradesh, India",
    image: "/project1.jpg",
    desc:
      "Commercial Biofloc fish farming infrastructure with sustainable aquaculture ecosystem management, HDPE pond lining, aeration systems, and smart water circulation technology.",
  },

  {
    title: "Industrial RAS Aquaculture System",
    location: "Telangana, India",
    image: "/project2.jpg",
    desc:
      "Modern Recirculating Aquaculture System (RAS) designed with intelligent filtration, oxygen balancing, automated monitoring, and industrial water treatment technologies.",
  },

  {
    title: "Shrimp Farming Infrastructure Project",
    location: "Tamil Nadu, India",
    image: "/project3.jpg",
    desc:
      "High-efficiency shrimp farming infrastructure project developed with advanced marine engineering, smart aquaculture systems, and sustainable aquatic management solutions.",
  },
];

export default function ProjectsSection() {
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
              Featured Engineering Projects
            </span>
          </div>

          {/* TITLE */}

          <h2 className="mt-10 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            Smart Aquaculture
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Infrastructure Projects
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
            Explore advanced Biofloc farming systems,
            industrial RAS aquaculture infrastructure,
            shrimp farming projects, industrial RO water
            treatment plants, smart IoT aquaculture
            automation, civil engineering infrastructure,
            and sustainable marine engineering projects
            developed by ARK AQUATECH across Andhra Pradesh,
            India, and international aquaculture markets.
          </p>
        </motion.div>

        {/* PROJECT GRID */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
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
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
            >
              {/* IMAGE */}

              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#021018] via-[#021018]/20 to-transparent" />

                {/* LOCATION */}

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <MapPin className="h-4 w-4 text-cyan-300" />

                  <span className="text-sm font-semibold text-white">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="relative z-10 p-8">
                <h3 className="text-[30px] font-black leading-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-5 text-[15px] leading-[2] text-cyan-100/70">
                  {project.desc}
                </p>

                {/* BUTTON */}

                <Link
                  href="/projects"
                  className="group/link mt-8 inline-flex items-center gap-3 font-bold tracking-wide text-cyan-200"
                >
                  Explore Project

                  <ArrowUpRight className="h-5 w-5 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>

              {/* HOVER */}

              <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />

              {/* NUMBER */}

              <div className="absolute right-5 top-5 text-[90px] font-black leading-none text-white/[0.03]">
                0{index + 1}
              </div>
            </motion.div>
          ))}
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
                <Globe2 className="h-4 w-4 text-cyan-300" />

                <span className="text-sm font-semibold uppercase tracking-wide text-cyan-100">
                  Sustainable Marine Innovation
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-black leading-[1] text-white md:text-6xl">
                Future Ready
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Engineering Infrastructure
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p className="text-lg leading-[2] text-cyan-100/70">
                ARK AQUATECH continues to deliver smart
                aquaculture engineering, industrial water
                treatment plants, commercial fish farming
                infrastructure, IoT-based aquaculture
                automation, Biofloc systems, sustainable
                marine engineering, and advanced aquatic
                ecosystem solutions designed for modern
                aquaculture industries and engineering
                projects across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}