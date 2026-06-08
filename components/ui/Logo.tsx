import { site } from "@/lib/site";

interface LogoProps {
  /** Cor do texto. "light" para fundos escuros (navy). */
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-lg bg-white font-display text-sm font-extrabold text-navy shadow-sm"
      >
        GN
      </span>
      <span className={`font-display text-lg font-bold leading-none ${text}`}>
        {site.name.split(" ")[0]}{" "}
        <span className="font-semibold opacity-80">Pré-moldados</span>
      </span>
    </span>
  );
}
