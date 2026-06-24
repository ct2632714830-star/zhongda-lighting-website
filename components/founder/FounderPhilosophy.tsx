import { philosophy } from "@/lib/content";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";

export function FounderPhilosophy() {
  return (
    <section className="bg-smoke py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading eyebrow="Philosophy" title="A quiet discipline for creating atmosphere." />
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05} className="min-h-72 bg-ink p-7 transition hover:bg-white/[0.055] hover:shadow-glow">
              <p className="font-serif text-3xl text-ivory">{item.title}</p>
              <p className="mt-8 text-sm leading-7 text-ivory/[0.58]">{item.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
