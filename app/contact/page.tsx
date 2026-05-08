// app/contact/page.tsx



export const metadata = {
  title: "Contact ARK AQUATECH",
  description:
    "Contact ARK AQUATECH for Biofloc technology, RAS systems, fish farming, shrimp farming, industrial water treatment, and marine engineering services.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#03131d] min-h-screen">
   

      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
            Contact Us
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black text-white leading-[0.9]">
            Let's Build
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Smart Aquaculture
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl leading-[2] text-cyan-100/70 max-w-4xl mx-auto">
            Contact ARK AQUATECH for advanced aquaculture
            solutions including Biofloc technology, RAS
            systems, marine engineering, industrial water
            treatment, and sustainable fish farming systems.
          </p>
        </div>
      </section>

 
    </main>
  );
}