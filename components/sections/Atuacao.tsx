import { atuacao, whatsappUrl } from "@/lib/site";

export default function Atuacao() {
  return (
    <section id="atuacao" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Área de atuação
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Onde a gente entrega
          </h2>
          <p className="mt-3 text-base text-navy/65">
            Base em {atuacao.base}. {atuacao.raio}. Atende sua cidade? Confirme no
            orçamento.
          </p>
        </header>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {atuacao.cidades.map((c) => (
            <span
              key={c}
              className="rounded-full bg-mist px-4 py-2 text-sm font-medium text-navy ring-1 ring-navy/10"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappUrl("Olá! Vocês entregam na minha cidade?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-base font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            Confirmar entrega
          </a>
        </div>
      </div>
    </section>
  );
}
