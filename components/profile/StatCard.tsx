"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type StatCardProps = {
  label: string;
  value: string | number;
  suffix?: string;
  note: string;
  decimals?: number;
};

export function StatCard({ label, value, suffix = "", note, decimals = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);
  const isNumber = typeof value === "number";

  useEffect(() => {
    if (!inView || !isNumber) return;

    const start = performance.now();
    const duration = 900;
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((value as number) * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumber, value]);

  return (
    <motion.article
      ref={ref}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="rounded-[24px] border border-white/70 bg-white/58 p-6 text-center shadow-[0_18px_58px_rgba(36,45,55,0.08)] backdrop-blur-xl"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/42">{label}</p>
      <p className="mt-5 text-4xl font-semibold tracking-normal text-[#111821]">
        {isNumber ? display.toFixed(decimals) : value}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-black/42">{note}</p>
    </motion.article>
  );
}
