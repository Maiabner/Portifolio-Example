import { motion } from "framer-motion";
import { Calculator, Package, ShieldCheck, TrendingUp } from "lucide-react";
import { RESUMO_PONTOS } from "../dados";

const ICONES = [TrendingUp, Package, Calculator, ShieldCheck];

export function Stats() {
  return (
    <section id="resumo" className="px-6 py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-9 max-w-[640px]"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">05 — Resumo</p>
          <h2 className="mt-3 text-3xl md:text-[44px] leading-tight font-medium tracking-heading">
            O que os casos <span className="font-titulo italic font-normal">demonstram</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[var(--muted)] leading-relaxed">
            Cinco situações diferentes, quatro capacidades que se repetem quando uma empresa precisa
            crescer sem perder controle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {RESUMO_PONTOS.map((item, i) => {
            const Icon = ICONES[i] ?? TrendingUp;
            return (
              <motion.article
                key={item.titulo}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[28px] card-clean p-7 flex flex-col gap-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[var(--secondary)] text-[var(--primary)]">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="text-lg font-semibold leading-snug">{item.titulo}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.texto}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}