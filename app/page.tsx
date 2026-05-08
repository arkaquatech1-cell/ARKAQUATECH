// app/page.tsx

import HomePage from "./Pages/Home/page";



export const metadata = {
  title:
    "ARK AQUATECH | Smart Aquaculture & Marine Engineering Solutions",

  description:
    "ARK AQUATECH provides advanced Biofloc technology, RAS systems, fish farming, shrimp farming, industrial water treatment, sustainable aquaculture infrastructure, and smart marine engineering solutions across India.",
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f8f7f4]">
     <HomePage/>
    </main>
  );
}