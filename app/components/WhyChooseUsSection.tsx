"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Globe2,
  Fish,
  Cpu,
  Droplets,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Engineering Expertise",
    desc:
      "Reliable aquaculture, engineering, and water management solutions for commercial and industrial projects.",
  },

  {
    icon: Fish,
    title: "Advanced Aquaculture Systems",
    desc:
      "Modern Biofloc farming, RAS systems, shrimp farming infrastructure, and fish farming technologies.",
  },

  {
    icon: Cpu,
    title: "Smart IoT Automation",
    desc:
      "IoT-based aquaculture monitoring with sensors, automation systems, and smart farm management.",
  },

  {
    icon: Droplets,
    title: "Industrial Water Solutions",
    desc:
      "RO plants, filtration systems, water recycling, and sustainable water treatment infrastructure.",
  },

  {
    icon: Building2,
    title: "Infrastructure Projects",
    desc:
      "Engineering development, pipelines, water structures, and sustainable civil infrastructure works.",
  },

  {
    icon: Globe2,
    title: "India & Global Markets",
    desc:
      "Providing aquaculture and engineering solutions across India and international markets.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-12 lg:py-14">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10">
        {/* SOFT LIGHT */}

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
              Why Choose ARK AQUATECH
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
            Smart Aquaculture &
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
              Engineering Experts
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
            ARK AQUATECH specializes in Biofloc farming,
            RAS aquaculture systems, industrial water
            treatment, smart automation, marine
            engineering, and sustainable infrastructure
            solutions across India and international
            aquaculture markets.
          </p>
        </motion.div>

        {/* FEATURES */}

        <div
          className="
            mt-14
            grid
            gap-5
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
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
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-md
                "
              >
                {/* HOVER */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-cyan-400/[0.04]
                    to-emerald-400/[0.04]
                  "
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-300
                  "
                >
                  <Icon className="h-6 w-6 text-[#061018]" />
                </div>

                {/* CONTENT */}

                <div className="relative z-10">
                  <h3
                    className="
                      mt-5
                      text-[22px]
                      font-semibold
                      leading-tight
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[14px]
                      leading-[1.9]
                      text-white/65
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
                <Sparkles className="h-4 w-4 text-cyan-300" />

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-cyan-100/75
                  "
                >
                  Sustainable Engineering
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
                  Smart Infrastructure
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
                Since 2019, ARK AQUATECH has delivered
                modern aquaculture, industrial water
                management, automation, marine
                engineering, and sustainable
                infrastructure solutions with strong
                focus on innovation, efficiency,
                quality, and long-term reliability.
              </p>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-7"
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-cyan-300
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-[#061018]
                    transition-all
                    duration-300
                    hover:bg-cyan-200
                  "
                >
                  Contact Experts

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}