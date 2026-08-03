import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { FaAward, FaClock, FaHandshake, FaEye } from "react-icons/fa";

const features = [
  {
    title: "رؤيه ريادية",
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
    <section id="about-company" className="bg-white py-24">
      <Container>
        <SectionTitle
          title="نبذة عن مؤسسه كنوز الذوق"
          subtitle="مقاول تشطيبات وديكورات في جدة يقدم حلولًا متكاملة من التشطيبات إلى الديكورات والواجهات بأعلى مستوى من الجودة."
        />

        <div className="mx-auto mt-12 max-w-5xl rounded-3xl bg-slate-50 p-8 shadow-sm md:p-12">
          <p className="text-lg leading-9 text-slate-700">
            <span className="font-bold text-slate-900">كنوز الذوق</span> هي
            مؤسسه سعودية رائدة في مجال المقاولات والتشطيبات، تأسست عام
            <span className="font-bold text-amber-600"> 1998 </span>
            على يد نخبة من المهندسين والخبراء في مجال البناء والتشييد، وتقدم
            خدماتها في جدة بأعلى معايير الجودة والإتقان.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-700">
            تقدم المؤسسة خدمات متكاملة تشمل التشطيبات الداخلية والخارجية،
            الديكورات، الجبس بورد، الدهانات، الكهرباء، السباكة، الواجهات
            الزجاجية، الكلادينج، وأعمال الحديد، مع الالتزام بأعلى معايير الجودة
            والإتقان.
          </p>

          <p className="mt-6 rounded-xl bg-amber-50 p-4 text-center font-semibold text-amber-700">
            📍 نقدم خدماتنا في جميع أحياء جدة والمناطق المجاورة.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-600">
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
