import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MagneticGlow } from "@/components/Motion";

export function LuxuryButton({
  href,
  children,
  variant = "primary",
  tone = "dark"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  const primaryClass = isLight
    ? "border-champagne/80 bg-champagne/[0.18] text-ink shadow-glow"
    : "border-champagne/70 bg-champagne/[0.12] text-ivory shadow-glow";
  const ghostClass = isLight
    ? "border-ink/[0.18] bg-ink/[0.035] text-ink/75 hover:border-champagne/70"
    : "border-white/20 bg-white/5 text-ivory/80 hover:border-champagne/60";

  return (
    <MagneticGlow>
      <Link
        href={href}
        className={`gold-button inline-flex h-12 items-center gap-3 border px-6 text-xs uppercase tracking-[0.22em] transition ${
          variant === "primary" ? primaryClass : ghostClass
        }`}
      >
        <span className="relative z-10">{children}</span>
        <ArrowUpRight className="relative z-10 size-4" />
      </Link>
    </MagneticGlow>
  );
}
