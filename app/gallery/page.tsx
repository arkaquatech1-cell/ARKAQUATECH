// app/gallery/page.tsx

"use client";

import { motion } from "framer-motion";

const galleryImages = [
  "/Gallery/gallery1.png",
  "/Gallery/gallery2.png",
  "/Gallery/gallery3.jpg",
  "/Gallery/gallery4.png",
  "/Gallery/gallery5.png",
  "/Gallery/gallery6.jpg",
  "/Gallery/gallery7.jpg",
  "/Gallery/gallery8.png",
  "/Gallery/gallery9.jpg",
];

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}

      <section
        className="
          relative
          overflow-hidden
          bg-white
          pt-32
          pb-20
          sm:pt-36
          sm:pb-24
        "
      >
        {/* BACKGROUND */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* GLOW */}

          <div
            className="
              absolute
              left-[-140px]
              top-[-140px]
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#0A6EBD]/10
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              bottom-[-140px]
              right-[-140px]
              h-[420px]
              w-[420px]
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

        {/* CONTENT */}

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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
                border-[#0A6EBD]/10
                bg-[#F4F8FF]
                px-5
                py-2.5
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  font-semibold
                  text-[#021B2F]
                "
              >
                Our Gallery
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
                mt-8
                text-[42px]
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-[#021B2F]
                sm:text-[58px]
                lg:text-[82px]
              "
            >
              Explore Our

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
                Project Gallery
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
              Explore our completed aquaculture
              engineering projects including
              Biofloc systems,
              RAS technology,
              industrial water treatment plants,
              smart automation,
              and sustainable marine infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALLERY SECTION */}

      <section className="relative overflow-hidden pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div
            className="
              columns-1
              gap-7
              sm:columns-2
              lg:columns-3
            "
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  mb-7
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                  transition-all
                  duration-500
                  hover:shadow-[0_25px_70px_rgba(10,110,189,0.12)]
                "
              >
                {/* IMAGE */}

                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt="Gallery"
                    className="
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-[1.08]
                    "
                  />
                </div>

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#021B2F]/30
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      absolute
                      -right-16
                      -top-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#63C96A]/20
                      blur-3xl
                    "
                  />

                  <div
                    className="
                      absolute
                      -bottom-16
                      -left-16
                      h-40
                      w-40
                      rounded-full
                      bg-[#0A6EBD]/20
                      blur-3xl
                    "
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}