import { Icon } from "../components/Icon";

const projects = [
  {
    name: "ForgeFlow",
    problem: "Organiza treinos de musculação em um só lugar: exercícios, fichas personalizadas, cargas, repetições e histórico de evolução.",
    stack: ["React", "TypeScript", "Vite"],
    repo: "https://github.com/EduuGah/ForgeFlow",
    extra: { label: "Versão nativa em Kotlin", href: "https://github.com/EduuGah/Forge-Flow---Nativo" },
    visual: "forge"
  },
  {
    name: "MetaFlow",
    problem: "Centraliza projetos pessoais e as atividades vinculadas a cada projeto, deixando o acompanhamento do trabalho mais organizado.",
    stack: ["Next.js", "JavaScript", "Firebase"],
    repo: "https://github.com/EduuGah/MetaFlow",
    visual: "meta"
  }
];

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual ${type}`}>
      {type === "forge" ? (
        <>
          <div className="mini-phone"><span>ForgeFlow</span><b>Treino A</b><i>Supino reto</i><i>Remada baixa</i></div>
          <div className="mini-chart"><b>evolução</b><div className="bars"><i/><i/><i/><i/><i/></div></div>
        </>
      ) : (
        <>
          <div className="mini-board"><span>MetaFlow</span><b>Projetos</b><i>Portfolio</i><i>CutFlow</i><i>Silicon Soil</i></div>
          <div className="mini-task"><b>Hoje</b><span>3 tarefas</span><em>72%</em></div>
        </>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="section-heading">
        <span className="section-index">03</span>
        <div><h2>Projetos em destaque</h2><p>Projetos pessoais que mostram como eu penso e construo.</p></div>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <article className="project-card" key={project.name}>
            <ProjectVisual type={project.visual}/>
            <div className="project-content">
              <div className="project-head"><h3>{project.name}</h3><a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name} no GitHub`}><Icon name="external" size={18}/></a></div>
              <p>{project.problem}</p>
              <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-links">
                <a href={project.repo} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> Ver repositório</a>
                {project.extra && <a href={project.extra.href} target="_blank" rel="noreferrer">{project.extra.label} <Icon name="external" size={14}/></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}