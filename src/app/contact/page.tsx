import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { company } from "@/data/company";
import Link from "next/link";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع مؤسسه كنوز الذوق للاستفسار عن خدمات التشطيبات والديكورات في جدة أو طلب عرض سعر.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "تواصل معنا | كنوز الذوق",
    description:
      "تواصل مع مؤسسه كنوز الذوق عبر الهاتف أو واتساب للاستفسار عن خدمات التشطيبات والديكورات في جدة.",
    url: "https://kanouz-alzooq.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          تواصل معنا
        </h1>
        <SectionTitle
          title="تواصل معنا"
          subtitle="استفسر عن خدماتنا في جدة أو اطلب عرض سعر لمشروعك."
        />

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <ul className="space-y-5 text-lg text-slate-700">
            <li>
              <strong>الهاتف:</strong>{" "}
              <a href={`tel:${company.phone}`}>{company.phone}</a>
            </li>
            <li>
              <strong>واتساب:</strong>{" "}
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                {company.whatsapp}
              </a>
            </li>
            <li>
              <strong>البريد:</strong>{" "}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <strong>الموقع:</strong> {company.address}
            </li>
          </ul>

          <div className="mt-10 text-center">
            <Link
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              تواصل عبر واتساب
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
