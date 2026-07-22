import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { MarcaLockup } from "./Marca";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  ["Início", "#inicio"],
  ["Trajetória", "#trajetoria"],
  ["Método", "#metodo"],
  ["Casos", "#casos"],
  ["Resumo", "#resumo"],
] as const;

export function Nav() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(8,15,16,0.06)]" : ""
      }`}
      style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{
          scaleX: scrollYProgress,
          background: "linear-gradient(90deg, var(--primary), var(--accent))",
        }}
      />
      <nav className="max-w-[1080px] mx-auto px-6 h-16 flex items-center justify-between">
        <MarcaLockup />
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-3.5 py-2 rounded-full text-sm text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contato"
            className="btn-primary-shadow hidden sm:inline-flex items-center rounded-full bg-[var(--primary)] px-5 py-2 text-sm font-medium text-[var(--primary-text)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
}