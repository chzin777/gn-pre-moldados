import ModelViewer from "@/components/three/LazyViewer";
import SideRays from "@/components/sections/SideRays";
import { site, whatsappUrl } from "@/lib/site";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy text-white">
      {/* Fundo animado SideRays (azul + branco) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <SideRays
          speed={2.5}
          rayColor1="#ffffff"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={1}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-navy via-navy/70 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-6 lg:pb-24 lg:pt-36">
        {/* Texto */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Pré-moldados de concreto
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Qualidade que sustenta,
            <span className="block text-white/70">confiança que constrói.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg lg:mx-0">
            Lajes treliçadas, blocos EPS e pingadeiras pré-moldados com padrão de
            qualidade para a sua obra andar mais rápido e durar mais.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-navy transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="#produtos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Ver produtos
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center lg:mx-0 lg:text-left">
            {[
              { n: "6", l: "linhas de produto" },
              { n: "100%", l: "controle de qualidade" },
              { n: "Obra", l: "entrega no local" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold text-white">
                  {s.n}
                </dt>
                <dd className="mt-1 text-xs text-white/60">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Visual 3D */}
        <div className="relative h-[300px] w-full sm:h-[380px] lg:h-[460px]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent ring-1 ring-white/10" />
          <ModelViewer
            productId="laje"
            className="relative h-full w-full [&_canvas]:cursor-grab [&_canvas]:active:cursor-grabbing"
          />
          <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-white/40">
            arraste para girar • {site.shortName} 3D
          </span>
        </div>
      </div>
    </section>
  );
}
