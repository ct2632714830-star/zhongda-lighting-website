"use client";

import { Facebook, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { LuxuryButton } from "@/components/LuxuryButton";
import { SectionHeading } from "@/components/SectionHeading";
import { useI18n } from "@/components/LanguageProvider";

function inputClass() {
  return "h-14 w-full border border-white/[0.12] bg-white/[0.035] px-4 text-sm text-ivory outline-none transition placeholder:text-ivory/[0.38] focus:border-champagne/70";
}

export function Contact() {
  const { t } = useI18n();
  const f = t.contact.fields;

  return (
    <section id="contact" className="bg-smoke py-24 md:py-36">
      <div className="container-lux grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} />
          <div className="mt-10 space-y-5 text-sm leading-7 text-ivory/64">
            <p className="flex gap-3"><MapPin className="mt-1 size-4 shrink-0 text-champagne" /> {t.contact.company}<br />{t.contact.address}</p>
            <p className="flex items-center gap-3"><Mail className="size-4 text-champagne" /> sales@zdbespokelighting.com</p>
            <p className="flex items-center gap-3"><MessageCircle className="size-4 text-champagne" /> WhatsApp: +86 190 4718 6703</p>
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <LuxuryButton href="https://wa.me/8619047186703">{t.contact.whatsappButton}</LuxuryButton>
            <a href="https://www.instagram.com/zd_bespoke_lighting/" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center border border-white/15 text-ivory/70 transition hover:border-champagne/60 hover:text-champagne" aria-label="Instagram @zd_bespoke_lighting">
              <Instagram className="size-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589420906827" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center border border-white/15 text-ivory/70 transition hover:border-champagne/60 hover:text-champagne" aria-label="Facebook">
              <Facebook className="size-5" />
            </a>
          </div>
        </div>
        <form className="grid gap-4 border border-white/10 bg-white/[0.035] p-5 backdrop-blur md:p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <input className={inputClass()} placeholder={f.name} />
            <input className={inputClass()} placeholder={f.company} />
            <input className={inputClass()} placeholder={f.country} />
            <input className={inputClass()} placeholder={f.email} type="email" />
            <input className={inputClass()} placeholder={f.whatsapp} />
            <select className={inputClass()} defaultValue="">
              <option value="" disabled>{f.projectType}</option>
              {t.contact.projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <textarea className="min-h-44 border border-white/[0.12] bg-white/[0.035] p-4 text-sm text-ivory outline-none transition placeholder:text-ivory/[0.38] focus:border-champagne/70" placeholder={f.message} />
          <button type="button" className="gold-button h-14 border border-champagne/70 bg-champagne/[0.12] px-7 text-xs uppercase tracking-[0.22em] text-ivory shadow-glow">
            <span className="relative z-10">{t.contact.send}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
