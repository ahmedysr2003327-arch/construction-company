import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

import Reveal from "../animations/Reveal";
import { FaLocationDot } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="home" className="py-10 lg:py-15">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              كنوز الذوق للمقاولات والتشطيبات في جدة
            </h1>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-2 text-amber-700">
              <FaLocationDot />
              نخدم جميع أحياء جدة
            </div>

            <p className="text-lg leading-8 text-slate-600">
              نقدم خدمات المقاولات والتشطيبات الداخلية والخارجية في جدة، وتشطيب
              الفلل والشقق، والديكورات، والجبس بورد، والدهانات، والبلاط،
              والكهرباء، والسباكة، والكلادينج والواجهات الزجاجية، مع الاهتمام
              بجودة التنفيذ ودقة التفاصيل.
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
              src="/images/hero/hero.webp"
              alt="مشروع تشطيبات داخلية وديكورات في جدة من تنفيذ كنوز الذوق"
              width={1599}
              height={899}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-3xl object-cover shadow-xl"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
