"use client";

import { useI18n } from "@/components/LanguageProvider";
import { homeContent } from "@/lib/zd-home-content";
import { Reveal } from "@/components/zd-home/Reveal";

export function AboutSection() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <section id="about" className="relative overflow-hidden bg-warmwhite py-24 md:py-32">
      <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl" />
      <div className="container-lux relative grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{t.sectionLabels.about}</p>
          <h2 className="mt-5 text-balance text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-zinc-950">
            {t.about.title}
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">{t.about.body}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {t.about.stats.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-black/8 bg-white/62 p-5 shadow-[0_18px_60px_rgba(0,0,0,.06)] backdrop-blur-xl">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950">{value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-[2.4rem] border border-black/10 bg-white shadow-[0_30px_100px_rgba(20,20,20,.12)]">
            <video
              className="aspect-[1.575] w-full bg-black object-contain"
              src="/zd-site/videos/about-light-craft.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Zhongda Lighting craftsmanship video"
            />
            <div className="bg-white/88 p-6 backdrop-blur-xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-champagne">{t.about.videoLabel}</p>
              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
                {t.about.videoText}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
