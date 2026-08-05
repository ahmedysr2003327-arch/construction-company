export const servicesGallery = [
  {
    id: 1,
    title: "أعمال سباكة",
    description: "تنفيذ أعمال السباكة وفق أعلى معايير الجودة والتفاصيل.",
    images: [
      "/images/projects/plumbing/1.jpg",
      "/images/projects/plumbing/2.jpg",
      "/images/projects/plumbing/3.jpg",
      "/images/projects/plumbing/4.jpg",
      "/images/projects/plumbing/5.jpg",
    ],
  },
  {
    id: 2,
    title: "التشطيبات الداخلية",
    description: "تنفيذ تشطيبات داخلية متكاملة مع التركيز على الجودة والتفاصيل.",
    images: [
      "/images/projects/interior/project-15.jpg",
      "/images/projects/interior/project-16.jpg",
      "/images/projects/interior/project-17.jpg",
    ],
  },
  {
    id: 3,
    title: "تشطيب بوية وديكور",
    description: "تنفيذ أعمال الجبس بورد والديكورات مع لمسات فنية دقيقة.",
    images: [
      "/images/projects/gypsum/1.jpg",
      "/images/projects/gypsum/2.jpg",
    ],
  },
  {
    id: 4,
    title: "أعمال حديد",
    description: "تنفيذ أعمال الحديد والتلييس باحترافية واهتمام بالتفاصيل.",
    images: [
      "/images/projects/iron/1.jpg",
      "/images/projects/iron/2.jpg",
    ],
  },
  {
    id: 5,
    title: "أعمال كهرباء",
    description: "تنفيذ أعمال الكهرباء بدقة وفق أعلى معايير التنفيذ.",
    images: [
      "/images/projects/electricity/1.jpg",
      "/images/projects/electricity/2.jpg",
      "/images/projects/electricity/3.jpg",
    ],
  },
];

export const projects = servicesGallery.flatMap((service) =>
  service.images.map((image, index) => ({
    id: `${service.id}-${index}`,
    title: service.title,
    category: service.title,
    description: service.description,
    location: "جدة",
    image,
    alt: `مشروع ${service.title} لشركة كنوز الذوق في جدة`,
  })),
);