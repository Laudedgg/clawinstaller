"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "WhatsApp", icon: "💬" },
  { name: "Telegram", icon: "✈️" },
  { name: "Discord", icon: "🎮" },
  { name: "Slack", icon: "#️⃣" },
  { name: "Signal", icon: "🔒" },
  { name: "iMessage", icon: "💬" },
  { name: "Claude", icon: "🤖" },
  { name: "GPT", icon: "🧠" },
  { name: "Spotify", icon: "🎵" },
  { name: "Hue", icon: "💡" },
  { name: "Obsidian", icon: "📝" },
  { name: "Twitter", icon: "𝕏" },
  { name: "Browser", icon: "🌐" },
  { name: "Gmail", icon: "📧" },
  { name: "GitHub", icon: "🐙" },
];

export function IntegrationsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-primary text-2xl font-bold">❯</span>
          <h2 className="text-2xl md:text-3xl font-bold">Works With Everything</h2>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all cursor-pointer"
            >
              <span>{integration.icon}</span>
              <span className="text-sm font-medium">{integration.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 text-sm">
          <a href="#" className="flex items-center gap-1 text-primary hover:underline">
            View all 50+ integrations <ArrowRight className="w-4 h-4" />
          </a>
          <span className="text-muted-foreground">•</span>
          <a href="#" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            See what people built <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
