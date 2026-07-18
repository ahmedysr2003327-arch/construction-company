import Link from "next/link";
import Container from "@/components/ui/Container";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <Container>
        <FaTriangleExclamation className="mx-auto text-7xl text-amber-500" />
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-8xl font-extrabold text-amber-600">404</h1>

          <h2 className="mt-6 text-3xl font-bold text-slate-900">
            الصفحة غير موجودة
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها. يمكنك العودة
            إلى الصفحة الرئيسية ومتابعة تصفح الموقع.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-700"
            >
              العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
