// Marca "Abner Maia" — monograma am. em SVG inline.
// A referência visual é editorial, mas adaptada para o azul institucional do site.

export function MarcaAM({ size = 38 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-label="Marca Abner Maia">
      <defs>
        <linearGradient id="amMarkGradient" x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--primary-deep)" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="17" fill="url(#amMarkGradient)" />
      <text
        x="27"
        y="43"
        textAnchor="middle"
        fontFamily="var(--font-titulo)"
        fontStyle="italic"
        fontSize="34"
        fill="var(--primary-text)"
      >
        am
      </text>
      <circle cx="53" cy="43" r="4.5" fill="var(--accent)" />
    </svg>
  );
}

export function MarcaLockup() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 group">
      <span className="transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3">
        <MarcaAM />
      </span>
      <span className="flex items-baseline gap-1.5">
        <span className="text-xl md:text-2xl font-extrabold leading-none tracking-heading text-[var(--primary-deep)]">
          Abner Maia Albanez
        </span>
      </span>
    </a>
  );
}
