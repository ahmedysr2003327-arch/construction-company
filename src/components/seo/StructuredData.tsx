import { company } from "@/data/company";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Organization"],
    name: company.name,
    description:
      "مؤسسه متخصصة في التشطيبات الداخلية والخارجية، الديكورات، الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة، والواجهات الزجاجية في جدة.",
    url: company.website,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "جدة",
      addressRegion: "منطقة مكة المكرمة",
      addressCountry: "SA",
      streetAddress: company.address,
    },
    areaServed: [
      {
        "@type": "City",
        name: "جدة",
      },
      {
        "@type": "AdministrativeArea",
        name: "السعودية",
      },
    ],
    image: `https://kanouz-alzooq.com${company.logo}`,
    sameAs: [`https://wa.me/${company.whatsapp}`, company.website],
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
