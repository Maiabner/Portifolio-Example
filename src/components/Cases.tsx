import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { CASES, type Bloco, type CasePortfolio } from "../dados";
import { ImagemCaso } from "./ImagemCaso";

// Estrutura guarda-chuva: um seletor com os cinco casos no topo e um painel
// único abaixo, que troca com animação. Dentro do painel, os dois níveis da
// spec: o card de quarenta segundos e o caso completo expansível, com o bloco
// "Como medi" sempre visível e a stack em linha discreta no rodapé.

type Realce = { riscar?: string[]; destacar?: string[] };

// Aplica o realce do resultado: valores "antes" tachados, valores "depois"
// em serifa itálica latão. Sem realce, devolve o texto puro.
function comRealce(texto: string, realce?: Realce) {
  const riscar = realce?.riscar ?? [];
  const destacar = realce?.destacar ?? [];
  const marcas = [...riscar, ...destacar].filter(Boolean);
  if (marcas.length === 0) return texto;
  const escapados = marcas.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escapados.join("|")})`, "g");
  return texto.split(re).map((parte, i) => {
    if (riscar.includes(parte)) {
      return (
        <span
          key={i}
          className="text-[var(--muted)] line-through decoration-[color-mix(in_srgb,var(--muted)_45%,transparent)]"
        >
          {parte}
        </span>
      );
    }
    if (destacar.includes(parte)) {
      return (
        <span key={i} className="font-titulo italic text-[1.06em] text-[var(--accent)]">
          {parte}
        </span>
      );
    }
    return <Fragment key={i}>{parte}</Fragment>;
  });
}

function Blocos({ blocos, realce }: { blocos: Bloco[]; realce?: Realce }) {
  return (
    <div className="flex flex-col gap-3">
      {blocos.map((b) => {
        if (b.tipo === "sub") {
          return (
            <p
              key={b.texto.slice(0, 40)}
              className="mt-1 text-[15px] md:text-base font-semibold text-[var(--text)]"
            >
              {b.texto}
            </p>
          );
        }
        if (b.tipo === "p") {
          return (
            <p key={b.texto.slice(0, 40)} className="text-[15px] md:text-base leading-relaxed text-[var(--text)]">
              {comRealce(b.texto, realce)}
            </p>
          );
        }
        return (
          <div key={b.ancora.slice(0, 40)}>
            <p className="text-[15px] md:text-base leading-relaxed text-[var(--text)]">{comRealce(b.ancora, realce)}</p>
            <ul className="mt-2.5 flex flex-col gap-2.5">
              {b.itens.map((item) => (
                <li
                  key={item.slice(0, 40)}
                  className="relative pl-5 text-[15px] md:text-base leading-relaxed text-[var(--text)]"
                >
                  <span className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {comRealce(item, realce)}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function SecaoCaso({ titulo, blocos }: { titulo: string; blocos: Bloco[] }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">{titulo}</h4>
      <div className="mt-3">
        <Blocos blocos={blocos} />
      </div>
    </div>
  );
}

// Painel de um caso. Montado com key pelo id: trocar de caso zera a expansão.
function PainelCaso({ c }: { c: CasePortfolio }) {
  const [aberto, setAberto] = useState(false);
  const detalheId = `caso-${c.id}-completo`;

  return (
    <div className="px-7 py-8 md:px-11 md:py-10">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Caso {c.numero}</p>
      <h3 className="mt-2.5 text-2xl md:text-[30px] leading-tight font-medium tracking-heading">{c.titulo}</h3>

      <p className="mt-4 text-[15px] md:text-base leading-relaxed text-[var(--muted)]">{c.card.problema}</p>
      <p className="mt-2 text-[15px] md:text-base leading-relaxed text-[var(--text)]">{c.card.solucao}</p>

      <div className="mt-6 border-l-2 border-[var(--accent)] pl-5 py-1">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Resultado</p>
        <p className="mt-2 text-base md:text-lg leading-snug text-[var(--text)]">
          {comRealce(c.card.resultado, c.realce)}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls={detalheId}
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg)] px-5 py-2.5 text-sm font-medium text-[var(--secondary-text)] transition-colors hover:bg-[var(--secondary)]"
      >
        {aberto ? "Fechar o caso completo" : "Ver o caso completo"}
        <ChevronDown size={15} className={`transition-transform duration-300 ${aberto ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {aberto ? (
          <motion.div
            key="detalhe"
            id={detalheId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8 border-t border-[var(--border)] pt-8">
              <h4 className="font-titulo italic text-xl md:text-2xl text-[var(--primary-deep)]">{c.tituloCompleto}</h4>

              <div className="mt-7 flex flex-col gap-8">
                <SecaoCaso titulo="Contexto" blocos={c.contexto} />
                <SecaoCaso titulo="Problema" blocos={c.problema} />
                <SecaoCaso titulo="O que eu fiz" blocos={c.oQueFiz} />

                <div
                  className="rounded-r-2xl border-l-2 border-[var(--accent)] px-5 py-4"
                  style={{ background: "color-mix(in srgb, var(--accent) 6%, var(--surface))" }}
                >
                  <h4 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    Resultado
                  </h4>
                  <div className="mt-3">
                    <Blocos blocos={c.resultado} realce={c.realce} />
                  </div>
                </div>

                {c.imagem ? (
                  <ImagemCaso
                    arquivos={c.imagem.arquivos}
                    proporcao={c.imagem.proporcao}
                    legenda={c.imagem.legenda}
                    zoom={c.imagem.zoom}
                    duracoes={c.imagem.duracoes}
                  />
                ) : null}

                <div className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)] px-6 py-5">
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--secondary-text)]">
                    Como medi
                  </h4>
                  <div className="mt-3">
                    <Blocos blocos={c.comoMedi} />
                  </div>
                </div>

                {c.stack?.length ? (
                  <p className="font-mono text-xs text-[var(--muted)]">Stack: {c.stack.join(" · ")}</p>
                ) : null}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Cases() {
  const [ativo, setAtivo] = useState(0);
  const [direcao, setDirecao] = useState(1);
  const c = CASES[ativo];

  const irPara = (i: number) => {
    setDirecao(i > ativo ? 1 : -1);
    setAtivo((i + CASES.length) % CASES.length);
  };

  return (
    <section id="casos" className="px-6 py-16 md:py-24">
      <div className="max-w-[980px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Casos</p>
          <h2 className="mt-3 text-3xl md:text-[46px] leading-tight font-medium tracking-heading">
            Cinco problemas de negócio. <span className="font-titulo italic font-normal">Resultados medidos.</span>
          </h2>
          <p className="mt-4 max-w-[620px] text-base md:text-lg leading-relaxed text-[var(--muted)]">
            Do problema ao resultado: o que encontrei, o que construí e como medi a mudança.
          </p>
        </motion.div>

        {/* Guarda-chuva: seletor dos casos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex gap-2.5 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible md:pb-0"
          role="tablist"
          aria-label="Casos"
        >
          {CASES.map((item, i) => {
            const ativoAgora = i === ativo;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={ativoAgora}
                onClick={() => irPara(i)}
                className={`shrink-0 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 md:shrink ${
                  ativoAgora
                    ? "border-transparent card-clean"
                    : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:-translate-y-0.5 hover:bg-[var(--surface-2)]"
                }`}
                style={
                  ativoAgora
                    ? { background: "linear-gradient(135deg, var(--primary), var(--primary-deep))", color: "var(--primary-text)" }
                    : undefined
                }
              >
                <span className={`font-mono text-[10px] tracking-[0.2em] ${ativoAgora ? "opacity-70" : "text-[var(--muted)]"}`}>
                  {item.numero}
                </span>
                <span className="mt-1 block text-[13px] font-medium leading-snug">{item.titulo}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Painel do caso ativo */}
        <div className="relative mt-5">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={c.id}
              initial={{ opacity: 0, x: 36 * direcao }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -36 * direcao }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] card-clean"
            >
              <PainelCaso key={c.id} c={c} />
            </motion.article>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-between">
            <button
              type="button"
              onClick={() => irPara(ativo - 1)}
              aria-label="Caso anterior"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--secondary-text)]"
            >
              <ArrowLeft size={15} /> Anterior
            </button>
            <span className="font-mono text-xs text-[var(--muted)]">
              {c.numero} / {String(CASES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => irPara(ativo + 1)}
              aria-label="Próximo caso"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--secondary-text)]"
            >
              Próximo <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
