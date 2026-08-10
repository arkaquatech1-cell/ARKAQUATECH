// app/services/advanced-aquaculture-systems/page.tsx

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
    "Advanced Aquaculture Systems | Smart Fish Farming Technology | ARK AQUATECH",
  description:
    "ARK AQUATECH specialises in advanced aquaculture systems combining biofloc, RAS, IoT automation, and precision monitoring for high-yield, sustainable fish farming across India. Get advanced aquaculture system cost estimates today.",
  keywords: [
    "advanced aquaculture systems",
    "smart aquaculture technology",
    "modern fish farming systems",
    "integrated aquaculture system",
    "IoT aquaculture monitoring",
    "aquaculture automation",
    "high density fish farming",
    "advanced aquaculture cost",
    "aquaculture system price",
    "precision aquaculture India",
    "sustainable fish farming technology",
    "next generation aquaculture",
    "aquaculture engineering solutions",
    "smart fish farm design",
    "fishery technology India",
  ],
  openGraph: {
    title: "Advanced Aquaculture Systems | ARK AQUATECH India",
    description:
      "Complete advanced aquaculture system solutions — integrated biofloc/RAS design, IoT automation, precision monitoring, and 24/7 support. Get your advanced aquaculture cost and setup quote from ARK AQUATECH.",
    url: "https://www.arkaquatech.com/services/advanced-aquaculture-systems",
    siteName: "ARK AQUATECH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.arkaquatech.com/services/advanced-aquaculture-systems",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroFeatures = [
  "Integrated Biofloc + RAS Design",
  "IoT-Based Water Quality Monitoring",
  "Automated Feeding & Aeration Control",
  "Predictive Analytics & Alerts (24/7)",
  "Energy-Efficient System Engineering",
  "End-to-End Technical Support",
];

const stats = [
  { stat: "5×",    label: "Yield vs Traditional Farming" },
  { stat: "90%",   label: "Automated Process Control" },
  { stat: "35%",   label: "Lower Operating Cost" },
  { stat: "24/7",  label: "Remote System Monitoring" },
];

const howItWorks = [
  {
    step: "01",
    title: "Integrated System Design",
    body:
      "Every advanced aquaculture system begins with a hybrid engineering approach — combining biofloc microbial treatment, RAS-style filtration, and mechanical redundancy into a single optimised loop. This integrated design captures the strengths of multiple aquaculture technologies while minimising their individual weaknesses.",
  },
  {
    step: "02",
    title: "IoT Sensor Deployment",
    body:
      "Dissolved oxygen, pH, ammonia, temperature, and turbidity sensors are installed across every tank and treatment stage. Data streams continuously to a central dashboard, giving farm managers real-time visibility into water quality across the entire advanced aquaculture system, from any location.",
  },
  {
    step: "03",
    title: "Automated Process Control",
    body:
      "Aeration, feeding, and dosing are automated using programmable logic controllers (PLC) that respond instantly to sensor data — increasing oxygen supply during peak biomass load, adjusting feed schedules, and triggering water exchange only when genuinely required, rather than on a fixed schedule.",
  },
  {
    step: "04",
    title: "Predictive Analytics & Optimisation",
    body:
      "Historical and real-time data feed into predictive models that flag early signs of water quality drift, disease risk, or equipment wear before they become costly problems. ARK AQUATECH's advanced aquaculture systems continuously learn and optimise each production cycle for higher yield and lower cost.",
  },
];

const species = [
  { name: "Tilapia (Nile & Hybrid)",  density: "High (Biofloc/RAS Hybrid)", cycle: "100–150 days" },
  { name: "Shrimp (L. vannamei)",     density: "Very High (RAS-Assisted)",  cycle: "90–110 days" },
  { name: "Barramundi (Seabass)",     density: "Moderate–High",             cycle: "180–220 days" },
  { name: "Pangasius (Catfish)",      density: "High",                      cycle: "120–160 days" },
  { name: "Trout (Cold Water)",       density: "Moderate",                  cycle: "180–240 days" },
  { name: "Ornamental Species",       density: "Custom",                    cycle: "Varies" },
];

const systemTypes = [
  {
    icon: Droplets,
    title: "Hybrid Biofloc-RAS Systems",
    body:
      "Combines the natural in-tank feed production of biofloc technology with the precision filtration of RAS, delivering higher stocking densities and better water stability than either technology alone. Ideal for farmers who want maximum yield with controlled operating costs. Advanced aquaculture system price starts from ₹6 lakh for a starter integrated unit.",
  },
  {
    icon: FlaskConical,
    title: "IoT-Automated Fish Tanks",
    body:
      "Sensor-driven tank clusters with automated aeration, feeding, and dosing controlled by a central dashboard. Reduces manual labour dependency while improving consistency of water parameters, making this the preferred choice for farmers scaling beyond a single-site operation.",
  },
  {
    icon: Fish,
    title: "Modular Smart Farm Units",
    body:
      "Fully containerised or skid-mounted advanced aquaculture systems that bundle biofiltration, oxygenation, automation, and remote monitoring into pre-engineered, rapidly deployable units. Ideal for urban aquaculture, research facilities, and farmers seeking fast commissioning with minimal civil work.",
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: "5× Higher Overall Yield",
    body:
      "By combining the best of biofloc and RAS technology with automation, advanced aquaculture systems consistently achieve yields up to 5 times higher than traditional pond farming on the same footprint, maximising revenue per square metre of farm space.",
  },
  {
    icon: Leaf,
    title: "Optimised Resource Use",
    body:
      "Integrated water treatment and automated dosing reduce water, feed, and energy waste simultaneously. Advanced aquaculture systems typically use 30–50% less water and feed per kilogram of fish produced compared to standalone conventional systems.",
  },
  {
    icon: ShieldCheck,
    title: "Early Warning & Risk Reduction",
    body:
      "Continuous IoT monitoring and predictive analytics flag water quality drift, oxygen crashes, or disease indicators hours before they would be noticed manually — giving farm operators time to intervene and prevent stock loss.",
  },
  {
    icon: Zap,
    title: "Reduced Labour Dependency",
    body:
      "Automated feeding, aeration, and dosing systems cut daily manual labour requirements significantly, allowing a single operator to manage multiple production units — a major advantage as skilled labour becomes harder to source in rural farm locations.",
  },
  {
    icon: Settings2,
    title: "Remote Management",
    body:
      "ARK AQUATECH's dashboard and mobile alerts let farm owners monitor and adjust their advanced aquaculture system from anywhere, making multi-site operations and investor-owned farms practical to manage without a full-time on-site technical team.",
  },
  {
    icon: FlaskConical,
    title: "Data-Driven Continuous Improvement",
    body:
      "Every production cycle generates data that refines feeding schedules, aeration timing, and stocking strategy for the next cycle — meaning advanced aquaculture systems get more efficient and profitable with each successive harvest.",
  },
];

const costTable = [
  { item: "Integrated Biofloc-RAS Tank (10,000 L)", range: "₹2,00,000 – ₹4,50,000" },
  { item: "IoT Sensor Suite (DO, pH, Ammonia, Temp)", range: "₹40,000 – ₹1,20,000" },
  { item: "Automated Feeding & Dosing System", range: "₹50,000 – ₹1,50,000" },
  { item: "Central Monitoring Dashboard & Alerts", range: "₹30,000 – ₹90,000" },
  { item: "Aeration & Oxygenation Package", range: "₹60,000 – ₹1,50,000" },
  { item: "Feed & Fingerlings (Per Cycle)", range: "₹50,000 – ₹1,20,000" },
  { item: "Electricity (Per Cycle, 120 days)", range: "₹25,000 – ₹60,000" },
  { item: "Starter Advanced Aquaculture System", range: "₹6 – ₹15 Lakh (All-in)" },
];

const faqs = [
  {
    q: "What are advanced aquaculture systems and how do they differ from biofloc or RAS?",
    a: "Advanced aquaculture systems combine multiple technologies — typically biofloc's natural in-tank feed production with RAS-style mechanical and biological filtration — and layer IoT sensors, automation, and predictive analytics on top. Rather than choosing one technology, an advanced aquaculture system integrates the strengths of several approaches into a single, more resilient and efficient production platform than either biofloc or RAS alone.",
  },
  {
    q: "What is the advanced aquaculture system cost in India?",
    a: "Advanced aquaculture system cost in India depends on the level of integration, automation, and scale chosen. A starter integrated system with basic IoT monitoring for a single 10,000-litre tank costs approximately ₹6–₹10 lakh, while a fully automated multi-tank commercial setup ranges from ₹10 to ₹15 lakh or more. ARK AQUATECH provides free detailed project reports (DPR) with full advanced aquaculture cost breakdowns on request.",
  },
  {
    q: "What is the advanced aquaculture system price from ARK AQUATECH?",
    a: "Advanced aquaculture system price at ARK AQUATECH starts from ₹6 lakh for a starter integrated biofloc-RAS unit with basic IoT sensors and automated aeration. Larger, fully automated systems with predictive analytics and multi-tank dashboards are priced on request based on specifications. Contact our team for a current advanced aquaculture system price list.",
  },
  {
    q: "Which fish species perform best in an advanced aquaculture system?",
    a: "Tilapia and Pacific white shrimp (L. vannamei) are the most common species farmed in advanced aquaculture systems due to their tolerance for high density and rapid response to optimised water conditions. Barramundi, pangasius, and cold-water species like trout also perform well when automation maintains stable water parameters year-round. ARK AQUATECH designs each system around the specific species, density target, and market of each client.",
  },
  {
    q: "Do I need technical expertise to operate an advanced aquaculture system?",
    a: "Advanced aquaculture systems are specifically designed to reduce the technical burden on farm operators — automation handles routine aeration, feeding, and dosing decisions, while the monitoring dashboard alerts you to anything requiring manual intervention. ARK AQUATECH provides complete operator training and ongoing remote support, so farmers of varying experience levels can run these systems confidently.",
  },
  {
    q: "Can an advanced aquaculture system be monitored remotely?",
    a: "Yes — every ARK AQUATECH advanced aquaculture system includes a central dashboard accessible via web and mobile app, showing live water quality data, feeding logs, and equipment status. Automated SMS and app alerts notify you instantly of any deviation from safe parameters, letting you manage multiple farm sites without needing to be physically present at each one.",
  },
];

const relatedLinks = [
  { href: "/services/biofloc-fish-farming",                     label: "Biofloc Fish Farming" },
  { href: "/services/ras-aquaculture-systems",                   label: "RAS Aquaculture Systems" },
  { href: "/services/aeration-systems",                          label: "Aeration Systems" },
  { href: "/services/smart-farm-automation",                     label: "Smart Farm Automation" },
  { href: "/services/oxygen-management",                         label: "Oxygen Management" },
  { href: "/services/industrial-water-treatment-solutions",      label: "Industrial Water Treatment" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdvancedAquacultureSystemsPage() {
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
                Smart Aquaculture Technology
              </span>
            </div>

            <h1 className="mt-8 text-[42px] font-black leading-[0.92] tracking-[-0.05em] text-[#021B2F] sm:text-[58px] lg:text-[72px]">
              Advanced Aquaculture<br />Systems
            </h1>

            <p className="mt-8 text-[16px] leading-[2] text-[#4B5563] sm:text-[18px]">
              ARK AQUATECH engineers India's most sophisticated{" "}
              <strong>advanced aquaculture systems</strong> — integrating biofloc, RAS, IoT
              monitoring, and automation into a single high-performance platform. Whether you
              are building your first <strong>smart fish farm</strong> or upgrading an existing
              operation with automation, we deliver turnkey solutions backed by 12+ years of{" "}
              <strong>aquaculture engineering</strong> expertise.
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
              src="/Services/ad8.png"
              alt="Advanced Aquaculture System Setup by ARK AQUATECH India"
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
          WHAT IS ADVANCED AQUACULTURE — INTRO SEO BLOCK
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-[46px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            What Are Advanced Aquaculture Systems &amp; Why Are They the Future of Fish Farming in India?
          </h2>
          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              <strong>Advanced aquaculture systems</strong> represent the next evolution of fish
              farming technology — integrating biofloc microbial treatment, RAS-style
              filtration, IoT sensor networks, and automated process control into a single,
              cohesive platform. Rather than relying on one technology alone, an{" "}
              <strong>advanced aquaculture system</strong> layers the strengths of multiple
              approaches to deliver higher yield, greater resilience, and lower labour dependency
              than any standalone method can achieve on its own.
            </p>
            <p>
              For Indian fish farmers, <strong>advanced aquaculture systems</strong> solve the
              challenge of scaling production without proportionally scaling risk or labour cost.
              Automated feeding and aeration reduce daily manual workload, while IoT monitoring
              and predictive analytics catch problems — oxygen crashes, ammonia spikes, disease
              indicators — hours or days before they would be noticed by manual observation
              alone, protecting stock and profitability simultaneously.
            </p>
            <p>
              ARK AQUATECH has deployed <strong>smart aquaculture technology</strong> across
              Andhra Pradesh, Telangana, Tamil Nadu, Maharashtra, Karnataka, and 30+ other Indian
              states. Our engineering team designs each <strong>advanced aquaculture
              system</strong> around site-specific conditions — water source, climate, species,
              scale, and the farmer's desired level of automation — to ensure every client
              achieves consistent, profitable, and manageable results from their very first
              production cycle.
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
              How Advanced Aquaculture Systems Work
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280] max-w-2xl mx-auto">
              A step-by-step look at the integration and automation behind ARK AQUATECH's
              advanced aquaculture platform.
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
              6 Key Advantages of Advanced Aquaculture Systems
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-2xl mx-auto">
              Why forward-looking Indian fish farmers are upgrading to{" "}
              <strong className="text-white">advanced aquaculture systems</strong>.
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
          SYSTEM TYPES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/20 bg-[#F4F8FF] px-5 py-2 mb-6">
              <Droplets className="h-4 w-4 text-[#0A6EBD]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">System Options</span>
            </div>

            <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
              Advanced Aquaculture System Types &amp; Pricing
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              ARK AQUATECH supplies three main categories of <strong>advanced aquaculture
              system</strong> to suit different budgets, scales, and automation preferences.
              Each option is engineered for optimal yield, resilience, and ease of operation —
              the three pillars of a productive smart aquaculture platform. Our team will
              recommend the right system type based on your investment capacity, production
              target, and site conditions, with transparent{" "}
              <strong>advanced aquaculture system price</strong> quotations.
            </p>

            <div className="space-y-5">
              {systemTypes.map(({ icon: Icon, title, body }) => (
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
              src="/Services/ad7.png"
              alt="Advanced Aquaculture System IoT Automation Setup by ARK AQUATECH"
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
            Which Species Does ARK AQUATECH Support in Advanced Systems?
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Our <strong>advanced aquaculture systems</strong> are species-specific engineered.
            Stocking density, automation profile, and harvest protocols differ significantly
            between tilapia, shrimp, barramundi, and other species. The table below shows
            recommended parameters for each species in an ARK AQUATECH advanced aquaculture setup.
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
            Advanced Aquaculture System Cost Breakdown (India, 2024)
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Transparency in <strong>advanced aquaculture cost</strong> is central to how ARK
            AQUATECH operates. The figures below represent indicative market prices for a
            standard integrated installation in India. Actual costs vary by location,
            system type, species, and scale. Contact us for a free detailed project report (DPR)
            with site-specific <strong>advanced aquaculture system price</strong> and ROI projections.
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
            fisheries department schemes can cover 40–60% of <strong>advanced aquaculture
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
            ARK AQUATECH's Advanced Aquaculture Support: From Design to Harvest
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              Setting up a successful <strong>advanced aquaculture system</strong> goes far
              beyond bolting sensors onto a standard tank. The difference between a truly
              intelligent farm and a merely instrumented one almost always comes down to the
              quality of initial system integration, the precision of automation logic, and the
              consistency of data-driven decision-making during the first production cycle —
              what practitioners call the <em>calibration and learning phase</em>. This is where
              ARK AQUATECH's engineering expertise and field experience become your greatest asset.
            </p>
            <p>
              Our <strong>advanced aquaculture system</strong> process begins with a detailed
              site assessment: water source analysis, power reliability, connectivity for IoT
              monitoring, ambient temperature range, and market access for the target species.
              This data shapes every subsequent design decision — the mix of biofloc and RAS
              components, sensor placement, automation thresholds, and dashboard configuration.
              We do not apply a one-size-fits-all template; every ARK AQUATECH{" "}
              <strong>smart aquaculture</strong> project is custom-engineered for its specific
              context.
            </p>
            <p>
              Automation logic is the heartbeat of any <strong>advanced aquaculture
              system</strong>. Aeration must respond dynamically to real-time oxygen demand
              rather than run on a fixed timer; feeding schedules must adapt to biomass growth
              curves rather than a static plan. ARK AQUATECH configures each PLC and dashboard
              using species-specific growth models and historical performance data, ensuring
              automation genuinely improves outcomes rather than simply digitising manual
              routines. Our systems include primary and backup control hardware, automated
              failover, and real-time alerts — so you are protected around the clock.
            </p>
            <p>
              Water quality management in <strong>advanced aquaculture systems</strong> is a
              dynamic, data-driven discipline. As fish biomass grows, ammonia production rises,
              oxygen demand increases, and feed conversion shifts. Our monitoring protocols —
              including continuous sensor logging, automated threshold alerts, and periodic
              manual verification — are documented in detailed farm management standard
              operating procedures (SOPs) that our team trains your operators to execute
              precisely alongside the automation. This systematic approach is what consistently
              delivers harvest yields at the top end of species potential rather than the average.
            </p>
            <p>
              Post-harvest, ARK AQUATECH supports clients with performance data review, system
              recalibration for the next cycle, market linkage advice, and planning for capacity
              expansion. Our relationship with each farmer does not end at system
              commissioning — we are your long-term partner in building a profitable, resilient,
              and increasingly intelligent <strong>advanced aquaculture</strong> enterprise.
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
              Advanced Aquaculture Systems — FAQs
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280]">
              Answers to the most common questions about advanced aquaculture system price,
              setup cost, species selection, and smart aquaculture technology in India.
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
            Start Your Advanced Aquaculture<br />Journey Today
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-xl mx-auto">
            Get a free detailed project report, transparent{" "}
            <strong className="text-white">advanced aquaculture system price</strong> list, and
            site-specific <strong className="text-white">advanced aquaculture cost</strong>{" "}
            estimate from India's most trusted{" "}
            <strong className="text-white">smart aquaculture</strong> company.
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
            "name": "Advanced Aquaculture Systems",
            "serviceType": "Aquaculture Engineering — Integrated Smart Fish Farming Technology",
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
              "ARK AQUATECH provides complete advanced aquaculture systems integrating biofloc, RAS, IoT monitoring, and automation, including design, supply, and 24/7 technical support across India.",
            "url": "https://www.arkaquatech.com/services/advanced-aquaculture-systems",
            "areaServed": "IN",
            "keywords": [
              "advanced aquaculture systems",
              "smart aquaculture technology",
              "modern fish farming systems",
              "integrated aquaculture system",
              "IoT aquaculture monitoring",
              "aquaculture automation",
              "advanced aquaculture cost",
              "advanced aquaculture system price",
              "fishery technology",
              "sustainable fish farming technology",
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "600000",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "description": "Advanced aquaculture system price starting from ₹6,00,000 for a starter integrated biofloc-RAS unit",
              },
            },
          }),
        }}
      />
    </main>
  );
}