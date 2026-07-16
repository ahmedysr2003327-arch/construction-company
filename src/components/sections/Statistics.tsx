import Container from "../ui/Container";
import { statistics } from "@/data/statistics";

export default function Statistics() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 rounded-2xl bg-slate-900 p-10 text-center text-white md:grid-cols-4">
          {statistics.map((item) => (
            <div key={item.label}>
              <h2 className="text-4xl font-bold text-amber-500">
                {item.number}
              </h2>

              <p className="mt-2 text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
