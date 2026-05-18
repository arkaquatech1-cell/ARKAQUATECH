// app/services/shrimp-farming-setup/page.tsx

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title:
    "Shrimp Farming Setup | ARK AQUATECH",
  description:
    "ARK AQUATECH provides complete shrimp farming setup solutions including pond lining, aerators, feeders, oxygen systems, water management, and sustainable shrimp aquaculture infrastructure in India.",
};

export default function ShrimpFarmingSetupPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* HERO */}

      <section className="relative pt-40 pb-24 px-6">
        {/* BACKGROUND */}

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="
              absolute
              left-[-180px]
              top-[-180px]
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#0A6EBD]/10
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              bottom-[-180px]
              right-[-180px]
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#63C96A]/10
              blur-[140px]
            "
          />
        </div>

        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT */}

          <div>
            {/* BADGE */}

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
                py-2.5
              "
            >
              <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.22em]
                  font-semibold
                  text-[#021B2F]
                "
              >
                Shrimp Farming Solutions
              </span>
            </div>

            {/* TITLE */}

            <h1
              className="
                mt-8
                text-[42px]
                font-black
                leading-[0.92]
                tracking-[-0.05em]
                text-[#021B2F]
                sm:text-[58px]
                lg:text-[76px]
              "
            >
              Shrimp Farming Setup
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-8
                text-[16px]
                leading-[2]
                text-[#4B5563]
                sm:text-[18px]
              "
            >
              ARK AQUATECH provides complete
              shrimp farming setup solutions
              including advanced pond lining,
              aerators,
              oxygen balancing systems,
              feeders,
              and smart water management
              technologies for sustainable shrimp production.
            </p>

            {/* FEATURES */}

            <div className="mt-10 space-y-5">
              {[
                "HDPE Pond Lining",
                "Shrimp Aeration Systems",
                "Automatic Feeders",
                "Water Quality Management",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-[#0A6EBD]" />

                  <span className="text-[#374151] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#0A6EBD]
                  to-[#15176B]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Contact Us

                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://wa.me/919063289228"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#25D366]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                "
              >
                WhatsApp Now
              </Link>
            </div>
          </div>

          {/* IMAGE */}

          <div
            className="
              overflow-hidden
              rounded-[40px]
              border
              border-[#E5E7EB]
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            "
          >
            <Image
              src="/Services/services5.jpg"
              alt="Shrimp Farming Setup"
              width={1200}
              height={1200}
              className="
                h-[500px]
                w-full
                object-cover
                lg:h-[700px]
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
}