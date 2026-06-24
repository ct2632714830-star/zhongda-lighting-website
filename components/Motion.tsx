"use client";

import { motion } from "framer-motion";

export function FadeIn({
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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.19, 1, 0.22, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MagneticGlow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      onMouseMove={(event) => {
        const target = event.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        target.style.setProperty("--x", `${event.clientX - rect.left}px`);
        target.style.setProperty("--y", `${event.clientY - rect.top}px`);
      }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
