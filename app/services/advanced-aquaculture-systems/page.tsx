// app/services/advanced-aquaculture-systems/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets, Zap, Settings2, FlaskConical, Fish, Waves } from "lucide-react";

export const metadata = {
  title: "Advanced Aquaculture Systems | Biofloc Fish Farming & RAS | ARK AQUATECH",
  description:
    "ARK AQUATECH offers advanced aquaculture systems including biofloc fish farming, recirculating aquaculture systems (RAS), HDPE pond lining, aeration, smart automation & aquaculture water treatment across India. Expert fishery technology solutions.",
  keywords: [
    "biofloc fish farming",
    "recirculating aquaculture system",
    "ras system aquaculture",
    "aquaculture system",
    "bio floc technology",
    "biofloc tank",
    "bio floc farming",
    "biofloc fish",
    "biofloc fish farming cost",
    "biofloc fish tank",
    "biofloc tank price",
    "fishery technology",
    "recirculating aquaculture systems ras",
    "advanced aquaculture systems",
    "aquaculture water treatment",
    "fish farming technology",
  ],
  openGraph: {
    title: "Advanced Aquaculture Systems | Biofloc & RAS | ARK AQUATECH",
    description:
      "India's leading aquaculture engineering company offering biofloc fish farming systems, RAS, aeration, HDPE pond lining & smart automation.",
    url: "https://www.arkaquatech.com/services/advanced-aquaculture-systems",
    siteName: "ARK AQUATECH",
    type: "website",
  },
  alternates: {
    canonical: "https://www.arkaquatech.com/services/advanced-aquaculture-systems",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  { icon: Fish,        label: "Biofloc Fish Farming Systems" },
  { icon: Waves,       label: "Recirculating Aquaculture Systems (RAS)" },
  { icon: Droplets,    label: "HDPE Pond Lining" },
  { icon: Zap,         label: "Aeration & Oxygen Management" },
  { icon: Settings2,   label: "Smart Automation" },
  { icon: FlaskConical,label: "Aquaculture Water Treatment" },
];

const biofloc = [
  {
    q: "What is Biofloc Technology?",
    a: "Biofloc technology (BFT) is a sustainable aquaculture method where beneficial microorganisms — bacteria, algae, and protozoa — are cultivated inside the fish tank. These microbial flocs serve as a live, protein-rich feed for fish while simultaneously treating water by converting toxic ammonia and nitrites into harmless compounds. The result is a near-zero water-exchange system that dramatically reduces operating costs and environmental impact.",
  },
  {
    q: "Biofloc Fish Farming Cost & ROI",
    a: "One of the biggest advantages of biofloc fish farming is cost efficiency. Because the biofloc system recycles nutrients, feed conversion ratios (FCR) drop significantly — often 20–30% lower than conventional pond farming. Biofloc fish tank setups typically range from ₹3–8 lakh for a starter round-tank unit, with biofloc tank prices varying based on volume (10,000–100,000 litres), aeration design, and automation level. Commercial operators consistently report payback within 18–30 months.",
  },
  {
    q: "Biofloc Fish Tank Design & Setup",
    a: "A standard biofloc tank from ARK AQUATECH uses high-density polyethylene (HDPE) or fibreglass shells, central drain systems, paddlewheel or blower-based aeration columns, and real-time water-quality probes. The tank geometry is engineered to maintain a homogenous floc suspension — typically 10–15 mL/L total suspended solids — so fish are never exposed to oxygen-depleted dead zones.",
  },
];

const rasPoints = [
  "Continuous mechanical & biological filtration removes solids and converts ammonia",
  "UV sterilisation and ozone dosing eliminate pathogens without antibiotics",
  "Dissolved oxygen maintained at 6–9 mg/L around the clock via liquid oxygen or pure-oxygen diffusers",
  "Temperature control systems sustain optimal species-specific growth ranges",
  "Fish density 10–40× higher than open-pond systems per unit of water",
  "Water reuse rate of 95–99%, dramatically reducing freshwater consumption",
];

const whyArk = [
  { stat: "500+", label: "Farms Commissioned" },
  { stat: "12+",  label: "Years in Fishery Technology" },
  { stat: "99%",  label: "Client Retention Rate" },
  { stat: "30+",  label: "States Served Across India" },
];

const faqs = [
  {
    q: "Which fish species work best in a biofloc system?",
    a: "Tilapia, catfish (Pangasius), rohu, common carp, and shrimp (Litopenaeus vannamei) are the most commonly farmed species in biofloc fish tanks. ARK AQUATECH designs each biofloc fish farming system around species-specific stocking density, pH, salinity, and temperature requirements.",
  },
  {
    q: "What is the difference between a RAS system and biofloc aquaculture?",
    a: "A Recirculating Aquaculture System (RAS) relies on external mechanical and biological filtration infrastructure — drum filters, biofilter media, UV units — to clean and recirculate water. Bio floc technology, by contrast, maintains the microbial ecosystem inside the tank itself. Many modern advanced aquaculture systems integrate both approaches: a biofloc tank at the core with a secondary RAS polishing loop for maximum biosecurity and productivity.",
  },
  {
    q: "How much does a complete RAS system cost in India?",
    a: "A turnkey recirculating aquaculture system from ARK AQUATECH starts at approximately ₹12–25 lakh for a small-scale indoor unit (1–5 MT/year capacity). Larger commercial RAS projects (50–500 MT/year) are custom-engineered and priced per detailed site surveys. Contact our team for a free feasibility report and RAS cost estimate.",
  },
  {
    q: "What is aquaculture water treatment and why does it matter?",
    a: "Aquaculture water treatment refers to the suite of physical, chemical, and biological processes used to maintain optimal water quality for fish and shrimp. Poor water quality is responsible for over 70% of production losses in Indian fish farming. ARK AQUATECH's integrated water treatment solutions — covering aeration, biofiltration, UV sterilisation, and automated dosing — keep ammonia, nitrite, and pathogen loads within safe thresholds 24/7.",
  },
  {
    q: "Do you provide after-sales support and training?",
    a: "Yes. Every ARK AQUATECH installation includes a structured onboarding programme, on-site commissioning, operator training, and a dedicated support helpline. Our fishery technology experts also conduct quarterly farm audits to optimise feed rates, stocking density, and water quality parameters for peak production.",
  },
];

const relatedLinks = [
  { href: "/services/aeration-systems",        label: "Aeration Systems" },
  { href: "/services/hdpe-pond-lining",        label: "HDPE Pond Lining" },
  { href: "/services/smart-farm-automation",   label: "Smart Farm Automation" },
  { href: "/services/oxygen-management",       label: "Oxygen Management" },
  { href: "/services/water-quality-solutions", label: "Water Quality Solutions" },
  { href: "/blog/biofloc-fish-farming-guide",  label: "Biofloc Farming Guide (Blog)" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function AdvancedAquacultureSystemsPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-24 px-6">
        {/* ambient blobs */}
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
                Aquaculture Engineering
              </span>
            </div>

            <h1 className="mt-8 text-[42px] font-black leading-[0.92] tracking-[-0.05em] text-[#021B2F] sm:text-[58px] lg:text-[70px]">
              Advanced<br />Aquaculture<br />Systems
            </h1>

            <p className="mt-8 text-[16px] leading-[2] text-[#4B5563] sm:text-[18px]">
              ARK AQUATECH delivers end-to-end advanced aquaculture systems — from{" "}
              <strong>biofloc fish farming tanks</strong> and{" "}
              <strong>recirculating aquaculture systems (RAS)</strong> to HDPE pond
              lining, smart automation, oxygen management, and aquaculture water
              treatment — helping Indian fish farmers achieve record yields
              sustainably and profitably.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#0A6EBD]" />
                  <span className="text-[#374151] font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-8 py-4 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
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
              src="/Services/services4.jpg"
              alt="Advanced Aquaculture Systems — Biofloc Fish Tank and RAS by ARK AQUATECH"
              width={1200}
              height={1200}
              priority
              className="h-[500px] w-full object-cover lg:h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#021B2F] py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {whyArk.map(({ stat, label }) => (
            <div key={label}>
              <p className="text-[48px] font-black tracking-tight text-[#63C96A]">{stat}</p>
              <p className="mt-1 text-sm font-medium text-white/70 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BIOFLOC FISH FARMING — MAIN SEO SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]">
        <div className="max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/20 bg-white px-5 py-2 mb-6">
            <Fish className="h-4 w-4 text-[#0A6EBD]" />
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">Bio Floc Technology</span>
          </div>

          <h2 className="text-[36px] sm:text-[48px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
            Biofloc Fish Farming:<br />The Future of Sustainable Aquaculture
          </h2>

          <p className="text-[17px] leading-[1.9] text-[#4B5563] mb-10">
            Biofloc fish farming has revolutionised the aquaculture industry in India and globally.
            At ARK AQUATECH, we engineer, supply, and commission complete <strong>biofloc fish tank</strong> systems
            tailored to your species, land area, and investment capacity. Whether you are a first-time fish farmer
            exploring <strong>bio floc farming</strong> or an established commercial operator looking to scale with
            proven <strong>bio floc technology</strong>, our team delivers solutions backed by science, field
            experience, and 12+ years of fishery technology expertise.
          </p>

          <div className="space-y-10">
            {biofloc.map(({ q, a }) => (
              <div key={q} className="rounded-3xl bg-white border border-[#E5E7EB] p-8 shadow-sm">
                <h3 className="text-[20px] font-bold text-[#021B2F] mb-3">{q}</h3>
                <p className="text-[16px] leading-[1.85] text-[#4B5563]">{a}</p>
              </div>
            ))}
          </div>

          {/* Biofloc CTA inline */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Request Biofloc Farm Design <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blog/biofloc-fish-farming-guide"
              className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/30 px-7 py-3.5 text-sm font-semibold text-[#0A6EBD] hover:bg-[#F4F8FF] transition"
            >
              Read Our Biofloc Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          RAS — RECIRCULATING AQUACULTURE SYSTEMS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[32px] border border-[#E5E7EB] shadow-lg">
            <Image
              src="/Services/services4.jpg"
              alt="Recirculating Aquaculture System (RAS) installation by ARK AQUATECH"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#63C96A]/30 bg-[#F0FFF4] px-5 py-2 mb-6">
              <Waves className="h-4 w-4 text-[#22863a]" />
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#021B2F]">RAS Technology</span>
            </div>

            <h2 className="text-[32px] sm:text-[44px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-6">
              Recirculating Aquaculture Systems (RAS): High-Density, Low-Water Fish Farming
            </h2>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              A <strong>recirculating aquaculture system (RAS)</strong> is the gold standard for
              indoor, climate-controlled, and biosecure fish production. Unlike traditional ponds,
              a <strong>RAS system aquaculture</strong> setup continuously filters, treats, and
              recirculates the same water — using up to 99% less freshwater than flow-through systems.
              ARK AQUATECH engineers custom RAS systems for tilapia, salmon, trout, shrimp, catfish,
              and ornamental fish, across scales from small pilot units to large commercial facilities.
            </p>

            <ul className="space-y-3 mb-8">
              {rasPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-[15px] text-[#374151]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-[#0A6EBD]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <p className="text-[16px] leading-[1.9] text-[#4B5563] mb-8">
              Our <strong>recirculating aquaculture systems</strong> incorporate the latest
              <strong> aquaculture water treatment</strong> technologies — including drum filters,
              moving bed biofilm reactors (MBBR), protein skimmers, ozone generators, and liquid
              oxygen injection — to ensure your stock never experiences suboptimal water conditions.
              Combined with our <strong>smart automation</strong> platform, every parameter is
              monitored and adjusted automatically 24/7, reducing labour costs and human error.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0A6EBD] to-[#15176B] px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Get RAS System Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FISHERY TECHNOLOGY OVERVIEW
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#021B2F]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[36px] sm:text-[48px] font-black tracking-[-0.04em] text-white leading-tight">
            Complete Fish Farming Technology<br />Under One Roof
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-2xl mx-auto">
            From site selection and feasibility studies to system commissioning and operator training,
            ARK AQUATECH is India's most comprehensive <strong className="text-white">fishery technology</strong> partner.
            Our integrated approach combines proven <strong className="text-white">aquaculture systems</strong> engineering
            with hands-on field support so you get the best return on your fish farming investment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Fish,
              title: "Biofloc Tank Design & Supply",
              body:
                "Custom-fabricated HDPE and fibreglass biofloc tanks in 10,000 L – 1,00,000 L capacities. Each biofloc fish tank is engineered for optimal floc suspension, aeration uniformity, and ease of harvest. We provide transparent biofloc tank price breakdowns with no hidden costs.",
            },
            {
              icon: Waves,
              title: "RAS System Engineering",
              body:
                "End-to-end recirculating aquaculture system design including water flow modelling, filter sizing, oxygen budgeting, and biosecurity protocols. Our RAS system aquaculture projects have achieved stocking densities of up to 80 kg/m³ for tilapia and 60 kg/m³ for catfish.",
            },
            {
              icon: Droplets,
              title: "HDPE Pond Lining",
              body:
                "Food-safe, UV-stabilised HDPE geomembrane liners for earthen ponds, biofloc pits, and sump tanks. Our lining solutions prevent seepage, reduce algae, and extend pond life by 15–20 years — a foundational investment for any modern aquaculture system.",
            },
            {
              icon: Zap,
              title: "Aeration Systems",
              body:
                "Paddlewheel aerators, root-blower diffuser networks, and venturi injectors sized precisely for your biomass load. Proper aeration is the single most critical factor in biofloc fish farming success — our systems maintain dissolved oxygen above 5 mg/L at peak stocking density.",
            },
            {
              icon: FlaskConical,
              title: "Aquaculture Water Treatment",
              body:
                "Integrated water treatment trains including mechanical filtration, biological nitrification, UV sterilisation, ozone dosing, CO₂ stripping, and automated chemical dosing. Protects your stock from ammonia spikes, pathogen outbreaks, and oxygen depletion events.",
            },
            {
              icon: Settings2,
              title: "Smart Automation & IoT Monitoring",
              body:
                "Real-time dashboards, automated feeders, dissolved oxygen controllers, pH dosing pumps, and SMS/WhatsApp alert systems. Our fish farming technology platform lets you manage multiple farms remotely from a single app — reducing labour by up to 40%.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/8 transition">
              <Icon className="h-8 w-8 text-[#63C96A] mb-5" />
              <h3 className="text-[18px] font-bold text-white mb-3">{title}</h3>
              <p className="text-[14px] leading-[1.8] text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INLINE SEO CONTENT BLOCK
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">

          <h2 className="text-[32px] sm:text-[42px] font-black tracking-[-0.04em] text-[#021B2F] leading-tight mb-8">
            Why Advanced Aquaculture Systems Are Transforming Indian Fish Farming
          </h2>

          <p className="text-[17px] leading-[1.9] text-[#4B5563] mb-6">
            India is the second-largest aquaculture producer in the world, yet the majority of
            domestic fish farms still rely on decades-old earthen pond technology with low
            productivity, high disease risk, and heavy freshwater consumption. The shift toward
            <strong> advanced aquaculture systems</strong> — particularly <strong>biofloc fish farming</strong> and{" "}
            <strong>recirculating aquaculture systems (RAS)</strong> — represents the single biggest
            opportunity for Indian fish farmers to double or triple yields while halving operating costs.
          </p>

          <p className="text-[17px] leading-[1.9] text-[#4B5563] mb-6">
            <strong>Bio floc technology</strong> is especially well-suited to Indian conditions: it
            works in limited land areas, requires no large water body, and produces higher-protein
            fish at lower feed costs. A typical 10,000-litre <strong>biofloc tank</strong> can produce
            500–800 kg of tilapia or catfish in a 120-day cycle — compared to 50–80 kg from a
            comparable traditional pond. When you factor in reduced water costs, lower feed conversion
            ratios, and the ability to run 3–4 cycles per year, the economics of
            <strong> bio floc farming</strong> are compelling for farms of any size.
          </p>

          <p className="text-[17px] leading-[1.9] text-[#4B5563] mb-6">
            For operators targeting premium markets — export-grade fish, live fish for urban
            restaurants, or high-value species like trout and barramundi — a full
            <strong> recirculating aquaculture system</strong> provides the biosecurity and water
            quality consistency that open-pond systems simply cannot guarantee. RAS also enables
            year-round production irrespective of monsoon, drought, or seasonal temperature swings,
            giving Indian fish farmers unprecedented control over their supply chains and profitability.
          </p>

          <p className="text-[17px] leading-[1.9] text-[#4B5563] mb-6">
            Underlying both technologies is the importance of robust
            <strong> aquaculture water treatment</strong>. Ammonia toxicity and oxygen depletion
            remain the leading causes of mass mortality events on Indian farms. ARK AQUATECH's
            integrated treatment systems continuously monitor and correct 14 water quality
            parameters — dissolved oxygen, pH, ammonia, nitrite, nitrate, alkalinity, salinity,
            turbidity, temperature, CO₂, ORP, TDS, hardness, and pathogen load — so your fish
            grow in optimal conditions every day of every cycle.
          </p>

          <p className="text-[17px] leading-[1.9] text-[#4B5563] mb-6">
            Our <strong>fish farming technology</strong> approach is holistic: we don't just
            supply equipment, we partner with you through every phase — site feasibility,
            infrastructure design, system installation, water quality commissioning, species
            selection, stocking strategy, feed management, and post-harvest logistics. This
            full-cycle <strong>fishery technology</strong> support is why ARK AQUATECH farmers
            consistently outperform regional benchmarks by 25–40% in production efficiency.
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ — SCHEMA-FRIENDLY
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#F4F8FF]" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-[32px] sm:text-[44px] font-black tracking-[-0.04em] text-[#021B2F]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[16px] text-[#6B7280]">
              Everything you need to know about biofloc fish farming, RAS systems, and aquaculture water treatment.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-3xl bg-white border border-[#E5E7EB] p-8 shadow-sm"
                itemScope
                itemType="https://schema.org/Question"
                itemProp="mainEntity"
              >
                <h3 className="text-[18px] font-bold text-[#021B2F] mb-3" itemProp="name">{q}</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <p className="text-[15px] leading-[1.85] text-[#4B5563]" itemProp="text">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INTERNAL LINKS — SEO SILOING
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[22px] font-bold text-[#021B2F] mb-6">
            Explore Related Aquaculture Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/30 bg-[#F4F8FF] px-5 py-2.5 text-sm font-medium text-[#0A6EBD] hover:bg-[#0A6EBD] hover:text-white transition"
              >
                {label} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#021B2F] to-[#0A3A6A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[36px] sm:text-[50px] font-black tracking-[-0.04em] text-white leading-tight">
            Ready to Build Your Advanced Aquaculture System?
          </h2>
          <p className="mt-6 text-[17px] leading-[1.9] text-white/60 max-w-xl mx-auto">
            Whether you need a turnkey <strong className="text-white">biofloc fish farming</strong> setup,
            a high-density <strong className="text-white">recirculating aquaculture system</strong>, or
            a complete <strong className="text-white">aquaculture water treatment</strong> plant — our
            engineers are ready to deliver. Get a free consultation and site-specific feasibility study today.
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

      {/* ══════════════════════════════════════════════════════════════
          SCHEMA MARKUP — JSON-LD
      ══════════════════════════════════════════════════════════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Advanced Aquaculture Systems",
            "serviceType": "Aquaculture Engineering",
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
              "ARK AQUATECH provides advanced aquaculture systems including biofloc fish farming, recirculating aquaculture systems (RAS), HDPE pond lining, aeration systems, smart automation, and aquaculture water treatment across India.",
            "url": "https://www.arkaquatech.com/services/advanced-aquaculture-systems",
            "areaServed": "IN",
            "keywords": [
              "biofloc fish farming",
              "recirculating aquaculture system",
              "ras system aquaculture",
              "bio floc technology",
              "biofloc tank",
              "biofloc fish tank",
              "aquaculture water treatment",
              "fish farming technology",
              "fishery technology",
            ],
          }),
        }}
      />
    </main>
  );
}