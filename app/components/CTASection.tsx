"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  "Advanced Biofloc Systems",
  "RAS Aquaculture Technology",
  "Industrial Water Treatment",
  "Smart Aquaculture Automation",
];

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-14">
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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-md
          "
        >
          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-400/[0.04]
              to-emerald-400/[0.04]
            "
          />

          {/* GRID */}

          <div
            className="
              relative
              z-10
              grid
              gap-10
              lg:grid-cols-[1.2fr_0.8fr]
              p-7
              sm:p-10
              lg:p-14
            "
          >
            {/* LEFT */}

            <div>
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
                  px-4
                  py-2
                "
              >
                <Sparkles className="h-4 w-4 text-cyan-300" />

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.2em]
                    text-cyan-100/75
                  "
                >
                  Smart Aquaculture Solutions
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-6
                  text-[36px]
                  sm:text-[52px]
                  lg:text-[68px]
                  leading-[1]
                  tracking-[-0.04em]
                  font-semibold
                  text-white
                "
              >
                Let's Build
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
                  Smart Aquaculture
                </span>
              </h2>

              {/* DESC */}

              <p
                className="
                  mt-7
                  max-w-2xl
                  text-[15px]
                  sm:text-[16px]
                  leading-[1.9]
                  text-white/68
                "
              >
                ARK AQUATECH delivers advanced
                Biofloc systems, RAS aquaculture,
                industrial water treatment,
                aquaponics, fish farming
                infrastructure, and sustainable
                marine engineering solutions
                across India.
              </p>

              {/* FEATURES */}

              <div
                className="
                  mt-10
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />

                    <span
                      className="
                        text-[14px]
                        text-white/75
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  sm:flex-row
                  gap-4
                "
              >
                {/* PRIMARY */}

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="/contact"
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-cyan-300
                      px-7
                      py-4
                      text-sm
                      font-semibold
                      text-[#061018]
                      transition-all
                      duration-300
                      hover:bg-cyan-200
                    "
                  >
                    Get Free Consultation

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </motion.div>

                {/* SECONDARY */}

                <Link
                  href="/projects"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-7
                    py-4
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                  "
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* RIGHT CONTACT CARD */}

            <div
              className="
                rounded-[28px]
                border
                border-white/10
                bg-black/20
                p-6
                sm:p-8
                backdrop-blur-xl
              "
            >
              {/* TITLE */}

              <h3
                className="
                  text-[28px]
                  font-semibold
                  leading-tight
                  text-white
                "
              >
                Contact Information
              </h3>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-[1.9]
                  text-white/65
                "
              >
                Connect with ARK AQUATECH
                for sustainable aquaculture,
                Biofloc systems, water treatment,
                and smart engineering solutions.
              </p>

              {/* CONTACT ITEMS */}

              <div className="mt-8 space-y-5">
                {/* PHONE */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-300
                    "
                  >
                    <Phone className="h-4 w-4 text-[#061018]" />
                  </div>

                  <div>
                    <p className="text-xs text-white/45">
                      Phone Number
                    </p>

                    <p className="mt-1 text-sm text-white">
                      +91 9063289228
                    </p>

                    <p className="text-sm text-white">
                      +91 7799399555
                    </p>
                  </div>
                </div>

                {/* EMAIL */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-300
                    "
                  >
                    <Mail className="h-4 w-4 text-[#061018]" />
                  </div>

                  <div>
                    <p className="text-xs text-white/45">
                      Email Address
                    </p>

                    <p className="mt-1 text-sm text-white break-all">
                      arkaquatech@gmail.com
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}

                <div
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-300
                    "
                  >
                    <MapPin className="h-4 w-4 text-[#061018]" />
                  </div>

                  <div>
                    <p className="text-xs text-white/45">
                      Office Address
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        leading-[1.8]
                        text-white
                      "
                    >
                      Auto Nagar,
                      Mangalagiri,
                      Guntur,
                      Andhra Pradesh,
                      India - 522503
                    </p>
                  </div>
                </div>
              </div>

              {/* SMALL CTA */}

              <Link
                href="/contact"
                className="
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-6
                  py-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/[0.08]
                "
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}