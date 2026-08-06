import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

type Props = {
  title: string;
  image: string;
  category?: string;
  description?: string;
  location?: string;
  alt?: string;
};

export default function ProjectCard({
  title,
  image,

  description,
  location,
  alt,
}: Props) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={alt || `مشروع ${title} لشركة كنوز الذوق في جدة`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 33vw"
        />
      </div>

      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>

        {location && (
          <span className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
            <FaLocationDot className="text-base shrink-0" />
            <span>{location}</span>
          </span>
        )}

        {description && (
          <p className="text-sm leading-7 text-slate-600">{description}</p>
        )}
      </div>
    </article>
  );
}
