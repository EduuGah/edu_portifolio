import { motion } from "motion/react";
import { Icon } from "../components/Icon";
import { MapPin } from "lucide-react";

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
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} strokeWidth={2} opacity={0.7} /> Brasil</span>
        </div>
      </motion.div>

      <motion.div 
        className="hero-art"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{ 
          opacity: { duration: 0.6, delay: 0.2 },
          scale: { duration: 0.6, delay: 0.2 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }
        }}
        aria-label="Painel visual inspirado em um editor de código"
      >
        <div className="art-wrapper">
          <div className="editor">
            <div className="editor-top"><span></span><span></span><span></span><small>portfolio.tsx</small></div>
            <div className="editor-body">
              <div className="line"><i>01</i><b>const</b> <strong>developer</strong> = {"{"}</div>
              <div className="line"><i>02</i>&nbsp;&nbsp;name: <mark>"Carlos Eduardo"</mark>,</div>
              <div className="line"><i>03</i>&nbsp;&nbsp;role: <mark>"Front-end Developer"</mark>,</div>
              <div className="line"><i>04</i>&nbsp;&nbsp;goal: <mark>"Full Stack Developer"</mark>,</div>
              <div className="line"><i>05</i>&nbsp;&nbsp;stack: [</div>
              <div className="line"><i>06</i>&nbsp;&nbsp;&nbsp;&nbsp;<mark>"React"</mark>, <mark>"TypeScript"</mark>,</div>
              <div className="line"><i>07</i>&nbsp;&nbsp;&nbsp;&nbsp;<mark>"Vite"</mark></div>
              <div className="line"><i>08</i>&nbsp;&nbsp;]</div>
              <div className="line"><i>09</i>{"}"};</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
