import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { home } from "@/data/home";

const statements = [
  "We are not a catalogue lighting supplier. We work as a bespoke lighting partner for architecture, hospitality, private residences, and luxury commercial interiors.",
  "Our work sits between design language and manufacturing discipline: concept interpretation, engineering drawings, material selection, sample confirmation, production control, inspection, packing, and project support.",
  "For international projects, we focus on calm communication, clear detail control, and lighting pieces that belong naturally to the space instead of overwhelming it.",
  "ZD Bespoke Lighting is built for designers, developers, procurement teams, and owners who need project confidence as much as visual beauty."
];

export default function AboutPage() {
  return (
    <main className="bg-ink pt-28">
      <section className="container-lux py-20 md:py-32">
        <SectionHeading
          eyebrow="About"
          title="A high-end bespoke lighting studio with manufacturing depth."
          text={home.about.body}
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {statements.map((item, index) => (
            <FadeIn key={item} delay={index * 0.05} className="border-t border-white/[0.12] pt-8 text-lg leading-9 text-ivory/[0.62]">
              {item}
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
