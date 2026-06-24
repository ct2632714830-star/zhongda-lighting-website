import { FadeIn } from "@/components/Motion";

const roles = [
  "Brand positioning",
  "Project communication",
  "Design direction",
  "Product presentation",
  "Business development",
  "Client trust building",
  "International market expansion"
];

export function FounderRole() {
  return (
    <section className="container-lux py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.32em] text-champagne">The Role Behind Every Project</p>
          <h2 className="mt-5 font-serif text-5xl leading-tight text-ivory md:text-7xl">
            Connecting strategy, design, production, and client needs.
          </h2>
          <p className="mt-8 text-lg leading-8 text-ivory/[0.58]">
            As the founder, my role is to keep the project conversation clear from first idea to final delivery.
          </p>
        </FadeIn>
        <div className="border-t border-white/[0.12]">
          {roles.map((role, index) => (
            <FadeIn key={role} delay={index * 0.04} className="flex items-center justify-between border-b border-white/[0.12] py-6">
              <span className="font-serif text-2xl text-ivory">{role}</span>
              <span className="text-xs text-champagne/70">{String(index + 1).padStart(2, "0")}</span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
