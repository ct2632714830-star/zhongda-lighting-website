"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function DesignCategories() {
  const { t } = useI18n();

  return (
    <section id="signature" className="bg-ink py-24 md:py-36">
      <div className="container-lux">
        <SectionHeading eyebrow={t.categories.eyebrow} title={t.categories.title} />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.categories.items.map(([title, description, image], index) => (
            <FadeIn key={title} delay={index * 0.04}>
              <article id={index === 1 ? "bespoke" : undefined} className="group relative min-h-[420px] overflow-hidden border border-white/10 bg-smoke">
                <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/32 to-transparent" />
                <div className="absolute inset-0 bg-white/0 transition duration-500 group-hover:bg-white/[0.05]" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-7 transition duration-500 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-[0.24em] text-champagne">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-serif text-4xl leading-none text-ivory">{title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/0 transition duration-500 group-hover:text-ivory/68">{description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/80">
                    Discover <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
