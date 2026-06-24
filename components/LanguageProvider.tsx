"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dictionary, Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof dictionary)[Locale];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("zd-locale");
    if (savedLocale && savedLocale in dictionary) {
      setLocale(savedLocale as Locale);
    }
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    window.localStorage.setItem("zd-locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [hasHydrated, locale]);

  const value = useMemo(() => ({ locale, setLocale, t: dictionary[locale] }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
