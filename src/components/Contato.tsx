import { motion } from "framer-motion";
import { Dumbbell, Linkedin, Mail } from "lucide-react";
import { PERFIL } from "../dados";

export function Contato() {
  return (
    <section id="contato" className="pt-12 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden px-6 py-16 md:py-24"
        style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--teal-deep) 62%, var(--primary-deep) 100%)" }}
      >
        <span
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(620px circle at 72% 100%, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)" }}
        />

        <div className="relative max-w-[820px] mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/55">06 — Contato</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-medium tracking-display text-white">
            Seguimos a <span className="font-titulo italic font-normal">conversa</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#B9C7D8] leading-relaxed max-w-[520px] mx-auto">
            Se o que você leu aqui conversa com o que você procura, estes são os canais.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PERFIL.email}`}
              className="btn-primary-shadow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--primary))" }}
            >
              <Mail size={16} /> {PERFIL.email}
            </a>
            <a
              href={PERFIL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--text)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Linkedin size={16} color="var(--primary)" /> LinkedIn
            </a>
            <a
              href={`https://wa.me/${PERFIL.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[var(--text)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span className="grid h-5 w-5 place-items-center">
                <img src="/logos/whatsapp.svg" alt="" className="h-4 w-4" />
              </span>
              WhatsApp &middot; {PERFIL.whatsappBonito}
            </a>
          </div>

          <p className="mt-8 flex items-start justify-center gap-2 text-left text-sm leading-relaxed text-white/75">
            <Dumbbell size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
            <span>Fora do trabalho: noivo da Anna, pai do Ares, praticante de CrossFit e leitor assíduo de bons livros e conteúdos.</span>
          </p>

          <div className="mt-6 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
            <span>{PERFIL.nome}</span>
            <span className="font-mono">{PERFIL.cidade} &middot; 2026</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}