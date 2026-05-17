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
  ShieldCheck,
  Waves,
  Droplets,
} from "lucide-react";

const faqs = [
  {
    question:
      "What is Biofloc Technology in aquaculture farming?",

    answer:
      "Biofloc Technology is an advanced aquaculture farming system that improves water quality, reduces water exchange, enhances fish growth, and supports sustainable fish and shrimp farming infrastructure.",
  },

  {
    question:
      "What are RAS Systems in commercial fish farming?",

    answer:
      "RAS systems (Recirculating Aquaculture Systems) are modern fish farming technologies with intelligent filtration, oxygen balancing, smart monitoring, and continuous water recycling for commercial aquaculture projects.",
  },

  {
    question:
      "Does ARK AQUATECH provide shrimp farming infrastructure?",

    answer:
      "Yes. ARK AQUATECH provides complete shrimp farming infrastructure including Biofloc systems, HDPE pond lining, aeration systems, smart automation, and sustainable aquaculture engineering solutions.",
  },

  {
    question:
      "Do you provide industrial RO water treatment plants?",

    answer:
      "Yes. We design and install industrial RO plants, STP plants, ETP systems, WTP systems, and advanced industrial water treatment infrastructure across India.",
  },

  {
    question:
      "What aquaculture services does ARK AQUATECH provide?",

    answer:
      "We provide Biofloc fish farming systems, RAS aquaculture technology, industrial water treatment, aquaponics, smart automation, oxygen management systems, and sustainable marine engineering solutions.",
  },

  {
    question:
      "Why choose ARK AQUATECH for engineering projects?",

    answer:
      "ARK AQUATECH specializes in sustainable aquaculture infrastructure, advanced marine engineering, smart water treatment systems, industrial automation, and future-ready aquatic ecosystem solutions.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

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
            top-[-150px]
            left-[-120px]
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
            bottom-[-180px]
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
              border-[#15176B]/10
              bg-white/80
              px-5
              py-2.5
              shadow-lg
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-[#63C96A]" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                font-semibold
                text-[#15176B]
              "
            >
              Frequently Asked Questions
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
            Aquaculture &
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
              Engineering FAQ
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
            Learn more about Biofloc fish farming,
            commercial RAS aquaculture systems,
            industrial RO water treatment plants,
            smart aquaculture automation,
            sustainable marine engineering,
            aquaponics infrastructure,
            wastewater treatment systems,
            oxygen management technology,
            and modern aquatic ecosystem solutions.
          </p>
        </motion.div>

        {/* FAQ LIST */}

        <div className="mt-16 space-y-5">
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
                  rounded-[28px]
                  border
                  border-[#15176B]/10
                  bg-white/75
                  shadow-[0_10px_40px_rgba(21,23,107,0.06)]
                  backdrop-blur-xl
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
                    px-6
                    py-6
                    text-left
                  "
                >
                  <h3
                    className="
                      text-[17px]
                      sm:text-[19px]
                      font-semibold
                      leading-[1.7]
                      text-[#0F172A]
                    "
                  >
                    {item.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      min-w-[44px]
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#15176B]
                      to-[#63C96A]
                      text-white
                      shadow-lg
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
                      <div className="px-6 pb-7">
                        <div className="mb-5 h-px bg-[#15176B]/10" />

                        <p
                          className="
                            text-[15px]
                            leading-[1.9]
                            text-slate-600
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

        {/* SEO BOTTOM SECTION */}



          

             
     
       
      </div>
    </section>
  );
}