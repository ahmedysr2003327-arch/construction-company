import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle
          title="آخر أعمالنا"
          subtitle="نفخر بتقديم مجموعة من المشاريع التي تعكس جودة تنفيذنا واهتمامنا بأدق التفاصيل."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-700"
          >
            عرض جميع المشاريع
          </Link>
        </div>
      </Container>
    </section>
  );
}
