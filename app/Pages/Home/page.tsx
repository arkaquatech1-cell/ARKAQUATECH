// app/page.tsx

import AboutSection from "@/app/components/AboutSection";
import BlogSection from "@/app/components/BlogSection";
import CTASection from "@/app/components/CTASection";
import FAQSection from "@/app/components/FAQSection";
import HeroSection from "@/app/components/HeroSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import ServicesSection from "@/app/components/ServicesSection";
import StatsSection from "@/app/components/StatsSection";
import TechnologySection from "@/app/components/TechnologySection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";



export const metadata = {
  title:
    "ARK AQUATECH | Smart Aquaculture & Marine Engineering Solutions",

  description:
    "ARK AQUATECH provides advanced Biofloc technology, RAS systems, fish farming, shrimp farming, industrial water treatment, sustainable aquaculture infrastructure, and smart marine engineering solutions across India.",

  keywords: [
    "Biofloc Technology",
    "RAS Systems",
    "Fish Farming",
    "Shrimp Farming",
    "Aquaculture Company",
    "Marine Engineering",
    "Water Treatment",
    "Aquaculture Infrastructure",
    "Industrial RO Plants",
    "Aquaponics",
    "Smart Aquaculture",
    "Aquaculture India",
  ],

  openGraph: {
    title:
      "ARK AQUATECH | Smart Aquaculture Solutions",

    description:
      "Advanced aquaculture technologies including Biofloc systems, RAS farming, industrial water treatment, marine infrastructure, and sustainable aquatic engineering.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#03131d]">




      {/* HERO SECTION */}

      <HeroSection />

      {/* ABOUT SECTION */}

      <AboutSection />

      {/* SERVICES SECTION */}

      <ServicesSection />

      {/* WHY CHOOSE US */}

      <WhyChooseUsSection />

      {/* PROJECTS SECTION */}

      <ProjectsSection />

      {/* TECHNOLOGY SECTION */}

      <TechnologySection />

      {/* STATS SECTION */}

      <StatsSection />

      {/* TESTIMONIALS SECTION */}

      <TestimonialsSection />

      {/* FAQ SECTION */}

      <FAQSection />

      {/* BLOG SECTION */}

      <BlogSection />

      {/* CTA SECTION */}

      <CTASection />

   


    </main>
  );
}