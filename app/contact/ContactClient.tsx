// app/contact/ContactClient.tsx

"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Send,
  Loader2,
  Building2,
} from "lucide-react";

export default function ContactClient() {
  const form = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);

  /* =========================================================
     EMAILJS FORM
  ========================================================= */

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.current || isSending) return;

    try {
      setIsSending(true);

      await emailjs.sendForm(
        "service_60tnen7",
        "template_vx135mi",
        form.current,
        "QFLRLgmnV8AeJqhgu"
      );

      alert("Message Sent Successfully!");

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        "Failed to send your message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
  <main className="relative min-h-screen overflow-hidden bg-[#F7FAFC]">
    {/* BACKGROUND */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#0A6EBD]/10 blur-[140px]" />
      <div className="absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#63C96A]/10 blur-[140px]" />
    </div>

    {/* =====================================================
        HERO
    ===================================================== */}
    <section className="relative px-4 pb-14 pt-36 sm:px-6 sm:pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0A6EBD]/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A6EBD] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#63C96A]" />
            Contact ARK AQUATECH
          </span>

          <h1 className="mt-6 text-[40px] font-black leading-[1.05] tracking-[-0.04em] text-[#021B2F] sm:text-[54px] lg:text-[68px]">
            Start Your Next
            <span className="block bg-gradient-to-r from-[#0A6EBD] to-[#63C96A] bg-clip-text text-transparent">
              Aquaculture Project
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[14px] leading-7 text-slate-600 sm:text-[16px]">
            Connect with our engineering team for advanced aquaculture,
            hatchery, RAS, Biofloc and industrial water management solutions.
          </p>
        </div>
      </div>
    </section>

    {/* =====================================================
        CONTACT + FORM
    ===================================================== */}
    <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-start gap-7 lg:grid-cols-[1.05fr_0.95fr]">
        {/* =================================================
            LEFT
        ================================================= */}
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-7 lg:p-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A6EBD]">
            Contact Information
          </span>

          <h2 className="mt-2 text-[30px] font-black tracking-[-0.03em] text-[#021B2F] sm:text-[36px]">
            Get In Touch
          </h2>

          <p className="mt-3 max-w-xl text-[14px] leading-7 text-slate-500">
            Our team is ready to understand your project requirements and
            recommend the right aquaculture infrastructure solution.
          </p>

          {/* ===============================================
              PHONE + EMAIL
          =============================================== */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {/* PHONE */}
            <div className="rounded-[20px] border border-slate-200 bg-[#F8FBFD] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A6EBD] text-white">
                  <Phone className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Call Us
                  </p>

                  <Link
                    href="tel:+919063289228"
                    className="mt-1.5 block text-[13px] font-bold text-[#021B2F] hover:text-[#0A6EBD]"
                  >
                    +91 90632 89228
                  </Link>

                  <Link
                    href="tel:+917799399555"
                    className="mt-1 block text-[13px] font-bold text-[#021B2F] hover:text-[#0A6EBD]"
                  >
                    +91 77993 99555
                  </Link>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="rounded-[20px] border border-slate-200 bg-[#F8FBFD] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#63C96A] text-white">
                  <Mail className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email Us
                  </p>

                  <Link
                    href="mailto:info@arkaquatech.com"
                    className="mt-1.5 block break-all text-[13px] font-bold text-[#021B2F] hover:text-[#0A6EBD]"
                  >
                    info@arkaquatech.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ===============================================
              LOCATIONS
          =============================================== */}
          <div className="mt-7">
            <div className="mb-4 flex items-center gap-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Our Offices
              </p>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* MAIN OFFICE */}
              <div className="group rounded-[22px] border border-[#0A6EBD]/10 bg-gradient-to-br from-[#F5FAFF] to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A6EBD]/10 text-[#0A6EBD]">
                  <MapPin className="h-5 w-5" />
                </div>

                <span className="mt-4 inline-flex rounded-full bg-[#0A6EBD]/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-[#0A6EBD]">
                  Main Office
                </span>

                <h3 className="mt-3 text-[17px] font-black text-[#021B2F]">
                  Mangalagiri, Guntur
                </h3>

                <address className="mt-2 not-italic text-[12px] leading-[1.8] text-slate-500">
                  Plot No. 12, Autonagar Last Line,
                  <br />
                  Near APIIC, Mangalagiri,
                  <br />
                  Guntur – 522503,
                  <br />
                  Andhra Pradesh
                </address>
              </div>

              {/* BRANCH */}
              <div className="group rounded-[22px] border border-[#63C96A]/15 bg-gradient-to-br from-[#F5FFF6] to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#63C96A]/10 text-[#389D42]">
                  <Building2 className="h-5 w-5" />
                </div>

                <span className="mt-4 inline-flex rounded-full bg-[#63C96A]/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.15em] text-[#389D42]">
                  Branch Office
                </span>

                <h3 className="mt-3 text-[17px] font-black text-[#021B2F]">
                  Kukatpally, Hyderabad
                </h3>

                <address className="mt-2 not-italic text-[12px] leading-[1.8] text-slate-500">
                  12th Floor, Manjeera Trinity,
                  <br />
                  Corporate E-Seva Lane,
                  <br />
                  JNTU–Hitech City Road,
                  <br />
                  Near Manjeera Mall, KPHB Phase 3,
                  <br />
                  Kukatpally, Hyderabad – 500072,
                  <br />
                  Telangana
                </address>
              </div>
            </div>
          </div>

          {/* ===============================================
              ACTIONS
          =============================================== */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://wa.me/919063289228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Link>

            <Link
              href="tel:+919063289228"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#021B2F] px-5 py-3.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call Our Team
            </Link>
          </div>
        </div>

        {/* =================================================
            FORM
        ================================================= */}
        <div className="rounded-[28px] bg-[#021B2F] p-5 shadow-[0_25px_70px_rgba(2,27,47,0.18)] sm:p-7 lg:p-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#63C96A]">
            Project Enquiry
          </span>

          <h2 className="mt-2 text-[30px] font-black tracking-[-0.03em] text-white sm:text-[36px]">
            Tell Us About
            <span className="block text-[#63C96A]">
              Your Project
            </span>
          </h2>

          <p className="mt-3 text-[13px] leading-6 text-slate-300">
            Complete the form and our aquaculture engineering team will
            contact you regarding your requirements.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-7 space-y-4"
          >
            {/* NAME */}
            <div>
              <label
                htmlFor="user_name"
                className="mb-2 block text-[12px] font-semibold text-white/80"
              >
                Your Name
              </label>

              <input
                id="user_name"
                name="user_name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-[#63C96A]/60 focus:bg-white/10"
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="user_email"
                  className="mb-2 block text-[12px] font-semibold text-white/80"
                >
                  Email
                </label>

                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-[#63C96A]/60 focus:bg-white/10"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[12px] font-semibold text-white/80"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-[#63C96A]/60 focus:bg-white/10"
                />
              </div>
            </div>

            {/* PROJECT TYPE */}
            <div>
              <label
                htmlFor="project_type"
                className="mb-2 block text-[12px] font-semibold text-white/80"
              >
                Project Type
              </label>

              <select
                id="project_type"
                name="project_type"
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-[#0B3044] px-4 py-3.5 text-[13px] text-white outline-none focus:border-[#63C96A]/60"
              >
                <option value="" disabled>
                  Select your requirement
                </option>

                <option value="Advanced Aquaculture Project">
                  Advanced Aquaculture Project
                </option>

                <option value="Industrial Water Management">
                  Industrial Water Management
                </option>

                <option value="Smart Hatchery Engineering">
                  Smart Hatchery Engineering
                </option>

                <option value="Aquaculture Equipment">
                  Aquaculture Equipment
                </option>

                <option value="Nutrition & Farm Essentials">
                  Nutrition & Farm Essentials
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-[12px] font-semibold text-white/80"
              >
                Project Details
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your farm, project location and requirements..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.07] px-4 py-3.5 text-[13px] leading-6 text-white outline-none placeholder:text-white/30 focus:border-[#63C96A]/60 focus:bg-white/10"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSending}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#63C96A] px-6 py-4 text-[13px] font-black text-[#021B2F] transition-all hover:-translate-y-0.5 hover:bg-[#72D879] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit Project Enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>

          <div className="mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3">
            <Mail className="h-4 w-4 shrink-0 text-[#63C96A]" />

            <p className="text-[11px] leading-5 text-white/50">
              Or email directly at{" "}
              <Link
                href="mailto:info@arkaquatech.com"
                className="font-bold text-white"
              >
                info@arkaquatech.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}
    <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0A6EBD] to-[#063A5A] px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9FE7A4]">
            ARK AQUATECH
          </p>

          <h3 className="mt-2 text-[22px] font-black text-white sm:text-[26px]">
            Engineering Smarter Aquaculture Systems
          </h3>

          <p className="mt-2 max-w-2xl text-[13px] leading-6 text-white/70">
            From project planning to installation and operational support,
            our team provides end-to-end aquaculture solutions.
          </p>
        </div>

        <Link
          href="tel:+919063289228"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-[13px] font-bold text-[#021B2F]"
        >
          <Phone className="h-4 w-4" />
          +91 90632 89228
        </Link>
      </div>
    </section>

    {/* WHATSAPP */}
    <Link
      href="https://wa.me/919063289228"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact ARK AQUATECH on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  </main>
)
}