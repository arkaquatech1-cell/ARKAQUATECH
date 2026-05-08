// components/home/ProjectsSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Biofloc Fish Farming Project",
    location: "Andhra Pradesh",
    image: "/project1.jpg",
    desc:
      "Advanced Biofloc fish farming infrastructure with sustainable aquatic ecosystem management and smart water circulation systems.",
  },

  {
    title: "Commercial RAS System",
    location: "Telangana",
    image: "/project2.jpg",
    desc:
      "Modern Recirculating Aquaculture System with intelligent filtration and automated water treatment technology.",
  },

  {
    title: "Shrimp Farming Infrastructure",
    location: "Tamil Nadu",
    image: "/project3.jpg",
    desc:
      "High-efficiency shrimp farming project designed with advanced marine engineering and sustainable aquaculture technology.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#03131d]">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* MAIN GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

        {/* CYAN GLOW */}

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-220px]
            left-[-220px]
            w-[650px]
            h-[650px]
            rounded-full
            bg-cyan-400/10
            blur-[180px]
          "
        />

        {/* EMERALD GLOW */}

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-220px]
            right-[-220px]
            w-[650px]
            h-[650px]
            rounded-full
            bg-emerald-400/10
            blur-[180px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-300/15
              bg-white/[0.04]
              backdrop-blur-xl
              px-6
              py-3
            "
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />

            <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wide">
              Our Projects
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-10
              text-[50px]
              md:text-[72px]
              leading-[0.95]
              tracking-[-0.05em]
              font-black
              text-white
            "
          >
            Smart Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Infrastructure Projects
            </span>
          </h2>

          {/* SEO CONTENT */}

          <p
            className="
              mt-8
              text-lg
              md:text-xl
              leading-[2]
              text-cyan-100/70
            "
          >
            Explore advanced Biofloc farming projects,
            RAS systems, shrimp farming infrastructure,
            industrial water treatment systems, and
            sustainable aquaculture engineering solutions
            developed by ARK AQUATECH across India.
          </p>
        </motion.div>

        {/* PROJECTS */}

        <div className="grid lg:grid-cols-3 gap-8 mt-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-3xl
                shadow-[0_15px_50px_rgba(0,0,0,0.25)]
              "
            >
              {/* IMAGE */}

              <div className="relative overflow-hidden h-[320px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* OVERLAY */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#03131d] via-[#03131d]/20 to-transparent" />

                {/* LOCATION */}

                <div
                  className="
                    absolute
                    top-5
                    left-5
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    backdrop-blur-xl
                    px-4
                    py-2
                  "
                >
                  <MapPin className="w-4 h-4 text-cyan-300" />

                  <span className="text-white text-sm font-semibold">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-8">
                <h3
                  className="
                    text-[28px]
                    leading-tight
                    font-black
                    text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-cyan-100/70
                    leading-[2]
                    text-[15px]
                  "
                >
                  {project.desc}
                </p>

                {/* BUTTON */}

                <Link
                  href="/projects"
                  className="
                    group/link
                    inline-flex
                    items-center
                    gap-3
                    mt-8
                    text-cyan-200
                    font-bold
                    tracking-wide
                  "
                >
                  View Project

                  <ArrowUpRight
                    className="
                      w-5
                      h-5
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1
                    "
                  />
                </Link>
              </div>

              {/* HOVER LIGHT */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-300/10 to-emerald-300/10" />

              {/* NUMBER */}

              <div
                className="
                  absolute
                  top-5
                  right-5
                  text-[90px]
                  font-black
                  leading-none
                  text-white/[0.03]
                "
              >
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            mt-24
            p-10
            md:p-14
          "
        >
          {/* LIGHT */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}

            <div>
              <h3
                className="
                  text-[42px]
                  md:text-[58px]
                  leading-[0.95]
                  tracking-[-0.04em]
                  font-black
                  text-white
                "
              >
                Sustainable
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Aquaculture Innovation
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
                  text-lg
                  leading-[2]
                  text-cyan-100/70
                "
              >
                ARK AQUATECH continues to deliver advanced
                marine engineering, commercial fish farming,
                Biofloc systems, industrial water treatment,
                and smart aquaculture infrastructure projects
                designed for sustainable aquatic growth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}