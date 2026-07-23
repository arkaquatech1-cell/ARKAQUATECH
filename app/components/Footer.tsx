"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Waves,
  Building2,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  "Advanced Aquaculture Projects",
  "Industrial Water Management",
  "Smart Hatchery Engineering",
  "Aquaculture Equipment",
  "Nutrition & Farm Essentials",
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    icon: <FaFacebookF size={15} />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <FaInstagram size={15} />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FaLinkedinIn size={15} />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <FaYoutube size={15} />,
    href: "#",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* =====================================================
          VIDEO BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            brightness-[0.30]
            contrast-[1.1]
            saturate-[1.2]
          "
        >
          <source src="/images/file.mp4" type="video/mp4" />
        </video>

        {/* DARK OCEAN OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#021B2F]/80
            via-[#021B2F]/75
            to-[#010E18]/95
          "
        />

        {/* BLUE GLOW */}

        <div
          className="
            absolute
            -left-[120px]
            -top-[120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-400/20
            blur-[120px]
          "
        />

        {/* GREEN GLOW */}

        <div
          className="
            absolute
            -bottom-[120px]
            -right-[120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-emerald-400/15
            blur-[120px]
          "
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* BLUR */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-black/10
          backdrop-blur-[2px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            FOOTER GRID
        =================================================== */}

        <div
          className="
            grid
            gap-12
            py-16
            md:grid-cols-2
            lg:grid-cols-[1.15fr_0.7fr_0.9fr_1.5fr]
            lg:gap-10
            lg:py-20
          "
        >
          {/* =================================================
              COMPANY
          ================================================= */}

          <div>
            <Link href="/" className="flex items-center gap-4">
              {/* LOGO */}

              <div
                className="
                  relative
                  h-[72px]
                  w-[72px]
                  shrink-0
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                  backdrop-blur-xl
                "
              >
                <Image
                  src="/logo/logo1.png"
                  alt="ARK AQUATECH"
                  fill
                  sizes="72px"
                  className="object-contain p-2"
                />
              </div>

              {/* BRAND */}

              <div>
                <h2 className="text-[24px] font-bold tracking-tight text-white">
                  ARK AQUATECH
                </h2>

                <p
                  className="
                    mt-2
                    text-[10px]
                    uppercase
                    tracking-[0.28em]
                    text-cyan-100/70
                  "
                >
                  Smart Aquaculture
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-sm
                text-[14px]
                leading-[1.9]
                text-white/70
              "
            >
              Technology-driven aquaculture engineering and infrastructure
              solutions for modern commercial fish and shrimp farming,
              combining smart water management, sustainable systems and
              practical field expertise.
            </p>

            {/* SOCIAL */}

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/10
                    text-white/70
                    shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:border-cyan-300/30
                    hover:bg-white/15
                    hover:text-white
                  "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>
            <h3 className="text-[20px] font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-3 h-[2px] w-10 rounded-full bg-cyan-300" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-white/70
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-white
                    "
                  >
                    <ArrowUpRight
                      className="
                        h-3.5
                        w-3.5
                        text-cyan-300
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    />

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <h3 className="text-[20px] font-semibold text-white">
              Our Expertise
            </h3>

            <div className="mt-3 h-[2px] w-10 rounded-full bg-emerald-300" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="
                    flex
                    items-start
                    gap-2
                    text-sm
                    leading-6
                    text-white/70
                  "
                >
                  <Waves className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-300" />

                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <h3 className="text-[20px] font-semibold text-white">
              Contact
            </h3>

            <div className="mt-3 h-[2px] w-10 rounded-full bg-cyan-300" />

            <div className="mt-6 space-y-4">
              {/* =============================================
                  PHONE NUMBERS
              ============================================= */}

              <div
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-300/20
                  hover:bg-white/[0.11]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                  "
                >
                  <Phone className="h-4 w-4 text-cyan-300" />
                </div>

                <div>
                  <p className="text-xs text-white/45">
                    Phone Numbers
                  </p>

                  <div className="mt-1.5 flex flex-col gap-1">
                    <Link
                      href="tel:+919063289228"
                      className="
                        text-sm
                        font-medium
                        text-white
                        transition-colors
                        hover:text-cyan-300
                      "
                    >
                      +91 90632 89228
                    </Link>

                    <Link
                      href="tel:+917799399555"
                      className="
                        text-sm
                        font-medium
                        text-white
                        transition-colors
                        hover:text-cyan-300
                      "
                    >
                      +91 77993 99555
                    </Link>
                  </div>
                </div>
              </div>

              {/* =============================================
                  EMAIL
              ============================================= */}

              <div
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-300/20
                  hover:bg-white/[0.11]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                  "
                >
                  <Mail className="h-4 w-4 text-cyan-300" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/45">
                    Email
                  </p>

                  <Link
                    href="mailto:info@arkaquatech.com"
                    className="
                      mt-1.5
                      block
                      break-all
                      text-sm
                      font-medium
                      text-white
                      transition-colors
                      hover:text-cyan-300
                    "
                  >
                    info@arkaquatech.com
                  </Link>
                </div>
              </div>

              {/* =============================================
                  MAIN OFFICE
              ============================================= */}

              <div
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-300/20
                  hover:bg-white/[0.11]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                  "
                >
                  <MapPin className="h-4 w-4 text-cyan-300" />
                </div>

                <div>
                  <div
                    className="
                      inline-flex
                      rounded-full
                      bg-cyan-400/10
                      px-2.5
                      py-1
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-cyan-300
                      "
                    >
                      Main Office
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">
                    Mangalagiri, Guntur
                  </p>

                  <address
                    className="
                      mt-1.5
                      not-italic
                      text-[12px]
                      leading-[1.8]
                      text-white/65
                    "
                  >
                    Plot No. 12, Autonagar Last Line,
                    <br />
                    Near APIIC, Mangalagiri,
                    <br />
                    Guntur – 522503,
                    <br />
                    Andhra Pradesh
                  </address>
                </div>
              </div>

              {/* =============================================
                  BRANCH OFFICE
              ============================================= */}

              <div
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.08]
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-emerald-300/20
                  hover:bg-white/[0.11]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-400/10
                  "
                >
                  <Building2 className="h-4 w-4 text-emerald-300" />
                </div>

                <div>
                  <div
                    className="
                      inline-flex
                      rounded-full
                      bg-emerald-400/10
                      px-2.5
                      py-1
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-emerald-300
                      "
                    >
                      Branch Office
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-white">
                    Kukatpally, Hyderabad
                  </p>

                  <address
                    className="
                      mt-1.5
                      not-italic
                      text-[12px]
                      leading-[1.8]
                      text-white/65
                    "
                  >
                    12th Floor, Manjeera Trinity,
                    <br />
                    Corporate E-Seva Lane,
                    <br />
                    JNTU–Hitech City Road,
                    <br />
                    Near Manjeera Mall,
                    <br />
                    KPHB Phase 3, Kukatpally,
                    <br />
                    Hyderabad – 500072,
                    <br />
                    Telangana
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            CONTACT STRIP
        =================================================== */}

        <div
          className="
            mb-8
            flex
            flex-col
            gap-5
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.07]
            px-5
            py-5
            backdrop-blur-xl
            sm:flex-row
            sm:items-center
            sm:justify-between
            lg:px-7
          "
        >
          <div>
            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-emerald-300
              "
            >
              Start Your Aquaculture Project
            </p>

            <p className="mt-1.5 text-sm font-semibold text-white">
              Talk to the ARK AQUATECH team today.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="tel:+919063289228"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-5
                py-2.5
                text-xs
                font-bold
                text-[#021B2F]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/10
                px-5
                py-2.5
                text-xs
                font-bold
                text-white
                transition-all
                duration-300
                hover:bg-white/15
              "
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-white/10
            py-6
            text-center
            md:flex-row
          "
        >
          <p className="text-xs text-white/50">
            © 2026 ARK AQUATECH. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/privacy-policy"
              className="
                text-xs
                text-white/50
                transition-all
                duration-300
                hover:text-white
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="
                text-xs
                text-white/50
                transition-all
                duration-300
                hover:text-white
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