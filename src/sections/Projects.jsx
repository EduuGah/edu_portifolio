import { motion } from "motion/react";
import { Icon } from "../components/Icon";

const projects = [
  {
    name: "DineFlow",
    problem: "Sistema de pedidos para restaurantes: garçom lança no celular, a cozinha recebe em tempo real. Isolamento de restaurantes com RLS e testes.",
    stack: ["Next.js", "React", "TypeScript", "Supabase"],
    repo: "https://github.com/EduuGah/DineFlow",
    demo: "https://dineflow.vercel.app", // Adjust if you have a real URL, else placeholder
    image: "/projetos/dineflow.png"
  },
  {
    name: "CutFlow",
    problem: "SaaS para barbearias gerenciarem agendamentos, barbeiros, serviços, horários e avaliações de clientes de forma centralizada.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    repo: "https://github.com/EduuGah/CutFlow",
    demo: "https://cutflow.vercel.app",
    image: "/projetos/cutflow.png"
  },
  {
    name: "ForgeFlow",
    problem: "Web app para organizar treinos de musculação. Permite gerenciar exercícios, criar fichas e acompanhar evolução de cargas.",
    stack: ["React", "TypeScript", "Vite", "Kotlin"],
    repo: "https://github.com/EduuGah/ForgeFlow",
    demo: "https://forgeflow.vercel.app",
    extra: { label: "Versão Nativa", href: "https://github.com/EduuGah/Forge-Flow---Nativo" },
    image: "/projetos/ForgeFlow.jpg"
  },
  {
    name: "CoupleFlow",
    problem: "Um espaço compartilhado para casais planejarem e registrarem coisas para fazer juntos, facilitando a organização diária.",
    stack: ["React", "TypeScript", "Firebase"],
    repo: "https://github.com/EduuGah/CoupleFlow",
    demo: "https://coupleflow.vercel.app",
    image: "/projetos/CoupleFlow.png"
  }
];

export function Projects() {
  return (
    <section id="projetos" className="section projects">
      <motion.div 
        className="section-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div><h2>Projetos em destaque</h2><p>Projetos reais que mostram como eu penso e construo.</p></div>
      </motion.div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.article 
            className="project-card" 
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={`Screenshot de ${project.name}`} className="project-screenshot" />
            </div>
            <div className="project-content">
              <div className="project-head">
                <h3>{project.name}</h3>
                <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} no GitHub`}><Icon name="external" size={18}/></a>
              </div>
              <p>{project.problem}</p>
              <div className="tags">
                {project.stack.map(tag => <span key={tag} className="badge"><Icon name="code" size={12}/> {tag}</span>)}
              </div>
              <div className="project-links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="demo-link">
                    <Icon name="arrow" size={16}/> Acessar projeto
                  </a>
                )}
                <a href={project.repo} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> Ver repositório</a>
                {project.extra && <a href={project.extra.href} target="_blank" rel="noreferrer">{project.extra.label} <Icon name="external" size={14}/></a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
