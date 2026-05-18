// app/contact/ContactClient.tsx

"use client";

import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Clock3,
} from "lucide-react";

export default function ContactClient() {
  return (
    <main className="relative overflow-hidden bg-white min-h-screen">
      {/* BACKGROUND */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
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
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,110,189,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(10,110,189,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO */}

      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
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
                uppercase
                tracking-[0.22em]
                font-semibold
                text-[#021B2F]
              "
            >
              Contact Us
            </span>
          </div>

          <h1
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.92]
              tracking-[-0.05em]
              text-[#021B2F]
              sm:text-[58px]
              lg:text-[86px]
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

          <p
            className="
              mt-10
              mx-auto
              max-w-4xl
              text-[16px]
              leading-[2]
              text-[#4B5563]
              sm:text-[18px]
            "
          >
            Contact ARK AQUATECH for advanced
            aquaculture solutions including
            Biofloc technology,
            RAS systems,
            marine engineering,
            industrial water treatment,
            and sustainable fish farming systems.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2">
          {/* LEFT */}

          <div
            className="
              rounded-[40px]
              border
              border-[#E5E7EB]
              bg-white
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              sm:p-10
            "
          >
            <h2
              className="
                text-[40px]
                font-black
                text-[#021B2F]
              "
            >
              Get In Touch
            </h2>

            <div className="mt-12 space-y-6">
              <div
                className="
                  flex
                  gap-5
                  rounded-[28px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
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
                  <h3 className="text-xl font-bold text-[#021B2F]">
                    Phone Number
                  </h3>

                  <p className="mt-2 text-[#6B7280]">
                    +91 9063289228
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  gap-5
                  rounded-[28px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
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

                <div>
                  <h3 className="text-xl font-bold text-[#021B2F]">
                    Email Address
                  </h3>

                  <p className="mt-2 text-[#6B7280]">
                    info@arkaquatech.com
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  gap-5
                  rounded-[28px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-6
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
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
                  <h3 className="text-xl font-bold text-[#021B2F]">
                    Office Address
                  </h3>

                  <p className="mt-2 text-[#6B7280]">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="https://wa.me/919063289228"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#25D366]
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-white
                "
              >
                <MessageCircle className="h-5 w-5" />

                WhatsApp Now
              </Link>

              <Link
                href="tel:+919063289228"
                className="
                  inline-flex
                  items-center
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
                "
              >
                Call Now

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* FORM */}

          <div
            className="
              rounded-[40px]
              border
              border-[#E5E7EB]
              bg-white
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              sm:p-10
            "
          >
            <h2
              className="
                text-[40px]
                font-black
                text-[#021B2F]
              "
            >
              Send Message
            </h2>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5E7EB]
                  bg-[#F8FAFC]
                  px-6
                  py-4
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5E7EB]
                  bg-[#F8FAFC]
                  px-6
                  py-4
                  outline-none
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5E7EB]
                  bg-[#F8FAFC]
                  px-6
                  py-4
                  outline-none
                "
              />

              <textarea
                rows={6}
                placeholder="Write Your Message..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5E7EB]
                  bg-[#F8FAFC]
                  px-6
                  py-4
                  outline-none
                "
              />

              <button
                type="submit"
                className="
                  inline-flex
                  items-center
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
                "
              >
                Send Message

                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}

      <Link
        href="https://wa.me/919063289228"
        target="_blank"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_15px_40px_rgba(37,211,102,0.45)]
        "
      >
        <MessageCircle className="h-8 w-8" />
      </Link>
    </main>
  );
}