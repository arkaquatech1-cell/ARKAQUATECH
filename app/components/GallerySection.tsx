"use client";

import { motion } from "framer-motion";

const galleryImages = [
  "/Gallery/gallery1.png",
  "/Gallery/gallery2.png",
  "/Gallery/gallery3.jpg",
  "/Gallery/gallery4.png",
  "/Gallery/gallery5.png",
  "/Gallery/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#f8fbff]
        via-[#eef4ff]
        to-[#f4fff8]
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
            bg-[#15176B]/10
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
            bg-[#63C96A]/15
            blur-[120px]
          "
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
              border-[#15176B]/10
              bg-white/80
              px-5
              py-2.5
              shadow-lg
              backdrop-blur-xl
            "
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                font-semibold
                text-[#15176B]
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
                from-[#63C96A]
                via-[#15176B]
                to-[#63C96A]
                bg-clip-text
                text-transparent
              "
            >
              Gallery
            </span>
          </h2>
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
                border-white/40
                bg-white/70
                shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
              "
            >
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

              {/* HOVER OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#15176B]/30
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* HOVER GLOW */}

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
                    bg-[#15176B]/20
                    blur-3xl
                  "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}