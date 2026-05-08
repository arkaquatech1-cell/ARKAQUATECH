// app/projects/page.tsx


export const metadata = {
  title: "Projects | ARK AQUATECH",
  description:
    "Explore smart aquaculture projects including Biofloc farming, RAS systems, fish farming infrastructure, and industrial water treatment projects by ARK AQUATECH.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#03131d] min-h-screen">


      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
            Our Projects
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black text-white leading-[0.9]">
            Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Infrastructure Projects
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl leading-[2] text-cyan-100/70 max-w-4xl mx-auto">
            ARK AQUATECH develops advanced aquaculture
            infrastructure including Biofloc farming
            systems, shrimp farming projects, RAS systems,
            and sustainable marine engineering solutions.
          </p>
        </div>
      </section>

   
    </main>
  );
}