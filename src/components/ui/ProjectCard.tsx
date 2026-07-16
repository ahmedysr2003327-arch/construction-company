import Image from "next/image";

type Props = {
  title: string;
  location: string;
  image: string;
};

export default function ProjectCard({ title, location, image }: Props) {
  return (
    <article className="group overflow-hidden rounded-2xl shadow-md">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/40" />
      </div>

      <div className="bg-white p-6">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>

        <p className="mt-2 text-slate-500">📍 {location}</p>
      </div>
    </article>
  );
}
