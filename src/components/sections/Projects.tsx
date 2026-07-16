import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle
          title="آخر أعمالنا"
          subtitle="نفخر بتقديم مجموعة من المشاريع التي تعكس جودة تنفيذنا واهتمامنا بأدق التفاصيل."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.image} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
