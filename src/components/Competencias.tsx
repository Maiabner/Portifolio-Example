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
    <section id="metodo" className="border-t border-[var(--accent)] bg-[var(--surface-2)] py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Método</p>
          <h2 className="mt-3 text-3xl md:text-[46px] leading-tight font-medium tracking-heading">
            Como transformo um gargalo em <span className="font-titulo italic font-normal" style={{ color: "var(--accent)" }}>capacidade</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--muted)]">
            A solução muda. A lógica se repete — é uma sequência, não uma lista.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {ETAPAS.map((etapa, i) => (
            <motion.article
              key={etapa.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[var(--border)] py-6 first:border-t-0 md:border-t-0 md:border-l md:px-6 md:py-1 md:first:border-l-0 md:first:pl-0"
            >
              <div className="font-titulo italic leading-none text-4xl md:text-5xl" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug text-[var(--text)]">{etapa.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{etapa.texto}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-[20px] border-l-2 border-[var(--accent)] bg-[var(--surface)] px-6 py-5">
          <p className="text-base md:text-lg leading-relaxed text-[var(--text)]">
            Uma melhoria só está concluída quando muda uma decisão, aparece em um número e pode ser operada por outra pessoa.
          </p>
        </div>
      </div>
    </section>
  );
}
