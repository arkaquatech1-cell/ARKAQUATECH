// app/page.tsx

import AboutSection from "@/app/components/AboutSection";

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
    "ARK AQUATECH | Biofloc, RAS & Smart Aquaculture Solutions India",

  description:
    "ARK AQUATECH is a leading aquaculture engineering company in India specializing in Biofloc fish farming, RAS systems, industrial RO plants, water treatment, IoT automation, shrimp farming infrastructure, and smart marine engineering solutions.",

  keywords: [
    "Biofloc Fish Farming",
    "RAS Systems India",
    "Aquaculture Engineering",
    "Industrial RO Plants",
    "Shrimp Farming",
    "Fish Farming Andhra Pradesh",
    "Water Treatment Solutions",
    "Smart Aquaculture",
    "Marine Engineering",
    "Commercial Aquaculture",
    "IoT Aquaculture",
    "Sustainable Fish Farming",
  ],

  openGraph: {
    title:
      "ARK AQUATECH | Smart Aquaculture Engineering Solutions",

    description:
      "Advanced Biofloc systems, RAS aquaculture, industrial water treatment, fish farming infrastructure, and marine engineering solutions across India.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#03131d]">
      {/* HERO */}

      <HeroSection />

      {/* ABOUT */}

      <AboutSection />

      {/* SERVICES */}

      <ServicesSection />



   

      {/* WHY CHOOSE US */}

      <WhyChooseUsSection />

      {/* TECHNOLOGY */}

      <TechnologySection />

      {/* PROCESS */}

   

      {/* PROJECTS */}

      <ProjectsSection />

      {/* STATS */}

      <StatsSection />

      {/* TESTIMONIALS */}

      <TestimonialsSection />

      {/* BLOGS */}

 

      {/* FAQ */}

      <FAQSection />

      {/* CTA */}

      <CTASection />
    </main>
  );
}