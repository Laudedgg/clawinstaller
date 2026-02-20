"use client";

import { motion } from "framer-motion";
import { Home, MessageCircle, Brain, Globe, Terminal, Puzzle } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Runs on Your Machine",
    description: "Mac, Windows, or Linux. Anthropic, OpenAI, or local models. Private by default—your data stays yours.",
  },
  {
    icon: MessageCircle,
    title: "Any Chat App",
    description: "Talk to it on WhatsApp, Telegram, Discord, Slack, Signal, or iMessage. Works in DMs and group chats.",
  },
  {
    icon: Brain,
    title: "Persistent Memory",
    description: "Remembers you and becomes uniquely yours. Your preferences, your context, your AI.",
  },
  {
    icon: Globe,
    title: "Browser Control",
    description: "It can browse the web, fill forms, and extract data from any site.",
  },
  {
    icon: Terminal,
    title: "Full System Access",
    description: "Read and write files, run shell commands, execute scripts. Full access or sandboxed—your choice.",
  },
  {
    icon: Puzzle,
    title: "Skills & Plugins",
    description: "Extend with community skills or build your own. It can even write its own.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center gap-2 mb-10">
          <span className="text-primary text-2xl font-bold">❯</span>
          <h2 className="text-2xl md:text-3xl font-bold">What It Does</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all card-hover"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
