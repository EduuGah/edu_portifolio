import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, Monitor, Smartphone } from "lucide-react";
import { Icon } from "./Icon";
import { DemoAccess } from "./DemoAccess";
import { Lightbox } from "./Lightbox";

const isPhoneViewport = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 620px)").matches;

function hostOf(url) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function ViewSwitch({ view, onChange, name }) {
  const options = [
    ["desktop", "Computador", Monitor],
    ["mobile", "Celular", Smartphone],
  ];
  return (
    <div className="view-switch" role="group" aria-label={`Ver ${name} no computador ou no celular`}>
      {options.map(([id, label, IconCmp]) => (
        <button key={id} type="button" aria-pressed={view === id} className={view === id ? "is-active" : ""} onClick={() => onChange(id)}>
          <IconCmp size={15} aria-hidden="true" /> {label}
        </button>
      ))}
    </div>
  );
}

function DesktopStage({ project, index, onIndex, onOpen }) {
  const shots = project.desktop;
  const shot = shots[index];
  const step = (dir) => onIndex((index + dir + shots.length) % shots.length);

  return (
    <>
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-dots"><i /><i /><i /></span>
          <span className="browser-url">{hostOf(project.demo)}</span>
        </div>
        <button type="button" className="browser-screen" onClick={() => onOpen(index)} aria-label={`Ampliar tela: ${shot.caption}`}>
          <img src={shot.src} alt={`${project.name}: ${shot.caption}`} loading="lazy" width="1365" height="640" />
          <span className="zoom-hint" aria-hidden="true"><Expand size={14} /> Ampliar</span>
        </button>
      </div>
      {shots.length > 1 && (
        <>
          <button type="button" className="stage-arrow stage-arrow-prev" onClick={() => step(-1)} aria-label="Tela anterior"><ChevronLeft size={20} /></button>
          <button type="button" className="stage-arrow stage-arrow-next" onClick={() => step(1)} aria-label="Próxima tela"><ChevronRight size={20} /></button>
        </>
      )}
    </>
  );
}

function MobileStage({ project, onOpen }) {
  return (
    <div className="phones">
      {project.mobile.map((shot, i) => (
        <figure className="phone" key={shot.src}>
          <figcaption>{shot.caption}</figcaption>
          <button type="button" className="phone-body" onClick={() => onOpen(i)} aria-label={`Ampliar tela: ${shot.caption}`}>
            <span className="phone-status" aria-hidden="true"><span>9:41</span><i /></span>
            <img src={shot.src} alt={`${project.name} no celular: ${shot.caption}`} loading="lazy" width="506" height="680" />
          </button>
        </figure>
      ))}
    </div>
  );
}

export function ProjectShowcase({ project }) {
  const hasMobile = project.mobile.length > 0;
  const [view, setView] = useState(() => (hasMobile && isPhoneViewport() ? "mobile" : "desktop"));
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const shots = view === "desktop" ? project.desktop : project.mobile;

  return (
    <article className="project" id={`projeto-${project.slug}`} style={{ "--tint": project.color }}>
      <header className="project-head">
        <div>
          <h3><span className="project-dot" aria-hidden="true" />{project.name}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        {hasMobile ? (
          <ViewSwitch view={view} onChange={setView} name={project.name} />
        ) : (
          <p className="view-note"><Monitor size={15} aria-hidden="true" /> Feito para computador e tablet</p>
        )}
      </header>

      <div className={`stage stage-${view}`}>
        {view === "desktop" ? (
          <DesktopStage project={project} index={index} onIndex={setIndex} onOpen={setLightbox} />
        ) : (
          <MobileStage project={project} onOpen={setLightbox} />
        )}
      </div>

      {view === "desktop" && (
        <div className="stage-footer">
          <p className="stage-caption">
            <span className="mono">{String(index + 1).padStart(2, "0")}/{String(project.desktop.length).padStart(2, "0")}</span>
            {project.desktop[index].caption}
          </p>
          {project.desktop.length > 1 && (
            <div className="thumbs" role="group" aria-label={`Telas do ${project.name}`}>
              {project.desktop.map((shot, i) => (
                <button type="button" key={shot.src} className={i === index ? "is-active" : ""} aria-pressed={i === index} onClick={() => setIndex(i)} title={shot.caption}>
                  <img src={shot.src} alt="" loading="lazy" />
                  <span className="sr-only">{shot.caption}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="project-body">
        <div className="project-text">
          <p>{project.summary}</p>
          <ul className="stack-list" aria-label="Tecnologias">
            {project.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="project-try">
          <DemoAccess accounts={project.accounts} />
          <ul className="try-list">
            {project.tryIt.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <div className="project-links">
            <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">
              Abrir o {project.name} <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-ghost" href={project.repo} target="_blank" rel="noreferrer">
              <Icon name="github" size={17} /> Código
            </a>
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox images={shots} index={lightbox} title={project.name} onClose={() => setLightbox(null)} onChange={setLightbox} />
      )}
    </article>
  );
}
