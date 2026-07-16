import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FeatureCard from "../ui/FeatureCard";
import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          title="لماذا كنوز الذوق؟"
          subtitle="نسعى لتقديم أفضل خدمات التشطيبات والديكورات مع التركيز على الجودة والالتزام ورضا العملاء."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}
