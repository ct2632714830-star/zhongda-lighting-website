"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: { title: string; category: string; location: string; image: string; description: string } }) {
  return (
    <motion.article
      className="group relative overflow-hidden border border-white/10 bg-white/[0.03]"
      whileHover={{ y: -6 }}
      onMouseMove={(event) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
        target.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      }}
    >
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
        <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(circle at var(--mx) var(--my), rgba(200,169,106,.22), transparent 34%)" }} />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-champagne">{project.category}</p>
        <h3 className="mt-2 font-serif text-3xl text-ivory">{project.title}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ivory/45">{project.location}</p>
        <p className="mt-3 max-w-md translate-y-3 text-sm leading-6 text-ivory/[0.62] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {project.description}
        </p>
        <button className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ivory/[0.78]">
          View Details <ArrowUpRight className="size-4" />
        </button>
      </div>
    </motion.article>
  );
}
