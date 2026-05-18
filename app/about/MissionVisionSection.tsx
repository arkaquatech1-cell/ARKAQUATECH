"use client";

import {
  Target,
  Eye,
  Sparkles,
} from "lucide-react";

export default function MissionVisionSection() {
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
            left-[-160px]
            top-[-160px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#0A6EBD]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-160px]
            right-[-160px]
            h-[380px]
            w-[380px]
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
              Mission & Vision
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
            Engineering The Future Of

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
              Sustainable Aquaculture
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
            ARK AQUATECH is committed to
            delivering innovative aquaculture
            engineering, smart water management,
            and sustainable marine infrastructure
            solutions through advanced technology
            and modern engineering practices.
          </p>
        </div>

        {/* GRID */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* MISSION */}

          <div
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
              sm:p-10
            "
          >
            {/* BACKGROUND */}

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
                to-transparent
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
                from-[#0A6EBD]
                to-[#15176B]
              "
            />

            {/* CONTENT */}

            <div className="relative z-10">
              {/* ICON */}

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
                <Target className="h-8 w-8 text-white" />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-[36px]
                  font-black
                  tracking-[-0.04em]
                  text-[#021B2F]
                "
              >
                Our Mission
              </h3>

              {/* TEXT */}

              <p
                className="
                  mt-6
                  text-[15px]
                  leading-[2]
                  text-[#6B7280]
                  sm:text-[16px]
                "
              >
                Our mission is to transform
                aquaculture and water management
                through sustainable engineering,
                advanced Biofloc systems,
                smart RAS technology,
                industrial water treatment,
                and innovative automation solutions.
              </p>

              <p
                className="
                  mt-6
                  text-[15px]
                  leading-[2]
                  text-[#6B7280]
                  sm:text-[16px]
                "
              >
                We aim to provide reliable,
                cost-effective, and environmentally
                responsible engineering services
                for fish farming, shrimp farming,
                and industrial infrastructure projects
                across India.
              </p>
            </div>
          </div>

          {/* VISION */}

          <div
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
              sm:p-10
            "
          >
            {/* BACKGROUND */}

            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-all
                duration-500
                group-hover:opacity-100
                bg-gradient-to-br
                from-[#63C96A]/5
                to-transparent
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
                to-[#0A6EBD]
              "
            />

            {/* CONTENT */}

            <div className="relative z-10">
              {/* ICON */}

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#63C96A]
                  to-[#0A6EBD]
                  shadow-lg
                "
              >
                <Eye className="h-8 w-8 text-white" />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-[36px]
                  font-black
                  tracking-[-0.04em]
                  text-[#021B2F]
                "
              >
                Our Vision
              </h3>

              {/* TEXT */}

              <p
                className="
                  mt-6
                  text-[15px]
                  leading-[2]
                  text-[#6B7280]
                  sm:text-[16px]
                "
              >
                Our vision is to become one of
                India's leading aquaculture
                engineering and smart water
                management companies by delivering
                future-ready sustainable solutions
                powered by technology and innovation.
              </p>

              <p
                className="
                  mt-6
                  text-[15px]
                  leading-[2]
                  text-[#6B7280]
                  sm:text-[16px]
                "
              >
                We strive to create advanced
                marine infrastructure, intelligent
                automation systems, and modern
                aquaculture ecosystems that support
                sustainable food production and
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}