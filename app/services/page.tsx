// app/services/page.tsx



export const metadata = {
  title: "Aquaculture Services | ARK AQUATECH",
  description:
    "Explore advanced aquaculture services including Biofloc systems, RAS farming, industrial water treatment, marine engineering, and sustainable fish farming solutions.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#03131d] min-h-screen">


      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
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
            farming, smart water management, and marine
            engineering infrastructure solutions.
          </p>
        </div>
      </section>


    </main>
  );
}