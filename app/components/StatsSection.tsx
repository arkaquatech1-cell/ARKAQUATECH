// "use client";

// import { motion } from "framer-motion";

// import {
//   ShieldCheck,
//   Fish,
//   Waves,
//   Globe2,
//   Sparkles,
//   Cpu,
// } from "lucide-react";

// const stats = [
//   {
//     number: "2019+",
//     title: "Established Company",
//     desc:
//       "Delivering advanced aquaculture engineering and sustainable water infrastructure solutions since 2019.",
//     icon: ShieldCheck,
//   },

//   {
//     number: "500+",
//     title: "Projects Delivered",
//     desc:
//       "Successfully completed Biofloc systems, industrial RO plants, and aquaculture infrastructure projects.",
//     icon: Fish,
//   },

//   {
//     number: "24/7",
//     title: "Technical Support",
//     desc:
//       "Dedicated consultancy, maintenance services, and technical engineering support for aquaculture businesses.",
//     icon: Waves,
//   },

//   {
//     number: "100%",
//     title: "Sustainable Solutions",
//     desc:
//       "Focused on eco-friendly systems, water recycling, smart automation, and sustainable aquatic ecosystems.",
//     icon: Globe2,
//   },
// ];

// export default function StatsSection() {
//   return (
//     <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 -z-10">
//         {/* LIGHT */}

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
//         {/* HEADER */}

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
//             <Sparkles className="h-4 w-4 text-cyan-300" />

//             <span
//               className="
//                 text-[11px]
//                 uppercase
//                 tracking-[0.22em]
//                 text-cyan-100/75
//               "
//             >
//               Company Achievements
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
//             Trusted Aquaculture
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
//               Engineering Company
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
//             ARK AQUATECH specializes in Biofloc systems,
//             industrial RO plants, smart aquaculture
//             automation, sustainable marine engineering,
//             and modern aquatic infrastructure solutions
//             across India.
//           </p>
//         </motion.div>

//         {/* STATS */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-5
//             sm:grid-cols-2
//             xl:grid-cols-4
//           "
//         >
//           {stats.map((item, index) => {
//             const Icon = item.icon;

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
//                 "
//               >
//                 {/* HOVER */}

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

//                 {/* NUMBER */}

//                 <h2
//                   className="
//                     relative
//                     mt-6
//                     text-[42px]
//                     sm:text-[50px]
//                     leading-none
//                     tracking-[-0.04em]
//                     font-semibold
//                     bg-gradient-to-r
//                     from-cyan-200
//                     via-white
//                     to-emerald-200
//                     bg-clip-text
//                     text-transparent
//                   "
//                 >
//                   {item.number}
//                 </h2>

//                 {/* TITLE */}

//                 <h3
//                   className="
//                     mt-4
//                     text-[20px]
//                     font-semibold
//                     leading-tight
//                     text-white
//                   "
//                 >
//                   {item.title}
//                 </h3>

//                 {/* DESC */}

//                 <p
//                   className="
//                     mt-4
//                     text-[14px]
//                     leading-[1.9]
//                     text-white/65
//                   "
//                 >
//                   {item.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* BOTTOM BLOCK */}

       
          
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";

import {
  ShieldCheck,
  Fish,
  Waves,
  Globe2,
  Sparkles,
  Cpu,
} from "lucide-react";

const stats = [
  {
    number: "2010+",
    title: "Established Company",
    desc:
      "Delivering advanced aquaculture engineering, Biofloc systems, and sustainable water infrastructure solutions since 2019.",
    icon: ShieldCheck,
  },

  {
    number: "500+",
    title: "Projects Delivered",
    desc:
      "Successfully completed Biofloc fish farming systems, industrial RO plants, and aquaculture infrastructure projects.",
    icon: Fish,
  },

  {
    number: "24/7",
    title: "Technical Support",
    desc:
      "Dedicated consultancy, maintenance services, smart automation support, and engineering assistance for aquaculture businesses.",
    icon: Waves,
  },

  {
    number: "100%",
    title: "Sustainable Solutions",
    desc:
      "Focused on eco-friendly aquaculture systems, water recycling, IoT automation, and sustainable aquatic ecosystems.",
    icon: Globe2,
  },
];

export default function StatsSection() {
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
            left-[-120px]
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

      {/* CONTENT */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* HEADER */}

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
              Company Achievements
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
            Trusted Aquaculture
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
              Engineering Company
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
            ARK AQUATECH specializes in Biofloc fish
            farming systems, industrial RO plants,
            smart aquaculture automation,
            RAS aquaculture technology,
            shrimp farming infrastructure,
            wastewater treatment systems,
            marine engineering,
            and sustainable aquatic ecosystem
            solutions across India.
          </p>
        </motion.div>

        {/* STATS GRID */}

        <div
          className="
            mt-16
            grid
            gap-7
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

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

                {/* NUMBER */}

                <h2
                  className="
                    relative
                    mt-7
                    text-[48px]
                    sm:text-[56px]
                    leading-none
                    tracking-[-0.05em]
                    font-black
                    bg-gradient-to-r
                    from-[#63C96A]
                    via-[#15176B]
                    to-[#63C96A]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.number}
                </h2>

                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    text-[22px]
                    font-bold
                    leading-tight
                    text-[#0F172A]
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* SEO BOTTOM BLOCK */}

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
                <Cpu className="h-4 w-4 text-[#63C96A]" />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#15176B]
                  "
                >
                  Smart Engineering Solutions
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
                Sustainable Marine &
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
                  Water Technology
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
                ARK AQUATECH delivers modern
                aquaculture engineering,
                Biofloc fish farming,
                industrial water treatment,
                smart IoT automation,
                aeration systems,
                RAS aquaculture solutions,
                shrimp farming infrastructure,
                and sustainable marine engineering
                services for farms,
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