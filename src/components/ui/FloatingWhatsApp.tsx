import { FaWhatsapp } from "react-icons/fa";
import { company } from "@/data/company";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="
        group
        fixed
        bottom-6
        left-6
        z-50
        flex
        items-center
        overflow-hidden
        rounded-full
        bg-[#25D366]
        px-5
        py-4
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <FaWhatsapp className="text-3xl" />

      <span
        className="
          max-w-0
          overflow-hidden
          whitespace-nowrap
          pr-0
          transition-all
          duration-300
          group-hover:max-w-xs
          group-hover:pr-3
        "
      >
        تواصل معنا
      </span>
    </a>
  );
}
