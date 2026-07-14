import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Lightbox } from "./Lightbox";

// Slot de imagem de caso. Os arquivos serão gerados depois: enquanto não
// existirem em public/imagens/, o slot mostra um placeholder com o nome
// esperado e a mesma proporção. Quando o arquivo chegar, a imagem aparece
// sozinha, com zoom via Lightbox.

export function ImagemCaso({
  arquivo,
  proporcao,
  legenda,
}: {
  arquivo: string;
  proporcao: string;
  legenda?: string;
}) {
  const [faltando, setFaltando] = useState(false);
  const [zoom, setZoom] = useState(false);
  const src = `/imagens/${arquivo}`;

  return (
    <figure className="w-full">
      {faltando ? (
        <div
          style={{ aspectRatio: proporcao }}
          className="grid w-full place-items-center rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--secondary)]"
        >
          <div className="px-6 text-center">
            <ImageIcon size={22} className="mx-auto text-[var(--secondary-text)] opacity-60" />
            <p className="mt-2 font-mono text-xs text-[var(--secondary-text)]">{arquivo}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">imagem em produção</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={legenda ?? arquivo}
          loading="lazy"
          style={{ aspectRatio: proporcao }}
          onError={() => setFaltando(true)}
          onClick={() => setZoom(true)}
          className="w-full cursor-zoom-in rounded-2xl border border-[var(--border)] bg-white object-contain"
        />
      )}
      {legenda ? (
        <figcaption className="mt-2 text-xs text-[var(--muted)]">{legenda}</figcaption>
      ) : null}
      {zoom && !faltando ? (
        <Lightbox imagens={[src]} alt={legenda ?? arquivo} onClose={() => setZoom(false)} />
      ) : null}
    </figure>
  );
}
