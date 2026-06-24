import { FounderCTA } from "@/components/founder/FounderCTA";
import { FounderHero } from "@/components/founder/FounderHero";
import { FounderPhilosophy } from "@/components/founder/FounderPhilosophy";
import { FounderProfile } from "@/components/founder/FounderProfile";
import { FounderRole } from "@/components/founder/FounderRole";
import { FounderStatement } from "@/components/founder/FounderStatement";

export function FounderPage() {
  return (
    <main className="bg-ink">
      <FounderHero />
      <FounderStatement />
      <FounderProfile />
      <FounderPhilosophy />
      <FounderRole />
      <FounderCTA />
    </main>
  );
}
