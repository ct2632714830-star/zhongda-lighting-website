import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "crisistb7#4719 | Valorant Personal Brand",
  description:
    "A restrained, Apple-inspired Valorant personal brand hero with video opening, rank panel, live stats and editable UI overlays."
};

export default function ValorantPage() {
  return <HeroSection />;
}
