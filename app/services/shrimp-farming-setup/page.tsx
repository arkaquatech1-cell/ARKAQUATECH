// app/services/shrimp-farming-setup/page.tsx

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
    "Shrimp Farming Setup | Vannamei Shrimp Pond & Tank Design | ARK AQUATECH",
  description:
    "ARK AQUATECH specialises in shrimp farming setup, vannamei shrimp pond design, HDPE-lined shrimp ponds, biofloc and RAS shrimp systems, aeration, and complete shrimp farming solutions across India. Get shrimp farming setup cost estimates today.",
  keywords: [
    "shrimp farming setup",
    "vannamei shrimp farming",
    "shrimp pond design",
    "shrimp farming cost",
    "shrimp farming India",
    "HDPE shrimp pond",
    "biofloc shrimp farming",
    "RAS shrimp farming",
    "shrimp hatchery setup",
    "shrimp farming project cost",
    "L. vannamei farming",
    "aquaculture shrimp technology",
    "shrimp pond liner",
    "shrimp farming aeration",
    "commercial shrimp farming",
  ],
  openGraph: {
    title: "Shrimp Farming Setup | ARK AQUATECH India",
    description:
      "Complete shrimp farming setup solutions — pond design, HDPE lining, aeration, biofloc/RAS integration, and 24/7 support. Get your shrimp farming setup cost and quote from ARK AQUATECH.",
    url: "https://www.arkaquatech.com/services/shrimp-farming-setup",
    siteName: "ARK AQUATECH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.arkaquatech.com/services/shrimp-farming-setup",
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroFeatures = [
  "HDPE-Lined Shrimp Pond Design",
  "Biofloc & RAS Shrimp Integration",
  "Aeration Systems & Paddlewheel Networks",
  "Water Quality Monitoring (24/7)",
  "Post-Larvae Stocking Guidance",
  "End-to-End Technical Support",
];

const stats = [
  { stat: "3×",    label: "Yield vs Traditional Pond" },
  { stat: "90 Days", label: "Typical Harvest Cycle" },
  { stat: "70%",   label: "Less Water Consumption" },
  { stat: "24/7",  label: "Water Quality Monitoring" },
];

const howItWorks = [
  {
    step: "01",
    title: "Pond Design & Site Preparation",
    body:
      "Shrimp farming setup begins with proper pond design — sizing, depth, slope, and drainage engineered specifically for L. vannamei culture. HDPE lining is installed to prevent seepage and provide a hygienic, easy-to-clean surface, forming the foundation of a productive shrimp pond.",
  },
  {
    step: "02",
    title: "Water Preparation & Post-Larvae Stocking",
    body:
      "Pond water is treated, fertilised to establish a healthy plankton bloom, and tested for salinity, pH, and alkalinity before post-larvae (PL) are introduced. Correct acclimatisation and stocking density at this stage are critical to survival rates in any shrimp farming setup.",
  },
  {
    step: "03",
    title: "Aeration, Feeding & Water Quality Management",
    body:
      "Paddlewheel aerators and diffused aeration systems maintain dissolved oxygen above 4–5 mg/L as biomass grows. Scheduled feeding, probiotic dosing, and daily water quality testing keep ammonia, nitrite, and pH within safe ranges throughout the grow-out period.",
  },
  {
    step: "04",
    title: "Harvest & Cycle Management",
    body:
      "Vannamei shrimp typically reach market size (30–40 count) in 90–110 days under well-managed conditions. ARK AQUATECH provides complete harvest planning, from partial harvesting strategies to full pond drain-harvest, ensuring maximum yield and quality at every shrimp farming setup we deliver.",
  },
];

const systemOptions = [
  { name: "Traditional HDPE-Lined Pond",  density: "60–100 PL/m²",  cycle: "100–120 days" },
  { name: "Biofloc Shrimp System",        density: "150–300 PL/m²", cycle: "90–110 days" },
  { name: "RAS-Integrated Shrimp Tank",   density: "300–500 PL/m³", cycle: "90–100 days" },
  { name: "Semi-Intensive Earthen Pond",  density: "20–40 PL/m²",   cycle: "120–140 days" },
  { name: "Super-Intensive Raceway",      density: "500+ PL/m³",    cycle: "80–100 days" },
  { name: "Nursery / Hatchery Tanks",     density: "Custom",        cycle: "20–30 days" },
];

const setupTypes = [
  {
    icon: Droplets,
    title: "HDPE-Lined Earthen Ponds",
    body:
      "Traditional grow-out ponds retrofitted or newly constructed with food-grade HDPE lining, sized from 0.5 to 2+ acres. Lining prevents soil erosion, seepage, and pathogen harbouring in pond soil — the most widely used shrimp farming setup for medium to large commercial operations. Setup cost starts from ₹8 lakh per acre.",
  },
  {
    icon: FlaskConical,
    title: "Biofloc Shrimp Tanks",
    body:
      "Round or oval HDPE tanks (10,000 L – 1,00,000 L) using biofloc technology to boost stocking density 2–3× beyond traditional ponds while cutting feed costs through in-tank microbial protein production. Ideal for land-scarce farmers seeking higher yield per square metre.",
  },
  {
    icon: Fish,
    title: "RAS-Integrated Shrimp Systems",
    body:
      "Recirculating aquaculture systems engineered specifically for shrimp, offering the highest achievable stocking densities with precise water quality control and strong biosecurity. Suited for farmers targeting export-grade, disease-free shrimp production at commercial scale.",
  },
];

const advantages = [
  {
    icon: TrendingUp,
    title: "3× Higher Yield Potential",
    body:
      "A properly engineered shrimp farming setup using biofloc or RAS technology achieves stocking densities and harvest yields up to 3 times higher than traditional earthen pond farming on the same footprint, significantly improving revenue per acre.",
  },
  {
    icon: Leaf,
    title: "Reduced Water Dependency",
    body:
      "HDPE-lined ponds and biofloc/RAS shrimp systems reduce water exchange requirements by up to 70% compared to open earthen ponds, making shrimp farming setup viable even in regions with limited freshwater or brackish water access.",
  },
  {
    icon: ShieldCheck,
    title: "Disease Risk Reduction",
    body:
      "Proper pond lining, biosecurity protocols, and water quality management dramatically lower the risk of white spot syndrome virus (WSSV), EMS, and other shrimp diseases that have historically devastated Indian shrimp farms — protecting both crop and investment.",
  },
  {
    icon: Zap,
    title: "Faster Harvest Cycles",
    body:
      "Vannamei shrimp in a well-managed setup reach market size in as little as 90 days, allowing farmers to run 2–3 production cycles per year compared to a single cycle in poorly managed traditional ponds, compounding annual revenue significantly.",
  },
  {
    icon: Settings2,
    title: "Export-Grade Quality Control",
    body:
      "Consistent water quality, biosecure setup, and documented farm management practices help farmers meet the stringent quality and traceability standards required for export markets, unlocking premium pricing for certified shrimp farming operations.",
  },
  {
    icon: FlaskConical,
    title: "Lower Feed Conversion Ratio",
    body:
      "Optimised aeration, feeding schedules, and (where used) biofloc supplementation reduce feed conversion ratio (FCR) to 1.2–1.5 in well-managed shrimp farming setups compared to 1.8–2.2 in poorly managed traditional ponds, directly lowering cost per kilogram produced.",
  },
];

const costTable = [
  { item: "HDPE Pond Lining (Per Acre)", range: "₹4,00,000 – ₹8,00,000" },
  { item: "Aeration System (Paddlewheel + Blower)", range: "₹1,50,000 – ₹4,00,000" },
  { item: "Post-Larvae (PL) Stock (Per Acre)", range: "₹40,000 – ₹90,000" },
  { item: "Feed (Per Cycle, Per Acre)", range: "₹2,00,000 – ₹5,00,000" },
  { item: "Water Quality Monitoring Kit", range: "₹15,000 – ₹40,000" },
  { item: "Probiotics & Pond Preparation", range: "₹30,000 – ₹70,000" },
  { item: "Electricity (Per Cycle, 100 days)", range: "₹50,000 – ₹1,20,000" },
  { item: "Starter Shrimp Farming Setup (1 Acre)", range: "₹8 – ₹18 Lakh (All-in)" },
];

const faqs = [
  {
    q: "What is involved in a shrimp farming setup?",
    a: "A shrimp farming setup typically involves pond or tank construction with HDPE lining, an aeration system (paddlewheel or diffused aeration), water quality monitoring equipment, post-larvae (PL) stocking, and a feeding and management protocol. Depending on scale and goals, the setup may be a traditional HDPE-lined earthen pond, a biofloc shrimp tank, or a fully recirculating RAS shrimp system. ARK AQUATECH designs each setup around site conditions, water source, and the farmer's production targets.",
  },
  {
    q: "What is the shrimp farming setup cost in India?",
    a: "Shrimp farming setup cost in India varies significantly based on pond size, technology, and level of intensification. A traditional 1-acre HDPE-lined pond setup costs approximately ₹8–₹18 lakh including lining, aeration, stock, and first-cycle feed. Biofloc or RAS-based shrimp systems cost more per unit area but achieve higher density and yield. ARK AQUATECH provides free detailed project reports (DPR) with full shrimp farming setup cost breakdowns on request.",
  },
  {
    q: "How much land is needed for a shrimp farming setup?",
    a: "A traditional shrimp farming setup typically requires 0.5–2 acres per production pond for a commercially viable operation, though biofloc and RAS-based shrimp systems can achieve meaningful production in far less space due to their much higher stocking densities. ARK AQUATECH assesses each farmer's available land and recommends the setup type that maximises yield within that footprint.",
  },
  {
    q: "How long does a shrimp farming cycle take?",
    a: "Vannamei shrimp typically reach a marketable size of 30–40 count per kilogram in 90–110 days under a well-managed shrimp farming setup, though this can extend to 120–140 days in semi-intensive traditional ponds with slower growth conditions. Faster cycles in biofloc or RAS systems allow farmers to complete 2–3 production cycles annually.",
  },
  {
    q: "How can I reduce disease risk in shrimp farming?",
    a: "Disease risk in shrimp farming is best managed through proper pond lining (to prevent pathogen harbouring in soil), disease-free certified post-larvae, strict biosecurity protocols (footbaths, restricted farm access, quarantine of new stock), and consistent water quality monitoring. ARK AQUATECH designs every shrimp farming setup with biosecurity as a core principle, not an afterthought, to protect farmers from outbreaks like white spot syndrome virus (WSSV) and EMS.",
  },
  {
    q: "Is biofloc or RAS better for shrimp farming than traditional ponds?",
    a: "Biofloc and RAS-based shrimp farming setups achieve significantly higher stocking densities, better water quality control, and lower disease risk than traditional earthen ponds, but require a higher upfront investment and more technical management. Traditional HDPE-lined ponds remain a cost-effective entry point for many farmers. ARK AQUATECH helps clients choose the right approach based on budget, land availability, and long-term production goals.",
  },
];

const relatedLinks = [
  { href: "/services/biofloc-fish-farming",               label: "Biofloc Fish Farming" },
  { href: "/services/ras-aquaculture-systems",             label: "RAS Aquaculture Systems" },
  { href: "/services/hdpe-pond-lining",                    label: "HDPE Pond Lining" },
  { href: "/services/aeration-systems",                    label: "Aeration Systems" },
  { href: "/services/advanced-aquaculture-systems",        label: "Advanced Aquaculture Systems" },
  { href: "/services/oxygen-management",                   label: "Oxygen Management" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ShrimpFarmingSetupPage() {
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
                Vannamei Shrimp Farming
              </span>
            </div>

            <h1 className="mt-8 text-[42px] font-black leading-[0.92] tracking-[-0.05em] text-[#021B2F] sm:text-[58px] lg:text-[72px]">
              Shrimp Farming<br />Setup
            </h1>

            <p className="mt-8 text-[16px] leading-[2] text-[#4B5563] sm:text-[18px]">
              ARK AQUATECH engineers India's most productive{" "}
              <strong>shrimp farming setup</strong> solutions — HDPE-lined pond design,
              biofloc and RAS shrimp integration, aeration networks, water quality monitoring,
              and hands-on farmer training. Whether you are starting your first{" "}
              <strong>vannamei shrimp farming</strong> operation or scaling an existing pond, we
              deliver turnkey solutions backed by 12+ years of{" "}
              <strong>shrimp farming</strong> expertise.
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
              alt="Shrimp Farming Setup Pond by ARK AQUATECH India"
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
          WHAT IS SHRIMP FARMING SETUP — INTRO SEO BLOCK
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[32px] sm:text-[46px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            What Does a Complete Shrimp Farming Setup Involve &amp; Why Does It Matter?
          </h2>
          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              A proper <strong>shrimp farming setup</strong> is far more than digging a pond and
              stocking post-larvae. It requires engineered pond design, HDPE lining to prevent
              seepage and pathogen harbouring, aeration sized for peak biomass load, and a
              disciplined water quality management protocol from day one. For{" "}
              <strong>vannamei shrimp farming</strong>, even small lapses in any of these areas
              can trigger disease outbreaks that wipe out an entire crop — which is why the
              quality of initial setup determines most of a farm's long-term profitability.
            </p>
            <p>
              For Indian shrimp farmers, a well-engineered <strong>shrimp farming setup</strong>{" "}
              addresses the sector's biggest risks simultaneously: disease outbreaks, water
              availability, and inconsistent yields. Whether built as a traditional HDPE-lined
              pond, a biofloc shrimp tank, or a fully recirculating RAS shrimp system, the right
              setup can lift stocking density, cut water exchange requirements by up to 70%, and
              compress harvest cycles to as little as 90 days.
            </p>
            <p>
              ARK AQUATECH has delivered <strong>shrimp farming setup</strong> projects across
              Andhra Pradesh, Odisha, West Bengal, Tamil Nadu, Gujarat, and other major Indian
              shrimp-producing states. Our engineering team designs each setup around
              site-specific conditions — soil type, water salinity, climate, target market, and
              farmer experience level — to ensure every client achieves consistent, biosecure,
              and profitable results from their very first crop.
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
              How a Shrimp Farming Setup Works
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280] max-w-2xl mx-auto">
              A step-by-step look at what goes into a productive, biosecure shrimp farming
              operation engineered by ARK AQUATECH.
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
              6 Key Advantages of a Professional Shrimp Farming Setup
            </h2>
            <p className="mt-4 text-[16px] text-white/60 max-w-2xl mx-auto">
              Why serious Indian shrimp farmers invest in a properly engineered{" "}
              <strong className="text-white">shrimp farming setup</strong>.
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
          SETUP TYPES
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/20 bg-[#F4F8FF] px-5 py-2 mb-6">
              <Droplets className="h-4 w-4 text-[#0A6EBD]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">Setup Options</span>
            </div>

            <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
              Shrimp Farming Setup Types &amp; Pricing
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              ARK AQUATECH supplies three main categories of <strong>shrimp farming setup</strong>{" "}
              to suit different budgets, scales, and land availability. Each option is engineered
              for optimal aeration, biosecurity, and ease of harvest — the three mechanical
              pillars of a productive shrimp operation. Our team will recommend the right setup
              type based on your investment capacity, production target, and site conditions,
              with transparent <strong>shrimp farming setup cost</strong> quotations.
            </p>

            <div className="space-y-5">
              {setupTypes.map(({ icon: Icon, title, body }) => (
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
              alt="HDPE-Lined Shrimp Pond Setup by ARK AQUATECH"
              width={900}
              height={700}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SYSTEM OPTIONS TABLE
      ══════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[30px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-4">
            Which Shrimp Farming Setup Fits Your Operation?
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Our <strong>shrimp farming setup</strong> designs are scale-specific engineered.
            Stocking density, aeration requirement, and harvest cycle differ significantly
            between traditional ponds, biofloc systems, and RAS-integrated tanks. The table
            below shows recommended parameters for each setup type from ARK AQUATECH.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EB] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#021B2F] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Setup Type</th>
                  <th className="text-left px-6 py-4 font-semibold">Stocking Density</th>
                  <th className="text-left px-6 py-4 font-semibold">Harvest Cycle</th>
                </tr>
              </thead>
              <tbody>
                {systemOptions.map(({ name, density, cycle }, i) => (
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
            Shrimp Farming Setup Cost Breakdown (India, 2024)
          </h2>
          <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-10">
            Transparency in <strong>shrimp farming setup cost</strong> is central to how ARK
            AQUATECH operates. The figures below represent indicative market prices for a
            standard 1-acre shrimp farming installation in India. Actual costs vary by location,
            setup type, and scale. Contact us for a free detailed project report (DPR) with
            site-specific cost and ROI projections.
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
            Government subsidies under PMMSY (Pradhan Mantri Matsya Sampada Yojana) and Coastal
            Aquaculture Authority (CAA) registration support can cover a portion of{" "}
            <strong>shrimp farming setup</strong> capital costs for eligible farmers. ARK
            AQUATECH assists clients in preparing subsidy application documentation and bankable
            project reports (DPR) to access available funding.
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
            ARK AQUATECH's Shrimp Farming Support: From Pond Design to Harvest
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.9] text-[#4B5563]">
            <p>
              Setting up a successful <strong>shrimp farming</strong> operation goes far beyond
              lining a pond and buying post-larvae. The difference between a profitable shrimp
              farm and a disease-hit failure almost always comes down to the quality of initial
              pond engineering, the precision of aeration sizing, and the consistency of water
              quality management during the first 30 days after stocking — the period most
              vulnerable to stress-related mortality and disease. This is where ARK AQUATECH's
              engineering expertise and field experience become your greatest asset.
            </p>
            <p>
              Our <strong>shrimp farming setup</strong> process begins with a detailed site
              assessment: water source and salinity analysis, soil type and bearing capacity,
              power availability, and market access for the target size grade. This data shapes
              every subsequent design decision — pond size and lining, aeration horsepower,
              biosecurity infrastructure, and harvest logistics. We do not apply a
              one-size-fits-all template; every ARK AQUATECH <strong>shrimp farming</strong>{" "}
              project is custom-engineered for its specific context.
            </p>
            <p>
              Aeration is the heartbeat of any intensive <strong>shrimp pond</strong>. Vannamei
              shrimp require dissolved oxygen above 4–5 mg/L at all times, especially during the
              final third of the grow-out cycle when biomass peaks. ARK AQUATECH sizes paddlewheel
              and diffused aeration systems based on projected peak biomass load, ensuring stable
              oxygen levels even during overnight low points. Our systems include primary
              aerators, emergency backup units, and automated changeover relays — so your crop is
              protected around the clock.
            </p>
            <p>
              Water quality and biosecurity management in <strong>shrimp farming</strong> is a
              dynamic daily discipline. As shrimp biomass grows, ammonia production rises,
              alkalinity depletes, and disease risk increases. Our protocols — including daily
              water testing, probiotic dosing schedules, restricted farm access, and
              quarantine procedures for new stock — are documented in detailed farm management
              standard operating procedures (SOPs) that our team trains your operators to
              execute precisely. This systematic approach is what consistently delivers harvest
              yields at the top end of species potential rather than the industry average, which
              has historically been depressed by disease losses.
            </p>
            <p>
              Post-harvest, ARK AQUATECH supports clients with market linkage advice, grading and
              sizing guidance, cold chain planning, and preparation for the next production
              cycle. Our relationship with each farmer does not end at pond commissioning — we
              are your long-term partner in building a profitable, biosecure{" "}
              <strong>shrimp farming</strong> enterprise.
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
              Shrimp Farming Setup — FAQs
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280]">
              Answers to the most common questions about shrimp farming setup cost, pond design,
              species and stocking, and biosecurity in India.
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
            Start Your Shrimp Farming<br />Setup Today
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-xl mx-auto">
            Get a free detailed project report, transparent{" "}
            <strong className="text-white">shrimp farming setup cost</strong> breakdown, and
            site-specific pond design from India's most trusted{" "}
            <strong className="text-white">vannamei shrimp farming</strong> company.
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
            "name": "Shrimp Farming Setup",
            "serviceType": "Aquaculture Engineering — Vannamei Shrimp Farming",
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
              "ARK AQUATECH provides complete shrimp farming setup solutions including HDPE-lined pond design, biofloc and RAS shrimp systems, aeration, water quality monitoring, and 24/7 technical support across India.",
            "url": "https://www.arkaquatech.com/services/shrimp-farming-setup",
            "areaServed": "IN",
            "keywords": [
              "shrimp farming setup",
              "vannamei shrimp farming",
              "shrimp pond design",
              "shrimp farming cost",
              "HDPE shrimp pond",
              "biofloc shrimp farming",
              "RAS shrimp farming",
              "shrimp farming India",
              "fishery technology",
              "commercial shrimp farming",
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "INR",
              "price": "800000",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "description": "Shrimp farming setup cost starting from ₹8,00,000 per acre for a standard HDPE-lined pond",
              },
            },
          }),
        }}
      />
    </main>
  );
}