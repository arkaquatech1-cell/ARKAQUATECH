import AboutHeroSection from "./AboutHeroSection";
import CompanyIntroSection from "./CompanyIntroSection";
import CoreServicesSection from "./CoreServicesSection";
import FAQSection from "./FAQSection";
import IndustriesSection from "./IndustriesSection";
import MissionVisionSection from "./MissionVisionSection";
import ProcessSection from "./ProcessSection";
import ProjectsGallerySection from "./ProjectsGallerySection";
import TechnologySection from "./TechnologySection";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseUsSection from "./WhyChooseUsSection";

export const metadata = {
  title:
    "About ARK AQUATECH | Biofloc, RAS & Smart Aquaculture Solutions India",

  description:
    "ARK AQUATECH is a leading aquaculture engineering company in India specializing in Biofloc fish farming, RAS systems, industrial water treatment, smart aquaculture automation, marine engineering, and sustainable aquatic infrastructure solutions.",

  keywords: [
    "Biofloc Fish Farming",
    "RAS Systems India",
    "Aquaculture Engineering",
    "Industrial Water Treatment",
    "Smart Aquaculture",
    "Marine Engineering",
    "Shrimp Farming",
    "Fish Farming Infrastructure",
    "Water Management Solutions",
    "Aquaculture Company India",
    "Industrial RO Plants",
    "Sustainable Aquaculture",
  ],

  openGraph: {
    title:
      "About ARK AQUATECH | Smart Aquaculture Engineering Solutions",

    description:
      "Advanced aquaculture engineering solutions including Biofloc systems, RAS technology, water treatment plants, IoT automation, and marine infrastructure services across India.",

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

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#031018]">
      {/* HERO SECTION */}

      <AboutHeroSection />

      {/* COMPANY INTRO */}

      <CompanyIntroSection />

      {/* MISSION & VISION */}

      <MissionVisionSection />

      {/* CORE SERVICES */}

    

      {/* WHY CHOOSE US */}

      <WhyChooseUsSection />

      {/* INDUSTRIES */}

      <IndustriesSection />

      {/* TECHNOLOGY */}

      <TechnologySection />

      {/* PROCESS */}

      <ProcessSection />

      {/* PROJECTS */}



      {/* TESTIMONIALS */}

      <TestimonialsSection />

      {/* FAQ */}

      <FAQSection />

 
 
    </main>
  );
}