"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Fish,
  Waves,
  Globe2,
  Sparkles,
  Cpu,
} from "lucide-react";

const stats = [
  {
    number: "2019+",
    title: "Established Company",
    desc:
      "Delivering advanced aquaculture engineering and sustainable water infrastructure solutions since 2019.",
    icon: ShieldCheck,
  },

  {
    number: "500+",
    title: "Projects Delivered",
    desc:
      "Successfully completed Biofloc systems, industrial RO plants, and aquaculture infrastructure projects.",
    icon: Fish,
  },

  {
    number: "24/7",
    title: "Technical Support",
    desc:
      "Dedicated consultancy, maintenance services, and technical engineering support for aquaculture businesses.",
    icon: Waves,
  },

  {
    number: "100%",
    title: "Sustainable Solutions",
    desc:
      "Focused on eco-friendly systems, water recycling, smart automation, and sustainable aquatic ecosystems.",
    icon: Globe2,
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
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
              Company Achievements
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
            Trusted Aquaculture
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
              Engineering Company
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
            ARK AQUATECH specializes in Biofloc systems,
            industrial RO plants, smart aquaculture
            automation, sustainable marine engineering,
            and modern aquatic infrastructure solutions
            across India.
          </p>
        </motion.div>

        {/* STATS */}

        <div
          className="
            mt-14
            grid
            gap-5
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item, index) => {
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

                {/* NUMBER */}

                <h2
                  className="
                    relative
                    mt-6
                    text-[42px]
                    sm:text-[50px]
                    leading-none
                    tracking-[-0.04em]
                    font-semibold
                    bg-gradient-to-r
                    from-cyan-200
                    via-white
                    to-emerald-200
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.number}
                </h2>

                {/* TITLE */}

                <h3
                  className="
                    mt-4
                    text-[20px]
                    font-semibold
                    leading-tight
                    text-white
                  "
                >
                  {item.title}
                </h3>

                {/* DESC */}

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
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM BLOCK */}

       
          
      </div>
    </section>
  );
}