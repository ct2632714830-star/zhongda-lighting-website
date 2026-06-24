import { FadeIn } from "@/components/Motion";

export function FounderStatement() {
  return (
    <section className="border-y border-white/10 bg-ivory py-24 text-ink md:py-32">
      <div className="container-lux grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.32em] text-espresso/60">Founder’s Statement</p>
        </FadeIn>
        <FadeIn className="space-y-7 font-serif text-3xl leading-[1.18] md:text-5xl">
          <p>I believe lighting should never exist as an isolated object. It should belong to the architecture, respond to the atmosphere, and elevate the emotional experience of a space.</p>
          <p className="text-ink/70">At ZD Bespoke Lighting, our work is not simply about manufacturing decorative lights. It is about understanding each project, each material, each proportion, and each detail behind the client’s vision.</p>
          <p className="text-ink/70">From luxury hotels and private villas to commercial landmarks, we aim to create lighting pieces that are quiet, powerful, and enduring.</p>
        </FadeIn>
      </div>
    </section>
  );
}
