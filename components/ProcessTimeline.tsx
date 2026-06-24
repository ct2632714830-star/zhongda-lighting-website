import { process } from "@/lib/content";
import { FadeIn } from "@/components/Motion";

export function ProcessTimeline() {
  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
      {process.map(([label, Icon], index) => (
        <FadeIn key={label} delay={index * 0.04} className="group min-h-48 bg-smoke p-7">
          <div className="flex items-start justify-between">
            <Icon className="size-6 text-champagne" />
            <span className="font-serif text-3xl text-ivory/[0.18]">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <p className="mt-12 max-w-xs font-serif text-2xl leading-tight text-ivory">{label}</p>
        </FadeIn>
      ))}
    </div>
  );
}
