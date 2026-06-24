"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/components/LanguageProvider";
import { locales } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const active = locales.find((item) => item.code === locale) ?? locales[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-black/10 bg-white/55 px-3 text-xs font-medium text-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,.06)] backdrop-blur-xl transition hover:border-champagne/50 hover:text-zinc-950"
        aria-label="Change language"
      >
        {active.short}
        <ChevronDown className={`size-3 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div className="absolute right-0 top-12 min-w-40 overflow-hidden rounded-2xl border border-black/10 bg-white/85 p-1 shadow-[0_20px_70px_rgba(0,0,0,.14)] backdrop-blur-2xl">
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
              className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                locale === item.code ? "bg-zinc-950 text-white" : "text-zinc-600 hover:bg-black/[0.04] hover:text-zinc-950"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
