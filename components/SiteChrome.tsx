"use client";

import { usePathname } from "next/navigation";
import { AmbientLightFields } from "@/components/AmbientLightFields";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandaloneTool =
    pathname === "/" ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/whatsapp-screening") ||
    pathname.startsWith("/valorant");

  if (isStandaloneTool) {
    return <>{children}</>;
  }

  return (
    <>
      <AmbientLightFields />
      <Navigation />
      <div className="relative z-10">{children}</div>
      <div className="relative z-10">
        <Footer />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}
