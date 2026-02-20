import { HeroSection } from "@/components/HeroSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { QuickStartSection } from "@/components/QuickStartSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { FeaturedSection } from "@/components/FeaturedSection";
import { LinksSection } from "@/components/LinksSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <TestimonialsSection />
      <QuickStartSection />
      <FeaturesSection />
      <IntegrationsSection />
      <FeaturedSection />
      <LinksSection />
      <NewsletterSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
