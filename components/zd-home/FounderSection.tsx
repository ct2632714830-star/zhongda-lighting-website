"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { assetPaths, homeContent } from "@/lib/zd-home-content";
import { Reveal } from "@/components/zd-home/Reveal";

const founders = [
  {
    name: "Mr. Zeng Weihong",
    image: assetPaths.founder,
    alt: "Mr. Zeng Weihong, Founder of ZD Lighting"
  },
  {
    name: "Mr. Li Qingfeng",
    image: "/zd-site/founder-li-qingfeng.png",
    alt: "Mr. Li Qingfeng, Founder of ZD Lighting"
  }
];

export function FounderSection() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <section id="founder" className="relative overflow-hidden bg-[#f1f0ec] py-24 md:py-32">
      <div className="absolute right-0 top-0 h-[520px] w-[520px] translate-x-1/3 rounded-full bg-champagne/12 blur-3xl" />
      <div className="container-lux relative">
        <Reveal className="mx-auto mb-14 max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{t.founder.eyebrow}</p>
          <h2 className="mt-5 text-balance text-[clamp(2.5rem,6vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-zinc-950">
            {t.founder.title}
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <div className="grid gap-5">
              {founders.map((founder) => (
                <div key={founder.name} className="relative min-h-[420px] overflow-hidden rounded-[2.4rem] bg-zinc-950 shadow-[0_30px_100px_rgba(20,20,20,.14)]">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/74 via-black/18 to-transparent p-8 text-white">
                    <p className="text-3xl font-semibold tracking-[-0.04em]">{founder.name}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/66">{t.founder.founderRole}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-[2.4rem] border border-white/80 bg-white/72 p-7 shadow-[0_30px_100px_rgba(20,20,20,.1)] backdrop-blur-2xl md:p-10">
              <div>
                <Quote className="size-9 text-champagne" />
                <p className="mt-7 text-2xl font-semibold leading-tight tracking-[-0.035em] text-zinc-950 md:text-4xl">
                  {t.founder.quote}
                </p>
                <div className="mt-8 space-y-5 text-base leading-8 text-zinc-600">
                  {t.founder.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-10 grid gap-3">
                {t.founder.principles.map((item) => (
                  <div key={item} className="rounded-2xl border border-black/8 bg-white px-5 py-4 text-sm leading-7 text-zinc-700 shadow-[0_12px_40px_rgba(0,0,0,.04)]">
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-10 text-balance text-xl font-semibold tracking-[-0.03em] text-zinc-950 md:text-2xl">
                {t.founder.closing}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
