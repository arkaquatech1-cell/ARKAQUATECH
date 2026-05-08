// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARK AQUATECH | Smart Aquaculture Solutions",
  description:
    "ARK AQUATECH provides advanced aquaculture systems including RAS, Biofloc, Shrimp Farming, Crab Farming, Water Management, and Industrial Engineering Solutions.",

  keywords: [
    "Aquaculture",
    "Biofloc",
    "RAS System",
    "Shrimp Farming",
    "Crab Farming",
    "Aquaponics",
    "Water Management",
    "Fish Farming",
    "ARK AQUATECH",
  ],

  authors: [{ name: "ARK AQUATECH" }],

  creator: "ARK AQUATECH",

  openGraph: {
    title: "ARK AQUATECH",
    description:
      "Innovating Aquaculture Through Smart Technology & Sustainable Farming Solutions.",
    url: "https://www.arkaquatech.com",
    siteName: "ARK AQUATECH",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden antialiased flex flex-col">
        {/* BACKGROUND EFFECTS */}

        <div className="fixed inset-0 -z-50 overflow-hidden">
          {/* BLUE GLOW */}

          <div className="absolute top-[-250px] left-[-250px] w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />

          {/* GREEN GLOW */}

          <div className="absolute bottom-[-250px] right-[-250px] w-[600px] h-[600px] bg-green-500/20 blur-[180px] rounded-full" />

          {/* GRID */}

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* NAVBAR */}

        <Navbar />

        {/* MAIN CONTENT */}

        <main className="flex-1 pt-24">
          {children}
        </main>

        {/* FOOTER */}

        <Footer />
      </body>
    </html>
  );
}