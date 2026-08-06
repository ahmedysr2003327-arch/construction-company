"use client";

import { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Container from "../ui/Container";

export const areas = [
  "حي أبحر الشمالية",
  "حي أبحر الجنوبية",
  "حي الأجاويد",
  "حي الأجاويد السكني",
  "حي الأندلس",
  "حي الأمير عبد المجيد",
  "حي الأمير فواز الشمالي",
  "حي الأمير فواز الجنوبي",
  "حي البساتين",
  "حي البغدادية الشرقية",
  "حي البغدادية الغربية",
  "حي البوادي",
  "حي الثغر",
  "حي الجامعة",
  "حي الحمدانية",
  "حي الحمراء",
  "حي الخالدية",
  "حي الخمرة",
  "حي الروابي",
  "حي الروضة",
  "حي الرحاب",
  "حي الريان",
  "حي الزاهر",
  "حي الزهراء",
  "حي السامر",
  "حي السلامة",
  "حي السليمانية",
  "حي السنابل",
  "حي الشاطئ",
  "حي الشرفية",
  "حي الصفا",
  "حي الصالحية",
  "حي الصناعية",
  "حي العزيزية",
  "حي العزيزية الجديدة",
  "حي الفيحاء",
  "حي الفيصلية",
  "حي القريات",
  "حي الكندرة",
  "حي الكوثر",
  "حي المحمدية",
  "حي المحجر",
  "حي المروة",
  "حي المشرفة",
  "حي المنتزهات",
  "حي المنار",
  "حي المنارات",
  "حي النخيل",
  "حي النزهة",
  "حي النسيم",
  "حي النعيم",
  "حي النهضة",
  "حي الواحة",
  "حي الورود",
  "حي الوزيرية",
  "حي أم السلم",
  "حي بريمان",
  "حي بني مالك",
  "حي بلد",
  "حي بترومين",
  "حي ثول",
  "حي جليل",
  "حي ذهبان",
  "حي رابغ",
  "حي قويزة",
  "حي مدائن الفهد",
  "حي المرجان",
  "حي مسرة",
  "حي مشرفة",
  "حي مكة القديم",
  "حي كيلو 7",
  "حي كيلو 8",
  "حي كيلو 10",
  "حي كيلو 11",
  "حي كيلو 13",
  "حي كيلو 14",
  "حي كيلو 15",
  "حي كيلو 16",
  "حي كيلو 18",
  "حي غليل",
  "حي مدائن الفهد",
  "حي الربوة",
  "حي السروات",
  "حي العمارية",
  "حي عين العزيزية",
  "حي القوزين",
  "حي الفضيلة",
  "حي القرينية",
  "حي الفروسية",
  "حي اللؤلؤ",
  "حي الفردوس",
  "حي الواحة",
  "حي الياقوت",
  "حي الزمرد",
  "حي الأصالة",
  "حي إشبيلية",
  "حي طيبة",
  "حي الرحمانية",
  "حي المنارات",
  "حي الريان",
  "حي الصوارى",
  "حي المروج",
  "حي الكوثر",
  "حي الحرازات",
  "حي التوفيق",
];

export default function ServiceAreas() {
  const [showAll, setShowAll] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const visibleAreas = showAll ? areas : areas.slice(0, 20);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);

      setTimeout(() => {
        buttonRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 0);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section
      id="service-areas"
      className="bg-slate-50 py-24"
      aria-labelledby="service-areas-title"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2
              id="service-areas-title"
              className="text-3xl font-bold text-slate-900"
            >
              مناطق خدمة المقاولات والتشطيبات في جدة
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              نقدم خدمات المقاولات والتشطيبات والديكورات في مختلف أحياء جدة،
              وتشمل أعمال التشطيب الداخلي والخارجي والجبس بورد والدهانات والبلاط
              والكهرباء والسباكة والواجهات.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {visibleAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <FaLocationDot
                  aria-hidden="true"
                  className="shrink-0 text-amber-600"
                />

                <span>{area}</span>
              </div>
            ))}
          </div>

          {areas.length > 20 && (
            <div className="mt-10 text-center">
              <button
                ref={buttonRef}
                type="button"
                onClick={handleToggle}
                className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
              >
                {showAll ? "عرض أقل" : "عرض جميع الأحياء"}
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
