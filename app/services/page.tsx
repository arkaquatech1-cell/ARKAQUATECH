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
    image: "/Services/services1.jpg",
  },

  {
    icon: Waves,
    title: "RAS Systems",
    description:
      "Advanced Recirculatory Aquaculture Systems engineered for high productivity, oxygenation, and water efficiency.",
    image: "/Services/services2.jpg",
  },

  {
    icon: Droplets,
    title: "Industrial Water Treatment",
    description:
      "RO plants, WTP, STP, ETP systems, filtration technologies, and smart water management engineering.",
    image: "/Services/services3.png",
  },

  {
    icon: Cpu,
    title: "Smart IoT Automation",
    description:
      "Real-time pH, DO, salinity monitoring with automated feeders, aerators, and mobile-based farm control systems.",
    image: "/Services/services4.jpg",
  },

  {
    icon: Settings2,
    title: "Aeration & Aquaculture Equipment",
    description:
      "High-performance blowers, paddle wheel aerators, diffusers, pumps, feeders, and complete aquaculture accessories.",
    image: "/Services/services5.jpg",
  },

  {
    icon: Building2,
    title: "Marine Infrastructure",
    description:
      "Civil engineering, pond development, HDPE lining, water storage tanks, and aquaculture infrastructure construction.",
    image: "/Services/services6.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main
      className="
        overflow-hidden
        bg-gradient-to-br
        from-[#f7fdff]
        via-[#eefcff]
        to-[#f5fffb]
        text-[#0F172A]
      "
    >

      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div
          className="
            absolute
            top-[-120px]
            left-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-cyan-300/20
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]
            w-[420px]
            h-[420px]
            rounded-full
            bg-emerald-300/20
            blur-[120px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(14,165,233,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* HERO */}

      <section className="relative pt-44 pb-32 px-6">

        <div className="relative max-w-7xl mx-auto text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-100
              bg-white
              px-5
              py-2.5
              shadow-lg
            "
          >
            <Fish className="h-4 w-4 text-cyan-500" />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                font-semibold
                text-[#0F172A]
              "
            >
              Our Services
            </span>
          </div>

          <h1
            className="
              mt-8
              text-6xl
              md:text-8xl
              font-black
              leading-[0.9]
              text-[#0F172A]
            "
          >
            Advanced

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-500
                via-sky-600
                to-emerald-500
                bg-clip-text
                text-transparent
              "
            >
              Aquaculture Solutions
            </span>
          </h1>

          <p
            className="
              mt-10
              text-lg
              md:text-xl
              leading-[2]
              text-slate-600
              max-w-4xl
              mx-auto
            "
          >
            We provide Biofloc technology,
            industrial RO plants,
            smart water management,
            marine engineering,
            fish farming infrastructure,
            RAS systems,
            and sustainable aquaculture
            engineering solutions.
          </p>

          {/* HERO IMAGE */}

          <div className="mt-20 relative">

            <div
              className="
                absolute
                inset-0
                bg-cyan-300/20
                blur-3xl
                rounded-[40px]
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-cyan-100
                bg-white
                shadow-[0_10px_50px_rgba(6,182,212,0.12)]
              "
            >
              <Image
                src="/Gallery/gallery1.png"
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
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[36px]
                    border
                    border-cyan-100
                    bg-white
                    shadow-[0_10px_40px_rgba(6,182,212,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]
                  "
                >

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.title}
                      width={700}
                      height={500}
                      className="
                        w-full
                        h-[280px]
                        object-cover
                        group-hover:scale-110
                        transition-all
                        duration-700
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#0F172A]/70
                        via-[#0F172A]/20
                        to-transparent
                      "
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="relative p-8">

                    <div
                      className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-cyan-50
                        border
                        border-cyan-100
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <Icon className="w-8 h-8 text-cyan-500" />
                    </div>

                    <h2
                      className="
                        mt-8
                        text-3xl
                        font-black
                        leading-tight
                        text-[#0F172A]
                      "
                    >
                      {service.title}
                    </h2>

                    <p
                      className="
                        mt-5
                        text-slate-600
                        leading-[1.9]
                      "
                    >
                      {service.description}
                    </p>

                    <button
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-cyan-600
                        font-semibold
                        hover:text-emerald-500
                        transition-all
                        duration-300
                      "
                    >
                      Explore Service

                      <span
                        className="
                          group-hover:translate-x-2
                          transition-all
                          duration-300
                        "
                      >
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

      {/* PROCESS */}

      <section className="px-6 py-28">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <p
              className="
                text-cyan-600
                uppercase
                tracking-[0.3em]
                text-sm
                font-semibold
              "
            >
              Our Process
            </p>

            <h2
              className="
                mt-6
                text-5xl
                md:text-6xl
                font-black
                text-[#0F172A]
              "
            >
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
                className="
                  relative
                  rounded-[32px]
                  border
                  border-cyan-100
                  bg-white
                  p-10
                  overflow-hidden
                  shadow-[0_10px_40px_rgba(6,182,212,0.08)]
                "
              >

                <div
                  className="
                    absolute
                    -top-10
                    -right-10
                    text-[120px]
                    font-black
                    text-cyan-50
                  "
                >
                  {step.number}
                </div>

                <h3 className="text-5xl font-black text-cyan-500">
                  {step.number}
                </h3>

                <h4
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    text-[#0F172A]
                  "
                >
                  {step.title}
                </h4>

                <p
                  className="
                    mt-5
                    text-slate-600
                    leading-[1.9]
                  "
                >
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

          <div
            className="
              rounded-[40px]
              overflow-hidden
              border
              border-cyan-100
              bg-white
              shadow-[0_15px_50px_rgba(6,182,212,0.08)]
            "
          >

            <div className="grid lg:grid-cols-2">

              {/* LEFT */}

              <div className="p-14 md:p-20">

                <p
                  className="
                    text-cyan-600
                    uppercase
                    tracking-[0.3em]
                    text-sm
                    font-semibold
                  "
                >
                  Why Choose ARK AQUATECH
                </p>

                <h2
                  className="
                    mt-6
                    text-5xl
                    font-black
                    leading-tight
                    text-[#0F172A]
                  "
                >
                  Sustainable

                  <span className="block text-cyan-500">
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
                      <ShieldCheck className="w-7 h-7 text-cyan-500 mt-1" />

                      <p
                        className="
                          text-lg
                          text-slate-600
                          leading-relaxed
                        "
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE */}

              <div className="relative min-h-[500px]">

                <Image
                  src="/Gallery/gallery4.png"
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

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-cyan-100
              bg-white
              p-14
              md:p-20
              shadow-[0_15px_50px_rgba(6,182,212,0.08)]
            "
          >

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-100/40
                via-transparent
                to-emerald-100/40
              "
            />

            <div className="relative">

              <Factory className="mx-auto w-16 h-16 text-cyan-500" />

              <h2
                className="
                  mt-8
                  text-5xl
                  md:text-6xl
                  font-black
                  leading-tight
                  text-[#0F172A]
                "
              >
                Build Smart

                <span className="block text-cyan-500">
                  Aquaculture Projects
                </span>
              </h2>

              <p
                className="
                  mt-8
                  text-lg
                  leading-[2]
                  text-slate-600
                  max-w-3xl
                  mx-auto
                "
              >
                Partner with ARK AQUATECH for advanced
                aquaculture systems,
                sustainable engineering,
                industrial water management,
                and marine infrastructure solutions.
              </p>

              <button
                className="
                  mt-12
                  px-10
                  py-5
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-emerald-500
                  text-white
                  font-bold
                  text-lg
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-xl
                "
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}