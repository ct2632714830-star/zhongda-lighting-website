"use client";

import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="bg-smoke py-24 md:py-36">
      <div className="container-lux">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />
        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-champagne via-white/10 to-transparent md:block" />
          <div className="grid gap-4 md:gap-6">
            {t.process.items.map(([title, body], index) => (
              <FadeIn key={title} delay={index * 0.035} className="relative grid gap-5 border border-white/10 bg-ink/70 p-6 backdrop-blur md:ml-16 md:grid-cols-[160px_1fr]">
                <span className="absolute -left-[59px] top-7 hidden h-10 w-10 place-items-center border border-champagne/50 bg-ink text-xs text-champagne md:grid">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-3xl leading-tight text-ivory">{title}</p>
                <p className="max-w-3xl text-sm leading-7 text-ivory/62">{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
