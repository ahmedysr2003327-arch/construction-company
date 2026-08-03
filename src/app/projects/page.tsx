"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import { FaArrowRight, FaSearch } from "react-icons/fa";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="py-12">
      <Container>
        <div className="mb-12 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 py-16 text-center text-white">
          <h1 className="text-4xl font-bold">جميع مشاريعنا</h1>

          <p className="mt-4 text-slate-300">
            استعرض أحدث أعمال كنوز الذوق في جدة، بما يشمل التشطيبات الداخلية
            والخارجية، الديكورات، الجبس بورد، البلاط، الدهانات، الكهرباء
            والسباكة.
          </p>
        </div>
        <div className="mb-8 flex justify-start">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm transition hover:border-amber-600 hover:text-amber-600"
          >
            <FaArrowRight />
            <span>العودة للرئيسية</span>
          </Link>
        </div>

        <div className="my-10 flex justify-center">
          <div className="relative w-full max-w-xl">
            <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="ابحث عن مشروع أو خدمة أو حي..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white pr-14 pl-5 text-right shadow-lg outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
            />
          </div>
        </div>
        <p className="mt-4 text-center text-slate-500">
          تم العثور على{" "}
          <span className="font-bold text-amber-600">
            {filteredProjects.length}
          </span>{" "}
          مشروع
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-slate-500">
              لا توجد مشاريع مطابقة للبحث.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
