import { motion } from "framer-motion";
import { PERFIL, BIO } from "../dados";

export function Bio() {
  return (
    <section id="bio" className="px-6 py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto grid md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Quem sou</p>
          <h2 className="mt-3 text-3xl md:text-[46px] leading-tight font-medium tracking-heading">
            Um padrão de <span className="font-titulo italic font-normal">trabalho</span>
          </h2>
          <div className="mt-6 flex flex-col gap-4 max-w-[620px]">
            {BIO.map((p) => (
              <p key={p.slice(0, 32)} className="text-base md:text-lg leading-relaxed text-[var(--text)]">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 24, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2.5 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          className="relative mx-auto w-full max-w-[310px] md:mt-10 cursor-pointer select-none"
        >
          <div className="bg-[var(--surface)] p-4 pb-9 rounded-[16px] border border-[var(--border)]">
            <img
              src={PERFIL.foto}
              alt={PERFIL.nome}
              loading="lazy"
              className="w-full rounded-[8px] object-cover aspect-square object-center border border-[var(--border)]"
            />
            <div className="mt-5 text-center">
              <p className="font-titulo italic text-2xl text-[var(--text)] leading-tight">
                {PERFIL.nome}
              </p>
              <p className="mt-1.5 font-mono text-[9px] uppercase tracking-wider text-[var(--muted)]">
                {PERFIL.cargo}
              </p>
            </div>
          </div>
          <span
            className="absolute -z-10 -bottom-6 -right-6 h-36 w-36 rounded-full blur-2xl opacity-25"
            style={{ background: "var(--accent)" }}
          />
        </motion.figure>
      </div>
    </section>
  );
}
