"use client";

import Image from "next/image";
import { ClipboardCheck, Cuboid, Factory, MessageCircle, PackageCheck, PenLine, ShieldCheck } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { homeContent } from "@/lib/zd-home-content";
import { Reveal, SectionHeader } from "@/components/zd-home/Reveal";

const icons = [MessageCircle, PenLine, Cuboid, ClipboardCheck, Factory, ShieldCheck, PackageCheck];
const processImages = [
  "/zd-site/process/consultation.png",
  "/zd-site/process/concept-design.png",
  "/zd-site/process/3d-drawing.png",
  "/zd-site/process/sampling.jpg",
  "/zd-site/process/production.jpg",
  "/zd-site/process/quality-check.jpg",
  "/zd-site/process/delivery-installation.jpg"
];

export function BespokeProcess() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <section id="bespoke" className="bg-warmwhite py-24 md:py-32">
      <div className="container-lux">
        <SectionHeader eyebrow={t.sectionLabels.process} title={t.sectionTitles.process} />
        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-black/15 to-transparent lg:block" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            {t.process.map((step, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={step} delay={index * 0.05}>
                  <div className="relative min-h-[190px] overflow-hidden rounded-[1.5rem] border border-black/8 bg-white/64 p-5 shadow-[0_18px_60px_rgba(0,0,0,.06)] backdrop-blur-xl">
                    <Image
                      src={processImages[index]}
                      alt={step}
                      fill
                      sizes="(min-width: 1024px) 14vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/8 via-black/10 to-black/72" />
                    <div className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white shadow-[0_12px_30px_rgba(0,0,0,.16)]">
                      <Icon className="size-4" />
                    </div>
                    <div className="relative z-10 mt-14">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">{String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 min-h-12 text-lg font-semibold leading-tight tracking-[-0.02em] text-white">{step}</h3>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
