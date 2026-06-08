import Reveal from "@/components/ui/Reveal";
import { site, whatsappUrl } from "@/lib/site";

const points = [
  "Concreto com traço controlado em cada peça",
  "Equipe que orienta no dimensionamento da sua laje",
  "Atendimento a clientes finais, construtoras e revendas",
];

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Sobre a {site.shortName}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Feita para sustentar o que importa
          </h2>
          <p className="mt-4 text-white/75">
            A {site.name} produz pré-moldados de concreto com foco em qualidade e
            prazo. Do primeiro contato à entrega na obra, trabalhamos para que
            cada peça chegue pronta para o seu projeto — com a segurança de quem
            entende de estrutura.
          </p>
          <p className="mt-4 font-display text-lg font-semibold text-white">
            “{site.slogan}”
          </p>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-navy transition-transform hover:scale-[1.03] active:scale-95"
          >
            Falar com a equipe
          </a>
        </Reveal>

        <Reveal delay={120} className="grid gap-4">
          {points.map((p) => (
            <div
              key={p}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-white text-navy">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.1 3.1 6.8-6.8a1 1 0 0 1 1.4 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="text-white/85">{p}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
