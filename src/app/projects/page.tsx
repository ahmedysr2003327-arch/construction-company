"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const categories = useMemo(
    () => [
      "الكل",
      ...Array.from(new Set(projects.map((project) => project.category))),
    ],
    [],
  );
  const filteredProjects = useMemo(() => {
    return projects.filter(
      (project) =>
        activeCategory === "الكل" || project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-14 text-center text-white shadow-lg sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              مشاريع كنوز الذوق
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              مشاريع تنفيذية متنوعة في جدة
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              استعرض مجموعة من مشاريع كنوز الذوق في جدة، والتي تشمل أعمال
              التشطيبات الداخلية والخارجية وتنفيذ مختلف أعمال المقاولات
              والتشطيب.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <div
            className="
        flex gap-2 overflow-x-auto pb-1
        scrollbar-none
        sm:flex-wrap sm:overflow-visible
      "
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`
              shrink-0 rounded-full px-5 py-2.5
              text-sm font-semibold
              whitespace-nowrap
              transition-all duration-200
              ${
                isActive
                  ? "bg-amber-600 text-white shadow-sm"
                  : "bg-white text-slate-700 ring-1 ring-slate-200 hover:border-amber-300 hover:text-amber-700"
              }
            `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <p>
            تم العثور على{" "}
            <span className="font-bold text-amber-600">
              {filteredProjects.length}
            </span>{" "}
            مشروع
          </p>
          <p className="text-slate-500">المشاريع المعروضة في جدة</p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                location={project.location}
                alt={project.alt}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center text-slate-600">
            <h2 className="text-xl font-semibold text-slate-900">
              لا توجد مشاريع حالياً ضمن هذا القسم
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-7">
              جرب تصنيفًا مختلفًا أو ابحث بكلمة أخرى للعثور على مشاريع مناسبة.
            </p>
          </div>
        )}

        <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-right">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                هل لديك مشروع وتبحث عن تنفيذ احترافي؟
              </h2>
              <p className="mt-2 text-base leading-8 text-slate-600">
                تواصل مع كنوز الذوق لمناقشة مشروعك في جدة ومراجعة الحلول
                المناسبة.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
