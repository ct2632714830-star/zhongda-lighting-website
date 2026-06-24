import type { Metadata } from "next";
import "./globals.css";
import { AmbientLightFields } from "@/components/AmbientLightFields";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  other: {
    google: "notranslate"
  },
  title: "ZD Bespoke Lighting | Luxury Custom Lighting for Hotels & Villas",
  description:
    "ZD Bespoke Lighting provides luxury bespoke lighting design and manufacturing solutions for hotels, villas, resorts, banquet halls and architectural projects worldwide.",
  keywords: [
    "luxury lighting",
    "bespoke lighting",
    "custom chandelier",
    "hotel lighting",
    "villa lighting",
    "architectural lighting",
    "hospitality lighting",
    "Zhongshan lighting factory"
  ],
  openGraph: {
    title: "ZD Bespoke Lighting | Luxury Custom Lighting for Hotels & Villas",
    description:
      "Luxury bespoke lighting design and manufacturing solutions for hotels, villas, resorts, banquet halls and architectural projects worldwide.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="notranslate" translate="no">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <AmbientLightFields />
          <Navigation />
          <div className="relative z-10">{children}</div>
          <div className="relative z-10"><Footer /></div>
          <div className="grain" aria-hidden="true" />
        </LanguageProvider>
      </body>
    </html>
  );
}
