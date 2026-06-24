"use client";

import { motion } from "framer-motion";

export function AmbientLightFields() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-[18%] top-[8%] h-[44vh] w-[70vw] rounded-full bg-champagne/10 blur-3xl"
        animate={{ x: [0, 70, 0], y: [0, -36, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[24%] bottom-[8%] h-[48vh] w-[78vw] rounded-full bg-white/70 blur-3xl"
        animate={{ x: [0, -60, 0], y: [0, 42, 0], scale: [1, 0.94, 1] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
