import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { FaAward, FaClock, FaHandshake, FaEye } from "react-icons/fa";

const features = [
  {
    title: "رؤية ريادية",
    icon: <FaEye />,
  },
  {
    title: "ثقة العملاء",
    icon: <FaHandshake />,
  },
  {
    title: "جودة عالية",
    icon: <FaAward />,
  },
  {
    title: "الالتزام بالمواعيد",
    icon: <FaClock />,
  },
];

export default function AboutCompany() {
  return (
    <section
      id="about-company"
      className="bg-white py-24"
      aria-labelledby="about-title"
    >
      <Container>
        <SectionTitle
          title="نبذة عن مؤسسة كنوز الذوق للمقاولات والتشطيبات"
          subtitle="مؤسسة متخصصة في المقاولات والتشطيبات والديكورات في جدة، نقدم حلولًا متكاملة للمشاريع السكنية والتجارية."
        />

        <div className="mx-auto mt-12 max-w-7xl rounded-3xl bg-slate-50 p-8 shadow-sm md:p-12">
          <h2
            id="about-title"
            className="mb-6 text-2xl font-bold text-slate-900"
          >
            كنوز الذوق للمقاولات والتشطيبات في جدة
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            <span className="font-bold text-slate-900">كنوز الذوق</span> مؤسسة
            متخصصة في مجال المقاولات والتشطيبات منذ 1998 م، وتقدم خدماتها في{" "}
            <span className="font-bold text-slate-900">جدة</span> للمشاريع
            السكنية والتجارية، مع الاهتمام بجودة التنفيذ ودقة التفاصيل والالتزام
            بمتطلبات كل مشروع.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-700">
            تشمل خدمات المؤسسة التشطيبات الداخلية والخارجية ، تشطيب الفلل
            والشقق، الديكورات والجبس بورد، الدهانات، البلاط والسيراميك، الأعمال
            الكهربائية والسباكة، الواجهات الزجاجية والكلادينج، وأعمال الحديد
            والتلييس، بالإضافة إلى تصميم المخططات.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-700">
            نحرص في كل مشروع على تقديم حلول عملية تناسب احتياجات العميل، مع
            التركيز على جودة الخامات، دقة التنفيذ، والالتزام بالمواعيد.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  aria-hidden="true"
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-600"
                >
                  {feature.icon}
                </div>

                <h3 className="font-semibold text-slate-800">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
