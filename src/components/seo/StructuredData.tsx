export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "كنوز الذوق",
    description:
      "شركة متخصصة في التشطيبات الداخلية والخارجية والديكورات والسباكة والكهرباء والجبس بورد والواجهات الزجاجية.",
    telephone: "+966500401269",
    areaServed: "Jeddah",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
    url: "https://your-domain.com",
    image: "https://your-domain.com/images/logo/logo.jpg",
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
