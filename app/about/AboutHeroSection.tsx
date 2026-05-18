"use client";

import { Sparkles } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <section
      className="
        relative
        h-screen
        min-h-[760px]
        overflow-hidden
        bg-white
      "
    >
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

      {/* WHITE OVERLAY */}

     
      {/* GRADIENT OVERLAY */}


      {/* GRID EFFECT */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,110,189,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.08) 1px, transparent 1px)",
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
          bg-[#0A6EBD]/10
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
              border-[#0A6EBD]/10
              bg-white/80
              px-5
              py-2.5
              shadow-lg
              backdrop-blur-xl
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
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-[#021B2F]
              sm:text-[58px]
              lg:text-[84px]
            "
          >
            Smart Aquaculture

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
              Engineering Solutions
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[16px]
              leading-[2]
              text-[#4B5563]
              sm:text-[17px]
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
              mt-16
              grid
              gap-6
              sm:grid-cols-3
            "
          >
            <div
              className="
                rounded-[30px]
                border
                border-white/60
                bg-white/70
                p-8
                shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-[42px]
                  font-black
                  text-[#021B2F]
                "
              >
                250+
              </h3>

              <p
                className="
                  mt-3
                  text-[15px]
                  text-[#6B7280]
                "
              >
                Projects Completed
              </p>
            </div>

            <div
              className="
                rounded-[30px]
                border
                border-white/60
                bg-white/70
                p-8
                shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-[42px]
                  font-black
                  text-[#021B2F]
                "
              >
                12+
              </h3>

              <p
                className="
                  mt-3
                  text-[15px]
                  text-[#6B7280]
                "
              >
                Years Experience
              </p>
            </div>

            <div
              className="
                rounded-[30px]
                border
                border-white/60
                bg-white/70
                p-8
                shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-[42px]
                  font-black
                  text-[#021B2F]
                "
              >
                24/7
              </h3>

              <p
                className="
                  mt-3
                  text-[15px]
                  text-[#6B7280]
                "
              >
                Technical Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}