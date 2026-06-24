"use client";

import { motion } from "framer-motion";

export function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-[clamp(2.4rem,6vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-zinc-950">
        {title}
      </h2>
      {body ? <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">{body}</p> : null}
    </Reveal>
  );
}
