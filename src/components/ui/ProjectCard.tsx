import Image from "next/image";

type Props = {
  title: string;

  image: string;
};

export default function ProjectCard({ title, image }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={`${title} `}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 33vw"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      </div>
    </article>
  );
}
