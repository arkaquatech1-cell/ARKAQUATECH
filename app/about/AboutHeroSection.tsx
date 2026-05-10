"use client";

import { Sparkles } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden">
      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/herosection/seavideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/65
        "
      />

      {/* GRADIENT OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#031018]/20
          via-[#031018]/50
          to-[#031018]
        "
      />

      {/* GRID EFFECT */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* GLOW */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          justify-center
          text-center
        "
      >
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 lg:px-8">
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
              backdrop-blur-xl
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
              About ARK AQUATECH
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
              mx-auto
              mt-8
              max-w-5xl
              text-[42px]
              font-semibold
              leading-[0.92]
              tracking-[-0.05em]
              text-white
              sm:text-[58px]
              lg:text-[84px]
            "
          >
            Smart Aquaculture
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
              Engineering Solutions
            </span>
          </h1>

          {/* DESCRIPTION */}

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
            ARK AQUATECH specializes in
            Biofloc fish farming,
            RAS aquaculture systems,
            industrial water treatment,
            smart automation,
            and sustainable marine
            engineering solutions across India.
          </p>

          {/* STATS */}

          <div
            className="
              mt-14
              grid
              gap-5
              sm:grid-cols-3
            "
          >
            {/* ITEM */}

            <div
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-[36px]
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                "
              >
                250+
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-[1.8]
                  text-white/65
                "
              >
                Projects Completed
              </p>
            </div>

            {/* ITEM */}

            <div
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-[36px]
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                "
              >
                12+
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-[1.8]
                  text-white/65
                "
              >
                Years Experience
              </p>
            </div>

            {/* ITEM */}

            <div
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-[36px]
                  font-semibold
                  tracking-[-0.04em]
                  text-white
                "
              >
                24/7
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-[1.8]
                  text-white/65
                "
              >
                Technical Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-40
          w-full
          bg-gradient-to-t
          from-[#031018]
          to-transparent
        "
      />
    </section>
  );
}