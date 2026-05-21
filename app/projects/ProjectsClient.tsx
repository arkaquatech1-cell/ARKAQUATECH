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
    title: "Advanced Aquaculture Projects",
    location: "Andhra Pradesh, India",
    image: "/images/services1.png",

    desc:
      "Commercial aquaculture infrastructure projects with smart Biofloc systems, sustainable fish farming technology, and intelligent aquatic ecosystem engineering.",
  },

  {
    title: "Industrial Water Management Solutions",
    location: "Telangana, India",
    image: "/images/services2.jpg",

    desc:
      "Industrial water treatment plants, RO systems, wastewater recycling, smart filtration, and sustainable water management engineering solutions.",
  },

  {
    title: "Smart Hatchery Engineering Systems",
    location: "Tamil Nadu, India",
    image: "/images/services3.png",

    desc:
      "Modern hatchery infrastructure with automated water circulation, oxygen systems, breeding technology, and intelligent hatchery management solutions.",
  },

  {
    title: "Aquaculture Equipment Solutions",
    location: "Kerala, India",
    image: "/images/services10.jpg",

    desc:
      "Advanced aquaculture equipment including aerators, feeders, pumps, oxygen systems, filtration units, and commercial farming essentials.",
  },

  {
    title: "Nutrition & Farm Essentials",
    location: "Odisha, India",
    image: "/images/services12.jpg",

    desc:
      "High-quality nutrition products, aquatic feed management, farm essentials, water supplements, and sustainable aquaculture support solutions.",
  },

  {
    title: "Aquaculture Training & Operational Support",
    location: "Karnataka, India",
    image: "/images/services11.jpg",

    desc:
      "Professional aquaculture consultancy, technical training, operational management, BOT services, and smart farm guidance for commercial aquaculture projects.",
  },
];

export default function ProjectsClient() {
  return (
    <main
      className="
        overflow-hidden
        bg-gradient-to-br
        from-[#f6fdff]
        via-[#eefcff]
        to-[#f4fffb]
      "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-emerald-300/20
            blur-[120px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(14,165,233,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* HERO */}

      <section className="pt-44 pb-28 px-6">

        <div className="max-w-7xl mx-auto text-center">

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-100
              bg-white
              px-5
              py-2.5
              shadow-lg
            "
          >
            <Sparkles className="h-4 w-4 text-cyan-500" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                font-semibold
                text-[#0F172A]
              "
            >
              Our Projects
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
              mt-8
              text-6xl
              md:text-8xl
              font-black
              leading-[0.9]
              text-[#0F172A]
            "
          >
            Marine

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-500
                via-sky-600
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              Infrastructure Projects
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-10
              text-lg
              md:text-xl
              leading-[2]
              text-slate-600
              max-w-4xl
              mx-auto
            "
          >
            ARK AQUATECH develops advanced aquaculture
            infrastructure including Biofloc farming systems,
            shrimp farming projects, industrial water treatment,
            sustainable marine engineering solutions,
            smart hatchery systems,
            and intelligent aquatic ecosystem technologies
            across India.
          </p>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="px-6 pb-28">

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            gap-7
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                overflow-hidden
                rounded-[32px]
                border
                border-cyan-100
                bg-white
                shadow-[0_10px_40px_rgba(6,182,212,0.08)]
                transition-all
                duration-300
                hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]
              "
            >

              {/* IMAGE */}

              <div className="relative h-[280px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0F172A]/70
                    via-[#0F172A]/10
                    to-transparent
                  "
                />

                {/* LOCATION */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/30
                    bg-white/80
                    px-3
                    py-1.5
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <MapPin className="h-3.5 w-3.5 text-cyan-500" />

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-[#0F172A]
                    "
                  >
                    {project.location}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">

                <h3
                  className="
                    text-[26px]
                    font-bold
                    leading-tight
                    text-[#0F172A]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  {project.desc}
                </p>

                {/* BUTTON */}

              
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}