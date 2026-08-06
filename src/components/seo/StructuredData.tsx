import { company } from "@/data/company";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Contractor",

    "@id": `${company.website}/#business`,

    name: company.name,

    description:
      "كنوز الذوق للمقاولات والتشطيبات تقدم خدمات المقاولات والتشطيبات الداخلية والخارجية وتشطيب الفلل والشقق والجبس بورد والدهانات والبلاط والكهرباء والسباكة والواجهات الزجاجية والكلادينج وأعمال الحديد في جدة.",

    url: company.website,

    telephone: "+966565063320",

    image: `https://kanouz-alzooq.com${company.logo}`,

    areaServed: {
      "@type": "City",
      name: "جدة",
      addressCountry: "SA",
    },

    serviceType: [
      "المقاولات",
      "التشطيبات الداخلية",
      "التشطيبات الخارجية",
      "تشطيب الفلل",
      "تشطيب الشقق",
      "الجبس بورد",
      "الدهانات",
      "البلاط والسيراميك",
      "الكهرباء",
      "السباكة",
      "الواجهات الزجاجية",
      "الكلادينج",
      "أعمال الحديد",
      "تصميم المخططات",
    ],

    sameAs: [`https://wa.me/${company.whatsapp}`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
