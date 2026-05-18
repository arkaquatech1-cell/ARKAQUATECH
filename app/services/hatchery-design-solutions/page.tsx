// app/services/hatchery-design-solutions/page.tsx

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
  Thermometer,
  Wind,
} from "lucide-react";

export const metadata = {
  title:
    "Hatchery Design Solutions | Fish Hatchery Setup & Breeding Systems | ARK AQUATECH",
  description:
    "ARK AQUATECH designs and builds modern fish hatchery systems including fish breeding tanks, larval rearing units, water recirculation, filtration, oxygen management, and complete hatchery infrastructure across India. Get your hatchery setup cost today.",
  keywords: [
    "hatchery design",
    "fish hatchery",
    "fish hatchery setup",
    "fish breeding system",
    "hatchery infrastructure",
    "larval rearing unit",
    "fish hatchery design India",
    "shrimp hatchery design",
    "tilapia hatchery",
    "hatchery water recirculation system",
    "aquaculture hatchery",
    "fish seed production",
    "hatchery filtration system",
    "freshwater hatchery",
    "marine hatchery design",
    "hatchery management",
    "fish egg incubation system",
    "broodstock management",
  ],
  openGraph: {
    title: "Hatchery Design Solutions | Fish Breeding Systems | ARK AQUATECH",
    description:
      "Complete fish hatchery design and setup — breeding tanks, larval rearing, water recirculation, filtration & smart automation. Trusted by 500+ farms across India.",
    url: "https://www.arkaquatech.com/services/hatchery-design-solutions",
    siteName: "ARK AQUATECH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.arkaquatech.com/services/hatchery-design-solutions",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroFeatures = [
  "Custom Fish Hatchery Design & Layout",
  "Broodstock & Breeding Tank Systems",
  "Larval Rearing & Nursery Units",
  "Hatchery Water Recirculation (RAS)",
  "Filtration & Pathogen Control",
  "Smart Hatchery Automation & Monitoring",
];

const stats = [
  { stat: "200+", label: "Hatcheries Commissioned" },
  { stat: "95%",  label: "Fingerling Survival Rate" },
  { stat: "12+",  label: "Species Supported" },
  { stat: "30+",  label: "States Served in India" },
];

const phases = [
  {
    step: "01",
    title: "Site Assessment & Feasibility",
    body:
      "Every successful fish hatchery begins with a rigorous site assessment. ARK AQUATECH evaluates water source quality, flow rate, temperature stability, land topography, power availability, biosecurity risk, and proximity to grow-out farms. This data drives a feasibility report that determines optimal hatchery capacity, layout configuration, and species suitability before a single rupee is spent on infrastructure.",
  },
  {
    step: "02",
    title: "Hatchery Design & Engineering",
    body:
      "Our engineers produce detailed hatchery design drawings covering broodstock holding areas, spawning systems, egg incubation hatching jars, larval rearing tanks, nursery grow-out raceways, live feed production units (Artemia, rotifer, algae), water treatment trains, and utility infrastructure. Every design is species-specific, biosecurity-compliant, and engineered for operational efficiency.",
  },
  {
    step: "03",
    title: "Construction & System Installation",
    body:
      "ARK AQUATECH manages complete hatchery construction — civil works, tank fabrication (FRP, HDPE, concrete), plumbing, aeration networks, recirculating water systems, UV sterilisation, ozone dosing, temperature control, and electrical infrastructure. We coordinate all trades under a single project management framework to ensure on-time, on-budget delivery.",
  },
  {
    step: "04",
    title: "Commissioning, Training & Support",
    body:
      "System commissioning includes full water quality validation, equipment calibration, biosecurity protocol testing, and a structured 5-day operator training programme. ARK AQUATECH provides a 12-month post-commissioning support contract covering remote diagnostics, quarterly site audits, consumables management, and emergency technical assistance.",
  },
];

const services = [
  {
    icon: Fish,
    title: "Broodstock Management Systems",
    body:
      "High-biosecurity broodstock holding tanks with individual species and sex segregation, controlled photoperiod lighting for induced spawning, hormone treatment protocols, and continuous water quality monitoring. Properly managed broodstock is the foundation of consistent, high-quality fish seed production — our systems maximise spawning frequency and egg viability.",
  },
  {
    icon: Droplets,
    title: "Egg Incubation & Hatching Systems",
    body:
      "McDonald-type and vertical flow hatching jars, tray incubators, and recirculating hatching systems engineered for optimal oxygen delivery, gentle water flow, and UV-disinfected water supply. ARK AQUATECH's fish egg incubation systems routinely achieve 85–95% hatch rates across tilapia, catfish, carp, shrimp, and marine species.",
  },
  {
    icon: FlaskConical,
    title: "Larval Rearing Units",
    body:
      "Conical or cylindro-conical fibre-reinforced plastic (FRP) larval rearing tanks with fine-bubble aeration, bottom drainage, and shading systems for light-sensitive larvae. Sized from 500 L to 20,000 L depending on production targets. Integrated with live feed dosing systems for Artemia nauplii, rotifers, and microalgae paste — the critical nutrition chain for early larval stages.",
  },
  {
    icon: Wind,
    title: "Hatchery Water Recirculation Systems",
    body:
      "Closed-loop hatchery water recirculation systems (RAS) incorporating drum filters, biofilm reactors (MBBR or trickling filters), UV sterilisers, protein skimmers, degassers, and chiller/heater units. RAS hatcheries reduce water consumption by 90–98%, eliminate pathogen introduction risk from external water sources, and enable precise temperature control year-round — critical for out-of-season spawning induction.",
  },
  {
    icon: Thermometer,
    title: "Temperature Control & Conditioning",
    body:
      "Species-specific temperature conditioning systems including industrial chillers, heat exchangers, immersion heaters, and insulated tank jackets. Precise thermal management is essential for controlling spawning cycles, accelerating larval development, and maintaining consistent survival rates. ARK AQUATECH designs and installs thermal systems capable of maintaining ±0.5°C stability across all hatchery zones.",
  },
  {
    icon: Settings2,
    title: "Smart Hatchery Automation",
    body:
      "IoT-based hatchery management systems with real-time dashboards monitoring dissolved oxygen, pH, temperature, salinity, turbidity, and ammonia across all tank zones. Automated feeding systems, photoperiod controllers, alarm networks, and remote access via mobile app reduce labour by 40% and eliminate the human error that causes the majority of larval mortality events.",
  },
  {
    icon: ShieldCheck,
    title: "Biosecurity & Pathogen Control",
    body:
      "Hatchery biosecurity infrastructure including footbaths, air curtains, UV entry corridors, quarantine tank systems, effluent sterilisation, and strict water treatment protocols. ARK AQUATECH's hatchery designs follow NACA and FAO biosecurity guidelines to protect your broodstock investment and larval batches from viral, bacterial, and parasitic disease outbreaks.",
  },
  {
    icon: Zap,
    title: "Live Feed Production Units",
    body:
      "Integrated live feed production systems for green water algae (Chlorella, Nannochloropsis), rotifer mass culture, Artemia hatching and enrichment, and copepod culture. Live feed quality directly determines larval survival and early growth rates in marine and freshwater hatcheries — ARK AQUATECH designs dedicated, biosecure live feed rooms within the hatchery footprint.",
  },
];

const speciesSupported = [
  { species: "Nile & Hybrid Tilapia",       type: "Freshwater",  output: "5–50 lakh fry/cycle" },
  { species: "Rohu, Catla & Mrigal (IMC)",  type: "Freshwater",  output: "10–100 lakh fry/cycle" },
  { species: "Catfish (Pangasius/Clarias)", type: "Freshwater",  output: "5–30 lakh fry/cycle" },
  { species: "Common & Grass Carp",         type: "Freshwater",  output: "10–80 lakh fry/cycle" },
  { species: "Shrimp (L. vannamei, Monodon)",type: "Marine/BW",  output: "50–500 lakh PL/cycle" },
  { species: "Seabass (Barramundi)",         type: "Marine",      output: "2–20 lakh larvae/cycle" },
  { species: "Grouper & Snapper",           type: "Marine",      output: "1–10 lakh larvae/cycle" },
  { species: "Ornamental Fish",             type: "Freshwater",  output: "Custom" },
];

const faqs = [
  {
    q: "What does a complete fish hatchery design from ARK AQUATECH include?",
    a: "A complete hatchery design from ARK AQUATECH covers the full lifecycle of fish seed production: broodstock holding and conditioning systems, spawning and egg collection infrastructure, incubation and hatching units, larval rearing tanks, nursery grow-out raceways, live feed production (algae, rotifer, Artemia), water treatment and recirculation systems, biosecurity infrastructure, and smart automation. We deliver architectural drawings, engineering specifications, equipment schedules, and operational SOPs — everything needed for construction and operation.",
  },
  {
    q: "How much does a fish hatchery setup cost in India?",
    a: "Fish hatchery setup cost in India varies significantly by species, production capacity, and technology level. A small freshwater hatchery for carp or tilapia (10–50 lakh fry/cycle) typically costs ₹20–60 lakh for civil and equipment infrastructure. A mid-scale shrimp hatchery (50–200 lakh PL/cycle) ranges from ₹80 lakh to ₹2.5 crore. Marine species hatcheries with RAS and temperature control are more capital-intensive, starting at ₹1.5–5 crore. ARK AQUATECH provides free detailed project reports (DPR) with itemised cost estimates. Government subsidies under PMMSY can cover 40–60% of eligible hatchery capital costs.",
  },
  {
    q: "What is a hatchery water recirculation system and why is it important?",
    a: "A hatchery water recirculation system (RAS) continuously filters, treats, and re-uses the same water in a closed loop — replacing only 2–10% daily through evaporation and sludge removal. This is critical in hatcheries because larval stages are extremely sensitive to water quality fluctuations and pathogen exposure. By eliminating reliance on raw intake water (which carries pathogens, fluctuating temperatures, and variable chemistry), RAS hatcheries achieve dramatically higher and more consistent larval survival rates compared to flow-through designs.",
  },
  {
    q: "Which fish species does ARK AQUATECH design hatcheries for?",
    a: "ARK AQUATECH designs hatcheries for a wide range of freshwater and marine species including Nile tilapia, hybrid tilapia, Indian major carps (rohu, catla, mrigal), catfish (Pangasius and Clarias), common and grass carp, Pacific white shrimp (L. vannamei), black tiger shrimp (P. monodon), seabass/barramundi, grouper, snapper, and ornamental fish. Each hatchery design is fully customised to the reproductive biology, larval requirements, and commercial production targets of the target species.",
  },
  {
    q: "Can ARK AQUATECH integrate hatchery and grow-out farm operations?",
    a: "Yes — integrated hatchery-to-harvest systems are one of ARK AQUATECH's core specialisations. We design hatchery infrastructure that connects seamlessly to nursery units and grow-out facilities (biofloc tanks, RAS, or pond systems), enabling a single enterprise to control the full production chain from broodstock to market. This vertical integration dramatically reduces fingerling procurement costs, ensures genetic quality control, and eliminates the biosecurity risks associated with purchasing seed from third-party suppliers.",
  },
  {
    q: "What ongoing support does ARK AQUATECH provide after hatchery commissioning?",
    a: "Post-commissioning support includes a 12-month technical support contract with quarterly site audits, remote water quality diagnostics, equipment maintenance scheduling, consumables (probiotics, disinfectants, biosecurity supplies) procurement support, and a dedicated helpline for emergency technical assistance. We also offer multi-year hatchery management advisory services for clients seeking ongoing optimisation of survival rates, spawning frequency, and production costs.",
  },
];

const relatedLinks = [
  { href: "/services/biofloc-fish-farming",           label: "Biofloc Fish Farming" },
  { href: "/services/advanced-aquaculture-systems",   label: "Advanced Aquaculture Systems" },
  { href: "/services/aeration-systems",               label: "Aeration Systems" },
  { href: "/services/hdpe-pond-lining",               label: "HDPE Pond Lining" },
  { href: "/services/smart-farm-automation",          label: "Smart Farm Automation" },
  { href: "/services/oxygen-management",              label: "Oxygen Management" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HatcheryDesignSolutionsPage() {
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
                Hatchery Solutions
              </span>
            </div>

            <h1 className="mt-8 text-[42px] font-black leading-[0.92] tracking-[-0.05em] text-[#021B2F] sm:text-[58px] lg:text-[72px]">
              Hatchery Design<br />Solutions
            </h1>

            <p className="mt-8 text-[16px] leading-[2] text-[#4B5563] sm:text-[18px]">
              ARK AQUATECH designs and builds India's most advanced{" "}
              <strong>fish hatchery</strong> systems — from{" "}
              <strong>broodstock management</strong> and{" "}
              <strong>fish egg incubation</strong> to{" "}
              <strong>larval rearing units</strong>,{" "}
              <strong>hatchery water recirculation</strong>, biosecurity infrastructure,
              and smart automation. Whether you need a small freshwater{" "}
              <strong>fish hatchery setup</strong> or a large-scale marine{" "}
              <strong>shrimp hatchery design</strong>, our engineers deliver
              production-ready facilities on time and within budget.
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
                Get Free Hatchery DPR <ArrowRight className="h-4 w-4" />
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
              src="/Services/services6.jpg"
              alt="Modern Fish Hatchery Design and Setup by ARK AQUATECH India"
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
          INTRO SEO BLOCK
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-[46px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            Why Professional Fish Hatchery Design Determines Your Farm's Long-Term Success
          </h2>
          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              The quality and consistency of fish seed — fingerlings, post-larvae, and fry — is the
              single most critical input in any aquaculture enterprise. Poorly designed{" "}
              <strong>fish hatcheries</strong> produce low-survival seed with high disease burdens
              and inconsistent genetic quality, undermining every downstream investment in grow-out
              infrastructure, feed, and labour. Professionally engineered{" "}
              <strong>hatchery design solutions</strong> from ARK AQUATECH give Indian fish farmers
              and aquaculture entrepreneurs the foundation for reliable, high-survival seed production
              that feeds profitable, scalable grow-out operations.
            </p>
            <p>
              India's aquaculture sector faces a chronic shortage of quality fish seed, with demand
              for certified disease-free fingerlings and post-larvae far outstripping supply in most
              states. An efficiently designed <strong>fish hatchery setup</strong> is therefore not
              only a support infrastructure for your own farm — it is a standalone commercial
              opportunity, supplying premium seed to other growers in your region at strong margins.
              ARK AQUATECH has helped dozens of Indian entrepreneurs build profitable seed production
              businesses by designing hatcheries that combine biological excellence with operational
              efficiency and low running costs.
            </p>
            <p>
              Our <strong>hatchery design</strong> approach is rooted in species biology, not generic
              templates. The reproductive requirements of Nile tilapia differ fundamentally from
              those of Pacific white shrimp, and the larval rearing protocols for marine barramundi
              are entirely different from those for Indian major carps. ARK AQUATECH's team of
              aquaculture engineers and fishery technologists brings species-specific expertise
              across freshwater, brackish water, and marine hatchery systems to every project we
              undertake across India.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          4-PHASE PROCESS
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[44px] font-black tracking-[-0.04em] text-[#021B2F]">
              Our Hatchery Design Process
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280] max-w-2xl mx-auto">
              From feasibility study to first harvest — how ARK AQUATECH delivers
              production-ready <strong>fish hatchery</strong> facilities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map(({ step, title, body }) => (
              <div key={step} className="rounded-3xl bg-white border border-[#E5E7EB] p-8 shadow-sm relative">
                <span className="text-[64px] font-black text-[#0A6EBD]/10 leading-none absolute top-4 right-6">
                  {step}
                </span>
                <p className="text-[11px] uppercase tracking-widest font-bold text-[#0A6EBD] mb-3">Phase {step}</p>
                <h3 className="text-[17px] font-bold text-[#021B2F] mb-3">{title}</h3>
                <p className="text-[14px] leading-[1.8] text-[#4B5563]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          8 SERVICES GRID
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#021B2F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] sm:text-[44px] font-black tracking-[-0.04em] text-white">
              Complete Hatchery Infrastructure Services
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-2xl mx-auto">
              Every system your <strong className="text-white">fish hatchery</strong> needs —
              engineered, supplied, and installed by one expert team.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl bg-white/5 border border-white/10 p-7 hover:bg-white/8 transition">
                <Icon className="h-7 w-7 text-[#63C96A] mb-5" />
                <h3 className="text-[16px] font-bold text-white mb-3">{title}</h3>
                <p className="text-[13px] leading-[1.8] text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SPECIES TABLE + IMAGE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-start">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/20 bg-[#F4F8FF] px-5 py-2 mb-6">
              <Fish className="h-4 w-4 text-[#0A6EBD]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">Species Coverage</span>
            </div>

            <h2 className="text-[30px] sm:text-[40px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
              Fish &amp; Shrimp Species We Design Hatcheries For
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              ARK AQUATECH's <strong>hatchery design</strong> expertise spans freshwater, brackish,
              and marine species. Each hatchery is engineered around the specific reproductive
              biology, larval nutrition requirements, and biosecurity profile of the target species —
              never a generic template applied across different organisms.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#021B2F] text-white">
                    <th className="text-left px-5 py-4 font-semibold">Species</th>
                    <th className="text-left px-5 py-4 font-semibold">Water Type</th>
                    <th className="text-left px-5 py-4 font-semibold">Output Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {speciesSupported.map(({ species, type, output }, i) => (
                    <tr key={species} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                      <td className="px-5 py-3.5 font-medium text-[#021B2F] text-[13px]">{species}</td>
                      <td className="px-5 py-3.5 text-[#4B5563] text-[13px]">{type}</td>
                      <td className="px-5 py-3.5 text-[#4B5563] text-[13px]">{output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Discuss Your Species &amp; Target Output <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] shadow-lg">
              <Image
                src="/Services/services6.jpg"
                alt="Fish hatchery larval rearing tanks and breeding infrastructure by ARK AQUATECH"
                width={900}
                height={600}
                className="h-[360px] w-full object-cover"
              />
            </div>

            {/* Highlight box */}
            <div className="rounded-3xl bg-[#F4F8FF] border border-[#0A6EBD]/15 p-8">
              <h3 className="text-[18px] font-bold text-[#021B2F] mb-3">
                Integrated Hatchery-to-Grow-Out Systems
              </h3>
              <p className="text-[15px] leading-[1.85] text-[#4B5563]">
                ARK AQUATECH specialises in designing hatcheries that connect directly to biofloc
                fish farming tanks, RAS grow-out systems, or earthen pond nurseries — creating a
                fully vertically integrated aquaculture enterprise. Controlling your own seed supply
                eliminates dependence on unreliable third-party hatcheries, cuts fingerling costs by
                40–60%, and gives you complete genetic quality control over every batch you grow.
              </p>
              <Link
                href="/services/advanced-aquaculture-systems"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A6EBD] hover:underline"
              >
                Explore Integrated Systems <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LONG-FORM EDITORIAL SEO CONTENT
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            What Makes ARK AQUATECH's Hatchery Design Different?
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              Most aquaculture infrastructure companies offer catalogue-based hatchery equipment
              packages that look identical regardless of species, geography, or production goal.
              ARK AQUATECH takes a fundamentally different approach: every{" "}
              <strong>fish hatchery design</strong> we produce begins with biology and works
              backwards to engineering. We ask what the organism needs at each life stage —
              water temperature, flow velocity, light intensity, dissolved oxygen, salinity,
              prey particle size during larval feeding — and then design the mechanical
              infrastructure to deliver those conditions with precision and reliability.
            </p>
            <p>
              <strong>Hatchery water recirculation systems</strong> (RAS) are at the heart of
              every modern ARK AQUATECH hatchery design. In conventional flow-through hatcheries,
              water quality depends entirely on the incoming source — which fluctuates seasonally
              in temperature, pathogen load, and chemistry. During a disease outbreak in a nearby
              water body, a flow-through hatchery is defenceless. Our recirculating hatchery
              systems filter, sterilise, and recondition all water to precisely defined parameters
              before it contacts any broodstock, egg, or larva. The result is consistent survival
              rates across batches and seasons — the hallmark of a professionally managed{" "}
              <strong>aquaculture hatchery</strong>.
            </p>
            <p>
              Biosecurity is the second pillar of ARK AQUATECH's{" "}
              <strong>hatchery infrastructure</strong> design philosophy. We apply zonal biosecurity
              principles — separating the hatchery into clean, grey, and dirty zones with
              appropriate physical and procedural barriers — to prevent cross-contamination between
              broodstock areas, larval zones, live feed production units, and staff movement paths.
              Pathogen introduction events that destroy entire hatchery batches are almost
              invariably the result of inadequate biosecurity design in the original facility.
              Investing in proper biosecurity infrastructure at the design stage is dramatically
              cheaper than recovering from a viral or bacterial outbreak post-commissioning.
            </p>
            <p>
              Our <strong>smart hatchery automation</strong> systems transform how Indian hatchery
              operators work. Rather than relying on manual water testing several times daily —
              a labour-intensive and error-prone process — ARK AQUATECH installs continuous
              multi-parameter sensors in every tank zone, feeding real-time data to a centralised
              dashboard accessible on any smartphone. Automated alarms alert staff immediately
              when dissolved oxygen, temperature, pH, or salinity deviate from species-specific
              safe thresholds. This early warning system is the difference between a corrected
              parameter and a mass larval mortality event. Combined with automated feeding systems
              and photoperiod controllers, our automation platforms reduce skilled labour
              requirements by 35–45% while improving biological outcomes.
            </p>
            <p>
              Government support for <strong>fish hatchery setup</strong> in India has strengthened
              significantly under the Pradhan Mantri Matsya Sampada Yojana (PMMSY) scheme. Eligible
              freshwater and brackish water hatcheries can access capital subsidies of 40% (general
              category) to 60% (SC/ST/women beneficiaries) on qualifying infrastructure costs.
              ARK AQUATECH assists every hatchery client in preparing bankable detailed project
              reports (DPR), subsidy applications, and all supporting documentation required for
              state fisheries department approvals — maximising the government funding available
              to reduce your capital investment and accelerate return on equity.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FAQ — SCHEMA
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F]">
              Hatchery Design FAQs
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280]">
              Common questions about fish hatchery setup cost, design process, species support,
              and government subsidies for hatchery infrastructure in India.
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
            Ready to Design Your Fish Hatchery?
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-xl mx-auto">
            Get a free detailed project report, species-specific{" "}
            <strong className="text-white">hatchery design</strong> drawings, cost estimate,
            and PMMSY subsidy eligibility assessment from India's most trusted{" "}
            <strong className="text-white">aquaculture hatchery</strong> engineering team.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#63C96A] px-9 py-4 text-base font-semibold text-[#021B2F] hover:bg-[#4db855] transition shadow-lg"
            >
              Get Free Hatchery DPR <ArrowRight className="h-4 w-4" />
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
            "name": "Hatchery Design Solutions",
            "serviceType": "Fish Hatchery Engineering & Design",
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
              "ARK AQUATECH designs and builds complete fish hatchery systems including broodstock management, fish egg incubation, larval rearing tanks, hatchery water recirculation, biosecurity infrastructure, live feed production, and smart automation for freshwater, brackish, and marine species across India.",
            "url": "https://www.arkaquatech.com/services/hatchery-design-solutions",
            "areaServed": "IN",
            "keywords": [
              "hatchery design",
              "fish hatchery",
              "fish hatchery setup",
              "fish breeding system",
              "larval rearing unit",
              "shrimp hatchery design",
              "hatchery water recirculation system",
              "aquaculture hatchery",
              "fish seed production",
              "broodstock management",
            ],
          }),
        }}
      />
    </main>
  );
}