import Image from "next/image";
import { depoimentos } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-navy/15"}`}
          aria-hidden
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Depoimentos
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Quem constrói com a GN confia
          </h2>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {depoimentos.map((d) => (
            <figure
              key={d.author}
              className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-navy/10"
            >
              <Stars rating={d.rating} />
              <blockquote className="mt-4 flex-1 text-navy/80">
                “{d.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-navy/10 pt-4">
                <Image
                  src={d.avatar}
                  alt={d.author}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-navy/10"
                />
                <div>
                  <p className="font-display font-semibold text-navy">{d.author}</p>
                  <p className="mt-0.5 text-sm text-navy/55">{d.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
