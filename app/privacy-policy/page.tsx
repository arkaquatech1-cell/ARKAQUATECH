import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | ARK AQUATECH",
  description:
    "Privacy Policy for ARK AQUATECH and its website visitors.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#021B2F]">
      <section className="bg-[#031A2B] px-6 pb-20 pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#54B5FF]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-300">
            Last updated: August 10, 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10 text-[15px] leading-8 text-slate-600">

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              1. Introduction
            </h2>

            <p className="mt-4">
              ARK AQUATECH respects your privacy and is committed to protecting
              the information you provide while using our website and services.
              This Privacy Policy explains how information may be collected,
              used, and protected when you visit our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              2. Information We Collect
            </h2>

            <p className="mt-4">
              We may collect information that you voluntarily provide through
              contact forms, enquiries, emails, or other communication channels.
              This may include your name, email address, phone number, company
              details, project requirements, and other information you choose
              to provide.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              3. How We Use Information
            </h2>

            <p className="mt-4">
              Information may be used to respond to enquiries, provide requested
              services, communicate about projects, improve our website and
              services, and maintain business records.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              4. Cookies and Analytics
            </h2>

            <p className="mt-4">
              Our website may use cookies, analytics tools, or similar
              technologies to understand website usage and improve user
              experience. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              5. Information Security
            </h2>

            <p className="mt-4">
              We take reasonable measures to protect information against
              unauthorized access, misuse, alteration, or disclosure. However,
              no internet transmission or electronic storage system can be
              guaranteed to be completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              6. Third-Party Services
            </h2>

            <p className="mt-4">
              Our website may contain links to third-party websites or use
              third-party services. ARK AQUATECH is not responsible for the
              privacy practices or content of third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              7. Changes to This Policy
            </h2>

            <p className="mt-4">
              We may update this Privacy Policy from time to time. Any changes
              will be published on this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              8. Contact Us
            </h2>

            <p className="mt-4">
              For privacy-related questions or requests, contact us at:
            </p>

            <p className="mt-3 font-bold text-[#0A6EBD]">
              info@arkaquatech.com
            </p>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <Link
              href="/"
              className="font-bold text-[#0A6EBD] hover:text-[#075a9c]"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}