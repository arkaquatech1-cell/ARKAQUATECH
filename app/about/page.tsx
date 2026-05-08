// app/about/page.tsx



export const metadata = {
  title: "About ARK AQUATECH",
  description:
    "Learn more about ARK AQUATECH, a leading aquaculture company specializing in Biofloc technology, RAS systems, fish farming, shrimp farming, and sustainable marine engineering solutions.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#03131d] min-h-screen">
     

      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
            About Us
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black text-white leading-[0.9]">
            Smart Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Engineering
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl leading-[2] text-cyan-100/70 max-w-4xl mx-auto">
            ARK AQUATECH specializes in Biofloc technology,
            RAS systems, fish farming, shrimp farming,
            industrial water treatment, aquaponics, and
            sustainable aquaculture infrastructure solutions.
          </p>
        </div>
      </section>

  
    </main>
  );
}