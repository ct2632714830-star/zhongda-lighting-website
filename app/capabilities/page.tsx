import Image from "next/image";
import { CapabilityGrid } from "@/components/CapabilityGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/content";

export default function CapabilitiesPage() {
  return (
    <main className="bg-ink pt-28">
      <section className="container-lux grid gap-14 py-20 md:py-28 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Capabilities"
          title="From material logic to global project delivery."
          text="Our capability is expressed through control: drawings, materials, finishes, lighting systems, quality inspection, packaging, and clear international communication."
        />
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
          <Image src={images.factory} alt="Lighting factory capability placeholder" fill className="object-cover" />
        </div>
      </section>
      <section className="container-lux pb-24 md:pb-32">
        <CapabilityGrid />
      </section>
    </main>
  );
}
