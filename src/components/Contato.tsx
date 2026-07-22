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
        className="relative overflow-hidden border-t border-[var(--accent)] px-6 py-16 md:py-24"
      >
        <span
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: "radial-gradient(620px circle at 72% 100%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 70%)" }}
        />

        <div className="relative max-w-[820px] mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Contato</p>
          <h2 className="mt-4 text-4xl md:text-6xl font-medium tracking-display text-[var(--text)]">
            Seguimos a <span className="font-titulo italic font-normal" style={{ color: "var(--accent)" }}>conversa</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-[520px] mx-auto">
            Se o que você leu aqui conversa com o que você procura, estes são os canais.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PERFIL.email}`}
              className="btn-primary-shadow inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium text-[var(--primary-text)] transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <Mail size={16} /> {PERFIL.email}
            </a>
            <a
              href={PERFIL.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              <Linkedin size={16} color="var(--accent)" /> LinkedIn
            </a>
            <a
              href={`https://wa.me/${PERFIL.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-7 py-3.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--accent)" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.893a11.821 11.821 0 00-3.488-8.464z" />
              </svg>
              WhatsApp &middot; {PERFIL.whatsappBonito}
            </a>
          </div>

          <p className="mt-8 flex items-start justify-center gap-2 text-left text-sm leading-relaxed text-[var(--muted)]">
            <Dumbbell size={16} className="mt-0.5 shrink-0 text-[var(--accent)]" />
            <span>Fora do trabalho: noivo da Anna, pai do Ares, praticante de CrossFit e leitor assíduo de bons livros e conteúdos.</span>
          </p>

          <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[var(--muted)]">
            <span>{PERFIL.nome}</span>
            <span className="font-mono">{PERFIL.cidade} &middot; 2026</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
