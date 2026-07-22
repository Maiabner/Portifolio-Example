import { Fragment } from "react";
import { motion } from "framer-motion";
import { RESUMO_PONTOS } from "../dados";

const ROMANOS = ["i", "ii", "iii", "iv", "v", "vi"];

// Realça em latão os trechos de `destaque` dentro do texto, mantendo o resto no grafite.
function realcar(texto: string, destaque?: string[]) {
  if (!destaque || destaque.length === 0) return texto;
  const escapados = destaque.map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escapados.join("|")})`, "g");
  return texto.split(re).map((parte, i) =>
    destaque.includes(parte) ? (
      <b key={i} className="font-medium text-[var(--accent)] [font-variant-numeric:tabular-nums]">
        {parte}
      </b>
    ) : (
      <Fragment key={i}>{parte}</Fragment>
    )
  );
}

export function Stats() {
  return (
    <section id="resumo" className="px-6 py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[640px]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Resumo</p>
          <h2 className="mt-3 text-3xl md:text-[44px] leading-tight font-medium tracking-heading">
            O que os casos <span className="font-titulo italic font-normal">demonstram</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--muted)] leading-relaxed">
            Cinco situações diferentes, quatro capacidades que se repetem quando uma empresa precisa
            crescer sem perder controle.
          </p>
        </motion.div>

        <div className="mt-10 border-t border-[var(--border)]">
          {RESUMO_PONTOS.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[auto_1fr] items-baseline gap-x-6 md:gap-x-12 border-b border-[var(--border)] py-7"
            >
              <span className="pt-1 font-mono text-sm tracking-wide text-[var(--accent)]">
                {ROMANOS[i] ?? String(i + 1)}
              </span>
              <div>
                <h3 className="font-titulo italic text-xl md:text-2xl leading-tight text-[var(--text)]">
                  {item.titulo}
                </h3>
                <p className="mt-2 max-w-[66ch] text-sm md:text-base leading-relaxed text-[var(--muted)]">
                  {realcar(item.texto, item.destaque)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
