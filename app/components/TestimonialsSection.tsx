// components/home/TestimonialsSection.tsx

"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Star,
  Quote,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Fish Farm Owner",
    image: "/client1.jpg",
    review:
      "ARK AQUATECH delivered an excellent Biofloc farming system for our commercial fish farm. Their smart water management and technical support are outstanding.",
  },

  {
    name: "Suresh Reddy",
    role: "Shrimp Farming Business",
    image: "/client2.jpg",
    review:
      "Professional marine engineering and advanced RAS systems helped us improve productivity and reduce operational costs significantly.",
  },

  {
    name: "Anil Chowdary",
    role: "Aquaculture Investor",
    image: "/client3.jpg",
    review:
      "Best aquaculture company for sustainable fish farming infrastructure, industrial water treatment, and smart marine technology solutions.",
  },
];

export default function TestimonialsSection() {
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
              Client Testimonials
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
            Trusted By
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture Businesses
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
            ARK AQUATECH is trusted by fish farming
            industries, shrimp farming businesses, marine
            infrastructure companies, and aquaculture
            investors for advanced Biofloc systems, RAS
            technology, and sustainable aquatic engineering.
          </p>
        </motion.div>

        {/* TESTIMONIALS */}

        <div className="grid lg:grid-cols-3 gap-8 mt-24">
          {testimonials.map((item, index) => (
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

              {/* QUOTE */}

              <div
                className="
                  absolute
                  top-6
                  right-6
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-300
                  to-emerald-300
                  text-[#03131d]
                  shadow-[0_0_40px_rgba(34,211,238,0.35)]
                "
              >
                <Quote className="w-8 h-8" />
              </div>

              {/* STARS */}

              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-cyan-300 text-cyan-300"
                  />
                ))}
              </div>

              {/* REVIEW */}

              <p
                className="
                  mt-8
                  text-cyan-100/70
                  leading-[2]
                  text-[16px]
                "
              >
                {item.review}
              </p>

              {/* USER */}

              <div className="flex items-center gap-5 mt-10">
                {/* IMAGE */}

                <div
                  className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    overflow-hidden
                    border
                    border-white/10
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* INFO */}

                <div>
                  <h3 className="text-xl font-black text-white">
                    {item.name}
                  </h3>

                  <p className="text-cyan-100/60 mt-1">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* NUMBER */}

              <div
                className="
                  absolute
                  bottom-2
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
                Trusted Marine
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Engineering Partner
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
                ARK AQUATECH continues to deliver innovative
                Biofloc technology, commercial fish farming
                infrastructure, industrial water treatment,
                smart RAS systems, and sustainable marine
                engineering services for aquaculture
                industries across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}