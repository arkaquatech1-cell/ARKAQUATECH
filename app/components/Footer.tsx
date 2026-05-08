// components/Footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Waves,
  Fish,
  Sparkles,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
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

const services = [
  "Biofloc Technology",
  "RAS Systems",
  "Fish Farming",
  "Shrimp Farming",
  "Crab Farming",
  "Water Treatment",
];

const socialLinks = [
  {
    icon: <FaFacebookF size={18} />,
    href: "#",
  },

  {
    icon: <FaInstagram size={18} />,
    href: "#",
  },

  {
    icon: <FaLinkedinIn size={18} />,
    href: "#",
  },

  {
    icon: <FaYoutube size={18} />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020817] border-t border-white/10">
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">
        {/* MAIN GRADIENT */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0b3b5a_0%,#020817_50%,#010b12_100%)]" />

        {/* CYAN GLOW */}

        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
            absolute
            top-[-180px]
            left-[-180px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-400/10
            blur-[150px]
          "
        />

        {/* EMERALD GLOW */}

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-[-180px]
            right-[-180px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-emerald-400/10
            blur-[150px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-10">
        {/* TOP CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            p-10
            md:p-14
            mb-24
          "
        >
          {/* LIGHT */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}

            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-cyan-300/15
                  bg-white/[0.04]
                  px-5
                  py-2
                "
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />

                <span className="text-cyan-100 text-sm font-semibold uppercase tracking-wide">
                  Smart Aquaculture Solutions
                </span>
              </div>

              <h2
                className="
                  mt-6
                  text-[42px]
                  md:text-[58px]
                  leading-[0.95]
                  tracking-[-0.04em]
                  font-black
                  text-white
                "
              >
                Sustainable Marine
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Infrastructure Experts
                </span>
              </h2>
            </div>

            {/* RIGHT */}

            <div>
              <p
                className="
                  text-lg
                  leading-[2]
                  text-cyan-100/70
                "
              >
                ARK AQUATECH delivers advanced Biofloc
                technology, RAS systems, fish farming,
                shrimp farming, aquaponics, industrial water
                treatment, and sustainable aquaculture
                infrastructure solutions across India.
              </p>

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  mt-8
                  rounded-full
                  px-8
                  py-4
                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-400
                  to-emerald-300
                  text-[#03131d]
                  font-black
                  tracking-wide
                  shadow-[0_15px_50px_rgba(34,211,238,0.35)]
                "
              >
                Contact Us

                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* GRID */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">
          {/* COMPANY */}

          <div>
            <Link
              href="/"
              className="flex items-center gap-5"
            >
              {/* LOGO */}

              <div
                className="
                  relative
                  w-[78px]
                  h-[78px]
                  rounded-3xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  shadow-[0_0_40px_rgba(34,211,238,0.15)]
                "
              >
                <Image
                  src="/logo.png"
                  alt="ARK AQUATECH"
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* TEXT */}

              <div>
                <h2
                  className="
                    text-[28px]
                    font-black
                    text-white
                    leading-none
                  "
                >
                  ARK AQUATECH
                </h2>

                <p
                  className="
                    mt-2
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-cyan-100/70
                    font-semibold
                  "
                >
                  Smart Aquaculture
                </p>
              </div>
            </Link>

            {/* SEO CONTENT */}

            <p
              className="
                mt-8
                text-cyan-100/70
                leading-[2]
              "
            >
              ARK AQUATECH specializes in Biofloc technology,
              RAS systems, fish farming, shrimp farming,
              aquaponics, industrial RO plants, water
              treatment systems, and sustainable aquaculture
              infrastructure solutions.
            </p>

            {/* SOCIAL */}

            <div className="flex items-center gap-4 mt-10">
              {socialLinks.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                >
                  <Link
                    href={item.href}
                    className="
                      flex
                      items-center
                      justify-center
                      w-14
                      h-14
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      backdrop-blur-2xl
                      text-cyan-100/70
                      hover:text-white
                      hover:border-cyan-300/40
                      hover:bg-cyan-300/10
                      transition-all
                      duration-300
                    "
                  >
                    {item.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="text-2xl font-black text-white mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-cyan-100/70
                      hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <ArrowUpRight
                      className="
                        w-4
                        h-4
                        text-cyan-300
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="text-2xl font-black text-white mb-8">
              Our Services
            </h3>

            <ul className="space-y-5">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    text-cyan-100/70
                    hover:text-white
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  <Waves className="w-4 h-4 text-emerald-300" />

                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-2xl font-black text-white mb-8">
              Contact Info
            </h3>

            <div className="space-y-7">
              {/* PHONE */}

              <div className="flex items-start gap-5">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                  "
                >
                  <Phone className="text-cyan-300 w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-cyan-100/50">
                    Phone
                  </p>

                  <p className="text-white font-semibold mt-1">
                    +91 9063289228
                  </p>

                  <p className="text-white font-semibold">
                    +91 7799399555
                  </p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-5">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                  "
                >
                  <Mail className="text-cyan-300 w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-cyan-100/50">
                    Email
                  </p>

                  <p className="text-white font-semibold mt-1 break-all">
                    arkaquatech@gmail.com
                  </p>
                </div>
              </div>

              {/* ADDRESS */}

              <div className="flex items-start gap-5">
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                  "
                >
                  <MapPin className="text-cyan-300 w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-cyan-100/50">
                    Address
                  </p>

                  <p className="text-white font-semibold mt-1 leading-relaxed">
                    Plot No.12, APIIC,
                    <br />
                    Auto Nagar, Mangalagiri,
                    <br />
                    Guntur, Andhra Pradesh - 522503
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-20
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
          "
        >
          <p className="text-cyan-100/50 text-sm text-center md:text-left">
            © 2026 ARK AQUATECH. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="
                text-cyan-100/50
                hover:text-white
                transition-all
                duration-300
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                text-cyan-100/50
                hover:text-white
                transition-all
                duration-300
              "
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}