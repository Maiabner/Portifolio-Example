import {
  BarChart3,
  Bot,
  Compass,
  Database,
  FileText,
  Handshake,
  LineChart,
  Package,
  RefreshCw,
  Table2,
  Terminal,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import { TICKER, ASSINATURA, VALORES } from "../dados";

const TICKER_ICONS: Record<string, typeof Wrench> = {
  "Strategy & Operations": Compass,
  "Business Development": Handshake,
  "Desenho de produto": Package,
  "Leitura de mercado": LineChart,
  SQL: Database,
  Python: Terminal,
  "Power BI": BarChart3,
  "Google Sheets avançado": Table2,
  Automações: Bot,
  "Process Design & SLAs": Workflow,
  "Gestão de stakeholders": Users,
  "Melhoria contínua": RefreshCw,
};

function TickerItem({ nome }: { nome: string }) {
  const Icon = TICKER_ICONS[nome] ?? FileText;

  return (
    <span className="shrink-0 inline-flex items-center gap-2 rounded-full bg-white/80 border border-[var(--border)] px-4 py-2 text-[13px] font-medium text-[var(--muted)] whitespace-nowrap">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--bg)] text-[var(--primary)]">
        <Icon size={12} strokeWidth={2} />
      </span>
      {nome}
    </span>
  );
}

// Faixa rolante de habilidades (pills) — logo abaixo do hero
export function Ticker() {
  const itens = [...TICKER, ...TICKER];
  return (
    <div className="ticker-mask overflow-hidden py-2">
      <div className="ticker-track items-center gap-3 pr-3">
        {itens.map((t, i) => (
          <TickerItem key={`${t}-${i}`} nome={t} />
        ))}
      </div>
    </div>
  );
}

// Faixa rolante de valores — marquee serif (metade do tamanho da assinatura gigante)
export function FaixaValores() {
  const itens = [...VALORES, ...VALORES, ...VALORES];
  return (
    <div className="ticker-mask overflow-hidden py-3 select-none" aria-hidden>
      <div className="ticker-track items-baseline gap-6 pr-6">
        {itens.map((v, i) => (
          <span key={`${v}-${i}`} className="shrink-0 flex items-baseline gap-6">
            <span
              className="font-titulo italic text-3xl md:text-5xl leading-none tracking-display"
              style={{ color: "color-mix(in srgb, var(--primary) 28%, transparent)" }}
            >
              {v}
            </span>
            <span className="h-1.5 w-1.5 self-center rounded-full" style={{ background: "var(--accent)", opacity: 0.5 }} />
          </span>
        ))}
      </div>
    </div>
  );
}

// Marquee serif gigante — assinatura antes do contato
export function MarqueeAssinatura() {
  const palavras = [...ASSINATURA, ...ASSINATURA, ...ASSINATURA, ...ASSINATURA];
  return (
    <div className="marquee-giant ticker-mask overflow-hidden py-6 select-none" aria-hidden>
      <div className="ticker-track items-baseline gap-8 pr-8">
        {palavras.map((p, i) => (
          <span key={`${p}-${i}`} className="shrink-0 flex items-baseline gap-8">
            <span
              className="font-titulo italic text-6xl md:text-8xl leading-none tracking-display"
              style={{ color: "color-mix(in srgb, var(--primary) 16%, transparent)" }}
            >
              {p}
            </span>
            <span className="h-2.5 w-2.5 rounded-full self-center" style={{ background: "var(--accent)", opacity: 0.35 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
