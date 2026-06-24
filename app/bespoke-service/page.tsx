import { ProcessTimeline } from "@/components/ProcessTimeline";
import { SectionHeading } from "@/components/SectionHeading";

export default function BespokeServicePage() {
  return (
    <main className="bg-ink pt-28">
      <section className="container-lux py-20 md:py-28">
        <SectionHeading
          eyebrow="Bespoke Service"
          title="A complete custom process for non-standard lighting projects."
          text="From concept and requirement review to 3D visualization, samples, production, inspection, delivery, and installation coordination."
        />
        <div className="mt-14"><ProcessTimeline /></div>
      </section>
    </main>
  );
}
