export const servicesGallery = [
  {
    id: 1,
    title: "أعمال سباكة",

    images: [
      "/images/projects/plumbing/1.jpg",
      "/images/projects/plumbing/2.jpg",
      "/images/projects/plumbing/3.jpg",
    ],
  },
  {
    id: 2,
    title: "التشطيبات الداخلية",
    
    images: [
      "/images/projects/interior/project-15.jpg",
      "/images/projects/interior/project-16.jpg",
      "/images/projects/interior/project-17.jpg",
    ],
  },
  {
    id: 3,
    title: "تشطيب بوية وديكور",
   
    images: [
      "/images/projects/gypsum/1.jpg",
      "/images/projects/gypsum/2.jpg",
    ],
  },
  {
    id: 4,
    title: "أعمال حديد",
    images: [
      "/images/projects/iron/1.jpg",
      "/images/projects/iron/2.jpg",
    ],
  },
];
// توليد جميع المشاريع تلقائياً
export const projects = servicesGallery.flatMap((service) =>
  service.images.map((image, index) => ({
    id: `${service.id}-${index}`,
    title: service.title,
    category: service.title,
    image,
    
  }))
);