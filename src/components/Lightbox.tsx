import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Lightbox({
  imagens,
  alt,
  startIndex = 0,
  onClose,
}: {
  imagens: string[];
  alt: string;
  startIndex?: number;
  onClose: () => void;
}) {
  const [atual, setAtual] = useState(startIndex);
  const multi = imagens.length > 1;

  const ir = (d: -1 | 1) => setAtual((v) => (v + d + imagens.length) % imagens.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && multi) setAtual((v) => (v + 1) % imagens.length);
      if (e.key === "ArrowLeft" && multi) setAtual((v) => (v - 1 + imagens.length) % imagens.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [multi, imagens.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 md:p-10 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        aria-label="Fechar (Esc)"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={22} />
      </button>

      {multi ? (
        <button
          type="button"
          aria-label="Imagem anterior"
          onClick={(e) => {
            e.stopPropagation();
            ir(-1);
          }}
          className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6"
        >
          <ChevronLeft size={24} />
        </button>
      ) : null}

      <motion.img
        key={imagens[atual]}
        src={imagens[atual]}
        alt={alt}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[86vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
      />

      {multi ? (
        <button
          type="button"
          aria-label="Próxima imagem"
          onClick={(e) => {
            e.stopPropagation();
            ir(1);
          }}
          className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6"
        >
          <ChevronRight size={24} />
        </button>
      ) : null}

      {multi ? (
        <div
          className="absolute bottom-6 left-0 right-0 flex justify-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {imagens.map((img, i) => (
            <button
              key={img}
              type="button"
              aria-label={`Ver imagem ${i + 1}`}
              onClick={() => setAtual(i)}
              className={`h-2 rounded-full transition-all ${i === atual ? "w-7 bg-white" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
      ) : null}
    </motion.div>
  );
}
