import type { Metadata } from "next";
import { ProfilePage } from "@/components/profile/ProfilePage";

export const metadata: Metadata = {
  title: "Profile | crisistb7#4719",
  description:
    "A restrained Valorant player profile page for crisistb7#4719, presenting gameplay, lifestyle, setup, performance and contact details."
};

export default function Page() {
  return <ProfilePage />;
}
