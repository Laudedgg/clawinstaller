"use client";

import { motion } from "framer-motion";
import { LobsterMascot } from "./LobsterMascot";
import { ParticleBackground } from "./ParticleBackground";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Theme toggle button (decorative) */}
      <motion.button
        className="absolute top-6 right-6 w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border transition-colors z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      </motion.button>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Mascot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 md:w-40 md:h-40 mb-6"
        >
          <LobsterMascot />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 italic"
          style={{
            fontFamily: "'General Sans', 'Satoshi', sans-serif",
            background: "linear-gradient(135deg, #e55b5b 0%, #ff8a8a 30%, #e55b5b 60%, #c94444 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ClawInstaller
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] text-primary font-semibold mb-6"
        >
          AI AGENT CLAW INSTALLER
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
        >
          Clears your inbox, sends emails, manages your calendar, checks you in for flights.
          All from WhatsApp, Telegram, or any chat app you already use.
        </motion.p>

        {/* Announcement badge */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="group flex items-center gap-3 px-5 py-3 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
          whileHover={{ scale: 1.02 }}
        >
          <span className="px-2.5 py-1 text-xs font-bold rounded-md bg-primary text-primary-foreground">
            NEW
          </span>
          <span className="text-sm text-foreground/80">
            ClawInstaller Agent Partners with VirusTotal for Skill Security
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
        </motion.a>
      </div>
    </section>
  );
}
