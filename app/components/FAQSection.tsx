"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Plus,
  Minus,
  Sparkles,
  Globe2,
} from "lucide-react";

const faqs = [
  {
    question:
      "What is Biofloc Technology in aquaculture farming?",

    answer:
      "Biofloc Technology is an advanced aquaculture system that improves water quality, reduces water exchange, and supports sustainable fish and shrimp farming.",
  },

  {
    question:
      "What are RAS Systems in commercial fish farming?",

    answer:
      "RAS systems are modern aquaculture solutions with intelligent filtration, oxygen balancing, automated monitoring, and continuous water recycling.",
  },

  {
    question:
      "Does ARK AQUATECH provide shrimp farming infrastructure?",

    answer:
      "Yes. We provide shrimp farming systems including Biofloc infrastructure, pond lining, aeration systems, and smart aquaculture automation.",
  },

  {
    question:
      "Do you provide industrial RO water treatment plants?",

    answer:
      "Yes. We design and install industrial RO plants, STP, ETP, WTP systems, and sustainable water treatment infrastructure.",
  },

  {
    question:
      "What aquaculture services does ARK AQUATECH provide?",

    answer:
      "We provide Biofloc systems, RAS aquaculture, smart automation, industrial water treatment, and sustainable marine engineering solutions.",
  },

  {
    question:
      "Why choose ARK AQUATECH for engineering projects?",

    answer:
      "ARK AQUATECH specializes in sustainable aquaculture infrastructure, smart marine technology, industrial engineering, and modern aquatic ecosystem solutions.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

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

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
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
              Frequently Asked Questions
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
            Aquaculture &
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
              Engineering FAQ
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
            Learn more about Biofloc systems,
            commercial RAS aquaculture, industrial
            water treatment, smart automation,
            sustainable marine engineering, and
            advanced aquatic ecosystem solutions.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mt-14 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                "
              >
                {/* QUESTION */}

                <button
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-5
                    sm:px-6
                    py-5
                    text-left
                  "
                >
                  <h3
                    className="
                      text-[16px]
                      sm:text-[18px]
                      font-medium
                      leading-[1.6]
                      text-white
                    "
                  >
                    {item.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      min-w-[40px]
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-300
                      text-[#061018]
                    "
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
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
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6">
                        <div className="mb-5 h-px bg-white/10" />

                        <p
                          className="
                            text-[14px]
                            sm:text-[15px]
                            leading-[1.9]
                            text-white/65
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM BLOCK */}


           

       

       
      </div>
    </section>
  );
}