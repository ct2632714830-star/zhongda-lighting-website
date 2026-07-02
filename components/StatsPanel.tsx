"use client";

import { motion } from "framer-motion";

type StatsPanelData = {
  winRate: string;
  kd: string;
  hs: string;
  acs: string;
  mvp: string;
  lastMatch: string;
  updated: string;
};

type StatsPanelProps = {
  show: boolean;
  data: StatsPanelData;
  compact?: boolean;
};

const statRows = [
  { label: "K/D", key: "kd" },
  { label: "HS%", key: "hs" },
  { label: "ACS", key: "acs" },
  { label: "MVP", key: "mvp" }
] as const;

export function StatsPanel({ show, data, compact = false }: StatsPanelProps) {
  if (compact) {
    return (
      <motion.aside
        initial={{ opacity: 0, x: 80 }}
        animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="pointer-events-auto rounded-[22px] border border-white/25 bg-white/10 p-4 text-[#f6f8fa] shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-[18px]"
      >
        <div className="flex items-center gap-3 text-[#1e2933]">
          <span className="h-2 w-2 rounded-full bg-[#2e3a44]/62" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d2731]/74">LIVE STATS</p>
        </div>

        <div className="mt-3 grid grid-cols-[1.05fr_1fr] gap-2">
          <div className="rounded-xl border border-white/18 bg-[#344251]/24 p-3 text-white shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/72">WIN RATE</p>
            <div className="mt-1 flex items-end justify-between gap-2">
              <p className="text-3xl font-light tracking-normal text-white">{data.winRate}</p>
              <MiniLineChart />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {statRows.map((item) => (
              <CompactStat key={item.key} label={item.label} value={data[item.key]} />
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between rounded-xl border border-white/18 bg-[#344251]/20 px-3 py-2 text-white">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/58">LAST MATCH</p>
            <p className="mt-1 text-lg font-light tracking-normal">{data.lastMatch}</p>
          </div>
          <p className="text-right text-[9px] font-semibold uppercase tracking-[0.14em] text-white/42">{data.updated}</p>
        </div>
      </motion.aside>
    );
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: 80 }}
      animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
      transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
      className={[
        "pointer-events-auto border border-white/25 bg-white/10 text-[#f6f8fa] shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-[18px]",
        "h-[55vh] min-h-[460px] w-[min(22vw,320px)] min-w-[280px] rounded-[28px] p-6"
      ].join(" ")}
    >
      <div className="flex items-center gap-3 text-[#1e2933]">
        <span className="h-2 w-2 rounded-full bg-[#2e3a44]/62" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1d2731]/74">LIVE STATS</p>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="rounded-xl border border-white/18 bg-[#344251]/24 p-4 text-white shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/72">WIN RATE</p>
              <p className="mt-2 text-4xl font-light tracking-normal text-white">{data.winRate}</p>
            </div>
            <MiniLineChart />
          </div>
        </div>

        {statRows.map((item) => (
          <StatTile key={item.key} label={item.label} value={data[item.key]} />
        ))}
      </div>

      <div className="mt-5 border-t border-white/24 pt-5">
        <div className="rounded-xl border border-white/18 bg-[#344251]/20 p-4 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">LAST MATCH</p>
          <p className="mt-2 text-3xl font-light tracking-normal">{data.lastMatch}</p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/42">K / D / A</p>
        </div>
        <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f2933]/42">
          {data.updated}
        </p>
      </div>
    </motion.aside>
  );
}

function CompactStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/16 bg-[#344251]/22 px-3 py-2 text-white shadow-sm">
      <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/62">{label}</p>
      <p className="mt-1 text-lg font-light tracking-normal">{value}</p>
    </div>
  );
}

function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-14 items-center justify-between rounded-xl border border-white/16 bg-[#344251]/22 px-4 text-white shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">{label}</p>
      <p className="text-2xl font-light tracking-normal">{value}</p>
    </div>
  );
}

function MiniLineChart() {
  return (
    <svg className="mt-2 h-8 w-16 text-white/70 sm:mt-3 sm:h-12 sm:w-24" viewBox="0 0 96 48" fill="none" aria-hidden="true">
      <path
        d="M2 39L16 32L30 35L44 22L58 27L72 10L88 14L94 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="94" cy="6" r="3.5" fill="#8fc8ff" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}
