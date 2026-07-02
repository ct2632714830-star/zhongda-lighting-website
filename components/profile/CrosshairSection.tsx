"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { crosshair } from "@/components/profile/profileData";
import { fadeUp, sectionViewport } from "@/components/profile/motion";

export function CrosshairSection() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(crosshair.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <motion.section
      id="crosshair"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="my-5 rounded-[28px] border border-white/70 bg-white/38 p-6 shadow-[0_20px_70px_rgba(36,45,55,0.08)] backdrop-blur-xl sm:p-10"
    >
      <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1267c8]">
        Crosshair Settings
      </motion.p>
      <motion.div variants={fadeUp} className="mt-6 grid gap-4 lg:grid-cols-[240px_1fr]">
        <div className="grid min-h-40 place-items-center rounded-[22px] bg-[#111821] shadow-[0_18px_50px_rgba(17,24,33,0.16)]">
          <div className="relative h-20 w-20">
            <span className="absolute left-1/2 top-0 h-6 w-1 -translate-x-1/2 rounded-full bg-[#48f6ff]" />
            <span className="absolute bottom-0 left-1/2 h-6 w-1 -translate-x-1/2 rounded-full bg-[#48f6ff]" />
            <span className="absolute left-0 top-1/2 h-1 w-6 -translate-y-1/2 rounded-full bg-[#48f6ff]" />
            <span className="absolute right-0 top-1/2 h-1 w-6 -translate-y-1/2 rounded-full bg-[#48f6ff]" />
            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#48f6ff]" />
          </div>
        </div>
        <div className="rounded-[22px] bg-[#111821] p-5 text-white shadow-[0_18px_50px_rgba(17,24,33,0.16)] sm:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/42">Crosshair Code</p>
              <code className="mt-4 block break-all font-mono text-base leading-7 text-white/88 sm:text-xl">{crosshair.code}</code>
            </div>
            <button
              onClick={copyCode}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-white/12 bg-white/10 px-5 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-white/16"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy Code"}
            </button>
          </div>
          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {crosshair.settings.map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/36">{label}</p>
                <p className="mt-1 text-sm text-white/78">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
