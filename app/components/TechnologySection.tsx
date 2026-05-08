// components/home/TechnologySection.tsx

"use client";

import { motion } from "framer-motion";

import {
  Cpu,
  Waves,
  Droplets,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "Smart Automation",
    desc:
      "AI-powered aquaculture automation systems for intelligent monitoring, feeding control, and water management.",
  },

  {
    icon: Waves,
    title: "RAS Technology",
    desc:
      "Advanced Recirculating Aquaculture Systems with automated filtration and oxygen balancing infrastructure.",
  },

  {
    icon: Droplets,
    title: "Water Treatment",
    desc:
      "Industrial RO plants, filtration systems, and smart water purification technologies for marine farming.",
  },

  {
    icon: ShieldCheck,
    title: "Water Quality Sensors",
    desc:
      "Real-time monitoring systems for pH balance, oxygen control, temperature, and aquatic ecosystem stability.",
  },

  {
    icon: Activity,
    title: "Smart Monitoring",
    desc:
      "IoT-enabled dashboards and remote monitoring solutions for modern aquaculture infrastructure management.",
  },

  {
    icon: Sparkles,
    title: "Eco Engineering",
    desc:
      "Sustainable marine engineering systems designed for eco-friendly fish farming and aquaculture productivity.",
  },
];

export default function TechnologySection() {
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
              Smart Technology
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-10
              text-[50px]
              md:text-[74px]
              leading-[0.95]
              tracking-[-0.05em]
              font-black
              text-white
            "
          >
            Advanced Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Technology Systems
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
            ARK AQUATECH delivers next-generation aquaculture
            technology including AI-powered monitoring,
            Biofloc systems, RAS infrastructure, industrial
            water treatment, smart aquatic sensors, and
            sustainable marine engineering solutions.
          </p>
        </motion.div>

        {/* TECHNOLOGY GRID */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-24">
          {technologies.map((item, index) => {
            const Icon = item.icon;

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
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-cyan-100/70
                      leading-[2]
                      text-[15px]
                    "
                  >
                    {item.desc}
                  </p>
                </div>

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
            );
          })}
        </div>

        {/* BOTTOM INFO */}

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
                Future Ready
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Smart Aquaculture
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
                ARK AQUATECH combines intelligent marine
                engineering, automated water systems,
                industrial filtration technology, smart fish
                farming infrastructure, and sustainable
                aquaculture innovation for modern aquatic
                businesses.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}