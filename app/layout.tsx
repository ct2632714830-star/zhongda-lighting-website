import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  other: {
    google: "notranslate"
  },
  title: "crisistb7#4719 | Valorant Personal Brand",
  description:
    "A restrained Valorant personal brand homepage with a full-screen video opening, editable rank UI and live stats panels.",
  keywords: [
    "Valorant",
    "personal brand",
    "crisistb7",
    "player portfolio",
    "rank profile",
    "live stats"
  ],
  openGraph: {
    title: "crisistb7#4719 | Valorant Personal Brand",
    description:
      "A restrained Valorant personal brand homepage with video, rank UI and live stats overlays.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="notranslate" translate="no">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
