// "use client";

// import Link from "next/link";

// import { motion } from "framer-motion";

// import { ArrowRight } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#061018]">
//       {/* VIDEO BG */}

//       <div className="absolute inset-0">
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="
//             absolute
//             inset-0
//             h-full
//             w-full
//             object-cover
//             brightness-[0.48]
//             contrast-[1.05]
//           "
//         >
//           <source
//             src="/herosection/seavideo1.mp4"
//             type="video/mp4"
//           />
//         </video>

//         {/* DARK OVERLAY */}

      

//         {/* SOFT GRADIENT */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-b
//             from-[#061018]/30
//             via-[#061018]/55
//             to-[#061018]
//           "
//         />

//         {/* LIGHT EFFECT */}

//         <div
//           className="
//             absolute
//             top-0
//             left-1/2
//             -translate-x-1/2
//             w-[600px]
//             h-[300px]
//             bg-cyan-400/10
//             blur-[120px]
//             rounded-full
//           "
//         />

//         {/* GRID */}

//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
//             backgroundSize: "70px 70px",
//           }}
//         />
//       </div>

//       {/* CONTENT */}

//       <div
//         className="
//           relative
//           z-10
//           flex
//           items-center
//           justify-center
//           min-h-screen
//           px-5
//           sm:px-6
//           lg:px-8
//         "
//       >
//         <div className="mx-auto max-w-6xl text-center">
//           {/* BADGE */}

//           <motion.div
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-white/10
//               bg-white/5
//               px-5
//               py-2.5
//               backdrop-blur-md
//             "
//           >
//             <div className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />

//             <span
//               className="
//                 text-[10px]
//                 sm:text-xs
//                 uppercase
//                 tracking-[0.22em]
//                 text-cyan-100/80
//                 font-medium
//               "
//             >
//               Smart Aquaculture & Water Engineering
//             </span>
//           </motion.div>

//           {/* HEADING */}

//           <motion.h1
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="
//               mt-8
//               text-[38px]
//               sm:text-[52px]
//               md:text-[72px]
//               lg:text-[92px]
//               leading-[0.95]
//               tracking-[-0.05em]
//               font-semibold
//               text-white
//             "
//           >
//             Sustainable Future Of

//             <span
//               className="
//                 block
//                 bg-gradient-to-r
//                 from-cyan-200
//                 via-white
//                 to-emerald-200
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Smart Aquaculture
//             </span>
//           </motion.h1>

//           {/* DESCRIPTION */}

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: 0.2,
//               duration: 0.8,
//             }}
//             className="
//               mx-auto
//               mt-7
//               max-w-3xl
//               text-[15px]
//               sm:text-[17px]
//               md:text-[18px]
//               leading-[1.9]
//               text-white/70
//               font-normal
//             "
//           >
//             ARK AQUATECH delivers advanced Biofloc systems,
//             RAS aquaculture technology, shrimp farming,
//             fish farming, industrial water treatment,
//             aquaponics, and sustainable aquaculture
//             engineering solutions across India and
//             international markets.
//           </motion.p>

//           {/* SEO TAGS */}

//           <div
//             className="
//               mt-10
//               flex
//               flex-wrap
//               items-center
//               justify-center
//               gap-3
//             "
//           >
//             {[
//               "Biofloc Systems",
//               "RAS Technology",
//               "Fish Farming",
//               "Shrimp Farming",
//               "Water Treatment",
//               "Aquaculture Engineering",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-white/[0.04]
//                   px-4
//                   py-2
//                   text-[11px]
//                   sm:text-xs
//                   text-white/75
//                   backdrop-blur-sm
//                 "
//               >
//                 {item}
//               </div>
//             ))}
//           </div>

//           {/* BUTTONS */}

//           <div
//             className="
//               mt-12
//               flex
//               flex-col
//               sm:flex-row
//               items-center
//               justify-center
//               gap-4
//             "
//           >
//             {/* PRIMARY */}

//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <Link
//                 href="/services"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-cyan-300
//                   px-7
//                   sm:px-8
//                   py-4
//                   text-sm
//                   font-semibold
//                   text-[#061018]
//                   transition-all
//                   duration-300
//                   hover:bg-cyan-200
//                 "
//               >
//                 Explore Services

//                 <ArrowRight
//                   className="
//                     h-4
//                     w-4
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-1
//                   "
//                 />
//               </Link>
//             </motion.div>

//             {/* SECONDARY */}

//             <Link
//               href="/contact"
//               className="
//                 inline-flex
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-white/[0.04]
//                 px-7
//                 sm:px-8
//                 py-4
//                 text-sm
//                 font-medium
//                 text-white
//                 backdrop-blur-sm
//                 transition-all
//                 duration-300
//                 hover:bg-white/[0.08]
//               "
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* TRUST TEXT */}

//           <div
//             className="
//               mt-14
//               text-xs
//               sm:text-sm
//               text-white/45
//               tracking-wide
//             "
//           >
//             Trusted Aquaculture & Water Engineering
//             Solutions Across India
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Droplets,
  Waves,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      {/* VIDEO BACKGROUND */}

      <div className="absolute inset-0">
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
            brightness-[0.55]
            contrast-[1.08]
            saturate-[1.2]
          "
        >
          <source
            src="/herosection/seavideo1.mp4"
            type="video/mp4"
          />
        </video>

        {/* OCEAN BLUE OVERLAY */}

      

        {/* EXTRA SEA EFFECT */}

        {/* TOP BLUE GLOW */}

        <div
          className="
            absolute
            top-[-120px]
            left-1/2
            -translate-x-1/2
            h-[400px]
            w-[700px]
            rounded-full
            bg-[#0A6EBD]/30
            blur-[140px]
          "
        />

        {/* BOTTOM GREEN GLOW */}

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#63C96A]/20
            blur-[140px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto max-w-7xl text-center">

          {/* PREMIUM BADGE */}

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/10
              px-5
              py-2.5
              shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              backdrop-blur-xl
            "
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A] animate-pulse" />

            <span
              className="
                text-[11px]
                sm:text-xs
                uppercase
                tracking-[0.24em]
                font-semibold
                text-white
              "
            >
              Smart Aquaculture & Water Engineering
            </span>
          </motion.div>

          {/* HERO TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              mt-8
              text-[42px]
              sm:text-[60px]
              md:text-[82px]
              lg:text-[105px]
              leading-[0.9]
              tracking-[-0.06em]
              font-black
              text-white
            "
          >
            Sustainable Future Of

            <span
              className="
                block
                mt-3
                bg-gradient-to-r
                from-[#63C96A]
                via-[#7ED7FF]
                to-[#0A6EBD]
                bg-clip-text
                text-transparent
              "
            >
              Smart Aquaculture
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-[16px]
              sm:text-[18px]
              md:text-[19px]
              leading-[1.9]
              text-white/80
            "
          >
            ARK AQUATECH is a leading aquaculture
            engineering company specializing in
            Biofloc fish farming systems,
            RAS aquaculture technology,
            shrimp farming infrastructure,
            industrial RO water treatment plants,
            smart automation,
            aquaponics systems,
            HDPE pond lining,
            oxygen management,
            wastewater treatment,
            and sustainable marine engineering
            solutions across India.
          </motion.p>

          {/* SEO TAGS */}

          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
            "
          >
            {[
              {
                icon: Waves,
                text: "Biofloc & RAS Systems",
              },
              {
                icon: Droplets,
                text: "Industrial Water Treatment",
              },
              {
                icon: ShieldCheck,
                text: "Smart Aquaculture Solutions",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                "
              >
                <item.icon className="h-4 w-4 text-[#63C96A]" />

                {item.text}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-14
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              gap-5
            "
          >
            {/* PRIMARY BUTTON */}

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                href="/services"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#15176B]
                  via-[#0A6EBD]
                  to-[#63C96A]
                  px-8
                  sm:px-9
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_20px_50px_rgba(10,110,189,0.35)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Explore Services

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

            {/* SECONDARY BUTTON */}

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                px-8
                sm:px-9
                py-4
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/15
                hover:border-white/20
              "
            >
              Contact Us
            </Link>
          </div>

          {/* TRUST TEXT */}

          <div
            className="
              mt-16
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              text-sm
              text-white/70
            "
          >
            <span className="font-medium">
              Trusted Aquaculture Engineering
            </span>

            <div className="h-1.5 w-1.5 rounded-full bg-[#63C96A]" />

            <span>
              Sustainable Water Treatment Solutions
            </span>

            <div className="h-1.5 w-1.5 rounded-full bg-[#63C96A]" />

            <span>
              Smart Marine Infrastructure Across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}