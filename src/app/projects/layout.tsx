import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "مشاريعنا | كنوز الذوق",
    template: "%s | كنوز الذوق",
  },
  description:
    "استعرض مشاريعنا في التشطيبات والديكورات في جدة، بما في ذلك أعمال الجبس بورد، البلاط، الدهانات، الكهرباء، السباكة والواجهات الزجاجية.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "مشاريعنا | كنوز الذوق",
    description:
      "مشاريع تنفيذية متنوعة في التشطيبات والديكورات داخل جدة، مع الالتزام بالجودة والتفاصيل.",
    url: "https://kanouz-alzooq.com/projects",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مشاريع تشطيبات وديكور لمؤسسه كنوز الذوق في جدة",
      },
    ],
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
