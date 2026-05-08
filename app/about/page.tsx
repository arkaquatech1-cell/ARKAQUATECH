// app/about/page.tsx

import Image from "next/image";
import {
  Waves,
  ShieldCheck,
  Fish,
  Factory,
  Cpu,
  Droplets,
} from "lucide-react";

export const metadata = {
  title: "About ARK AQUATECH",
  description:
    "Learn more about ARK AQUATECH, a leading aquaculture company specializing in Biofloc technology, RAS systems, fish farming, shrimp farming, and sustainable marine engineering solutions.",
};

const services = [
  {
    icon: Fish,
    title: "Biofloc & Fish Farming",
    desc: "Advanced fish farming systems with sustainable Biofloc technology and modern aquaculture engineering.",
  },
  {
    icon: Waves,
    title: "RAS Systems",
    desc: "High-performance recirculatory aquaculture systems designed for maximum productivity and water efficiency.",
  },
  {
    icon: Droplets,
    title: "Water Treatment",
    desc: "Industrial RO plants, STP/ETP systems, filtration plants, and complete water management solutions.",
  },
  {
    icon: Cpu,
    title: "Smart IoT Monitoring",
    desc: "Real-time monitoring systems for pH, dissolved oxygen, salinity, feeders, and remote automation.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#03131d] overflow-hidden text-white">
      {/* HERO SECTION */}
      <section className="relative pt-44 pb-32 px-6">
        {/* background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-sm font-semibold">
            About Us
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black leading-[0.9]">
            Smart Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl leading-[2] text-cyan-100/70 max-w-4xl mx-auto">
            ARK AQUATECH is a multidisciplinary engineering
            and aquaculture solutions company specializing in
            Biofloc technology, RAS systems, fish farming,
            shrimp farming, industrial water treatment,
            aquaponics, IoT automation, and sustainable
            marine infrastructure solutions.
          </p>

          {/* Hero Image */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-[40px]" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <Image
                src="/about-hero.jpg"
                alt="ARK AQUATECH"
                width={1400}
                height={800}
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY SECTION */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-[40px]" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10">
              <Image
                src="/company-image.jpg"
                alt="Company"
                width={900}
                height={1100}
                className="w-full h-[700px] object-cover hover:scale-105 duration-700"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
              Who We Are
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
              Engineering
              <span className="block text-cyan-300">
                Sustainable Aquaculture
              </span>
            </h2>

            <p className="mt-8 text-lg leading-[2] text-cyan-100/70">
              Established in 2019, ARK AQUATECH delivers
              innovative aquaculture, water management,
              electrical, and infrastructure solutions across
              India. We combine advanced engineering with
              sustainable farming practices to build
              high-efficiency aquatic ecosystems.
            </p>

            <p className="mt-6 text-lg leading-[2] text-cyan-100/70">
              From industrial-scale water treatment plants
              and smart aquaculture systems to civil
              infrastructure and IoT automation, we provide
              complete end-to-end engineering services for
              modern marine and farming industries.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                {
                  number: "2019",
                  label: "Established",
                },
                {
                  number: "500+",
                  label: "Projects",
                },
                {
                  number: "24/7",
                  label: "Support",
                },
                {
                  number: "100%",
                  label: "Quality Focus",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
                >
                  <h3 className="text-4xl font-black text-cyan-300">
                    {item.number}
                  </h3>

                  <p className="mt-3 text-cyan-100/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
              Core Expertise
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-black">
              Our Services
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400/40 transition-all duration-500"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-b from-cyan-500/10 to-transparent transition-all duration-500" />

                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                      <Icon className="w-8 h-8 text-cyan-300" />
                    </div>

                    <h3 className="mt-8 text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-[1.9] text-cyan-100/70">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              {/* LEFT */}
              <div className="p-14 md:p-20">
                <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
                  Why Choose Us
                </p>

                <h2 className="mt-6 text-5xl font-black leading-tight">
                  Future-Ready
                  <span className="block text-cyan-300">
                    Aquaculture Solutions
                  </span>
                </h2>

                <div className="mt-12 space-y-8">
                  {[
                    "Advanced Biofloc & RAS Engineering",
                    "Industrial Water Treatment Expertise",
                    "Smart IoT Automation & Monitoring",
                    "Sustainable Marine Infrastructure",
                    "Professional Technical Support",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-5"
                    >
                      <div className="mt-1">
                        <ShieldCheck className="w-7 h-7 text-cyan-300" />
                      </div>

                      <p className="text-lg text-cyan-100/80 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative min-h-[500px]">
                <Image
                  src="/why-choose-us.jpg"
                  alt="Why Choose ARK AQUATECH"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-14 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative">
              <Factory className="mx-auto w-16 h-16 text-cyan-300" />

              <h2 className="mt-8 text-5xl font-black">
                Building the Future of
                <span className="block text-cyan-300">
                  Smart Aquaculture
                </span>
              </h2>

              <p className="mt-8 text-lg leading-[2] text-cyan-100/70 max-w-3xl mx-auto">
                We deliver sustainable marine engineering,
                advanced fish farming systems, industrial
                water solutions, and intelligent aquaculture
                technologies for modern businesses and farms.
              </p>

              <button className="mt-12 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}