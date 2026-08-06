import type { Metadata } from "next";

import AboutCompany from "@/components/sections/AboutCompany";
import CTA from "@/components/sections/CTA";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Services from "@/components/sections/Services";
import Statistics from "@/components/sections/Statistics";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "كنوز الذوق للمقاولات والتشطيبات | تشطيبات جدة",

  description:
    "كنوز الذوق للمقاولات والتشطيبات تقدم خدمات التشطيبات الداخلية والخارجية في جدة، وتشطيب الفلل والشقق، الجبس بورد، الدهانات، البلاط، الكهرباء، السباكة، الواجهات الزجاجية، الكلادينج وأعمال الحديد.",

  keywords: [
    "تشطيبات جدة",
    "مقاول جدة",
    "شركة تشطيبات جدة",
    "تشطيب فلل جدة",
    "تشطيب شقق جدة",
    "جبس بورد جدة",
    "دهانات جدة",
    "بلاط جدة",
    "مقاولات جدة",
    "كنوز الذوق",
  ],

  alternates: {
    canonical: "https://kanouz-alzooq.com/",
  },

  openGraph: {
    title: "كنوز الذوق للمقاولات والتشطيبات | جدة",
    description:
      "خدمات التشطيبات الداخلية والخارجية وتشطيب الفلل والشقق في جدة.",
    url: "https://kanouz-alzooq.com/",
    siteName: "كنوز الذوق للمقاولات والتشطيبات",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://kanouz-alzooq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "كنوز الذوق للمقاولات والتشطيبات",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "كنوز الذوق للمقاولات والتشطيبات | جدة",
    description: "تشطيبات داخلية وخارجية وتشطيب فلل وشقق في جدة.",
    images: ["https://kanouz-alzooq.com/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <AboutCompany />
      <Services />
      <WhyChooseUs />
      <ServiceAreas />
      <Projects />
      <CTA />
    </>
  );
}
