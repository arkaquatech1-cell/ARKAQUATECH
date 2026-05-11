// "use client";

// import { motion } from "framer-motion";

// import {
//   Cpu,
//   Waves,
//   Droplets,
//   ShieldCheck,
//   Activity,
//   Sparkles,
// } from "lucide-react";

// const technologies = [
//   {
//     icon: Cpu,
//     title: "Smart Automation",
//     desc:
//       "AI-powered aquaculture automation systems for monitoring, feeding control, and intelligent water management.",
//   },

//   {
//     icon: Waves,
//     title: "RAS Technology",
//     desc:
//       "Advanced Recirculating Aquaculture Systems with filtration and oxygen balancing infrastructure.",
//   },

//   {
//     icon: Droplets,
//     title: "Water Treatment",
//     desc:
//       "Industrial RO plants, filtration systems, and smart water purification technologies.",
//   },

//   {
//     icon: ShieldCheck,
//     title: "Quality Sensors",
//     desc:
//       "Real-time monitoring systems for pH balance, oxygen control, and aquatic ecosystem stability.",
//   },

//   {
//     icon: Activity,
//     title: "Smart Monitoring",
//     desc:
//       "IoT-enabled dashboards and remote monitoring systems for modern aquaculture management.",
//   },

//   {
//     icon: Sparkles,
//     title: "Eco Engineering",
//     desc:
//       "Sustainable marine engineering systems designed for eco-friendly aquaculture productivity.",
//   },
// ];

// export default function TechnologySection() {
//   return (
//     <section className="relative overflow-hidden py-16 sm:py-16 lg:py-14">
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
//               Smart Technology
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
//             Advanced Marine
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
//               Technology Systems
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
//             ARK AQUATECH delivers next-generation
//             aquaculture technology including AI-powered
//             monitoring, Biofloc systems, industrial water
//             treatment, smart aquatic sensors, and
//             sustainable marine engineering solutions.
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
//           {technologies.map((item, index) => {
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
//                     {item.title}
//                   </h3>

//                   <p
//                     className="
//                       mt-4
//                       text-[14px]
//                       leading-[1.9]
//                       text-white/65
//                     "
//                   >
//                     {item.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* BOTTOM BLOCK */}

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
//             {/* LEFT */}

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
//                 Future Ready
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
//                   Smart Aquaculture
//                 </span>
//               </h3>
//             </div>

//             {/* RIGHT */}

//             <div>
//               <p
//                 className="
//                   text-[15px]
//                   sm:text-[16px]
//                   leading-[1.9]
//                   text-white/68
//                 "
//               >
//                 ARK AQUATECH combines intelligent marine
//                 engineering, industrial filtration,
//                 automated water systems, smart fish
//                 farming infrastructure, and sustainable
//                 aquaculture innovation for modern aquatic
//                 businesses.
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

import {
  Cpu,
  Waves,
  Droplets,
  ShieldCheck,
  Activity,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "Smart Automation",
    desc:
      "AI-powered aquaculture automation systems for intelligent feeding control, oxygen monitoring, and smart water management.",
  },

  {
    icon: Waves,
    title: "RAS Technology",
    desc:
      "Advanced Recirculating Aquaculture Systems with biological filtration, oxygen balancing, and water recycling infrastructure.",
  },

  {
    icon: Droplets,
    title: "Water Treatment",
    desc:
      "Industrial RO plants, wastewater treatment systems, filtration technologies, and smart water purification solutions.",
  },

  {
    icon: ShieldCheck,
    title: "Quality Sensors",
    desc:
      "Real-time monitoring systems for pH balance, dissolved oxygen, aquatic ecosystem stability, and smart analytics.",
  },

  {
    icon: Activity,
    title: "Smart Monitoring",
    desc:
      "IoT-enabled dashboards and remote monitoring systems for modern fish farming and aquaculture management.",
  },

  {
    icon: Sparkles,
    title: "Eco Engineering",
    desc:
      "Sustainable marine engineering systems designed for eco-friendly aquaculture productivity and energy efficiency.",
  },
];

export default function TechnologySection() {
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
              Smart Technology
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
            Advanced Marine
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
              Technology Systems
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
            ARK AQUATECH delivers next-generation
            aquaculture technology including
            AI-powered automation,
            Biofloc fish farming systems,
            industrial RO plants,
            smart aquatic sensors,
            IoT-enabled monitoring,
            wastewater treatment systems,
            RAS aquaculture technology,
            and sustainable marine engineering
            solutions across India.
          </p>
        </motion.div>

        {/* TECHNOLOGY GRID */}

        <div
          className="
            mt-16
            grid
            gap-7
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {technologies.map((item, index) => {
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
                    {item.title}
                  </h3>

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

                  {/* BUTTON */}

                  <button
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
                    Learn More

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
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
                  Future Ready Technology
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
                Future Ready
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
                  Smart Aquaculture
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
                ARK AQUATECH combines intelligent
                marine engineering,
                industrial filtration systems,
                AI-powered monitoring,
                smart fish farming automation,
                oxygen management technology,
                industrial RO plants,
                IoT dashboards,
                and sustainable aquaculture
                innovation for modern aquatic
                businesses and industries.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}