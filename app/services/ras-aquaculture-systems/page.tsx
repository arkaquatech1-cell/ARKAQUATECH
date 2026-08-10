// app/services/ras-aquaculture-systems/page.tsx

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
    "RAS Aquaculture Systems | Recirculating Aquaculture System Setup | ARK AQUATECH",
  description:
    "ARK AQUATECH specialises in RAS aquaculture systems, recirculating aquaculture system design, RAS tank setup, biofiltration, oxygen management, and complete RAS fish farming solutions across India. Get RAS aquaculture cost estimates today.",
  keywords: [
    "RAS aquaculture systems",
    "recirculating aquaculture system",
    "RAS fish farming",
    "RAS tank",
    "RAS aquaculture cost",
    "RAS system price",
    "RAS fish farming India",
    "biofilter aquaculture",
    "closed system fish farming",
    "RAS shrimp farming",
    "RAS tilapia farming",
    "aquaculture technology",
    "fishery technology",
    "indoor fish farming system",
    "water recirculation aquaculture",
  ],
  openGraph: {
    title: "RAS Aquaculture Systems | ARK AQUATECH India",
    description:
      "Complete recirculating aquaculture system solutions — tank design, biofiltration, oxygen management, and 24/7 support. Get your RAS system price and setup quote from ARK AQUATECH.",
    url: "https://www.arkaquatech.com/services/ras-aquaculture-systems",
    siteName: "ARK AQUATECH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.arkaquatech.com/services/ras-aquaculture-systems",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroFeatures = [
  "RAS Tank & Biofilter Design",
  "Mechanical & Biological Filtration",
  "Oxygen & CO₂ Management",
  "Water Quality Monitoring (24/7)",
  "UV / Ozone Disinfection Systems",
  "End-to-End Technical Support",
];

const stats = [
  { stat: "95%",   label: "Water Reuse Rate" },
  { stat: "10×",   label: "Higher Density vs Pond" },
  { stat: "30%",   label: "Faster Growth Cycles" },
  { stat: "365",   label: "Days Year-Round Production" },
];

const howItWorks = [
  {
    step: "01",
    title: "Mechanical Filtration",
    body:
      "Water drawn from the RAS tank first passes through drum filters or settling tanks that remove solid waste — uneaten feed, faeces, and sludge — before it reaches the biological treatment stage. This keeps the recirculating aquaculture system clear and prevents organic overload downstream.",
  },
  {
    step: "02",
    title: "Biological Filtration (Nitrification)",
    body:
      "Filtered water flows through a biofilter packed with media that hosts nitrifying bacteria. These bacteria convert toxic ammonia excreted by fish into nitrite and then into relatively harmless nitrate, allowing the RAS tank to sustain high stocking densities without water exchange.",
  },
  {
    step: "03",
    title: "Degassing & Oxygenation",
    body:
      "Dissolved CO₂ is stripped out through degassing towers, and oxygen is reintroduced via low-head oxygenators or pure oxygen cones. Precise oxygen management keeps dissolved oxygen above 6–7 mg/L even at maximum biomass load — critical for a productive RAS aquaculture system.",
  },
  {
    step: "04",
    title: "Disinfection & Return",
    body:
      "Treated water passes through UV sterilisers or ozone units to neutralise pathogens before being returned to the culture tank. ARK AQUATECH designs each recirculating loop for a full turnover every 30–60 minutes, so water quality stays consistent across the entire RAS fish farming operation.",
  },
];

const species = [
  { name: "Tilapia (Nile & Hybrid)",  density: "40–80 kg / m³",  cycle: "150–180 days" },
  { name: "Barramundi (Seabass)",     density: "30–60 kg / m³",  cycle: "180–220 days" },
  { name: "Pangasius (Catfish)",      density: "40–70 kg / m³",  cycle: "150–200 days" },
  { name: "Shrimp (L. vannamei)",     density: "3–5 kg / m³",    cycle: "90–110 days" },
  { name: "Trout (Cold Water RAS)",   density: "25–45 kg / m³",  cycle: "180–240 days" },
  { name: "Ornamental / Koi Fish",    density: "Custom stocking", cycle: "Varies by species" },
];

const tankTypes = [
  {
    icon: Droplets,
    title: "Circular RAS Tanks",
    body:
      "Food-grade fibreglass or HDPE circular tanks in 5,000 L – 1,00,000 L capacities, engineered for uniform self-cleaning water flow and optimal solids removal. The most common RAS tank configuration for commercial recirculating aquaculture systems. RAS system price starts from ₹1.2 lakh for an entry-level modular unit.",
  },
  {
    icon: FlaskConical,
    title: "Rectangular Raceway Tanks",
    body:
      "Linear raceway-style RAS tanks suited for species that prefer directional flow, such as trout and barramundi. Available in modular sections that can be scaled up as production grows, with shared biofiltration and pumping infrastructure across the raceway bank.",
  },
  {
    icon: Fish,
    title: "Modular Container RAS Units",
    body:
      "Fully containerised, plug-and-play RAS aquaculture systems housed in insulated shipping containers — complete with biofilter, pumps, oxygenation, and automation pre-installed. Ideal for urban aquaculture, remote sites, and farmers who want rapid deployment with minimal civil work.",
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: "10× Higher Stocking Density",
    body:
      "RAS aquaculture systems sustain stocking densities up to 10 times higher than open pond farming on the same footprint, because water quality is continuously controlled rather than diluted by volume, dramatically improving revenue per square metre.",
  },
  {
    icon: Leaf,
    title: "Up to 95% Water Reuse",
    body:
      "A recirculating aquaculture system reuses 90–95% of its water through continuous filtration and treatment, replacing only what is lost to evaporation and sludge removal — making RAS the most water-efficient aquaculture technology available, ideal for water-scarce regions of India.",
  },
  {
    icon: ShieldCheck,
    title: "Full Biosecurity Control",
    body:
      "Because a RAS fish farming system is a closed loop with UV/ozone disinfection at every recirculation cycle, farmers gain near-total control over pathogen entry, dramatically reducing disease outbreaks and the need for antibiotics — a major advantage for export-grade fish and shrimp.",
  },
  {
    icon: Zap,
    title: "Location Independence",
    body:
      "RAS aquaculture systems can be installed indoors, in urban warehouses, or in climate-controlled facilities far from natural water bodies. This location independence lets farmers grow warm-water or cold-water species anywhere in India, regardless of local climate or water source.",
  },
  {
    icon: Settings2,
    title: "Precise, Stable Water Quality",
    body:
      "Continuous monitoring and automated dosing keep temperature, pH, ammonia, and dissolved oxygen within tight tolerances at all times. This stability reduces stress-related mortality and consistently improves feed conversion ratio (FCR) compared to open systems exposed to weather swings.",
  },
  {
    icon: FlaskConical,
    title: "Concentrated, Reusable Waste",
    body:
      "Solid waste captured by mechanical filtration in a RAS tank is concentrated rather than diluted, making it easy to divert into biogas digesters or organic fertiliser production — turning what was once effluent into an additional revenue stream for the farm.",
  },
];

const costTable = [
  { item: "RAS Tank (10,000 L Fibreglass/HDPE)", range: "₹1,20,000 – ₹2,50,000" },
  { item: "Biofilter & Filtration Skid", range: "₹80,000 – ₹2,00,000" },
  { item: "Oxygenation & Degassing Unit", range: "₹60,000 – ₹1,50,000" },
  { item: "UV / Ozone Disinfection System", range: "₹40,000 – ₹1,20,000" },
  { item: "Automation & Water Quality Monitoring", range: "₹50,000 – ₹1,50,000" },
  { item: "Feed & Fingerlings (Per Cycle)", range: "₹60,000 – ₹1,50,000" },
  { item: "Electricity (Per Cycle, 150 days)", range: "₹40,000 – ₹90,000" },
  { item: "Starter RAS System (Single Loop)", range: "₹8 – ₹18 Lakh (All-in)" },
];

const faqs = [
  {
    q: "What is a RAS aquaculture system and how does it work?",
    a: "A RAS aquaculture system, short for Recirculating Aquaculture System, is a closed-loop fish farming technology where water is continuously filtered, biologically treated, oxygenated, and disinfected before being returned to the RAS tank. Mechanical filters remove solid waste, biofilters convert ammonia into safer compounds via nitrification, and degassing and oxygenation units maintain optimal water conditions. The result is a highly controlled, water-efficient system capable of very high stocking densities.",
  },
  {
    q: "What is the RAS aquaculture cost in India?",
    a: "RAS aquaculture cost in India varies based on tank capacity, species, and level of automation. A single 10,000-litre RAS tank complete with biofiltration, oxygenation, disinfection, and monitoring costs approximately ₹3–₹6 lakh to set up. A starter commercial RAS loop ranges from ₹8 to ₹18 lakh depending on tank type, automation level, and target production capacity. ARK AQUATECH provides free detailed project reports (DPR) with full RAS aquaculture cost breakdowns on request.",
  },
  {
    q: "What is the RAS system price from ARK AQUATECH?",
    a: "RAS system price at ARK AQUATECH starts from ₹1.2 lakh for an entry-level 5,000–10,000 litre circular RAS tank inclusive of frame, plumbing, and outlet fittings, before biofiltration and automation add-ons. Larger and fully modular container RAS units are priced on request based on specifications. Contact our team for a current RAS system price list.",
  },
  {
    q: "Which fish species grow best in a RAS aquaculture system?",
    a: "Barramundi, tilapia, and pangasius are among the most popular RAS fish farming species due to their tolerance for high density and stable water parameters. Cold-water species like trout thrive in temperature-controlled RAS raceway systems, while Pacific white shrimp (L. vannamei) is increasingly farmed in RAS for biosecure, disease-free production. ARK AQUATECH designs each RAS aquaculture system around the specific species, density target, and market of each client.",
  },
  {
    q: "How much space does a RAS aquaculture system need?",
    a: "RAS aquaculture systems are extremely space-efficient because of their high stocking densities. A single 10,000-litre RAS tank producing 400–800 kg of fish per cycle can be installed in as little as 300–500 sq ft, including filtration and support infrastructure. Multi-tank commercial RAS facilities can achieve 30–50 MT of annual production within 5,000–10,000 sq ft — output that would otherwise require several acres of pond area.",
  },
  {
    q: "Do I need continuous electricity for a RAS aquaculture system?",
    a: "Yes — continuous pumping, filtration, and oxygenation are essential in a RAS tank because fish rely entirely on mechanical systems for water quality, unlike open ponds. ARK AQUATECH designs every RAS aquaculture system with redundant pumps, backup blowers, and automatic generator changeover switches. Our smart automation platform sends instant alerts if flow, oxygen, or power parameters drop out of range, so corrective action can be taken before any stock is affected.",
  },
];

const relatedLinks = [
  { href: "/services/biofloc-fish-farming",          label: "Biofloc Fish Farming" },
  { href: "/services/advanced-aquaculture-systems",  label: "Advanced Aquaculture Systems" },
  { href: "/services/aeration-systems",              label: "Aeration Systems" },
  { href: "/services/hdpe-pond-lining",              label: "HDPE Pond Lining" },
  { href: "/services/smart-farm-automation",         label: "Smart Farm Automation" },
  { href: "/services/oxygen-management",             label: "Oxygen Management" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RASAquacultureSystemsPage() {
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
                Recirculating Aquaculture Technology
              </span>
            </div>

            <h1 className="mt-8 text-[42px] font-black leading-[0.92] tracking-[-0.05em] text-[#021B2F] sm:text-[58px] lg:text-[72px]">
              RAS Aquaculture<br />Systems
            </h1>

            <p className="mt-8 text-[16px] leading-[2] text-[#4B5563] sm:text-[18px]">
              ARK AQUATECH engineers India's most reliable{" "}
              <strong>RAS aquaculture systems</strong> — complete{" "}
              <strong>RAS tank</strong> design, biofiltration, oxygen management,
              water quality monitoring, and hands-on operator training. Whether you are
              starting your first <strong>recirculating aquaculture system</strong> or scaling an
              existing operation, we deliver turnkey solutions backed by 12+ years of{" "}
              <strong>RAS fish farming</strong> expertise.
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
              src="/Services/ras7.png"
              alt="RAS Aquaculture System Tank Setup by ARK AQUATECH India"
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
          WHAT IS RAS — INTRO SEO BLOCK
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-[46px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            What Is a RAS Aquaculture System &amp; Why Is It Transforming Fish Farming in India?
          </h2>
          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              A <strong>RAS aquaculture system</strong> — short for Recirculating Aquaculture
              System — is a closed-loop fish farming technology that continuously filters,
              treats, and reuses water inside the <strong>RAS tank</strong>. Unlike traditional
              pond farming that depends on large volumes of fresh water, a{" "}
              <strong>recirculating aquaculture system</strong> passes water through mechanical
              filtration, biofiltration, degassing, oxygenation, and disinfection stages before
              returning it to the culture tank. The system essentially manufactures its own
              controlled environment, independent of external water quality or climate.
            </p>
            <p>
              For Indian fish farmers, <strong>RAS aquaculture systems</strong> solve three of
              the biggest constraints in modern aquaculture at once: land availability, water
              scarcity, and disease risk. A single 10,000-litre <strong>RAS tank</strong> can
              produce 400–800 kg of fish per cycle on just 15–20 square metres of land. Scaling
              the same technology across 1,000–2,000 square metres can deliver 30–50 MT
              annually — output that would otherwise demand several acres of traditional pond area.
            </p>
            <p>
              ARK AQUATECH has deployed <strong>RAS fish farming</strong> installations across
              Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra, Karnataka, and 30+ other Indian
              states. Our engineering team designs each <strong>recirculating aquaculture
              system</strong> around site-specific conditions — water source, climate, species,
              market proximity, and farmer experience level — to ensure every client achieves
              consistent, profitable results from their very first production cycle.
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
              How RAS Aquaculture Systems Work
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280] max-w-2xl mx-auto">
              A step-by-step look at the recirculation loop and how ARK AQUATECH engineers it
              into a reliable, scalable production system.
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
              6 Key Advantages of RAS Aquaculture Systems
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-2xl mx-auto">
              Why forward-looking Indian fish farmers are making the switch to{" "}
              <strong className="text-white">RAS fish farming</strong> systems.
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
          RAS TANK TYPES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/20 bg-[#F4F8FF] px-5 py-2 mb-6">
              <Droplets className="h-4 w-4 text-[#0A6EBD]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">Tank Options</span>
            </div>

            <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
              RAS Tank Types &amp; Pricing
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              ARK AQUATECH supplies three main categories of <strong>RAS tank</strong> to
              suit different budgets, scales, and operational contexts. Each option is engineered
              for optimal solids removal, flow uniformity, and ease of harvest — the three
              mechanical pillars of a productive <strong>RAS aquaculture system</strong>. Our team
              will recommend the right RAS tank type based on your investment capacity, production
              target, and site conditions, with transparent <strong>RAS system price</strong> quotations.
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
              src="/Services/ras8.png"
              alt="RAS Tank Circular Recirculating Aquaculture Setup by ARK AQUATECH"
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
            Which Species Does ARK AQUATECH Support in RAS?
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Our <strong>RAS aquaculture systems</strong> are species-specific engineered.
            Stocking density, flow rate, biofilter sizing, and harvest protocols differ
            significantly between tilapia, barramundi, trout, and shrimp. The table below shows
            recommended parameters for each species in an ARK AQUATECH RAS tank setup.
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
            RAS Aquaculture Cost Breakdown (India, 2024)
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Transparency in <strong>RAS aquaculture cost</strong> is central to how ARK
            AQUATECH operates. The figures below represent indicative market prices for a
            standard RAS installation in India. Actual costs vary by location,
            tank type, species, and scale. Contact us for a free detailed project report (DPR)
            with site-specific <strong>RAS system price</strong> and ROI projections.
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

          {/* <p className="text-[15px] leading-[1.85] text-[#4B5563]">
            Government subsidies under PMMSY (Pradhan Mantri Matsya Sampada Yojana) and state
            fisheries department schemes can cover 40–60% of <strong>RAS aquaculture
            systems</strong> capital costs for eligible farmers. ARK AQUATECH assists clients in
            preparing subsidy application documentation and bankable project reports (DPR) to
            access available funding.
          </p> */}

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
            ARK AQUATECH's RAS Aquaculture Support: From Setup to Harvest
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              Setting up a successful <strong>RAS tank</strong> goes far beyond installing a
              container and a pump. The difference between a profitable RAS farm and a failed
              one almost always comes down to the quality of initial system design, the
              precision of biofilter sizing, and the consistency of water quality management
              during the first few weeks — what practitioners call the{" "}
              <em>biofilter cycling phase</em>. This is where ARK AQUATECH's engineering
              expertise and field experience become your greatest asset.
            </p>
            <p>
              Our <strong>RAS aquaculture system</strong> process begins with a detailed site
              assessment: water source analysis, structural loading (for elevated or indoor
              tanks), power availability, ambient temperature range, and market access for the
              target species. This data shapes every subsequent design decision — tank size and
              count, biofilter media volume, supplemental heating or cooling, biosecurity
              infrastructure, and harvest logistics. We do not apply a one-size-fits-all
              template; every ARK AQUATECH <strong>RAS fish farming</strong> project is
              custom-engineered for its specific context.
            </p>
            <p>
              Oxygenation and degassing form the heartbeat of any{" "}
              <strong>recirculating aquaculture system</strong>. High-density culture demands
              continuous, precise oxygen delivery while excess CO₂ must be stripped efficiently
              to avoid stressing the stock. ARK AQUATECH sizes oxygenation and degassing
              equipment using flow and biomass load calculations specific to each tank
              geometry, ensuring stable water chemistry even at peak stocking density. Our
              systems include primary and backup pumps, automated changeover relays, and
              real-time dissolved oxygen and ammonia monitoring with SMS alerts — so you are
              protected around the clock.
            </p>
            <p>
              Water quality management in <strong>RAS aquaculture systems</strong> is a dynamic
              daily discipline. As fish biomass grows, ammonia and CO₂ production rises, and
              solids accumulate in the mechanical filter. Our water quality protocols —
              including daily nitrate and alkalinity tracking, scheduled solids removal, and
              periodic partial water exchange — are documented in detailed farm management
              standard operating procedures (SOPs) that our team trains your operators to
              execute precisely. This systematic approach is what consistently delivers harvest
              yields at the top end of species potential rather than the average.
            </p>
            <p>
              Post-harvest, ARK AQUATECH supports clients with market linkage advice, value-added
              processing options (live fish transport, chilled packing, dried and smoked
              products), and planning for the next production cycle. Our relationship with each
              farmer does not end at system commissioning — we are your long-term partner in
              building a profitable, sustainable <strong>RAS aquaculture</strong> enterprise.
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
              RAS Aquaculture Systems — FAQs
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280]">
              Answers to the most common questions about RAS system price, setup cost,
              species selection, and recirculating aquaculture technology in India.
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
            Start Your RAS Aquaculture<br />Journey Today
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-xl mx-auto">
            Get a free detailed project report, transparent{" "}
            <strong className="text-white">RAS system price</strong> list, and site-specific{" "}
            <strong className="text-white">RAS aquaculture cost</strong> estimate from India's
            most trusted <strong className="text-white">recirculating aquaculture</strong> company.
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
            "name": "RAS Aquaculture Systems",
            "serviceType": "Aquaculture Engineering — Recirculating Aquaculture Technology",
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
              "ARK AQUATECH provides complete RAS aquaculture systems including RAS tank design and supply, biofiltration, oxygen management, water quality monitoring, and 24/7 technical support across India.",
            "url": "https://www.arkaquatech.com/services/ras-aquaculture-systems",
            "areaServed": "IN",
            "keywords": [
              "RAS aquaculture systems",
              "recirculating aquaculture system",
              "RAS tank",
              "RAS fish farming",
              "RAS aquaculture cost",
              "RAS system price",
              "biofilter aquaculture",
              "closed system fish farming",
              "fishery technology",
              "aquaculture technology",
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "120000",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "description": "RAS system price starting from ₹1,20,000 for entry-level 5,000–10,000 L unit",
              },
            },
          }),
        }}
      />
    </main>
  );
}