"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function NewsInspiration() {
  const { t } = useI18n();

  return (
    <section id="news" className="bg-ivory py-24 text-ink md:py-36">
      <div className="container-lux">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading tone="light" eyebrow={t.news.eyebrow} title={t.news.title} />
          <a href="#contact" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-espresso/60 transition hover:text-champagne">
            {t.news.readAll} <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.news.items.map(([category, reading, title, description, image], index) => (
            <FadeIn key={title} delay={index * 0.05}>
              <article className="group">
                <div className="relative aspect-[3/2] overflow-hidden bg-ink">
                  <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" unoptimized />
                </div>
                <div className="border-b border-ink/12 py-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-espresso/45">{category} / {reading}</p>
                  <h3 className="mt-4 font-serif text-4xl leading-none text-ink">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-ink/58">{description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
