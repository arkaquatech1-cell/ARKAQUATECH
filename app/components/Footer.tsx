"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Waves,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blogs", href: "/blogs" },
  { title: "Contact", href: "/contact" },
];

const services = [
  "Biofloc Technology",
  "RAS Systems",
  "Fish Farming",
  "Shrimp Farming",
  "Industrial Water Treatment",
];

const socialLinks = [
  {
    icon: <FaFacebookF size={15} />,
    href: "#",
  },

  {
    icon: <FaInstagram size={15} />,
    href: "#",
  },

  {
    icon: <FaLinkedinIn size={15} />,
    href: "#",
  },

  {
    icon: <FaYoutube size={15} />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">

      {/* VIDEO BACKGROUND */}

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
            brightness-[0.35]
            contrast-[1.1]
            saturate-[1.2]
          "
        >
          <source
            src="/images/file.mp4"
            type="video/mp4"
          />
        </video>

        {/* OCEAN OVERLAY */}

        

        {/* EXTRA DARK LAYER */}

       

        {/* BLUE GLOW */}

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
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
            bottom-[-120px]
            right-[-120px]
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

      {/* EXTRA BLUR OVERLAY */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-black/10
          backdrop-blur-[2px]
        "
      />

      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* FOOTER GRID */}

        <div
          className="
            grid
            gap-12
            py-16
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* COMPANY */}

          <div>

            <Link
              href="/"
              className="flex items-center gap-4"
            >
              {/* LOGO */}

              <div
                className="
                  relative
                  h-[72px]
                  w-[72px]
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
                  className="object-contain p-2"
                />
              </div>

              {/* BRAND */}

              <div>
                <h2
                  className="
                    text-[24px]
                    font-bold
                    tracking-tight
                    text-white
                  "
                >
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
                text-[14px]
                leading-[1.9]
                text-white/70
              "
            >
              Advanced aquaculture engineering,
              Biofloc fish farming,
              industrial water treatment,
              RAS technology,
              smart automation,
              and sustainable marine infrastructure
              solutions across India.
            </p>

            {/* SOCIAL */}

            <div className="mt-8 flex gap-3">

              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
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
                    hover:bg-white/15
                    hover:text-white
                    hover:scale-[1.05]
                  "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>

            <h3
              className="
                text-[22px]
                font-semibold
                text-white
              "
            >
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      text-white/70
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >
                    <ArrowUpRight className="h-3.5 w-3.5 text-cyan-300" />

                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}

          <div>

            <h3
              className="
                text-[22px]
                font-semibold
                text-white
              "
            >
              Services
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service, index) => (
                <li
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-white/70
                  "
                >
                  <Waves className="h-3.5 w-3.5 text-emerald-300" />

                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
                text-[22px]
                font-semibold
                text-white
              "
            >
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              {/* PHONE */}

              <div
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                "
              >
                <Phone className="mt-1 h-4 w-4 text-cyan-300" />

                <div>
                  <p className="text-xs text-white/45">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white">
                    +91 9063289228
                  </p>
                </div>
              </div>

              {/* EMAIL */}

              <div
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                "
              >
                <Mail className="mt-1 h-4 w-4 text-cyan-300" />

                <div>
                  <p className="text-xs text-white/45">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-white">
                    arkaquatech@gmail.com
                  </p>
                </div>
              </div>

              {/* ADDRESS */}

              <div
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  backdrop-blur-xl
                "
              >
                <MapPin className="mt-1 h-4 w-4 text-cyan-300" />

                <div>
                  <p className="text-xs text-white/45">
                    Address
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-[1.8]
                      text-white
                    "
                  >
                    Auto Nagar,
                    Mangalagiri,
                    Andhra Pradesh,
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}

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
            © 2026 ARK AQUATECH.
            All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

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