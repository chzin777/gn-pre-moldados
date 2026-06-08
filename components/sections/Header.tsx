"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "#produtos", label: "Produtos" },
  { href: "#obras", label: "Obras" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy/95 shadow-lg shadow-navy/10 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" aria-label="GN Pré-moldados — início">
          <Logo variant="light" />
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-navy transition-transform hover:scale-[1.03] active:scale-95"
          >
            Orçamento
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-6 flex-col gap-[5px]">
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden bg-navy transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-white px-5 py-3 text-center text-base font-semibold text-navy"
          >
            Pedir orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
