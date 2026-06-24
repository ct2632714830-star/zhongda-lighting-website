"use client";

import { useI18n } from "@/components/LanguageProvider";
import { homeContent } from "@/lib/zd-home-content";
import { Reveal } from "@/components/zd-home/Reveal";

const brands = [
  "Marriott",
  "JW Marriott",
  "The Ritz-Carlton",
  "InterContinental",
  "Bvlgari",
  "Raffles",
  "Capella",
  "Mandarin Oriental",
  "Four Seasons",
  "Rosewood",
  "Regent",
  "W Hotels",
  "Waldorf Astoria",
  "Park Hyatt",
  "Hyatt",
  "Fairmont",
  "Andaz",
  "Hotel Indigo",
  "Kimpton",
  "Sheraton"
];

export function TrustedBrandsSection() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <section className="relative overflow-hidden bg-warmwhite pb-0 pt-10 md:pt-16">
      <div className="container-lux">
        <Reveal>
          <div className="relative min-h-[760px] overflow-hidden rounded-t-[2.8rem] border border-white/70 bg-zinc-950 shadow-[0_-10px_90px_rgba(38,34,28,.12)] md:min-h-[820px]">
            <video
              className="absolute inset-0 h-full w-full object-cover opacity-86"
              src="/zd-site/videos/trusted-hospitality-brands.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,244,239,.20)_0%,rgba(11,10,9,.08)_32%,rgba(11,10,9,.72)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,.38),transparent_32%),radial-gradient(circle_at_80%_82%,rgba(196,164,104,.22),transparent_30%)]" />

            <div className="relative z-10 flex min-h-[760px] flex-col justify-end p-6 md:min-h-[820px] md:p-10 lg:p-14">
              <div className="max-w-5xl rounded-[2.2rem] border border-white/24 bg-white/[0.12] p-6 text-white shadow-[0_24px_90px_rgba(0,0,0,.24)] backdrop-blur-2xl md:p-9">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{t.trusted.eyebrow}</p>
                <h2 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5.7rem)] font-semibold leading-[0.96] tracking-[-0.05em]">
                  {t.trusted.title}
                </h2>
                <div className="mt-7 grid gap-5 text-base leading-8 text-white/74 md:grid-cols-2 md:text-lg">
                  <p>{t.trusted.body1}</p>
                  <p>{t.trusted.body2}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-full border border-white/16 bg-white/[0.10] px-3.5 py-2 text-xs font-medium text-white/78 backdrop-blur-xl transition hover:border-champagne/50 hover:text-white md:text-sm"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                <p className="mt-9 text-xl font-semibold tracking-[-0.03em] text-white md:text-2xl">
                  {t.trusted.closing}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
