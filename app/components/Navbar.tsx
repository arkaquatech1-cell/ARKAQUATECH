"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Gallery", href: "/gallery" },
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
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#07131d]/90
              backdrop-blur-xl
              shadow-[0_10px_40px_rgba(0,0,0,0.18)]
            "
          >
            {/* SOFT BG */}

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.04] via-transparent to-emerald-500/[0.04]" />

            <div className="relative flex items-center justify-between px-5 lg:px-8 py-4">
              {/* LOGO */}

              <Link
                href="/"
                className="flex items-center gap-3"
              >
                <Image
                  src="/logo/logo1.png"
                  alt="ARK AQUATECH"
                  width={52}
                  height={52}
                  className="object-contain"
                />

                <div className="hidden sm:block">
                  <h1
                    className="
                      text-white
                      text-[15px]
                      lg:text-[17px]
                      font-semibold
                      tracking-tight
                    "
                  >
                    ARK AQUATECH
                  </h1>

                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.22em]
                      text-cyan-100/60
                      mt-0.5
                      font-medium
                    "
                  >
                    Smart Aquaculture Solutions
                  </p>
                </div>
              </Link>

              {/* DESKTOP MENU */}

              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="
                      relative
                      text-[14px]
                      font-medium
                      text-white/75
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    {item.title}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-1.5
                        h-[1.5px]
                        w-0
                        rounded-full
                        bg-cyan-300
                        transition-all
                        duration-300
                        hover:w-full
                      "
                    />
                  </Link>
                ))}
              </nav>

              {/* CTA */}

              <div className="hidden lg:flex items-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-6
                    py-3
                    bg-cyan-300
                    text-[#07131d]
                    text-[13px]
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-cyan-200
                  "
                >
                  Get Quote

                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              {/* MOBILE BUTTON */}

              <button
                onClick={() => setOpen(true)}
                className="
                  lg:hidden
                  w-10
                  h-10
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  flex
                  items-center
                  justify-center
                  text-white
                "
              >
                <Menu size={20} />
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
            className="fixed inset-0 z-[100] bg-[#07131d]"
          >
            <div className="flex flex-col h-full p-6">
              {/* TOP */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo/logo1.png"
                    alt="logo"
                    width={44}
                    height={44}
                  />

                  <div>
                    <h2 className="text-base font-semibold text-white">
                      ARK AQUATECH
                    </h2>

                    <p className="text-[10px] tracking-[0.2em] uppercase text-cyan-100/60">
                      Smart Aquaculture
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* LINKS */}

              <div className="flex flex-col gap-6 mt-16">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                        text-[28px]
                        font-semibold
                        text-white
                        tracking-tight
                      "
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* FOOTER */}

              <div className="mt-auto">
                <button
                  className="
                    w-full
                    py-4
                    rounded-2xl
                    bg-cyan-300
                    text-[#07131d]
                    text-sm
                    font-semibold
                  "
                >
                  Contact Now
                </button>

                <div className="mt-6 space-y-1 text-sm text-cyan-100/60">
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