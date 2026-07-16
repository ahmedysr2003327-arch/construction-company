import { IconType } from "react-icons";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className="group rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3
hover:shadow-2xl"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl text-amber-600 transition group-hover:bg-amber-600 group-hover:text-white active:scale-95">
        <Icon />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>

      <p className="leading-7 text-slate-600">{description}</p>
    </div>
  );
}
