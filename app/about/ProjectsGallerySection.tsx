"use client";

import {
  FolderKanban,
  MapPin,
  Waves,
  Fish,
  Factory,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    icon: Fish,
    title: "Commercial Biofloc Fish Farm",
    location: "Andhra Pradesh, India",
    description:
      "Advanced Biofloc fish farming infrastructure with smart aeration, filtration, and sustainable aquaculture systems.",
  },

  {
    icon: Waves,
    title: "RAS Aquaculture Installation",
    location: "Telangana, India",
    description:
      "Modern recirculating aquaculture system with intelligent water recycling and oxygen management solutions.",
  },

  {
    icon: Factory,
    title: "Industrial Water Treatment Plant",
    location: "Hyderabad, India",
    description:
      "Industrial RO plant and smart water treatment infrastructure for commercial and industrial operations.",
  },
];

export default function ProjectsGallerySection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-16 lg:py-16">
      {/* BG */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
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
        {/* TOP */}

        <div className="mx-auto max-w-4xl text-center">
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
              Our Projects
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
            Engineering Successful
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
              Aquaculture Projects
            </span>
          </h2>

          {/* DESC */}

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-[15px]
              leading-[2]
              text-cyan-100/70
              sm:text-[16px]
            "
          >
            ARK AQUATECH delivers innovative
            aquaculture engineering,
            industrial water management,
            and sustainable marine infrastructure
            solutions for commercial and
            industrial projects across India.
          </p>
        </div>

        {/* GRID */}

        <div className="mt-20 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                "
              >
                {/* IMAGE */}

                <div className="relative overflow-hidden">
                  <img
                    src={`/projects/project-${index + 1}.jpg`}
                    alt={project.title}
                    className="
                      h-[320px]
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#031018]
                      via-[#031018]/10
                      to-transparent
                    "
                  />

                  {/* ICON */}

                  <div
                    className="
                      absolute
                      left-6
                      top-6
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-cyan-300
                    "
                  >
                    <Icon className="h-8 w-8 text-[#031018]" />
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-7">
                  {/* LOCATION */}

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-cyan-300
                    "
                  >
                    <MapPin className="h-4 w-4" />

                    {project.location}
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-5
                      text-[28px]
                      font-semibold
                      leading-tight
                      tracking-[-0.03em]
                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                  {/* DESC */}

                  <p
                    className="
                      mt-5
                      text-[15px]
                      leading-[2]
                      text-cyan-100/70
                    "
                  >
                    {project.description}
                  </p>

                  {/* BUTTON */}

                  <button
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-cyan-300
                    "
                  >
                    View Project

                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* STATS */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              value: "250+",
              label: "Projects Completed",
            },

            {
              value: "12+",
              label: "Years Experience",
            },

            {
              value: "50+",
              label: "Industrial Clients",
            },

            {
              value: "24/7",
              label: "Technical Support",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-7
                text-center
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-[44px]
                  font-semibold
                  tracking-[-0.05em]
                  text-white
                "
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-[1.8]
                  text-cyan-100/65
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}