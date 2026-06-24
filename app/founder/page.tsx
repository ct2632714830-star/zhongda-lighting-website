import type { Metadata } from "next";
import { FounderPage } from "@/components/founder/FounderPage";

export const metadata: Metadata = {
  title: "The Founder | ZD Bespoke Lighting",
  description:
    "A founder vision for light, space, atmosphere, and international bespoke lighting projects."
};

export default function Page() {
  return <FounderPage />;
}
