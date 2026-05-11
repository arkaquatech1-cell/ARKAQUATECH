// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { motion } from "framer-motion";

// import {
//   CalendarDays,
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";

// const blogs = [
//   {
//     title:
//       "Benefits Of Biofloc Technology In Modern Fish Farming",

//     image: "/blog1.jpg",

//     date: "May 2026",

//     desc:
//       "Discover how Biofloc technology improves water quality and supports sustainable fish farming infrastructure.",
//   },

//   {
//     title:
//       "Why RAS Systems Are The Future Of Aquaculture",

//     image: "/blog2.jpg",

//     date: "May 2026",

//     desc:
//       "Learn how advanced RAS systems improve commercial aquaculture with smart filtration and water recycling.",
//   },

//   {
//     title:
//       "Smart Water Treatment Solutions For Shrimp Farming",

//     image: "/blog3.jpg",

//     date: "May 2026",

//     desc:
//       "Industrial RO plants and intelligent water management systems are transforming modern shrimp farming.",
//   },
// ];

// export default function BlogSection() {
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
//               backgroundSize: "72px 72px",
//           }}
//         />
//       </div>

//       {/* CONTENT */}

//       <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
//         {/* HEADER */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           viewport={{
//             once: true,
//           }}
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
//               Latest Insights
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
//             Aquaculture
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
//               Blogs & Insights
//             </span>
//           </h2>

//           {/* DESC */}

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
//             Explore the latest insights about Biofloc
//             technology, RAS systems, fish farming,
//             shrimp farming, industrial water treatment,
//             and sustainable aquaculture engineering.
//           </p>
//         </motion.div>

//         {/* BLOG GRID */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-5
//             sm:grid-cols-2
//             xl:grid-cols-3
//           "
//         >
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={index}
//               initial={{
//                 opacity: 0,
//                 y: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.06,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               whileHover={{
//                 y: -5,
//               }}
//               className="
//                 group
//                 overflow-hidden
//                 rounded-[28px]
//                 border
//                 border-white/10
//                 bg-white/[0.03]
//                 backdrop-blur-md
//               "
//             >
//               {/* IMAGE */}

//               <div className="relative h-[240px] overflow-hidden">
//                 <Image
//                   src={blog.image}
//                   alt={blog.title}
//                   fill
//                   className="
//                     object-cover
//                     transition-transform
//                     duration-700
//                     group-hover:scale-105
//                   "
//                 />

//                 {/* OVERLAY */}

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-[#061018]
//                     via-[#061018]/20
//                     to-transparent
//                   "
//                 />

//                 {/* DATE */}

//                 <div
//                   className="
//                     absolute
//                     left-4
//                     top-4
//                     flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-black/30
//                     px-3
//                     py-1.5
//                     backdrop-blur-md
//                   "
//                 >
//                   <CalendarDays className="h-3.5 w-3.5 text-cyan-300" />

//                   <span
//                     className="
//                       text-xs
//                       font-medium
//                       text-white
//                     "
//                   >
//                     {blog.date}
//                   </span>
//                 </div>
//               </div>

//               {/* CONTENT */}

//               <div className="p-6">
//                 <h3
//                   className="
//                     text-[24px]
//                     leading-tight
//                     font-semibold
//                     text-white
//                   "
//                 >
//                   {blog.title}
//                 </h3>

//                 <p
//                   className="
//                     mt-4
//                     text-[14px]
//                     leading-[1.9]
//                     text-white/65
//                   "
//                 >
//                   {blog.desc}
//                 </p>

//                 {/* BUTTON */}

//                 <Link
//                   href="/blogs"
//                   className="
//                     mt-6
//                     inline-flex
//                     items-center
//                     gap-2
//                     text-sm
//                     font-medium
//                     text-cyan-200
//                   "
//                 >
//                   Read More

//                   <ArrowUpRight
//                     className="
//                       h-4
//                       w-4
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                       group-hover:-translate-y-1
//                     "
//                   />
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM BLOCK */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 35,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.7,
//           }}
//           viewport={{
//             once: true,
//           }}
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
//                 Smart Marine
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
//                   Knowledge Hub
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
//                 Stay updated with the latest
//                 innovations in Biofloc technology,
//                 fish farming systems, industrial water
//                 treatment, RAS technology, and smart
//                 aquaculture engineering solutions.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import {
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const blogs = [
  {
    title:
      "Benefits Of Biofloc Technology In Modern Fish Farming",

    image: "/blog1.jpg",

    date: "May 2026",

    desc:
      "Discover how Biofloc technology improves water quality and supports sustainable fish farming infrastructure.",
  },

  {
    title:
      "Why RAS Systems Are The Future Of Aquaculture",

    image: "/blog2.jpg",

    date: "May 2026",

    desc:
      "Learn how advanced RAS systems improve commercial aquaculture with smart filtration and water recycling.",
  },

  {
    title:
      "Smart Water Treatment Solutions For Shrimp Farming",

    image: "/blog3.jpg",

    date: "May 2026",

    desc:
      "Industrial RO plants and intelligent water management systems are transforming modern shrimp farming.",
  },
];

export default function BlogSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        py-20
        sm:py-24
        lg:py-28
        bg-gradient-to-br
        from-[#f5f7ff]
        via-[#eef4ff]
        to-[#f3fff6]
      "
    >
      {/* PREMIUM BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* BLUE LIGHT */}

        <div
          className="
            absolute
            top-[-150px]
            left-[-100px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#15176B]/15
            blur-[120px]
          "
        />

        {/* GREEN LIGHT */}

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
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
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
              Latest Insights
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-6
              text-[38px]
              sm:text-[54px]
              lg:text-[68px]
              leading-[0.95]
              tracking-[-0.05em]
              font-black
              text-[#0F172A]
            "
          >
            Aquaculture
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
              Blogs & Insights
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-[16px]
              leading-[1.9]
              text-slate-600
            "
          >
            Explore the latest insights about Biofloc
            technology, RAS systems, fish farming,
            shrimp farming, industrial water treatment,
            and sustainable aquaculture engineering.
          </p>
        </motion.div>

        {/* BLOG GRID */}

        <div
          className="
            mt-16
            grid
            gap-7
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-[#15176B]/10
                bg-white/75
                shadow-[0_10px_40px_rgba(21,23,107,0.06)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:shadow-[0_20px_50px_rgba(21,23,107,0.12)]
              "
            >
              {/* IMAGE */}

              <div className="relative h-[250px] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#15176B]/60
                    via-[#15176B]/10
                    to-transparent
                  "
                />

                {/* DATE */}

                <div
                  className="
                    absolute
                    left-4
                    top-4
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/40
                    bg-white/80
                    px-3
                    py-1.5
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <CalendarDays className="h-3.5 w-3.5 text-[#63C96A]" />

                  <span
                    className="
                      text-xs
                      font-semibold
                      text-[#15176B]
                    "
                  >
                    {blog.date}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">
                <h3
                  className="
                    text-[24px]
                    leading-tight
                    font-bold
                    text-[#0F172A]
                  "
                >
                  {blog.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-[1.9]
                    text-slate-600
                  "
                >
                  {blog.desc}
                </p>

                {/* BUTTON */}

                <Link
                  href="/blogs"
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
                  Read More

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
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
              <h3
                className="
                  text-[34px]
                  sm:text-[48px]
                  lg:text-[60px]
                  leading-[0.95]
                  tracking-[-0.05em]
                  font-black
                  text-[#0F172A]
                "
              >
                Smart Marine
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
                  Knowledge Hub
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
                Stay updated with the latest
                innovations in Biofloc technology,
                fish farming systems, industrial water
                treatment, RAS technology, and smart
                aquaculture engineering solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}