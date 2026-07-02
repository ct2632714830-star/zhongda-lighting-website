"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Copy,
  Crosshair,
  Mail,
  MessageCircle,
  Monitor,
  MousePointer2,
  Shield,
  Target,
  UserRound
} from "lucide-react";
import { agents, contacts, crosshair, performance, setupItems } from "@/components/profile/profileData";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
};

const sectionMotion = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-80px" },
  variants: { show: { transition: { staggerChildren: 0.06 } } }
};

export function ProfilePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f4f6f8] text-[#121922]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_14%,rgba(197,206,216,0.28),transparent_30%),linear-gradient(180deg,#fbfcfd_0%,#eef2f5_100%)]" />
      <div className="relative mx-auto w-[min(100%-24px,1440px)] py-6 sm:w-[min(100%-56px,1440px)]">
        <TopNav />
        <ProfileHero />
        <AboutBlock />
        <AgentPool />
        <CrosshairBlock />
        <SetupBlock />
        <PerformanceBlock />
        <ContactBlock />
        <footer className="flex items-center justify-between px-2 py-5 text-xs text-black/35">
          <span className="font-semibold">V</span>
          <span>© 2024 crisistb7#4719. All rights reserved.</span>
          <span className="hidden sm:block">Built with focus. Designed for performance.</span>
        </footer>
      </div>
    </main>
  );
}

function TopNav() {
  const links = [
    ["Profile", "#profile"],
    ["Stats", "#stats"],
    ["Setup", "#setup"],
    ["Contact", "#contact"]
  ];

  return (
    <header className="mb-7 flex h-10 items-center justify-between">
      <a href="/" className="flex items-center gap-7">
        <span className="relative h-8 w-8">
          <span className="absolute left-1 top-1 h-6 w-3 skew-x-[-18deg] bg-[#111821]" />
          <span className="absolute right-1 top-1 h-6 w-3 skew-x-[18deg] bg-[#111821]" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.7em] text-[#111821]">Valorant</span>
      </a>
      <nav className="hidden items-center gap-14 md:flex">
        {links.map(([label, href], index) => (
          <a key={label} href={href} className="relative text-xs font-medium uppercase tracking-[0.18em] text-black/58 transition hover:text-black">
            {label}
            {index === 0 ? <span className="absolute left-1/2 top-6 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#1267c8]" /> : null}
          </a>
        ))}
      </nav>
    </header>
  );
}

function ProfileHero() {
  return (
    <section id="profile" className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/55 shadow-[0_24px_70px_rgba(25,34,44,0.13)]"
      >
        <img
          src="/videos/hero-4k-poster.jpg"
          alt="crisistb7#4719 profile visual"
          className="aspect-[4/3.65] h-full w-full object-cover object-[53%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_64%,rgba(17,24,33,0.18)_100%)]" />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.12 } } }}
        className="relative py-4"
      >
        <div className="pointer-events-none absolute -right-10 -top-8 hidden text-[24rem] font-black leading-none text-black/[0.025] lg:block">
          V
        </div>
        <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1267c8]">
          Player Profile
        </motion.p>
        <motion.h1 variants={fadeUp} className="mt-6 text-[clamp(3.8rem,7vw,6.5rem)] font-semibold leading-none tracking-normal">
          crisistb7<span className="text-black/42">#4719</span>
        </motion.h1>
        <motion.div variants={fadeUp} className="mt-7 grid gap-4 text-lg text-black/64">
          <p className="flex items-center gap-4"><Target className="h-5 w-5" /> Shenzhen, China</p>
          <p className="flex items-center gap-4"><Shield className="h-5 w-5" /> Valorant</p>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-6 max-w-lg text-xl leading-9 text-black/50">
          Focused on precision, rhythm, and personal style.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-6 h-px w-10 bg-[#2fb5e8]" />
        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
          <PillButton href="#crosshair" dark icon={Crosshair}>View Crosshair</PillButton>
          <PillButton href="#setup" icon={Monitor}>View Setup</PillButton>
          <PillButton href="#contact" icon={MessageCircle}>Contact</PillButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function AboutBlock() {
  return (
    <motion.section {...sectionMotion} className="mt-7 rounded-[22px] border border-white/72 bg-white/58 p-7 shadow-[0_18px_58px_rgba(28,38,48,0.07)] backdrop-blur-xl">
      <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1267c8]">About</motion.p>
      <motion.div variants={fadeUp} className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.38fr] lg:items-center">
        <p className="border-l border-black/22 pl-6 text-base leading-8 text-black/56">
          Valorant is more than a game for me. It is a language of focus and expression. I care about the details others overlook:
          crosshair placement, movement rhythm, clean mechanics, and a setup that feels like an extension of myself.
        </p>
        <p className="hidden text-right text-5xl font-semibold uppercase leading-[0.92] text-black/[0.035] lg:block">
          Focus<br />Precision<br />Identity
        </p>
      </motion.div>
    </motion.section>
  );
}

function AgentPool() {
  return (
    <motion.section {...sectionMotion} className="mt-5 rounded-[22px] border border-white/72 bg-white/50 p-7 shadow-[0_18px_58px_rgba(28,38,48,0.07)] backdrop-blur-xl">
      <motion.div variants={fadeUp} className="flex items-center justify-between gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1267c8]">Agent Pool</p>
        <p className="hidden text-xs text-black/42 sm:block">Based on total playtime</p>
      </motion.div>
      <motion.div variants={fadeUp} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {agents.map((agent, index) => (
          <motion.article
            key={agent.name}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[18px] border border-black/8 bg-white/70 shadow-[0_12px_34px_rgba(28,38,48,0.08)]"
          >
            <div className="relative h-32 bg-[linear-gradient(135deg,#f8fafb,#dbe4ec)]">
              <div className={`absolute inset-y-4 right-3 w-28 rounded-[18px] ${agentGradient(index)}`} />
              <span className="absolute left-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/62 text-xs font-bold text-[#1267c8]">
                {agent.name[0]}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{agent.name}</h3>
              <p className="text-sm text-black/46">{agent.role}</p>
              <p className="mt-4 text-3xl font-semibold text-[#1267c8]">{agent.mastery}%</p>
              <p className="text-xs text-black/40">{agent.style}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function CrosshairBlock() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(crosshair.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <motion.section {...sectionMotion} id="crosshair" className="mt-5 rounded-[22px] border border-white/72 bg-white/50 p-7 shadow-[0_18px_58px_rgba(28,38,48,0.07)] backdrop-blur-xl">
      <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1267c8]">Crosshair Settings</motion.p>
      <motion.div variants={fadeUp} className="mt-5 grid gap-4 lg:grid-cols-[260px_1fr]">
        <div className="grid min-h-28 place-items-center rounded-[18px] bg-[#111821]">
          <div className="relative h-16 w-16">
            <span className="absolute left-1/2 top-0 h-5 w-1 -translate-x-1/2 rounded-full bg-[#48f6ff]" />
            <span className="absolute bottom-0 left-1/2 h-5 w-1 -translate-x-1/2 rounded-full bg-[#48f6ff]" />
            <span className="absolute left-0 top-1/2 h-1 w-5 -translate-y-1/2 rounded-full bg-[#48f6ff]" />
            <span className="absolute right-0 top-1/2 h-1 w-5 -translate-y-1/2 rounded-full bg-[#48f6ff]" />
          </div>
        </div>
        <div className="flex flex-col gap-5 rounded-[18px] bg-[#111821] p-6 text-white lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/42">Code</p>
            <code className="mt-3 block break-all font-mono text-lg text-white/86">{crosshair.code}</code>
          </div>
          <button onClick={copyCode} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/12 bg-white/10 px-6 text-sm transition hover:-translate-y-1 hover:bg-white/16">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy Code"}
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}

function SetupBlock() {
  return (
    <motion.section {...sectionMotion} id="setup" className="mt-5 rounded-[22px] border border-white/72 bg-white/50 p-7 shadow-[0_18px_58px_rgba(28,38,48,0.07)] backdrop-blur-xl">
      <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1267c8]">Setup</motion.p>
      <motion.div variants={fadeUp} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {setupItems.map((item, index) => (
          <motion.article key={item.name} whileHover={{ y: -6 }} className="rounded-[18px] border border-black/8 bg-white/72 p-4 shadow-[0_12px_34px_rgba(28,38,48,0.08)]">
            <div className="grid h-28 place-items-center rounded-[16px] bg-[linear-gradient(145deg,#f8fafb,#dfe6ec)]">
              <div className={`h-16 w-20 rounded-[18px] ${deviceGradient(index)}`} />
            </div>
            <p className="mt-4 text-xs text-black/42">{item.type}</p>
            <h3 className="min-h-11 text-base font-semibold leading-5">{item.name}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.specs.map((spec) => (
                <span key={spec} className="rounded-full border border-black/8 bg-white/60 px-3 py-1 text-xs text-black/48">{spec}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function PerformanceBlock() {
  return (
    <motion.section {...sectionMotion} id="stats" className="mt-5 rounded-[22px] border border-white/72 bg-white/50 p-7 shadow-[0_18px_58px_rgba(28,38,48,0.07)] backdrop-blur-xl">
      <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1267c8]">Performance Data</motion.p>
      <motion.div variants={fadeUp} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {performance.map((stat) => (
          <StatTile key={stat.label} {...stat} />
        ))}
      </motion.div>
    </motion.section>
  );
}

function StatTile({ label, value, suffix = "", note, decimals = 0 }: { label: string; value: string | number; suffix?: string; note: string; decimals?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  const isNumber = typeof value === "number";

  useEffect(() => {
    if (!inView || !isNumber) return;
    const start = performanceNow();
    let frame = 0;
    const tick = () => {
      const progress = Math.min((performanceNow() - start) / 800, 1);
      setDisplay((value as number) * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumber, value]);

  return (
    <motion.article ref={ref} whileHover={{ y: -6 }} className="rounded-[18px] border border-black/8 bg-white/72 p-5 text-center shadow-[0_12px_34px_rgba(28,38,48,0.08)]">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/44">{label}</p>
      <p className="mt-3 text-3xl font-semibold">{isNumber ? display.toFixed(decimals) : value}{suffix}</p>
      <p className="mt-1 text-xs text-black/42">{note}</p>
    </motion.article>
  );
}

function ContactBlock() {
  return (
    <motion.section {...sectionMotion} id="contact" className="mt-5 rounded-[22px] border border-white/72 bg-white/50 p-7 shadow-[0_18px_58px_rgba(28,38,48,0.07)] backdrop-blur-xl">
      <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1267c8]">Contact</motion.p>
      <motion.div variants={fadeUp} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {contacts.map((contact) => (
          <a key={contact} href={contact === "Email" ? "mailto:crisistb7@example.com" : "#"} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black/9 bg-white/62 text-sm font-medium transition hover:-translate-y-1 hover:bg-white">
            {contact === "Email" ? <Mail className="h-4 w-4" /> : <UserRound className="h-4 w-4" />}
            {contact}
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
}

function PillButton({ href, children, icon: Icon, dark = false }: { href: string; children: React.ReactNode; icon: typeof Crosshair; dark?: boolean }) {
  return (
    <a
      href={href}
      className={[
        "inline-flex min-h-14 items-center justify-center gap-3 rounded-full border px-7 text-sm font-medium transition hover:-translate-y-1",
        dark
          ? "border-[#111821] bg-[#111821] text-white shadow-[0_16px_36px_rgba(17,24,33,0.22)]"
          : "border-black/10 bg-white/54 text-[#111821] shadow-[0_12px_32px_rgba(28,38,48,0.08)]"
      ].join(" ")}
    >
      <Icon className="h-4 w-4" />
      {children}
    </a>
  );
}

function agentGradient(index: number) {
  const variants = [
    "bg-[linear-gradient(135deg,#dceefa,#7da6c4)]",
    "bg-[linear-gradient(135deg,#ead7ee,#5b263f)]",
    "bg-[linear-gradient(135deg,#e7edf1,#b9a487)]",
    "bg-[linear-gradient(135deg,#f6e4a8,#57936e)]",
    "bg-[linear-gradient(135deg,#d8e0ef,#24324a)]"
  ];
  return variants[index % variants.length];
}

function deviceGradient(index: number) {
  const variants = [
    "bg-[#111821]",
    "bg-[linear-gradient(135deg,#1b2128,#07090b)]",
    "bg-[linear-gradient(135deg,#d7dde2,#111821)]",
    "bg-[linear-gradient(135deg,#1a1f26,#641f2b)]",
    "bg-[linear-gradient(135deg,#2b3035,#0f1418)]",
    "bg-[linear-gradient(135deg,#1a1a1a,#464646)]"
  ];
  return variants[index % variants.length];
}

function performanceNow() {
  return window.performance.now();
}
