import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "ClawInstaller Agent — Personal AI Assistant",
  description: "ClawInstaller Agent — The AI that actually does things. Your personal assistant on any platform.",
  icons: {
    icon: "https://ext.same-assets.com/783531653/648530877.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
