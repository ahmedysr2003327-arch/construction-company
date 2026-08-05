"use client";

import { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

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
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <h2 className="col-span-full text-center text-2xl font-bold text-amber-600 mb-4">
          نخدم جميع أحياء جدة
        </h2>
        {visibleAreas.map((area) => (
          <div
            key={area}
            className="flex items-center gap-2 rounded-lg border bg-white p-3"
          >
            <FaLocationDot className="text-amber-600" />
            {area}
          </div>
        ))}
      </div>

      {areas.length > 10 && (
        <div className="mt-8 text-center">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className="rounded-lg bg-amber-500 px-6 py-3 text-white"
          >
            {showAll ? "عرض أقل" : "عرض جميع الأحياء"}
          </button>
        </div>
      )}
    </>
  );
}
