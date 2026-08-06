import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24">
      <Container>
        <SectionTitle
          title="خدمات المقاولات والتشطيبات في جدة"
          subtitle="نقدم خدمات متكاملة في المقاولات والتشطيبات الداخلية والخارجية في جدة، تشمل تشطيب الفلل والشقق، الجبس بورد، الدهانات، البلاط، الكهرباء، السباكة، الواجهات الزجاجية، الكلادينج وأعمال الحديد."
        />

        <h2 id="services-title" className="sr-only">
          خدمات المقاولات والتشطيبات التي تقدمها كنوز الذوق في جدة
        </h2>

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
