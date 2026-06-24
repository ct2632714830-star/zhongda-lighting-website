"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LuxuryButton } from "@/components/LuxuryButton";
import { images } from "@/lib/content";

export function FounderHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 70]);

  return (
    <section className="container-lux grid min-h-screen items-center gap-12 pt-28 lg:grid-cols-[.9fr_1.1fr]">
      <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden border border-white/10">
        <Image src={images.founder} alt="Founder portrait placeholder" fill priority className="object-cover grayscale saturate-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <p className="text-xs uppercase tracking-[0.32em] text-champagne">Founder & Strategic Director</p>
        <h1 className="mt-6 max-w-3xl font-serif text-6xl leading-[0.95] text-ivory md:text-8xl">
          A Vision for Light, Space, and Atmosphere.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/[0.62]">
          Driven by a belief that lighting is not only a product, but a language of space, emotion, and architectural identity.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <LuxuryButton href="/about">View Brand Story</LuxuryButton>
          <LuxuryButton href="/contact" variant="ghost">Start a Project Conversation</LuxuryButton>
        </div>
      </motion.div>
    </section>
  );
}
