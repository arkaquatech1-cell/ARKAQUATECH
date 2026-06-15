"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";

export default function LeadGenerationPopup() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const message = `
*New Consultation Request*

👤 Name: ${formData.name}
🏢 Company: ${formData.company}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

📝 Requirement:
${formData.message}
`;

    window.open(
      `https://api.whatsapp.com/send?phone=919063289228&text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

    setOpen(false);

    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <>
      {/* OVERLAY */}

      <div
        className="
          fixed
          inset-0
          z-[9998]
          bg-black/60
          backdrop-blur-sm
        "
      />

      {/* POPUP */}

      <div
        className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          overflow-y-auto
          p-4
        "
      >
        <div
          className="
            relative
            w-full
            max-w-xl
            overflow-hidden
            rounded-[28px]
            bg-white
            shadow-[0_25px_80px_rgba(0,0,0,0.35)]
          "
        >
          {/* CLOSE BUTTON */}

          <button
            onClick={() => setOpen(false)}
            className="
              absolute
              right-4
              top-4
              z-50
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#F3F4F6]
              text-[#021526]
              shadow-md
              transition-all
              duration-300
              hover:rotate-90
            "
          >
            <X className="h-5 w-5" />
          </button>

          {/* CONTENT */}

          <div
            className="
              px-5
              py-8
              sm:px-10
              sm:py-10
            "
          >
            {/* TITLE */}

            <div className="text-center">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#0A6EBD]/10
                  px-4
                  py-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#0A6EBD]
                "
              >
                Free Consultation
              </span>

              <h2
                className="
                  mt-5
                  text-[34px]
                  font-black
                  leading-[1]
                  tracking-[-0.05em]
                  text-[#021526]
                  sm:text-[48px]
                "
              >
                Let’s Discuss
                <span className="block text-[#0A6EBD]">
                  Your Project
                </span>
              </h2>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-[14px]
                  leading-[1.8]
                  text-[#6B7280]
                  sm:text-[15px]
                "
              >
                Fill the form and our team will
                contact you quickly regarding your
                aquaculture requirements.
              </p>
            </div>

            {/* FORM */}

          <form onSubmit={handleSubmit} className="mt-8">
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Your Name"
      required
      className="
        h-12
        w-full
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-[#F8FAFC]
        px-4
        text-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#0A6EBD]
        focus:bg-white
      "
    />

    <input
      type="text"
      name="company"
      value={formData.company}
      onChange={handleChange}
      placeholder="Company Name"
      className="
        h-12
        w-full
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-[#F8FAFC]
        px-4
        text-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#0A6EBD]
        focus:bg-white
      "
    />

    <input
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Phone Number"
      required
      className="
        h-12
        w-full
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-[#F8FAFC]
        px-4
        text-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#0A6EBD]
        focus:bg-white
      "
    />

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email Address"
      required
      className="
        h-12
        w-full
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-[#F8FAFC]
        px-4
        text-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#0A6EBD]
        focus:bg-white
      "
    />
  </div>

  <div className="mt-4">
    <textarea
      rows={4}
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Requirement Message"
      required
      className="
        w-full
        rounded-2xl
        border
        border-[#E5E7EB]
        bg-[#F8FAFC]
        px-4
        py-4
        text-sm
        outline-none
        transition-all
        duration-300
        focus:border-[#0A6EBD]
        focus:bg-white
      "
    />
  </div>

  <div className="mt-5">
    <button
      type="submit"
      className="
        group
        inline-flex
        h-12
        w-full
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-gradient-to-r
        from-[#0A6EBD]
        to-[#15176B]
        px-6
        text-sm
        font-semibold
        text-white
        shadow-[0_15px_35px_rgba(10,110,189,0.25)]
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      Submit Inquiry

      <ArrowRight
        className="
          h-4
          w-4
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </button>
  </div>
</form>
          </div>
        </div>
      </div>
    </>
  );
}