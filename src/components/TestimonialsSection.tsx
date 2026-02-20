"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    text: "This is legit the first 'agent' that I have seen that's actually useful. It handles tasks I never thought possible.",
    author: "@AryehDubois",
    initials: "AD",
    color: "bg-blue-500",
  },
  {
    text: "I've been saying for months that even if LLMs stopped improving, we could spend years discovering new transformative uses. ClawInstaller Agent feels like that kind of leap forward.",
    author: "@markjaquith",
    initials: "MJ",
    color: "bg-green-500",
  },
  {
    text: "ClawInstaller Agent is a game changer. The potential for custom extensions is huge, and AI really speeds up the process.",
    author: "@Senator_NFTs",
    initials: "SN",
    color: "bg-purple-500",
  },
  {
    text: "Feels like we're living in the future. The way it handles complex tasks autonomously is incredible.",
    author: "@Philo01",
    initials: "P",
    color: "bg-cyan-500",
  },
  {
    text: "Setup ClawInstaller Agent yesterday. All I have to say is, wow. The fact that it can keep building upon itself just by talking to it is crazy.",
    author: "@jonahships_",
    initials: "JS",
    color: "bg-yellow-500",
  },
  {
    text: "Why OpenClaw is incredible: your context and skills live on YOUR computer, not a walled garden. It's open source with a growing community.",
    author: "@danpeguine",
    initials: "DP",
    color: "bg-pink-500",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[350px] p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-border transition-colors">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
          {testimonial.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground/80 leading-relaxed line-clamp-4">
            "{testimonial.text}"
          </p>
          <p className="mt-3 text-sm font-medium text-primary">
            {testimonial.author}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl font-bold">❯</span>
            <h2 className="text-2xl md:text-3xl font-bold">What People Say</h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-primary text-sm font-medium hover:underline"
          >
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* First row - scrolls left */}
        <div className="flex gap-4 mb-4 animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <TestimonialCard key={`row1-${i}`} testimonial={testimonial} />
          ))}
        </div>

        {/* Second row - scrolls right */}
        <div
          className="flex gap-4 animate-marquee"
          style={{ animationDirection: "reverse", animationDuration: "45s" }}
        >
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, i) => (
            <TestimonialCard key={`row2-${i}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
