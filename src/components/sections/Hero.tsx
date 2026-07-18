import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";

import Reveal from "../animations/Reveal";

export default function Hero() {
  return (
    <Reveal>
      <section id="home" className="py-24 lg:py-15 ">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div className="space-y-6">
              <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                شركة تشطيبات وديكورات
              </span>

              <h1 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                نحول أفكارك إلى واقع بأعلى معايير الجودة
              </h1>

              <p className="text-lg leading-8 text-slate-600">
                نقدم خدمات التشطيبات الداخلية والخارجية، الديكورات، الجبس بورد،
                الكهرباء، البلاط، الكلادينج والواجهات الزجاجية بخبرة وجودة
                عالية.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button href="#projects" variant="secondary">
                  مشاريعنا
                </Button>

                <Button href="#services" variant="secondary">
                  خدماتنا
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <Image
                src="/images/hero/hero.jpg"
                alt="Construction Company"
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
