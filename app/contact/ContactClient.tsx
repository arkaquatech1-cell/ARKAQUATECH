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
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            left-[-180px]
            top-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#0A6EBD]/10
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-180px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#63C96A]/10
            blur-[140px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,110,189,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="px-4 pb-20 pt-40 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#0A6EBD]/10
              bg-[#F4F8FF]
              px-5
              py-2.5
            "
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#63C96A]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#021B2F]
              "
            >
              Contact Us
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-[#021B2F]
              sm:text-[58px]
              lg:text-[82px]
            "
          >
            Let's Build

            <span
              className="
                mt-3
                block
                bg-gradient-to-r
                from-[#63C96A]
                via-[#0A6EBD]
                to-[#15176B]
                bg-clip-text
                text-transparent
              "
            >
              Smart Aquaculture
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-9
              max-w-4xl
              text-[15px]
              leading-[1.9]
              text-[#4B5563]
              sm:text-[17px]
            "
          >
            Contact ARK AQUATECH for advanced aquaculture
            engineering, Biofloc systems, RAS solutions, hatchery
            infrastructure, industrial water management and sustainable
            fish and shrimp farming solutions.
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-8
            lg:grid-cols-2
            lg:gap-10
          "
        >
          {/* =================================================
              LEFT - CONTACT INFORMATION
          ================================================= */}

          <div
            className="
              rounded-[32px]
              border
              border-[#E5E7EB]
              bg-white
              p-6
              shadow-[0_20px_80px_rgba(0,0,0,0.07)]
              sm:rounded-[40px]
              sm:p-10
            "
          >
            {/* HEADER */}

            <div>
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#0A6EBD]
                "
              >
                Contact Information
              </span>

              <h2
                className="
                  mt-3
                  text-[32px]
                  font-black
                  tracking-[-0.03em]
                  text-[#021B2F]
                  sm:text-[40px]
                "
              >
                Get In Touch
              </h2>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-[14px]
                  leading-7
                  text-[#6B7280]
                  sm:text-[15px]
                "
              >
                Connect with our team to discuss your aquaculture,
                water management or commercial farming requirements.
              </p>
            </div>

            {/* ===============================================
                CONTACT CARDS
            =============================================== */}

            <div className="mt-10 space-y-5">
              {/* PHONE */}

              <div
                className="
                  group
                  flex
                  gap-4
                  rounded-[26px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0A6EBD]/20
                  hover:shadow-[0_15px_40px_rgba(10,110,189,0.10)]
                  sm:gap-5
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#0A6EBD]
                    to-[#15176B]
                  "
                >
                  <Phone className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#021B2F]
                      sm:text-xl
                    "
                  >
                    Phone Numbers
                  </h3>

                  <div className="mt-2 flex flex-col gap-1">
                    <Link
                      href="tel:+919063289228"
                      className="
                        text-[14px]
                        font-medium
                        text-[#6B7280]
                        transition-colors
                        hover:text-[#0A6EBD]
                        sm:text-[15px]
                      "
                    >
                      +91 90632 89228
                    </Link>

                    <Link
                      href="tel:+917799399555"
                      className="
                        text-[14px]
                        font-medium
                        text-[#6B7280]
                        transition-colors
                        hover:text-[#0A6EBD]
                        sm:text-[15px]
                      "
                    >
                      +91 77993 99555
                    </Link>
                  </div>
                </div>
              </div>

              {/* EMAIL */}

              <div
                className="
                  group
                  flex
                  gap-4
                  rounded-[26px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#63C96A]/30
                  hover:shadow-[0_15px_40px_rgba(99,201,106,0.10)]
                  sm:gap-5
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#63C96A]
                    to-[#0A6EBD]
                  "
                >
                  <Mail className="h-6 w-6 text-white" />
                </div>

                <div className="min-w-0">
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#021B2F]
                      sm:text-xl
                    "
                  >
                    Email Address
                  </h3>

                  <Link
                    href="mailto:info@arkaquatech.com"
                    className="
                      mt-2
                      block
                      break-all
                      text-[14px]
                      font-medium
                      text-[#6B7280]
                      transition-colors
                      hover:text-[#0A6EBD]
                      sm:text-[15px]
                    "
                  >
                    info@arkaquatech.com
                  </Link>
                </div>
              </div>

              {/* ===============================================
                  MAIN OFFICE
              =============================================== */}

              <div
                className="
                  group
                  flex
                  gap-4
                  rounded-[26px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#0A6EBD]/20
                  hover:shadow-[0_15px_40px_rgba(10,110,189,0.10)]
                  sm:gap-5
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#15176B]
                    to-[#0A6EBD]
                  "
                >
                  <MapPin className="h-6 w-6 text-white" />
                </div>

                <div>
                  <div
                    className="
                      mb-2
                      inline-flex
                      rounded-full
                      bg-[#EAF5FF]
                      px-3
                      py-1
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#0A6EBD]
                      "
                    >
                      Main Office
                    </span>
                  </div>

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#021B2F]
                      sm:text-xl
                    "
                  >
                    Mangalagiri, Guntur
                  </h3>

                  <address
                    className="
                      mt-3
                      not-italic
                      text-[14px]
                      leading-7
                      text-[#6B7280]
                      sm:text-[15px]
                    "
                  >
                    Plot No. 12,
                    <br />
                    Autonagar Last Line,
                    <br />
                    Near APIIC,
                    <br />
                    Mangalagiri,
                    <br />
                    Guntur – 522503,
                    <br />
                    Andhra Pradesh
                  </address>
                </div>
              </div>

              {/* ===============================================
                  BRANCH OFFICE
              =============================================== */}

              <div
                className="
                  group
                  flex
                  gap-4
                  rounded-[26px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#63C96A]/30
                  hover:shadow-[0_15px_40px_rgba(99,201,106,0.10)]
                  sm:gap-5
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#63C96A]
                    to-[#0A6EBD]
                  "
                >
                  <Building2 className="h-6 w-6 text-white" />
                </div>

                <div>
                  <div
                    className="
                      mb-2
                      inline-flex
                      rounded-full
                      bg-[#F0FFF2]
                      px-3
                      py-1
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#389D42]
                      "
                    >
                      Branch Office
                    </span>
                  </div>

                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[#021B2F]
                      sm:text-xl
                    "
                  >
                    Kukatpally, Hyderabad
                  </h3>

                  <address
                    className="
                      mt-3
                      not-italic
                      text-[14px]
                      leading-7
                      text-[#6B7280]
                      sm:text-[15px]
                    "
                  >
                    12th Floor,
                    <br />
                    Manjeera Trinity,
                    <br />
                    Corporate E-Seva Lane,
                    <br />
                    JNTU–Hitech City Road,
                    <br />
                    Near Manjeera Mall,
                    <br />
                    KPHB Phase 3,
                    <br />
                    Kukatpally,
                    <br />
                    Hyderabad – 500072,
                    <br />
                    Telangana
                  </address>
                </div>
              </div>
            </div>

            {/* ===============================================
                CONTACT BUTTONS
            =============================================== */}

            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >
              {/* WHATSAPP */}

              <Link
                href="https://wa.me/919063289228"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#25D366]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(37,211,102,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(37,211,102,0.30)]
                "
              >
                <MessageCircle className="h-5 w-5" />

                WhatsApp Now
              </Link>

              {/* CALL */}

              <Link
                href="tel:+919063289228"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#0A6EBD]
                  to-[#15176B]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(10,110,189,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Call Now

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT - CONTACT FORM
          ================================================= */}

          <div
            className="
              h-fit
              rounded-[32px]
              border
              border-[#E5E7EB]
              bg-white
              p-6
              shadow-[0_20px_80px_rgba(0,0,0,0.07)]
              sm:rounded-[40px]
              sm:p-10
            "
          >
            {/* FORM HEADER */}

            <div>
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#0A6EBD]
                "
              >
                Send An Enquiry
              </span>

              <h2
                className="
                  mt-3
                  text-[32px]
                  font-black
                  tracking-[-0.03em]
                  text-[#021B2F]
                  sm:text-[40px]
                "
              >
                Send Message
              </h2>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-7
                  text-[#6B7280]
                  sm:text-[15px]
                "
              >
                Tell us about your project requirements and our team
                will get in touch with you.
              </p>
            </div>

            {/* ===============================================
                FORM
            =============================================== */}

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-9 space-y-5"
            >
              {/* NAME */}

              <div>
                <label
                  htmlFor="user_name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-[#021B2F]
                  "
                >
                  Your Name
                </label>

                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-[#F8FAFC]
                    px-5
                    py-4
                    text-[14px]
                    text-[#021B2F]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#0A6EBD]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#0A6EBD]/5
                  "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="user_email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-[#021B2F]
                  "
                >
                  Email Address
                </label>

                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-[#F8FAFC]
                    px-5
                    py-4
                    text-[14px]
                    text-[#021B2F]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#0A6EBD]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#0A6EBD]/5
                  "
                />
              </div>

              {/* PHONE */}

              <div>
                <label
                  htmlFor="phone"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-[#021B2F]
                  "
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-[#F8FAFC]
                    px-5
                    py-4
                    text-[14px]
                    text-[#021B2F]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#0A6EBD]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#0A6EBD]/5
                  "
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-[#021B2F]
                  "
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  name="message"
                  placeholder="Tell us about your project requirements..."
                  required
                  className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-[#E5E7EB]
                    bg-[#F8FAFC]
                    px-5
                    py-4
                    text-[14px]
                    text-[#021B2F]
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-slate-400
                    focus:border-[#0A6EBD]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#0A6EBD]/5
                  "
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={isSending}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#0A6EBD]
                  to-[#15176B]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_15px_35px_rgba(10,110,189,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_45px_rgba(10,110,189,0.30)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                "
              >
                {isSending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />

                    Send Message

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </>
                )}
              </button>
            </form>

            {/* EMAIL INFO */}

            <div
              className="
                mt-7
                rounded-2xl
                border
                border-[#0A6EBD]/10
                bg-[#F4F8FF]
                px-5
                py-4
              "
            >
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#0A6EBD]" />

                <p className="text-xs leading-6 text-[#6B7280]">
                  For direct enquiries, email us at{" "}
                  <Link
                    href="mailto:info@arkaquatech.com"
                    className="font-bold text-[#0A6EBD]"
                  >
                    info@arkaquatech.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK CONTACT STRIP
      ===================================================== */}

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[32px]
            bg-[#021B2F]
            px-6
            py-9
            sm:px-10
            lg:flex
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#63C96A]
              "
            >
              ARK AQUATECH
            </span>

            <h3
              className="
                mt-2
                text-xl
                font-black
                text-white
                sm:text-2xl
              "
            >
              Have an Aquaculture Project in Mind?
            </h3>

            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-7
                text-slate-300
              "
            >
              Speak with our team about engineering, infrastructure,
              water management and commercial aquaculture solutions.
            </p>
          </div>

          <div
            className="
              mt-6
              flex
              flex-col
              gap-3
              sm:flex-row
              lg:mt-0
            "
          >
            <Link
              href="tel:+919063289228"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3.5
                text-sm
                font-bold
                text-[#021B2F]
              "
            >
              <Phone className="h-4 w-4" />

              Call Us
            </Link>

            <Link
              href="mailto:info@arkaquatech.com"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
              "
            >
              <Mail className="h-4 w-4" />

              Email Us
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <Link
        href="https://wa.me/919063289228"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact ARK AQUATECH on WhatsApp"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_15px_40px_rgba(37,211,102,0.45)]
          transition-all
          duration-300
          hover:scale-110
          sm:h-16
          sm:w-16
        "
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />
      </Link>
    </main>
  );
}