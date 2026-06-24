"use client";

import Image from "next/image";
import { useI18n } from "@/components/LanguageProvider";
import { homeContent } from "@/lib/zd-home-content";
import { Reveal } from "@/components/zd-home/Reveal";

const materialImages = [
  {
    title: "Crystal",
    src: "/zd-site/materials/material-crystal.png"
  },
  {
    title: "Brass",
    src: "/zd-site/materials/material-brass.png"
  },
  {
    title: "Stainless Steel",
    src: "/zd-site/materials/material-stainless-steel.png"
  },
  {
    title: "Glass",
    src: "/zd-site/materials/material-glass.png"
  },
  {
    title: "Acrylic",
    src: "/zd-site/materials/material-acrylic.png"
  },
  {
    title: "Custom Metal Finish",
    src: "/zd-site/materials/material-custom-metal-finish.png"
  }
];

export function MaterialSection() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <section className="relative overflow-hidden bg-[#f6f4ef] py-24 md:py-32">
      <div className="absolute left-1/2 top-10 h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-[440px] w-[440px] rounded-full bg-champagne/12 blur-3xl" />
      <div className="absolute -left-28 top-1/3 h-[360px] w-[360px] rounded-full bg-zinc-200/40 blur-3xl" />

      <div className="container-lux relative">
        <Reveal className="mx-auto mb-14 max-w-4xl text-center md:mb-18">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{t.sectionLabels.materials}</p>
          <h2 className="mt-5 text-balance text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-zinc-950">
            {t.sectionTitles.materials}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
            {t.materialIntro}
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {materialImages.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group relative overflow-hidden rounded-[2.1rem] border border-white/75 bg-white/48 p-2 shadow-[0_24px_84px_rgba(47,43,36,.12)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_34px_110px_rgba(47,43,36,.18)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.66),rgba(255,255,255,.16))]" />
                <div className="relative overflow-hidden rounded-[1.75rem] bg-[#f4f1ea]">
                  <Image
                    src={item.src}
                    alt={`${item.title} material showcase`}
                    width={1450}
                    height={1118}
                    loading="lazy"
                    sizes="(min-width: 768px) 48vw, 100vw"
                    className="aspect-[1.297] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.018]"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
