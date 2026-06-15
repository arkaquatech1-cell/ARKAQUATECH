"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const galleryImages = [
  "/Gallery/gallery1.png",
  "/Gallery/gallery2.png",
  "/Gallery/gallery3.jpg",
  "/Gallery/gallery4.png",
  "/Gallery/gallery5.png",
  "/Gallery/gallery6.jpg",
  "/Gallery/gallery7.jpg",
  // "/Gallery/gallery8.jpg",
  // "/Gallery/gallery9.jpg",
];

export default function GallerySection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f8fdff]
        via-[#eefcff]
        to-[#f5fffb]
        py-20
        sm:py-24
        lg:py-28
      "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-140px]
            right-[-100px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-emerald-300/20
            blur-[120px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(14,165,233,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* CONTAINER */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TOP */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
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
              border-cyan-100
              bg-white
              px-5
              py-2.5
              shadow-lg
            "
          >
            <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                font-semibold
                text-[#0F172A]
              "
            >
              Gallery
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
            Explore Our

            <span
              className="
                block
                mt-2
                bg-gradient-to-r
                from-cyan-500
                via-sky-600
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              Aquaculture Gallery
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[16px]
              leading-[1.9]
              text-slate-600
            "
          >
            Explore our Biofloc projects,
            RAS systems,
            industrial water treatment plants,
            hatchery engineering,
            aquaculture equipment installations,
            and marine infrastructure developments
            across India.
          </p>
        </motion.div>

        {/* GALLERY GRID */}

        <div
          className="
            mt-16
            columns-1
            gap-6
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
                mb-6
                overflow-hidden
                rounded-[30px]
                border
                border-cyan-100
                bg-white
                shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                transition-all
                duration-300
                hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]
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
                  from-[#0F172A]/30
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
                    bg-cyan-300/20
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
                    bg-emerald-300/20
                    blur-3xl
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM BUTTONS */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-20
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
          "
        >

          {/* GALLERY BUTTON */}

          <Link
            href="/gallery"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-cyan-500
              to-sky-600
              px-8
              py-4
              text-sm
              font-bold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Explore Full Gallery
          </Link>

          {/* CONTACT BUTTON */}

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              border
              border-cyan-200
              bg-white
              px-8
              py-4
              text-sm
              font-bold
              text-cyan-600
              shadow-lg
              transition-all
              duration-300
              hover:bg-cyan-50
            "
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}