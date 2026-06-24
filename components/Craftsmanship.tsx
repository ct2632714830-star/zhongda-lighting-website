"use client";

import Image from "next/image";
import { DraftingCompass, Gem, PackageCheck, PenLine, ShieldCheck, Truck } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

const icons = [DraftingCompass, Gem, PenLine, ShieldCheck, PackageCheck, Truck];

export function Craftsmanship() {
  const { t } = useI18n();

  return (
    <section id="craftsmanship" className="bg-ivory py-24 text-ink md:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <SectionHeading tone="light" eyebrow={t.craftsmanship.eyebrow} title={t.craftsmanship.title} text={t.craftsmanship.body} />
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {t.craftsmanship.steps.map((step, index) => {
              const Icon = icons[index] ?? DraftingCompass;
              return (
                <FadeIn key={step} delay={index * 0.04} className="group bg-ivory p-6 transition hover:bg-[#eee7dc]">
                  <Icon className="size-5 text-champagne" />
                  <p className="mt-8 font-serif text-2xl leading-tight text-ink">{step}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
        <FadeIn className="relative min-h-[640px] overflow-hidden border border-ink/10 bg-ink">
          <Image src="/images/chandelier-detail.svg" alt="Crystal and metal craftsmanship detail" fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
        </FadeIn>
      </div>
    </section>
  );
}
