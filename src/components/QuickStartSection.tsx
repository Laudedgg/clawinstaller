"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const tabs = [
  { id: "one-liner", label: "One-liner" },
  { id: "npm", label: "npm" },
  { id: "hackable", label: "Hackable" },
  { id: "macos", label: "macOS" },
];

const commands: Record<string, { comment: string; command: string }> = {
  "one-liner": {
    comment: "# Works everywhere. Installs everything. You're welcome.",
    command: "curl -fsSL https://openclaw.ai/install.sh | bash",
  },
  npm: {
    comment: "# Install via npm globally",
    command: "npm install -g @openclaw/cli",
  },
  hackable: {
    comment: "# Clone and run from source",
    command: "git clone https://github.com/openclaw/openclaw && cd openclaw && npm start",
  },
  macos: {
    comment: "# Install via Homebrew",
    command: "brew install clawinstaller-agent",
  },
};

export function QuickStartSection() {
  const [activeTab, setActiveTab] = useState("one-liner");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(commands[activeTab].command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-primary text-2xl font-bold">❯</span>
          <h2 className="text-2xl md:text-3xl font-bold">Quick Start</h2>
        </div>

        <div className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-card/50">
            <div className="flex items-center gap-4">
              {/* Traffic lights */}
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary/20 text-primary border border-primary/30"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">macOS/Linux</span>
              <span className="text-xs text-primary cursor-pointer hover:underline">change</span>
              <span className="px-2 py-1 text-xs rounded border border-border/50 text-muted-foreground">
                β BETA
              </span>
            </div>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm relative">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-green-400/70 mb-2">{commands[activeTab].comment}</p>
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-foreground">{commands[activeTab].command}</span>
              </div>
            </motion.div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Works on macOS, Windows & Linux. The one-liner installs Node.js and everything else for you.
        </p>
      </div>
    </section>
  );
}
