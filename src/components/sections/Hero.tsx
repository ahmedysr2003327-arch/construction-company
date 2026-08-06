import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

import Reveal from "../animations/Reveal";
import { FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <Reveal>
      <section id="home" className="py-24 lg:py-15 ">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div className="space-y-6">
              {/* <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                مقاول تشطيبات وديكور في جدة
              </span> */}

              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                تشطيبات وديكورات احترافية في جدة مع جودة تثبتها الأعمال
              </h1>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-amber-700">
                <FaLocationDot /> نخدم جميع أحياء جدة
              </div>
              <p className="text-lg leading-8 text-slate-600">
                نقدم خدمات التشطيبات الداخلية والخارجية، الديكورات، الجبس بورد،
                الكهرباء، البلاط، الكلادينج والواجهات الزجاجية في جدة بخبرة
                عالية ومعايير تنفيذ دقيقة.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button href="#projects" variant="secondary">
                  مشاريعنا
                </Button>

                <Button href="/services" variant="secondary">
                  خدماتنا
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/images/hero/hero.jpg"
                alt="مشروع تشطيب وديكور احترافي لمؤسسه كنوز الذوق في جدة"
                width={650}
                height={550}
                className="rounded-3xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </Container>
      </section>
    </Reveal>
  );
}
