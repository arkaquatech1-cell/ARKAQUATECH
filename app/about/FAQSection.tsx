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
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* GLOW EFFECTS */}

        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0A6EBD]/10
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
            bg-[#63C96A]/10
            blur-[140px]
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,110,189,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* CONTAINER */}

      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* TOP SECTION */}

        <div className="text-center">
          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#0A6EBD]/10
              bg-[#F4F8FF]
              px-5
              py-2.5
            "
          >
            <Sparkles className="h-4 w-4 text-[#0A6EBD]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#021B2F]
              "
            >
              Frequently Asked Questions
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-8
              text-[40px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-[#021B2F]
              sm:text-[56px]
              lg:text-[72px]
            "
          >
            Common Questions About

            <span
              className="
                mt-3
                block
                bg-gradient-to-r
                from-[#63C96A]
                via-[#0A6EBD]
                to-[#15176B]
                bg-clip-text
                text-transparent
              "
            >
              Aquaculture Solutions
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[16px]
              leading-[2]
              text-[#4B5563]
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
                rounded-[32px]
                border
                border-[#E5E7EB]
                bg-white
                shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_60px_rgba(10,110,189,0.10)]
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
                      h-14
                      w-14
                      min-w-[56px]
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#0A6EBD]
                      to-[#15176B]
                      shadow-lg
                    "
                  >
                    <HelpCircle className="h-6 w-6 text-white" />
                  </div>

                  {/* QUESTION */}

                  <h3
                    className="
                      text-[22px]
                      font-bold
                      leading-[1.5]
                      tracking-[-0.03em]
                      text-[#021B2F]
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
                    text-[#0A6EBD]
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
                    pl-[72px]
                    text-[15px]
                    leading-[2]
                    text-[#6B7280]
                  "
                >
                  {faq.answer}
                </p>
              </div>

              {/* TOP LINE */}

              <div
                className="
                  h-1
                  w-full
                  bg-gradient-to-r
                  from-[#63C96A]
                  via-[#0A6EBD]
                  to-[#15176B]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}