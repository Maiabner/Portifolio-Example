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
  frase: "Construo a operação e os produtos que fazem a empresa vender.",
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
    texto: "Entrei sem experiência no setor e em cinco meses já respondia pela operação como um todo, com equipe de seis pessoas e reporte direto aos sócios. De lá para cá, um ciclo por ano: operação criada do zero em 2023, produto novo em 2024, camada de dados e conhecimento em 2025, crise de contraparte e produto para o novo momento de mercado em 2026.",
  },
];

// Resumo no final da página (cards com ícone)
export const RESUMO_PONTOS = [
  {
    titulo: "Escalar a capacidade operacional",
    texto: "Cada analista passou de 45 para 100 clientes atendidos. Um ciclo mensal que ocupava cinco pessoas por cinco dias passou a ser executado por duas pessoas em cerca de três horas.",
  },
  {
    titulo: "Transformar mercado em produto",
    texto: "Desenhei duas ofertas para ciclos opostos de preço. Somadas, geraram de 55 a 60 contratos e continuam em operação.",
  },
  {
    titulo: "Transformar julgamento em sistema",
    texto: "Uma decisão que levava de 45 minutos a duas horas passou a ser calculada em segundos, com método único, cenários comparáveis e resultado auditável.",
  },
  {
    titulo: "Proteger e destravar receita",
    texto: "Retivemos 28 dos 29 clientes expostos a duas crises. Em outra frente, uma análise técnica ajudou a abrir uma conta que estava parada havia mais de um ano e meio.",
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
  imagem: {
    arquivo: string;
    proporcao: string; // valor CSS de aspect-ratio
    legenda?: string;
  };
};

export const CASES: CasePortfolio[] = [
  {
    id: "motor-de-decisao",
    numero: "01",
    titulo: "Motor de decisão de contratação",
    tituloCompleto: "Motor de decisão de contratação de energia",
    card: {
      problema:
        "Cada gestor tinha a própria planilha e a recomendação vinha de experiência, não de cálculo.",
      solucao:
        "Construí o modelo de ponto de equilíbrio e a ferramenta que centralizou a decisão.",
      resultado:
        "De 45 minutos a 2 horas por análise para segundos, executável por qualquer pessoa do time.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "A decisão de migrar para o mercado livre depende de um cálculo de ponto de equilíbrio entre a conta atual do cliente no ambiente regulado e o custo projetado no ambiente livre, somado à escolha do tipo de energia adequado ao seu perfil de consumo.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto:
          "Cada gestor mantinha a própria planilha. O input era manual, o método variava por pessoa e boa parte da recomendação vinha de experiência, não de cálculo. Um analista sênior levava 45 minutos por análise. Um júnior levava de 1h40 a 2h, e ainda precisava de apoio.",
      },
      {
        tipo: "p",
        texto:
          "O efeito prático não era só lentidão. A escolha do perfil de energia ficava sob julgamento individual, sem rastro auditável, e a capacidade de análise estava concentrada em duas ou três pessoas. Escalar a operação significava contratar sêniores, não distribuir método.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Desenhei a estrutura de cálculo e o modelo matemático, e conduzi a construção da ferramenta com dois analistas do meu time.",
      },
      {
        tipo: "lista",
        ancora: "O sistema reúne quatro camadas de decisão:",
        itens: [
          "Modelo de ponto de equilíbrio, que determina a partir de qual preço a migração compensa para aquele cliente específico.",
          "Leitura consolidada das 12 últimas faturas da distribuidora, para trabalhar com consumo real e não com média declarada.",
          "Recomendação automática do perfil de energia adequado ao consumo, com faixas de cenário otimista, neutro e pessimista.",
          "Otimização de demanda e modalidade tarifária, que identifica o dinheiro que o cliente deixa na mesa antes mesmo de migrar.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Somei a isso uma análise de crédito antecipada, que identifica antes da negociação os pontos que costumavam travar o fechamento junto ao fornecedor.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto:
          "A análise passou de 45 minutos a 2 horas para segundos, com o perfil recomendado já calculado e os cenários prontos para apresentação.",
      },
      {
        tipo: "p",
        texto:
          "O ganho maior foi de capacidade, não de tempo. A análise deixou de depender de quem a fazia e passou a ser executável por qualquer pessoa do time, com método único e resultado auditável. Do lado do cliente, a proposta passou a chegar com cenário, perfil e economia projetada já sobre a mesa. Em momentos de preço alto, quando a migração fica no limite da viabilidade, é o modelo de ponto de equilíbrio que sustenta a conversa e mantém o negócio de pé.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto:
          "Tempos de execução cronometrados na ferramenta anterior e na atual. Não há série histórica de volume de análises anterior à mudança, e por isso não reivindico ganho de volume.",
      },
    ],
    stack: ["Google Sheets", "Apps Script", "Python"],
    imagem: {
      arquivo: "case-01-farol.png",
      proporcao: "16 / 10",
      legenda: "Saída da ferramenta, com perfil recomendado e faixas de cenário.",
    },
  },
  {
    id: "crise-de-contraparte",
    numero: "02",
    titulo: "Crise de contraparte",
    tituloCompleto: "Crise de contraparte e conversão em ativo comercial",
    card: {
      problema:
        "Dois fornecedores em situação crítica, 29 clientes expostos, 10% da carteira.",
      solucao:
        "Construí o modelo de impacto individualizado, o roteiro de abordagem e treinei o time.",
      resultado:
        "28 dos 29 clientes retidos. O modelo virou entrega comercial e abriu uma conta que a empresa tentava havia mais de um ano e meio.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "Dois fornecedores de energia em situação crítica em janelas distintas, um deles em recuperação judicial em 2026. Exposição direta da empresa em 29 clientes. Só no evento maior, 24 clientes, 30 unidades consumidoras, cerca de 5 MWm e aproximadamente 10% da carteira total.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto:
          "O risco imediato não era o prejuízo do evento, era a leitura que o cliente faria dele. Quando a contraparte quebra, o cliente questiona a competência de quem o colocou naquela contraparte. Sem resposta rápida, técnica e individualizada, o cenário provável era churn em cascata entre os afetados e contaminação do restante da carteira.",
      },
      {
        tipo: "p",
        texto:
          "O complicador era operacional. O impacto financeiro variava por cliente e por submercado, e ninguém conseguia dizer a um cliente específico quanto ele perderia sem antes fazer a conta, cliente a cliente.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Construí o modelo de cálculo de impacto financeiro individualizado, por cliente e por submercado, e a partir dele o roteiro de abordagem, os textos e o material de apresentação. Treinei o time e atuei diretamente nos atendimentos.",
      },
      {
        tipo: "lista",
        ancora: "A resposta se apoiava em três frentes:",
        itens: [
          "Relatório de impacto financeiro individual, com o número exato daquele cliente em vez de comunicação genérica.",
          "Roteiro de abordagem por perfil de exposição, para que o time falasse com consistência técnica e sem improviso.",
          "Material de boas práticas de seleção de contraparte, derivado do próprio evento.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Contida a crise, percebi que o motor de cálculo servia para algo maior que a nossa carteira. A partir da lista de credores do processo de recuperação judicial, levantei o universo de empresas afetadas: cerca de 1.200 no total, das quais aproximadamente 750 eram consumidores finais depois de excluídos os agentes do setor elétrico. Todas com a mesma dúvida que os nossos clientes tinham acabado de ter. Construí um modelo de análise em tempo real, renderizado em HTML, que mostra a qualquer consumidor a sua posição atual, os riscos aos quais está exposto e as ações disponíveis, com o tratamento técnico e os disclaimers do mercado livre.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto:
          "Dos 29 clientes expostos nos dois eventos, 28 permaneceram na base. Um churn no evento maior, nenhum no outro. O modelo passou a ser usado também pela diretoria nas próprias reuniões com clientes, o que na prática o tornou o padrão da empresa para o evento.",
      },
      {
        tipo: "p",
        texto:
          "O modelo de análise em tempo real não foi escalado para a base de 750 empresas identificadas. Foi usado em dois clientes, ambos com porta aberta por sócios da empresa, e converteu nos dois. O primeiro, um grupo de hotéis e resorts, fechou contrato. O segundo, a maior consumidora de energia do estado do Paraná, era uma conta que a empresa tentava abrir havia mais de um ano e meio sem sucesso. Um mês depois da apresentação, a companhia retornou com uma demanda de estudo técnico para decisão de contratação no mercado livre, um escopo que a empresa não oferecia até então.",
      },
      {
        tipo: "p",
        texto: "A porta era da empresa. O que fez a conta se mover foi a análise.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto:
          "Contagem direta na base de clientes. Exposição em unidades consumidoras e MWm levantada dos contratos vigentes. Universo de empresas afetadas levantado a partir da lista de credores do processo judicial, com exclusão dos agentes do setor elétrico.",
      },
    ],
    stack: ["Python", "HTML", "dados CCEE"],
    imagem: {
      arquivo: "case-02-html.png",
      proporcao: "16 / 10",
      legenda: "Modelo de análise em tempo real, renderizado em HTML.",
    },
  },
  {
    id: "produto-por-condicao",
    numero: "03",
    titulo: "Produto por condição de mercado",
    tituloCompleto: "Desenho de produto a partir de leitura de mercado",
    card: {
      problema:
        "Preço favorável e preço alto travam a venda por motivos opostos.",
      solucao: "Criei um produto para cada momento, com dois anos de distância.",
      resultado:
        "55 a 60 contratos somando os dois produtos. Ambos seguem em operação.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "Dois momentos opostos do mercado livre, com dois anos de distância. Em 2024, preço favorável, com margem para desenhar oferta em segmentos antes inviáveis. Em 2026, preço alto, com a migração deixando de fechar a conta para parte relevante da base.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto:
          "Nos dois momentos, o modelo padrão de atendimento deixava dinheiro parado, por motivos diferentes.",
      },
      {
        tipo: "p",
        texto:
          "Com preço favorável, o CRM acumulava clientes de baixo consumo que nunca eram chamados, porque o custo de gestão não cabia no ticket. Com preço alto, o cliente que não podia migrar entrava em compasso de espera, sem receita para a empresa e exposto à concorrência durante todo o período.",
      },
      {
        tipo: "p",
        texto:
          "A resposta padrão do mercado era a mesma nos dois casos: não atender, ou esperar.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Criei dois produtos, cada um desenhado para a condição de mercado do seu momento.",
      },
      {
        tipo: "p",
        texto:
          "O primeiro, em 2024, é um modelo de compra de energia com fee comercial embutido no preço, com escopo de gestão reduzido e supervisão dimensionada para caber no ticket do cliente pequeno. Com o preço favorável, a economia projetada absorvia o fee e ainda entregava ganho ao cliente. O cliente que a operação não conseguia atender passou a ser atendido com um serviço menor e rentável.",
      },
      {
        tipo: "lista",
        ancora:
          "O segundo, em 2026, atende o cliente que não pode migrar, com desconto, sem esperar a janela de preço. Ele nasceu do cruzamento de três leituras:",
        itens: [
          "Leitura de preço, que mostrou que a migração deixaria de fechar a conta por um período longo o bastante para custar clientes.",
          "Leitura regulatória e de oferta em baixa tensão, que abriu o caminho pelo qual o atendimento era viável antes da migração.",
          "Leitura de portfólio, que identificou energia excedente em cooperativas e associações e lhe deu destino.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Parametrizei os dois modelos, testei em campo e conduzi a operação com o meu time. A execução na ponta comercial foi feita em conjunto com a estrutura comercial da empresa.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto:
          "No produto de baixo consumo, 10 contratos com clientes que antes não eram sequer abordados. No produto para o cliente que não pode migrar, cerca de 20 contratos fechados pela minha equipe com clientes da base em migração e outros 25 a 30 na ponta comercial. Ambos seguem em operação.",
      },
      {
        tipo: "p",
        texto:
          "O efeito organizacional foi maior que o número de contratos. O comercial, que estava sem oferta viável para o momento de mercado, voltou a vender, e a estrutura comercial foi reorganizada em torno da nova frente, com a unificação das equipes e a criação de uma posição executiva de grandes negócios. O produto de 2026 foi lançado praticamente em paralelo com o primeiro movimento equivalente do mercado, no mesmo mês.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto:
          "Contagem de contratos na base. A receita gerada é estimativa própria a partir da margem por contrato e não é apresentada como número auditado.",
      },
    ],
    imagem: {
      arquivo: "case-03-matriz.svg",
      proporcao: "16 / 9",
      legenda: "Um produto para cada condição de mercado.",
    },
  },
  {
    id: "posicionamento-competitivo",
    numero: "04",
    titulo: "Posicionamento competitivo",
    tituloCompleto: "Posicionamento competitivo e habilitação do time comercial",
    card: {
      problema:
        "O time perdia negócios para o desconto garantido e chamava isso de medo do cliente.",
      solucao:
        "Fui ao contrato do concorrente e construí o roteiro de contraposição.",
      resultado:
        "Seis clientes perdidos em 45 dias antes. Nenhum em quase três anos depois.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "Início da minha trajetória na empresa, como analista, no período em que eu estruturava a operação e os padrões de atendimento ao cliente varejista. O varejista era um produto novo e a operação estava sendo criada do zero.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto:
          "Comercializadoras concorrentes ofereciam contratos de desconto garantido, uma proposta de leitura fácil e comercialmente agressiva. O time de vendas perdia negócios para ela e não tinha resposta técnica.",
      },
      {
        tipo: "p",
        texto:
          "A justificativa recorrente era o medo do cliente: medo da variação, medo do risco, medo de errar. Só que medo não é objeção, é sintoma. A objeção real estava nas cláusulas do contrato de desconto garantido, e ninguém no time tinha ido lê-las. Nos 45 dias entre o lançamento da oferta concorrente e a minha intervenção, seis clientes foram perdidos para ela.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Fui aos contratos da concorrência e levantei ponto a ponto onde o desconto garantido cobra o preço da própria garantia. Transformei isso em um roteiro de contraposição técnica, não em ataque ao concorrente.",
      },
      {
        tipo: "lista",
        ancora: "O roteiro foi construído sobre três princípios:",
        itens: [
          "Foco no contrato e não no discurso, para tirar a conversa da promessa comercial e levá-la para a cláusula.",
          "Tradução do risco em termos que o cliente entende, para que o medo virasse critério de decisão e não paralisia.",
          "Ponderação técnica em vez de confronto, no formato de consultoria, para preservar a percepção de imparcialidade.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Treinei o time comercial na aplicação do roteiro, área que não estava sob a minha gestão.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto:
          "Seis clientes perdidos em 45 dias, antes da intervenção. Nenhum desde então. O roteiro segue em uso e a empresa não perdeu mais nenhuma venda para esse argumento em quase três anos.",
      },
      {
        tipo: "p",
        texto:
          "O ganho não foi só de conversão. O time deixou de tratar o medo do cliente como obstáculo intransponível e passou a tratá-lo como um ponto de conversa que ele mesmo podia conduzir, com argumento técnico e sem escalar para a diretoria.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto:
          "Contagem de negócios perdidos para essa oferta específica, antes e depois do treinamento.",
      },
    ],
    imagem: {
      arquivo: "case-04-promessa-clausula.svg",
      proporcao: "16 / 9",
      legenda: "A promessa comercial ao lado da cláusula que a cobra.",
    },
  },
  {
    id: "continuidade-operacional",
    numero: "05",
    titulo: "Continuidade operacional",
    tituloCompleto: "Continuidade operacional e desconcentração de conhecimento",
    card: {
      problema:
        "A operação dependia da memória de duas pessoas e a empresa acabara de trocar a diretoria.",
      solucao:
        "Automatizei as rotinas críticas, reconstruí a camada de dados e documentei o que só existia oralmente.",
      resultado:
        "Cada analista passou de 45 para 100 clientes atendidos. Cerca de 24 dias-homem devolvidos à operação todo mês.",
    },
    contexto: [
      {
        tipo: "p",
        texto:
          "Em 2025 a empresa trocou a diretoria de duas áreas. A operação do mercado livre é densa em regra, prazo e obrigação regulatória, e boa parte desse conhecimento não estava documentada em lugar nenhum. Estava na cabeça de duas pessoas.",
      },
    ],
    problema: [
      {
        tipo: "p",
        texto:
          "Uma operação que depende de duas pessoas não é uma operação, é um risco. Rotinas críticas rodavam por memória, envio manual e planilha individual. Não havia como treinar alguém novo, auditar o que tinha sido feito ou absorver crescimento sem contratar mais gente sênior.",
      },
      {
        tipo: "p",
        texto:
          "Havia também um limite físico. As planilhas centrais da operação passavam de 90 MB, com muitos usuários simultâneos, e travavam. A rotina de atualização das bases levava cerca de 20 minutos e falhava com frequência.",
      },
    ],
    oQueFiz: [
      {
        tipo: "p",
        texto:
          "Tratei o problema como de continuidade, não de produtividade. O objetivo não era ganhar tempo, era tirar a operação da cabeça das pessoas e colocá-la em sistema.",
      },
      {
        tipo: "lista",
        ancora: "O trabalho se dividiu em quatro frentes:",
        itens: [
          "Automação das rotinas mensais críticas, com sete atividades manuais recorrentes convertidas em ferramentas internas.",
          "Reconstrução da camada de dados, com o processamento pesado saindo da planilha e indo para Python e nuvem.",
          "Conversão de planilhas em mini sistemas, com regra de negócio explícita, validação e rastreabilidade.",
          "Base de conhecimento interna, com wiki, POPs e fluxogramas do que antes era transmitido oralmente.",
        ],
      },
      {
        tipo: "p",
        texto:
          "Conduzi as frentes junto com um analista sênior do time, que foi peça central na execução.",
      },
    ],
    resultado: [
      {
        tipo: "p",
        texto:
          "O ciclo mensal de relatórios, que ocupava cinco pessoas por cinco dias, passou a ser feito por duas pessoas em cerca de três horas. São aproximadamente 24 dias-homem devolvidos à operação todo mês, sem mudança no que é entregue.",
      },
      {
        tipo: "p",
        texto:
          "A planilha central saiu de quase 100 MB para cerca de 2 MB, e a rotina de atualização de bases caiu de aproximadamente 20 minutos para cerca de 20 segundos.",
      },
      {
        tipo: "p",
        texto:
          "O ganho maior não é o tempo devolvido, é o que passou a ser possível. A operação roda hoje cerca de 40 análises de contratação por semana. No modelo anterior, ao tempo do analista sênior, esse volume exigiria mais de 30 horas semanais dedicadas exclusivamente a isso, o equivalente a uma pessoa em tempo integral. Não era um volume caro. Era um volume que não existia. Pelo mesmo motivo, cada analista passou a atender 100 clientes onde antes atendia 45.",
      },
      {
        tipo: "p",
        texto:
          "Rotinas que dependiam de memória passaram a depender de processo, com dono, critério e rastro. O conhecimento técnico e regulatório deixou de ser transmitido de boca em boca e passou a ser consultável, atualizável e reaproveitável. A operação continuou funcionando durante a troca de diretoria, e a camada construída naquele ano é a base sobre a qual todos os outros trabalhos deste portfólio rodam hoje.",
      },
    ],
    comoMedi: [
      {
        tipo: "p",
        texto:
          "Ciclo de relatórios cronometrado antes e depois, com headcount conhecido nos dois momentos. Tamanho de arquivo e tempo de rotina medidos antes e depois. A estimativa de capacidade usa o tempo do analista sênior, 45 minutos por análise, que é o piso: com analista júnior o tempo passava de 1h40. Não há série histórica de volume anterior à ferramenta, e por isso não reivindico o ganho como economia de horas, e sim como capacidade que antes não existia.",
      },
    ],
    stack: ["Google Sheets", "Apps Script", "Python", "Google Cloud", "ClickUp", "NotebookLM"],
    imagem: {
      arquivo: "case-05-sistema.png",
      proporcao: "16 / 10",
      legenda: "Painel da planilha-sistema e base de conhecimento interna.",
    },
  },
];

