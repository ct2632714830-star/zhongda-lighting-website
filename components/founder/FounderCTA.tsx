import { LuxuryButton } from "@/components/LuxuryButton";
import { FadeIn } from "@/components/Motion";

export function FounderCTA() {
  return (
    <section className="bg-ivory py-24 text-ink md:py-32">
      <div className="container-lux text-center">
        <FadeIn>
          <blockquote className="mx-auto max-w-5xl font-serif text-5xl leading-tight md:text-8xl">
            “Light is not decoration. It is the atmosphere that gives space its soul.”
          </blockquote>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-espresso/60">Founder, ZD Bespoke Lighting</p>
        </FadeIn>
        <FadeIn className="mx-auto mt-24 max-w-3xl">
          <h2 className="font-serif text-5xl leading-tight md:text-7xl">Let’s Create Lighting That Belongs to Your Space.</h2>
          <p className="mt-6 text-lg leading-8 text-ink/[0.62]">
            For hotels, villas, commercial spaces, and architectural projects, we welcome serious project conversations from designers, developers, and global partners.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <LuxuryButton href="/contact" tone="light">Contact the Founder</LuxuryButton>
            <LuxuryButton href="/contact" variant="ghost" tone="light">Send Project Inquiry</LuxuryButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
