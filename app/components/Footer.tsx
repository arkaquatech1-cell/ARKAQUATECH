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
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#061018]">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[300px]
            w-[300px]
            rounded-full
            bg-emerald-400/10
            blur-[120px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* CONTAINER */}

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
              <div
                className="
                  relative
                  h-[68px]
                  w-[68px]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                "
              >
                <Image
                  src="/logo/logo1.png"
                  alt="ARK AQUATECH"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <h2
                  className="
                    text-[22px]
                    font-semibold
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
                    text-cyan-100/60
                  "
                >
                  Smart Aquaculture
                </p>
              </div>
            </Link>

            <p
              className="
                mt-6
                text-[14px]
                leading-[1.9]
                text-white/65
              "
            >
              Advanced aquaculture engineering,
              Biofloc systems, industrial water
              treatment, and smart marine
              infrastructure solutions.
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
                    bg-white/[0.03]
                    text-white/65
                    transition-all
                    duration-300
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="text-[20px] font-semibold text-white">
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
                      text-white/65
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
            <h3 className="text-[20px] font-semibold text-white">
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
                    text-white/65
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
            <h3 className="text-[20px] font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
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

              <div className="flex gap-4">
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

              <div className="flex gap-4">
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

        {/* BOTTOM */}

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
          <p className="text-xs text-white/45">
            © 2026 ARK AQUATECH. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="
                text-xs
                text-white/45
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
                text-white/45
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