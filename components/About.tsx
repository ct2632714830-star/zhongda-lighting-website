"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="container-lux grid gap-12 py-24 md:py-36 lg:grid-cols-[.95fr_1.05fr]">
      <div>
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} text={t.about.body} />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {t.about.points.map((point, index) => (
            <FadeIn key={point} delay={index * 0.04} className="flex items-center gap-3 border border-white/10 bg-white/[0.035] p-4 text-sm text-ivory/72 backdrop-blur">
              <CheckCircle2 className="size-4 shrink-0 text-champagne" />
              {point}
            </FadeIn>
          ))}
        </div>
      </div>
      <FadeIn className="relative min-h-[520px] overflow-hidden border border-white/10 bg-white/[0.03]">
        <Image src="/images/chandelier-detail.svg" alt="Custom chandelier detail" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,8,7,.76),transparent_55%),radial-gradient(circle_at_72%_18%,rgba(200,169,106,.20),transparent_30%)]" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="max-w-md font-serif text-3xl leading-tight text-ivory">Design deepening, controlled production, global project coordination.</p>
        </div>
      </FadeIn>
    </section>
  );
}
