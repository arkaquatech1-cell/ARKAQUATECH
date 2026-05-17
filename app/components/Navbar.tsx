




// "use client";

// import Link from "next/link";
// import Image from "next/image";

// import { useEffect, useState } from "react";

// import { AnimatePresence, motion } from "framer-motion";

// import {
//   Menu,
//   X,
//   ArrowRight,
// } from "lucide-react";

// const navLinks = [
//   { title: "Home", href: "/" },
//   { title: "About", href: "/about" },
//   { title: "Services", href: "/services" },
//   { title: "Projects", href: "/projects" },
//   { title: "Gallery", href: "/gallery" },
//   { title: "Downloads", href: "/downloads" },
//   { title: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () =>
//       window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* HEADER */}

//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           scrolled ? "py-2" : "py-4"
//         }`}
//       >
//         <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className={`
//               relative
//               overflow-hidden
//               rounded-[26px]
//               border
//               transition-all
//               duration-300
//               ${
//                 scrolled
//                   ? "border-[#15176B]/10 bg-white/80 shadow-[0_15px_45px_rgba(21,23,107,0.10)] backdrop-blur-xl"
//                   : "border-white/30 bg-white/70 backdrop-blur-xl"
//               }
//             `}
//           >
//             {/* PREMIUM BG */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-gradient-to-r
//                 from-[#15176B]/[0.03]
//                 via-transparent
//                 to-[#63C96A]/[0.04]
//               "
//             />

//             {/* GRID */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 opacity-[0.04]
//               "
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(21,23,107,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(21,23,107,0.08) 1px, transparent 1px)",
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
//                 lg:px-8
//                 py-4
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
//                       text-[16px]
//                       lg:text-[18px]
//                       font-bold
//                       tracking-tight
//                       text-[#0F172A]
//                     "
//                   >
//                     ARK AQUATECH
//                   </h1>

//                   <p
//                     className="
//                       mt-0.5
//                       text-[10px]
//                       uppercase
//                       tracking-[0.24em]
//                       font-semibold
//                       text-[#15176B]
//                     "
//                   >
//                    We Made Aquaculture Simple
//                   </p>
//                 </div>
//               </Link>

//               {/* DESKTOP NAV */}

//               <nav className="hidden lg:flex items-center gap-8">
//                 {navLinks.map((item, index) => (
//                   <Link
//                     key={index}
//                     href={item.href}
//                     className="
//                       group
//                       relative
//                       text-[14px]
//                       font-semibold
//                       text-slate-700
//                       transition-all
//                       duration-300
//                       hover:text-[#15176B]
//                     "
//                   >
//                     {item.title}

//                     <span
//                       className="
//                         absolute
//                         left-0
//                         -bottom-1.5
//                         h-[2px]
//                         w-0
//                         rounded-full
//                         bg-gradient-to-r
//                         from-[#15176B]
//                         to-[#63C96A]
//                         transition-all
//                         duration-300
//                         group-hover:w-full
//                       "
//                     />
//                   </Link>
//                 ))}
//               </nav>

//               {/* CTA */}

//               <div className="hidden lg:flex items-center">

//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                 >
//                   <Link
//                     href="/contact"
//                     className="
//                       group
//                       flex
//                       items-center
//                       gap-2
//                       rounded-full
//                       bg-gradient-to-r
//                       from-[#15176B]
//                       to-[#63C96A]
//                       px-7
//                       py-3.5
//                       text-[13px]
//                       font-semibold
//                       text-white
//                       shadow-[0_12px_35px_rgba(21,23,107,0.16)]
//                       transition-all
//                       duration-300
//                     "
//                   >
//                     Get Free Quote

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
//                 </motion.div>
//               </div>

//               {/* MOBILE BUTTON */}

//               <button
//                 onClick={() => setOpen(true)}
//                 className="
//                   lg:hidden
//                   flex
//                   h-11
//                   w-11
//                   items-center
//                   justify-center
//                   rounded-2xl
//                   border
//                   border-[#15176B]/10
//                   bg-white/80
//                   text-[#15176B]
//                   shadow-lg
//                   backdrop-blur-xl
//                 "
//               >
//                 <Menu size={21} />
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </header>

//       {/* MOBILE MENU */}

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, x: "100%" }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: "100%" }}
//             transition={{ duration: 0.35 }}
//             className="
//               fixed
//               inset-0
//               z-[100]
//               bg-gradient-to-br
//               from-[#f5f7ff]
//               via-[#eef4ff]
//               to-[#f3fff6]
//             "
//           >
//             {/* BG */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 opacity-[0.04]
//               "
//               style={{
//                 backgroundImage:
//                   "linear-gradient(rgba(21,23,107,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(21,23,107,0.08) 1px, transparent 1px)",
//                 backgroundSize: "60px 60px",
//               }}
//             />

//             <div className="relative flex h-full flex-col p-6">

//               {/* TOP */}

//               <div className="flex items-center justify-between">

//                 <div className="flex items-center gap-3">

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
//                       width={44}
//                       height={44}
//                     />
//                   </div>

//                   <div>
//                     <h2
//                       className="
//                         text-base
//                         font-bold
//                         text-[#0F172A]
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
//                         text-[#15176B]
//                       "
//                     >
//                       Smart Aquaculture
//                     </p>
//                   </div>
//                 </div>

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
//                     border-[#15176B]/10
//                     bg-white/80
//                     text-[#15176B]
//                     shadow-lg
//                   "
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               {/* NAV LINKS */}

//               <div className="mt-20 flex flex-col gap-7">

//                 {navLinks.map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{
//                       opacity: 0,
//                       y: 20,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     transition={{
//                       delay: index * 0.06,
//                     }}
//                   >
//                     <Link
//                       href={item.href}
//                       onClick={() => setOpen(false)}
//                       className="
//                         text-[34px]
//                         font-black
//                         tracking-[-0.04em]
//                         text-[#0F172A]
//                         transition-all
//                         duration-300
//                         hover:text-[#63C96A]
//                       "
//                     >
//                       {item.title}
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* FOOTER */}

//               <div className="mt-auto">

//                 <Link
//                   href="/contact"
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     justify-center
//                     rounded-2xl
//                     bg-gradient-to-r
//                     from-[#15176B]
//                     to-[#63C96A]
//                     py-4
//                     text-sm
//                     font-semibold
//                     text-white
//                     shadow-[0_15px_35px_rgba(21,23,107,0.16)]
//                   "
//                 >
//                   Contact Now
//                 </Link>

//                 {/* CONTACT INFO */}

//                 <div
//                   className="
//                     mt-7
//                     space-y-2
//                     rounded-3xl
//                     border
//                     border-[#15176B]/10
//                     bg-white/70
//                     p-5
//                     text-sm
//                     shadow-lg
//                     backdrop-blur-xl
//                   "
//                 >
//                   <p className="font-medium text-[#0F172A]">
//                     +91 9063289228
//                   </p>

//                   <p className="text-slate-600">
//                     arkaquatech@gmail.com
//                   </p>

//                   <p className="text-slate-600">
//                     Smart Aquaculture &
//                     Water Engineering Solutions
//                   </p>
//                 </div>
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
  Fish,
} from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Gallery", href: "/gallery" },
  { title: "Downloads", href: "/downloads" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

          {/* NAVBAR */}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`
              relative
              overflow-hidden
              rounded-[28px]
              border
              transition-all
              duration-300
              ${
                scrolled
                  ? "border-[#15176B]/10 bg-white/80 shadow-[0_15px_45px_rgba(21,23,107,0.10)] backdrop-blur-xl"
                  : "border-white/30 bg-white/70 backdrop-blur-xl"
              }
            `}
          >
            {/* WATER FLOW EFFECT */}

            <div className="absolute inset-0 overflow-hidden">

              {/* WAVE 1 */}

              <motion.div
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[120px]
                  w-[200%]
                  opacity-[0.08]
                "
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 0%, #38bdf8 0%, transparent 60%)",
                }}
              />

              {/* WAVE 2 */}

              <motion.div
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 24,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-0
                  left-0
                  h-[120px]
                  w-[200%]
                  opacity-[0.05]
                "
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 50% 100%, #63C96A 0%, transparent 60%)",
                }}
              />

              {/* FLOATING BUBBLES */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="
                  absolute
                  left-[15%]
                  top-[20%]
                  h-3
                  w-3
                  rounded-full
                  bg-cyan-300/40
                  blur-[1px]
                "
              />

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                }}
                className="
                  absolute
                  right-[18%]
                  bottom-[25%]
                  h-4
                  w-4
                  rounded-full
                  bg-emerald-300/30
                  blur-[1px]
                "
              />

              {/* MOVING FISH */}

              <motion.div
                animate={{
                  x: ["-10%", "110%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 18,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-[52%]
                  text-cyan-400/20
                "
              >
                <Fish className="h-7 w-7" />
              </motion.div>

              {/* SECOND FISH */}

              <motion.div
                animate={{
                  x: ["110%", "-10%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 24,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-[28%]
                  text-emerald-400/20
                  scale-x-[-1]
                "
              >
                <Fish className="h-6 w-6" />
              </motion.div>
            </div>

            {/* PREMIUM BG */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-400/[0.05]
                via-[#15176B]/[0.03]
                to-emerald-400/[0.05]
              "
            />

            {/* GRID */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.04]
              "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(21,23,107,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(21,23,107,0.08) 1px, transparent 1px)",
                backgroundSize: "55px 55px",
              }}
            />

            {/* CONTENT */}

            <div
              className="
                relative
                flex
                items-center
                justify-between
                px-5
                lg:px-8
                py-4
              "
            >
              {/* LOGO */}

              <Link
                href="/"
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="
                    rounded-2xl
                    bg-white
                    p-2
                    shadow-lg
                  "
                >
                  <Image
                    src="/logo/logo1.png"
                    alt="ARK AQUATECH"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </motion.div>

                <div className="hidden sm:block">
                  <h1
                    className="
                      text-[16px]
                      lg:text-[18px]
                      font-bold
                      tracking-tight
                      text-[#0F172A]
                    "
                  >
                    ARK AQUATECH
                  </h1>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      uppercase
                      tracking-[0.24em]
                      font-semibold
                      text-[#15176B]
                    "
                  >
                    We Made Aquaculture Simple
                  </p>
                </div>
              </Link>

              {/* DESKTOP NAV */}

              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="
                      group
                      relative
                      text-[14px]
                      font-semibold
                      text-slate-700
                      transition-all
                      duration-300
                      hover:text-[#15176B]
                    "
                  >
                    {item.title}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1.5
                        h-[2px]
                        w-0
                        rounded-full
                        bg-gradient-to-r
                        from-[#15176B]
                        to-[#63C96A]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                ))}
              </nav>

              {/* CTA */}

              <div className="hidden lg:flex items-center">

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="/contact"
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-[#15176B]
                      to-[#63C96A]
                      px-7
                      py-3.5
                      text-[13px]
                      font-semibold
                      text-white
                      shadow-[0_12px_35px_rgba(21,23,107,0.16)]
                      transition-all
                      duration-300
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
                </motion.div>
              </div>

              {/* MOBILE BUTTON */}

              <button
                onClick={() => setOpen(true)}
                className="
                  lg:hidden
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#15176B]/10
                  bg-white/80
                  text-[#15176B]
                  shadow-lg
                  backdrop-blur-xl
                "
              >
                <Menu size={21} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-gradient-to-br
              from-[#f5f7ff]
              via-[#eef4ff]
              to-[#f3fff6]
            "
          >
            <div className="relative flex h-full flex-col p-6">

              {/* TOP */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      rounded-2xl
                      bg-white
                      p-2
                      shadow-lg
                    "
                  >
                    <Image
                      src="/logo/logo1.png"
                      alt="logo"
                      width={44}
                      height={44}
                    />
                  </div>

                  <div>
                    <h2
                      className="
                        text-base
                        font-bold
                        text-[#0F172A]
                      "
                    >
                      ARK AQUATECH
                    </h2>

                    <p
                      className="
                        mt-0.5
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        font-semibold
                        text-[#15176B]
                      "
                    >
                      Smart Aquaculture
                    </p>
                  </div>
                </div>

                {/* CLOSE */}

                <button
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#15176B]/10
                    bg-white/80
                    text-[#15176B]
                    shadow-lg
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* NAV LINKS */}

              <div className="mt-20 flex flex-col gap-7">

                {navLinks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                        text-[34px]
                        font-black
                        tracking-[-0.04em]
                        text-[#0F172A]
                        transition-all
                        duration-300
                        hover:text-[#63C96A]
                      "
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* FOOTER */}

              <div className="mt-auto">

                <Link
                  href="/contact"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#15176B]
                    to-[#63C96A]
                    py-4
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_15px_35px_rgba(21,23,107,0.16)]
                  "
                >
                  Contact Now
                </Link>

                {/* CONTACT INFO */}

                <div
                  className="
                    mt-7
                    space-y-2
                    rounded-3xl
                    border
                    border-[#15176B]/10
                    bg-white/70
                    p-5
                    text-sm
                    shadow-lg
                    backdrop-blur-xl
                  "
                >
                  <p className="font-medium text-[#0F172A]">
                    +91 9063289228
                  </p>

                  <p className="text-slate-600">
                    arkaquatech@gmail.com
                  </p>

                  <p className="text-slate-600">
                    Smart Aquaculture &
                    Water Engineering Solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}