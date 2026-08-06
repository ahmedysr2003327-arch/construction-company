import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { company } from "@/data/company";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import StructuredData from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://kanouz-alzooq.com"),
  title: {
    default: "مقاول تشطيبات وديكورات في جدة | كنوز الذوق",
    template: "%s | كنوز الذوق",
  },
  description:
    "مؤسسه كنوز الذوق تقدم خدمات التشطيبات الداخلية والخارجية، الديكورات، الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة، والواجهات الزجاجية في جدة والمناطق المجاورة.",
  keywords: [
    "مقاول جدة",
    "مقاول تشطيبات جدة",
    "مؤسسه تشطيبات جدة",
    "ديكورات جدة",
    "تشطيبات داخلية جدة",
    "تشطيبات خارجية جدة",
    "جبس بورد جدة",
    "بلاط جدة",
    "دهانات جدة",
    "كهرباء جدة",
    "سباكة جدة",
    "واجهات زجاجية جدة",
    "كلادينج جدة",
    "أعمال حديد جدة",
    "كنوز الذوق",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  applicationName: "كنوز الذوق",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
  },
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
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  openGraph: {
    title: "مقاول تشطيبات وديكورات في جدة | كنوز الذوق",
    description:
      "مؤسسه كنوز الذوق متخصصة في التشطيبات الداخلية والخارجية، الديكورات، الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة، والواجهات الزجاجية في جدة.",
    url: "https://kanouz-alzooq.com",
    siteName: "كنوز الذوق",
    locale: "ar_SA",
    type: "website",
    countryName: "Saudi Arabia",
    determiner: "the",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مؤسسه كنوز الذوق لتشطيبات وديكورات في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مقاول تشطيبات وديكورات في جدة | كنوز الذوق",
    description:
      "مؤسسه كنوز الذوق توفر خدمات تشطيبات وديكورات احترافية في جدة بخبرة عالية وجودة ثابتة.",
    images: ["/og-image.jpg"],
  },
  other: {
    "content-language": "ar-SA",
    "theme-color": "#d97706",
  },
};

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans`}>
        <StructuredData />
        <Navbar />
        <main id="main-content">{children}</main>
        <GoogleAnalytics />
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
