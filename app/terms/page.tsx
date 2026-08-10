import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | ARK AQUATECH",
  description:
    "Terms and Conditions for using the ARK AQUATECH website and services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#021B2F]">
      <section className="bg-[#031A2B] px-6 pb-20 pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#54B5FF]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
            Terms & Conditions
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
              1. Acceptance of Terms
            </h2>

            <p className="mt-4">
              By accessing or using the ARK AQUATECH website, you agree to
              comply with these Terms & Conditions. If you do not agree with
              these terms, please do not use the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              2. Website Information
            </h2>

            <p className="mt-4">
              The information provided on this website is intended for general
              informational purposes. Service descriptions, technical
              information, images, and other website content may be updated or
              changed without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              3. Services
            </h2>

            <p className="mt-4">
              ARK AQUATECH provides aquaculture, water treatment, engineering,
              infrastructure, automation, and related services. Specific
              project scope, pricing, timelines, specifications, and
              deliverables may be agreed separately with the client.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              4. Intellectual Property
            </h2>

            <p className="mt-4">
              Unless otherwise stated, website content including text, graphics,
              logos, images, designs, and other materials belongs to or is
              licensed to ARK AQUATECH. Content should not be copied,
              reproduced, modified, or distributed without appropriate
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              5. Third-Party Links
            </h2>

            <p className="mt-4">
              The website may contain links to external websites or services.
              These links are provided for convenience, and ARK AQUATECH does
              not control or guarantee the content, availability, or policies
              of third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              6. Limitation of Liability
            </h2>

            <p className="mt-4">
              ARK AQUATECH makes reasonable efforts to provide accurate
              information but does not guarantee that all website content will
              always be complete, current, or error-free. Use of information
              obtained from the website is at the user's discretion.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              7. Changes to Terms
            </h2>

            <p className="mt-4">
              ARK AQUATECH may modify these Terms & Conditions when necessary.
              Updated terms will be published on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#021B2F]">
              8. Contact
            </h2>

            <p className="mt-4">
              For questions regarding these Terms & Conditions, contact:
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