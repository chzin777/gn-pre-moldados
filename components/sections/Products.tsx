"use client";

import { useState } from "react";
import ModelViewer from "@/components/three/LazyViewer";
import { products, whatsappUrl } from "@/lib/site";

export default function Products() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section id="produtos" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Nossos produtos
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Veja as peças em 3D
          </h2>
          <p className="mt-3 text-base text-navy/65">
            Gire, aproxime e explore cada pré-moldado antes de pedir o orçamento.
          </p>
        </header>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {products.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                i === active
                  ? "bg-navy text-white shadow-md shadow-navy/20"
                  : "bg-white text-navy/70 ring-1 ring-navy/10 hover:ring-navy/25"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Showcase */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Canvas */}
          <div className="relative h-[320px] overflow-hidden rounded-3xl bg-gradient-to-b from-white to-mist ring-1 ring-navy/10 sm:h-[400px]">
            <ModelViewer
              key={product.id}
              productId={product.id}
              className="h-full w-full [&_canvas]:cursor-grab [&_canvas]:active:cursor-grabbing"
            />
            <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy/5 px-3 py-1 text-[11px] text-navy/45">
              arraste para girar
            </span>
          </div>

          {/* Detalhes */}
          <div className="flex flex-col justify-center rounded-3xl bg-white p-6 ring-1 ring-navy/10 sm:p-8">
            <p className="text-sm font-semibold text-navy-600">
              {product.tagline}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-navy">
              {product.name}
            </h3>
            <p className="mt-3 text-navy/70">{product.description}</p>

            <ul className="mt-5 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-navy/80">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-none text-navy-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={whatsappUrl(
                `Olá! Tenho interesse em ${product.name}. Pode me passar um orçamento?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 self-start rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
            >
              Orçar {product.name}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
