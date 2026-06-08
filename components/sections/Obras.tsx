import Image from "next/image";
import ObraCarousel from "@/components/sections/ObraCarousel";
import { obras } from "@/lib/site";

export default function Obras() {
  return (
    <section id="obras" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Obras
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Concreto que virou obra
          </h2>
          <p className="mt-3 text-base text-navy/65">
            Uma amostra do que já produzimos e entregamos para clientes e
            construtoras da região.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {obras.map((o) => (
            <article
              key={o.title}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10 transition-shadow hover:shadow-lg hover:shadow-navy/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                {o.images && o.images.length > 0 ? (
                  <ObraCarousel images={o.images} alt={o.title} />
                ) : o.image ? (
                  <Image
                    src={o.image}
                    alt={o.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy-700 to-navy-900">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      className="h-14 w-14 text-white/20"
                      aria-hidden
                    >
                      <path d="M8 56V20l16-8 16 8v36M40 56V28l16-6v34M14 30h6M14 40h6M28 30h6M28 40h6M46 32h4M46 42h4" />
                    </svg>
                    <span className="text-[11px] text-white/35">foto em breve</span>
                  </div>
                )}
              </div>

              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-600">
                  {o.category}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy">
                  {o.title}
                </h3>
                <p className="mt-0.5 text-sm text-navy/55">{o.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
