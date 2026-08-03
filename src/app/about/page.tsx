import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرف على مؤسسه كنوز الذوق، خبرتها في التشطيبات والديكورات، والخدمات المتكاملة التي تقدمها في جدة.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "من نحن | كنوز الذوق",
    description:
      "شركتنا في جدة تقدم خدمات التشطيبات والديكورات من خلال فريق متخصص وعمليات تنفيذ احترافية.",
    url: "https://kanouz-alzooq.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          من نحن
        </h1>
        <SectionTitle
          title="من نحن"
          subtitle="مؤسسه كنوز الذوق من الشركات الموثوقة في مجال التشطيبات والديكورات في جدة."
        />

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-lg leading-9 text-slate-700">
            تأسست مؤسسه كنوز الذوق على يد نخبة من المهندسين والخبراء في البناء
            والتشييد، وتركز على تقديم خدمات تشطيبات وديكورات متكاملة في جدة وفق
            أعلى معايير الجودة والإتقان.
          </p>
          <p className="mt-6 text-lg leading-9 text-slate-700">
            نحرص على الالتزام بالمواعيد، وتقديم حلول عملية تلائم احتياجات كل
            مشروع، وتطوير أعمالنا في كل مرحلة من مراحل التنفيذ.
          </p>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              اعرض مشاريعنا
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
