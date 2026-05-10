"use client";

import {
  Target,
  Eye,
  Sparkles,
} from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-16 lg:py-16">
      {/* BG */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-160px]
            top-[-160px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-cyan-400/10
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
              Mission & Vision
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
            Engineering The Future Of
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
              Sustainable Aquaculture
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
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              sm:p-10
              backdrop-blur-xl
            "
          >
            {/* BG EFFECT */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-400/[0.06]
                to-transparent
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
                  bg-cyan-300
                "
              >
                <Target className="h-8 w-8 text-[#031018]" />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-[34px]
                  font-semibold
                  tracking-[-0.03em]
                  text-white
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
                  text-cyan-100/70
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
                  text-cyan-100/70
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
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              sm:p-10
              backdrop-blur-xl
            "
          >
            {/* BG EFFECT */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-emerald-400/[0.06]
                to-transparent
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
                  bg-emerald-300
                "
              >
                <Eye className="h-8 w-8 text-[#031018]" />
              </div>

              {/* TITLE */}

              <h3
                className="
                  mt-8
                  text-[34px]
                  font-semibold
                  tracking-[-0.03em]
                  text-white
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
                  text-cyan-100/70
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
                  text-cyan-100/70
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