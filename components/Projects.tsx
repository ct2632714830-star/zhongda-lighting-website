"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/Motion";
import { useI18n } from "@/components/LanguageProvider";

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="bg-smoke py-24 md:py-36">
      <div className="container-lux">
        <SectionHeading eyebrow={t.references.eyebrow} title={t.references.title} />
        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {t.references.items.map(([name, region, type, description, image], index) => {
            const large = index === 0 || index === 3;
            return (
              <FadeIn key={name} delay={index * 0.04} className={large ? "md:col-span-4" : "md:col-span-2"}>
                <motion.article whileHover={{ y: -6 }} className={`group relative overflow-hidden border border-white/10 bg-ink ${large ? "min-h-[520px]" : "min-h-[360px]"}`}>
                  <Image src={image} alt={name} fill className="object-cover transition duration-700 ease-out group-hover:scale-105" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                  <div className="absolute inset-0 bg-champagne/0 transition duration-500 group-hover:bg-champagne/[0.07]" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-xs uppercase tracking-[0.24em] text-champagne">{type}</p>
                    <h3 className="mt-3 font-serif text-4xl leading-none text-ivory">{name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-ivory/45">{region}</p>
                    <p className="mt-5 max-w-md translate-y-3 text-sm leading-7 text-ivory/0 transition duration-500 group-hover:translate-y-0 group-hover:text-ivory/68">
                      {description}
                    </p>
                    <button className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/85">
                      {t.references.view} <ArrowUpRight className="size-4" />
                    </button>
                  </div>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
