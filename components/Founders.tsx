"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

export function Founders() {
  const { t } = useI18n();
  const founders = t.founders.items as Array<{
    name: string;
    title: string;
    image: string;
    description: string;
    quote: string;
  }>;

  return (
    <section id="founders" className="container-lux py-24 md:py-36">
      <SectionHeading eyebrow={t.founders.eyebrow} title={t.founders.title} />
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {founders.map((founder, index) => (
          <FadeIn key={founder.name} delay={index * 0.08}>
            <motion.article whileHover={{ y: -6 }} className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-5 backdrop-blur">
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 20%, rgba(200,169,106,.18), transparent 42%)" }} />
              <div className="relative grid gap-6 md:grid-cols-[.85fr_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden bg-smoke">
                  <Image src={founder.image} alt={founder.name} fill className="object-cover grayscale transition duration-700 group-hover:scale-105" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
                </div>
                <div className="flex flex-col justify-between p-2 md:p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-champagne">{founder.title}</p>
                    <h3 className="mt-4 font-serif text-4xl text-ivory">{founder.name}</h3>
                    <p className="mt-6 text-sm leading-7 text-ivory/64">{founder.description}</p>
                  </div>
                  <blockquote className="mt-10 border-l border-champagne/60 pl-5 font-serif text-2xl leading-tight text-ivory/88">
                    "{founder.quote}"
                  </blockquote>
                </div>
              </div>
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
