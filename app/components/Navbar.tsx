// components/Navbar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const navLinks = [
  {
    title: "Home",
    href: "/Pages/Home",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
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
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          {/* MAIN CONTAINER */}

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/10
              backdrop-blur-2xl
            "
          >
            {/* SEA BACKGROUND */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#072b43]/95
                via-[#0c4a6e]/90
                to-[#065f46]/90
              "
            />

            {/* WATER LIGHT */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.08]
                bg-[radial-gradient(circle_at_top,white,transparent_60%)]
              "
            />

            {/* GLOW LEFT */}

            <div className="absolute -top-28 left-[-120px] w-[350px] h-[350px] bg-cyan-300/20 blur-[130px] rounded-full animate-pulse" />

            {/* GLOW RIGHT */}

            <div className="absolute -bottom-28 right-[-120px] w-[350px] h-[350px] bg-emerald-300/20 blur-[130px] rounded-full animate-pulse" />

            {/* WATER OVERLAY */}

            <div className="absolute inset-0 bg-white/[0.03]" />

            {/* CONTENT */}

            <div className="relative z-10 flex items-center justify-between px-6 lg:px-10 py-5">
              {/* LOGO */}

              <Link
                href="/"
                className="flex items-center gap-4 group"
              >
                {/* LOGO */}

                <motion.div
                  whileHover={{
                    rotate: 5,
                    scale: 1.06,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="relative"
                >
                  {/* LOGO GLOW */}

                  <div className="absolute inset-0 bg-cyan-300/40 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  <Image
                    src="/logo/logo1.png"
                    alt="ARK AQUATECH"
                    width={82}
                    height={82}
                    className="relative object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                  />
                </motion.div>

                {/* TEXT */}

                <div className="hidden sm:block">
                  <h2
                    className="
                      text-white
                      text-[24px]
                      lg:text-[38px]
                      font-black
                      tracking-tight
                      leading-none
                    "
                  >
                    ARK AQUATECH
                  </h2>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      lg:text-[13px]
                      uppercase
                      tracking-[0.45em]
                      text-cyan-100/80
                      font-semibold
                    "
                  >
                    SMART AQUACULTURE
                  </p>
                </div>
              </Link>

              {/* DESKTOP MENU */}

              <nav className="hidden lg:flex items-center gap-12">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="
                      relative
                      text-[15px]
                      font-semibold
                      tracking-wide
                      text-white/75
                      hover:text-white
                      transition-all
                      duration-300
                      group
                    "
                  >
                    {item.title}

                    {/* UNDERLINE */}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-3
                        h-[2px]
                        w-0
                        rounded-full
                        bg-gradient-to-r
                        from-cyan-300
                        via-sky-400
                        to-emerald-300
                        transition-all
                        duration-500
                        group-hover:w-full
                      "
                    />

                    {/* GLOW */}

                    <span
                      className="
                        absolute
                        inset-0
                        rounded-full
                        opacity-0
                        group-hover:opacity-100
                        blur-xl
                        transition-all
                        duration-500
                        bg-cyan-300/10
                      "
                    />
                  </Link>
                ))}
              </nav>

              {/* BUTTON */}

              <div className="hidden lg:flex items-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-full
                    p-[1.5px]
                  "
                >
                  {/* BORDER */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-300
                      via-sky-400
                      to-emerald-300
                    "
                  />

                  {/* INNER */}

                  <div
                    className="
                      relative
                      flex
                      items-center
                      gap-3
                      px-8
                      py-4
                      rounded-full
                      bg-[#03131d]
                      text-white
                      text-[15px]
                      font-bold
                      tracking-wide
                      transition-all
                      duration-500
                      group-hover:bg-transparent
                    "
                  >
                    <span className="relative z-10">
                      Get Quote
                    </span>

                    <ArrowRight
                      className="
                        w-5
                        h-5
                        group-hover:translate-x-1
                        transition-all
                        duration-300
                      "
                    />

                    {/* SHINE */}

                    <div
                      className="
                        absolute
                        top-0
                        left-[-120%]
                        w-[100px]
                        h-full
                        rotate-12
                        bg-white/20
                        blur-xl
                        transition-all
                        duration-700
                        group-hover:left-[120%]
                      "
                    />
                  </div>
                </motion.button>
              </div>

              {/* MOBILE BUTTON */}

              <button
                onClick={() => setOpen(true)}
                className="
                  lg:hidden
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <Menu size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%",
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: "100%",
            }}
            transition={{
              duration: 0.5,
            }}
            className="fixed inset-0 z-[100] overflow-hidden"
          >
            {/* BG */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#062033] via-[#0c4a6e] to-[#064e3b]" />

            {/* GLOW */}

            <div className="absolute top-[-150px] right-[-150px] w-[350px] h-[350px] bg-cyan-300/30 blur-[120px] rounded-full" />

            <div className="absolute bottom-[-150px] left-[-150px] w-[350px] h-[350px] bg-emerald-300/30 blur-[120px] rounded-full" />

            {/* CONTENT */}

            <div className="relative h-full flex flex-col justify-between p-8">
              {/* TOP */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={60}
                    height={60}
                  />

                  <div>
                    <h2 className="text-2xl font-black text-white">
                      ARK AQUATECH
                    </h2>

                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
                      SMART AQUACULTURE
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <X />
                </button>
              </div>

              {/* LINKS */}

              <div className="flex flex-col gap-8 mt-10">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                        text-4xl
                        font-black
                        tracking-tight
                        text-white
                        hover:text-cyan-200
                        transition-all
                        duration-300
                      "
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* FOOTER */}

              <div className="space-y-6">
                <button
                  className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-cyan-300
                    via-sky-400
                    to-emerald-300
                    text-black
                    font-black
                    text-lg
                    shadow-[0_0_50px_rgba(34,211,238,0.35)]
                  "
                >
                  Contact Now
                </button>

                <div className="text-sm text-cyan-100/70 space-y-2">
                  <p>+91 9063289228</p>

                  <p>arkaquatech@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}