import { Icon } from "../components/Icon";

const groups = [
  { icon: "code", title: "Linguagens", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"] },
  { icon: "layers", title: "Frameworks", items: ["React", "Next.js", "Vite"] },
  { icon: "tools", title: "Ferramentas", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "npm"] },
  { icon: "database", title: "Banco de dados", items: ["MySQL", "PostgreSQL", "Firebase"] }
];

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading">
        <span className="section-index">02</span>
        <div><h2>O que uso para construir</h2><p>Uma stack enxuta, com espaço para continuar explorando.</p></div>
      </div>
      <div className="skills-grid">
        {groups.map(group => (
          <article className="skill-group" key={group.title}>
            <div className="skill-title"><Icon name={group.icon} size={22}/><h3>{group.title}</h3></div>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="learning">
        <span>Explorando agora</span>
        <p>APIs Firebase, arquitetura de componentes e performance com Vite.</p>
      </div>
    </section>
  );
}