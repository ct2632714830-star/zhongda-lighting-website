"use client";

import { motion } from "framer-motion";

const actions = [
  { label: "View Profile", href: "#profile" },
  { label: "Watch Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" }
];

type CTAButtonsProps = {
  show: boolean;
  compact?: boolean;
};

export function CTAButtons({ show, compact = false }: CTAButtonsProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 30 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.45 }}
      className={[
        "pointer-events-auto",
        compact ? "grid grid-cols-3 gap-2" : "flex items-center gap-3"
      ].join(" ")}
      aria-label="Hero actions"
    >
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 bg-white/14 px-5 text-center text-xs font-medium text-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-[18px] transition duration-300 hover:-translate-y-1 hover:bg-white/22 sm:text-sm"
        >
          {action.label}
        </a>
      ))}
    </motion.nav>
  );
}
