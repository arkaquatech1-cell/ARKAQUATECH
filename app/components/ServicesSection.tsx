

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Waves,
  Fish,
  Droplets,
  Factory,
  Cpu,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
const services = [
  {
    image: "/Services/services1.jpg",
    title: "Biofloc Fish Farming",
    description:
      "Advanced Biofloc fish farming systems for sustainable aquaculture production, oxygen balancing, and smart aquatic ecosystem management.",
  },

  {
    image: "/Services/services2.jpg",
    title: "RAS Aquaculture Systems",
    description:
      "Modern RAS aquaculture technology with intelligent filtration systems, water recycling, and commercial fish farming infrastructure.",
  },

  {
    image: "/Services/services3.png",
    title: "Industrial Water Treatment Solutions",
    description:
      "Industrial RO plants, wastewater treatment systems, ETP, STP, filtration plants, and smart water purification engineering solutions.",
  },

  {
    image: "/Services/services4.jpg",
    title: "Advanced Aquaculture Systems",
    description:
      "Smart aquaculture engineering, aeration systems, HDPE pond lining, automation, oxygen management, and sustainable aquatic infrastructure.",
  },

  {
  image: "/Services/services5.jpg",
  title: "Shrimp Farming Setup",
  description:
    "Complete shrimp farming solutions with advanced pond lining, aerators, feeders, oxygen systems, and water management for high-yield aquaculture production.",},
  {
    image: "/Services/services6.jpg",
    title: "Hatchery Design Solutions",
    description:
      "Modern hatchery design solutions for fish breeding, filtration systems, water circulation technology, and sustainable hatchery infrastructure.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-14
        lg:py-16
        bg-gradient-to-br
        from-[#f5f7ff]
        via-[#eef4ff]
        to-[#f3fff6]
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* BLUE GLOW */}

        <div
          className="
            absolute
            top-[-140px]
            left-[-100px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#15176B]/15
            blur-[120px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute
            bottom-[-160px]
            right-[-120px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#63C96A]/20
            blur-[120px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,23,107,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(21,23,107,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TOP SECTION */}

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
              border-[#15176B]/10
              bg-white/80
              px-5
              py-2.5
              shadow-lg
              backdrop-blur-xl
            "
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                font-semibold
                text-[#15176B]
              "
            >
              Smart Aquaculture Solutions
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-7
              text-[38px]
              sm:text-[54px]
              lg:text-[68px]
              leading-[0.95]
              tracking-[-0.05em]
              font-black
              text-[#0F172A]
            "
          >
            Advanced Water &
            <span
              className="
                block
                mt-2
                bg-gradient-to-r
                from-[#63C96A]
                via-[#15176B]
                to-[#63C96A]
                bg-clip-text
                text-transparent
              "
            >
              Aquaculture Services
            </span>
          </h2>

          {/* SEO DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[16px]
              leading-[1.9]
              text-slate-600
            "
          >
            ARK AQUATECH provides advanced
            Biofloc fish farming systems,
            RAS aquaculture technology,
            industrial RO water treatment plants,
            shrimp farming infrastructure,
            smart aquaculture automation,
            aeration systems,
            aquaponics solutions,
            HDPE pond lining,
            wastewater treatment systems,
            and sustainable marine engineering
            solutions across India.
          </p>
        </motion.div>

  

        {/* SERVICES GRID */}

{/* SERVICES GRID */}

<div
  className="
    mt-16
    grid
    gap-7
    sm:grid-cols-2
    xl:grid-cols-3
    items-stretch
  "
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[32px]
        border
        border-[#15176B]/10
        bg-white/75
        shadow-[0_15px_50px_rgba(21,23,107,0.07)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:shadow-[0_25px_70px_rgba(21,23,107,0.14)]
      "
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="
            h-[240px]
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.08]
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#15176B]/70
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          flex
          flex-1
          flex-col
          p-7
        "
      >
        {/* TOP BORDER */}

        <div
          className="
            absolute
            left-0
            top-0
            h-1.5
            w-full
            bg-gradient-to-r
            from-[#15176B]
            via-[#0A6EBD]
            to-[#63C96A]
          "
        />

        {/* TOP CONTENT */}

        <div>
          {/* TITLE */}

          <h3
            className="
              min-h-[64px]
              text-[24px]
              sm:text-[26px]
              font-black
              leading-tight
              tracking-[-0.03em]
              text-[#0F172A]
            "
          >
            {service.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              min-h-[120px]
              text-[15px]
              leading-[1.9]
              text-slate-600
            "
          >
            {service.description}
          </p>
        </div>

        {/* BUTTON */}

        <div className="mt-auto pt-7">
          <Link
            href="/services"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-[#15176B]
              to-[#63C96A]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(21,23,107,0.15)]
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Explore Services

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>

      {/* HOVER GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            -right-20
            -top-20
            h-44
            w-44
            rounded-full
            bg-[#63C96A]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -left-20
            h-44
            w-44
            rounded-full
            bg-[#15176B]/10
            blur-3xl
          "
        />
      </div>
    </motion.div>
  ))}
</div>
        {/* SEO BLOCK */}

       
      </div>
    </section>
  );
}