"use client";

import {
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Fish Farm Owner",
    company: "Andhra Pradesh",
    review:
      "ARK AQUATECH delivered an excellent Biofloc fish farming setup with smart automation and professional technical support.",
  },

  {
    name: "Suresh Reddy",
    role: "Aquaculture Entrepreneur",
    company: "Telangana",
    review:
      "The RAS system installation and water management solutions improved our farm efficiency and sustainability significantly.",
  },

  {
    name: "Mahesh Varma",
    role: "Industrial Client",
    company: "Hyderabad",
    review:
      "Professional engineering team with advanced industrial water treatment solutions and outstanding project execution.",
  },
];

export default function TestimonialsSection() {
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
        {/* GLOW */}

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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* TOP */}

        <div className="mx-auto max-w-4xl text-center">
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
              Client Testimonials
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
            Trusted By Clients

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
              Across India
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
            ARK AQUATECH is trusted by
            aquaculture businesses,
            industrial clients,
            and commercial fish farming
            operations for sustainable
            engineering and smart water
            management solutions.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-[#E5E7EB]
                bg-white
                p-8
                shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(10,110,189,0.12)]
              "
            >
              {/* HOVER BG */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-[#0A6EBD]/5
                  to-[#63C96A]/5
                "
              />

              {/* TOP LINE */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-1
                  bg-gradient-to-r
                  from-[#63C96A]
                  via-[#0A6EBD]
                  to-[#15176B]
                "
              />

              {/* CONTENT */}

              <div className="relative z-10">
                {/* QUOTE ICON */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#0A6EBD]
                    to-[#15176B]
                    shadow-lg
                  "
                >
                  <Quote className="h-8 w-8 text-white" />
                </div>

                {/* STARS */}

                <div className="mt-7 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="
                        h-5
                        w-5
                        fill-[#FACC15]
                        text-[#FACC15]
                      "
                    />
                  ))}
                </div>

                {/* REVIEW */}

                <p
                  className="
                    mt-7
                    text-[15px]
                    leading-[2]
                    text-[#4B5563]
                  "
                >
                  “{item.review}”
                </p>

                {/* USER */}

                <div className="mt-10">
                  <h3
                    className="
                      text-[24px]
                      font-bold
                      tracking-[-0.03em]
                      text-[#021B2F]
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-medium
                      text-[#0A6EBD]
                    "
                  >
                    {item.role}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-[#6B7280]
                    "
                  >
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}