// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// import {
//   Waves,
//   Fish,
//   Droplets,
//   Factory,
//   Cpu,
//   Building2,
//   ArrowRight,
// } from "lucide-react";

// const services = [
//   {
//     title: "Biofloc Fish Farming",
//     description:
//       "Advanced Biofloc systems for sustainable fish farming and high-efficiency aquaculture production.",
//     icon: Fish,
//   },

//   {
//     title: "RAS Aquaculture Systems",
//     description:
//       "Modern RAS technology with filtration, oxygen balancing, and smart aquatic infrastructure.",
//     icon: Waves,
//   },

//   {
//     title: "Industrial RO Plants",
//     description:
//       "Industrial RO, STP, ETP, and water purification systems for commercial and industrial use.",
//     icon: Droplets,
//   },

//   {
//     title: "Smart Aquaculture IoT",
//     description:
//       "IoT-enabled automation systems including sensors, feeders, monitoring, and remote controls.",
//     icon: Cpu,
//   },

//   {
//     title: "Marine Engineering",
//     description:
//       "Aquaculture infrastructure, aeration systems, pond lining, and sustainable water solutions.",
//     icon: Factory,
//   },

//   {
//     title: "Civil Infrastructure",
//     description:
//       "Engineering development, pipelines, water tanks, and industrial infrastructure solutions.",
//     icon: Building2,
//   },
// ];

// export default function ServicesSection() {
//   return (
//     <section className="relative overflow-hidden py-16 sm:py-16 lg:py-14">
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 -z-10">
//         {/* SOFT LIGHT */}

//         <div
//           className="
//             absolute
//             top-[-120px]
//             left-[-120px]
//             w-[300px]
//             h-[300px]
//             rounded-full
//             bg-cyan-400/8
//             blur-[100px]
//           "
//         />

//         <div
//           className="
//             absolute
//             bottom-[-120px]
//             right-[-120px]
//             w-[300px]
//             h-[300px]
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
//         {/* TOP */}

//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="mx-auto max-w-4xl text-center"
//         >
//           {/* BADGE */}

//           <div
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-white/10
//               bg-white/[0.03]
//               px-5
//               py-2.5
//               backdrop-blur-md
//             "
//           >
//             <div className="h-2 w-2 rounded-full bg-cyan-300" />

//             <span
//               className="
//                 text-[11px]
//                 uppercase
//                 tracking-[0.22em]
//                 text-cyan-100/75
//               "
//             >
//               Smart Aquaculture Solutions
//             </span>
//           </div>

//           {/* TITLE */}

//           <h2
//             className="
//               mt-6
//               text-[34px]
//               sm:text-[48px]
//               lg:text-[62px]
//               leading-[1]
//               tracking-[-0.04em]
//               font-semibold
//               text-white
//             "
//           >
//             Advanced Water &
//             <span
//               className="
//                 block
//                 mt-2
//                 bg-gradient-to-r
//                 from-cyan-200
//                 via-white
//                 to-emerald-200
//                 bg-clip-text
//                 text-transparent
//               "
//             >
//               Aquaculture Services
//             </span>
//           </h2>

//           {/* DESCRIPTION */}

//           <p
//             className="
//               mx-auto
//               mt-7
//               max-w-3xl
//               text-[15px]
//               sm:text-[16px]
//               leading-[1.9]
//               text-white/68
//             "
//           >
//             ARK AQUATECH provides advanced Biofloc,
//             RAS aquaculture systems, industrial water
//             treatment, smart automation, marine
//             engineering, and sustainable infrastructure
//             solutions across India and international
//             markets.
//           </p>
//         </motion.div>

//         {/* GRID */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-5
//             sm:grid-cols-2
//             xl:grid-cols-3
//           "
//         >
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.06,
//                 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -5 }}
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[28px]
//                   border
//                   border-white/10
//                   bg-white/[0.03]
//                   p-6
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                 "
//               >
//                 {/* HOVER BG */}

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     opacity-0
//                     transition-all
//                     duration-500
//                     group-hover:opacity-100
//                     bg-gradient-to-br
//                     from-cyan-400/[0.04]
//                     to-emerald-400/[0.04]
//                   "
//                 />

//                 {/* ICON */}

//                 <div
//                   className="
//                     relative
//                     flex
//                     h-14
//                     w-14
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     bg-cyan-300
//                   "
//                 >
//                   <Icon className="h-6 w-6 text-[#061018]" />
//                 </div>

//                 {/* CONTENT */}

//                 <div className="relative z-10">
//                   <h3
//                     className="
//                       mt-5
//                       text-[22px]
//                       font-semibold
//                       leading-tight
//                       text-white
//                     "
//                   >
//                     {service.title}
//                   </h3>

//                   <p
//                     className="
//                       mt-4
//                       text-[14px]
//                       leading-[1.9]
//                       text-white/65
//                     "
//                   >
//                     {service.description}
//                   </p>

//                   <Link
//                     href="/services"
//                     className="
//                       mt-6
//                       inline-flex
//                       items-center
//                       gap-2
//                       text-sm
//                       font-medium
//                       text-cyan-200
//                     "
//                   >
//                     Explore Services

//                     <ArrowRight
//                       className="
//                         h-4
//                         w-4
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-1
//                       "
//                     />
//                   </Link>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* SEO BLOCK */}

//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="
//             mt-16
//             rounded-[32px]
//             border
//             border-white/10
//             bg-white/[0.03]
//             p-7
//             sm:p-10
//             lg:p-12
//             backdrop-blur-md
//           "
//         >
//           <div className="grid gap-8 lg:grid-cols-2">
//             <div>
//               <h3
//                 className="
//                   text-[30px]
//                   sm:text-[42px]
//                   lg:text-[52px]
//                   leading-[1]
//                   tracking-[-0.04em]
//                   font-semibold
//                   text-white
//                 "
//               >
//                 Smart Aquaculture &
//                 <span
//                   className="
//                     block
//                     mt-2
//                     bg-gradient-to-r
//                     from-cyan-200
//                     via-white
//                     to-emerald-200
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   Water Engineering
//                 </span>
//               </h3>
//             </div>

//             <div>
//               <p
//                 className="
//                   text-[15px]
//                   sm:text-[16px]
//                   leading-[1.9]
//                   text-white/68
//                 "
//               >
//                 Based in Andhra Pradesh, ARK AQUATECH
//                 delivers advanced aquaculture systems,
//                 industrial RO plants, smart water
//                 treatment, automation technologies,
//                 aeration systems, and sustainable
//                 infrastructure solutions for industries,
//                 farms, and commercial projects.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  Waves,
  Fish,
  Droplets,
  Factory,
  Cpu,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Biofloc Fish Farming",
    description:
      "Advanced Biofloc fish farming systems for sustainable aquaculture, water quality management, and high-efficiency fish production.",
    icon: Fish,
  },

  {
    title: "RAS Aquaculture Systems",
    description:
      "Modern RAS technology with intelligent filtration, oxygen balancing, water recycling, and smart aquaculture infrastructure.",
    icon: Waves,
  },

  {
    title: "Industrial RO Plants",
    description:
      "Industrial RO plants, STP, ETP, WTP, and advanced water purification systems for industries and commercial projects.",
    icon: Droplets,
  },

  {
    title: "Smart Aquaculture IoT",
    description:
      "IoT-enabled smart aquaculture automation including sensors, feeders, oxygen monitoring, and remote control systems.",
    icon: Cpu,
  },

  {
    title: "Marine Engineering",
    description:
      "Aquaculture infrastructure, aeration systems, HDPE pond lining, shrimp farming systems, and sustainable marine engineering.",
    icon: Factory,
  },

  {
    title: "Civil Infrastructure",
    description:
      "Industrial civil engineering, water tanks, pipelines, construction development, and infrastructure solutions.",
    icon: Building2,
  },
];

export default function ServicesSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-14
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
            top-[-140px]
            left-[-100px]
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
            bottom-[-160px]
            right-[-120px]
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
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* TOP SECTION */}

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
              Smart Aquaculture Solutions
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
              Aquaculture Services
            </span>
          </h2>

          {/* SEO DESCRIPTION */}

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
            ARK AQUATECH provides advanced
            Biofloc fish farming systems,
            RAS aquaculture technology,
            industrial RO water treatment plants,
            shrimp farming infrastructure,
            smart aquaculture automation,
            aeration systems,
            aquaponics solutions,
            HDPE pond lining,
            wastewater treatment systems,
            and sustainable marine engineering
            solutions across India.
          </p>
        </motion.div>

        {/* SERVICES GRID */}

        <div
          className="
            mt-16
            grid
            gap-7
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
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
                  bg-white/75
                  p-7
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

                {/* ICON */}

                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#15176B]
                    to-[#63C96A]
                    shadow-lg
                  "
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* CONTENT */}

                <div className="relative z-10">

                  <h3
                    className="
                      mt-6
                      text-[24px]
                      font-bold
                      leading-tight
                      text-[#0F172A]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[15px]
                      leading-[1.9]
                      text-slate-600
                    "
                  >
                    {service.description}
                  </p>

                  {/* BUTTON */}

                  <Link
                    href="/services"
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-[#15176B]
                      transition-all
                      duration-300
                      hover:text-[#63C96A]
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
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SEO BLOCK */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            mt-20
            overflow-hidden
            rounded-[36px]
            border
            border-[#15176B]/10
            bg-white/75
            p-8
            sm:p-10
            lg:p-14
            shadow-[0_15px_50px_rgba(21,23,107,0.08)]
            backdrop-blur-xl
          "
        >
          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#15176B]/5
                  px-4
                  py-2
                "
              >
                <ShieldCheck className="h-4 w-4 text-[#63C96A]" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#15176B]
                  "
                >
                  Sustainable Engineering
                </span>
              </div>

              <h3
                className="
                  mt-6
                  text-[36px]
                  sm:text-[48px]
                  lg:text-[58px]
                  leading-[0.95]
                  tracking-[-0.05em]
                  font-black
                  text-[#0F172A]
                "
              >
                Smart Aquaculture &
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
                  Water Engineering
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div className="flex items-center">
              <p
                className="
                  text-[16px]
                  leading-[1.9]
                  text-slate-600
                "
              >
                Based in Andhra Pradesh,
                ARK AQUATECH delivers advanced
                aquaculture systems,
                industrial RO plants,
                smart water treatment,
                fish farming automation,
                aeration systems,
                marine infrastructure,
                wastewater treatment,
                and sustainable engineering
                solutions for farms,
                industries,
                and commercial projects
                across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}