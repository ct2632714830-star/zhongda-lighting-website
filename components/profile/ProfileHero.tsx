"use client";

import { motion } from "framer-motion";
import { Monitor, MousePointer2, Send } from "lucide-react";
import { player } from "@/components/profile/profileData";
import { fadeUp } from "@/components/profile/motion";

const actions = [
  { label: "View Crosshair", href: "#crosshair", icon: MousePointer2 },
  { label: "View Setup", href: "#setup", icon: Monitor },
  { label: "Contact Me", href: "#contact", icon: Send }
];

export function ProfileHero() {
  return (
    <section className="grid min-h-[calc(100vh-64px)] gap-8 pb-8 pt-2 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/35 shadow-[0_28px_80px_rgba(36,45,55,0.12)] backdrop-blur-xl"
      >
        <img
          src={player.portrait}
          alt="crisistb7#4719 profile portrait"
          className="aspect-[4/5] h-full w-full object-cover object-[57%_center] grayscale-[0.08] lg:aspect-[4/4.6]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_56%,rgba(5,10,16,0.2)_100%)]" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } } }}
        className="relative"
      >
        <div className="pointer-events-none absolute -right-24 top-0 hidden text-[22rem] font-semibold leading-none text-black/[0.025] lg:block">
          V
        </div>
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1267c8]">
          Player Profile
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-6 text-[clamp(3rem,8vw,7.8rem)] font-semibold leading-[0.9] tracking-normal">
          crisistb7<span className="text-black/42">#4719</span>
        </motion.h1>
        <motion.div variants={fadeUp} className="mt-8 grid gap-3 text-base text-black/68 sm:text-lg">
          <p>{player.location}</p>
          <p>{player.game}</p>
          <p>{player.position}</p>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-black/58">
          {player.intro}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                className={[
                  "inline-flex min-h-12 items-center justify-center gap-3 rounded-full border px-5 text-sm font-medium transition duration-300 hover:-translate-y-1",
                  index === 0
                    ? "border-[#111821] bg-[#111821] text-white shadow-[0_18px_42px_rgba(17,24,33,0.18)]"
                    : "border-black/10 bg-white/42 text-[#111821] shadow-[0_14px_40px_rgba(35,44,54,0.08)] backdrop-blur-xl hover:bg-white/72"
                ].join(" ")}
              >
                <Icon className="h-4 w-4" />
                {action.label}
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
