"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { homeContent } from "@/lib/zd-home-content";
import { Reveal, SectionHeader } from "@/components/zd-home/Reveal";
import type { Locale } from "@/lib/i18n";

const projectLabelByImage: Record<Locale, Record<string, string>> = {
  en: {
    "/zd-site/projects/luxury-hotel-lobby.png": "The Ritz-Carlton Hotel",
    "/zd-site/projects/grand-banquet-hall.jpg": "The Ritz-Carlton Hotel",
    "/zd-site/projects/resort-reception.png": "The Indigo Hotel",
    "/zd-site/projects/landmark-commercial-space.png": "Wanda Vista Hotel",
    "/zd-site/project-villa.png": "Dubai, UAE",
    "/zd-site/craft-detail.png": "Global Projects"
  },
  zh: {
    "/zd-site/projects/luxury-hotel-lobby.png": "丽思卡尔顿酒店",
    "/zd-site/projects/grand-banquet-hall.jpg": "丽思卡尔顿酒店",
    "/zd-site/projects/resort-reception.png": "英迪格酒店",
    "/zd-site/projects/landmark-commercial-space.png": "万达文华酒店",
    "/zd-site/project-villa.png": "迪拜，阿联酋",
    "/zd-site/craft-detail.png": "全球项目"
  },
  vi: {
    "/zd-site/projects/luxury-hotel-lobby.png": "Khách sạn The Ritz-Carlton",
    "/zd-site/projects/grand-banquet-hall.jpg": "Khách sạn The Ritz-Carlton",
    "/zd-site/projects/resort-reception.png": "Khách sạn Indigo",
    "/zd-site/projects/landmark-commercial-space.png": "Khách sạn Wanda Vista",
    "/zd-site/project-villa.png": "Dubai, UAE",
    "/zd-site/craft-detail.png": "Dự án toàn cầu"
  },
  ar: {
    "/zd-site/projects/luxury-hotel-lobby.png": "فندق الريتز كارلتون",
    "/zd-site/projects/grand-banquet-hall.jpg": "فندق الريتز كارلتون",
    "/zd-site/projects/resort-reception.png": "فندق إنديجو",
    "/zd-site/projects/landmark-commercial-space.png": "فندق واندا فيستا",
    "/zd-site/project-villa.png": "دبي، الإمارات",
    "/zd-site/craft-detail.png": "مشاريع عالمية"
  }
};

export function ProjectShowcase() {
  const { locale } = useI18n();
  const t = homeContent[locale];
  const projects = [...t.projects];
  const villaIndex = projects.findIndex((project) => project[3] === "/zd-site/project-villa.png");
  const commercialIndex = projects.findIndex((project) => project[3] === "/zd-site/projects/landmark-commercial-space.png");

  if (villaIndex > -1 && commercialIndex > -1 && villaIndex < commercialIndex) {
    const [villaProject] = projects.splice(villaIndex, 1);
    projects.splice(commercialIndex, 0, villaProject);
  }

  return (
    <section id="projects" className="bg-[#f1f0ec] py-24 md:py-32">
      <div className="container-lux">
        <SectionHeader eyebrow={t.sectionLabels.projects} title={t.sectionTitles.projects} body={t.projectIntro} />
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(([title, location, body, image]) => (
            <Reveal key={title} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_90px_rgba(20,20,20,.08)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 transition group-hover:opacity-100" />
                  <Link href="#contact" className="absolute bottom-5 left-5 inline-flex translate-y-3 items-center rounded-full bg-white/82 px-4 py-2 text-sm font-medium text-zinc-950 opacity-0 shadow-xl backdrop-blur-xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t.viewProject}
                    <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="min-h-4 text-xs uppercase tracking-[0.24em] text-champagne">{projectLabelByImage[locale][image] ?? location}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-zinc-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
