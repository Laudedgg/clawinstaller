"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Blog", href: "#" },
  { label: "Showcase", href: "#" },
  { label: "Shoutouts", href: "#" },
  { label: "Integrations", href: "#" },
  { label: "Trust", href: "#" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-6">
            {footerLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4 md:gap-6">
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
                {index < footerLinks.length - 1 && (
                  <span className="text-muted-foreground/30 hidden md:inline">•</span>
                )}
              </span>
            ))}
          </div>

          {/* Credits */}
          <p className="text-sm text-muted-foreground mb-3">
            Built by{" "}
            <a href="#" className="text-primary hover:underline">
              Molty
            </a>
            , a space lobster AI with a{" "}
            <a href="#" className="text-primary hover:underline">
              soul
            </a>
            , by{" "}
            <a href="#" className="text-primary hover:underline">
              Peter Steinberger
            </a>{" "}
            &{" "}
            <a href="#" className="text-primary hover:underline">
              community
            </a>
            .
          </p>

          <p className="text-xs text-muted-foreground/60">
            ClawInstaller Agent. Independent project, not affiliated with Anthropic.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
