"use client";

import { Gem, Hotel, PenTool, Sparkles } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { homeContent } from "@/lib/zd-home-content";
import { Reveal, SectionHeader } from "@/components/zd-home/Reveal";

const icons = [PenTool, Hotel, Sparkles, Gem];

export function CapabilityCards() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <section id="collections" className="bg-warmwhite py-24 md:py-32">
      <div className="container-lux">
        <SectionHeader eyebrow={t.sectionLabels.capabilities} title={t.sectionTitles.capabilities} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.capabilities.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <Reveal key={title} delay={index * 0.06}>
                <div className="group min-h-72 rounded-[2rem] border border-white/80 bg-white/55 p-7 shadow-[0_24px_80px_rgba(20,20,20,.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white/80 hover:shadow-[0_32px_90px_rgba(20,20,20,.12)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-zinc-950 shadow-[0_12px_30px_rgba(0,0,0,.06)] transition group-hover:border-champagne/50 group-hover:text-champagne">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-zinc-950">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
