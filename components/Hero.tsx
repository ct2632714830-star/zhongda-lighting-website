"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { LuxuryButton } from "@/components/LuxuryButton";
import { useI18n } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.45], [0, 110]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 1.07]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % t.hero.slides.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [t.hero.slides.length]);

  const slide = t.hero.slides[active];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink">
      {t.hero.slides.map((item, index) => (
        <motion.div
          key={item.title}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: index === active ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
          style={{ y: index === active ? y : 0, scale: index === active ? scale : 1 }}
        >
          <Image src={item.image} alt={item.title} fill priority={index === 0} className="object-cover" unoptimized />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(214,189,132,.22),transparent_30%),linear-gradient(to_bottom,rgba(9,8,7,.22),rgba(9,8,7,.70),#090807)]" />
      <div className="absolute inset-x-6 top-24 bottom-8 border border-white/10 bg-white/[0.018] backdrop-blur-[1px] md:inset-x-10" />
      <motion.div
        key={slide.title}
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="container-lux relative z-10 flex min-h-screen items-center pt-24"
      >
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.36em] text-champagne">{t.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(4.2rem,11vw,10rem)] leading-[0.9] text-ivory text-balance">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ivory/72 md:text-lg">{t.hero.subtitle}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="#projects">{t.hero.primary}</LuxuryButton>
            <LuxuryButton href="#contact" variant="ghost">{t.hero.secondary}</LuxuryButton>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-10 left-6 right-6 z-10 flex items-end justify-between gap-8 md:left-10 md:right-10">
        <div className="hidden max-w-sm md:block">
          <p className="text-xs uppercase tracking-[0.24em] text-champagne">{String(active + 1).padStart(2, "0")} / {String(t.hero.slides.length).padStart(2, "0")}</p>
          <h2 className="mt-3 font-serif text-3xl text-ivory">{slide.title}</h2>
          <p className="mt-2 text-sm leading-6 text-ivory/58">{slide.subtitle}</p>
        </div>
        <div className="flex gap-2">
          {t.hero.slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className={`h-px w-12 transition ${index === active ? "bg-champagne" : "bg-white/25"}`}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-ink" />
    </section>
  );
}
