"use client";

import { motion } from "framer-motion";
import { Fish } from "lucide-react";

const fishes = [
  {
    size: 70,
    top: "10%",
    duration: 22,
    delay: 0,
    color: "text-cyan-400/40",
  },

  {
    size: 55,
    top: "25%",
    duration: 18,
    delay: 2,
    color: "text-emerald-400/35",
  },

  {
    size: 85,
    top: "42%",
    duration: 28,
    delay: 1,
    color: "text-sky-400/30",
  },

  {
    size: 60,
    top: "58%",
    duration: 20,
    delay: 4,
    color: "text-cyan-300/35",
  },

  {
    size: 50,
    top: "74%",
    duration: 24,
    delay: 3,
    color: "text-emerald-300/30",
  },

  {
    size: 65,
    top: "88%",
    duration: 30,
    delay: 5,
    color: "text-sky-300/25",
  },
];

export default function FloatingFishes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">

      {/* MAIN FISHES */}

      {fishes.map((fish, index) => (
        <motion.div
          key={index}
          initial={{
            x: -200,
            y: 0,
            rotate: 0,
          }}
          animate={{
            x: "120vw",
            y: [0, -35, 20, -18, 0],
            rotate: [0, 10, -10, 6, 0],
          }}
          transition={{
            duration: fish.duration,
            repeat: Infinity,
            ease: "linear",
            delay: fish.delay,
          }}
          className={`
            absolute
            ${fish.color}
          `}
          style={{
            top: fish.top,
          }}
        >
          <Fish
            size={fish.size}
            strokeWidth={1.2}
            className="
              drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]
            "
          />
        </motion.div>
      ))}

      {/* REVERSE FISHES */}

      {fishes.map((fish, index) => (
        <motion.div
          key={`reverse-${index}`}
          initial={{
            x: "120vw",
            y: 0,
            rotate: 180,
          }}
          animate={{
            x: -250,
            y: [0, 25, -20, 12, 0],
            rotate: [180, 192, 168, 186, 180],
          }}
          transition={{
            duration: fish.duration + 10,
            repeat: Infinity,
            ease: "linear",
            delay: fish.delay + 4,
          }}
          className={`
            absolute
            ${fish.color}
            scale-x-[-1]
          `}
          style={{
            top: `calc(${fish.top} + 5%)`,
          }}
        >
          <Fish
            size={fish.size - 12}
            strokeWidth={1.1}
            className="
              drop-shadow-[0_0_10px_rgba(16,185,129,0.30)]
            "
          />
        </motion.div>
      ))}

      {/* BUBBLES */}

      {[...Array(18)].map((_, index) => (
        <motion.div
          key={`bubble-${index}`}
          initial={{
            y: "100vh",
            opacity: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0, 0.5, 0],
            x: [0, 20, -10, 15, 0],
          }}
          transition={{
            duration: 12 + index,
            repeat: Infinity,
            delay: index * 1.2,
            ease: "linear",
          }}
          className="
            absolute
            bottom-0
            rounded-full
            bg-cyan-300/20
            blur-[1px]
          "
          style={{
            left: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
          }}
        />
      ))}
    </div>
  );
}