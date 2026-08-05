import Image from "next/image";

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
  category,
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
        <div className="flex flex-wrap items-center gap-2">
          {category && (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              {category}
            </span>
          )}
          {location && (
            <span className="text-sm text-slate-500">📍 {location}</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900">{title}</h3>

        {description && (
          <p className="text-sm leading-7 text-slate-600">{description}</p>
        )}
      </div>
    </article>
  );
}
