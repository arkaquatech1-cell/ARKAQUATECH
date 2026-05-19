// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingFishes from "./components/FloatingFishes";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import LeadGenerationPopup from "./components/LeadGenerationPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arkaquatech.com"),

  title: {
    default:
      "ARK AQUATECH | Smart Aquaculture & Water Engineering Solutions",
    template: "%s | ARK AQUATECH",
  },

  description:
    "ARK AQUATECH delivers advanced aquaculture solutions including Biofloc Systems, RAS Technology, Shrimp Farming, Fish Farming, Aquaponics, Water Treatment, and Industrial Engineering Services across India and international markets.",

  keywords: [
    "ARK AQUATECH",
    "Aquaculture Company India",
    "Biofloc Fish Farming",
    "RAS Aquaculture System",
    "Shrimp Farming Solutions",
    "Fish Farming Technology",
    "Aquaponics Systems",
    "Water Treatment Solutions",
    "Aquaculture Engineering",
    "Smart Aquaculture",
    "Industrial Water Management",
    "Sustainable Fish Farming",
    "Aquaculture Projects India",
    "International Aquaculture Solutions",
  ],

  authors: [{ name: "ARK AQUATECH" }],

  creator: "ARK AQUATECH",

  publisher: "ARK AQUATECH",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.arkaquatech.com",
  },

  openGraph: {
    title:
      "ARK AQUATECH | Smart Aquaculture & Water Engineering Solutions",

    description:
      "Advanced Biofloc, RAS, Shrimp Farming, Water Management, and Sustainable Aquaculture Engineering Solutions.",

    url: "https://www.arkaquatech.com",

    siteName: "ARK AQUATECH",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ARK AQUATECH",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "ARK AQUATECH | Smart Aquaculture Solutions",

    description:
      "Advanced Aquaculture, Biofloc, RAS & Water Engineering Services.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <body
        className="
          font-sans
          bg-[#061018]
          text-white
          antialiased
          overflow-x-hidden
          min-h-screen
          flex
          flex-col
        "
      >
        {/* MODERN SOFT BACKGROUND */}

        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* TOP GLOW */}

          <div
            className="
              absolute
              top-[-180px]
              left-[-180px]
              w-[420px]
              h-[420px]
              bg-cyan-500/10
              blur-[120px]
              rounded-full
            "
          />

          {/* BOTTOM GLOW */}

          <div
            className="
              absolute
              bottom-[-180px]
              right-[-180px]
              w-[420px]
              h-[420px]
              bg-emerald-500/10
              blur-[120px]
              rounded-full
            "
          />

          {/* LIGHT GRID */}

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#061018]/20 to-[#061018]" />
        </div>

        {/* NAVBAR */}

        <Navbar />

        {/* MAIN */}

        <main className="flex-1 pt-[92px]">
          {children}
        </main>

        {/* FOOTER */}

        <Footer />

        {/* FLOATING BUTTONS */}

        <LeadGenerationPopup />
        <WhatsAppFloatingButton />

        {/* GOOGLE ANALYTICS */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6RS4EHE03Z"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6RS4EHE03Z');
          `}
        </Script>

        {/* STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ARK AQUATECH",
              url: "https://www.arkaquatech.com",
              logo: "https://www.arkaquatech.com/logo.png",
              description:
                "Advanced aquaculture and water engineering company providing Biofloc systems, RAS aquaculture, shrimp farming, hatchery design, HDPE pond lining, and industrial water treatment solutions.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9063289228",
                contactType: "customer support",
              },
              sameAs: [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}