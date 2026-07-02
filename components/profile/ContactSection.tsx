"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contacts } from "@/components/profile/profileData";
import { fadeUp, sectionViewport } from "@/components/profile/motion";

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={sectionViewport}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className="my-5 rounded-[28px] border border-white/70 bg-white/45 p-6 shadow-[0_20px_70px_rgba(36,45,55,0.08)] backdrop-blur-xl sm:p-10"
    >
      <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1267c8]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-5xl">Build the next round together.</h2>
        </div>
        <a href="/" className="text-sm font-medium text-black/48 transition hover:text-black">
          Back to Home
        </a>
      </motion.div>
      <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {contacts.map((contact) => (
          <a
            key={contact}
            href={contact === "Email" ? "mailto:crisistb7@example.com" : "#"}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/9 bg-white/48 px-4 text-sm font-medium text-[#111821] transition hover:-translate-y-1 hover:bg-white/76"
          >
            {contact}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-42 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </a>
        ))}
      </motion.div>
      <motion.p variants={fadeUp} className="mt-10 text-center text-xs text-black/35">
        Built with focus. Designed for performance.
      </motion.p>
    </motion.section>
  );
}
