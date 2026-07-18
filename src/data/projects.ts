export type Project = {
  id: number;
  title: string;
  location: string;
  image: string;
  category: string;
  featured: boolean;
};

export const projects: Project[] = [
   {
    id: 1,
    title: "تشطيب فيلا",
    location: "الرياض",
    image: "/images/projects/project-1.jpg",
    category: "فلل",
    featured: true,
  },
  {
    id: 2,
    title: "تشطيب شقة",
    location: "جدة",
    image: "/images/projects/project-2.jpg",
    category: "شقق",
    featured: true,
  },
  {
    id: 3,    
    title: "واجهة زجاجية",
    location: "الدمام",
    image: "/images/projects/project-3.jpg",
    category: "واجهات",
    featured: true,
  },
  {
    id: 4,
    title: "ديكور داخلي",
    location: "مكة",
    image: "/images/projects/project-4.jpg",
    category: "ديكورات",
    featured: true,  
  },
  {
    id: 5,
    title: "جبس بورد",
    location: "المدينة",
    image: "/images/projects/project-5.jpg",
    category: "ديكورات",
    featured: true,
  },
  {
    id: 6,
    title: "تشطيب مكتب",
    location: "الرياض",
    image: "/images/projects/project-6.jpg",
    category: "فلل",
    featured: true,
  },
  {
    id: 7,
    title: "ديكور خارجي",
    location: "الدمام",
    image: "/images/projects/project-7.jpg",
    category: "ديكورات",
    featured: false,
  },
  {
    id: 8,
    title: "تشطيب مطعم",
    location: "الرياض",
    image: "/images/projects/project-8.jpg",
    category: "مطاعم",
    featured: false,
  },
  {
    id: 9,
    title: "تشطيب مكتب",
    location: "الرياض",
    image: "/images/projects/project-9.jpg",
    category: "فلل",
    featured: false,
  }
];