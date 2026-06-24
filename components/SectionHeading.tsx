"use client";

import { FadeIn } from "@/components/Motion";

export function SectionHeading({
  eyebrow,
  title,
  text,
  tone = "dark"
}: {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <FadeIn>
      <p className={`text-xs uppercase tracking-[0.3em] ${light ? "text-espresso/55" : "text-champagne"}`}>{eyebrow}</p>
      <h2 className={`mt-4 max-w-4xl font-serif text-4xl leading-[1.02] text-balance md:text-6xl ${light ? "text-ink" : "text-ivory"}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 max-w-2xl text-base leading-8 ${light ? "text-ink/60" : "text-ivory/62"}`}>{text}</p>}
    </FadeIn>
  );
}
