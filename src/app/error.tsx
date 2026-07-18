"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 text-7xl">⚠️</div>

          <h1 className="text-4xl font-bold text-slate-900">
            حدث خطأ غير متوقع
          </h1>

          <p className="mt-4 leading-8 text-slate-600">
            نعتذر، حدث خطأ أثناء تحميل الصفحة. يمكنك إعادة المحاولة أو العودة
            إلى الصفحة الرئيسية.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={reset}
              className="rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
            >
              إعادة المحاولة
            </button>

            <Link
              href="/"
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
