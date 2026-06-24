"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

function CountValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const numeric = /^\d+$/.test(value) ? Number(value) : null;
  const [count, setCount] = useState(numeric ? 0 : value);

  useEffect(() => {
    if (!inView || numeric === null) return;
    let frame = 0;
    const total = 52;
    const tick = () => {
      frame += 1;
      setCount(Math.round((numeric * frame) / total));
      if (frame < total) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, numeric]);

  return <span ref={ref}>{count}</span>;
}

export function Strength() {
  const { t } = useI18n();

  return (
    <section className="bg-ivory py-24 text-ink md:py-36">
      <div className="container-lux">
        <SectionHeading tone="light" eyebrow={t.strength.eyebrow} title={t.strength.title} />
        <div className="mt-14 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.strength.items.map(([value, label], index) => (
            <FadeIn key={`${value}-${label}`} delay={index * 0.035}>
              <motion.div whileHover={{ y: -4 }} className="min-h-44 bg-ivory p-7 transition hover:bg-[#eee7dc]">
                <p className="font-serif text-5xl leading-none text-ink">
                  <CountValue value={value} />
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-espresso/50">{label}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
