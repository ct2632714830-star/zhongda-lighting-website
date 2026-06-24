import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="bg-ink pt-28">
      <section className="container-lux py-20 md:py-32">
        <SectionHeading
          eyebrow="Projects"
          title="Bespoke lighting for hotels, villas, galleries, and luxury commercial spaces."
          text="Project images and information are managed in /data/projects.ts. Replace the files in /public/projects/ or add new project objects to expand this gallery."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
    </main>
  );
}
