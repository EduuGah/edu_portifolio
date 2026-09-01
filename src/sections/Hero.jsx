import { Icon } from "../components/Icon";

export function Hero() {
  return (
    <section id="inicio" className="hero section">
      <div className="hero-copy">
        <p className="availability"><span /> Disponível para primeira oportunidade</p>
        <h1>Estudante de ADS<br />migrando para<br /><em>front-end.</em></h1>
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
      </div>

      <div className="hero-art" aria-label="Painel visual inspirado em um editor de código">
        <div className="editor">
          <div className="editor-top"><span></span><span></span><span></span><small>portfolio.tsx</small></div>
          <div className="editor-body">
            <div className="line"><i>01</i><b>const</b> <strong>developer</strong> = {"{"}</div>
            <div className="line"><i>02</i>&nbsp;&nbsp;name: <mark>"Carlos Eduardo"</mark>,</div>
            <div className="line"><i>03</i>&nbsp;&nbsp;focus: <mark>"front-end"</mark>,</div>
            <div className="line"><i>04</i>&nbsp;&nbsp;stack: [</div>
            <div className="line"><i>05</i>&nbsp;&nbsp;&nbsp;&nbsp;<mark>"React"</mark>, <mark>"TypeScript"</mark>,</div>
            <div className="line"><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<mark>"Vite"</mark></div>
            <div className="line"><i>07</i>&nbsp;&nbsp;]</div>
            <div className="line"><i>08</i>{"}"};</div>
          </div>
        </div>
        <div className="focus-note">
          <span className="note-dot"></span>
          <div><strong>Foco atual</strong><p>Componentes, APIs Firebase<br/>e performance com Vite.</p></div>
        </div>
        <div className="art-caption">aprender<br/>construir<br/>evoluir</div>
      </div>
    </section>
  );
}