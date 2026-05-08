// app/gallery/page.tsx



export const metadata = {
  title: "Gallery | ARK AQUATECH",
  description:
    "View gallery images of Biofloc systems, fish farming infrastructure, RAS systems, shrimp farming projects, and marine engineering solutions by ARK AQUATECH.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#03131d] min-h-screen">
  

      <section className="pt-44 pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm font-semibold">
            Gallery
          </p>

          <h1 className="mt-8 text-6xl md:text-8xl font-black text-white leading-[0.9]">
            Smart Marine
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              Project Gallery
            </span>
          </h1>

          <p className="mt-10 text-lg md:text-xl leading-[2] text-cyan-100/70 max-w-4xl mx-auto">
            Explore images of aquaculture infrastructure,
            Biofloc technology systems, shrimp farming,
            industrial water treatment, and sustainable
            marine engineering projects.
          </p>
        </div>
      </section>

  
    </main>
  );
}