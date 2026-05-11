// "use client";

// import Image from "next/image";

// import { motion } from "framer-motion";

// import {
//   Star,
//   Quote,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// import Link from "next/link";

// const testimonials = [
//   {
//     name: "Rajesh Kumar",
//     role: "Commercial Fish Farm Owner",
//     image: "/client1.jpg",
//     review:
//       "ARK AQUATECH delivered advanced Biofloc systems with excellent support, sustainable infrastructure, and efficient water management for our fish farming business.",
//   },

//   {
//     name: "Srinivas Reddy",
//     role: "Shrimp Farming Business",
//     image: "/client2.jpg",
//     review:
//       "Their RAS technology and industrial water solutions improved our shrimp farming productivity while reducing operational costs significantly.",
//   },

//   {
//     name: "Venkatesh Chowdary",
//     role: "Aquaculture Investor",
//     image: "/client3.jpg",
//     review:
//       "One of the best aquaculture engineering companies for Biofloc farming, smart automation, and sustainable water infrastructure solutions.",
//   },
// ];

// export default function TestimonialsSection() {
//   return (
//     <section className="relative overflow-hidden py-14 sm:py-14 lg:py-16">
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
//               Client Success Stories
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
//             Trusted By
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
//               Aquaculture Businesses
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
//             ARK AQUATECH is trusted by fish farming,
//             shrimp farming, aquaculture investors, and
//             industrial businesses for sustainable
//             Biofloc systems, smart automation, water
//             treatment, and modern engineering solutions.
//           </p>
//         </motion.div>

//         {/* TESTIMONIALS */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-5
//             sm:grid-cols-2
//             xl:grid-cols-3
//           "
//         >
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.06,
//               }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-[28px]
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 p-6
//                 backdrop-blur-md
//               "
//             >
//               {/* HOVER */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   opacity-0
//                   transition-all
//                   duration-500
//                   group-hover:opacity-100
//                   bg-gradient-to-br
//                   from-cyan-400/[0.04]
//                   to-emerald-400/[0.04]
//                 "
//               />

//               {/* TOP */}

//               <div className="relative flex items-center justify-between">
//                 {/* STARS */}

//                 <div className="flex items-center gap-1">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       className="
//                         h-4
//                         w-4
//                         fill-cyan-300
//                         text-cyan-300
//                       "
//                     />
//                   ))}
//                 </div>

//                 {/* QUOTE */}

//                 <div
//                   className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-cyan-300
//                   "
//                 >
//                   <Quote className="h-5 w-5 text-[#061018]" />
//                 </div>
//               </div>

//               {/* REVIEW */}

//               <p
//                 className="
//                   relative
//                   mt-6
//                   text-[14px]
//                   leading-[1.9]
//                   text-white/65
//                 "
//               >
//                 {item.review}
//               </p>

//               {/* USER */}

//               <div className="relative mt-7 flex items-center gap-4">
               

//                 <div>
//                   <h3
//                     className="
//                       text-[16px]
//                       font-semibold
//                       text-white
//                     "
//                   >
//                     {item.name}
//                   </h3>

//                   <p
//                     className="
//                       mt-1
//                       text-sm
//                       text-white/50
//                     "
//                   >
//                     {item.role}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>



       
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  Star,
  Quote,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import Link from "next/link";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Commercial Fish Farm Owner",
    image: "/client1.jpg",
    review:
      "ARK AQUATECH delivered advanced Biofloc systems with excellent technical support, sustainable infrastructure, and efficient water management solutions for our fish farming business.",
  },

  {
    name: "Srinivas Reddy",
    role: "Shrimp Farming Business",
    image: "/client2.jpg",
    review:
      "Their RAS technology, industrial RO plants, and smart water treatment solutions improved our shrimp farming productivity while reducing operational costs.",
  },

  {
    name: "Venkatesh Chowdary",
    role: "Aquaculture Investor",
    image: "/client3.jpg",
    review:
      "One of the best aquaculture engineering companies for Biofloc fish farming, smart automation, sustainable water infrastructure, and marine engineering.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-16
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
              Client Success Stories
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
            Trusted By
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
              Aquaculture Businesses
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
            ARK AQUATECH is trusted by fish farming,
            shrimp farming,
            aquaculture investors,
            industrial businesses,
            and marine engineering projects
            for sustainable Biofloc systems,
            industrial RO plants,
            smart automation,
            RAS aquaculture technology,
            wastewater treatment,
            and modern aquatic infrastructure solutions.
          </p>
        </motion.div>

        {/* TESTIMONIALS GRID */}

        <div
          className="
            mt-16
            grid
            gap-7
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {testimonials.map((item, index) => (
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

              {/* TOP */}

              <div className="relative flex items-center justify-between">

                {/* STARS */}

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="
                        h-4
                        w-4
                        fill-[#63C96A]
                        text-[#63C96A]
                      "
                    />
                  ))}
                </div>

                {/* QUOTE ICON */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#15176B]
                    to-[#63C96A]
                    shadow-lg
                  "
                >
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* REVIEW */}

              <p
                className="
                  relative
                  mt-7
                  text-[15px]
                  leading-[1.9]
                  text-slate-600
                "
              >
                {item.review}
              </p>

              {/* USER */}

              <div className="relative mt-8 flex items-center gap-4">

                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-14
                    w-14
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#15176B]/10
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* USER INFO */}

                <div>
                  <h3
                    className="
                      text-[17px]
                      font-bold
                      text-[#0F172A]
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-500
                    "
                  >
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO CTA BLOCK */}

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
                  Trusted Engineering Partner
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
                Sustainable Water &
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
                  Aquaculture Solutions
                </span>
              </h3>
            </div>

            {/* RIGHT */}

            <div className="flex items-center">
              <div>
                <p
                  className="
                    text-[16px]
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  ARK AQUATECH provides
                  advanced aquaculture engineering,
                  Biofloc fish farming systems,
                  industrial water treatment,
                  smart IoT automation,
                  shrimp farming infrastructure,
                  marine engineering,
                  aeration systems,
                  and sustainable aquatic ecosystem
                  solutions for industries,
                  farms,
                  and commercial businesses.
                </p>

                {/* BUTTON */}

                <Link
                  href="/contact"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#15176B]
                    to-[#63C96A]
                    px-7
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_35px_rgba(21,23,107,0.16)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  Contact Our Team

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}