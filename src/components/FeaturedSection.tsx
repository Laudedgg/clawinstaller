"use client";

import { motion } from "framer-motion";
import { Apple, Star } from "lucide-react";

const featuredIn = [
  {
    icon: Apple,
    name: "MacStories",
    quote: "ClawInstaller Agent Showed Me What the Future of Personal AI Assistants Looks Like",
    author: "Federico Viticci",
  },
  {
    icon: Star,
    name: "StarryHope",
    quote: "The Lobster Takeover: Why Developers Are Buying Mac Minis to Run Their Own AI Agents",
    author: "Jim Mendenhall",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-primary text-2xl font-bold">❯</span>
          <h2 className="text-2xl md:text-3xl font-bold">Featured In</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredIn.map((item, index) => (
            <motion.a
              key={item.name}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all card-hover text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-lg font-semibold text-muted-foreground">{item.name}</span>
              </div>
              <p className="text-lg italic text-foreground/90 mb-4 leading-relaxed">
                "{item.quote}"
              </p>
              <p className="text-sm text-primary font-medium">{item.author}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
