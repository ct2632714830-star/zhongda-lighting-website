"use client";

import { Award } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function Awards() {
  const { t } = useI18n();

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="container-lux">
        <SectionHeading eyebrow={t.awards.eyebrow} title={t.awards.title} />
        <div className="mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {t.awards.items.map((item, index) => (
            <FadeIn key={item} delay={index * 0.04} className="group min-h-44 bg-smoke p-7 transition hover:bg-[#201d1a]">
              <Award className="size-5 text-champagne/80" />
              <p className="mt-10 text-xs uppercase tracking-[0.22em] text-ivory/35">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-ivory">{item}</h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
