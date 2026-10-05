// Contas de teste: criadas pelo script de demonstração de cada repositório
// (veja o README de cada projeto). Todas entram sem cadastro. Projetos que
// abrem sem conta deixam `accounts` vazio e explicam em `accountsNote`.
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
    slug: "forgeflow",
    name: "ForgeFlow",
    subtitle: "Diário de musculação com recordes e evolução",
    color: "#ff7a1a",
    summary:
      "App de treino para registrar cada série em segundos: a carga da última vez aparece como referência, o descanso começa sozinho e a série que bate um recorde ganha uma medalha na hora. As rotinas ficam em pastas (uma por academia, por exemplo) e se reorganizam arrastando; cada treino guarda onde foi feito, e a evolução mostra gráficos por período, por academia e por exercício. São 130 exercícios com animação e instruções em português. Dá para importar o histórico do Hevy (treinos e medidas), usar sem internet e, com a conta Google, sincronizar entre aparelhos.",
    tryIt: [
      "Toque em “Usar sem conta” e comece um treino livre: cada série mostra a carga da última vez.",
      "Conclua uma série mais pesada para ver a medalha de recorde e o descanso começando sozinho.",
      "Em Rotinas, crie pastas e arraste as rotinas entre elas; no celular, deslize uma série para apagar.",
    ],
    stack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Vite", "PWA"],
    repo: "https://github.com/EduuGah/ForgeFlow-2.0",
    demo: "https://newforgeflow.vercel.app/",
    accounts: [],
    accountsNote:
      "Não precisa de conta: toque em “Usar sem conta” na tela inicial. Os dados ficam só no seu navegador; entrando com o Google, eles sincronizam entre aparelhos.",
    desktop: shots("forgeflow", "desktop", [
      "Entrada",
      "Painel do dia",
      "Rotinas em pastas",
      "Treino com recorde e descanso",
      "Evolução por academia",
      "Exercício com animação",
    ]),
    mobile: shots("forgeflow", "mobile", ["Treino em andamento", "Rotinas em pastas", "Instruções do exercício", "Academia"]),
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
