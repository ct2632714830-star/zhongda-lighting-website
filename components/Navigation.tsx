"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useI18n } from "@/components/LanguageProvider";
import { assetPaths, homeContent, navItems } from "@/lib/zd-home-content";
import type { Locale } from "@/lib/i18n";

const navLabels = {
  home: { en: "Home", zh: "首页", vi: "Trang chủ", ar: "الرئيسية" },
  collections: { en: "Collections", zh: "系列", vi: "Bộ sưu tập", ar: "المجموعات" },
  projects: { en: "Projects", zh: "项目", vi: "Dự án", ar: "المشاريع" },
  bespoke: { en: "Bespoke", zh: "定制", vi: "Tùy chỉnh", ar: "حسب الطلب" },
  about: { en: "About", zh: "关于", vi: "Giới thiệu", ar: "من نحن" },
  contact: { en: "Contact", zh: "联系", vi: "Liên hệ", ar: "تواصل" }
} satisfies Record<(typeof navItems)[number][0], Record<Locale, string>>;

const pageNavItems = [
  {
    href: "/production-workshop",
    label: {
      en: "Production & Workshop",
      zh: "生产工艺和车间",
      vi: "Sản xuất & Xưởng",
      ar: "الإنتاج والورشة"
    }
  },
  {
    href: "/#company-address",
    label: {
      en: "Company Address & Business Registration Information",
      zh: "公司地址与工商登记信息",
      vi: "Địa chỉ công ty & thông tin đăng ký kinh doanh",
      ar: "عنوان الشركة ومعلومات السجل التجاري"
    }
  },
  {
    href: "/company-culture",
    label: {
      en: "A Letter of Gratitude",
      zh: "感谢信",
      vi: "Thư cảm ơn",
      ar: "رسالة شكر"
    }
  }
] satisfies Array<{ href: string; label: Record<Locale, string> }>;

export function Navigation() {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled || open
          ? "border-b border-black/10 bg-white/70 shadow-[0_18px_60px_rgba(15,15,15,.08)] backdrop-blur-2xl"
          : "border-b border-transparent bg-white/5 backdrop-blur-sm"
      }`}
    >
      <nav className="container-lux flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,.10)]">
            <Image src={assetPaths.logo} alt="Zhongda Lighting logo" fill sizes="44px" className="object-cover" priority />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-semibold tracking-[-0.02em] text-zinc-950 md:text-base">Zhongda Lighting</span>
            <span className="mt-1 hidden text-[10px] uppercase tracking-[0.24em] text-zinc-500 sm:block">Bespoke Studio</span>
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 lg:flex xl:gap-5">
          {navItems.map(([id]) => (
            <Link key={id} href={`/#${id}`} className="whitespace-nowrap text-xs text-zinc-600 transition hover:text-zinc-950 xl:text-sm">
              {navLabels[id][locale]}
            </Link>
          ))}
          {pageNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="max-w-44 text-center text-xs leading-tight text-zinc-600 transition hover:text-zinc-950 xl:max-w-56 xl:text-sm"
            >
              {item.label[locale]}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/#contact"
            className="shine-button rounded-full border border-black/10 bg-zinc-950 px-5 py-2.5 text-sm text-white shadow-[0_12px_34px_rgba(0,0,0,.16)]"
          >
            {homeContent[locale].footer.inquiry}
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-zinc-950 backdrop-blur-xl"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-[60] isolate text-zinc-950 lg:hidden" style={{ backgroundColor: "#fff" }}>
          <div className="flex h-16 items-center justify-between border-b border-zinc-200 px-5">
            <div className="flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,.10)]">
                <Image src={assetPaths.logo} alt="Zhongda Lighting logo" fill sizes="40px" className="object-cover" priority />
              </span>
              <span>
                <span className="block text-sm font-semibold text-zinc-950">Zhongda Lighting</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-zinc-500">Bespoke Studio</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-950"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="h-[calc(100svh-4rem)] overflow-y-auto px-5 py-5">
            <div className="divide-y divide-zinc-200 rounded-[1.5rem] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(20,20,20,.08)]">
              {navItems.map(([id]) => (
                <Link
                  key={id}
                  href={`/#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center px-5 py-4 text-[clamp(1.25rem,6vw,1.9rem)] font-semibold leading-tight tracking-[-0.03em] text-zinc-950"
                >
                  {navLabels[id][locale]}
                </Link>
              ))}
              {pageNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center px-5 py-4 text-[clamp(1.05rem,5vw,1.5rem)] font-semibold leading-tight tracking-[-0.025em] text-zinc-950"
                >
                  {item.label[locale]}
                </Link>
              ))}
            </div>

            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-5 flex h-12 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white shadow-[0_18px_50px_rgba(0,0,0,.18)]"
            >
              {homeContent[locale].footer.inquiry}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
