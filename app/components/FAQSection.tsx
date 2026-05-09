// components/home/FAQSection.tsx

"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
  Sparkles,
  Globe2,
  Cpu,
} from "lucide-react";

const faqs = [
  {
    question:
      "What is Biofloc Technology in aquaculture farming?",

    answer:
      "Biofloc Technology is an advanced aquaculture farming system that improves water quality, reduces water exchange, increases fish and shrimp production, and supports sustainable fish farming using beneficial microbial ecosystems.",
  },

  {
    question:
      "What are RAS Systems in commercial fish farming?",

    answer:
      "RAS (Recirculating Aquaculture Systems) are modern fish farming systems designed with intelligent filtration, oxygen balancing, automated monitoring, and continuous water recycling for sustainable aquaculture production.",
  },

  {
    question:
      "Does ARK AQUATECH provide shrimp farming infrastructure solutions?",

    answer:
      "Yes. ARK AQUATECH provides complete shrimp farming infrastructure including Biofloc systems, HDPE pond lining, aeration systems, industrial water treatment, smart aquaculture automation, and marine engineering services.",
  },

  {
    question:
      "Do you provide industrial RO water treatment plants?",

    answer:
      "Yes. We design and install industrial RO plants, STP, ETP, WTP systems, filtration technologies, wastewater recycling systems, and sustainable water management infrastructure for industries and institutions.",
  },

  {
    question:
      "What aquaculture services does ARK AQUATECH provide in India?",

    answer:
      "ARK AQUATECH provides Biofloc fish farming systems, RAS aquaculture systems, shrimp farming infrastructure, IoT-based smart aquaculture automation, industrial water treatment, civil engineering infrastructure, and sustainable marine engineering solutions across India.",
  },

  {
    question:
      "Why choose ARK AQUATECH for aquaculture and engineering projects?",

    answer:
      "ARK AQUATECH specializes in sustainable aquaculture infrastructure, industrial engineering, smart marine technology, commercial fish farming systems, water treatment plants, IoT automation, and modern aquatic ecosystem management solutions with reliable technical expertise.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#021018] py-32">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.12),transparent_55%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute left-[-220px] top-[-220px] h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="absolute bottom-[-220px] right-[-220px] h-[650px] w-[650px] rounded-full bg-emerald-400/10 blur-[180px]"
        />
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* BADGE */}

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-cyan-300" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Frequently Asked Questions
            </span>
          </div>

          {/* TITLE */}

          <h2 className="mt-10 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
            Aquaculture &
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Water Engineering FAQ
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
            Learn more about Biofloc fish farming,
            commercial RAS aquaculture systems, industrial
            RO water treatment plants, shrimp farming
            infrastructure, smart IoT aquaculture automation,
            sustainable marine engineering, civil
            infrastructure projects, and advanced aquatic
            ecosystem solutions provided by ARK AQUATECH
            across Andhra Pradesh and India.
          </p>
        </motion.div>

        {/* FAQ LIST */}

        <div className="mt-20 space-y-6">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl"
              >
                {/* HOVER */}

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

                {/* QUESTION */}

                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="relative z-10 flex w-full items-center justify-between gap-5 px-8 py-7 text-left"
                >
                  <h3 className="text-[22px] font-black leading-[1.5] text-white">
                    {item.question}
                  </h3>

                  <div className="flex h-[54px] min-w-[54px] items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 text-[#021018] shadow-[0_0_30px_rgba(34,211,238,0.35)]">
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
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
                        <div className="mb-6 h-[1px] bg-white/10" />

                        <p className="text-lg leading-[2] text-cyan-100/70">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* NUMBER */}

                <div className="absolute right-24 top-5 text-[90px] font-black leading-none text-white/[0.03]">
                  0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM SECTION */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-3xl md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
                <Globe2 className="h-4 w-4 text-cyan-300" />

                <span className="text-sm font-semibold uppercase tracking-wide text-cyan-100">
                  Sustainable Smart Engineering
                </span>
              </div>

              <h3 className="mt-6 text-4xl font-black leading-[1] text-white md:text-6xl">
                Future Ready
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Aquaculture Innovation
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              <p className="text-lg leading-[2] text-cyan-100/70">
                ARK AQUATECH continues to innovate in
                commercial fish farming, shrimp farming
                infrastructure, industrial water treatment,
                Biofloc systems, IoT-based aquaculture
                automation, sustainable marine engineering,
                civil infrastructure, and advanced aquatic
                ecosystem development for industries,
                institutions, and modern aquaculture
                businesses across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}