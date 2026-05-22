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
    <section className="relative overflow-hidden bg-white py-16">

      {/* TITLE */}

      <div className="mb-10 text-center">
        <h2
          className="
            text-3xl
            font-black
            text-black
            sm:text-4xl
            lg:text-5xl
          "
        >
          Trusted Partners
        </h2>

       
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
            w-16
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
            w-16
            bg-gradient-to-l
            from-white
            to-transparent
          "
        />

        {/* AUTO SCROLL */}

        <div className="flex w-max animate-scroll gap-5">

          {[...partners, ...partners].map((item, index) => (
            <div
              key={index}
              className="
                flex
                min-w-[180px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-gray-200
                bg-white
                px-5
                py-6
                shadow-lg
                sm:min-w-[220px]
              "
            >

              {/* IMAGE */}

              <div
                className="
                  flex
                  h-[70px]
                  items-center
                  justify-center
                  sm:h-[90px]
                "
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={80}
                  className="
                    h-[55px]
                    w-auto
                    object-contain
                    sm:h-[70px]
                  "
                />
              </div>

              {/* NAME */}

              <h3
                className="
                  mt-4
                  text-center
                  text-xs
                  font-bold
                  text-black
                  sm:text-sm
                "
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}

    </section>
  );
}