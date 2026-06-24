"use client";

import { Gem, Hotel, Landmark, Lightbulb, PenTool, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

const icons = [Landmark, Gem, PenTool, Sparkles, Hotel, Lightbulb, ShieldCheck, Wrench];

export function Capabilities() {
  const { t } = useI18n();

  return (
    <section id="capabilities" className="bg-ivory py-24 text-ink md:py-36">
      <div className="container-lux">
        <SectionHeading tone="light" eyebrow={t.capabilities.eyebrow} title={t.capabilities.title} text={t.capabilities.intro} />
        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.capabilities.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={item} delay={index * 0.04} className="group min-h-56 bg-ivory p-7 transition hover:bg-[#eee7dc]">
                <Icon className="size-6 text-champagne transition group-hover:scale-110" />
                <p className="mt-16 text-xs uppercase tracking-[0.24em] text-espresso/40">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">{item}</h3>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
