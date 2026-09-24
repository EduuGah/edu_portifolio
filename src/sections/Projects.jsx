import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectShowcase } from "../components/ProjectShowcase";

const LEN = projects.length;
// Um clone em cada ponta deixa o carrossel girar sem fim: ao chegar num clone,
// a trilha salta sem animação para o projeto verdadeiro equivalente.
const track = [projects[LEN - 1], ...projects, projects[0]];

export function Projects() {
  const [trackIndex, setTrackIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [height, setHeight] = useState(null);
  const slideRefs = useRef([]);

  const active = (trackIndex - 1 + LEN) % LEN;

  const go = (dir) => {
    setAnimated(true);
    setTrackIndex((i) => i + dir);
  };

  const goTo = (i) => {
    setAnimated(true);
    setTrackIndex(i + 1);
  };

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (trackIndex === 0) {
      setAnimated(false);
      setTrackIndex(LEN);
    } else if (trackIndex === track.length - 1) {
      setAnimated(false);
      setTrackIndex(1);
    }
  };

  // A janela do carrossel acompanha a altura do projeto visível (ela muda ao
  // trocar entre computador e celular), sem deixar vão embaixo dos menores.
  useLayoutEffect(() => {
    const el = slideRefs.current[trackIndex];
    if (!el) return;
    setHeight(el.offsetHeight);
    const observer = new ResizeObserver(() => setHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, [trackIndex]);

  useEffect(() => {
    if (animated) return;
    const id = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(id);
  }, [animated]);

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

      <div className="carousel-bar">
        <div className="project-index" role="tablist" aria-label="Escolher projeto">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "is-active" : ""}
              style={{ "--tint": p.color }}
              onClick={() => goTo(i)}
            >
              <span className="project-dot" aria-hidden="true" />
              {p.name}
            </button>
          ))}
        </div>
        <div className="carousel-arrows">
          <button type="button" onClick={() => go(-1)} aria-label="Projeto anterior"><ChevronLeft size={20} /></button>
          <span className="mono" aria-live="polite">{active + 1} / {LEN}</span>
          <button type="button" onClick={() => go(1)} aria-label="Próximo projeto"><ChevronRight size={20} /></button>
        </div>
      </div>

      <div className="carousel-viewport" style={{ height: height ?? undefined }}>
        <div
          className={`carousel-track${animated ? "" : " no-transition"}`}
          style={{ transform: `translateX(-${trackIndex * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {track.map((p, i) => (
            <div
              className="carousel-slide"
              key={`${p.slug}-${i}`}
              ref={(el) => (slideRefs.current[i] = el)}
              inert={i !== trackIndex}
              aria-hidden={i !== trackIndex}
            >
              <ProjectShowcase project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
