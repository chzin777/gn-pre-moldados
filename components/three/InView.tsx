"use client";

import { useEffect, useRef, useState } from "react";

interface InViewProps {
  children: React.ReactNode;
  /** Margem para pré-carregar antes de entrar na tela. */
  rootMargin?: string;
  className?: string;
  fallback?: React.ReactNode;
}

/**
 * Só renderiza os filhos (ex.: um Canvas WebGL) quando o container entra
 * na viewport. Evita inicializar 3D fora da tela no carregamento.
 */
export default function InView({
  children,
  rootMargin = "300px",
  className,
  fallback,
}: InViewProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {show
        ? children
        : fallback ?? (
            <div className="flex h-full w-full items-center justify-center">
              <div className="h-7 w-7 animate-spin rounded-full border-2 border-navy/20 border-t-navy" />
            </div>
          )}
    </div>
  );
}
