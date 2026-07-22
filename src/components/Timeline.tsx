import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { TRAJETORIA } from "../dados";

const GRUPOS = [
  {
    tipo: "formacao",
    titulo: "Formação acadêmica",
    cor: "var(--primary)",
  },
  {
    tipo: "experiencia",
    titulo: "Experiência profissional",
    cor: "var(--accent)",
  },
] as const;

export function Timeline() {
  const trilhoRef = useRef<HTMLDivElement>(null);
  // A linha se desenha conforme a seção atravessa a viewport
  const { scrollYProgress } = useScroll({
    target: trilhoRef,
    offset: ["start 0.85", "end 0.55"],
  });

  return (
    <section id="trajetoria" className="px-6 py-16 md:py-24">
      <div className="max-w-[820px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Trajetória</p>
          <h2 className="mt-3 text-3xl md:text-[46px] leading-tight font-medium tracking-heading">
            Formação e <span className="font-titulo italic font-normal">experiência</span>
          </h2>
        </motion.div>

        <div ref={trilhoRef} className="mt-12 relative">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--border)]" />
          <motion.span
            className="absolute left-[6.5px] top-2 bottom-2 w-[2px] origin-top rounded-full"
            style={{
              scaleY: scrollYProgress,
              background: "linear-gradient(to bottom, var(--primary), var(--accent))",
            }}
          />
          <div className="flex flex-col gap-14">
            {GRUPOS.map((grupo, grupoIndex) => {
              const itens = TRAJETORIA.filter((t) => t.tipo === grupo.tipo);

              return (
                <div key={grupo.tipo} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: grupoIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="relative pl-10"
                  >
                    <span
                      className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-[3px] bg-[var(--bg)]"
                      style={{ borderColor: grupo.cor }}
                    />
                    <p
                      className="inline-flex rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        background: `color-mix(in srgb, ${grupo.cor} 10%, transparent)`,
                        color: grupo.cor,
                      }}
                    >
                      {grupo.titulo}
                    </p>
                  </motion.div>

                  <div className="mt-7 flex flex-col gap-9">
                    {itens.map((t, i) => (
                      <motion.article
                        key={t.titulo}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="relative pl-10"
                      >
                        <span
                          className="absolute left-[2px] top-2 h-[11px] w-[11px] rounded-full border-[2px] bg-[var(--bg)]"
                          style={{ borderColor: grupo.cor }}
                        />
                        <p className="font-mono text-xs text-[var(--muted)] tracking-wide">{t.periodo}</p>
                        <h3 className="mt-1 text-lg md:text-xl font-medium">
                          {t.titulo} <span className="text-[var(--muted)] font-normal">· {t.org}</span>
                        </h3>
                        <p className="mt-1.5 text-sm md:text-base leading-relaxed text-[var(--muted)] max-w-[560px]">
                          {t.texto}
                        </p>
                      </motion.article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
