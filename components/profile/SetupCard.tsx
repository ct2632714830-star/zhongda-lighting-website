"use client";

import { motion } from "framer-motion";

type SetupCardProps = {
  type: string;
  name: string;
  specs: string[];
  reason: string;
};

export function SetupCard({ type, name, specs, reason }: SetupCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.25 }}
      className="rounded-[24px] border border-white/70 bg-white/58 p-5 shadow-[0_18px_58px_rgba(36,45,55,0.08)] backdrop-blur-xl"
    >
      <div className="grid aspect-[4/3] place-items-center rounded-[20px] bg-[linear-gradient(145deg,#f8fafb,#e8edf2)]">
        <div className="h-20 w-20 rounded-[28px] border border-black/8 bg-[#111821] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_42px_rgba(17,24,33,0.16)]" />
      </div>
      <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-black/36">{type}</p>
      <h3 className="mt-2 min-h-14 text-xl font-semibold leading-7 tracking-normal text-[#111821]">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-black/52">{reason}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {specs.map((spec) => (
          <span key={spec} className="rounded-full border border-black/8 bg-white/54 px-3 py-1 text-xs text-black/52">
            {spec}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
