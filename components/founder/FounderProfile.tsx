import { FadeIn } from "@/components/Motion";

export function FounderProfile() {
  return (
    <section className="container-lux py-24 md:py-32">
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.32em] text-champagne">About the Founder</p>
          <h2 className="mt-4 font-serif text-5xl text-ivory md:text-6xl">A strategic eye for projects, details, and global presentation.</h2>
        </FadeIn>
        <FadeIn className="space-y-6 text-lg leading-9 text-ivory/[0.62]">
          <p>
            As Founder and Strategic Director of ZD Bespoke Lighting, the role is centered on high-end bespoke lighting and international project development.
          </p>
          <p>
            The work spans brand positioning, project strategy, product presentation, client communication, and global market expansion, with a belief that Chinese manufacturing capability can speak through an international design language.
          </p>
          <p>
            The long-term commitment is to help hotels, villas, designers, developers, and architectural projects achieve distinctive lighting solutions with clarity, discipline, and atmosphere.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
