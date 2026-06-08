import { normas } from "@/lib/site";

export default function NormasBand() {
  return (
    <section aria-label="Normas técnicas" className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-navy-600">
          Produzido conforme as normas técnicas brasileiras
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {normas.map((n) => (
            <div
              key={n.code}
              className="rounded-2xl border border-navy/10 bg-mist/40 px-5 py-5 text-center"
            >
              <p className="font-display text-xl font-bold text-navy">{n.code}</p>
              <p className="mt-1 text-sm text-navy/60">{n.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
