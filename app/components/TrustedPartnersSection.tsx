"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Sparkles } from "lucide-react";

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
        py-20
        sm:py-24
        lg:py-28
        bg-gradient-to-br
        from-[#f5f9ff]
        via-[#eef5ff]
        to-[#f4fff7]
      "
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* BLUE GLOW */}

        <div
          className="
            absolute
            top-[-160px]
            right-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#15176B]/15
            blur-[130px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-[-120px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#63C96A]/20
            blur-[130px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,23,107,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(21,23,107,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#15176B]/10
              bg-white/80
              px-5
              py-2.5
              shadow-lg
              backdrop-blur-xl
            "
          >
            <Sparkles className="h-4 w-4 text-[#63C96A]" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                font-semibold
                text-[#15176B]
              "
            >
              Trusted Partners
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-7
              text-[38px]
              sm:text-[54px]
              lg:text-[68px]
              leading-[0.95]
              tracking-[-0.05em]
              font-black
              text-[#0F172A]
            "
          >
            Collaborating With
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
              Industry Leaders
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[16px]
              sm:text-[17px]
              leading-[2]
              text-slate-600
            "
          >
            ARK AQUATECH proudly collaborates with
            leading organizations, industrial brands,
            research institutions, hospitality groups,
            and aquaculture partners supporting
            sustainable innovation and smart
            aquaculture infrastructure development.
          </p>
        </motion.div>

        {/* PARTNERS GRID */}

        <div
          className="
            mt-16
            grid
            grid-cols-2
            gap-5
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[#15176B]/10
                bg-white/80
                p-6
                shadow-[0_10px_40px_rgba(21,23,107,0.06)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:shadow-[0_20px_50px_rgba(21,23,107,0.12)]
              "
            >
              {/* HOVER EFFECT */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-[#15176B]/[0.03]
                  to-[#63C96A]/[0.04]
                "
              />

              {/* LOGO */}

              <div
                className="
                  relative
                  flex
                  h-[90px]
                  items-center
                  justify-center
                "
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={80}
                  className="
                    max-h-[70px]
                    w-auto
                    object-contain
                    transition-all
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* NAME */}

              <h3
                className="
                  relative
                  mt-5
                  text-center
                  text-[15px]
                  font-bold
                  leading-[1.5]
                  tracking-[0.02em]
                  text-[#0F172A]
                "
              >
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}