// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { motion } from "framer-motion";

// import { ArrowRight, Sparkles } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 -z-10">
//         {/* SOFT LIGHT */}

//         <div
//           className="
//             absolute
//             top-[-140px]
//             right-[-120px]
//             w-[320px]
//             h-[320px]
//             rounded-full
//             bg-cyan-400/8
//             blur-[100px]
//           "
//         />

//         <div
//           className="
//             absolute
//             bottom-[-140px]
//             left-[-120px]
//             w-[320px]
//             h-[320px]
//             rounded-full
//             bg-emerald-400/8
//             blur-[100px]
//           "
//         />

//         {/* GRID */}

//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
//             backgroundSize: "72px 72px",
//           }}
//         />
//       </div>

//       {/* CONTENT */}

//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         <div
//           className="
//             grid
//             items-center
//             gap-14
//             lg:grid-cols-2
//             lg:gap-20
//           "
//         >
//           {/* IMAGE SIDE */}

//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="relative"
//           >
//             <div
//               className="
//                 overflow-hidden
//                 rounded-[28px]
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 backdrop-blur-md
//               "
//             >
//               <Image
//                 src="/images/about.png"
             
//                 alt="ARK AQUATECH Smart Aquaculture & Water Engineering Company"
//                 width={900}
//                 height={1000}
//                 priority
//                 className="
//                   h-[380px]
//                   sm:h-[500px]
//                   lg:h-[620px]
//                   w-full
//                   object-cover
//                   transition-transform
//                   duration-700
//                   hover:scale-[1.03]
//                 "
//               />

//               {/* OVERLAY */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-[#061018]/85
//                   via-transparent
//                   to-transparent
//                 "
//               />

//               {/* FLOAT CARD */}

//               <div
//                 className="
//                   absolute
//                   bottom-5
//                   left-5
//                   right-5
//                   rounded-2xl
//                   border
//                   border-white/10
//                   bg-black/25
//                   p-5
//                   backdrop-blur-xl
//                 "
//               >
//                 <span
//                   className="
//                     text-[10px]
//                     uppercase
//                     tracking-[0.22em]
//                     text-cyan-100/70
//                   "
//                 >
//                   Since 2019
//                 </span>

//                 <h3
//                   className="
//                     mt-3
//                     text-[22px]
//                     sm:text-[28px]
//                     font-semibold
//                     leading-tight
//                     text-white
//                   "
//                 >
//                   Sustainable Aquaculture Engineering
//                 </h3>

//                 <p
//                   className="
//                     mt-3
//                     text-sm
//                     leading-[1.8]
//                     text-white/65
//                   "
//                 >
//                   Delivering advanced aquaculture,
//                   water treatment, marine engineering,
//                   and infrastructure solutions across
//                   India and international markets.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* CONTENT */}

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             {/* BADGE */}

//             <div
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 px-4
//                 py-2
//                 backdrop-blur-md
//               "
//             >
//               <Sparkles className="h-4 w-4 text-cyan-300" />

//               <span
//                 className="
//                   text-[11px]
//                   uppercase
//                   tracking-[0.2em]
//                   text-cyan-100/75
//                 "
//               >
//                 About ARK AQUATECH
//               </span>
//             </div>

//             {/* TITLE */}

//             <h2
//               className="
//                 mt-6
//                 text-[34px]
//                 sm:text-[48px]
//                 lg:text-[62px]
//                 leading-[1]
//                 tracking-[-0.04em]
//                 font-semibold
//                 text-white
//               "
//             >
//               Smart Aquaculture &
//               <span
//                 className="
//                   block
//                   mt-2
//                   bg-gradient-to-r
//                   from-cyan-200
//                   via-white
//                   to-emerald-200
//                   bg-clip-text
//                   text-transparent
//                 "
//               >
//                 Water Engineering Solutions
//               </span>
//             </h2>

//             {/* DESCRIPTION */}

//             <div className="mt-7 space-y-5">
//               <p
//                 className="
//                   text-[15px]
//                   sm:text-[16px]
//                   leading-[1.9]
//                   text-white/68
//                 "
//               >
//                 ARK AQUATECH is a modern aquaculture and
//                 engineering company specializing in
//                 Biofloc fish farming, RAS systems,
//                 industrial water treatment, aquaponics,
//                 shrimp farming infrastructure, and smart
//                 aquatic ecosystem solutions.
//               </p>

//               <p
//                 className="
//                   text-[15px]
//                   sm:text-[16px]
//                   leading-[1.9]
//                   text-white/68
//                 "
//               >
//                 We deliver sustainable engineering,
//                 filtration systems, IoT-based automation,
//                 aeration technology, HDPE pond lining,
//                 and intelligent water management
//                 solutions for commercial and industrial
//                 projects across India.
//               </p>

//               <p
//                 className="
//                   text-[15px]
//                   sm:text-[16px]
//                   leading-[1.9]
//                   text-white/68
//                 "
//               >
//                 Our focus is on building reliable,
//                 efficient, and future-ready aquaculture
//                 infrastructure with strong commitment to
//                 innovation, sustainability, and customer
//                 satisfaction.
//               </p>
//             </div>

//             {/* FEATURES */}

//             <div
//               className="
//                 mt-9
//                 grid
//                 gap-4
//                 sm:grid-cols-2
//               "
//             >
//               {[
//                 "Biofloc Systems",
//                 "RAS Technology",
//                 "Industrial RO Plants",
//                 "Smart Automation",
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     rounded-2xl
//                     border
//                     border-white/10
//                     bg-white/[0.03]
//                     px-4
//                     py-3.5
//                   "
//                 >
//                   <div className="h-2 w-2 rounded-full bg-cyan-300" />

//                   <span
//                     className="
//                       text-sm
//                       font-medium
//                       text-white/80
//                     "
//                   >
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             {/* BUTTON */}

//             <motion.div
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className="mt-10"
//             >
//               <Link
//                 href="/about"
//                 className="
//                   inline-flex
//                   items-center
//                   gap-2
//                   rounded-full
//                   bg-cyan-300
//                   px-7
//                   py-4
//                   text-sm
//                   font-semibold
//                   text-[#061018]
//                   transition-all
//                   duration-300
//                   hover:bg-cyan-200
//                 "
//               >
//                 Explore Company

//                 <ArrowRight className="h-4 w-4" />
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Droplets,
  Cpu,
  Waves,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-18
        sm:py-16
        lg:py-16
        bg-gradient-to-br
        from-[#f5f7ff]
        via-[#eef4ff]
        to-[#f3fff6]
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* BLUE GLOW */}

        <div
          className="
            absolute
            top-[-150px]
            right-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#15176B]/15
            blur-[120px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute
            bottom-[-180px]
            left-[-100px]
            h-[380px]
            w-[380px]
            rounded-full
            bg-[#63C96A]/20
            blur-[120px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,23,107,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(21,23,107,0.08) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* IMAGE SECTION */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-[#15176B]/10
                bg-white/70
                shadow-[0_10px_40px_rgba(21,23,107,0.08)]
                backdrop-blur-xl
              "
            >
              <Image
                src="/images/about.png"
                alt="ARK Aquatech Water Engineering and Aquaculture Solutions"
                width={900}
                height={1000}
                priority
                className="
                  h-[400px]
                  sm:h-[520px]
                  lg:h-[650px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.05]
                "
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#15176B]/70 via-transparent to-transparent" />

              {/* FLOAT CARD */}

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  rounded-3xl
                  border
                  border-white/40
                  bg-white/70
                  p-6
                  shadow-xl
                  backdrop-blur-xl
                "
              >
                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.25em]
                    text-[#63C96A]
                    font-semibold
                  "
                >
                  Trusted Engineering Partner
                </span>

                <h3
                  className="
                    mt-3
                    text-[24px]
                    sm:text-[32px]
                    font-bold
                    leading-tight
                    text-[#0F172A]
                  "
                >
                  Smart Aquaculture Infrastructure
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  ARK delivers modern fish farming,
                  RAS technology, industrial water
                  treatment systems, and sustainable
                  aquatic engineering solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SECTION */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
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
                  tracking-[0.24em]
                  font-semibold
                  text-[#15176B]
                "
              >
                About ARK AQUATECH
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
              Advanced Water &
              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-[#63C96A]
                  via-[#15176B]
                  to-[#63C96A]
                  bg-clip-text
                  text-transparent
                "
              >
                Aquaculture Solutions
              </span>
            </h2>

            {/* DESCRIPTION */}

            <div className="mt-8 space-y-6">
              <p
                className="
                  text-[16px]
                  leading-[1.9]
                  text-slate-600
                "
              >
                ARK AQUATECH is a leading aquaculture
                engineering and water technology company
                providing Biofloc systems, RAS fish
                farming technology, industrial RO plants,
                aquaponics systems, pond liners, water
                filtration systems, and smart automation
                solutions across India.
              </p>

              <p
                className="
                  text-[16px]
                  leading-[1.9]
                  text-slate-600
                "
              >
                We specialize in sustainable aquatic
                ecosystem engineering with advanced
                oxygen management, IoT monitoring,
                aeration technology, wastewater
                treatment, and commercial aquaculture
                infrastructure for modern fish and shrimp
                farming projects.
              </p>

              <p
                className="
                  text-[16px]
                  leading-[1.9]
                  text-slate-600
                "
              >
                Our mission is to deliver reliable,
                energy-efficient, and future-ready
                engineering solutions that improve water
                quality, productivity, sustainability,
                and operational performance.
              </p>
            </div>

            {/* FEATURES */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: Droplets,
                  text: "Industrial Water Treatment",
                },
                {
                  icon: Waves,
                  text: "RAS & Biofloc Systems",
                },
                {
                  icon: Cpu,
                  text: "Smart IoT Automation",
                },
                {
                  icon: ShieldCheck,
                  text: "Sustainable Infrastructure",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-[#15176B]/10
                    bg-white/70
                    px-5
                    py-4
                    shadow-[0_10px_30px_rgba(21,23,107,0.05)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#63C96A]/40
                    hover:shadow-[0_15px_40px_rgba(99,201,106,0.12)]
                  "
                >
                  <item.icon className="h-5 w-5 text-[#63C96A]" />

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#0F172A]
                    "
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-12"
            >
              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#15176B]
                  to-[#63C96A]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_40px_rgba(21,23,107,0.18)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Explore More

                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}