// Contas de teste: criadas pelo script de demonstração de cada repositório
// (veja o README de cada projeto). Todas entram sem cadastro.
const shots = (slug, kind, captions) =>
  captions.map((caption, i) => ({ src: `/projetos/${slug}/${kind}-${i + 1}.webp`, caption }));

export const projects = [
  {
    slug: "codeflow",
    name: "CodeFlow",
    subtitle: "Plataforma para aprender programação",
    color: "#9b5bd0",
    summary:
      "Ensino de programação do zero, com aulas curtas divididas em passos e o código do aluno rodando dentro do próprio navegador, sem passar por servidor. A correção explica por que a resposta está errada, e o progresso vem com sequência de dias, XP e conquistas, no espírito do Duolingo. São 14 trilhas (JavaScript, TypeScript, React, SQL, Node, Python e outras) e mais de 800 exercícios.",
    tryIt: [
      "Entre como aluno e resolva um exercício: o código roda na hora, no navegador.",
      "Erre de propósito para ver a correção explicar o que aconteceu.",
      "Entre como admin para ver o painel de uso e desempenho dos alunos.",
    ],
    stack: ["React", "TypeScript", "Supabase", "Vite"],
    repo: "https://github.com/EduuGah/CodeFlow",
    demo: "https://codeflow-three-kappa.vercel.app/login",
    accounts: [
      { role: "Administrador", user: "admin", password: "admin" },
      { role: "Aluno", user: "aluno", password: "aluno" },
    ],
    desktop: shots("codeflow", "desktop", ["Página inicial", "Painel do aluno", "Aula passo a passo", "Perfil com XP e conquistas"]),
    mobile: shots("codeflow", "mobile", ["Painel", "Trilhas", "Perfil", "Entrada"]),
  },
  {
    slug: "dineflow",
    name: "DineFlow",
    subtitle: "Pedidos em tempo real para restaurantes",
    color: "#f2711c",
    summary:
      "O garçom lança o pedido pelo celular, a mesa aparece ocupada na hora e a cozinha recebe a comanda em tempo real, sem papel passando de mão em mão. Quando o prato fica pronto, a cozinha marca e o garçom é avisado. Cada restaurante tem os próprios dados isolados no banco, e a regra do projeto é simples: o sistema pode ser básico, mas nunca pode perder um pedido.",
    tryIt: [
      "Entre como garçom e lance um pedido numa mesa.",
      "Abra a cozinha em outra aba: a comanda chega sem recarregar a página.",
      "Como admin, veja o painel do dia, o cardápio e a auditoria de tudo que foi feito.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase"],
    repo: "https://github.com/EduuGah/DineFlow",
    demo: "https://dine-flow-zeta-snowy.vercel.app/entrar",
    accounts: [
      { role: "Dono", user: "admin", password: "admin" },
      { role: "Garçom", user: "garcom", password: "garcom" },
      { role: "Cozinha", user: "cozinha", password: "cozinha" },
    ],
    desktop: shots("dineflow", "desktop", ["Painel do dia", "Cardápio", "Histórico de pedidos", "Auditoria"]),
    mobile: [],
  },
  {
    slug: "cutflow",
    name: "CutFlow",
    subtitle: "Agenda e gestão para barbearias",
    color: "#c8a24a",
    summary:
      "Agenda que mostra só os horários que cada profissional realmente tem livres, considerando a duração de cada serviço. O cliente escolhe o dia, confirma, e a vaga sai da agenda de todo mundo na hora, sem risco de dois clientes no mesmo horário. O dono acompanha atendimentos, o faturamento do dia e dos últimos 7 dias e a agenda da casa inteira num painel só.",
    tryIt: [
      "Como cliente, marque um horário: só aparecem os horários livres.",
      "Como barbeiro, veja o seu dia e bloqueie um período da agenda.",
      "Como dono, acompanhe faturamento, equipe e serviços.",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    repo: "https://github.com/EduuGah/CutFlow",
    demo: "https://cut-flow-sandy.vercel.app/login",
    accounts: [
      { role: "Dono", user: "admin", password: "admin" },
      { role: "Barbeiro", user: "barbeiro", password: "barbeiro" },
      { role: "Cliente", user: "cliente", password: "cliente" },
    ],
    desktop: shots("cutflow", "desktop", [
      "Visão geral do dono",
      "Equipe",
      "Serviços",
      "Agenda do barbeiro",
      "Bloqueio de horário",
      "Perfil do barbeiro",
    ]),
    mobile: shots("cutflow", "mobile", ["Escolha do dia", "Serviço e horário", "Meus agendamentos"]),
  },
  {
    slug: "coupleflow",
    name: "CoupleFlow",
    subtitle: "Organização compartilhada para casais",
    color: "#f4623a",
    summary:
      "Um espaço para o casal organizar a vida a dois num lugar só, em vez de espalhar tudo entre conversas e anotações soltas: ideias, planos com data, fotos das memórias e presentes, visíveis para os dois ao mesmo tempo, com notificação quando o outro mexe em algo.",
    tryIt: [
      "Entre como admin e crie um plano.",
      "Entre como parceiro em outra aba: o plano aparece para os dois, com notificação.",
      "Use o sorteio quando não souberem o que fazer.",
    ],
    stack: ["React", "TypeScript", "Supabase"],
    repo: "https://github.com/EduuGah/CoupleFlow",
    demo: "https://couple-flow.vercel.app/",
    accounts: [
      { role: "Pessoa 1", user: "admin", password: "admin" },
      { role: "Pessoa 2", user: "parceiro", password: "parceiro" },
    ],
    desktop: shots("coupleflow", "desktop", ["Início do casal", "Lista de planos"]),
    mobile: shots("coupleflow", "mobile", ["Sorteio de plano", "Notificações", "Novo plano"]),
  },
  {
    slug: "pluralrh",
    name: "PluralRH",
    subtitle: "RH, treinamentos e diversidade (PIM VI)",
    color: "#3b6fc4",
    summary:
      "Projeto integrado da faculdade: uma empresa acompanha funcionários, treinamentos e ações de diversidade e inclusão num sistema só. O RH usa um painel web com indicadores de quem concluiu, quem está pendente e quem nem começou; o funcionário usa um app que mostra os próprios treinamentos e funciona sem internet, enviando as alterações quando a conexão volta. A API em .NET cuida do login com JWT (com logout que revoga o token), das permissões por perfil e das regras, que também são garantidas no banco.",
    tryIt: [
      "Como admin, veja o dashboard e a lista de funcionários por departamento.",
      "Como gestora de RH, inscreva alguém num treinamento e acompanhe o progresso.",
      "No app (pim-vi.vercel.app/app), entre como funcionária e avance o progresso de um treinamento.",
    ],
    stack: ["C#", ".NET 8", "ASP.NET Core", "EF Core", "SQLite", "Flutter"],
    repo: "https://github.com/EduuGah/Pim-VI",
    demo: "https://pim-vi.vercel.app/",
    accounts: [
      { role: "Admin", user: "admin@pluralrh.com", password: "Admin@123" },
      { role: "Gestora (RH)", user: "carla.mendes@pluralrh.com", password: "Gestor@123" },
      { role: "Funcionária (app)", user: "ana.souza@pluralrh.com", password: "Func@123" },
    ],
    desktop: shots("pluralrh", "desktop", ["Dashboard do RH", "Funcionários", "Detalhe do treinamento", "Participações", "Diversidade e inclusão"]),
    mobile: shots("pluralrh", "mobile", ["Início do funcionário", "Meus treinamentos", "Progresso do treinamento", "Modo offline"]),
  },
];
