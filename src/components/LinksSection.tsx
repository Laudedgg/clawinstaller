"use client";

import { motion } from "framer-motion";
import { MessageCircle, Book, Github, Star } from "lucide-react";

const links = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Join the community",
    href: "#",
    color: "text-indigo-400",
  },
  {
    icon: Book,
    title: "Documentation",
    description: "Learn the ropes",
    href: "#",
    color: "text-blue-400",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "View the source",
    href: "#",
    color: "text-foreground",
  },
  {
    icon: Star,
    title: "ClawHub",
    description: "Download skills",
    href: "#",
    color: "text-yellow-400",
  },
];

export function LinksSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all text-center"
            >
              <link.icon className={`w-8 h-8 mx-auto mb-3 ${link.color} group-hover:scale-110 transition-transform`} />
              <h3 className="text-base font-semibold mb-1">{link.title}</h3>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
