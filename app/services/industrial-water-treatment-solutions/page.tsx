// app/services/industrial-water-treatment-solutions/page.tsx

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Zap,
  Factory,
  FlaskConical,
  Settings2,
  ShieldCheck,
  TrendingUp,
  Leaf,
} from "lucide-react";

export const metadata = {
  title:
    "Industrial Water Treatment Solutions | ETP & STP Plant Design | ARK AQUATECH",
  description:
    "ARK AQUATECH specialises in industrial water treatment solutions, effluent treatment plant (ETP) design, sewage treatment plant (STP) setup, water recycling systems, and zero liquid discharge (ZLD) plants across India. Get industrial water treatment cost estimates today.",
  keywords: [
    "industrial water treatment",
    "industrial water treatment solutions",
    "effluent treatment plant",
    "ETP plant design",
    "sewage treatment plant",
    "STP plant setup",
    "water recycling system",
    "zero liquid discharge",
    "ZLD plant",
    "wastewater treatment plant",
    "industrial water treatment cost",
    "ETP plant price",
    "water treatment technology in India",
    "RO plant industrial",
    "effluent treatment plant cost",
  ],
  openGraph: {
    title: "Industrial Water Treatment Solutions | ARK AQUATECH India",
    description:
      "Complete industrial water treatment solutions — ETP/STP design, water recycling, zero liquid discharge, and 24/7 support. Get your effluent treatment plant cost and setup quote from ARK AQUATECH.",
    url: "https://www.arkaquatech.com/services/industrial-water-treatment-solutions",
    siteName: "ARK AQUATECH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.arkaquatech.com/services/industrial-water-treatment-solutions",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroFeatures = [
  "ETP & STP Plant Design",
  "Water Recycling & Reuse Systems",
  "Zero Liquid Discharge (ZLD) Solutions",
  "Water Quality Monitoring (24/7)",
  "Sludge Management & Disposal",
  "End-to-End Technical Support",
];

const stats = [
  { stat: "95%",   label: "Water Recovery Rate" },
  { stat: "40%",   label: "Lower Operating Cost" },
  { stat: "0",     label: "Liquid Discharge (ZLD)" },
  { stat: "24/7",  label: "Remote Plant Monitoring" },
];

const howItWorks = [
  {
    step: "01",
    title: "Screening & Primary Treatment",
    body:
      "Raw industrial effluent first passes through bar screens and equalisation tanks that remove large solids and buffer flow and load variations. This stabilises the feed before it enters the core effluent treatment plant (ETP) processes, protecting downstream equipment from shock loading.",
  },
  {
    step: "02",
    title: "Physico-Chemical & Biological Treatment",
    body:
      "Coagulation, flocculation, and clarification remove suspended solids and heavy metals, while biological reactors (aerobic or anaerobic) break down organic load using engineered microbial cultures. This combined process is the heart of any industrial water treatment plant, reducing COD and BOD to compliant discharge levels.",
  },
  {
    step: "03",
    title: "Tertiary Treatment & Filtration",
    body:
      "Treated water passes through sand filters, activated carbon filters, and membrane systems such as ultrafiltration (UF) or reverse osmosis (RO) to remove residual contaminants, colour, and dissolved solids — bringing water quality up to reuse or zero liquid discharge (ZLD) standards.",
  },
  {
    step: "04",
    title: "Sludge Management & Water Reuse",
    body:
      "Sludge generated during treatment is dewatered via filter press or centrifuge for safe disposal or reuse as manure feedstock, while treated water is either safely discharged, reused in-plant for cooling and washing, or routed to evaporators for a complete zero liquid discharge (ZLD) cycle.",
  },
];

const industries = [
  { name: "Textile & Dyeing Units",     load: "High COD/BOD, Colour", cycle: "Continuous / Batch" },
  { name: "Pharmaceutical Plants",      load: "High COD, Toxic Load", cycle: "Batch Treatment" },
  { name: "Food & Beverage Processing", load: "High BOD, Organic",    cycle: "Continuous" },
  { name: "Dairy & Poultry Plants",     load: "High Fat/Oil, BOD",    cycle: "Continuous" },
  { name: "Chemical Manufacturing",     load: "Variable, Toxic",      cycle: "Batch / Continuous" },
  { name: "Commercial Complexes (STP)", load: "Domestic Sewage",      cycle: "Continuous" },
];

const plantTypes = [
  {
    icon: Droplets,
    title: "Effluent Treatment Plants (ETP)",
    body:
      "Custom-engineered ETPs combining physico-chemical and biological treatment stages, sized to handle 10 KLD – 5,000+ KLD of industrial effluent. Designed to meet CPCB and state pollution control board discharge norms. ETP plant price starts from ₹8 lakh for a 10 KLD compact unit.",
  },
  {
    icon: FlaskConical,
    title: "Sewage Treatment Plants (STP)",
    body:
      "Compact, low-maintenance STPs using MBBR, SBR, or extended aeration technology for residential complexes, commercial buildings, and institutional campuses. Available in packaged, skid-mounted, or civil construction formats, sized from 5 KLD to 1,000+ KLD.",
  },
  {
    icon: Factory,
    title: "Zero Liquid Discharge (ZLD) Systems",
    body:
      "Complete ZLD plants integrating RO, multiple-effect evaporators (MEE), and agitated thin film dryers (ATFD) to achieve 100% water recovery with no liquid effluent discharge. Ideal for water-stressed regions and industries facing strict environmental compliance requirements.",
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: "Full Regulatory Compliance",
    body:
      "ARK AQUATECH designs every industrial water treatment plant to meet CPCB, SPCB, and MoEFCC discharge norms, helping industries avoid penalties, closure notices, and reputational risk while securing environmental clearances smoothly.",
  },
  {
    icon: Leaf,
    title: "Up to 95% Water Recovery",
    body:
      "Modern water recycling systems recover up to 95% of process water for reuse in cooling, washing, or non-potable applications, sharply cutting freshwater intake and making industrial water treatment solutions essential in water-scarce regions of India.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Environmental Liability",
    body:
      "A properly designed effluent treatment plant eliminates untreated discharge into water bodies and soil, protecting surrounding ecosystems and communities while positioning industries for ESG reporting and international certifications.",
  },
  {
    icon: Zap,
    title: "Lower Long-Term Operating Cost",
    body:
      "Energy-efficient aeration, optimised chemical dosing, and automated process control reduce the day-to-day operating cost of industrial water treatment plants by up to 40% compared to older, manually operated systems.",
  },
  {
    icon: Settings2,
    title: "Remote Monitoring & Automation",
    body:
      "ARK AQUATECH's SCADA-integrated monitoring platform tracks flow, pH, COD, BOD, and equipment health in real time, sending instant alerts for any deviation — so plant managers can act before a compliance issue arises.",
  },
  {
    icon: FlaskConical,
    title: "Scalable, Modular Design",
    body:
      "Our ETP and STP plants are engineered in modular skids that can be expanded as production or occupancy grows, protecting your initial industrial water treatment investment as your facility scales.",
  },
];

const costTable = [
  { item: "Compact ETP (10 KLD)", range: "₹8,00,000 – ₹15,00,000" },
  { item: "Compact STP (10 KLD, MBBR/SBR)", range: "₹6,00,000 – ₹12,00,000" },
  { item: "RO / UF Membrane Skid", range: "₹3,00,000 – ₹10,00,000" },
  { item: "Sludge Dewatering (Filter Press)", range: "₹2,50,000 – ₹8,00,000" },
  { item: "SCADA Automation & Monitoring", range: "₹1,50,000 – ₹5,00,000" },
  { item: "Zero Liquid Discharge (ZLD) Add-on", range: "₹15,00,000 – ₹50,00,000+" },
  { item: "Annual Operation & Maintenance", range: "₹3,00,000 – ₹10,00,000" },
  { item: "Starter Industrial ETP (25 KLD, All-in)", range: "₹18 – ₹35 Lakh" },
];

const faqs = [
  {
    q: "What is industrial water treatment and why is it required?",
    a: "Industrial water treatment refers to the physical, chemical, and biological processes used to treat wastewater and effluent generated by manufacturing, processing, or commercial operations before it is discharged, reused, or recycled. It is legally required under CPCB and state pollution control board norms for most industries, and it protects surrounding water bodies, soil, and communities from contamination caused by untreated industrial discharge.",
  },
  {
    q: "What is the industrial water treatment cost in India?",
    a: "Industrial water treatment cost in India depends on effluent volume, contaminant load, and required treatment technology. A compact effluent treatment plant (ETP) for 10 KLD typically costs ₹8–₹15 lakh, while a starter industrial ETP around 25 KLD ranges from ₹18 to ₹35 lakh including civil work, equipment, and automation. Zero liquid discharge (ZLD) systems cost significantly more due to evaporation and drying stages. ARK AQUATECH provides free detailed project reports (DPR) with full industrial water treatment cost breakdowns on request.",
  },
  {
    q: "What is the ETP plant price from ARK AQUATECH?",
    a: "ETP plant price at ARK AQUATECH starts from ₹8 lakh for a 10 KLD compact effluent treatment plant, inclusive of primary, biological, and tertiary treatment stages. Larger ETP and STP plants (50 KLD – 5,000+ KLD) are priced on request based on effluent characteristics and site conditions. Contact our team for a current ETP plant price list.",
  },
  {
    q: "Which industries need an effluent treatment plant (ETP)?",
    a: "Textile and dyeing units, pharmaceutical manufacturers, food and beverage processors, dairy and poultry plants, chemical manufacturers, and any facility generating process wastewater above regulatory thresholds require an effluent treatment plant. Commercial complexes, hotels, and residential townships typically require a sewage treatment plant (STP) instead. ARK AQUATECH designs each plant around the specific contaminant profile and discharge requirement of each client's industry.",
  },
  {
    q: "How much space does an industrial water treatment plant need?",
    a: "Space requirements depend on plant capacity and technology. A compact 10 KLD ETP or STP using MBBR or SBR technology can be installed in as little as 500–800 sq ft, including tankage and control room. Larger plants above 100 KLD may require 2,000–5,000 sq ft or more. ARK AQUATECH also offers packaged, skid-mounted units for sites with severe space constraints.",
  },
  {
    q: "Can treated industrial wastewater be reused?",
    a: "Yes — with appropriate tertiary treatment (filtration, UF, or RO), treated wastewater can be reused for cooling tower makeup, floor washing, gardening, or even boiler feed after further polishing. ARK AQUATECH designs water recycling systems that recover up to 95% of process water, significantly reducing freshwater intake and industrial water treatment operating costs over time.",
  },
];

const relatedLinks = [
  { href: "/services/ras-aquaculture-systems",       label: "RAS Aquaculture Systems" },
  { href: "/services/biofloc-fish-farming",           label: "Biofloc Fish Farming" },
  { href: "/services/aeration-systems",               label: "Aeration Systems" },
  { href: "/services/smart-farm-automation",          label: "Smart Farm Automation" },
  { href: "/services/oxygen-management",              label: "Oxygen Management" },
  { href: "/services/advanced-aquaculture-systems",   label: "Advanced Aquaculture Systems" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IndustrialWaterTreatmentPage() {
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
                Industrial Water Treatment
              </span>
            </div>

            <h1 className="mt-8 text-[42px] font-black leading-[0.92] tracking-[-0.05em] text-[#021B2F] sm:text-[58px] lg:text-[72px]">
              Industrial Water<br />Treatment Solutions
            </h1>

            <p className="mt-8 text-[16px] leading-[2] text-[#4B5563] sm:text-[18px]">
              ARK AQUATECH engineers India's most reliable{" "}
              <strong>industrial water treatment solutions</strong> — complete{" "}
              <strong>ETP and STP plant</strong> design, water recycling systems, zero liquid
              discharge (ZLD) integration, and hands-on operator training. Whether you need a
              compact plant for a single facility or a large-scale{" "}
              <strong>effluent treatment plant</strong> for a growing industrial site, we
              deliver turnkey solutions backed by 12+ years of{" "}
              <strong>water treatment technology</strong> expertise.
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
              alt="Industrial Water Treatment Plant Setup by ARK AQUATECH India"
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
          WHAT IS INDUSTRIAL WATER TREATMENT — INTRO SEO BLOCK
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-[46px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            What Are Industrial Water Treatment Solutions &amp; Why Do They Matter for Indian Industry?
          </h2>
          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              <strong>Industrial water treatment solutions</strong> encompass the full range of
              physical, chemical, and biological processes used to treat process wastewater and
              sewage before it is discharged, reused, or recycled. An{" "}
              <strong>effluent treatment plant (ETP)</strong> removes suspended solids, organic
              load, and toxic contaminants from industrial process water, while a{" "}
              <strong>sewage treatment plant (STP)</strong> treats domestic wastewater from
              residential, commercial, and institutional facilities. Both are essential
              infrastructure for any facility that wants to operate legally and sustainably.
            </p>
            <p>
              For Indian industries, <strong>industrial water treatment</strong> addresses three
              critical pressures simultaneously: regulatory compliance, water scarcity, and
              rising freshwater costs. A well-designed water recycling system can recover up to
              95% of process water for reuse, sharply cutting freshwater intake while ensuring
              discharge quality consistently meets CPCB and state pollution control board norms —
              protecting the business from penalties, closure notices, and reputational damage.
            </p>
            <p>
              ARK AQUATECH has delivered <strong>industrial water treatment</strong>{" "}
              installations across textile, pharmaceutical, food processing, dairy, and chemical
              manufacturing sectors in Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra,
              Karnataka, and 30+ other Indian states. Our engineering team designs each{" "}
              <strong>ETP and STP plant</strong> around site-specific effluent characteristics,
              flow rate, discharge norms, and space constraints, to ensure every client achieves
              reliable, compliant treatment from day one of operation.
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
              How Industrial Water Treatment Plants Work
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280] max-w-2xl mx-auto">
              A step-by-step look at the treatment train and how ARK AQUATECH engineers it into
              a reliable, compliant, and scalable system.
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
              6 Key Advantages of Industrial Water Treatment
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-2xl mx-auto">
              Why growing Indian industries are investing in{" "}
              <strong className="text-white">industrial water treatment solutions</strong>.
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
          PLANT TYPES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/20 bg-[#F4F8FF] px-5 py-2 mb-6">
              <Droplets className="h-4 w-4 text-[#0A6EBD]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">Plant Options</span>
            </div>

            <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
              Treatment Plant Types &amp; Pricing
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              ARK AQUATECH supplies three main categories of treatment plant to suit different
              industries, budgets, and compliance requirements. Each option is engineered for
              optimal contaminant removal, energy efficiency, and ease of operation — the three
              pillars of a reliable <strong>industrial water treatment</strong> system. Our team
              will recommend the right plant type based on your effluent profile, discharge
              requirement, and site conditions, with transparent{" "}
              <strong>ETP plant price</strong> quotations.
            </p>

            <div className="space-y-5">
              {plantTypes.map(({ icon: Icon, title, body }) => (
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
              alt="Industrial Water Treatment Plant ETP Setup by ARK AQUATECH"
              width={900}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INDUSTRIES TABLE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-4">
            Which Industries Does ARK AQUATECH Support?
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Our <strong>industrial water treatment solutions</strong> are sector-specific
            engineered. Contaminant load, treatment train, and plant sizing differ significantly
            between textile, pharmaceutical, food processing, and commercial applications. The
            table below shows typical parameters for each sector in an ARK AQUATECH treatment
            plant setup.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#021B2F] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Industry</th>
                  <th className="text-left px-6 py-4 font-semibold">Effluent Characteristics</th>
                  <th className="text-left px-6 py-4 font-semibold">Operation Mode</th>
                </tr>
              </thead>
              <tbody>
                {industries.map(({ name, load, cycle }, i) => (
                  <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                    <td className="px-6 py-4 font-medium text-[#021B2F]">{name}</td>
                    <td className="px-6 py-4 text-[#4B5563]">{load}</td>
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
            Industrial Water Treatment Cost Breakdown (India, 2024)
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Transparency in <strong>industrial water treatment cost</strong> is central to how
            ARK AQUATECH operates. The figures below represent indicative market prices for a
            standard ETP/STP installation in India. Actual costs vary by effluent load,
            location, technology, and scale. Contact us for a free detailed project report (DPR)
            with site-specific <strong>ETP plant price</strong> and compliance-ready design.
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
            Central and state government schemes, along with pollution control board incentives,
            can offset a portion of <strong>industrial water treatment</strong> capital costs for
            eligible MSMEs. ARK AQUATECH assists clients in preparing compliance documentation
            and bankable project reports (DPR) to access available support.
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
            ARK AQUATECH's Industrial Water Treatment Support: From Design to Compliance
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              Setting up a successful <strong>effluent treatment plant</strong> goes far beyond
              installing tanks and pumps. The difference between a compliant, cost-efficient
              plant and a constantly troubled one almost always comes down to the quality of
              initial characterisation, the precision of process sizing, and the consistency of
              operator training during the first few months — what practitioners call the{" "}
              <em>commissioning and stabilisation phase</em>. This is where ARK AQUATECH's
              engineering expertise and field experience become your greatest asset.
            </p>
            <p>
              Our <strong>industrial water treatment</strong> process begins with a detailed
              effluent characterisation study: flow rate, COD/BOD load, pH range, presence of
              heavy metals or toxic compounds, and seasonal variation. This data shapes every
              subsequent design decision — treatment train selection, tank sizing, aeration
              capacity, membrane specification, and sludge handling. We do not apply a
              one-size-fits-all template; every ARK AQUATECH{" "}
              <strong>ETP and STP plant</strong> project is custom-engineered for its specific
              effluent profile and regulatory context.
            </p>
            <p>
              Biological treatment is the workhorse of most <strong>effluent treatment
              plants</strong>. Aerobic and anaerobic reactors rely on carefully cultivated
              microbial communities to break down organic pollutants; insufficient aeration or
              nutrient imbalance can collapse this biology and cause compliance failures. ARK
              AQUATECH sizes biological reactors using detailed load calculations and seeds
              them with proven microbial cultures, backed by primary and backup aeration
              blowers, automated changeover relays, and real-time COD, BOD, and dissolved
              oxygen monitoring with SMS alerts — so your plant stays compliant around the clock.
            </p>
            <p>
              Water quality management in <strong>industrial water treatment plants</strong> is a
              dynamic daily discipline. As production volumes and effluent characteristics shift,
              dosing rates, aeration demand, and sludge generation change with them. Our water
              quality protocols — including daily lab testing, scheduled sludge wasting, membrane
              cleaning cycles, and periodic compliance audits — are documented in detailed plant
              operating standard operating procedures (SOPs) that our team trains your operators
              to execute precisely. This systematic approach is what consistently keeps clients
              within discharge norms rather than scrambling to fix violations after the fact.
            </p>
            <p>
              Beyond commissioning, ARK AQUATECH supports clients with annual maintenance
              contracts (AMC), compliance reporting assistance, and planning for future capacity
              expansion. Our relationship with each client does not end at plant handover — we
              are your long-term partner in maintaining a compliant, cost-efficient{" "}
              <strong>industrial water treatment</strong> operation.
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
              Industrial Water Treatment — FAQs
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280]">
              Answers to the most common questions about ETP plant price, setup cost,
              industry applications, and water treatment technology in India.
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
            Explore Related Aquaculture &amp; Water Services
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
            Start Your Industrial Water<br />Treatment Project Today
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-xl mx-auto">
            Get a free detailed project report, transparent{" "}
            <strong className="text-white">ETP plant price</strong> list, and site-specific{" "}
            <strong className="text-white">industrial water treatment cost</strong> estimate from
            India's most trusted <strong className="text-white">water treatment</strong> company.
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
            "name": "Industrial Water Treatment Solutions",
            "serviceType": "Water Engineering — Industrial Effluent & Sewage Treatment",
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
              "ARK AQUATECH provides complete industrial water treatment solutions including ETP and STP plant design and supply, water recycling systems, zero liquid discharge (ZLD), and 24/7 technical support across India.",
            "url": "https://www.arkaquatech.com/services/industrial-water-treatment-solutions",
            "areaServed": "IN",
            "keywords": [
              "industrial water treatment",
              "industrial water treatment solutions",
              "effluent treatment plant",
              "ETP plant design",
              "sewage treatment plant",
              "STP plant setup",
              "water recycling system",
              "zero liquid discharge",
              "wastewater treatment plant",
              "water treatment technology",
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "800000",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "description": "ETP plant price starting from ₹8,00,000 for a 10 KLD compact effluent treatment plant",
              },
            },
          }),
        }}
      />
    </main>
  );
}