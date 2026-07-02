"use client";

import { motion } from "framer-motion";

type HeaderOverlayProps = {
  show: boolean;
  playerId: string;
  cityCn: string;
  cityEn: string;
};

export function HeaderOverlay({ show, playerId, cityCn, cityEn }: HeaderOverlayProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.8 }}
      className="absolute left-0 right-0 top-0 flex items-start justify-between px-5 pt-6 text-[#17202a] sm:px-8 md:px-12 lg:px-16"
    >
      <p className="font-serif text-[clamp(1.55rem,3.2vw,2.8rem)] italic leading-none tracking-normal text-[#141a20]/88">
        {playerId}
      </p>

      <div className="text-right">
        <p className="font-serif text-[clamp(1.45rem,2.7vw,2.65rem)] leading-none text-[#46515b]/58">
          {cityCn}
        </p>
        <p className="mt-1 font-serif text-[clamp(2.5rem,6.2vw,5.6rem)] italic leading-[0.82] tracking-normal text-[#252b31]/42">
          {cityEn}
        </p>
      </div>
    </motion.header>
  );
}
