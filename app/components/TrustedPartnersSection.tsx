"use client";

import Image from "next/image";

const partners = [
  {
    name: "CIBA",
    logo: "/partners/ciba.jpg",
  },
  {
    name: "COCA COLA",
    logo: "/partners/cocacola.jpg",
  },
  {
    name: "NFDB",
    logo: "/partners/nfdb.jpg",
  },
  {
    name: "ICAR",
    logo: "/partners/icar.jpg",
  },
  {
    name: "RGCA",
    logo: "/partners/rgca.jpg",
  },
  {
    name: "BSR",
    logo: "/partners/bsr.jpg",
  },
  {
    name: "RECICLAR TECHNOLOGIES",
    logo: "/partners/reciclar.jpg",
  },
  {
    name: "VARUN HOSPITALITY",
    logo: "/partners/varun.jpg",
  },
];

export default function TrustedPartnersSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f8fbff]
        via-white
        to-[#f4fff7]
        py-16
        sm:py-20
      "
    >
      {/* BG LIGHTS */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#15176B]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#63C96A]/15
            blur-[120px]
          "
        />
      </div>

      {/* TITLE */}

      <div className="mb-14 text-center">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[#15176B]/10
            bg-white/80
            px-5
            py-2
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.22em]
            text-[#15176B]
            shadow-lg
            backdrop-blur-xl
          "
        >
          Trusted Collaboration
        </span>

        <h2
          className="
            mt-6
            text-[38px]
            font-black
            leading-[1]
            tracking-[-0.04em]
            text-[#0F172A]
            sm:text-[54px]
            lg:text-[68px]
          "
        >
          Trusted
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
            Partners
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-[15px]
            leading-[1.9]
            text-slate-600
            sm:text-[16px]
          "
        >
          Collaborating with leading aquaculture,
          industrial engineering, water treatment,
          and sustainable infrastructure organizations.
        </p>
      </div>

      {/* SCROLL AREA */}

      <div className="relative overflow-hidden">
        {/* LEFT FADE */}

        <div
          className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-r
            from-white
            to-transparent
          "
        />

        {/* RIGHT FADE */}

        <div
          className="
            absolute
            right-0
            top-0
            z-10
            h-full
            w-24
            bg-gradient-to-l
            from-white
            to-transparent
          "
        />

        {/* AUTO SCROLL */}

        <div className="flex w-max animate-scroll gap-6">
          {[...partners, ...partners].map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                flex
                min-w-[190px]
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-[30px]
                border
                border-[#15176B]/10
                bg-white/80
                px-6
                py-7
                shadow-[0_12px_35px_rgba(21,23,107,0.08)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_18px_45px_rgba(21,23,107,0.14)]
                sm:min-w-[240px]
              "
            >
              {/* HOVER LIGHT */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-[#15176B]/[0.03]
                  to-[#63C96A]/[0.05]
                "
              />

              {/* IMAGE */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[80px]
                  items-center
                  justify-center
                  sm:h-[95px]
                "
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={160}
                  height={90}
                  className="
                    h-[60px]
                    w-auto
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    sm:h-[72px]
                  "
                />
              </div>

              {/* NAME */}

              <h3
                className="
                  relative
                  z-10
                  mt-5
                  text-center
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#0F172A]
                  sm:text-[13px]
                "
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}