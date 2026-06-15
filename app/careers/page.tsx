// app/careers/page.tsx

import {
  Briefcase,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const jobs = [
  {
    title: "Aquaculture Engineer",
    location: "Andhra Pradesh ",
  },
  {
    title: "Sales & Marketing Executive",
    location: "Andhra Pradesh ",
  },
  {
    title: "Project Coordinator",
    location: "Andhra Pradesh",
  },
  {
    title: "Water Treatment Engineer",
    location: "Andhra Pradesh ",
  },
  {
    title: "Digital Marketing Executive",
    location: "Andhra Pradesh",
  },

];

export default function CareersPage() {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      {/* HERO */}

      <section className="relative pt-40 pb-24 px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-[#0A6EBD]/10 blur-[120px]" />
          <div className="absolute right-[-150px] bottom-[-150px] h-[350px] w-[350px] rounded-full bg-[#63C96A]/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full border border-[#0A6EBD]/10 bg-[#F4F8FF] px-5 py-2 text-sm font-semibold text-[#0A6EBD]">
            Careers at ARK Aquatech
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-[#021B2F] leading-tight">
            Build the Future of
            <span className="block bg-gradient-to-r from-[#63C96A] via-[#0A6EBD] to-[#15176B] bg-clip-text text-transparent">
              Sustainable Aquaculture
            </span>
          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-600 leading-8">
            Join ARK Aquatech and help transform aquaculture through
            Biofloc Technology, RAS Systems, Water Treatment Solutions,
            Marine Engineering, and Sustainable Fish Farming.
          </p>
        </div>
      </section>

      {/* WHY JOIN */}

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[40px] bg-[#F8FAFC] p-10 md:p-16">
            <h2 className="text-4xl font-black text-[#021B2F] text-center">
              Why Join ARK Aquatech?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Innovative Aquaculture Projects",
                "Professional Growth Opportunities",
                "Industry-Leading Technologies",
                "Supportive Team Environment",
                "Competitive Compensation",
                "Training & Development Programs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white p-6 rounded-3xl shadow-sm"
                >
                  <CheckCircle className="h-6 w-6 text-[#63C96A]" />
                  <span className="font-medium text-[#021B2F]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOBS */}

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-black text-[#021B2F] mb-12">
            Current Open Positions
          </h2>

          <div className="grid gap-8">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-[32px] border border-[#E5E7EB] bg-white p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#021B2F]">
                      {job.title}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </div>
                  </div>

                https://api.whatsapp.com/send/?phone=919063289228&text&type=phone_number&app_absent=0
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-[#0A6EBD] to-[#15176B] p-12 md:p-16 text-center text-white">
          <Briefcase className="mx-auto h-14 w-14 mb-6" />

          <h2 className="text-4xl font-black">
            Don't See a Suitable Position?
          </h2>

          <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
            We're always looking for talented professionals passionate
            about aquaculture, engineering, technology, and innovation.
          </p>

          <a
  href="https://api.whatsapp.com/send/?phone=919063289228&text=Hello%20ARK%20Aquatech,%20I%20would%20like%20to%20share%20my%20resume."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex mt-8 rounded-full bg-white px-8 py-4 font-semibold text-[#15176B]"
>
  Send Your Resume
</a>
        </div>
      </section>
    </main>
  );
}