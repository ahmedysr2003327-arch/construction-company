import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container className="py-24">
      <div className="animate-pulse">
        <div className="mx-auto mb-12 h-10 w-72 rounded bg-slate-200" />

        <div className="mx-auto mb-20 h-5 w-96 rounded bg-slate-200" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200"
            >
              <div className="h-72 bg-slate-200" />

              <div className="space-y-4 p-6">
                <div className="h-6 w-2/3 rounded bg-slate-200" />

                <div className="h-4 w-1/2 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
