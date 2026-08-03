import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:
    "اكتشف خدمات التشطيبات والديكورات المتكاملة في جدة، بما في ذلك الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة والواجهات الزجاجية.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "خدماتنا | كنوز الذوق",
    description:
      "خدمات تشطيبات وديكورات احترافية في جدة، مع تنفيذ دقيق ومتابعة جودة عالية.",
    url: "https://kanouz-alzooq.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-16 text-center text-white">
          <h1 className="text-3xl font-bold md:text-4xl">
            خدمات التشطيبات والديكورات في جدة
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            نقدم حلولًا متكاملة في التشطيبات الداخلية والخارجية، الديكورات،
            الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة والواجهات الزجاجية
            مع الالتزام بأعلى معايير الجودة.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-3 text-xl font-bold text-slate-900">
                {service.title}
              </h2>
              <p className="leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
          >
            استعرض مشاريعنا
          </Link>
        </div>
      </Container>
    </section>
  );
}
