"use client";

import { motion } from "framer-motion";
import { AgentCard } from "@/components/profile/AgentCard";
import { agents } from "@/components/profile/profileData";
import { fadeUp, sectionViewport } from "@/components/profile/motion";

export function AgentPoolSection() {
  return (
    <motion.section
      id="agents"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="my-5 rounded-[28px] border border-white/70 bg-white/35 p-6 shadow-[0_20px_70px_rgba(36,45,55,0.07)] backdrop-blur-xl sm:p-10"
    >
      <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1267c8]">Agent Pool</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">A restrained pool for decisive rounds.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-black/45">Based on current role preference and total playtime.</p>
      </motion.div>
      <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </motion.div>
    </motion.section>
  );
}
