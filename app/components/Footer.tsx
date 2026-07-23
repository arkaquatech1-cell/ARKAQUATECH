"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Building2,
  Mail,
  MapPin,
  Phone,
  Waves,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

/* =========================================================
   DATA
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

const expertise = [
  "Advanced Aquaculture Projects",
  "Industrial Water Management",
  "Smart Hatchery Engineering",
  "Aquaculture Equipment",
  "Nutrition & Farm Essentials",
];

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#031D2B] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* VIDEO */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        >
          <source src="/images/file.mp4" type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#071F2E]/95 via-[#031D2B]/95 to-[#01131E]" />

        {/* LIGHTS */}

        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-[#0A6EBD]/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#63C96A]/10 blur-[140px]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ===================================================
            TOP GRID
        =================================================== */}

        <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >
              <div className="relative h-[64px] w-[64px] overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                <Image
                  src="/logo/logo1.png"
                  alt="ARK AQUATECH"
                  fill
                  sizes="64px"
                  className="object-contain p-2"
                />
              </div>

              <div>
                <h2 className="text-[23px] font-black tracking-[-0.03em]">
                  ARK AQUATECH
                </h2>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300/70">
                  Smart Aquaculture
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-[360px] text-[13px] leading-7 text-white/60">
              Technology-driven aquaculture engineering and infrastructure
              solutions for modern commercial fish and shrimp farming.
            </p>

            {/* SOCIAL */}

            <div className="mt-7 flex gap-2.5">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      text-white/60
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-300/30
                      hover:bg-cyan-400/10
                      hover:text-cyan-300
                    "
                  >
                    <Icon size={14} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div className="lg:col-span-2">
            <FooterHeading title="Quick Links" />

            <ul className="mt-6 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="
                      group
                      inline-flex
                      items-center
                      gap-2
                      text-[13px]
                      text-white/60
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-cyan-300
                    "
                  >
                    <ArrowUpRight className="h-3 w-3 text-cyan-300" />

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              EXPERTISE
          ================================================= */}

          <div className="lg:col-span-3">
            <FooterHeading title="Our Expertise" green />

            <ul className="mt-6 space-y-3.5">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] leading-6 text-white/60"
                >
                  <Waves className="mt-1 h-3.5 w-3.5 shrink-0 text-emerald-300" />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="lg:col-span-3">
            <FooterHeading title="Contact Us" />

            <div className="mt-6 space-y-4">
              {/* PHONE */}

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Phone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/35">
                    Call Us
                  </p>

                  <Link
                    href="tel:+919063289228"
                    className="mt-1 block text-[13px] font-semibold text-white/85 hover:text-cyan-300"
                  >
                    +91 90632 89228
                  </Link>

                  <Link
                    href="tel:+917799399555"
                    className="mt-1 block text-[13px] font-semibold text-white/85 hover:text-cyan-300"
                  >
                    +91 77993 99555
                  </Link>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Mail className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-white/35">
                    Email
                  </p>

                  <Link
                    href="mailto:info@arkaquatech.com"
                    className="mt-1 block break-all text-[13px] font-semibold text-white/85 hover:text-cyan-300"
                  >
                    info@arkaquatech.com
                  </Link>
                </div>
              </div>
            </div>

            {/* BUTTON */}

           
          </div>
        </div>

        {/* ===================================================
            OFFICE LOCATIONS
        =================================================== */}

        <div className="py-9">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              Our Locations
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {/* =================================================
                MAIN OFFICE
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-white/10
                bg-white/[0.055]
                p-5
                transition-all
                duration-300
                hover:border-cyan-300/20
                hover:bg-white/[0.075]
                sm:p-6
              "
            >
              <div className="flex items-start gap-4">
                {/* ICON */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <MapPin className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  {/* BADGE */}

                  <span className="inline-flex rounded-full bg-cyan-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-300">
                    Main Office
                  </span>

                  <h3 className="mt-2 text-[16px] font-bold text-white">
                    Mangalagiri, Guntur
                  </h3>

                  <address className="mt-2 not-italic text-[12px] leading-6 text-white/55 sm:text-[13px]">
                    Plot No. 12, Autonagar Last Line, Near APIIC,
                    Mangalagiri, Guntur – 522503, Andhra Pradesh
                  </address>
                </div>
              </div>
            </div>

            {/* =================================================
                BRANCH OFFICE
            ================================================= */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[22px]
                border
                border-white/10
                bg-white/[0.055]
                p-5
                transition-all
                duration-300
                hover:border-emerald-300/20
                hover:bg-white/[0.075]
                sm:p-6
              "
            >
              <div className="flex items-start gap-4">
                {/* ICON */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                  <Building2 className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  {/* BADGE */}

                  <span className="inline-flex rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-300">
                    Branch Office
                  </span>

                  <h3 className="mt-2 text-[16px] font-bold text-white">
                    Kukatpally, Hyderabad
                  </h3>

                  <address className="mt-2 not-italic text-[12px] leading-6 text-white/55 sm:text-[13px]">
                    12th Floor, Manjeera Trinity, Corporate E-Seva Lane,
                    JNTU–Hitech City Road, Near Manjeera Mall, KPHB Phase 3,
                    Kukatpally, Hyderabad – 500072, Telangana
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            CTA STRIP
        =================================================== */}

        <div
         
        >
          <div>
          

        
          </div>

        
        </div>

        {/* ===================================================
            COPYRIGHT
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
            sm:flex-row
          "
        >
          <p className="text-[11px] text-white/40">
            © 2026 ARK AQUATECH. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-[11px] text-white/40 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[11px] text-white/40 transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({
  title,
  green = false,
}: {
  title: string;
  green?: boolean;
}) {
  return (
    <div>
      <h3 className="text-[16px] font-bold text-white">
        {title}
      </h3>

      <div
        className={`mt-3 h-[2px] w-8 rounded-full ${
          green ? "bg-emerald-300" : "bg-cyan-300"
        }`}
      />
    </div>
  );
}