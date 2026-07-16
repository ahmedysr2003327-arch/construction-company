import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

import { company } from "@/data/company";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: company.name,
    template: `%s | ${company.name}`,
  },

  description: company.description,

  keywords: [
    "تشطيبات",
    "ديكورات",
    "جبس بورد",
    "تشطيب فلل",
    "تشطيب شقق",
    "واجهات زجاجية",
    "كلادينج",
    "السعودية",
  ],

  authors: [
    {
      name: company.name,
    },
  ],

  creator: company.name,

  openGraph: {
    title: company.name,
    description: company.description,
    images: [
      {
        url: company.heroImage,
      },
    ],
  },
};

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans`}>
        {" "}
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
