import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <Container>
        <SectionTitle
          title="خدماتنا"
          subtitle="نقدم مجموعة متكاملة من خدمات التشطيبات والديكورات بأعلى جودة."
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
