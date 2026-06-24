import { capabilities } from "@/lib/content";
import { FadeIn } from "@/components/Motion";

export function CapabilityGrid() {
  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
      {capabilities.map(([label, Icon], index) => (
        <FadeIn key={label} delay={index * 0.03} className="bg-ink p-7 transition hover:bg-white/[0.055]">
          <Icon className="size-6 text-champagne" />
          <p className="mt-7 font-serif text-2xl text-ivory">{label}</p>
        </FadeIn>
      ))}
    </div>
  );
}
