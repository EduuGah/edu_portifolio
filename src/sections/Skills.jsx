import { motion } from "motion/react";
import {
  Atom, Braces, Code2, FileCode2, Triangle, Server, FileCode, Waypoints,
  KeyRound, Database, Flame, GitBranch, PenTool, Package, Wrench,
  Boxes, TerminalSquare
} from "lucide-react";

const skills = {
  React: Atom,
  TypeScript: Braces,
  JavaScript: Braces,
  HTML: Code2,
  CSS: FileCode2,
  "Next.js": Triangle,
  Vite: Triangle,
  "Node.js": Server,
  Python: FileCode,
  "APIs REST": Waypoints,
  "Autenticação": KeyRound,
  PostgreSQL: Database,
  MySQL: Database,
  Supabase: Boxes,
  Firebase: Flame,
  Git: GitBranch,
  GitHub: GitBranch,
  "VS Code": TerminalSquare,
  Figma: PenTool,
  Vercel: Triangle,
  npm: Package,
};

const groups = [
  { icon: Code2, title: "Front-end", description: "Tecnologias que mais utilizo na interface.", items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js", "Vite"] },
  { icon: Server, title: "Back-end & APIs", description: "Conhecimentos usados em integrações e projetos.", items: ["Node.js", "Python", "APIs REST", "Autenticação"] },
  { icon: Database, title: "Banco de dados", description: "Bancos e serviços com os quais já trabalhei.", items: ["PostgreSQL", "MySQL", "Supabase", "Firebase"] },
  { icon: Wrench, title: "Ferramentas", description: "Ferramentas presentes no meu fluxo de desenvolvimento.", items: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "npm"] }
];

function SkillBadge({ item }) {
  const SkillIcon = skills[item] || Code2;
  return <span className="skill-badge skill-badge-icon"><SkillIcon size={15} strokeWidth={1.9} aria-hidden="true" />{item}</span>;
}

export function Skills() {
  return (
    <motion.section id="skills" className="section skills" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
      <div className="section-heading skills-heading">
        <p className="kicker">Skills</p>
        <h2>Tecnologias e ferramentas.</h2>
        <p>Uma visão rápida da stack que utilizo e das tecnologias com as quais já tive contato em projetos.</p>
      </div>
      <div className="skills-grid skills-grid-clear">
        {groups.map(({icon: Icon, title, description, items}) => (
          <article className="skill-group skill-group-clear" key={title}>
            <div className="skill-title-clear"><span><Icon size={20}/></span><div><h3>{title}</h3><p>{description}</p></div></div>
            <div className="skills-badge-list">{items.map(item => <SkillBadge item={item} key={item}/>)}</div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
