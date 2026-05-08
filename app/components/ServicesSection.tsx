// components/home/ServicesSection.tsx

"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import {
  Fish,
  Waves,
  Droplets,
  Factory,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "RAS Systems",
    desc:
      "Advanced Recirculating Aquaculture Systems with intelligent filtration, oxygen balancing, and smart marine water recycling solutions.",
    icon: Waves,
  },

  {
    title: "Biofloc Farming",
    desc:
      "Sustainable Biofloc fish farming systems designed for high-density aquaculture production and eco-friendly aquatic farming.",
    icon: Fish,
  },

  {
    title: "Water Management",
    desc:
      "Industrial RO plants, smart water treatment systems, filtration technologies, and marine water quality management services.",
    icon: Droplets,
  },

  {
    title: "Marine Engineering",
    desc:
      "Modern aquaculture engineering infrastructure, commercial fish farming projects, and sustainable marine technology solutions.",
    icon: Factory,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#03131d]">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        {/* MAIN GRADIENT */}

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

        {/* CYAN GLOW */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-200px]
            left-[-200px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-400/10
            blur-[140px]
          "
        />

        {/* EMERALD GLOW */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-200px]
            right-[-200px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-emerald-400/10
            blur-[140px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
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
              px-5
              py-2
              rounded-full
              border
              border-cyan-300/15
              bg-white/[0.04]
              backdrop-blur-xl
            "
          >
            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />

            <span className="text-cyan-100 text-sm font-semibold tracking-wide uppercase">
              Our Aquaculture Services
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-8
              text-[48px]
              md:text-[72px]
              leading-[0.95]
              tracking-[-0.04em]
              font-black
              text-white
            "
          >
            Advanced Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              text-lg
              md:text-xl
              leading-[2]
              text-cyan-100/70
            "
          >
            ARK AQUATECH delivers next-generation aquaculture
            technology solutions including Biofloc farming,
            RAS systems, smart water treatment, marine
            engineering infrastructure, and sustainable fish
            farming systems for commercial aquaculture growth.
          </p>
        </motion.div>

        {/* SERVICES GRID */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-24">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
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
                  p-8
                  shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                "
              >
                {/* LIGHT */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />

                {/* HOVER GRADIENT */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-300/10 to-emerald-300/10" />

                {/* ICON */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="
                    relative
                    flex
                    items-center
                    justify-center
                    w-20
                    h-20
                    rounded-3xl
                    bg-gradient-to-br
                    from-cyan-300
                    via-sky-400
                    to-emerald-300
                    text-[#03131d]
                    shadow-[0_0_40px_rgba(34,211,238,0.35)]
                  "
                >
                  <Icon className="w-10 h-10" />

                  {/* ICON GLOW */}

                  <div className="absolute inset-0 rounded-3xl bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3
                    className="
                      mt-8
                      text-[28px]
                      leading-tight
                      font-black
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-cyan-100/70
                      leading-[1.9]
                      text-[15px]
                    "
                  >
                    {service.desc}
                  </p>

                  {/* BUTTON */}

                  <Link
                    href="/services"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      text-cyan-200
                      font-bold
                      tracking-wide
                      group/link
                    "
                  >
                    Learn More

                    <ArrowRight
                      className="
                        w-5
                        h-5
                        transition-transform
                        duration-300
                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </div>

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    top-6
                    right-6
                    text-[80px]
                    font-black
                    leading-none
                    text-white/[0.03]
                  "
                >
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION */}

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
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-cyan-300/15
                  bg-white/[0.04]
                  px-5
                  py-2
                "
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />

                <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wide">
                  Smart Aquaculture Technology
                </span>
              </div>

              <h3
                className="
                  mt-6
                  text-[42px]
                  md:text-[56px]
                  leading-[1]
                  font-black
                  text-white
                "
              >
                Sustainable Marine
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Infrastructure Solutions
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
                ARK AQUATECH specializes in smart aquaculture
                infrastructure, commercial fish farming,
                Biofloc technology, industrial water treatment,
                RAS systems, and sustainable marine engineering
                solutions designed for modern aquaculture
                businesses across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}