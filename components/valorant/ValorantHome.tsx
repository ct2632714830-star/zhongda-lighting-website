"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
  Monitor,
  MousePointer2,
  Play,
  Send,
  Video,
  Volume2
} from "lucide-react";

const player = {
  id: "crisistb7#4719",
  title: "Player Portfolio",
  subtitle: "Valorant Personal Website",
  line: "Precision, rhythm, and identity in one personal space.",
  portrait: "/valorant/crisistb7-hero.mp4"
};

const lifeImages = [
  {
    title: "City Walk",
    label: "城市生活",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Desk Ritual",
    label: "桌搭",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Coffee",
    label: "咖啡",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Travel",
    label: "旅行",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Training",
    label: "健身",
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  }
];

const performanceStats = [
  { label: "Rank", value: 3, suffix: " 神话", note: "当前竞技段位" },
  { label: "Win Rate", value: 67, suffix: "%", note: "近 20 场胜率" },
  { label: "KDA", value: 1.38, suffix: "", note: "稳定战损表现", decimals: 2 },
  { label: "Headshot Rate", value: 31, suffix: "%", note: "爆头命中率" },
  { label: "Average Combat Score", value: 248, suffix: "", note: "平均战斗评分" },
  { label: "Favorite Role", valueText: "Duelist", note: "偏好位置" }
];

const agents = [
  {
    name: "Jett",
    cn: "捷风",
    role: "Duelist",
    scene: "Entry Frag",
    mastery: 95,
    desc: "高速进点，制造第一接触优势。",
    img: "https://images.unsplash.com/photo-1614851099511-773084f6911d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Reyna",
    cn: "蕾娜",
    role: "Duelist",
    scene: "Clutch",
    mastery: 91,
    desc: "残局单点压迫，依靠对枪节奏收割。",
    img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Sova",
    cn: "猎枭",
    role: "Initiator",
    scene: "Info Control",
    mastery: 88,
    desc: "信息控制与回防判断更清晰。",
    img: "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Killjoy",
    cn: "奇乐",
    role: "Sentinel",
    scene: "Site Control",
    mastery: 84,
    desc: "站点控制，延缓推进并保护节奏。",
    img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
  }
];

const crosshairCode = "0;s;1;P;c;5;o;1;d;1;z;3;0b;0;1b;0";

const setupItems = [
  {
    name: "Logitech G Pro X Superlight",
    type: "Mouse 鼠标",
    reason: "轻量、稳定，适合低阻力快速拉枪。",
    spec: "800 DPI / 1000 Hz",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Wooting 60HE",
    type: "Keyboard 键盘",
    reason: "触发行程精准，移动急停更干净。",
    spec: "Rapid Trigger / 60%",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Zowie XL2566K",
    type: "Monitor 显示器",
    reason: "高刷新与低延迟，保留每一次peek细节。",
    spec: "360 Hz / 24.5 in",
    img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Artisan Zero",
    type: "Mousepad 鼠标垫",
    reason: "控制与滑动平衡，适合长时间训练。",
    spec: "XL / Soft",
    img: "https://images.unsplash.com/photo-1616627451515-cbc80e47cce1?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "SteelSeries Arctis Nova Pro",
    type: "Headset 耳机",
    reason: "听位清晰，声音层次不压迫。",
    spec: "Wireless / ANC",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Custom PC",
    type: "PC Specs 电脑配置",
    reason: "稳定帧率是竞技体验的底线。",
    spec: "RTX 4080 / i7 / 32GB",
    img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80"
  }
];

const highlights = [
  { title: "Clean Entry on Ascent", map: "亚海悬城", agent: "Jett", src: "/valorant/crisistb7-hero.mp4" },
  { title: "Late Round Discipline", map: "隐世修所", agent: "Reyna", src: "/valorant/crisistb7-hero.mp4" },
  { title: "Operator First Pick", map: "源工重镇", agent: "Jett", src: "/valorant/crisistb7-hero.mp4" }
];

const contacts = [
  { label: "WhatsApp", href: "https://wa.me/8613800000000" },
  { label: "WeChat", href: "weixin://" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "Bilibili", href: "https://www.bilibili.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
  { label: "Discord", href: "https://discord.com/" },
  { label: "Email", href: "mailto:crisistb7@example.com" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 }
};

export function ValorantHome() {
  const [activeVideo, setActiveVideo] = useState<(typeof highlights)[number] | null>(null);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f5f2] text-[#0d0d0e] selection:bg-black selection:text-white">
      <HeroSection />
      <PersonalLifeSection />
      <PerformanceSection />
      <AgentPoolSection />
      <CrosshairCodeSection />
      <SetupSection />
      <HighlightsSection onOpen={setActiveVideo} />
      <ContactSection />
      <VideoModal activeVideo={activeVideo} onClose={() => setActiveVideo(null)} />
    </main>
  );
}

function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22 });
  const videoX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const videoY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#090909] text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <motion.video
        style={{ x: videoX, y: videoY }}
        className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[70%_center]"
        src={player.portrait}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.58)_38%,rgba(0,0,0,0.16)_68%,rgba(0,0,0,0.42)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(0,0,0,0)_46%,rgba(0,0,0,0.72)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-[min(100%-32px,1240px)] items-center py-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.34em] text-white/60">
            {player.title}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-8 text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.84] tracking-normal"
          >
            {player.id}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 text-sm uppercase tracking-[0.28em] text-white/55">
            {player.subtitle}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-7 max-w-xl text-xl leading-8 text-white/82 sm:text-2xl sm:leading-10">
            {player.line}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
            <MinimalButton href="#profile">View Profile</MinimalButton>
            <MinimalButton href="#highlights" tone="light">
              Watch Highlights
            </MinimalButton>
            <MinimalButton href="#contact" tone="outline">
              Contact Me
            </MinimalButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PersonalLifeSection() {
  return (
    <SectionShell
      id="life"
      eyebrow="About / Personal Life"
      title="Beyond the match, a lifestyle built with focus."
      intro="Not only a player, but a personal brand. 日常、训练、城市与审美共同构成玩家的长期识别度。"
    >
      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <ImageTile item={lifeImages[0]} large />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {lifeImages.slice(1, 3).map((item) => (
            <ImageTile key={item.title} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {lifeImages.slice(3).map((item) => (
          <ImageTile key={item.title} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}

function PerformanceSection() {
  return (
    <SectionShell
      id="profile"
      eyebrow="Performance Data"
      title="Numbers, reduced to what matters."
      intro="用最少的参数表达竞技状态，不做复杂 HUD，只保留有价值的判断信息。"
    >
      <div className="grid gap-px overflow-hidden rounded-[28px] bg-black/10 md:grid-cols-2 lg:grid-cols-3">
        {performanceStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </SectionShell>
  );
}

function AgentPoolSection() {
  return (
    <SectionShell
      id="agents"
      eyebrow="Agent Pool"
      title="A restrained pool for decisive rounds."
      intro="每个英雄像一个产品能力点，而不是技能面板。清晰、克制、可替换。"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {agents.map((agent) => (
          <AgentCard key={agent.name} agent={agent} />
        ))}
      </div>
    </SectionShell>
  );
}

function CrosshairCodeSection() {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await navigator.clipboard.writeText(crosshairCode);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <SectionShell
      id="crosshair"
      eyebrow="Crosshair Code"
      title="A small interface for a precise habit."
      intro="像开发者代码块一样展示准星，让复制和复用都保持干净。"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-6 rounded-[32px] bg-[#111] p-5 text-white shadow-[0_30px_90px_rgba(0,0,0,0.22)] md:grid-cols-[0.75fr_1.25fr]"
      >
        <div className="flex min-h-72 items-center justify-center rounded-[24px] bg-[#050505]">
          <div className="relative h-28 w-28">
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/65" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/65" />
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#80bfff]" />
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-white/45">Preview / 准星预览</p>
            <code className="mt-8 block break-all font-mono text-xl leading-9 text-white/88">{crosshairCode}</code>
          </div>
          <button
            onClick={copyCode}
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:bg-white/88"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy Code"}
          </button>
        </div>
      </motion.div>
    </SectionShell>
  );
}

function SetupSection() {
  return (
    <SectionShell
      id="setup"
      eyebrow="Setup"
      title="Objects chosen for concentration."
      intro="专业玩家桌搭不需要吵闹。材质、参数和使用理由本身就是风格。"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {setupItems.map((item) => (
          <SetupCard key={item.name} item={item} />
        ))}
      </div>
    </SectionShell>
  );
}

function HighlightsSection({ onOpen }: { onOpen: (item: (typeof highlights)[number]) => void }) {
  return (
    <SectionShell
      id="highlights"
      eyebrow="Highlights"
      title="A quiet gallery for loud moments."
      intro="视频集锦以作品集方式呈现，点击后用极简弹窗播放。"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {highlights.map((item) => (
          <motion.button
            key={item.title}
            onClick={() => onOpen(item)}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-[28px] bg-white text-left shadow-sm"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <video className="h-full w-full object-cover opacity-78" src={item.src} muted playsInline />
              <span className="absolute inset-0 bg-black/22 transition group-hover:bg-black/10" />
              <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-black">
                <Play className="h-4 w-4 fill-current" />
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-medium tracking-normal">{item.title}</h3>
              <p className="mt-3 text-sm text-black/52">
                {item.map} / {item.agent}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#090909] px-4 py-28 text-white sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto w-[min(100%,1180px)]"
      >
        <p className="text-xs uppercase tracking-[0.32em] text-white/42">Contact</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <h2 className="text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-normal">
            Let your gameplay become your personal brand.
          </h2>
          <div>
            <p className="max-w-lg text-lg leading-8 text-white/62">
              Build your own personal player website. 合作、剪辑、主页搭建与内容呈现都可以从这里开始。
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {contacts.map((contact) => (
                <ContactButton key={contact.label} {...contact} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({
  label,
  value,
  valueText,
  suffix,
  note,
  decimals = 0
}: {
  label: string;
  value?: number;
  valueText?: string;
  suffix?: string;
  note: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || value === undefined) return;
    const targetValue = value;
    const start = performance.now();
    const duration = 1000;
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(targetValue * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#f9f9f7] p-8 md:p-10"
    >
      <p className="text-xs uppercase tracking-[0.26em] text-black/42">{label}</p>
      <p className="mt-8 text-5xl font-semibold tracking-normal text-black md:text-6xl">
        {valueText ?? display.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-5 text-sm leading-6 text-black/50">{note}</p>
    </motion.div>
  );
}

function AgentCard({ agent }: { agent: (typeof agents)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[30px] bg-white shadow-sm transition"
    >
      <div className="aspect-[4/5] overflow-hidden bg-[#e8e8e3]">
        <img
          className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"
          src={agent.img}
          alt={`${agent.name} visual`}
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-medium tracking-normal">{agent.name}</h3>
            <p className="mt-1 text-sm text-black/45">{agent.cn} / {agent.role}</p>
          </div>
          <span className="text-sm text-black/50">{agent.mastery}%</span>
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.22em] text-black/38">{agent.scene}</p>
        <p className="mt-4 text-sm leading-6 text-black/58 opacity-0 transition duration-300 group-hover:opacity-100">
          {agent.desc}
        </p>
      </div>
    </motion.article>
  );
}

function SetupCard({ item }: { item: (typeof setupItems)[number] }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group rounded-[30px] bg-white p-5 shadow-sm"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[24px] bg-[#eeeeea]">
        <img
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:rotate-[0.8deg]"
          src={item.img}
          alt={item.name}
        />
      </div>
      <div className="p-3 pt-6">
        <p className="text-xs uppercase tracking-[0.24em] text-black/38">{item.type}</p>
        <h3 className="mt-4 text-2xl font-medium tracking-normal">{item.name}</h3>
        <p className="mt-4 text-sm leading-6 text-black/58">{item.reason}</p>
        <p className="mt-6 text-sm text-black/42">{item.spec}</p>
      </div>
    </motion.article>
  );
}

function ContactButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group inline-flex items-center gap-2 rounded-full border border-white/14 px-4 py-2 text-sm text-white/72 transition hover:-translate-y-0.5 hover:border-white/36 hover:text-white"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-45 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
    </a>
  );
}

function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="px-4 py-24 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        className="mx-auto w-[min(100%,1180px)]"
      >
        <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.32em] text-black/42">
          {eyebrow}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-5 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <h2 className="max-w-4xl text-[clamp(2.7rem,6.2vw,6.4rem)] font-semibold leading-[0.92] tracking-normal">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-8 text-black/56">{intro}</p>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-14">
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}

function ImageTile({ item, large = false }: { item: (typeof lifeImages)[number]; large?: boolean }) {
  return (
    <motion.figure
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-[32px] bg-[#e8e8e4] ${large ? "min-h-[560px]" : "min-h-[272px]"}`}
    >
      <img
        src={item.src}
        alt={item.label}
        className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/56 to-transparent p-6 text-white">
        <p className="text-xs uppercase tracking-[0.24em] text-white/62">{item.title}</p>
        <p className="mt-2 text-2xl font-medium tracking-normal">{item.label}</p>
      </figcaption>
    </motion.figure>
  );
}

function MinimalButton({
  href,
  tone = "dark",
  children
}: {
  href: string;
  tone?: "dark" | "light" | "outline";
  children: React.ReactNode;
}) {
  const toneClass =
    tone === "light"
      ? "bg-white/12 text-white border-white/18 hover:bg-white hover:text-black"
      : tone === "outline"
        ? "border-white/24 text-white/78 hover:border-white/60 hover:text-white"
        : "bg-white text-black border-white hover:bg-white/82";

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center rounded-full border px-5 text-sm font-medium transition hover:-translate-y-0.5 ${toneClass}`}
    >
      {children}
    </a>
  );
}

function VideoModal({
  activeVideo,
  onClose
}: {
  activeVideo: (typeof highlights)[number] | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {activeVideo ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/82 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-[min(100%,1040px)] overflow-hidden rounded-[30px] bg-black"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <video src={activeVideo.src} controls autoPlay className="aspect-video w-full object-cover" />
            <div className="flex items-center justify-between gap-6 p-5 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">
                  {activeVideo.map} / {activeVideo.agent}
                </p>
                <h3 className="mt-2 text-2xl font-medium">{activeVideo.title}</h3>
              </div>
              <button onClick={onClose} className="rounded-full border border-white/16 px-4 py-2 text-sm text-white/68 hover:text-white">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
