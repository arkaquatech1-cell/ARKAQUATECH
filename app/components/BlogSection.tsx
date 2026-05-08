// components/home/BlogSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const blogs = [
  {
    title:
      "Benefits Of Biofloc Technology In Modern Fish Farming",

    image: "/blog1.jpg",

    date: "May 2026",

    desc:
      "Discover how Biofloc technology improves water quality, increases fish production, and reduces farming costs for sustainable aquaculture businesses.",
  },

  {
    title:
      "Why RAS Systems Are The Future Of Aquaculture",

    image: "/blog2.jpg",

    date: "May 2026",

    desc:
      "Learn how advanced Recirculating Aquaculture Systems help commercial fish farming with automated filtration and smart water recycling.",
  },

  {
    title:
      "Smart Water Treatment Solutions For Shrimp Farming",

    image: "/blog3.jpg",

    date: "May 2026",

    desc:
      "Industrial RO plants and intelligent water management systems are transforming shrimp farming and marine infrastructure projects.",
  },
];

export default function BlogSection() {
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
              Latest Insights
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
            Aquaculture
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Blogs & Insights
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
            Explore the latest insights about Biofloc
            technology, fish farming, shrimp farming, RAS
            systems, industrial water treatment, sustainable
            aquaculture infrastructure, and smart marine
            engineering solutions from ARK AQUATECH.
          </p>
        </motion.div>

        {/* BLOG GRID */}

        <div className="grid lg:grid-cols-3 gap-8 mt-24">
          {blogs.map((blog, index) => (
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
                  src={blog.image}
                  alt={blog.title}
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

                {/* DATE */}

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
                  <CalendarDays className="w-4 h-4 text-cyan-300" />

                  <span className="text-white text-sm font-semibold">
                    {blog.date}
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
                  {blog.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-cyan-100/70
                    leading-[2]
                    text-[15px]
                  "
                >
                  {blog.desc}
                </p>

                {/* BUTTON */}

                <Link
                  href="/blogs"
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
                  Read More

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

        {/* BOTTOM SEO BLOCK */}

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
                Smart Marine
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Knowledge Hub
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
                Stay updated with the latest innovations in
                Biofloc technology, fish farming systems,
                shrimp farming infrastructure, industrial
                water treatment, RAS technology, and smart
                aquaculture engineering solutions from
                ARK AQUATECH.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}