// components/home/StatsSection.tsx

"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Fish,
  Waves,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    title: "Years Experience",
    desc:
      "Professional expertise in aquaculture infrastructure and marine engineering solutions.",
    icon: ShieldCheck,
  },

  {
    number: "500+",
    title: "Projects Completed",
    desc:
      "Successfully delivered Biofloc systems, RAS farms, and smart water management projects.",
    icon: Fish,
  },

  {
    number: "50+",
    title: "Aquaculture Products",
    desc:
      "Advanced marine products and sustainable aquaculture technologies for commercial farming.",
    icon: Waves,
  },

  {
    number: "24/7",
    title: "Technical Support",
    desc:
      "Dedicated support and maintenance services for fish farming and marine infrastructure.",
    icon: Sparkles,
  },
];

export default function StatsSection() {
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
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-200px]
            left-[-200px]
            w-[550px]
            h-[550px]
            rounded-full
            bg-cyan-400/10
            blur-[150px]
          "
        />

        {/* EMERALD GLOW */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-200px]
            right-[-200px]
            w-[550px]
            h-[550px]
            rounded-full
            bg-emerald-400/10
            blur-[150px]
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
        {/* TOP */}

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
              Company Achievements
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-8
              text-[48px]
              md:text-[72px]
              leading-[0.95]
              tracking-[-0.05em]
              font-black
              text-white
            "
          >
            Trusted Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture Experts
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
            ARK AQUATECH is a leading aquaculture company
            specializing in Biofloc technology, RAS systems,
            fish farming infrastructure, shrimp farming,
            industrial water treatment, and sustainable marine
            engineering solutions across India.
          </p>
        </motion.div>

        {/* STATS GRID */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-24">
          {stats.map((item, index) => {
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
                  scale: 1.03,
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
                {/* HOVER LIGHT */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-300/10 to-emerald-300/10" />

                {/* TOP ICON */}

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

                  {/* GLOW */}

                  <div className="absolute inset-0 rounded-3xl bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>

                {/* NUMBER */}

                <h2
                  className="
                    relative
                    mt-8
                    text-[68px]
                    leading-none
                    font-black
                    tracking-[-0.05em]
                    bg-gradient-to-r
                    from-cyan-300
                    via-white
                    to-emerald-300
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.number}
                </h2>

                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    text-2xl
                    font-black
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-cyan-100/70
                    leading-[1.9]
                    text-[15px]
                  "
                >
                  {item.desc}
                </p>

                {/* NUMBER BG */}

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

        {/* BOTTOM CONTENT */}

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
                  md:text-[56px]
                  leading-[1]
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
                aquaculture infrastructure, Biofloc systems,
                commercial fish farming solutions, industrial
                water treatment technologies, and smart marine
                engineering services for sustainable aquatic
                development and modern aquaculture businesses.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}