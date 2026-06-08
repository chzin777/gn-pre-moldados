import Logo from "@/components/ui/Logo";
import { site, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#obras", label: "Obras" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.slogan}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm md:items-center">
          <span className="mb-1 font-display font-semibold text-white">
            Navegação
          </span>
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="text-sm md:text-right">
          <span className="mb-1 block font-display font-semibold text-white">
            Contato
          </span>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            WhatsApp — pedir orçamento
          </a>
          <p className="mt-2 text-white/50">{site.city}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-white/40 sm:px-6">
          © {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
