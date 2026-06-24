"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { assetPaths, homeContent, navItems } from "@/lib/zd-home-content";

export function Footer() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  return (
    <footer className="border-t border-black/10 bg-warmwhite py-12">
      <div className="container-lux flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full bg-white shadow-[0_10px_34px_rgba(0,0,0,.08)]">
              <Image src={assetPaths.logo} alt="Zhongda Lighting logo" fill sizes="48px" className="object-cover" />
            </span>
            <div>
              <p className="font-semibold tracking-[-0.02em] text-zinc-950">Zhongda Lighting</p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{t.footer.studio}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-zinc-500">{t.footer.intro}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
          {navItems.map(([id]) => (
            <Link key={id} href={`/#${id}`} className="transition hover:text-zinc-950">
              {t.nav[id]}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-lux mt-10 border-t border-black/10 pt-6">
        <div className="flex flex-col items-start gap-3 text-sm text-zinc-500">
          <p className="inline-flex items-center gap-2">
            <Instagram className="size-4 text-champagne" />
            <span>Instagram: zd_lighting</span>
          </p>
          <p className="inline-flex items-center gap-2">
            <Facebook className="size-4 text-champagne" />
            <span>Facebook: ZD Bespoke Lighting</span>
          </p>
        </div>
        <p className="mt-5 text-xs text-zinc-400">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
