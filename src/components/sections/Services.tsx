import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionTitle
          title="خدمات التشطيبات والديكورات في جدة"
          subtitle="نقدم مجموعة متكاملة من خدمات التشطيبات والديكورات في جدة، بما في ذلك الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة والواجهات الزجاجية."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
