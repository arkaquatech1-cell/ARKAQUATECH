// app/services/page.tsx

import Image from "next/image";
import {
  Fish,
  Waves,
  Droplets,
  Cpu,
  Factory,
  ShieldCheck,
  Settings2,
  Building2,
} from "lucide-react";

export const metadata = {
  title: "Aquaculture Services | ARK AQUATECH",
  description:
    "Explore advanced aquaculture services including Biofloc systems, RAS farming, industrial water treatment, marine engineering, and sustainable fish farming solutions.",
};

const services = [
  {
    icon: Fish,
    title: "Biofloc Fish Farming",
    description:
      "Complete Biofloc tank design, aeration systems, filtration setup, and sustainable fish farming infrastructure solutions.",
    image: "/service-biofloc.jpg",
  },
  {
    icon: Waves,
    title: "RAS Systems",
    description:
      "Advanced Recirculatory Aquaculture Systems engineered for high productivity, oxygenation, and water efficiency.",
    image: "/service-ras.jpg",
  },
  {
    icon: Droplets,
    title: "Industrial Water Treatment",
    description:
      "RO plants, WTP, STP, ETP systems, filtration technologies, and smart water management engineering.",
    image: "/service-water.jpg",
  },
  {
    icon: Cpu,
    title: "Smart IoT Automation",
    description:
      "Real-time pH, DO, salinity monitoring with automated feeders, aerators, and mobile-based farm control systems.",
    image: "/service-iot.jpg",
  },
  {
    icon: Settings2,
    title: "Aeration & Aquaculture Equipment",
    description:
      "High-performance blowers, paddle wheel aerators, diffusers, pumps, feeders, and complete aquaculture accessories.",
    image: "/service-aerator.jpg",
  },
  {
    icon: Building2,
    title: "Marine Infrastructure",
    description:
      "Civil engineering, pond development, HDPE lining, water storage tanks, and aquaculture infrastructure construction.",
    image: "/service-infra.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#03131d] overflow-hidden text-white">
      {/* HERO */}
      <section className="relative pt-44 pb-32 px-6">
        {/* background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full" />

        <div className="relative max-w-7xl mx-auto text-center">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
            Our Services
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black text-white leading-[0.9]">
            Advanced
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Aquaculture Solutions
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl leading-[2] text-cyan-100/70 max-w-4xl mx-auto">
            We provide Biofloc technology, RAS systems,
            industrial RO plants, fish farming, shrimp
            farming, smart water management, marine
            engineering, and sustainable aquaculture
            infrastructure solutions.
          </p>

          {/* Hero Image */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-[40px]" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
              <Image
                src="/services-hero.jpg"
                alt="ARK AQUATECH Services"
                width={1400}
                height={800}
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={500}
                      className="w-full h-[280px] object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#03131d] via-[#03131d]/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-cyan-300" />
                    </div>

                    <h2 className="mt-8 text-3xl font-black leading-tight">
                      {service.title}
                    </h2>

                    <p className="mt-5 text-cyan-100/70 leading-[1.9]">
                      {service.description}
                    </p>

                    <button className="mt-8 inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-white transition-all duration-300">
                      Explore Service
                      <span className="group-hover:translate-x-2 transition-all duration-300">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
              Our Process
            </p>

            <h2 className="mt-6 text-5xl md:text-6xl font-black">
              Engineering Excellence
            </h2>
          </div>

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Consultation",
                desc: "Understanding your aquaculture and infrastructure requirements.",
              },
              {
                number: "02",
                title: "Planning",
                desc: "Designing efficient engineering and farming systems.",
              },
              {
                number: "03",
                title: "Installation",
                desc: "Professional implementation using modern technologies.",
              },
              {
                number: "04",
                title: "Support",
                desc: "24/7 technical support, maintenance, and optimization.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/[0.03]">
                  {step.number}
                </div>

                <h3 className="text-5xl font-black text-cyan-300">
                  {step.number}
                </h3>

                <h4 className="mt-8 text-2xl font-bold">
                  {step.title}
                </h4>

                <p className="mt-5 text-cyan-100/70 leading-[1.9]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="p-14 md:p-20">
                <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
                  Why Choose ARK AQUATECH
                </p>

                <h2 className="mt-6 text-5xl font-black leading-tight">
                  Sustainable
                  <span className="block text-cyan-300">
                    Marine Engineering
                  </span>
                </h2>

                <div className="mt-12 space-y-8">
                  {[
                    "Advanced Biofloc & RAS Solutions",
                    "Smart IoT Monitoring Systems",
                    "Industrial Water Treatment Expertise",
                    "Professional Engineering Team",
                    "Reliable End-to-End Support",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-5"
                    >
                      <ShieldCheck className="w-7 h-7 text-cyan-300 mt-1" />

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
                  src="/why-services.jpg"
                  alt="Why Choose Us"
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
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-14 md:p-20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10" />

            <div className="relative">
              <Factory className="mx-auto w-16 h-16 text-cyan-300" />

              <h2 className="mt-8 text-5xl md:text-6xl font-black leading-tight">
                Build Smart
                <span className="block text-cyan-300">
                  Aquaculture Projects
                </span>
              </h2>

              <p className="mt-8 text-lg leading-[2] text-cyan-100/70 max-w-3xl mx-auto">
                Partner with ARK AQUATECH for advanced
                aquaculture systems, sustainable engineering,
                industrial water management, and marine
                infrastructure solutions.
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