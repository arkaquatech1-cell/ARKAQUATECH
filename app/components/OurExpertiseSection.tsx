"use client";

import {
  ArrowUpRight,
  Droplets,
  Factory,
  Fish,
  PackageOpen,
  Wheat,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    title: "Advanced Aquaculture Projects",
    description:
      "End-to-end engineering and development of modern commercial aquaculture projects designed for efficient, scalable and sustainable fish and shrimp production.",
    icon: Fish,
  },
  {
    number: "02",
    title: "Industrial Water Management Solutions",
    description:
      "Advanced water treatment, circulation and management systems engineered to maintain reliable water quality and improve operational efficiency.",
    icon: Droplets,
  },
  {
    number: "03",
    title: "Smart Hatchery Engineering Systems",
    description:
      "Precision-designed hatchery infrastructure integrating intelligent water management, filtration, aeration and production systems.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Aquaculture Equipment & Accessories",
    description:
      "Professional aquaculture equipment and essential accessories selected to support efficient farm operations and long-term system performance.",
    icon: PackageOpen,
  },
  {
    number: "05",
    title: "Nutrition & Farm Essentials",
    description:
      "Essential nutrition and farm-support solutions designed to improve aquatic health, productivity and day-to-day aquaculture operations.",
    icon: Wheat,
  },
];

export default function OurExpertiseSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] py-20 sm:py-24 lg:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#0A6EBD]/10 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#63C96A]/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,110,189,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADING ================= */}

        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/10 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#63C96A]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0A6EBD]">
                What We Do
              </span>
            </div>

            <h2 className="mt-6 text-[38px] font-black leading-[1.05] tracking-[-0.04em] text-[#021B2F] sm:text-[50px] lg:text-[58px]">
              Our
              <span className="ml-3 bg-gradient-to-r from-[#0A6EBD] to-[#63C96A] bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-[15px] leading-8 text-slate-600 sm:text-base">
              Engineering intelligent aquaculture ecosystems through advanced
              infrastructure, smart water management and practical solutions
              designed for modern commercial farming.
            </p>
          </div>
        </div>

        {/* ================= CARDS ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-slate-200/70
                  bg-white
                  p-7
                  shadow-[0_10px_40px_rgba(2,27,47,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#0A6EBD]/20
                  hover:shadow-[0_25px_60px_rgba(2,27,47,0.12)]
                  sm:p-8
                  ${
                    index < 3
                      ? "lg:col-span-2"
                      : index === 3
                        ? "lg:col-span-3"
                        : "lg:col-span-3"
                  }
                `}
              >
                {/* CARD GRADIENT */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#0A6EBD]/[0.035] via-transparent to-[#63C96A]/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* NUMBER */}

                <span className="absolute right-6 top-5 text-[50px] font-black leading-none text-[#021B2F]/[0.035] transition-all duration-500 group-hover:text-[#0A6EBD]/[0.07]">
                  {item.number}
                </span>

                {/* ICON */}

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-br from-[#EAF5FF] to-[#F1FFF2] text-[#0A6EBD] transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#0A6EBD] group-hover:to-[#15176B] group-hover:text-white">
                  <Icon
                    className="h-7 w-7"
                    strokeWidth={1.8}
                  />
                </div>

                {/* CONTENT */}

                <div className="relative z-10 mt-8">
                  <h3 className="max-w-[300px] text-[21px] font-black leading-[1.3] tracking-[-0.02em] text-[#021B2F] transition-colors duration-300 group-hover:text-[#0A6EBD]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                    {item.description}
                  </p>
                </div>

                {/* BOTTOM */}

                <div className="relative z-10 mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    ARK AQUATECH
                  </span>

                
                </div>

                {/* BOTTOM LINE */}

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#0A6EBD] to-[#63C96A] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* ================= BOTTOM MESSAGE ================= */}

        <div className="mt-12 flex flex-col gap-5 rounded-[28px] border border-[#0A6EBD]/10 bg-[#021B2F] px-7 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#63C96A]">
              Complete Aquaculture Solutions
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
              From planning and engineering to installation and operational
              support, ARK AQUATECH develops solutions built around your
              commercial farming requirements.
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}