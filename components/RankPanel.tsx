"use client";

import { motion } from "framer-motion";

type RankPanelData = {
  eyebrow: string;
  rankName: string;
  rr: string;
  region: string;
  peakRank: string;
  season: string;
};

type RankPanelProps = {
  show: boolean;
  data: RankPanelData;
  compact?: boolean;
};

export function RankPanel({ show, data, compact = false }: RankPanelProps) {
  if (compact) {
    return (
      <motion.aside
        initial={{ opacity: 0, x: -80 }}
        animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="pointer-events-auto rounded-[22px] border border-white/25 bg-white/10 p-4 text-[#1c2731] shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-[18px]"
      >
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#2e3a44]/62" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d2731]/74">{data.eyebrow}</p>
        </div>

        <div className="mt-3 grid grid-cols-[64px_1fr] items-center gap-4">
          <ImmortalEmblem size="sm" />
          <div>
            <h2 className="text-2xl font-semibold leading-none tracking-normal text-[#1b2630]">{data.rankName}</h2>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-[#26313b]/52">{data.rr}</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/25 pt-3">
          <MobileInfo label="REGION" value={data.region} />
          <MobileInfo label="PEAK" value={data.peakRank} />
          <MobileInfo label="SEASON" value={data.season} />
        </div>
      </motion.aside>
    );
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: -80 }}
      animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={[
        "pointer-events-auto border border-white/25 bg-white/10 text-[#1c2731] shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-[18px]",
        "h-[60vh] min-h-[500px] w-[min(22vw,320px)] min-w-[280px] rounded-[28px] p-7"
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#2e3a44]/62" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d2731]/74">{data.eyebrow}</p>
      </div>

      <div className="mt-6">
        <ImmortalEmblem size="lg" />

        <div className="text-center">
          <h2 className="text-[clamp(1.65rem,2.7vw,2.45rem)] font-semibold leading-none tracking-normal text-[#1b2630]">
            {data.rankName}
          </h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-[#26313b]/52">{data.rr}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-0 border-y border-white/28">
        <InfoRow label="REGION" value={data.region} />
        <InfoRow label="PEAK RANK" value={data.peakRank} />
        <InfoRow label="COMPETITIVE SEASON" value={data.season} last />
      </div>
    </motion.aside>
  );
}

function ImmortalEmblem({ size }: { size: "sm" | "lg" }) {
  const dimensions = size === "lg" ? "mx-auto h-40 w-40" : "h-16 w-16";

  return (
    <div className={`relative grid place-items-center ${dimensions}`} aria-hidden="true">
      <svg viewBox="0 0 180 180" className="h-full w-full overflow-visible drop-shadow-[0_18px_24px_rgba(42,53,64,0.16)]">
        <defs>
          <linearGradient id={`silver-${size}`} x1="34" y1="26" x2="146" y2="154" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fbfdff" />
            <stop offset="0.34" stopColor="#dce3e8" />
            <stop offset="0.68" stopColor="#6f7b84" />
            <stop offset="1" stopColor="#1f2b33" />
          </linearGradient>
          <linearGradient id={`dark-${size}`} x1="49" y1="37" x2="132" y2="142" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25313a" />
            <stop offset="0.28" stopColor="#55636d" />
            <stop offset="0.5" stopColor="#eef2f4" />
            <stop offset="0.72" stopColor="#43505a" />
            <stop offset="1" stopColor="#111920" />
          </linearGradient>
          <linearGradient id={`red-${size}`} x1="52" y1="36" x2="128" y2="148" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff9aa4" />
            <stop offset="0.22" stopColor="#f04d73" />
            <stop offset="0.56" stopColor="#be174e" />
            <stop offset="1" stopColor="#6e1230" />
          </linearGradient>
          <linearGradient id={`red-soft-${size}`} x1="61" y1="45" x2="119" y2="135" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff7f7" />
            <stop offset="0.34" stopColor="#ff7890" />
            <stop offset="1" stopColor="#9c1744" />
          </linearGradient>
        </defs>

        <g opacity="0.34" stroke="white" strokeWidth="1.1" fill="none">
          <path d="M90 10L170 90L90 170L10 90Z" />
          <path d="M90 26L154 90L90 154L26 90Z" />
          <path d="M90 40L140 90L90 140L40 90Z" />
          <path d="M28 90H152M90 28V152M44 44L136 136M136 44L44 136" opacity="0.55" />
          <circle cx="90" cy="90" r="58" opacity="0.22" />
        </g>

        <path d="M90 8L111 56L172 90L111 124L90 172L69 124L8 90L69 56Z" fill={`url(#silver-${size})`} />
        <path d="M90 20L105 67L158 90L105 113L90 160L75 113L22 90L75 67Z" fill={`url(#dark-${size})`} />

        <path d="M90 26L119 76L154 90L119 104L90 154L61 104L26 90L61 76Z" fill={`url(#red-${size})`} />
        <path d="M90 42L111 80L141 90L111 100L90 138L69 100L39 90L69 80Z" fill={`url(#red-soft-${size})`} />

        <path d="M90 26L104 80L90 92L76 80Z" fill="#f8fbfc" opacity="0.96" />
        <path d="M90 154L76 100L90 88L104 100Z" fill="#242f37" opacity="0.82" />
        <path d="M26 90L78 75L92 90L78 105Z" fill="#edf2f4" opacity="0.88" />
        <path d="M154 90L102 105L88 90L102 75Z" fill="#2b3740" opacity="0.82" />

        <path d="M90 55L104 82L130 90L104 98L90 125L76 98L50 90L76 82Z" fill="#f6f7f8" opacity="0.92" />
        <path d="M90 66L101 86L121 90L101 94L90 114L79 94L59 90L79 86Z" fill="#c91b50" opacity="0.82" />
        <path d="M90 26L119 76L154 90L119 104L90 154L61 104L26 90L61 76Z" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2.4" />
        <path d="M90 8L111 56L172 90L111 124L90 172L69 124L8 90L69 56Z" fill="none" stroke="rgba(31,43,51,0.24)" strokeWidth="1.6" />
      </svg>
    </div>
  );
}

function MobileInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#2b3641]/42">{label}</p>
      <p className="mt-1 truncate text-[11px] font-medium text-[#1d2731]/78">{value}</p>
    </div>
  );
}

function InfoRow({ label, value, last = false }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={["py-4", last ? "" : "border-b border-white/24"].join(" ")}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2b3641]/42">{label}</p>
      <p className="mt-2 text-sm font-medium tracking-normal text-[#1d2731]/78 sm:text-base">{value}</p>
    </div>
  );
}
