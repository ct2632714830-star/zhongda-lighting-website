"use client";

import { Globe2 } from "lucide-react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function GlobalService() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 opacity-45" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
      <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne/15" />
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="container-lux relative z-10 grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeading eyebrow={t.global.eyebrow} title={t.global.title} />
        <FadeIn className="grid gap-3 sm:grid-cols-2">
          {t.global.regions.map((region, index) => (
            <div key={region} className="group flex min-h-28 items-center gap-4 border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-champagne/45 hover:bg-white/[0.07]">
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-champagne/40 text-champagne">
                <Globe2 className="size-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-ivory/38">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-serif text-2xl text-ivory">{region}</p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
