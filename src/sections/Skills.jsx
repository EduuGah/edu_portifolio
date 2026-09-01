import { motion } from "motion/react";
import { Icon } from "../components/Icon";

const groups = [
  { icon: "code", title: "Linguagens", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"] },
  { icon: "layers", title: "Frameworks", items: ["React", "Next.js", "Vite"] },
  { icon: "tools", title: "Ferramentas", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "npm"] },
  { icon: "database", title: "Banco de dados", items: ["MySQL", "PostgreSQL", "Firebase", "Supabase"] }
];

export function Skills() {
  return (
    <motion.section 
      id="skills" 
      className="section skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-heading">
        <div><h2>O que uso para construir</h2><p>Uma stack enxuta, com espaço para continuar explorando.</p></div>
      </div>
      <div className="skills-grid">
        {groups.map((group, i) => (
          <motion.article 
            className="skill-group" 
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="skill-title"><Icon name={group.icon} size={22}/><h3>{group.title}</h3></div>
            <ul className="skills-badge-list">
              {group.items.map(item => (
                <li key={item} className="skill-badge">{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
      <div className="learning">
        <span>Explorando agora</span>
        <p>APIs Firebase, arquitetura de componentes e performance com Vite.</p>
      </div>
    </motion.section>
  );
}