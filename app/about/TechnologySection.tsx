"use client";

import {
  Cpu,
  Wifi,
  Gauge,
  Waves,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "IoT Automation",
    description:
      "Advanced IoT-enabled aquaculture automation systems for smart monitoring and efficient farm management.",
  },

  {
    icon: Wifi,
    title: "Remote Monitoring",
    description:
      "Real-time remote monitoring systems for oxygen levels, pH balance, water quality, and aquatic conditions.",
  },

  {
    icon: Gauge,
    title: "Smart Sensors",
    description:
      "High-performance smart sensors for accurate monitoring, automation control, and operational efficiency.",
  },

  {
    icon: Waves,
    title: "Water Management",
    description:
      "Modern filtration, circulation, oxygen balancing, and sustainable water treatment technologies.",
  },

  {
    icon: ShieldCheck,
    title: "Intelligent Safety Systems",
    description:
      "Reliable safety and backup systems designed for continuous aquaculture operations and infrastructure protection.",
  },
];

export default function TechnologySection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-16 lg:py-16">
      {/* BG */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            top-[-180px]
            left-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-400/10
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
            bg-emerald-400/10
            blur-[140px]
          "
        />
      </div>

      {/* CONTAINER */}

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
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
                border-cyan-400/20
                bg-cyan-400/10
                px-4
                py-2
              "
            >
              <Sparkles className="h-4 w-4 text-cyan-300" />

              <span
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-cyan-100/80
                "
              >
                Smart Technology
              </span>
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-8
                text-[38px]
                font-semibold
                leading-[1]
                tracking-[-0.04em]
                text-white
                sm:text-[52px]
                lg:text-[68px]
              "
            >
              Advanced Technology For
              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-cyan-200
                  via-white
                  to-emerald-200
                  bg-clip-text
                  text-transparent
                "
              >
                Smart Aquaculture
              </span>
            </h2>

            {/* DESC */}

            <p
              className="
                mt-8
                text-[15px]
                leading-[2]
                text-cyan-100/70
                sm:text-[16px]
              "
            >
              ARK AQUATECH integrates
              smart automation,
              IoT systems,
              intelligent monitoring,
              and advanced water management
              technologies to deliver efficient
              and sustainable aquaculture solutions.
            </p>

            {/* TECHNOLOGY LIST */}

            <div className="mt-12 space-y-7">
              {technologies.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      gap-5
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        min-w-[56px]
                        items-center
                        justify-center
                        rounded-2xl
                        bg-cyan-300
                      "
                    >
                      <Icon className="h-7 w-7 text-[#031018]" />
                    </div>

                    {/* TEXT */}

                    <div>
                      <h3
                        className="
                          text-[24px]
                          font-semibold
                          tracking-[-0.03em]
                          text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-[15px]
                          leading-[1.9]
                          text-cyan-100/70
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              sm:p-10
              backdrop-blur-xl
            "
          >
            {/* BG */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-cyan-400/[0.08]
                to-emerald-400/[0.04]
              "
            />

            {/* CONTENT */}

            <div className="relative z-10">
              {/* TOP */}

              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-cyan-100/60
                    "
                  >
                    Smart Monitoring
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[34px]
                      font-semibold
                      leading-[1]
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    Intelligent
                    <span className="block text-cyan-300">
                      Automation
                    </span>
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-cyan-300
                  "
                >
                  <Cpu className="h-10 w-10 text-[#031018]" />
                </div>
              </div>

              {/* DESC */}

              <p
                className="
                  mt-8
                  text-[15px]
                  leading-[2]
                  text-cyan-100/70
                "
              >
                Our smart aquaculture systems
                provide real-time monitoring,
                automated oxygen control,
                intelligent water circulation,
                remote management,
                and advanced analytics for
                sustainable fish farming operations.
              </p>

              {/* STATS */}

              <div className="mt-12 grid grid-cols-2 gap-5">
                {/* ITEM */}

                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/20
                    p-6
                  "
                >
                  <h4
                    className="
                      text-[36px]
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    24/7
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-[1.8]
                      text-white/65
                    "
                  >
                    Real-Time Monitoring
                  </p>
                </div>

                {/* ITEM */}

                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/20
                    p-6
                  "
                >
                  <h4
                    className="
                      text-[36px]
                      font-semibold
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    AI
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-[1.8]
                      text-white/65
                    "
                  >
                    Smart Automation
                  </p>
                </div>
              </div>

              {/* BUTTON */}

              <button
                className="
                  mt-10
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-cyan-300
                "
              >
                Explore Technology

                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}