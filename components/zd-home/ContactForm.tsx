"use client";

import Link from "next/link";
import { MessageCircle, Upload } from "lucide-react";
import { useI18n } from "@/components/LanguageProvider";
import { homeContent } from "@/lib/zd-home-content";
import { Reveal } from "@/components/zd-home/Reveal";

const whatsappNumber = "8619047186703";

export function ContactForm() {
  const { locale } = useI18n();
  const t = homeContent[locale];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const hasReference = formData.get("reference") instanceof File && Boolean((formData.get("reference") as File).name);
    const message = [
      "Project Inquiry",
      `Name: ${value("name") || "-"}`,
      `Company: ${value("company") || "-"}`,
      `Country: ${value("country") || "-"}`,
      `Project Type: ${value("projectType") || "-"}`,
      `Email / WhatsApp: ${value("contact") || "-"}`,
      `Message: ${value("message") || "-"}`,
      hasReference ? "Reference Image / Drawing: The client selected a file and can send it here in WhatsApp." : ""
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="bg-[#f1f0ec] py-24 md:py-32">
      <div className="container-lux grid gap-8 lg:grid-cols-[.78fr_1.22fr]">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-champagne">{t.sectionLabels.contact}</p>
          <h2 className="mt-5 text-balance text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-zinc-950">
            {t.contact.title}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600">{t.contact.subtitle}</p>
          <Link href={`https://wa.me/${whatsappNumber}`} className="mt-9 inline-flex h-12 items-center rounded-full border border-black/10 bg-white/70 px-5 text-sm font-medium text-zinc-950 shadow-[0_14px_44px_rgba(0,0,0,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-champagne/50">
            <MessageCircle className="mr-2 size-4" />
            {t.contact.whatsapp}
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-[2.2rem] border border-white/80 bg-white/72 p-5 shadow-[0_30px_100px_rgba(20,20,20,.1)] backdrop-blur-2xl md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label={t.contact.labels.name} name="name" />
              <Field label={t.contact.labels.company} name="company" />
              <Field label={t.contact.labels.country} name="country" />
              <label className="block">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">{t.contact.labels.projectType}</span>
                <select name="projectType" className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-zinc-950 outline-none transition focus:border-champagne">
                  {t.contact.projectTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </label>
              <Field label={t.contact.labels.contact} name="contact" className="md:col-span-2" />
              <label className="block md:col-span-2">
                <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">{t.contact.labels.message}</span>
                <textarea name="message" className="min-h-32 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-champagne" placeholder={t.contact.placeholder} />
              </label>
              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-dashed border-black/15 bg-white px-4 py-4 text-sm text-zinc-600 transition hover:border-champagne md:col-span-2">
                <span>{t.contact.labels.upload}</span>
                <Upload className="size-4 text-champagne" />
                <input name="reference" type="file" className="hidden" />
              </label>
            </div>
            <button type="submit" className="shine-button mt-6 h-12 rounded-full bg-zinc-950 px-7 text-sm font-medium text-white shadow-[0_18px_50px_rgba(0,0,0,.18)] transition hover:-translate-y-0.5">
              {t.contact.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, className = "" }: { label: string; name: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</span>
      <input name={name} className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm text-zinc-950 outline-none transition placeholder:text-zinc-400 focus:border-champagne" />
    </label>
  );
}

export function WhatsAppFloating() {
  return (
    <Link
      href={`https://wa.me/${whatsappNumber}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-white/70 bg-zinc-950/88 px-4 text-sm font-medium text-white shadow-[0_20px_60px_rgba(0,0,0,.2)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-zinc-900"
    >
      <MessageCircle className="size-4 text-champagne" />
      WhatsApp
    </Link>
  );
}
