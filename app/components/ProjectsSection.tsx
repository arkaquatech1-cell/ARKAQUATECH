"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  MapPin,
  Sparkles,
  Globe2,
} from "lucide-react";

const projects = [
  {
    title: "Advanced Biofloc Farming Project",
    location: "Andhra Pradesh, India",
    image:"/images/services1.png",
    desc:
      "Commercial Biofloc infrastructure with sustainable aquatic ecosystem management and smart water circulation systems.",
  },

  {
    title: "Industrial RAS System",
    location: "Telangana, India",
    image:"/images/services2.png",
    desc:
      "Modern Recirculating Aquaculture System with intelligent filtration and automated monitoring technologies.",
  },

  {
    title: "Shrimp Farming Infrastructure",
    location: "Tamil Nadu, India",
  image:"/images/services3.png",
    desc:
      "High-efficiency shrimp farming infrastructure developed with sustainable marine engineering systems.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-14 lg:py-14">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        {/* LIGHT */}

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[300px]
            h-[300px]
            rounded-full
            bg-cyan-400/8
            blur-[100px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            w-[300px]
            h-[300px]
            rounded-full
            bg-emerald-400/8
            blur-[100px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-2.5
              backdrop-blur-md
            "
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-cyan-100/75
              "
            >
              Featured Projects
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-6
              text-[34px]
              sm:text-[48px]
              lg:text-[62px]
              leading-[1]
              tracking-[-0.04em]
              font-semibold
              text-white
            "
          >
            Smart Aquaculture
            <span
              className="
                block
                mt-2
                bg-gradient-to-r
                from-cyan-200
                via-white
                to-emerald-200
                bg-clip-text
                text-transparent
              "
            >
              Infrastructure Projects
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-[15px]
              sm:text-[16px]
              leading-[1.9]
              text-white/68
            "
          >
            Explore advanced Biofloc systems,
            industrial RAS aquaculture infrastructure,
            shrimp farming projects, sustainable water
            treatment plants, and smart aquaculture
            engineering solutions developed by
            ARK AQUATECH.
          </p>
        </motion.div>

        {/* PROJECTS */}

        <div
          className="
            mt-14
            grid
            gap-5
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
                delay: index * 0.06,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-md
              "
            >
              {/* IMAGE */}

              <div className="relative h-[250px] overflow-hidden">
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
                    from-[#061018]
                    via-[#061018]/20
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
                    border-white/10
                    bg-black/30
                    px-3
                    py-1.5
                    backdrop-blur-md
                  "
                >
                  <MapPin className="h-3.5 w-3.5 text-cyan-300" />

                  <span
                    className="
                      text-xs
                      font-medium
                      text-white
                    "
                  >
                    {project.location}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <h3
                  className="
                    text-[24px]
                    font-semibold
                    leading-tight
                    text-white
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-[1.9]
                    text-white/65
                  "
                >
                  {project.desc}
                </p>

                {/* BUTTON */}

                <Link
                  href="/projects"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-cyan-200
                  "
                >
                  Explore Project

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BLOCK */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-16
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-7
            sm:p-10
            lg:p-12
            backdrop-blur-md
          "
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  py-2
                "
              >
                <Globe2 className="h-4 w-4 text-cyan-300" />

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-cyan-100/75
                  "
                >
                  Sustainable Innovation
                </span>
              </div>

              <h3
                className="
                  mt-5
                  text-[30px]
                  sm:text-[42px]
                  lg:text-[52px]
                  leading-[1]
                  tracking-[-0.04em]
                  font-semibold
                  text-white
                "
              >
                Future Ready
                <span
                  className="
                    block
                    mt-2
                    bg-gradient-to-r
                    from-cyan-200
                    via-white
                    to-emerald-200
                    bg-clip-text
                    text-transparent
                  "
                >
                  Engineering Projects
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
                  text-[15px]
                  sm:text-[16px]
                  leading-[1.9]
                  text-white/68
                "
              >
                ARK AQUATECH continues to develop smart
                aquaculture systems, industrial water
                treatment infrastructure, sustainable
                marine engineering, and intelligent
                aquatic ecosystem solutions for modern
                industries across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
``