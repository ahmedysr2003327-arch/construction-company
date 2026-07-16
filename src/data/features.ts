import {
  FaAward,
  FaClock,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

import { IconType } from "react-icons";

export type Feature = {
  title: string;
  description: string;
  icon: IconType;
};

export const features: Feature[] = [
  {
    title: "جودة عالية",
    description: "نستخدم أفضل الخامات وننفذ بأعلى معايير الجودة.",
    icon: FaAward,
  },
  {
    title: "الالتزام بالمواعيد",
    description: "نسلم جميع المشاريع في الوقت المتفق عليه.",
    icon: FaClock,
  },
  {
    title: "فريق متخصص",
    description: "مهندسون وفنيون يمتلكون خبرة طويلة في المجال.",
    icon: FaUsers,
  },
  {
    title: "أسعار تنافسية",
    description: "أفضل قيمة مقابل الجودة مع أسعار مناسبة.",
    icon: FaHandshake,
  },
];