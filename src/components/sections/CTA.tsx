import Link from "next/link";
import Container from "../ui/Container";
import { company } from "@/data/company";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-amber-600 py-20 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium">
            كنوز الذوق
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            هل لديك مشروع وتبحث عن تنفيذ احترافي؟
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-amber-50">
            يسعدنا تنفيذ جميع أعمال التشطيبات والديكورات بأعلى جودة وبأفضل
            الأسعار مع الالتزام الكامل بمواعيد التسليم.
          </p>

          <Link
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-amber-600 transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            تواصل معنا عبر واتساب
          </Link>
        </div>
      </Container>
    </section>
  );
}
