import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import Link from "next/link";
import { servicesGallery } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <SectionTitle
          title="آخر أعمالنا"
          subtitle="نفخر بتقديم مجموعة من المشاريع التي تعكس جودة تنفيذنا واهتمامنا بأدق التفاصيل."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesGallery.map((service) =>
            service.images
              .slice(0, 2)
              .map((image) => (
                <ProjectCard
                  key={image}
                  image={image}
                  title={service.title}
                  
                />
              )),
          )}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
          >
            عرض جميع المشاريع
          </Link>
        </div>
      </Container>
    </section>
  );
}
