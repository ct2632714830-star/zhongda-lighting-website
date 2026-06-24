"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/LanguageProvider";
import { assetPaths, homeContent } from "@/lib/zd-home-content";

const heroSlides = [
  {
    type: "video",
    src: "/zd-site/videos/hero-main.mp4",
    poster: assetPaths.hero,
    alt: "Luxury hotel lighting project video"
  },
  {
    type: "image",
    src: "/zd-site/hero/staircase-feature-lighting.jpg",
    alt: "Sculptural staircase with bespoke feature lighting"
  },
  {
    type: "image",
    src: "/zd-site/hero/resort-lobby-lighting.png",
    alt: "Resort lobby with woven bespoke lighting installation"
  },
  {
    type: "image",
    src: assetPaths.villa,
    alt: "Private villa interior with bespoke decorative lighting"
  }
] as const;

export function Hero() {
  const { locale } = useI18n();
  const t = homeContent[locale];
  const [activeSlide, setActiveSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.55], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 1.08]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6800);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const activeVideo = videoRefs.current[activeSlide];
    if (!activeVideo) return;

    activeVideo.muted = true;
    activeVideo.playsInline = true;
    activeVideo.load();
    void activeVideo.play().catch(() => {
      // Some mobile browsers wait for user interaction before playing video.
    });
  }, [activeSlide]);

  const showPrevious = () => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  const showNext = () => setActiveSlide((current) => (current + 1) % heroSlides.length);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-warmwhite pt-16 md:pt-20">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== activeSlide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index <= 1}
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={slide.poster}
                aria-label={slide.alt}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,247,244,.94)_0%,rgba(248,247,244,.76)_34%,rgba(248,247,244,.18)_68%,rgba(248,247,244,.10)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-warmwhite" />

      <div className="container-lux relative z-10 grid min-h-[calc(100svh-5rem)] items-center pb-16 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-4xl"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-champagne">{t.hero.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-balance text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-zinc-950">
            {t.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-700 md:text-2xl md:leading-9">{t.hero.subtitle}</p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">{t.hero.note}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="#collections" className="shine-button inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white shadow-[0_16px_44px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5">
              {t.hero.primary}
              <ArrowRight className="ml-2 size-4" />
            </Link>
            <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/55 px-6 text-sm font-medium text-zinc-950 shadow-[0_16px_44px_rgba(0,0,0,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-champagne/50">
              {t.hero.secondary}
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="container-lux pointer-events-none absolute inset-x-0 bottom-8 z-20 flex items-end justify-between gap-5">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/60 bg-white/45 p-2 shadow-[0_18px_50px_rgba(0,0,0,.08)] backdrop-blur-2xl">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show hero slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide ? "w-9 bg-zinc-950" : "w-2.5 bg-zinc-950/30 hover:bg-zinc-950/55"
              }`}
            />
          ))}
        </div>

        <div className="pointer-events-auto hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous hero slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/50 text-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,.08)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next hero slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/50 text-zinc-950 shadow-[0_18px_50px_rgba(0,0,0,.08)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
