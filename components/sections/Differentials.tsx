import Reveal from "@/components/ui/Reveal";
import { differentials } from "@/lib/site";

const icons = [
  <path
    key="0"
    d="M12 2l2.4 1.7 2.9-.2 1 2.8 2.4 1.6-.9 2.8.9 2.8-2.4 1.6-1 2.8-2.9-.2L12 22l-2.4-1.7-2.9.2-1-2.8L3.3 16l.9-2.8L3.3 10l2.4-1.6 1-2.8 2.9.2L12 2z"
  />,
  <>
    <circle key="c" cx="12" cy="12" r="9" />
    <path key="h" d="M12 7v5l3 2" />
  </>,
  <path
    key="2"
    d="M3 6h11v9H3zM14 9h4l3 3v3h-7zM7.5 18.5a1.5 1.5 0 1 0 0-.01M17.5 18.5a1.5 1.5 0 1 0 0-.01"
  />,
  <path key="3" d="M21 12a8 8 0 1 1-3.2-6.4M21 5v4h-4" />,
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Por que a GN
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Pré-moldados que sua obra pode confiar
          </h2>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 80}
              className="group rounded-2xl border border-navy/10 bg-mist/40 p-6 transition-colors hover:border-navy/30 hover:bg-mist"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-white transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                  aria-hidden
                >
                  {icons[i]}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                {d.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
