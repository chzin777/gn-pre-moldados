"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ObraCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (i: number) => setIndex((i + count) % count);

  // autoplay (pausa em prefers-reduced-motion)
  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setIndex((p) => (p + 1) % count), 4500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [count]);

  const stop = () => {
    if (timer.current) clearInterval(timer.current);
  };

  return (
    <div className="group/carousel relative h-full w-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — foto ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      ))}

      {count > 1 && (
        <>
          {/* setas */}
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={() => {
              stop();
              go(index - 1);
            }}
            className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-navy/60 text-white opacity-0 backdrop-blur transition-opacity hover:bg-navy group-hover/carousel:opacity-100 focus:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Próxima foto"
            onClick={() => {
              stop();
              go(index + 1);
            }}
            className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-navy/60 text-white opacity-0 backdrop-blur transition-opacity hover:bg-navy group-hover/carousel:opacity-100 focus:opacity-100"
          >
            ›
          </button>

          {/* dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para foto ${i + 1}`}
                aria-current={i === index}
                onClick={() => {
                  stop();
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
