import { AboutSection } from "@/components/zd-home/AboutSection";
import { BespokeProcess } from "@/components/zd-home/BespokeProcess";
import { CapabilityCards } from "@/components/zd-home/CapabilityCards";
import { ContactForm, WhatsAppFloating } from "@/components/zd-home/ContactForm";
import { FounderSection } from "@/components/zd-home/FounderSection";
import { Hero } from "@/components/zd-home/Hero";
import { LocationSection } from "@/components/zd-home/LocationSection";
import { MaterialSection } from "@/components/zd-home/MaterialSection";
import { ProjectShowcase } from "@/components/zd-home/ProjectShowcase";
import { TrustedBrandsSection } from "@/components/zd-home/TrustedBrandsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CapabilityCards />
      <ProjectShowcase />
      <BespokeProcess />
      <MaterialSection />
      <AboutSection />
      <FounderSection />
      <LocationSection />
      <TrustedBrandsSection />
      <ContactForm />
      <WhatsAppFloating />
    </main>
  );
}
