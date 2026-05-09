// app/about/page.tsx

import Image from "next/image";
import Link from "next/link";

import {
  Fish,
  Waves,
  Droplets,
  Cpu,
  ShieldCheck,
  Factory,
  Globe2,
  ArrowRight,
  Sparkles,
  Building2,
} from "lucide-react";

export const metadata = {
  title:
    "About ARK AQUATECH | Biofloc, RAS & Industrial Water Treatment Company India",

  description:
    "ARK AQUATECH is a leading aquaculture and engineering company in Andhra Pradesh, India specializing in Biofloc fish farming, RAS systems, industrial RO water treatment plants, smart IoT aquaculture automation, shrimp farming infrastructure, civil engineering, and sustainable marine solutions.",

  keywords: [
    "Biofloc Fish Farming India",
    "RAS Aquaculture Systems",
    "Industrial RO Plant",
    "Aquaculture Company India",
    "Shrimp Farming Infrastructure",
    "Fish Farming Company Andhra Pradesh",
    "Marine Engineering Company",
    "IoT Aquaculture Solutions",
    "Industrial Water Treatment",
    "Commercial Fish Farming",
    "Sustainable Aquaculture",
    "Aquaculture Engineering",
    "Smart Water Management",
    "Biofloc Technology",
  ],
};

const services = [
  {
    icon: Fish,
    title: "Biofloc Fish Farming",
    desc:
      "Advanced Biofloc farming systems for sustainable fish farming, shrimp farming, and commercial aquaculture production.",
  },

  {
    icon: Waves,
    title: "RAS Aquaculture Systems",
    desc:
      "Modern recirculating aquaculture systems with smart filtration, oxygen balancing, and water recycling technologies.",
  },

  {
    icon: Droplets,
    title: "Industrial Water Treatment",
    desc:
      "Industrial RO plants, STP, ETP, WTP systems, filtration plants, and smart water management infrastructure.",
  },

  {
    icon: Cpu,
    title: "IoT Smart Automation",
    desc:
      "IoT-based aquaculture monitoring systems with pH sensors, DO monitoring, smart feeders, and remote automation.",
  },

  {
    icon: Building2,
    title: "Civil Infrastructure",
    desc:
      "Commercial civil engineering, pump houses, pipelines, industrial sheds, and water infrastructure development.",
  },

  {
    icon: Factory,
    title: "Marine Engineering",
    desc:
      "Sustainable marine infrastructure, aquaculture engineering, aeration systems, and aquatic ecosystem solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#021018] text-white">
      {/* HERO SECTION */}

      <section className="relative overflow-hidden px-6 pb-32 pt-44">
        {/* BACKGROUND */}

        <div className="absolute inset-0">
          <div className="absolute left-[-250px] top-[-250px] h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]" />

          <div className="absolute bottom-[-250px] right-[-250px] h-[650px] w-[650px] rounded-full bg-emerald-400/10 blur-[180px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          {/* BADGE */}

          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-cyan-300" />

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
              About ARK AQUATECH
            </span>
          </div>

          {/* TITLE */}

          <h1 className="mt-10 text-6xl font-black leading-[0.9] tracking-[-0.05em] text-white md:text-8xl">
            Smart Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Engineering Solutions
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-10 max-w-5xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
            ARK AQUATECH is a leading aquaculture and
            engineering company in Andhra Pradesh, India
            specializing in Biofloc fish farming,
            industrial RO water treatment plants,
            commercial RAS aquaculture systems,
            shrimp farming infrastructure, IoT-based
            smart aquaculture automation, civil engineering,
            and sustainable marine engineering solutions.
          </p>

          {/* VIDEO */}

          <div className="relative mt-20">
            <div className="absolute inset-0 rounded-[40px] bg-cyan-400/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#021018]/90 via-[#021018]/20 to-transparent" />

              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-[650px] w-full object-cover"
              >
                <source
                  src="/herosection/seavideo.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top,rgba(0,255,200,0.12),transparent_60%)]" />

              <div className="absolute bottom-10 left-10 z-30 max-w-3xl text-left">
                <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-black/30 px-5 py-2 backdrop-blur-xl">
                  <Globe2 className="h-4 w-4 text-cyan-300" />

                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    Sustainable Aquaculture Innovation
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
                  Future Ready
                  <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                    Smart Aquaculture Infrastructure
                  </span>
                </h2>

                <p className="mt-6 max-w-3xl text-lg leading-[2] text-cyan-100/70">
                  ARK AQUATECH delivers advanced fish farming,
                  Biofloc systems, industrial RO plants,
                  smart IoT monitoring, civil infrastructure,
                  and sustainable marine engineering
                  solutions for modern aquaculture industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="relative px-6 py-32">
        <div className="mx-auto max-w-7xl">
          {/* TOP */}

          <div className="mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 backdrop-blur-xl">
              <Sparkles className="h-5 w-5 text-cyan-300" />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100">
                Our Expertise
              </span>
            </div>

            <h2 className="mt-10 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
              Advanced Aquaculture
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                Engineering Services
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-[2] text-cyan-100/70 md:text-xl">
              We provide sustainable aquaculture solutions,
              industrial water treatment systems, smart IoT
              automation, civil engineering infrastructure,
              and advanced marine engineering services across
              India and international aquaculture markets.
            </p>
          </div>

          {/* GRID */}

          <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-3xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
                >
                  <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10" />

                  <div className="relative z-10">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300 via-sky-400 to-emerald-300 text-[#021018] shadow-[0_0_40px_rgba(34,211,238,0.35)]">
                      <Icon className="h-10 w-10" />
                    </div>

                    <h3 className="mt-8 text-3xl font-black text-white">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-[2] text-cyan-100/70">
                      {service.desc}
                    </p>
                  </div>

                  <div className="absolute right-5 top-5 text-[90px] font-black leading-none text-white/[0.03]">
                    0{index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl">
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}

            <div className="p-10 md:p-20">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />

                <span className="text-sm font-semibold uppercase tracking-wide text-cyan-100">
                  Why Choose ARK AQUATECH
                </span>
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">
                Sustainable
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Engineering Excellence
                </span>
              </h2>

              <div className="mt-12 space-y-8">
                {[
                  "Advanced Biofloc & RAS Systems",
                  "Industrial Water Treatment Expertise",
                  "Smart IoT Automation & Monitoring",
                  "Commercial Fish Farming Solutions",
                  "Sustainable Marine Infrastructure",
                  "Professional Technical Support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-5"
                  >
                    <ShieldCheck className="mt-1 h-7 w-7 text-cyan-300" />

                    <p className="text-lg leading-relaxed text-cyan-100/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative min-h-[650px]">
              <Image
                src="/why-choose-us.jpg"
                alt="ARK AQUATECH"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#021018]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-14 backdrop-blur-3xl md:p-20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative z-10">
              <Factory className="mx-auto h-16 w-16 text-cyan-300" />

              <h2 className="mt-8 text-5xl font-black leading-tight text-white">
                Building The Future Of
                <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
                  Smart Aquaculture
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-[2] text-cyan-100/70">
                ARK AQUATECH continues to deliver Biofloc
                fish farming, industrial RO plants,
                sustainable aquaculture infrastructure,
                smart water treatment systems, IoT
                automation, and marine engineering
                solutions for modern industries and
                aquaculture businesses across India.
              </p>

              <Link
                href="/contact"
                className="group mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-emerald-300 px-10 py-5 text-lg font-black text-[#021018] shadow-[0_15px_50px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-105"
              >
                Contact Our Team

                <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}