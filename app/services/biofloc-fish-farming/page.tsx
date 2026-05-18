// app/services/biofloc-fish-farming/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Zap,
  Fish,
  FlaskConical,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Leaf,
} from "lucide-react";

export const metadata = {
  title:
    "Biofloc Fish Farming | Biofloc Tank Setup & Bio Floc Technology | ARK AQUATECH",
  description:
    "ARK AQUATECH specialises in biofloc fish farming systems, biofloc tank design, bio floc technology setup, oxygen management, aeration, and complete biofloc pond setup across India. Get biofloc fish farming cost estimates today.",
  keywords: [
    "biofloc fish farming",
    "biofloc tank",
    "bio floc technology",
    "bio floc farming",
    "biofloc fish",
    "biofloc fish farming cost",
    "biofloc fish tank",
    "biofloc tank price",
    "biofloc pond setup",
    "biofloc technology in India",
    "fish farming technology",
    "aquaculture system",
    "fishery technology",
    "biofloc system for tilapia",
    "biofloc shrimp farming",
  ],
  openGraph: {
    title: "Biofloc Fish Farming Systems | ARK AQUATECH India",
    description:
      "Complete biofloc fish farming solutions — tank design, aeration, oxygen management, and 24/7 support. Get your biofloc tank price and setup quote from ARK AQUATECH.",
    url: "https://www.arkaquatech.com/services/biofloc-fish-farming",
    siteName: "ARK AQUATECH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.arkaquatech.com/services/biofloc-fish-farming",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroFeatures = [
  "Biofloc Pond Setup & Tank Design",
  "Aeration Systems & Blower Networks",
  "Oxygen Management Solutions",
  "Water Quality Monitoring (24/7)",
  "Feed Conversion Optimisation",
  "End-to-End Technical Support",
];

const stats = [
  { stat: "3–4×",  label: "Yield vs Traditional Pond" },
  { stat: "80%",   label: "Less Water Consumption" },
  { stat: "25%",   label: "Lower Feed Costs (FCR)" },
  { stat: "120",   label: "Days Per Harvest Cycle" },
];

const howItWorks = [
  {
    step: "01",
    title: "Microbial Floc Formation",
    body:
      "Beneficial bacteria, microalgae, and protozoa are cultivated inside the biofloc fish tank by maintaining a high carbon-to-nitrogen (C:N) ratio — typically 15:1 or above. These microorganisms form visible floc aggregates (10–15 mL/L TSS) that serve simultaneously as natural feed and a live biological filter.",
  },
  {
    step: "02",
    title: "Ammonia Conversion & Water Treatment",
    body:
      "As fish excrete ammonia, the microbial community in the biofloc tank converts it to bacterial biomass rather than allowing toxic build-up. This in-situ biological water treatment eliminates the need for large-volume water exchange — the biofloc system becomes its own water treatment plant.",
  },
  {
    step: "03",
    title: "Natural In-Tank Feed Production",
    body:
      "The floc biomass is protein-rich (25–40% crude protein) and continuously available to fish as a supplementary feed. This natural nutrition source reduces dependence on expensive commercial pellets, directly cutting biofloc fish farming cost by 20–30% compared to conventional methods.",
  },
  {
    step: "04",
    title: "Harvest & Cycle Management",
    body:
      "Tilapia, catfish, and shrimp grown in a biofloc fish tank typically reach market size in 90–150 days depending on species, stocking density, and temperature management. ARK AQUATECH provides complete cycle management protocols so each batch is optimised for maximum yield and consistent quality.",
  },
];

const species = [
  { name: "Tilapia (Nile & Hybrid)",  density: "200–400 fish / 10,000 L", cycle: "100–120 days" },
  { name: "Catfish (Pangasius)",       density: "150–300 fish / 10,000 L", cycle: "120–150 days" },
  { name: "Rohu & Catla",             density: "100–200 fish / 10,000 L", cycle: "150–180 days" },
  { name: "Shrimp (L. vannamei)",     density: "300–500 PL / 10,000 L",   cycle: "90–110 days" },
  { name: "Common Carp",              density: "150–250 fish / 10,000 L", cycle: "120–140 days" },
  { name: "Barramundi (Seabass)",     density: "80–150 fish / 10,000 L",  cycle: "150–200 days" },
];

const tankTypes = [
  {
    icon: Droplets,
    title: "HDPE Round Tanks",
    body:
      "Food-grade high-density polyethylene tanks in 10,000 L – 1,00,000 L capacities. UV-stabilised, non-toxic, and engineered for optimal circular water flow that keeps flocs suspended uniformly. Most popular biofloc fish tank choice for small to medium commercial farms. Biofloc tank price starts from ₹45,000 for a 10,000-litre unit.",
  },
  {
    icon: FlaskConical,
    title: "Tarpaulin Pond Tanks",
    body:
      "Cost-effective oval or round tarpaulin-lined biofloc tanks suited for ground-level outdoor setups. Available in 50,000 L – 2,00,000 L configurations. Ideal for farmers transitioning from traditional earthen pond systems who want low-cost biofloc fish farming with minimal civil construction.",
  },
  {
    icon: Fish,
    title: "RCC / Concrete Biofloc Ponds",
    body:
      "Permanent reinforced concrete biofloc ponds with HDPE or fibreglass lining for large-scale commercial operations. Longer lifespan (20+ years), lower long-term maintenance costs, and compatible with full smart automation and RAS integration. Suited for 5 MT/cycle and above production targets.",
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: "3–4× Higher Yield",
    body:
      "Biofloc fish farming consistently achieves stocking densities and harvest yields 3 to 4 times higher than traditional earthen pond aquaculture on the same footprint, directly improving revenue per square metre.",
  },
  {
    icon: Leaf,
    title: "Minimal Water Use",
    body:
      "Bio floc technology requires 80–95% less freshwater than flow-through pond systems because the microbial ecosystem treats water in-situ. Water is replaced only when evaporation or sludge removal necessitates it — critical in water-scarce regions of India.",
  },
  {
    icon: ShieldCheck,
    title: "Biosecure & Drug-Free",
    body:
      "The dense microbial community in a mature biofloc system competitively excludes most pathogenic bacteria, dramatically reducing the risk of disease outbreaks and eliminating the need for antibiotics — a major market advantage for export-grade fish.",
  },
  {
    icon: Zap,
    title: "Year-Round Production",
    body:
      "Unlike seasonal pond farming, biofloc fish tanks can operate year-round with temperature management systems. Farmers can run 3–4 full production cycles annually versus 1–2 cycles in open ponds, compounding annual revenue significantly.",
  },
  {
    icon: Settings2,
    title: "Lower Feed Conversion Ratio",
    body:
      "The in-tank floc biomass provides a continuous protein supplement, reducing feed conversion ratio (FCR) to 1.2–1.5 in optimised biofloc systems compared to 1.8–2.5 in conventional farms. Lower FCR directly means lower biofloc fish farming cost per kilogram produced.",
  },
  {
    icon: FlaskConical,
    title: "Zero Effluent Discharge",
    body:
      "A properly managed biofloc system discharges no harmful effluent — it is a closed or near-closed water system. This meets increasingly strict pollution control regulations and positions farms for international certifications like ASC and GlobalG.A.P.",
  },
];

const costTable = [
  { item: "Biofloc Fish Tank (10,000 L HDPE)", range: "₹45,000 – ₹75,000" },
  { item: "Aeration System (Blower + Diffusers)", range: "₹25,000 – ₹60,000" },
  { item: "Oxygen Management Unit", range: "₹15,000 – ₹40,000" },
  { item: "Water Quality Monitoring Kit", range: "₹10,000 – ₹35,000" },
  { item: "Feed & Probiotic (Per Cycle)", range: "₹30,000 – ₹80,000" },
  { item: "Fingerlings / PL Stock (Per Cycle)", range: "₹8,000 – ₹25,000" },
  { item: "Electricity (Per Cycle, 120 days)", range: "₹12,000 – ₹30,000" },
  { item: "Starter Biofloc System (5 Tanks)", range: "₹3.5 – ₹8 Lakh (All-in)" },
];

const faqs = [
  {
    q: "What is biofloc fish farming and how does it work?",
    a: "Biofloc fish farming is a sustainable aquaculture method based on bio floc technology (BFT), where beneficial microorganisms — bacteria, microalgae, cyanobacteria, and protozoa — are cultivated inside the fish tank itself. These microbial flocs serve two purposes: (1) they biologically treat water by converting ammonia and nitrite into harmless compounds, and (2) they provide a protein-rich supplementary feed for the fish. The result is a high-productivity, low-water-exchange system that reduces feed costs and disease risk simultaneously.",
  },
  {
    q: "What is the biofloc fish farming cost in India?",
    a: "Biofloc fish farming cost in India varies based on tank size, species, and level of automation. A single 10,000-litre biofloc fish tank complete with aeration, monitoring, and stock costs approximately ₹80,000–₹1,50,000 to set up. A starter commercial unit of 5 tanks (50,000 L total) ranges from ₹3.5 to ₹8 lakh depending on tank type (HDPE, tarpaulin, or RCC) and automation level. ARK AQUATECH provides free detailed project reports (DPR) with full biofloc fish farming cost breakdowns on request.",
  },
  {
    q: "What is the biofloc tank price from ARK AQUATECH?",
    a: "Biofloc tank price at ARK AQUATECH starts from ₹45,000 for a 10,000-litre food-grade HDPE round tank inclusive of frame, outlet fittings, and central drain. Larger biofloc fish tanks (25,000 L – 1,00,000 L) are priced on request based on specifications. Tarpaulin-based biofloc tanks are available at lower prices for budget-conscious farmers. Contact our team for a current biofloc tank price list.",
  },
  {
    q: "Which fish grows best in a biofloc system?",
    a: "Nile tilapia and hybrid tilapia are the most popular biofloc fish due to their tolerance for high stocking density, wide temperature range, and rapid growth. Pacific white shrimp (Litopenaeus vannamei) is the dominant species in biofloc shrimp farming. Catfish (Pangasius), common carp, rohu, and catla also perform excellently in biofloc fish tanks. ARK AQUATECH designs each biofloc pond setup around the specific species, stocking density, and target market of each client.",
  },
  {
    q: "How much land do I need for biofloc fish farming?",
    a: "One of the greatest advantages of bio floc farming is its land efficiency. A starter biofloc setup with five 10,000-litre HDPE tanks can be installed in as little as 2,000–3,000 sq ft (including working area and infrastructure), producing 2–3 MT of fish annually. Traditional pond farming would require 1–2 acres for equivalent output. This makes biofloc fish farming viable for peri-urban areas, rooftop farms, and land-scarce farmers.",
  },
  {
    q: "Do I need continuous electricity for a biofloc system?",
    a: "Yes — aeration is critical in a biofloc fish tank because the microbial community and fish both require sustained dissolved oxygen above 4–5 mg/L. Most ARK AQUATECH biofloc systems are designed with primary blowers and backup aeration, connected to automatic generator changeover switches. Our smart automation platform sends alerts if oxygen levels drop, allowing immediate corrective action before any stock mortality occurs.",
  },
];

const relatedLinks = [
  { href: "/services/advanced-aquaculture-systems", label: "Advanced Aquaculture Systems" },
  { href: "/services/aeration-systems",             label: "Aeration Systems" },
  { href: "/services/hdpe-pond-lining",             label: "HDPE Pond Lining" },
  { href: "/services/smart-farm-automation",        label: "Smart Farm Automation" },
  { href: "/services/oxygen-management",            label: "Oxygen Management" },
  { href: "/services/recirculating-aquaculture-systems", label: "RAS Systems" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BioflocFishFarmingPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#0A6EBD]/10 blur-[140px]" />
          <div className="absolute bottom-[-180px] right-[-180px] h-[420px] w-[420px] rounded-full bg-[#63C96A]/10 blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/10 bg-[#F4F8FF] px-5 py-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#021B2F]">
                Bio Floc Technology
              </span>
            </div>

            <h1 className="mt-8 text-[42px] font-black leading-[0.92] tracking-[-0.05em] text-[#021B2F] sm:text-[58px] lg:text-[72px]">
              Biofloc Fish<br />Farming
            </h1>

            <p className="mt-8 text-[16px] leading-[2] text-[#4B5563] sm:text-[18px]">
              ARK AQUATECH engineers India's most productive{" "}
              <strong>biofloc fish farming</strong> systems — complete{" "}
              <strong>biofloc tank</strong> design, aeration networks, oxygen management,
              water quality monitoring, and hands-on farmer training. Whether you are
              starting your first <strong>biofloc pond setup</strong> or scaling an
              existing operation, we deliver turnkey solutions backed by 12+ years of{" "}
              <strong>bio floc technology</strong> expertise.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {heroFeatures.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A6EBD]" />
                  <span className="text-[#374151] font-medium text-[15px]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
              >
                Get Free Project Report <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://wa.me/919063289228"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
              >
                WhatsApp Now
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[40px] border border-[#E5E7EB] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <Image
              src="/Services/services1.jpg"
              alt="Biofloc Fish Farming Tank Setup by ARK AQUATECH India"
              width={1200}
              height={1200}
              priority
              className="h-[500px] w-full object-cover lg:h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#021B2F] py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map(({ stat, label }) => (
            <div key={label}>
              <p className="text-[44px] font-black tracking-tight text-[#63C96A]">{stat}</p>
              <p className="mt-1 text-sm font-medium text-white/70 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          WHAT IS BIOFLOC — INTRO SEO BLOCK
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-[46px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            What Is Bio Floc Technology &amp; Why Is It Transforming Fish Farming in India?
          </h2>
          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              <strong>Bio floc technology (BFT)</strong> is a next-generation aquaculture method that
              harnesses beneficial microorganisms — heterotrophic bacteria, microalgae, cyanobacteria,
              and protozoa — to simultaneously treat water and produce natural feed inside the{" "}
              <strong>biofloc fish tank</strong>. Unlike traditional pond farming that releases
              nitrogen waste into surrounding water bodies, a <strong>biofloc system</strong> converts
              every gram of ammonia into bacterial biomass that fish consume as high-protein feed.
              The system essentially pays for its own water treatment while reducing feed bills.
            </p>
            <p>
              For Indian fish farmers, <strong>biofloc fish farming</strong> addresses three of the
              biggest challenges in the sector simultaneously: land scarcity, water availability, and
              high feed costs. A single 10,000-litre <strong>biofloc fish tank</strong> produces
              500–800 kg of tilapia per 120-day cycle on just 15–20 square metres of land. Running
              the same system on 500 square metres produces 25–40 MT annually — figures that were
              previously achievable only on 5–10 acres of traditional pond area.
            </p>
            <p>
              ARK AQUATECH has pioneered <strong>bio floc farming</strong> implementations across
              Andhra Pradesh, Telangana, Tamil Nadu, Odisha, West Bengal, and 30+ other Indian states.
              Our engineering team designs each <strong>biofloc pond setup</strong> around site-specific
              conditions — water source, climate, species, market proximity, and farmer experience level —
              to ensure every client achieves consistent, profitable results from their very first harvest cycle.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS — 4 STEPS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[44px] font-black tracking-[-0.04em] text-[#021B2F]">
              How Biofloc Fish Farming Works
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280] max-w-2xl mx-auto">
              A step-by-step look at the science behind bio floc technology and how ARK AQUATECH
              engineers it into a reliable, scalable production system.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map(({ step, title, body }) => (
              <div key={step} className="rounded-3xl bg-white border border-[#E5E7EB] p-8 shadow-sm relative">
                <span className="text-[64px] font-black text-[#0A6EBD]/10 leading-none absolute top-4 right-6">
                  {step}
                </span>
                <p className="text-[11px] uppercase tracking-widest font-bold text-[#0A6EBD] mb-3">Step {step}</p>
                <h3 className="text-[18px] font-bold text-[#021B2F] mb-3">{title}</h3>
                <p className="text-[14px] leading-[1.8] text-[#4B5563]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ADVANTAGES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#021B2F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[44px] font-black tracking-[-0.04em] text-white">
              6 Key Advantages of Bio Floc Farming
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-2xl mx-auto">
              Why thousands of Indian fish farmers are making the switch to{" "}
              <strong className="text-white">biofloc fish farming</strong> systems.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/8 transition">
                <Icon className="h-8 w-8 text-[#63C96A] mb-5" />
                <h3 className="text-[18px] font-bold text-white mb-3">{title}</h3>
                <p className="text-[14px] leading-[1.8] text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BIOFLOC TANK TYPES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/20 bg-[#F4F8FF] px-5 py-2 mb-6">
              <Droplets className="h-4 w-4 text-[#0A6EBD]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">Tank Options</span>
            </div>

            <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
              Biofloc Fish Tank Types &amp; Pricing
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              ARK AQUATECH supplies three main categories of <strong>biofloc fish tank</strong> to
              suit different budgets, scales, and operational contexts. Each option is engineered
              for optimal floc suspension, aeration efficiency, and ease of harvest — the three
              mechanical pillars of a productive <strong>biofloc system</strong>. Our team will
              recommend the right biofloc tank type based on your investment capacity, production
              target, and site conditions, with transparent <strong>biofloc tank price</strong> quotations.
            </p>

            <div className="space-y-5">
              {tankTypes.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-5 p-6 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB]">
                  <Icon className="h-6 w-6 shrink-0 text-[#0A6EBD] mt-1" />
                  <div>
                    <h3 className="font-bold text-[#021B2F] mb-1">{title}</h3>
                    <p className="text-[14px] leading-[1.75] text-[#4B5563]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] shadow-lg">
            <Image
              src="/Services/services1.jpg"
              alt="Biofloc Fish Tank HDPE Round Tank setup by ARK AQUATECH"
              width={900}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SPECIES TABLE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-4">
            Which Biofloc Fish Species Does ARK AQUATECH Support?
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Our <strong>biofloc fish farming</strong> systems are species-specific engineered.
            Stocking density, aeration rate, carbon source dosing, and harvest protocols differ
            significantly between tilapia, shrimp, catfish, and carp. The table below shows
            recommended parameters for each species in an ARK AQUATECH biofloc fish tank setup.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#021B2F] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Species</th>
                  <th className="text-left px-6 py-4 font-semibold">Stocking Density</th>
                  <th className="text-left px-6 py-4 font-semibold">Harvest Cycle</th>
                </tr>
              </thead>
              <tbody>
                {species.map(({ name, density, cycle }, i) => (
                  <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-6 py-4 font-medium text-[#021B2F]">{name}</td>
                    <td className="px-6 py-4 text-[#4B5563]">{density}</td>
                    <td className="px-6 py-4 text-[#4B5563]">{cycle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          COST TABLE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-4">
            Biofloc Fish Farming Cost Breakdown (India, 2024)
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Transparency in <strong>biofloc fish farming cost</strong> is central to how ARK
            AQUATECH operates. The figures below represent indicative market prices for a
            standard <strong>biofloc pond setup</strong> in India. Actual costs vary by location,
            tank type, species, and scale. Contact us for a free detailed project report (DPR)
            with site-specific <strong>biofloc tank price</strong> and ROI projections.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F4F8FF]">
                  <th className="text-left px-6 py-4 font-semibold text-[#021B2F]">Cost Item</th>
                  <th className="text-left px-6 py-4 font-semibold text-[#021B2F]">Indicative Range</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map(({ item, range }, i) => (
                  <tr key={item} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-6 py-4 text-[#374151]">{item}</td>
                    <td className="px-6 py-4 font-semibold text-[#0A6EBD]">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] leading-[1.85] text-[#4B5563]">
            Government subsidies under PMMSY (Pradhan Mantri Matsya Sampada Yojana) and state
            fisheries department schemes can cover 40–60% of <strong>biofloc fish farming</strong>{" "}
            capital costs for eligible farmers. ARK AQUATECH assists clients in preparing subsidy
            application documentation and bankable project reports (DPR) to access available funding.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Get Free DPR &amp; Cost Estimate <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LONG-FORM SEO CONTENT
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            ARK AQUATECH's Biofloc Fish Farming Support: From Setup to Harvest
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              Setting up a successful <strong>biofloc fish tank</strong> goes far beyond purchasing
              a container and filling it with water. The difference between a profitable biofloc
              farm and a failed one almost always comes down to the quality of initial system
              design, the precision of aeration sizing, and the consistency of water quality
              management during the first 30 days — what practitioners call the{" "}
              <em>biofloc maturation phase</em>. This is where ARK AQUATECH's engineering
              expertise and field experience become your greatest asset.
            </p>
            <p>
              Our <strong>biofloc pond setup</strong> process begins with a detailed site
              assessment: water source analysis, soil bearing capacity (for ground-mounted tanks),
              power availability, ambient temperature range, and market access for the target
              species. This data shapes every subsequent design decision — tank size and count,
              aeration horsepower, supplemental heating or cooling, biosecurity infrastructure,
              and harvest logistics. We do not apply a one-size-fits-all template; every ARK
              AQUATECH <strong>bio floc farming</strong> project is custom-engineered for its
              specific context.
            </p>
            <p>
              Aeration is the heartbeat of any <strong>biofloc system</strong>. The microbial
              community requires continuous oxygenation to remain aerobic and productive; fish
              require dissolved oxygen above 4–5 mg/L at all times; and the mechanical action
              of aeration keeps floc particles suspended rather than settling and putrefying at
              the tank bottom. ARK AQUATECH sizes aeration systems using computational fluid
              dynamics (CFD) modelling of tank geometry, ensuring uniform oxygen distribution
              even at peak biomass load. Our systems include primary blower banks, emergency
              backup blowers, automated changeover relays, and real-time dissolved oxygen
              monitoring with SMS alerts — so you are protected around the clock.
            </p>
            <p>
              Water quality management in <strong>biofloc fish farming</strong> is a dynamic
              daily discipline. As fish biomass grows, ammonia production rises, floc volume
              increases, and CO₂ accumulates. Our water quality protocols — including daily floc
              volume measurement, alkalinity supplementation, selective sludge removal, and
              periodic partial water exchange — are documented in detailed farm management
              standard operating procedures (SOPs) that our team trains your operators to execute
              precisely. This systematic approach is what consistently delivers harvest yields
              at the top end of species potential rather than the average.
            </p>
            <p>
              Post-harvest, ARK AQUATECH supports clients with market linkage advice, value-added
              processing options (live fish transport, chilled packing, dried and smoked products),
              and planning for the next production cycle. Our relationship with each farmer does
              not end at system commissioning — we are your long-term partner in building a
              profitable, sustainable <strong>biofloc fish farming</strong> enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F]">
              Biofloc Fish Farming — FAQs
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280]">
              Answers to the most common questions about biofloc tank price, setup cost,
              species selection, and bio floc technology in India.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-3xl bg-[#F4F8FF] border border-[#E5E7EB] p-8"
                itemScope
                itemType="https://schema.org/Question"
                itemProp="mainEntity"
              >
                <h3 className="text-[17px] font-bold text-[#021B2F] mb-3" itemProp="name">{q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-[15px] leading-[1.85] text-[#4B5563]" itemProp="text">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INTERNAL LINKS
      ══════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#F4F8FF] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[20px] font-bold text-[#021B2F] mb-6">
            Explore Related Aquaculture Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/30 bg-white px-5 py-2.5 text-sm font-medium text-[#0A6EBD] hover:bg-[#0A6EBD] hover:text-white transition"
              >
                {label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#021B2F] to-[#0A3A6A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[34px] sm:text-[48px] font-black tracking-[-0.04em] text-white leading-tight">
            Start Your Biofloc Fish<br />Farming Journey Today
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-xl mx-auto">
            Get a free detailed project report, transparent{" "}
            <strong className="text-white">biofloc tank price</strong> list, and site-specific{" "}
            <strong className="text-white">biofloc fish farming cost</strong> estimate from India's
            most trusted <strong className="text-white">bio floc technology</strong> company.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#63C96A] px-9 py-4 text-base font-semibold text-[#021B2F] hover:bg-[#4db855] transition shadow-lg"
            >
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://wa.me/919063289228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/20 px-9 py-4 text-base font-semibold text-white hover:bg-white/20 transition"
            >
              WhatsApp Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          JSON-LD SCHEMA
      ══════════════════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Biofloc Fish Farming Systems",
            "serviceType": "Aquaculture Engineering — Biofloc Technology",
            "provider": {
              "@type": "Organization",
              "name": "ARK AQUATECH",
              "url": "https://www.arkaquatech.com",
              "telephone": "+919063289228",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
              },
            },
            "description":
              "ARK AQUATECH provides complete biofloc fish farming systems including biofloc tank design and supply, aeration systems, oxygen management, water quality monitoring, and 24/7 technical support across India.",
            "url": "https://www.arkaquatech.com/services/biofloc-fish-farming",
            "areaServed": "IN",
            "keywords": [
              "biofloc fish farming",
              "biofloc tank",
              "bio floc technology",
              "biofloc fish tank",
              "biofloc fish farming cost",
              "biofloc tank price",
              "bio floc farming",
              "biofloc pond setup",
              "fishery technology",
              "aquaculture system",
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "45000",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "description": "Biofloc tank price starting from ₹45,000 for 10,000 L HDPE unit",
              },
            },
          }),
        }}
      />
    </main>
  );
}