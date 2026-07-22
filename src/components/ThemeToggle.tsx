import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

// Alterna entre a versão Papel (clara, base) e a versão Noir (escura).
// O ícone reflete a versão ATIVA: sol = Papel (dia), lua = Noir (noite).
// A preferência fica em localStorage; o tema inicial é aplicado antes do
// paint por um script inline no index.html (evita flash).

type Tema = "light" | "dark";

function lerTemaAtual(): Tema {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [tema, setTema] = useState<Tema>("light");

  useEffect(() => {
    setTema(lerTemaAtual());
    // Libera as transições de cor só depois da montagem, para o load inicial não animar.
    document.documentElement.classList.add("tema-pronto");
  }, []);

  const alternar = () => {
    const proximo: Tema = tema === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", proximo);
    try {
      localStorage.setItem("tema", proximo);
    } catch {
      /* localStorage indisponível: mantém só a sessão atual */
    }
    setTema(proximo);
  };

  const noir = tema === "dark";

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={noir ? "Mudar para a versão Papel (clara)" : "Mudar para a versão Noir (escura)"}
      title={noir ? "Versão Noir · escura" : "Versão Papel · clara"}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={noir ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -80, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 80, scale: 0.5 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="grid place-items-center"
        >
          {noir ? <Moon size={17} strokeWidth={1.8} /> : <Sun size={17} strokeWidth={1.8} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
