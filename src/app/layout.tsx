import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import { company } from "@/data/company";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "كنوز الذوق | التشطيبات والديكورات في السعودية",
    template: "%s | كنوز الذوق",
  },
  metadataBase: new URL("https://kanouz-alzooq.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  description:
    "تشطيبات داخلية وخارجية، جبس بورد، بلاط، دهانات، كهرباء، سباكة، واجهات زجاجية، كلادينج، وأعمال حديد بأعلى معايير الجودة.",
  keywords: [
    "كنوز الذوق",
    "تشطيبات",
    "تشطيبات داخلية",
    "تشطيبات خارجية",
    "ديكورات",
    "ديكورات داخلية",
    "جبس بورد",
    "بلاط",
    "دهانات",
    "كهرباء",
    "سباكة",
    "تلييس",
    "واجهات زجاجية",
    "كلادينج",
    "أعمال حديد",
    "تشطيب فلل",
    "تشطيب شقق",
    "تشطيب مكاتب",
    "مقاولات",
    "السعودية",
    "جدة",
    "الرياض",
    "الدمام",
    "مكة",
    "المدينة",
    "مقاول تشطيبات",
    "شركة تشطيبات",
    "تشطيبات جدة",
    "تشطيبات الرياض",
    "تشطيبات الدمام",
  ],
  verification: {
    google: "xxxxxxxxxxxxxxxxxxxx",
  },

  authors: [
    {
      name: company.name,
    },
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  applicationName: "كنوز الذوق",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
  },
  other: {
    "content-language": "ar-SA",
  },
  creator: company.name,
  publisher: company.name,
  openGraph: {
    title: "كنوز الذوق | التشطيبات والديكورات في السعودية",
    description:
      "شركة كنوز الذوق متخصصة في أعمال التشطيبات الداخلية والخارجية، الديكورات، الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة، الواجهات الزجاجية، الكلادينج، وأعمال الحديد داخل المملكة العربية السعودية بأعلى معايير الجودة والإتقان,شركة متخصصة في أعمال التشطيبات الداخلية والخارجية والديكورات والسباكة والكهرباء والجبس بورد والواجهات الزجاجية.",

    url: "https://kanouz-alzooq.com",

    siteName: "كنوز الذوق",

    locale: "ar_SA",

    type: "website",
    countryName: "Saudi Arabia",
    determiner: "the",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "كنوز الذوق",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كنوز الذوق | التشطيبات والديكورات في السعودية",
    description:
      "شركة كنوز الذوق متخصصة في أعمال التشطيبات الداخلية والخارجية.",
    images: ["/images/og-image.jpg"],
  },
};

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});
export const viewport: Viewport = {
  themeColor: "#d97706",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans`}>
        {" "}
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
