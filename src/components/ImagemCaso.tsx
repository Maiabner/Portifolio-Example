import { useEffect, useState } from "react";
import { ImageIcon } from "lucide-react";
import { Lightbox } from "./Lightbox";

// Slot de imagem de caso.
// - Um arquivo: imagem única, zoom via Lightbox.
// - Dois ou mais: os quadros alternam com cross-fade (duracoes por quadro, em ms).
// - zoom: imagens mostradas no Lightbox (padrão = os próprios quadros).
// Respeita prefers-reduced-motion: sem alternância, os quadros ficam empilhados.

type Props = {
  arquivos: string[];
  proporcao: string;
  legenda?: string;
  zoom?: string[];
  duracoes?: number[];
};

function usePrefereMenosMovimento() {
  const [reduzir, setReduzir] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduzir(mq.matches);
    const onChange = () => setReduzir(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduzir;
}

export function ImagemCaso({ arquivos, proporcao, legenda, zoom, duracoes }: Props) {
  const [faltando, setFaltando] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [i, setI] = useState(0);
  const reduzir = usePrefereMenosMovimento();

  const fontes = arquivos.map((a) => `/imagens/${a}`);
  const zoomFontes = (zoom ?? arquivos).map((a) => `/imagens/${a}`);
  const multi = fontes.length > 1;
  const alterna = multi && !reduzir;

  // Alternância entre os quadros (só quando há movimento permitido).
  useEffect(() => {
    if (!alterna) return;
    const dur = duracoes?.[i] ?? 5000;
    const id = window.setTimeout(() => setI((v) => (v + 1) % fontes.length), dur);
    return () => window.clearTimeout(id);
  }, [alterna, i, fontes.length, duracoes]);

  if (faltando) {
    return (
      <figure className="w-full">
        <div
          style={{ aspectRatio: proporcao }}
          className="grid w-full place-items-center rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--secondary)]"
        >
          <div className="px-6 text-center">
            <ImageIcon size={22} className="mx-auto text-[var(--secondary-text)] opacity-60" />
            <p className="mt-2 font-mono text-xs text-[var(--secondary-text)]">{arquivos[0]}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">imagem em produção</p>
          </div>
        </div>
        {legenda ? <figcaption className="mt-2 text-xs text-[var(--muted)]">{legenda}</figcaption> : null}
      </figure>
    );
  }

  // Sem movimento e com vários quadros: empilha para nada se perder.
  if (multi && reduzir) {
    return (
      <figure className="w-full">
        <div className="flex flex-col gap-3">
          {fontes.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={legenda ?? arquivos[idx]}
              loading="lazy"
              onError={() => setFaltando(true)}
              onClick={() => setAberto(true)}
              style={{ aspectRatio: proporcao }}
              className="w-full cursor-zoom-in rounded-2xl border border-[var(--border)] bg-[var(--surface)] object-contain"
            />
          ))}
        </div>
        {legenda ? <figcaption className="mt-2 text-xs text-[var(--muted)]">{legenda}</figcaption> : null}
        {aberto ? <Lightbox imagens={zoomFontes} alt={legenda ?? arquivos[0]} onClose={() => setAberto(false)} /> : null}
      </figure>
    );
  }

  return (
    <figure className="w-full">
      <button
        type="button"
        onClick={() => setAberto(true)}
        style={{ aspectRatio: proporcao }}
        aria-label={legenda ? `Ampliar: ${legenda}` : "Ampliar imagem"}
        className="relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
      >
        {fontes.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={legenda ?? arquivos[idx]}
            loading="lazy"
            onError={() => setFaltando(true)}
            style={{ opacity: idx === i ? 1 : 0 }}
            className="absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-out"
          />
        ))}
      </button>

      {alterna ? (
        <div className="mt-2 flex justify-center gap-1.5" aria-hidden="true">
          {fontes.map((src, idx) => (
            <span
              key={src}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === i ? "w-5 bg-[var(--primary)]" : "w-1.5 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      ) : null}

      {legenda ? <figcaption className="mt-2 text-xs text-[var(--muted)]">{legenda}</figcaption> : null}
      {aberto ? <Lightbox imagens={zoomFontes} alt={legenda ?? arquivos[0]} onClose={() => setAberto(false)} /> : null}
    </figure>
  );
}
