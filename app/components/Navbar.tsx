// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { useEffect, useState } from "react";

// import { AnimatePresence, motion } from "framer-motion";

// import {
//   Menu,
//   X,
//   ArrowRight,
//   ChevronDown,
// } from "lucide-react";

// type NavLink = {
//   title: string;
//   href: string;
//   dropdown?: {
//     title: string;
//     href: string;
//   }[];
// };

// const navLinks: NavLink[] = [
//   {
//     title: "Home",
//     href: "/",
//   },

//   {
//     title: "About",
//     href: "/about",
//   },

//   {
//     title: "Services",
//     href: "/services",

//     dropdown: [
//       {
//         title: "Biofloc Fish Farming",
//         href: "/services/biofloc-fish-farming",
//       },

//       {
//         title: "RAS Aquaculture Systems",
//         href: "/services/ras-aquaculture-systems",
//       },

//       {
//         title: "Industrial Water Treatment",
//         href: "/services/industrial-water-treatment-solutions",
//       },

//       {
//         title: "Advanced Aquaculture Systems",
//         href: "/services/advanced-aquaculture-systems",
//       },

//       {
//         title: "Shrimp Farming Setup",
//         href: "/services/shrimp-farming-setup",
//       },

//       {
//         title: "Hatchery Design Solutions",
//         href: "/services/hatchery-design-solutions",
//       },
//     ],
//   },

//   {
//     title: "Projects",
//     href: "/projects",
//   },

//   {
//     title: "Gallery",
//     href: "/gallery",
//   },

//   {
//     title: "Downloads",
//     href: "/downloads",
//   },
//   {
//     title: "Careers",
//     href: "/careers",
//   },
//   {
//     title: "Blogs",
//     href: "/blogs",
//   }
// ,
//   {
//     title: "Contact",
//     href: "/contact",
//   },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const [scrolled, setScrolled] = useState(false);

//   const [openDropdown, setOpenDropdown] =
//     useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () =>
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );
//   }, []);

//   return (
//     <>
//       {/* HEADER */}

//       <header
//         className={`
//           fixed
//           top-0
//           left-0
//           z-50
//           w-full
//           transition-all
//           duration-300
//           ${scrolled ? "py-3" : "py-5"}
//         `}
//       >
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* NAVBAR */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: -20,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className={`
//               relative
//               rounded-[30px]
//               border
//               transition-all
//               duration-300
//               ${
//                 scrolled
//                   ? "border-[#E5E7EB] bg-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl"
//                   : "border-white/50 bg-white/80 shadow-[0_15px_45px_rgba(0,0,0,0.05)] backdrop-blur-xl"
//               }
//             `}
//           >
//             {/* BACKGROUND */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 rounded-[30px]
//                 bg-gradient-to-r
//                 from-[#0A6EBD]/[0.03]
//                 via-white
//                 to-[#63C96A]/[0.03]
//               "
//             />

//             {/* GRID */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 opacity-[0.03]
//               "
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(10,110,189,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.08) 1px, transparent 1px)",
//                 backgroundSize: "60px 60px",
//               }}
//             />

//             {/* CONTENT */}

//             <div
//               className="
//                 relative
//                 flex
//                 items-center
//                 justify-between
//                 px-5
//                 py-4
//                 lg:px-8
//               "
//             >
//               {/* LOGO */}

//               <Link
//                 href="/"
//                 className="flex items-center gap-3"
//               >
//                 <div
//                   className="
//                     rounded-2xl
//                     bg-white
//                     p-2
//                     shadow-lg
//                   "
//                 >
//                   <Image
//                     src="/logo/logo1.png"
//                     alt="ARK AQUATECH"
//                     width={50}
//                     height={50}
//                     className="object-contain"
//                   />
//                 </div>

//                 <div className="hidden sm:block">
//                   <h1
//                     className="
//                       text-[17px]
//                       font-black
//                       tracking-tight
//                       text-[#021B2F]
//                     "
//                   >
//                     ARK AQUATECH
//                   </h1>

//                   <p
//                     className="
//                       mt-0.5
//                       text-[10px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.24em]
//                       text-[#0A6EBD]
//                     "
//                   >
//                     Smart Aquaculture
//                   </p>
//                 </div>
//               </Link>

//               {/* DESKTOP NAV */}

//               <nav className="hidden lg:flex items-center gap-8">
//                 {navLinks.map((item, index) => (
//                   <div
//                     key={index}
//                     className="relative group"
//                   >
//                     <Link
//                       href={item.href}
//                       className="
//                         relative
//                         flex
//                         items-center
//                         gap-1
//                         text-[14px]
//                         font-semibold
//                         text-[#374151]
//                         transition-all
//                         duration-300
//                         hover:text-[#0A6EBD]
//                       "
//                     >
//                       {item.title}

//                       {item.dropdown && (
//                         <ChevronDown
//                           className="
//                             h-4
//                             w-4
//                             transition-transform
//                             duration-300
//                             group-hover:rotate-180
//                           "
//                         />
//                       )}

//                       <span
//                         className="
//                           absolute
//                           -bottom-2
//                           left-0
//                           h-[2px]
//                           w-0
//                           rounded-full
//                           bg-gradient-to-r
//                           from-[#0A6EBD]
//                           to-[#63C96A]
//                           transition-all
//                           duration-300
//                           group-hover:w-full
//                         "
//                       />
//                     </Link>

//                     {/* DROPDOWN */}

//                     {item.dropdown && (
//                       <div
//                         className="
//                           invisible
//                           absolute
//                           left-0
//                           top-[160%]
//                           z-50
//                           w-[360px]
//                           translate-y-4
//                           rounded-[30px]
//                           border
//                           border-[#E5E7EB]
//                           bg-white
//                           p-4
//                           opacity-0
//                           shadow-[0_25px_70px_rgba(0,0,0,0.12)]
//                           transition-all
//                           duration-300
//                           group-hover:visible
//                           group-hover:translate-y-0
//                           group-hover:opacity-100
//                         "
//                       >
//                         <div className="space-y-2">
//                           {item.dropdown.map(
//                             (service, i) => (
//                               <Link
//                                 key={i}
//                                 href={service.href}
//                                 className="
//                                   group/item
//                                   flex
//                                   items-center
//                                   justify-between
//                                   rounded-2xl
//                                   px-4
//                                   py-4
//                                   transition-all
//                                   duration-300
//                                   hover:bg-[#F4F8FF]
//                                 "
//                               >
//                                 <div>
//                                   <h4
//                                     className="
//                                       text-sm
//                                       font-semibold
//                                       text-[#021B2F]
//                                       transition-colors
//                                       duration-300
//                                       group-hover/item:text-[#0A6EBD]
//                                     "
//                                   >
//                                     {service.title}
//                                   </h4>
//                                 </div>

//                                 <ArrowRight
//                                   className="
//                                     h-4
//                                     w-4
//                                     text-[#0A6EBD]
//                                     opacity-0
//                                     transition-all
//                                     duration-300
//                                     group-hover/item:translate-x-1
//                                     group-hover/item:opacity-100
//                                   "
//                                 />
//                               </Link>
//                             )
//                           )}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </nav>

//               {/* RIGHT SIDE */}

//               <div className="hidden lg:flex items-center gap-4">
//                 <Link
//                   href="/contact"
//                   className="
//                     group
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     bg-gradient-to-r
//                     from-[#0A6EBD]
//                     to-[#15176B]
//                     px-7
//                     py-3.5
//                     text-sm
//                     font-semibold
//                     text-white
//                     shadow-[0_15px_35px_rgba(10,110,189,0.20)]
//                     transition-all
//                     duration-300
//                     hover:scale-105
//                   "
//                 >
//                   Get Free Quote

//                   <ArrowRight
//                     className="
//                       h-4
//                       w-4
//                       transition-transform
//                       duration-300
//                       group-hover:translate-x-1
//                     "
//                   />
//                 </Link>
//               </div>

//               {/* MOBILE BUTTON */}

//               <button
//                 onClick={() => setOpen(true)}
//                 className="
//                   flex
//                   h-11
//                   w-11
//                   items-center
//                   justify-center
//                   rounded-2xl
//                   border
//                   border-[#E5E7EB]
//                   bg-white
//                   text-[#021B2F]
//                   shadow-lg
//                   lg:hidden
//                 "
//               >
//                 <Menu size={22} />
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </header>

//       {/* MOBILE MENU */}

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               x: "100%",
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             exit={{
//               opacity: 0,
//               x: "100%",
//             }}
//             transition={{
//               duration: 0.35,
//             }}
//             className="
//               fixed
//               inset-0
//               z-[100]
//               overflow-y-auto
//               bg-white
//             "
//           >
//             <div className="min-h-screen px-6 py-6">
//               {/* TOP */}

//               <div className="flex items-center justify-between">
//                 <Link
//                   href="/"
//                   className="flex items-center gap-3"
//                 >
//                   <div
//                     className="
//                       rounded-2xl
//                       bg-white
//                       p-2
//                       shadow-lg
//                     "
//                   >
//                     <Image
//                       src="/logo/logo1.png"
//                       alt="logo"
//                       width={46}
//                       height={46}
//                     />
//                   </div>

//                   <div>
//                     <h2
//                       className="
//                         text-[16px]
//                         font-black
//                         text-[#021B2F]
//                       "
//                     >
//                       ARK AQUATECH
//                     </h2>

//                     <p
//                       className="
//                         mt-0.5
//                         text-[10px]
//                         uppercase
//                         tracking-[0.22em]
//                         font-semibold
//                         text-[#0A6EBD]
//                       "
//                     >
//                       Smart Aquaculture
//                     </p>
//                   </div>
//                 </Link>

//                 {/* CLOSE */}

//                 <button
//                   onClick={() => setOpen(false)}
//                   className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     border
//                     border-[#E5E7EB]
//                     bg-white
//                     text-[#021B2F]
//                     shadow-lg
//                   "
//                 >
//                   <X size={22} />
//                 </button>
//               </div>

//               {/* MOBILE NAV */}

//               <div className="mt-16 flex flex-col gap-2">
//                 {navLinks.map((item, index) => (
//                   <div
//                     key={index}
//                     className="
//                       rounded-3xl
//                       border
//                       border-[#E5E7EB]
//                       bg-white
//                       p-2
//                     "
//                   >
//                     {/* MAIN LINK */}

//                     <div className="flex items-center justify-between">
//                       <Link
//                         href={item.href}
//                         onClick={() => setOpen(false)}
//                         className="
//                           flex-1
//                           px-4
//                           py-4
//                           text-[18px]
//                           font-bold
//                           text-[#021B2F]
//                         "
//                       >
//                         {item.title}
//                       </Link>

//                       {item.dropdown && (
//                         <button
//                           onClick={() =>
//                             setOpenDropdown(
//                               openDropdown === index
//                                 ? null
//                                 : index
//                             )
//                           }
//                           className="
//                             flex
//                             h-10
//                             w-10
//                             items-center
//                             justify-center
//                             rounded-2xl
//                             bg-[#F4F8FF]
//                             text-[#0A6EBD]
//                           "
//                         >
//                           <ChevronDown
//                             className={`
//                               h-5
//                               w-5
//                               transition-transform
//                               duration-300
//                               ${
//                                 openDropdown ===
//                                 index
//                                   ? "rotate-180"
//                                   : ""
//                               }
//                             `}
//                           />
//                         </button>
//                       )}
//                     </div>

//                     {/* MOBILE DROPDOWN */}

//                     {item.dropdown &&
//                       openDropdown === index && (
//                         <div className="mt-2 space-y-2 px-2 pb-3">
//                           {item.dropdown.map(
//                             (service, i) => (
//                               <Link
//                                 key={i}
//                                 href={service.href}
//                                 onClick={() =>
//                                   setOpen(false)
//                                 }
//                                 className="
//                                   flex
//                                   items-center
//                                   justify-between
//                                   rounded-2xl
//                                   bg-[#F8FAFC]
//                                   px-4
//                                   py-4
//                                   text-sm
//                                   font-semibold
//                                   text-[#374151]
//                                   transition-all
//                                   duration-300
//                                   hover:bg-[#F4F8FF]
//                                   hover:text-[#0A6EBD]
//                                 "
//                               >
//                                 {service.title}

//                                 <ArrowRight className="h-4 w-4" />
//                               </Link>
//                             )
//                           )}
//                         </div>
//                       )}
//                   </div>
//                 ))}
//               </div>

//               {/* BUTTON */}

//               <div className="mt-12">
//                 <Link
//                   href="/contact"
//                   onClick={() => setOpen(false)}
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-2xl
//                     bg-gradient-to-r
//                     from-[#0A6EBD]
//                     to-[#15176B]
//                     py-4
//                     text-sm
//                     font-semibold
//                     text-white
//                     shadow-[0_15px_35px_rgba(10,110,189,0.20)]
//                   "
//                 >
//                   Contact Now

//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

type NavLink = {
  title: string;
  href: string;
  dropdown?: {
    title: string;
    href: string;
  }[];
};

/* =========================================================
   NAVIGATION DATA
========================================================= */

const navLinks: NavLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",

    dropdown: [
      {
        title: "Biofloc Fish Farming",
        href: "/services/biofloc-fish-farming",
      },
      {
        title: "RAS Aquaculture Systems",
        href: "/services/ras-aquaculture-systems",
      },
      {
        title: "Industrial Water Treatment",
        href: "/services/industrial-water-treatment-solutions",
      },
      {
        title: "Advanced Aquaculture Systems",
        href: "/services/advanced-aquaculture-systems",
      },
      {
        title: "Shrimp Farming Setup",
        href: "/services/shrimp-farming-setup",
      },
      {
        title: "Hatchery Design Solutions",
        href: "/services/hatchery-design-solutions",
      },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Downloads",
    href: "/downloads",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Blogs",
    href: "/blogs1",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<number | null>(null);

  /* =======================================================
     SCROLL
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =======================================================
     DISABLE BODY SCROLL WHEN MOBILE MENU OPEN
  ======================================================= */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ${scrolled ? "py-2" : "py-3"}
        `}
      >
        {/* =================================================
            IMPORTANT:
            Wider than max-w-7xl because navbar has many links
        ================================================= */}

        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-3
            sm:px-4
            xl:px-5
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className={`
              relative
              overflow-visible
              rounded-[24px]
              border
              transition-all
              duration-300

              ${
                scrolled
                  ? `
                    border-[#E5E7EB]
                    bg-white/95
                    shadow-[0_15px_45px_rgba(2,27,47,0.10)]
                    backdrop-blur-xl
                  `
                  : `
                    border-white/60
                    bg-white/90
                    shadow-[0_12px_40px_rgba(2,27,47,0.08)]
                    backdrop-blur-xl
                  `
              }
            `}
          >
            {/* BACKGROUND */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                overflow-hidden
                rounded-[24px]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-[#0A6EBD]/[0.035]
                  via-white
                  to-[#63C96A]/[0.035]
                "
              />

              <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10,110,189,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.08) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* =================================================
                NAVBAR CONTENT
            ================================================= */}

            <div
              className={`
                relative
                flex
                items-center
                justify-between
                gap-4
                px-4
                transition-all
                duration-300
                xl:px-5
                2xl:px-6

                ${
                  scrolled
                    ? "py-2.5"
                    : "py-3"
                }
              `}
            >
              {/* =================================================
                  LOGO
              ================================================= */}

              <Link
                href="/"
                className="
                  flex
                  shrink-0
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    h-[58px]
                    w-[64px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[16px]
                    bg-white
                    p-1.5
                    shadow-[0_8px_22px_rgba(2,27,47,0.12)]
                  "
                >
                  <Image
                    src="/logo/logo1.png"
                    alt="ARK AQUATECH"
                    width={52}
                    height={52}
                    priority
                    className="
                      h-full
                      w-full
                      object-contain
                    "
                  />
                </div>

                {/* BRAND TEXT

                    Hidden on normal XL desktop because there
                    isn't enough room for 9 links + CTA.

                    Shows on 2XL / large monitors.
                */}

                <div className="hidden 2xl:block">
                  <h1
                    className="
                      whitespace-nowrap
                      text-[18px]
                      font-black
                      tracking-[-0.02em]
                      text-[#021B2F]
                    "
                  >
                    ARK AQUATECH
                  </h1>

                  <p
                    className="
                      mt-0.5
                      whitespace-nowrap
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.23em]
                      text-[#0A6EBD]
                    "
                  >
                    Smart Aquaculture
                  </p>
                </div>
              </Link>

              {/* =================================================
                  DESKTOP NAVIGATION

                  XL and above only.
              ================================================= */}

              <nav
                className="
                  hidden
                  min-w-0
                  flex-1
                  items-center
                  justify-center
                  gap-[18px]
                  xl:flex
                  2xl:gap-6
                "
              >
                {navLinks.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative shrink-0"
                  >
                    <a
  href={item.href}
  className="
    relative
    flex
    items-center
    gap-1
    whitespace-nowrap
    py-3
    text-[13px]
    font-semibold
    text-[#374151]
    transition-colors
    duration-300
    hover:text-[#0A6EBD]
    2xl:text-[14px]
  "
>
                      {item.title}

                      {item.dropdown && (
                        <ChevronDown
                          className="
                            h-3.5
                            w-3.5
                            transition-transform
                            duration-300
                            group-hover:rotate-180
                          "
                        />
                      )}

                      {/* UNDERLINE */}

                      <span
                        className="
                          absolute
                          bottom-[4px]
                          left-0
                          h-[2px]
                          w-0
                          rounded-full
                          bg-gradient-to-r
                          from-[#0A6EBD]
                          to-[#63C96A]
                          transition-all
                          duration-300
                          group-hover:w-full
                        "
                      />
                </a>

                    {/* =========================================
                        SERVICES DROPDOWN
                    ========================================= */}

                    {item.dropdown && (
                      <div
                        className="
                          invisible
                          absolute
                          left-1/2
                          top-full
                          z-[100]
                          w-[340px]
                          -translate-x-1/2
                          translate-y-4
                          pt-4
                          opacity-0
                          transition-all
                          duration-300

                          group-hover:visible
                          group-hover:translate-y-0
                          group-hover:opacity-100
                        "
                      >
                        <div
                          className="
                            rounded-[24px]
                            border
                            border-[#E5E7EB]
                            bg-white
                            p-3
                            shadow-[0_25px_70px_rgba(2,27,47,0.14)]
                          "
                        >
                          <div className="mb-2 px-3 pt-2">
                            <span
                              className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#0A6EBD]
                              "
                            >
                              Our Services
                            </span>
                          </div>

                          <div className="space-y-1">
                            {item.dropdown.map(
                              (service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  className="
                                    group/item
                                    flex
                                    items-center
                                    justify-between
                                    gap-4
                                    rounded-xl
                                    px-3
                                    py-3
                                    transition-all
                                    duration-300
                                    hover:bg-[#F4F8FF]
                                  "
                                >
                                  <h4
                                    className="
                                      text-[13px]
                                      font-semibold
                                      text-[#021B2F]
                                      transition-colors
                                      duration-300
                                      group-hover/item:text-[#0A6EBD]
                                    "
                                  >
                                    {service.title}
                                  </h4>

                                  <ArrowRight
                                    className="
                                      h-3.5
                                      w-3.5
                                      shrink-0
                                      -translate-x-1
                                      text-[#0A6EBD]
                                      opacity-0
                                      transition-all
                                      duration-300
                                      group-hover/item:translate-x-0
                                      group-hover/item:opacity-100
                                    "
                                  />
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* =================================================
                  CTA
              ================================================= */}

              <div
                className="
                  hidden
                  shrink-0
                  items-center
                  xl:flex
                "
              >
                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                    rounded-full
                    bg-gradient-to-r
                    from-[#0A6EBD]
                    to-[#15176B]
                    px-5
                    py-3
                    text-[12px]
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(10,110,189,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_14px_32px_rgba(10,110,189,0.30)]
                    2xl:px-6
                    2xl:text-[13px]
                  "
                >
                  Get Free Quote

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

              {/* =================================================
                  MOBILE / TABLET BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open navigation menu"
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#E5E7EB]
                  bg-white
                  text-[#021B2F]
                  shadow-md
                  transition-all
                  hover:bg-[#F4F8FF]
                  xl:hidden
                "
              >
                <Menu size={21} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* =====================================================
          MOBILE / TABLET MENU
      ===================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              bg-[#021B2F]/40
              backdrop-blur-sm
              xl:hidden
            "
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setOpen(false);
              }
            }}
          >
            {/* MENU PANEL */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                right-0
                top-0
                h-full
                w-full
                max-w-[460px]
                overflow-y-auto
                bg-white
                shadow-[-20px_0_60px_rgba(2,27,47,0.18)]
              "
            >
              <div className="min-h-full px-5 py-5 sm:px-7">
                {/* ===========================================
                    MOBILE HEADER
                =========================================== */}

                <div className="flex items-center justify-between gap-4">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-[54px]
                        w-[58px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[15px]
                        bg-white
                        p-1.5
                        shadow-lg
                      "
                    >
                      <Image
                        src="/logo/logo1.png"
                        alt="ARK AQUATECH"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <h2
                        className="
                          truncate
                          text-[16px]
                          font-black
                          text-[#021B2F]
                        "
                      >
                        ARK AQUATECH
                      </h2>

                      <p
                        className="
                          mt-0.5
                          whitespace-nowrap
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#0A6EBD]
                        "
                      >
                        Smart Aquaculture
                      </p>
                    </div>
                  </Link>

                  {/* CLOSE */}

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close navigation menu"
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#021B2F]
                      text-white
                      shadow-lg
                    "
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* ===========================================
                    MENU TITLE
                =========================================== */}

                <div className="mt-10">
                  <span
                    className="
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#0A6EBD]
                    "
                  >
                    Navigation
                  </span>

                  <h3
                    className="
                      mt-2
                      text-[26px]
                      font-black
                      tracking-[-0.03em]
                      text-[#021B2F]
                    "
                  >
                    Explore ARK AQUATECH
                  </h3>
                </div>

                {/* ===========================================
                    MOBILE NAV
                =========================================== */}

                <div className="mt-7 space-y-2">
                  {navLinks.map((item, index) => (
                    <div
                      key={item.title}
                      className="
                        overflow-hidden
                        rounded-[18px]
                        border
                        border-[#E5E7EB]
                        bg-white
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                        "
                      >
                        <Link
                          href={item.href}
                          onClick={() =>
                            setOpen(false)
                          }
                          className="
                            flex-1
                            px-4
                            py-3.5
                            text-[15px]
                            font-bold
                            text-[#021B2F]
                          "
                        >
                          {item.title}
                        </Link>

                        {item.dropdown && (
                          <button
                            type="button"
                            aria-label={`Toggle ${item.title} submenu`}
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === index
                                  ? null
                                  : index
                              )
                            }
                            className="
                              mr-2
                              flex
                              h-9
                              w-9
                              items-center
                              justify-center
                              rounded-xl
                              bg-[#F4F8FF]
                              text-[#0A6EBD]
                            "
                          >
                            <ChevronDown
                              className={`
                                h-4
                                w-4
                                transition-transform
                                duration-300

                                ${
                                  openDropdown === index
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                            />
                          </button>
                        )}
                      </div>

                      {/* =====================================
                          MOBILE DROPDOWN
                      ===================================== */}

                      <AnimatePresence>
                        {item.dropdown &&
                          openDropdown === index && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="overflow-hidden"
                            >
                              <div
                                className="
                                  space-y-1
                                  border-t
                                  border-[#E5E7EB]
                                  bg-[#F8FAFC]
                                  p-2
                                "
                              >
                                {item.dropdown.map(
                                  (service) => (
                                    <Link
                                      key={
                                        service.href
                                      }
                                      href={
                                        service.href
                                      }
                                      onClick={() =>
                                        setOpen(false)
                                      }
                                      className="
                                        flex
                                        items-center
                                        justify-between
                                        gap-3
                                        rounded-xl
                                        px-3
                                        py-3
                                        text-[12px]
                                        font-semibold
                                        text-[#374151]
                                        transition-all
                                        hover:bg-white
                                        hover:text-[#0A6EBD]
                                      "
                                    >
                                      {
                                        service.title
                                      }

                                      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                                    </Link>
                                  )
                                )}
                              </div>
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                {/* ===========================================
                    MOBILE CTA
                =========================================== */}

                <div
                  className="
                    mt-7
                    rounded-[22px]
                    bg-[#F4F8FF]
                    p-4
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#0A6EBD]
                    "
                  >
                    Start Your Project
                  </p>

                  <p
                    className="
                      mt-2
                      text-[13px]
                      leading-6
                      text-slate-500
                    "
                  >
                    Talk with our aquaculture team
                    about your project requirements.
                  </p>

                  <Link
                    href="/contact"
                    onClick={() =>
                      setOpen(false)
                    }
                    className="
                      group
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-[#0A6EBD]
                      to-[#15176B]
                      py-3.5
                      text-[13px]
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(10,110,189,0.20)]
                    "
                  >
                    Get Free Quote

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}