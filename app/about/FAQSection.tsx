"use client";

import {
  HelpCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "What is Biofloc fish farming?",
    answer:
      "Biofloc fish farming is an advanced aquaculture technology that improves water quality and fish production through beneficial microbial systems and sustainable water management.",
  },

  {
    question: "What is a RAS aquaculture system?",
    answer:
      "RAS (Recirculating Aquaculture System) is a modern fish farming technology that continuously filters and reuses water for efficient and sustainable aquaculture operations.",
  },

  {
    question: "Do you provide industrial water treatment solutions?",
    answer:
      "Yes, ARK AQUATECH provides industrial RO plants, water filtration systems, ETP, STP, and smart water management infrastructure solutions.",
  },

  {
    question: "Do you offer smart aquaculture automation?",
    answer:
      "Yes, we provide IoT-enabled automation systems including oxygen monitoring, pH sensors, feeders, smart controls, and remote monitoring solutions.",
  },

  {
    question: "Which industries do you serve?",
    answer:
      "We serve fish farming, shrimp farming, industrial plants, marine infrastructure, aquaculture farms, and sustainable water management industries.",
  },

  {
    question: "Do you provide installation and technical support?",
    answer:
      "Yes, we provide complete project consultation, installation, engineering execution, maintenance, and technical support services across India.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-16 lg:py-16">
      {/* BG */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-emerald-400/10
            blur-[140px]
          "
        />
      </div>

      {/* CONTAINER */}

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* TOP */}

        <div className="text-center">
          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-4
              py-2
            "
          >
            <Sparkles className="h-4 w-4 text-cyan-300" />

            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-cyan-100/80
              "
            >
              Frequently Asked Questions
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-8
              text-[38px]
              font-semibold
              leading-[1]
              tracking-[-0.04em]
              text-white
              sm:text-[52px]
              lg:text-[68px]
            "
          >
            Common Questions About
            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-cyan-200
                via-white
                to-emerald-200
                bg-clip-text
                text-transparent
              "
            >
              Aquaculture Solutions
            </span>
          </h2>

          {/* DESC */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[15px]
              leading-[2]
              text-cyan-100/70
              sm:text-[16px]
            "
          >
            Find answers about Biofloc fish farming,
            RAS systems, smart aquaculture automation,
            industrial water treatment,
            and sustainable marine engineering solutions.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className="mt-20 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                group
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
              "
            >
              {/* HEADER */}

              <div
                className="
                  flex
                  cursor-pointer
                  items-center
                  justify-between
                  gap-5
                  p-7
                "
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      min-w-[48px]
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-300
                    "
                  >
                    <HelpCircle className="h-6 w-6 text-[#031018]" />
                  </div>

                  {/* QUESTION */}

                  <h3
                    className="
                      text-[22px]
                      font-semibold
                      leading-[1.5]
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {faq.question}
                  </h3>
                </div>

                {/* ARROW */}

                <ChevronDown
                  className="
                    h-6
                    w-6
                    text-cyan-300
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                />
              </div>

              {/* ANSWER */}

              <div className="px-7 pb-7">
                <p
                  className="
                    pl-16
                    text-[15px]
                    leading-[2]
                    text-cyan-100/70
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}