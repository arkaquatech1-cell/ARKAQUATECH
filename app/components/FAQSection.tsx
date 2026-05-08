// components/home/FAQSection.tsx

"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question:
      "What is Biofloc Technology in aquaculture?",

    answer:
      "Biofloc Technology is an advanced aquaculture farming method that improves water quality, reduces water exchange, and increases fish and shrimp production using beneficial microbial systems.",
  },

  {
    question:
      "What are RAS Systems in fish farming?",

    answer:
      "RAS (Recirculating Aquaculture Systems) are modern fish farming systems that continuously filter and recycle water, creating sustainable and efficient aquaculture environments.",
  },

  {
    question:
      "Does ARK AQUATECH provide shrimp farming solutions?",

    answer:
      "Yes. ARK AQUATECH provides complete shrimp farming infrastructure, Biofloc systems, water treatment solutions, and marine engineering support for commercial shrimp farms.",
  },

  {
    question:
      "Do you provide industrial water treatment systems?",

    answer:
      "Yes. We design and install industrial RO plants, water filtration systems, wastewater treatment solutions, and smart water management infrastructure.",
  },

  {
    question:
      "Why choose ARK AQUATECH for aquaculture projects?",

    answer:
      "ARK AQUATECH specializes in advanced aquaculture technologies, sustainable marine engineering, Biofloc systems, RAS infrastructure, fish farming projects, and intelligent water treatment solutions.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

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

      <div className="relative z-10 max-w-5xl mx-auto px-6">
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
          className="text-center"
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
              Frequently Asked Questions
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
              FAQ Section
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
            Learn more about Biofloc technology, RAS systems,
            fish farming, shrimp farming, industrial water
            treatment, sustainable aquaculture infrastructure,
            and smart marine engineering solutions provided by
            ARK AQUATECH.
          </p>
        </motion.div>

        {/* FAQ LIST */}

        <div className="mt-20 space-y-6">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
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
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-3xl
                "
              >
                {/* LIGHT */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

                {/* QUESTION */}

                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="
                    relative
                    z-10
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-5
                    text-left
                    px-8
                    py-7
                  "
                >
                  <h3
                    className="
                      text-[22px]
                      leading-[1.5]
                      font-black
                      text-white
                    "
                  >
                    {item.question}
                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      min-w-[54px]
                      h-[54px]
                      rounded-2xl
                      bg-gradient-to-br
                      from-cyan-300
                      to-emerald-300
                      text-[#03131d]
                      shadow-[0_0_30px_rgba(34,211,238,0.35)]
                    "
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="h-[1px] bg-white/10 mb-6" />

                        <p
                          className="
                            text-cyan-100/70
                            text-lg
                            leading-[2]
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    top-5
                    right-24
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
      </div>
    </section>
  );
}