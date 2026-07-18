import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
export default function ProjectsPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-8 flex  justify-end">
          {" "}
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm transition-all hover:border-amber-600 hover:text-amber-600"
          >
            {" "}
            <span>العودة للرئيسية</span> <FaArrowLeft />{" "}
          </Link>{" "}
        </div>
        <SectionTitle
          title="جميع مشاريعنا"
          subtitle="استعرض جميع أعمال كنوز الذوق في مختلف أنواع التشطيبات والديكورات."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
