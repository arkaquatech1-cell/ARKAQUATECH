// "use client";

// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";
// const slides = [
//   {
//     image: "/images/hero8.jpg",
//     title1: "India’s Leading",
//     title2: "Biofloc Fish Farming",
//     desc: "ARK AQUATECH provides advanced Biofloc fish farming systems, aquaculture tank solutions, aeration systems, and sustainable fish farming technology across India, Dubai, Saudi Arabia, Africa, and international aquaculture markets.",
//   },

//   {
//     image: "/images/hero2.jpg",
//     title1: "Advanced",
//     title2: "RAS Aquaculture Systems",
//     desc: "Complete Recirculating Aquaculture System (RAS) solutions for commercial fish farming, shrimp farming, water recycling, oxygen management, filtration systems, and smart aquaculture automation for global aquaculture industries.",
//   },

//   {
//     image: "/images/hero14.avif",
//     title1: "Industrial RO &",
//     title2: "Water Treatment Plants",
//     desc: "Industrial RO water treatment plants, wastewater treatment systems, filtration plants, ETP, STP, desalination systems, and industrial water purification engineering services for factories, farms, and commercial industries.",
//   },

//   {
//     image: "/images/hero4.png",
//     title1: "Modern",
//     title2: "Shrimp Farming Solutions",
//     desc: "High-performance shrimp farming infrastructure including HDPE pond lining, oxygen systems, aquaculture motors, feeders, pond aerators, Biofloc shrimp farming setup, and smart marine farming engineering solutions.",
//   },

//   {
//     image: "/images/hero6.png",
//     title1: "Global Smart",
//     title2: "Aquaculture Engineering",
//     desc: "ARK AQUATECH delivers smart aquaculture engineering, aquaponics systems, fish hatchery setup, marine infrastructure, sustainable seafood farming technology, and turnkey aquaculture projects across India and international markets.",
//   },
// ];

// export default function HeroSection() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const slider = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(slider);
//   }, []);

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-black py-16">
//       {/* BACKGROUND IMAGES */}

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ opacity: 0, scale: 1.08 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slides[current].image}
//             alt=""
//             className="h-full w-full object-cover"
//           />

//           {/* DARK OVERLAY */}

       

//           {/* GRADIENT */}

//           <div
//             className="
//               absolute
//               inset-0
//               bg-gradient-to-b
//               from-[#021B2F]/20
//               via-[#0A6EBD]/10
//               to-[#021B2F]/75
//             "
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* CONTENT */}

//       <div
//         className="
//           relative
//           z-10
//           flex
//           min-h-screen
//           items-center
//           justify-center
//           px-5
//         "
//       >
//         <div className="mx-auto max-w-6xl text-center">
//           {/* BADGE */}

//           <motion.div
//             key={current + "badge"}
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
//               bg-white/10
//               px-5
//               py-2.5
//               backdrop-blur-xl
//             "
//           >
//             <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />

//             <span
//               className="
//                 text-[11px]
//                 uppercase
//                 tracking-[0.24em]
//                 font-semibold
//                 text-white
//               "
//             >
//               Smart Aquaculture & Water Engineering
//             </span>
//           </motion.div>

//           {/* TITLE */}

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current + "text"}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1
//                 className="
//                   mt-8
//                   text-[42px]
//                   sm:text-[65px]
//                   md:text-[80px]
//                   lg:text-[90px]
//                   leading-[0.9]
//                   tracking-[-0.06em]
//                   font-black
//                   text-white
//                 "
//               >
//                 {slides[current].title1}

//                 <span
//                   className="
//                     mt-3
//                     block
//                     bg-gradient-to-r
//                     from-[#63C96A]
//                     via-[#7ED7FF]
//                     to-[#0A6EBD]
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   {slides[current].title2}
//                 </span>
//               </h1>

//               {/* DESCRIPTION */}

//               <p
//                 className="
//                   mx-auto
//                   mt-8
//                   max-w-3xl
//                   text-[16px]
//                   sm:text-[18px]
//                   leading-[1.9]
//                   text-white/80
//                 "
//               >
//                 {slides[current].desc}
//               </p>
//             </motion.div>
//           </AnimatePresence>
// {/* SEO BUTTONS */}

// <div
//   className="
//     mt-12
//     flex
//     flex-wrap
//     items-center
//     justify-center
//     gap-4
//   "
// >
//   {[
//     "Biofloc Fish Farming Systems",
//     "RAS Aquaculture Technology",
//     "Sustainable Shrimp Farming ",
//     "Advanced Aquaculture Systems ",

   
//   ].map((item, index) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         delay: index * 0.05,
//       }}
//       className="
//         rounded-full
//         border
//         border-white/10
//         bg-white/10
//         px-5
//         py-3
//         text-sm
//         font-medium
//         text-white
//         shadow-[0_8px_25px_rgba(0,0,0,0.15)]
//         backdrop-blur-xl
//       "
//     >
//       {item}
//     </motion.div>
//   ))}
// </div>
//           {/* BUTTONS */}

//           <div
//             className="
//               mt-14
//               flex
//               flex-col
//               sm:flex-row
//               items-center
//               justify-center
//               gap-5
//             "
//           >
//             <Link
//               href="/services"
//               className="
//                 group
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-gradient-to-r
//                 from-[#15176B]
//                 via-[#0A6EBD]
//                 to-[#63C96A]
//                 px-8
//                 py-4
//                 text-sm
//                 font-semibold
//                 text-white
//               "
//             >
//               Explore Services

//               <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all" />
//             </Link>

//             <Link
//               href="/contact"
//               className="
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-white/10
//                 px-8
//                 py-4
//                 text-sm
//                 font-semibold
//                 text-white
//                 backdrop-blur-xl
//               "
//             >
//               Contact Us
//             </Link>
//           </div>

//           {/* DOTS */}

//           <div className="mt-12 flex items-center justify-center gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   current === index
//                     ? "w-10 bg-white"
//                     : "w-2.5 bg-white/40"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    title1: "India’s Leading",
    title2: "Biofloc Fish Farming",
    desc: "ARK AQUATECH provides advanced Biofloc fish farming systems, aquaculture tank solutions, aeration systems, and sustainable fish farming technology across India, Dubai, Saudi Arabia, Africa, and international aquaculture markets.",
  },

  {
    title1: "Advanced",
    title2: "RAS Aquaculture Systems",
    desc: "Complete Recirculating Aquaculture System (RAS) solutions for commercial fish farming, shrimp farming, water recycling, oxygen management, filtration systems, and smart aquaculture automation for global aquaculture industries.",
  },

  {
    title1: "Industrial RO &",
    title2: "Water Treatment Plants",
    desc: "Industrial RO water treatment plants, wastewater treatment systems, filtration plants, ETP, STP, desalination systems, and industrial water purification engineering services for factories, farms, and commercial industries.",
  },

  {
    title1: "Modern",
    title2: "Shrimp Farming Solutions",
    desc: "High-performance shrimp farming infrastructure including HDPE pond lining, oxygen systems, aquaculture motors, feeders, pond aerators, Biofloc shrimp farming setup, and smart marine farming engineering solutions.",
  },

  {
    title1: "Global Smart",
    title2: "Aquaculture Engineering",
    desc: "ARK AQUATECH delivers smart aquaculture engineering, aquaponics systems, fish hatchery setup, marine infrastructure, sustainable seafood farming technology, and turnkey aquaculture projects across India and international markets.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* BACKGROUND VIDEO */}

     <video
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  disablePictureInPicture
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
      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/55
        "
      />

      {/* GRADIENT OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#021B2F]/20
          via-[#0A6EBD]/10
          to-[#021B2F]/80
        "
      />

      {/* ANIMATED LIGHT */}

      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#0A6EBD]/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#63C96A]/20
          blur-[140px]
        "
      />

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
          py-24
        "
      >
        <div className="mx-auto max-w-6xl text-center">
          {/* BADGE */}

          <motion.div
            key={current + "badge"}
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
              px-4
              py-2
              backdrop-blur-xl
              sm:px-5
              sm:py-2.5
            "
          >
            <Volume2 className="h-4 w-4 text-[#63C96A]" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.22em]
                font-semibold
                text-white
                sm:text-[11px]
              "
            >
              Smart Aquaculture & Water Engineering
            </span>
          </motion.div>

          {/* TITLE */}

          <AnimatePresence mode="wait">
            <motion.div
              key={current + "text"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="
                  mt-6
                  text-[34px]
                  font-black
                  leading-[1]
                  tracking-[-0.06em]
                  text-white
                  sm:mt-8
                  sm:text-[65px]
                  md:text-[80px]
                  lg:text-[90px]
                "
              >
                {slides[current].title1}

                <span
                  className="
                    mt-3
                    block
                    bg-gradient-to-r
                    from-[#63C96A]
                    via-[#7ED7FF]
                    to-[#0A6EBD]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {slides[current].title2}
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-[14px]
                  leading-[1.8]
                  text-white/80
                  sm:mt-8
                  sm:text-[18px]
                  sm:leading-[1.9]
                "
              >
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* SEO TAGS */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              sm:gap-4
            "
          >
            {[
              "Biofloc Fish Farming Systems",
              "RAS Aquaculture Technology",
              "Sustainable Shrimp Farming",
              "Advanced Aquaculture Systems",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.05,
                }}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/10
                  px-4
                  py-2.5
                  text-[12px]
                  font-medium
                  text-white
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-12
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
              sm:gap-5
            "
          >
            <Link
              href="/services"
              className="
                group
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#15176B]
                via-[#0A6EBD]
                to-[#63C96A]
                px-7
                text-[13px]
                font-semibold
                text-white
                shadow-[0_15px_35px_rgba(0,0,0,0.25)]
                transition-all
                duration-300
                hover:scale-[1.03]
                sm:h-auto
                sm:px-8
                sm:py-4
                sm:text-sm
              "
            >
              Explore Services

              <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                px-7
                text-[13px]
                font-semibold
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/20
                sm:h-auto
                sm:px-8
                sm:py-4
                sm:text-sm
              "
            >
              Contact Us
            </Link>
          </div>

          {/* DOTS */}

          <div className="mt-10 flex items-center justify-center gap-3 sm:mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


