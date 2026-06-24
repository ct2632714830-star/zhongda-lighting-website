"use client";

import { FadeIn } from "@/components/Motion";
import { useI18n } from "@/components/LanguageProvider";

export function BrandStatement() {
  const { t } = useI18n();

  return (
    <section id="about" className="bg-ivory py-24 text-ink md:py-36">
      <div className="container-lux grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.3em] text-espresso/50">{t.statement.eyebrow}</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2 className="max-w-5xl font-serif text-5xl leading-[0.98] text-balance md:text-7xl">{t.statement.title}</h2>
          <p className="mt-9 max-w-3xl text-lg leading-9 text-ink/60">{t.statement.body}</p>
        </FadeIn>
      </div>
    </section>
  );
}
