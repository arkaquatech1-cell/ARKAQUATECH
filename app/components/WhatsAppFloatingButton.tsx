"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

import {
  MessageCircle,
  Fish,
} from "lucide-react";

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[120]">

      {/* WATER GLOW */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-400/30
          blur-2xl
        "
      />

      {/* FLOATING FISH */}

      <motion.div
        animate={{
          x: [0, 12, -8, 0],
          y: [0, -10, 6, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          absolute
          -left-5
          -top-5
          text-cyan-300/80
        "
      >
        <Fish className="h-7 w-7" />
      </motion.div>

      {/* WHATSAPP BUTTON */}

      <motion.div
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <Link
          href="https://wa.me/919063289228"
          target="_blank"
          className="
            group
            relative
            flex
            h-[72px]
            w-[72px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/20
            bg-gradient-to-br
            from-cyan-400
            via-[#15176B]
            to-emerald-400
            shadow-[0_15px_45px_rgba(34,211,238,0.35)]
            backdrop-blur-xl
          "
        >
          {/* WATER FLOW */}

          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              opacity-30
            "
            style={{
              background:
                "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.5) 50%, transparent 80%)",
            }}
          />

          {/* BUBBLES */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              absolute
              left-3
              top-3
              h-2
              w-2
              rounded-full
              bg-white/40
            "
          />

          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              right-4
              bottom-4
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-100/40
            "
          />

          {/* ICON */}

         <FaWhatsapp
  className="
    relative
    z-10
    h-8
    w-8
    text-white
  "

            strokeWidth={2.4}
          />
        </Link>
      </motion.div>

      {/* ONLINE TEXT */}

      
    </div>
  );
}