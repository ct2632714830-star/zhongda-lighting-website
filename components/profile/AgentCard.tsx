"use client";

import { motion } from "framer-motion";

type AgentCardProps = {
  name: string;
  role: string;
  mastery: number;
  style: string;
};

export function AgentCard({ name, role, mastery, style }: AgentCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="group rounded-[24px] border border-white/70 bg-white/55 p-5 shadow-[0_18px_60px_rgba(36,45,55,0.08)] backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-normal text-[#111821]">{name}</h3>
          <p className="mt-1 text-sm text-black/44">{role}</p>
        </div>
        <span className="rounded-full border border-black/8 bg-white/48 px-3 py-1 text-xs text-black/52">{style}</span>
      </div>
      <div className="mt-9">
        <p className="text-4xl font-semibold tracking-normal text-[#1267c8]">{mastery}%</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-black/36">Mastery</p>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-black/7">
        <div className="h-full rounded-full bg-[#1267c8]" style={{ width: `${mastery}%` }} />
      </div>
    </motion.article>
  );
}
