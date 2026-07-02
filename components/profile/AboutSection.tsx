"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionViewport } from "@/components/profile/motion";

export function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="my-5 rounded-[28px] border border-white/70 bg-white/45 p-6 shadow-[0_20px_70px_rgba(36,45,55,0.08)] backdrop-blur-xl sm:p-10"
    >
      <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1267c8]">
        About Me
      </motion.p>
      <motion.div variants={fadeUp} className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <p className="max-w-3xl text-xl leading-9 text-black/66">
          Beyond the match, this page presents a personal identity built through focus, discipline, and style.
          From gameplay decisions to desktop setup, every detail reflects how I play and how I live.
        </p>
        <div className="text-right text-[clamp(2rem,5vw,5rem)] font-semibold uppercase leading-[0.92] tracking-normal text-black/[0.035]">
          Focus<br />Precision<br />Identity
        </div>
      </motion.div>
    </motion.section>
  );
}
