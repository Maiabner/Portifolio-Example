// Todo o conteúdo do portfólio vive aqui. A fonte é o portfolio_abner_spec.md
// (arquivo interno, fora do git): o texto entra literal, sem reescrita.
//
// Imagens dos casos: os arquivos ainda não existem. Quando forem gerados,
// basta soltá-los em public/imagens/ com os nomes abaixo, sem tocar em código.

export const PERFIL = {
  nome: "Abner Maia Albanez",
  cargo: "Coordenador de Operações · Sion Energia",
  cidade: "Curitiba, PR",
  email: "abneralbanez@yahoo.com.br",
  linkedin: "https://linkedin.com/in/abnermaia",
  whatsapp: "5544984031000",
  whatsappBonito: "(44) 98403-1000",
  foto: "/abner.png",
};

// Pares que ciclam no hero, abaixo da headline
export const PAPEIS = [
  { primeiro: "estratégia", segundo: "execução" },
  { primeiro: "leitura de mercado", segundo: "dados" },
  { primeiro: "produto", segundo: "operação" },
  { primeiro: "método", segundo: "velocidade" },
];

// Ticker de habilidades (faixa rolante abaixo do hero)
export const TICKER = [
  "Strategy & Operations",
  "Business Development",
  "Desenho de produto",
  "Leitura de mercado",
  "SQL",
  "Python",
  "Power BI",
  "Google Sheets avançado",
  "Automações",
  "Process Design & SLAs",
  "Gestão de stakeholders",
  "Melhoria contínua",
];

// Marquee gigante antes do contato (assinatura)
export const ASSINATURA = ["entender", "encontrar", "desenhar", "destravar"];

// Faixa de valores (marquee serif menor, dentro de Forma de trabalhar)
export const VALORES = [
  "Velocidade de aprendizado",
  "Execução",
  "Curiosidade",
  "Método",
  "Visão de dono",
  "Trabalho em equipe",
];

export const HEADLINE = {
  frase: "Conecto estratégia e execução. Leio o gargalo que trava o resultado e construo o que o remove.",
  apoio:
    "Em três anos, ajudei a estruturar do zero a operação de varejo da Sion Energia, desenhei produtos para ciclos opostos de mercado e ampliei de 45 para 100 a carteira atendida por analista. Hoje coordeno a operação ponta a ponta, com uma equipe de seis pessoas e reporte direto aos sócios.",
};
export const BIO = [
  "Entrei na Sion Energia em 2023 como analista júnior, quando a empresa começava a atender o mercado varejista sem uma operação estruturada para isso. Foi nesse ambiente que desenvolvi meu modo de trabalhar: mergulhar no contexto, separar sintoma de causa, localizar o gargalo que limita o resultado e construir a intervenção que o remove.",
  "Ao longo desses três anos, essa intervenção assumiu formas diferentes. Foi um modelo de decisão quando o problema era julgamento individual. Foi um produto quando a condição de mercado travava a venda. Foi automação quando a capacidade estava presa em tarefas manuais. Foi roteiro comercial quando o conhecimento técnico não chegava ao cliente.",
  "O formato nunca foi o ponto de partida. O problema foi.",
  "Hoje, meu trabalho é conectar estratégia e execução: transformar uma oportunidade ou um risco em método, ferramenta e capacidade distribuída no time. O setor elétrico foi onde construí esse repertório, não o limite de onde ele se aplica.",
  "Sou Coordenador de Operações na Sion Energia. Tenho MBA pela PUCRS, mestrado pelo Instituto Politécnico de Viseu e participo do Curitiba Consulting Club desde 2021.",
];
// Trajetória completa (formação + experiência), agrupada como no formato original.
// Os marcos de mercado de 2023 a 2026 vivem dentro da entrada da Sion e dos casos.
export const TRAJETORIA = [
  {
    tipo: "formacao",
    periodo: "2018 – 2022",
    titulo: "Engenharia Civil",
    org: "UTFPR",
    texto: "A base de engenharia: rigor analítico, dados e problemas grandes demais para caber na cabeça.",
  },
  {
    tipo: "formacao",
    periodo: "2020 – 2022",
    titulo: "Mestrado em Engenharia de Construção e Reabilitação",
    org: "Instituto Politécnico de Viseu · Portugal",
    texto: "Graduação sanduíche: dois anos em Portugal, pesquisa aplicada e a experiência de recomeçar em um sistema novo.",
  },
  {
    tipo: "formacao",
    periodo: "2023 – 2024",
    titulo: "MBA em Gestão, Empreendedorismo e Desenvolvimento de Negócios",
    org: "PUCRS",
    texto: "A ponte formal entre engenharia e negócio, feita enquanto a operação crescia.",
  },
  {
    tipo: "experiencia",
    periodo: "2019",
    titulo: "Estagiário de Engenharia",
    org: "Alubauen Premium",
    texto: "Primeiro contato com operação real. Resolvi um gap de estoque de vidros conectando uma empresa parceira, com economia de R$ 300 mil.",
  },
  {
    tipo: "experiencia",
    periodo: "2020 – 2023",
    titulo: "Estágio e depois Analista de Engenharia Civil",
    org: "Intertechne",
    texto: "Análise hídrica 3D inédita para a UHE Belo Monte no estágio. Como analista, projetos de parques eólicos e solares com BIM, reduzindo prazos de entrega em cerca de 30% com padronização e automação.",
  },
  {
    tipo: "experiencia",
    periodo: "2023 – hoje",
    titulo: "Coordenador de Operações",
    org: "Sion Energia",
    texto: "Entrei sem experiência no setor e em cinco meses respondia pela operação de varejo ponta a ponta, hoje atuo com  equipe de seis pessoas e reporte direto aos sócios. De lá para cá, um ciclo por ano: operação criada do zero em 2023, produto novo em 2024, camada de dados e conhecimento em 2025, crise de contraparte e produto para o novo momento de mercado em 2026.",
  },
];

// Resumo no final da página (lista editorial).
// `destaque`: trechos do texto realçados em latão (o resultado). O texto
// permanece literal; aqui só apontamos o que enfatizar.
export const RESUMO_PONTOS = [
  {
    titulo: "Escalar a capacidade operacional",
    texto: "Cada analista passou de 45 para 100 clientes atendidos. Um ciclo mensal que ocupava cinco pessoas por cinco dias passou a ser executado por duas pessoas em cerca de três horas.",
    destaque: ["100 clientes", "três horas"],
  },
  {
    titulo: "Transformar mercado em produto",
    texto: "Desenhei duas ofertas para ciclos opostos de preço. Somadas, geraram de 55 a 60 contratos e continuam em operação.",
    destaque: ["55 a 60 contratos"],
  },
  {
    titulo: "Transformar julgamento em sistema",
    texto: "Uma decisão que levava de 45 minutos a duas horas passou a ser calculada em segundos, com método único, cenários comparáveis e resultado auditável.",
    destaque: ["segundos"],
  },
  {
    titulo: "Proteger e destravar receita",
    texto: "Retivemos 28 dos 29 clientes expostos a duas crises. Em outra frente, uma análise técnica ajudou a abrir uma conta que estava parada havia mais de um ano e meio.",
    destaque: ["28 dos 29 clientes"],
  },
];
// Forma de trabalhar (grade de competências)
export const COMPETENCIAS = [
  {
    titulo: "Entrar no novo e mapear o sistema",
    texto: "Domino setores novos por imersão. Antes de propor qualquer coisa, entendo como o trabalho acontece de verdade.",
  },
  {
    titulo: "Encontrar onde o dinheiro está parado",
    texto: "Cliente que ninguém chama, rotina que trava, contrato que ninguém leu. É onde costumo começar.",
  },
  {
    titulo: "Desenhar a coisa que destrava",
    texto: "Às vezes é um modelo de cálculo, às vezes um produto, às vezes um roteiro comercial. O formato segue o problema.",
  },
  {
    titulo: "Transformar regra em ferramenta",
    texto: "Com SQL, Python e planilhas-sistema, a análise deixa de depender de quem a faz e vira método auditável.",
  },
  {
    titulo: "Habilitar quem executa",
    texto: "Roteiros, treinamentos e 1:1s. A melhoria só se sustenta quando o time consegue conduzi-la sozinho.",
  },
  {
    titulo: "Documentar para dar continuidade",
    texto: "Wiki, POPs e fluxogramas. O conhecimento que só existe na cabeça das pessoas é risco, não ativo.",
  },
];

// Texto de caso: parágrafos e listas com frase-âncora, na ordem da spec.
export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "sub"; texto: string }
  | { tipo: "lista"; ancora: string; itens: string[] };

export type CasePortfolio = {
  id: string;
  numero: string;
  titulo: string; // título do card (nível 1)
  tituloCompleto: string; // título do caso completo (nível 2)
  card: {
    problema: string;
    solucao: string;
    resultado: string;
  };
  contexto: Bloco[];
  problema: Bloco[];
  oQueFiz: Bloco[];
  resultado: Bloco[];
  comoMedi: Bloco[];
  stack?: string[];
  // Realce do resultado (card e caso completo): `riscar` = valor "antes"
  // (tachado), `destacar` = valor "depois" (serifa itálica em latão).
  realce?: { riscar?: string[]; destacar?: string[] };
  // Sem imagem: omitir o campo (ex.: caso 01, material interno).
  // Dois ou mais arquivos: alternam com cross-fade no slot.
  imagem?: {
    arquivos: string[];
    proporcao: string; // valor CSS de aspect-ratio
    legenda?: string;
    zoom?: string[]; // imagens do lightbox; padrão = arquivos
    duracoes?: number[]; // ms por quadro no slot; padrão 5000
  };
};

export const CASES: CasePortfolio[] = [
  {
    id: "escala-continuidade",
    numero: "01",
    realce: { destacar: ["100 clientes atendidos", "24 dias-pessoa"] },
    titulo: "Escala e continuidade para uma operação crítica",
    tituloCompleto: "Escala e continuidade para uma operação crítica",
    card: {
      problema:
        "A operação dependia da memória de poucas pessoas, de rotinas manuais e de planilhas que já não suportavam o crescimento.",
      solucao:
        "Redesenhei os fluxos críticos, reconstruí a camada de dados, transformei planilhas em sistemas internos e organizei a base de conhecimento da área.",
      resultado:
        "Cada analista passou de aproximadamente 45 para 100 clientes atendidos. Cerca de 24 dias-pessoa foram devolvidos à operação todos os meses.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "Em 2025, a empresa substituiu a diretoria de duas áreas enquanto a operação do mercado livre acumulava mais clientes, regras, prazos e obrigações regulatórias.",
      },
      {
        tipo: "p",
        texto:
          "Boa parte do conhecimento necessário para manter a área funcionando não estava documentada. Processos críticos dependiam da memória de duas pessoas.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto:
          "A operação combinava rotinas mensais manuais, planilhas individuais e conhecimento transmitido oralmente.",
      },
      {
        tipo: "p",
        texto:
          "Isso criava dois problemas ao mesmo tempo: baixa capacidade de escala e risco de continuidade.",
      },
      {
        tipo: "p",
        texto:
          "As planilhas centrais também haviam atingido seu limite. Com quase 100 MB e vários usuários simultâneos, travavam com frequência. Apenas a atualização das bases levava aproximadamente 20 minutos e ainda podia falhar durante o processo.",
      },
      {
        tipo: "p",
        texto:
          "Crescer significaria contratar continuamente mais profissionais experientes para sustentar uma estrutura que já apresentava sinais de saturação.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Tratei o problema como o redesenho do sistema operacional da área, não como um projeto isolado de automação.",
      },
      {
        tipo: "p",
        texto:
          "Conduzi o trabalho com um analista sênior do time, que teve participação central na execução.",
      },
      {
        tipo: "lista",
        ancora: "Atuamos em quatro frentes:",
        itens: [
          "Automação das rotinas críticas. Sete atividades mensais foram transformadas em ferramentas internas.",
          "Reconstrução da camada de dados. O processamento pesado saiu das planilhas e foi levado para Python e nuvem.",
          "Transformação de planilhas em sistemas internos. Regras, validações e rastreabilidade passaram a fazer parte do fluxo.",
          "Construção da base de conhecimento. Criamos wiki, procedimentos operacionais e fluxogramas para processos antes transmitidos oralmente.",
        ],
      },
      {
        tipo: "p",
        texto:
          "O objetivo não era apenas executar as mesmas tarefas mais rápido. Era permitir que a operação funcionasse sem depender da memória das pessoas que a construíram.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto:
          "O ciclo mensal de relatórios, que ocupava cinco pessoas durante cinco dias, passou a ser executado por duas pessoas em aproximadamente três horas.",
      },
      {
        tipo: "p",
        texto:
          "Isso devolveu cerca de 24 dias-pessoa por mês à operação, sem redução do escopo entregue.",
      },
      {
        tipo: "p",
        texto:
          "A planilha central passou de quase 100 MB para cerca de 2 MB. A atualização das bases caiu de aproximadamente 20 minutos para 20 segundos.",
      },
      {
        tipo: "p",
        texto: "No atendimento recorrente, cada analista passou de aproximadamente 45 para 100 clientes.",
      },
      {
        tipo: "p",
        texto:
          "A nova estrutura também suporta hoje cerca de 40 análises de contratação por semana. No menor tempo do processo anterior, esse volume exigiria pelo menos 30 horas semanais de um analista sênior.",
      },
      {
        tipo: "p",
        texto:
          "A mudança principal, porém, foi organizacional: processos antes baseados em memória passaram a ter responsável, critério, documentação e rastro.",
      },
      {
        tipo: "p",
        texto:
          "A operação permaneceu funcionando durante a mudança de diretoria, e a infraestrutura criada se tornou a base para os demais trabalhos apresentados neste portfólio.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto: "O ganho mensal foi calculado a partir do esforço direto no processo de relatórios:",
      },
      {
        tipo: "lista",
        ancora: "Comparação do esforço direto:",
        itens: [
          "Antes: 5 pessoas × 5 dias = 25 dias-pessoa.",
          "Depois: 2 pessoas × 3 horas = 6 horas, ou 0,75 dia de trabalho.",
          "Diferença: aproximadamente 24,25 dias-pessoa por mês.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Tamanho dos arquivos, tempo de atualização e número de clientes por analista foram medidos diretamente antes e depois da reconstrução.",
      },
      {
        tipo: "p",
        texto:
          "As 40 análises semanais representam capacidade atual viabilizada pela nova estrutura. Como não existe uma série histórica comparável do volume anterior, esse número não é apresentado como economia comprovada de horas.",
      },
    ],
    stack: ["Google Sheets", "Apps Script", "Python", "Google Cloud", "ClickUp", "NotebookLM"],
    // Sem imagem por escolha: o caso é o sistema interno e a base de conhecimento
    // da empresa, material que não pode ser exposto. O texto e os números sustentam.
  },
  {
    id: "produtos-ciclos-opostos",
    numero: "02",
    realce: { destacar: ["55 a 60 contratos"] },
    titulo: "Produtos para ciclos opostos de mercado",
    tituloCompleto: "Produtos para ciclos opostos de mercado",
    card: {
      problema:
        "Em momentos diferentes, a oferta padrão deixou de atender dois grupos: clientes pequenos demais para a operação e clientes que ainda não podiam migrar.",
      solucao:
        "Desenhei um produto para cada condição, ajustando modelo econômico, escopo de atendimento e operação comercial.",
      resultado: "As duas ofertas somaram de 55 a 60 contratos e continuam em operação.",
    },
    contexto: [
      {
        tipo: "p",
        texto: "Em um intervalo de dois anos, o mercado apresentou condições opostas.",
      },
      {
        tipo: "p",
        texto:
          "Em 2024, preços favoráveis abriram espaço para atender segmentos antes considerados pequenos demais.",
      },
      {
        tipo: "p",
        texto:
          "Em 2026, a alta dos preços tornou a migração para o mercado livre pouco atrativa para parte dos clientes.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto: "Nos dois cenários, a oferta padrão da empresa deixava oportunidades sem atendimento.",
      },
      {
        tipo: "p",
        texto:
          "Com preços favoráveis, o CRM acumulava empresas de baixo consumo que não eram abordadas porque o custo da operação não cabia no valor do contrato.",
      },
      {
        tipo: "p",
        texto:
          "Com preços altos, clientes interessados na migração precisavam esperar. Durante esse período, não geravam receita, continuavam expostos ao custo atual e permaneciam acessíveis aos concorrentes.",
      },
      {
        tipo: "p",
        texto:
          "As causas eram opostas, mas o resultado era o mesmo: havia demanda, porém não existia uma oferta economicamente viável.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Usei a condição de mercado como variável de desenho de produto e criei uma solução para cada momento.",
      },
      {
        tipo: "sub",
        texto: "Para clientes de baixo consumo",
      },
      {
        tipo: "p",
        texto:
          "Desenhei um modelo de compra com remuneração comercial incorporada ao preço e escopo de gestão reduzido.",
      },
      {
        tipo: "p",
        texto:
          "A economia disponível naquele momento permitia absorver essa remuneração e ainda preservar benefício para o cliente. Ao mesmo tempo, o esforço operacional foi dimensionado para que o serviço coubesse em um ticket menor.",
      },
      {
        tipo: "p",
        texto: "Um segmento antes ignorado passou a ter uma oferta sustentável para os dois lados.",
      },
      {
        tipo: "sub",
        texto: "Para clientes que ainda não podiam migrar",
      },
      {
        tipo: "p",
        texto:
          "Em 2026, desenhei uma oferta de transição para entregar benefício antes da migração definitiva.",
      },
      {
        tipo: "p",
        texto:
          "O produto nasceu do cruzamento de três leituras: perspectiva de preços, possibilidade regulatória e disponibilidade de oferta.",
      },
      {
        tipo: "p",
        texto:
          "A solução conectou clientes que precisavam de uma alternativa imediata à energia excedente de cooperativas e associações.",
      },
      {
        tipo: "p",
        texto:
          "Parametrizei os dois modelos, testei sua aplicação e conduzi a operação com o meu time. A execução comercial foi realizada em conjunto com a área de vendas.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto: "O primeiro produto gerou 10 contratos com empresas que antes não eram sequer abordadas.",
      },
      {
        tipo: "p",
        texto:
          "No produto de transição, minha equipe fechou aproximadamente 20 contratos com clientes que já estavam na base de migração. A estrutura comercial fechou outros 25 a 30.",
      },
      {
        tipo: "p",
        texto: "Somadas, as duas ofertas geraram de 55 a 60 contratos e continuam em operação.",
      },
      {
        tipo: "p",
        texto:
          "No segundo momento, o impacto foi além das vendas. O comercial voltou a ter uma oferta aplicável ao cenário de mercado, e a empresa reorganizou sua estrutura em torno da nova frente, unificando equipes e criando uma posição executiva de grandes negócios.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto: "Os contratos foram contabilizados na base operacional e nos registros da frente comercial.",
      },
      {
        tipo: "p",
        texto:
          "O resultado aparece como intervalo porque parte da produção comercial foi consolidada como uma faixa de 25 a 30 contratos.",
      },
      {
        tipo: "p",
        texto:
          "Os 10 contratos do primeiro produto e os aproximadamente 20 conduzidos pela minha equipe foram contados diretamente na base.",
      },
      {
        tipo: "p",
        texto:
          "Não apresento uma estimativa de receita porque o cálculo interno utilizava margem média por contrato e não constitui um número financeiro auditado.",
      },
    ],
    imagem: {
      arquivos: ["case-02-a.png", "case-02-b.png"],
      proporcao: "1080 / 560",
      legenda: "Uma matriz por produto: cada oferta nasce de um canto oposto do ciclo de mercado.",
    },
  },
  {
    id: "retencao-crise-fornecedor",
    numero: "03",
    realce: { destacar: ["28 dos 29 clientes"] },
    titulo: "Retenção e crescimento durante uma crise de fornecedor",
    tituloCompleto: "Retenção e crescimento durante uma crise de fornecedor",
    card: {
      problema:
        "Dois fornecedores entraram em situação crítica e expuseram 29 clientes. Apenas o maior evento atingiu aproximadamente 10% da carteira.",
      solucao:
        "Construí o modelo de impacto individual, organizei a resposta aos clientes e transformei o mesmo raciocínio em um ativo comercial.",
      resultado:
        "28 dos 29 clientes permaneceram na base. A análise também contribuiu para um novo contrato e para a reativação de uma conta estratégica.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "Em dois momentos distintos, fornecedores com os quais clientes da empresa mantinham contratos entraram em situação crítica. Um deles iniciou um processo de recuperação judicial em 2026.",
      },
      {
        tipo: "p",
        texto: "Ao todo, 29 clientes ficaram diretamente expostos.",
      },
      {
        tipo: "p",
        texto:
          "Apenas no maior evento, foram 24 clientes, 30 unidades consumidoras e aproximadamente 5 MW médios contratados — cerca de 10% da carteira.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto: "O risco não era apenas financeiro.",
      },
      {
        tipo: "p",
        texto:
          "Quando um fornecedor deixa de cumprir suas obrigações, o cliente também passa a questionar quem recomendou ou intermediou aquela contratação.",
      },
      {
        tipo: "p",
        texto:
          "Uma resposta genérica não era suficiente porque o impacto variava conforme contrato, perfil do cliente e região do sistema elétrico.",
      },
      {
        tipo: "p",
        texto: "Cada cliente queria uma resposta objetiva:",
      },
      {
        tipo: "p",
        texto: "Quanto isso representa para a minha empresa e o que devo fazer agora?",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto: "Organizei a resposta em dois movimentos.",
      },
      {
        tipo: "sub",
        texto: "Conter a crise",
      },
      {
        tipo: "p",
        texto: "Construí um modelo de impacto financeiro por cliente e por região.",
      },
      {
        tipo: "p",
        texto:
          "A partir dele, desenvolvi relatórios individuais de exposição, roteiros de abordagem por perfil de risco e materiais para apoiar futuras decisões de contratação.",
      },
      {
        tipo: "p",
        texto: "Também treinei a equipe e participei diretamente dos atendimentos mais críticos.",
      },
      {
        tipo: "p",
        texto:
          "A conversa deixou de partir de uma explicação genérica sobre o evento e passou a começar pelo número de cada cliente.",
      },
      {
        tipo: "sub",
        texto: "Transformar o aprendizado em ativo comercial",
      },
      {
        tipo: "p",
        texto: "Depois da contenção, percebi que o mesmo problema atingia empresas fora da nossa carteira.",
      },
      {
        tipo: "p",
        texto:
          "A partir da lista de credores do processo judicial, levantamos aproximadamente 1.200 empresas afetadas. Após excluir fornecedores e outros agentes do setor, restaram cerca de 750 consumidores finais.",
      },
      {
        tipo: "p",
        texto:
          "Transformei o modelo interno em uma análise apresentada em HTML, mostrando exposição, riscos e alternativas disponíveis.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto: "Dos 29 clientes expostos, 28 permaneceram na base.",
      },
      {
        tipo: "p",
        texto:
          "Houve uma saída no maior evento e nenhuma no segundo. O modelo também passou a ser utilizado pela diretoria em reuniões com clientes e se tornou o padrão interno de resposta à crise.",
      },
      {
        tipo: "p",
        texto: "A versão comercial foi utilizada em duas contas às quais os sócios já tinham acesso.",
      },
      {
        tipo: "p",
        texto: "Em uma delas, um grupo de hotéis e resorts fechou contrato.",
      },
      {
        tipo: "p",
        texto:
          "Na outra, uma grande consumidora de energia do Paraná, com a qual a empresa tentava avançar havia mais de um ano e meio, retomou a conversa. Um mês depois da apresentação, solicitou um estudo técnico para apoiar sua decisão de contratação.",
      },
      {
        tipo: "p",
        texto:
          "A abertura das duas portas veio dos sócios. A análise foi o ativo técnico utilizado para transformar esse acesso em uma conversa concreta de negócio.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto: "A retenção foi medida diretamente na base de clientes após os dois eventos.",
      },
      {
        tipo: "p",
        texto:
          "O número de unidades e o volume de energia foram levantados nos contratos vigentes. O universo externo foi calculado a partir da lista de credores, excluindo fornecedores e demais agentes do setor elétrico.",
      },
      {
        tipo: "p",
        texto:
          "Os resultados comerciais são apresentados separadamente: um contrato fechado e uma conta que avançou para a solicitação de um estudo técnico. Não são tratados como duas vendas concluídas.",
      },
    ],
    stack: ["Python", "HTML", "dados CCEE"],
    imagem: {
      arquivos: ["case-03-fold.jpg"],
      proporcao: "2560 / 1860",
      legenda: "Análise individual de exposição, anonimizada. Clique para ver o dashboard completo.",
      zoom: ["case-03-full.jpg"],
    },
  },
  {
    id: "decisao-em-segundos",
    numero: "04",
    realce: { riscar: ["de 45 minutos a 2 horas"], destacar: ["poucos segundos"] },
    titulo: "Decisão crítica em segundos",
    tituloCompleto: "Decisão crítica em segundos",
    card: {
      problema:
        "Uma decisão de contratação dependia de planilhas individuais e da experiência de poucos especialistas.",
      solucao:
        "Modelei o ponto de equilíbrio e liderei a construção de uma ferramenta única, com cenários e recomendação automática.",
      resultado:
        "Uma análise que levava de 45 minutos a 2 horas passou a ser concluída em poucos segundos, com método único e resultado auditável.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "Para recomendar a migração de um cliente ao mercado livre, a equipe precisava comparar a conta atual com diferentes cenários de preço, consumo e contratação.",
      },
      {
        tipo: "p",
        texto: "A decisão também envolvia perfil de energia, demanda contratada, modalidade tarifária e risco de crédito.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto: "Cada gestor utilizava a própria planilha.",
      },
      {
        tipo: "p",
        texto:
          "Os dados eram inseridos manualmente, o método variava entre pessoas e parte relevante da recomendação dependia da experiência de poucos profissionais.",
      },
      {
        tipo: "p",
        texto:
          "Uma análise levava cerca de 45 minutos para um analista sênior e de 1h40 a 2 horas para um analista júnior, que ainda precisava de apoio.",
      },
      {
        tipo: "p",
        texto:
          "O problema não era apenas velocidade. Uma decisão importante para o cliente estava concentrada em duas ou três pessoas e não havia um método único que mostrasse claramente como a recomendação havia sido formada.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Modelei o ponto de equilíbrio da migração e liderei, com dois analistas do meu time, a construção de uma ferramenta única.",
      },
      {
        tipo: "p",
        texto:
          "Ela passou a consolidar as 12 últimas faturas do cliente, calcular o limite econômico da migração e recomendar o perfil de energia.",
      },
      {
        tipo: "p",
        texto:
          "Também incorporamos cenários otimista, neutro e pessimista, além da análise de demanda, modalidade tarifária e uma triagem antecipada de crédito.",
      },
      {
        tipo: "p",
        texto: "A ferramenta não substitui a decisão comercial. Ela organiza os fatos que precisam sustentá-la.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto: "A análise passou de um intervalo de 45 minutos a 2 horas para poucos segundos.",
      },
      {
        tipo: "p",
        texto: "Mais importante: a decisão deixou de depender de quem fazia a conta.",
      },
      {
        tipo: "p",
        texto: "Qualquer analista passou a executar o processo com o mesmo método, cenários comparáveis e resultado auditável.",
      },
      {
        tipo: "p",
        texto:
          "Para o cliente, a proposta passou a mostrar com mais clareza quanto poderia economizar, em quais condições e sob quais riscos.",
      },
      {
        tipo: "p",
        texto:
          "Em períodos de preços altos, o modelo também permite mostrar quando a migração ainda faz sentido e quando é melhor não avançar, sem depender apenas de julgamento intuitivo.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto: "Os tempos foram cronometrados antes e depois da ferramenta, considerando perfis sênior e júnior.",
      },
      {
        tipo: "p",
        texto:
          "Como não existe uma série histórica comparável do volume de análises anterior à mudança, o caso demonstra redução de tempo e distribuição da capacidade, mas não reivindica aumento histórico de produção ou receita.",
      },
    ],
    stack: ["Google Sheets", "Apps Script", "Python"],
    imagem: {
      arquivos: ["case-04-farol.png"],
      proporcao: "1080 / 660",
      legenda: "Saída da ferramenta: farol do tipo de energia, triagem de crédito e leitura de mercado. Valores de exemplo.",
    },
  },
  {
    id: "resposta-competitiva",
    numero: "05",
    realce: { destacar: ["nenhuma nova perda"] },
    titulo: "Resposta competitiva para o time comercial",
    tituloCompleto: "Resposta competitiva para o time comercial",
    card: {
      problema:
        "O time perdeu seis negócios em 45 dias para uma oferta de desconto garantido e não tinha uma resposta técnica para ela.",
      solucao:
        "Analisei os contratos concorrentes, transformei as cláusulas em um roteiro consultivo e treinei a equipe comercial.",
      resultado: "Nos quase três anos seguintes, nenhuma nova perda foi registrada pelo mesmo motivo.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "O caso aconteceu no início da minha trajetória na empresa, quando a operação do mercado varejista ainda estava sendo estruturada.",
      },
      {
        tipo: "p",
        texto:
          "A empresa construía seus primeiros processos, padrões de atendimento e formas de posicionar o serviço diante dos clientes.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto: "Concorrentes passaram a oferecer contratos com desconto garantido.",
      },
      {
        tipo: "p",
        texto:
          "A proposta era simples de comunicar: o cliente recebia uma promessa clara de economia e transferia parte da incerteza para o fornecedor.",
      },
      {
        tipo: "p",
        texto: "O time comercial não possuía uma resposta técnica para essa oferta.",
      },
      {
        tipo: "p",
        texto: "Nos 45 dias seguintes ao lançamento da proposta concorrente, seis negócios foram perdidos pelo mesmo argumento.",
      },
      {
        tipo: "p",
        texto: "A explicação recorrente era que o cliente tinha medo da variação ou de tomar a decisão errada.",
      },
      {
        tipo: "p",
        texto: "Mas o medo era o sintoma.",
      },
      {
        tipo: "p",
        texto:
          "A objeção real estava na comparação entre uma promessa aparentemente segura e uma alternativa percebida como mais complexa.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto: "Tratei o problema como uma questão de posicionamento, não de desconto.",
      },
      {
        tipo: "p",
        texto:
          "Analisei os contratos utilizados pelos concorrentes e identifiquei as condições, limites e obrigações associados à garantia.",
      },
      {
        tipo: "p",
        texto: "Depois, transformei essa leitura em um roteiro de contraposição consultiva para o time comercial.",
      },
      {
        tipo: "p",
        texto:
          "A abordagem levava a conversa da promessa comercial para o contrato efetivo, traduzia riscos técnicos em consequências econômicas e ajudava o vendedor a conduzir a comparação sem atacar o concorrente ou afirmar que uma única alternativa servia para todos.",
      },
      {
        tipo: "p",
        texto: "Treinei a equipe comercial na aplicação do roteiro, embora a área não estivesse sob a minha gestão.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto: "Nos quase três anos seguintes ao treinamento, nenhuma nova perda foi registrada com o mesmo motivo.",
      },
      {
        tipo: "p",
        texto:
          "O roteiro continuou em uso e o time passou a conduzir sozinho uma conversa que antes precisava ser escalada para a diretoria ou encerrada sem contraposição.",
      },
      {
        tipo: "p",
        texto:
          "O principal ganho foi transformar uma objeção percebida como emocional em uma decisão que o comercial conseguia estruturar com critérios.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto:
          "O resultado foi medido pela comparação entre os negócios registrados como perdidos para essa oferta antes e depois do treinamento.",
      },
      {
        tipo: "p",
        texto: "Não houve grupo de controle ou experimento isolado.",
      },
      {
        tipo: "p",
        texto:
          "Por isso, o dado demonstra a mudança observada nos registros comerciais após a intervenção, mas não atribui todo o resultado exclusivamente ao roteiro.",
      },
    ],
    imagem: {
      arquivos: ["case-05-a.png", "case-05-b.png"],
      proporcao: "1080 / 560",
      legenda: "Da promessa comercial para o que o contrato realmente prevê.",
      duracoes: [5500, 13000],
    },
  },
];
