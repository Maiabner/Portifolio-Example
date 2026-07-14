import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PERFIL, HEADLINE, PAPEIS } from "../dados";

const entrada = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// Par de palavras que cicla abaixo da headline
function ParCiclante() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % PAPEIS.length), 3400);
    return () => clearInterval(id);
  }, []);
  const atual = PAPEIS[i];
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2">
      <span>Feito com</span>
      <span key={`${i}-a`} className="animate-role-fade-in font-titulo italic" style={{ color: "var(--primary)" }}>
        {atual.primeiro}
      </span>
      <span>e</span>
      <span key={`${i}-b`} className="animate-role-fade-in font-titulo italic" style={{ color: "var(--primary)" }}>
        {atual.segundo}<span className="not-italic font-sans text-[var(--text)]">.</span>
      </span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="pt-28 md:pt-36 pb-8 md:pb-10 px-6 overflow-hidden">
      <div className="max-w-[1080px] mx-auto">
        <motion.p
          {...entrada(0.1)}
          className="font-mono text-xs md:text-sm text-[var(--muted)] tracking-[0.18em] uppercase flex items-center gap-2"
        >
          <MapPin size={14} color="var(--accent)" /> {PERFIL.cargo} · {PERFIL.cidade}
        </motion.p>

        <motion.h1
          {...entrada(0.25)}
          className="mt-6 max-w-[920px] text-[40px] md:text-[58px] lg:text-[64px] leading-[1.06] tracking-display font-medium"
        >
          Construo a <span className="font-titulo italic font-normal" style={{ color: "var(--primary)" }}>operação</span> e
          os <span className="font-titulo italic font-normal" style={{ color: "var(--primary)" }}>produtos</span> que fazem
          a empresa vender<span style={{ color: "var(--accent)" }}>.</span>
        </motion.h1>

        <motion.p {...entrada(0.42)} className="mt-6 text-xl md:text-[26px] text-[var(--text)]">
          <ParCiclante />
        </motion.p>

        <motion.p
          {...entrada(0.58)}
          className="mt-6 max-w-[660px] text-base md:text-lg leading-relaxed text-[var(--muted)]"
        >
          {HEADLINE.apoio}
        </motion.p>
      </div>
    </section>
  );
}
