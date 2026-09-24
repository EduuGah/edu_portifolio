import { projects } from "../data/projects";
import { ProjectShowcase } from "../components/ProjectShowcase";

export function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="section-heading">
        <p className="kicker">Projetos</p>
        <h2>Quatro produtos completos, abertos para você testar.</h2>
        <p>
          Cada um tem login, banco de dados e regras de negócio de verdade. Use as contas de
          teste de cada projeto para entrar sem cadastro.
        </p>
      </div>
      <nav className="project-index" aria-label="Ir para um projeto">
        {projects.map((p) => (
          <a key={p.slug} href={`#projeto-${p.slug}`} style={{ "--tint": p.color }}>
            <span className="project-dot" aria-hidden="true" />
            {p.name}
          </a>
        ))}
      </nav>
      <div className="project-list">
        {projects.map((p) => <ProjectShowcase key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
