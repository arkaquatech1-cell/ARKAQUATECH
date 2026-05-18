// app/contact/page.tsx

import type { Metadata } from "next";
import ContactClient from "./ContactClient";


export const metadata: Metadata = {
  title: "Contact ARK AQUATECH",
  description:
    "Contact ARK AQUATECH for Biofloc technology, RAS systems, fish farming, shrimp farming, industrial water treatment, and marine engineering services.",
};

export default function ContactPage() {
  return <ContactClient />;
}