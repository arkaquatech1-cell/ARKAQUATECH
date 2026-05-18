"use client";

import Link from "next/link";
import {
  Download,
  FileText,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  FolderOpen,
} from "lucide-react";

const downloads = [
  {
    title: "Company Catalogs",
    description:
      "Explore our complete aquaculture engineering catalogs including Biofloc systems, RAS technology, industrial RO plants, hatchery solutions, and smart marine infrastructure.",
    icon: <BookOpen className="h-7 w-7" />,
    file: "/downloads/company-catalog.pdf",
    gradient: "from-[#0A6EBD] to-[#15176B]",
  },

  {
    title: "Product Brochures",
    description:
      "Download premium product brochures for aerators, oxygen systems, fish tanks, pond liners, filtration systems, and aquaculture equipment.",
    icon: <FolderOpen className="h-7 w-7" />,
    file: "/downloads/product-brochure.pdf",
    gradient: "from-[#63C96A] to-[#0A6EBD]",
  },

  {
    title: "Technical Documents",
    description:
      "Access technical specifications, installation manuals, engineering layouts, operation guides, and smart aquaculture automation documents.",
    icon: <FileText className="h-7 w-7" />,
    file: "/downloads/technical-documents.pdf",
    gradient: "from-[#021B2F] to-[#0A6EBD]",
  },

  {
    title: "Company Notices",
    description:
      "Stay updated with company announcements, certifications, compliance notices, project updates, and engineering documentation.",
    icon: <ShieldCheck className="h-7 w-7" />,
    file: "/downloads/company-notices.pdf",
    gradient: "from-[#15176B] to-[#63C96A]",
  },
];

export default function DownloadsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-120px]
            top-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#0A6EBD]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#63C96A]/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* HEADER */}

        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#0A6EBD]/10
              bg-[#F4F8FF]
              px-5
              py-2
            "
          >
            <Download className="h-4 w-4 text-[#0A6EBD]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#021B2F]
              "
            >
              Downloads Center
            </span>
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-[#021B2F]
              sm:text-5xl
            "
          >
            Download Our

            <span
              className="
                mt-2
                block
                bg-gradient-to-r
                from-[#63C96A]
                via-[#0A6EBD]
                to-[#15176B]
                bg-clip-text
                text-transparent
              "
            >
              Technical Resources
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-[17px]
              leading-[1.9]
              text-[#4B5563]
            "
          >
            Access company catalogs, product brochures,
            engineering documents, notices, installation manuals,
            industrial water treatment resources, and aquaculture
            technical files.
          </p>
        </div>

        {/* CARDS */}

        <div
          className="
            mt-16
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {downloads.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#E5E7EB]
                bg-white
                p-8
                shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(10,110,189,0.15)]
              "
            >
              {/* TOP LINE */}

              <div
                className={`
                  absolute
                  inset-x-0
                  top-0
                  h-1.5
                  bg-gradient-to-r
                  ${item.gradient}
                `}
              />

              {/* ICON */}

              <div
                className={`
                  inline-flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.gradient}
                  text-white
                  shadow-lg
                `}
              >
                {item.icon}
              </div>

              {/* CONTENT */}

              <h3
                className="
                  mt-7
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#021B2F]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  text-[15px]
                  leading-[1.9]
                  text-[#6B7280]
                "
              >
                {item.description}
              </p>

              {/* BUTTON */}

              <Link
                href={item.file}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#0A6EBD]
                  to-[#15176B]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Download File

                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* HOVER GLOW */}

              <div
                className="
                  absolute
                  right-[-30px]
                  top-[-30px]
                  h-32
                  w-32
                  rounded-full
                  bg-[#0A6EBD]/5
                  blur-3xl
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}

        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[35px]
            bg-gradient-to-r
            from-[#021B2F]
            via-[#0A6EBD]
            to-[#15176B]
            p-12
            text-center
            text-white
            shadow-[0_20px_80px_rgba(0,0,0,0.15)]
          "
        >
          <div
            className="
              absolute
              right-[-80px]
              top-[-80px]
              h-[220px]
              w-[220px]
              rounded-full
              bg-white/10
            "
          />

          <div className="relative z-10">
            <h3 className="text-3xl font-black">
              Need Custom Engineering Documents?
            </h3>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-[16px]
                leading-[1.9]
                text-white/80
              "
            >
              Contact our aquaculture engineering experts for detailed
              project reports, water treatment system documentation,
              Biofloc layouts, industrial plant drawings, and custom
              technical consultation.
            </p>

            <Link
              href="/contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-8
                py-4
                text-sm
                font-semibold
                text-[#021B2F]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Contact Engineering Team

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}