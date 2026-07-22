import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { FaLocationDot } from "react-icons/fa6";

const areas = [
  "حي الروضة",
  "حي الصفا",
  "حي النهضة",
  "حي الفيصلية",
  "حي الزهراء",
  "حي السلامة",
  "حي الشاطئ",
  "حي البوادي",
  "حي الحمدانية",
  "حي النسيم",
  "حي أبحر",
  "حي النعيم",
];

export default function ServiceAreas() {
  return (
    <section className="bg-slate-50 py-12">
      <Container>
        <SectionTitle
          title="📍 نخدم جميع أحياء جدة"
          subtitle="نفخر بتقديم خدمات التشطيبات والديكورات في جميع أنحاء مدينة جدة، مع سرعة في الوصول والالتزام بمواعيد التنفيذ."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:text-amber-600"
            >
              <FaLocationDot className="text-amber-600" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
