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
    <section className="relative overflow-hidden py-16 sm:py-16 lg:py-16">
      {/* BG */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            top-[-180px]
            left-[-180px]
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
              Client Testimonials
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
            Trusted By Clients
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
              Across India
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
            ARK AQUATECH is trusted by
            aquaculture businesses,
            industrial clients,
            and commercial fish farming
            operations for sustainable
            engineering and smart water
            management solutions.
          </p>
        </div>

        {/* TESTIMONIALS */}

        <div className="mt-20 grid gap-7 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
              "
            >
              {/* BG */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-cyan-400/[0.05]
                  to-emerald-400/[0.03]
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
                    bg-cyan-300
                  "
                >
                  <Quote className="h-8 w-8 text-[#031018]" />
                </div>

                {/* STARS */}

                <div className="mt-7 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="
                        h-5
                        w-5
                        fill-cyan-300
                        text-cyan-300
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
                    text-cyan-100/70
                  "
                >
                  “{item.review}”
                </p>

                {/* USER */}

                <div className="mt-10">
                  <h3
                    className="
                      text-[24px]
                      font-semibold
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-cyan-300
                    "
                  >
                    {item.role}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-white/55
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