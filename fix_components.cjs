const fs = require('fs');

// 1. Fix Projects.jsx teste
const projectsJSX = `import { motion } from "motion/react";
import { Icon } from "../components/Icon";

const projects = [
  {
    name: "DineFlow",
    problem: "Sistema de pedidos para restaurantes: garçom lança no celular, a cozinha recebe em tempo real. Isolamento de restaurantes com RLS e testes.",
    stack: ["Next.js", "React", "TypeScript", "Supabase"],
    repo: "https://github.com/EduuGah/DineFlow",
    image: "/projetos/dineflow.png"
  },
  {
    name: "CutFlow",
    problem: "SaaS para barbearias gerenciarem agendamentos, barbeiros, serviços, horários e avaliações de clientes de forma centralizada.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    repo: "https://github.com/EduuGah/CutFlow",
    image: "/projetos/cutflow.png"
  },
  {
    name: "ForgeFlow",
    problem: "Web app para organizar treinos de musculação. Permite gerenciar exercícios, criar fichas e acompanhar evolução de cargas.",
    stack: ["React", "TypeScript", "Vite", "Kotlin"],
    repo: "https://github.com/EduuGah/ForgeFlow",
    extra: { label: "Versão Nativa", href: "https://github.com/EduuGah/Forge-Flow---Nativo" },
    image: "/projetos/ForgeFlow.jpg"
  },
  {
    name: "CoupleFlow",
    problem: "Um espaço compartilhado para casais planejarem e registrarem coisas para fazer juntos, facilitando a organização diária.",
    stack: ["React", "TypeScript", "Firebase"],
    repo: "https://github.com/EduuGah/CoupleFlow",
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
        <span className="section-index">03</span>
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
              <img src={project.image} alt={\`Screenshot de \${project.name}\`} className="project-screenshot" />
            </div>
            <div className="project-content">
              <div className="project-head">
                <h3>{project.name}</h3>
                <a href={project.repo} target="_blank" rel="noreferrer" aria-label={\`Abrir \${project.name} no GitHub\`}><Icon name="external" size={18}/></a>
              </div>
              <p>{project.problem}</p>
              <div className="tags">
                {project.stack.map(tag => <span key={tag} className="badge"><Icon name="code" size={12}/> {tag}</span>)}
              </div>
              <div className="project-links">
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
`;
fs.writeFileSync('src/sections/Projects.jsx', projectsJSX);


// 2. Fix Hero.jsx
const heroJSX = `import { motion } from "motion/react";
import { Icon } from "../components/Icon";

export function Hero() {
  return (
    <section id="inicio" className="hero section">
      <motion.div 
        className="hero-copy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="availability"><span /> Disponível para primeira oportunidade</p>
        <h1>Desenvolvedor<br /><em>Front-end.</em></h1>
        <p className="hero-text">
          Construo interfaces com React, TypeScript e Vite,
          buscando transformar ideias em experiências claras de usar.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="https://github.com/EduuGah" target="_blank" rel="noreferrer">
            <Icon name="github" size={18}/> Ver meus projetos
          </a>
          <a className="button button-secondary" href="mailto:edugah1809@gmail.com">
            <Icon name="mail" size={18}/> Enviar e-mail
          </a>
        </div>
        <div className="social-row">
          <a href="https://www.linkedin.com/in/carlos-eduardo-863015377/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={17}/> LinkedIn</a>
          <a href="https://www.instagram.com/eduugah/" target="_blank" rel="noreferrer"><Icon name="instagram" size={17}/> Instagram</a>
          <span>Brasil</span>
        </div>
      </motion.div>

      <motion.div 
        className="hero-art profile-art"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        aria-label="Foto de perfil de Carlos Eduardo"
      >
        <div className="profile-img-container">
          <img src="https://github.com/EduuGah.png" alt="Carlos Eduardo" className="profile-img" />
        </div>
      </motion.div>
    </section>
  );
}
`;
fs.writeFileSync('src/sections/Hero.jsx', heroJSX);


// 3. Fix Contact.jsx
const contactJSX = `import { motion } from "motion/react";
import { Icon } from "../components/Icon";

const contacts = [
  { label: "E-mail", value: "edugah1809@gmail.com", href: "mailto:edugah1809@gmail.com", icon: "mail" },
  { label: "LinkedIn", value: "/carlos-eduardo-863015377", href: "https://www.linkedin.com/in/carlos-eduardo-863015377/", icon: "linkedin" },
  { label: "GitHub", value: "/EduuGah", href: "https://github.com/EduuGah", icon: "github" },
  { label: "Instagram", value: "@eduugah", href: "https://www.instagram.com/eduugah/", icon: "instagram" }
];

export function Contact() {
  return (
    <section id="contato" className="section contact">
      <motion.div 
        className="contact-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-index">04</span>
        <h2>Se você está procurando<br/>um dev front-end em início de carreira</h2>
        <p>Nos meus canais você encontra meu código, projetos pessoais e formas de entrar em contato comigo.</p>
      </motion.div>
      <div className="contact-grid">
        {contacts.map((item, i) => (
          <motion.a 
            className="contact-card" 
            href={item.href} 
            target={item.href.startsWith("http") ? "_blank" : undefined} 
            rel={item.href.startsWith("http") ? "noreferrer" : undefined} 
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="contact-icon"><Icon name={item.icon} size={19}/></span>
            <div><strong>{item.label}</strong><small>{item.value}</small></div>
            <Icon name="arrow" size={16}/>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/sections/Contact.jsx', contactJSX);

