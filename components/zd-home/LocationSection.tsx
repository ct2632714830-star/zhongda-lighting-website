"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { assetPaths, homeContent } from "@/lib/zd-home-content";
import { Reveal } from "@/components/zd-home/Reveal";

export function LocationSection() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <section id="company-address" className="scroll-mt-24 bg-warmwhite py-24 md:scroll-mt-28 md:py-32">
      <div className="container-lux">
        <Reveal className="grid overflow-hidden rounded-[2.6rem] border border-white/80 bg-white/70 shadow-[0_30px_110px_rgba(20,20,20,.1)] backdrop-blur-2xl lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{t.sectionLabels.location}</p>
              <h2 className="mt-5 text-balance text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-zinc-950">
                {t.location.title}
              </h2>
              <div className="mt-8 flex gap-4 rounded-[1.6rem] border border-black/8 bg-white px-5 py-5 shadow-[0_14px_44px_rgba(0,0,0,.05)]">
                <MapPin className="mt-1 size-5 shrink-0 text-champagne" />
                <p className="text-base leading-8 text-zinc-600">
                  {t.location.address[0]}
                  <br />
                  {t.location.address[1]}
                </p>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://maps.google.com/?q=No.%202%20Rongjing%20Road%2C%20Zhongshan%20City%2C%20Guangdong%20Province%2C%20China"
                target="_blank"
                rel="noopener noreferrer"
                className="shine-button inline-flex h-12 items-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white shadow-[0_18px_50px_rgba(0,0,0,.16)] transition hover:-translate-y-0.5"
              >
                {t.location.view}
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
              <Link
                href="https://www.tianyancha.com/company/2315881553"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-black/10 bg-white/70 px-6 text-sm font-medium text-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-champagne/50"
              >
                {t.location.business}
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden bg-zinc-200 lg:min-h-[560px]">
            <Image
              src={assetPaths.building}
              alt="Zhongda Lighting company building in Zhongshan"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover saturate-[0.82] contrast-[0.96] brightness-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(248,247,244,.38),rgba(196,164,104,.12),rgba(0,0,0,.08))]" />
            <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/40 bg-white/55 p-5 shadow-[0_18px_70px_rgba(0,0,0,.12)] backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{t.location.imageLabel}</p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.03em] text-zinc-950">{t.location.imageText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
