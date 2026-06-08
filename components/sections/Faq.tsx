"use client";

import { useState } from "react";
import { faqs, whatsappUrl } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-600">
            Dúvidas frequentes
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Perguntas frequentes
          </h2>
        </header>

        <div className="mt-10 divide-y divide-navy/10 overflow-hidden rounded-2xl bg-white ring-1 ring-navy/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-medium text-navy">{item.q}</span>
                  <svg
                    className={`h-5 w-5 flex-none text-navy-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-navy/70 sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-navy/60">
          Não encontrou sua dúvida?{" "}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-navy-600 underline-offset-4 hover:underline"
          >
            Fale conosco no WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
