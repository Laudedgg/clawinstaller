"use client";

import { motion } from "framer-motion";

export function LobsterMascot({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full animate-glow"
      >
        {/* Body */}
        <ellipse cx="100" cy="110" rx="55" ry="50" fill="#e55b5b" />

        {/* Antennae */}
        <motion.path
          d="M85 65 Q80 40 75 30"
          stroke="#e55b5b"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          style={{ transformOrigin: "85px 65px" }}
        />
        <motion.path
          d="M115 65 Q120 40 125 30"
          stroke="#e55b5b"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          style={{ transformOrigin: "115px 65px" }}
        />

        {/* Antenna tips */}
        <circle cx="75" cy="28" r="5" fill="#e55b5b" />
        <circle cx="125" cy="28" r="5" fill="#e55b5b" />

        {/* Left Claw */}
        <motion.g
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          style={{ transformOrigin: "55px 110px" }}
        >
          <ellipse cx="40" cy="110" rx="18" ry="15" fill="#e55b5b" />
          <ellipse cx="30" cy="105" rx="8" ry="6" fill="#c94444" />
        </motion.g>

        {/* Right Claw */}
        <motion.g
          animate={{ rotate: [8, -8, 8] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          style={{ transformOrigin: "145px 110px" }}
        >
          <ellipse cx="160" cy="110" rx="18" ry="15" fill="#e55b5b" />
          <ellipse cx="170" cy="105" rx="8" ry="6" fill="#c94444" />
        </motion.g>

        {/* Legs */}
        <rect x="80" y="155" width="8" height="20" rx="4" fill="#e55b5b" />
        <rect x="95" y="155" width="8" height="22" rx="4" fill="#e55b5b" />
        <rect x="110" y="155" width="8" height="20" rx="4" fill="#e55b5b" />

        {/* Eyes */}
        <circle cx="82" cy="100" r="10" fill="#1a1a2e" />
        <circle cx="118" cy="100" r="10" fill="#1a1a2e" />

        {/* Eye highlights */}
        <motion.circle
          cx="85"
          cy="97"
          r="4"
          fill="#4ecdc4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.circle
          cx="121"
          cy="97"
          r="4"
          fill="#4ecdc4"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      </svg>
    </motion.div>
  );
}
