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
    <section className="w-full overflow-hidden bg-white py-16">

      {/* TITLE */}

      <div className="mb-10 text-center">
        <h2 className="text-4xl font-black text-black">
          Trusted Partners
        </h2>

        <p className="mt-3 text-gray-600">
          Auto Scrolling Partner Logos
        </p>
      </div>

      {/* SCROLL AREA */}

      <div className="relative overflow-hidden">

        {/* LEFT SHADOW */}

        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

        {/* RIGHT SHADOW */}

        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        {/* SCROLL CONTAINER */}

        <div className="flex whitespace-nowrap animate-scroll">

          {/* FIRST SET */}

          {[...partners, ...partners].map((item, index) => (
            <div
              key={index}
              className="
                mx-4
                flex
                min-w-[220px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-lg
              "
            >
              <div className="flex h-[90px] items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={140}
                  height={80}
                  className="h-[70px] w-auto object-contain"
                />
              </div>

              <h3 className="mt-4 text-center text-sm font-bold text-black">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}

      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}