import { IconType } from "react-icons";

type Props = {
  title: string;
  description: string;
  icon: IconType;
};

export default function FeatureCard({ title, description, icon: Icon }: Props) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl text-amber-600">
        <Icon />
      </div>

      <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>

      <p className="leading-7 text-slate-600">{description}</p>
    </article>
  );
}
