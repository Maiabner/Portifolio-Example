import { motion } from "framer-motion";

const ETAPAS = [
  {
    titulo: "Ler o sistema real",
    texto: "Mapeio decisões, exceções, incentivos e dependências antes de propor qualquer mudança.",
  },
  {
    titulo: "Isolar o gargalo",
    texto: "Identifico o que limita o resultado naquele momento: margem, capacidade, risco, demanda ou clareza comercial.",
  },
  {
    titulo: "Construir o mecanismo certo",
    texto: "O problema determina o formato: produto, modelo de decisão, processo, automação ou roteiro comercial.",
  },
  {
    titulo: "Transferir a capacidade",
    texto: "Defino método, responsável, métrica, documentação e treinamento para que a melhoria não dependa de quem a criou.",
  },
] as const;

export function Metodo() {
  return (
    <section id="metodo" className="py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">03 — Método</p>
          <h2 className="mt-3 text-3xl md:text-[46px] leading-tight font-medium tracking-heading">
            Como transformo um gargalo em <span className="font-titulo italic font-normal">capacidade</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--muted)]">
            A solução muda. A lógica se repete.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {ETAPAS.map((etapa, i) => (
            <motion.article
              key={etapa.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 320, damping: 22 } }}
              className="bg-white rounded-[24px] card-clean p-7"
            >
              <span className="inline-flex items-center rounded-full bg-[var(--secondary)] px-4 py-1.5 text-[15px] font-semibold leading-snug text-[var(--primary)]">
                {etapa.titulo}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{etapa.texto}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-[24px] border border-[color-mix(in_srgb,var(--primary)_16%,transparent)] bg-[var(--secondary)] px-6 py-5 shadow-[0_4px_16px_rgba(16,32,51,0.06)]">
          <p className="text-base md:text-lg leading-relaxed text-[color-mix(in_srgb,var(--primary)_80%,transparent)]">
            Uma melhoria só está concluída quando muda uma decisão, aparece em um número e pode ser operada por outra pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}
