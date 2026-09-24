import { motion } from "motion/react";
import { ArrowDown, MapPin } from "lucide-react";
import { Icon } from "../components/Icon";

export function Hero() {
  return (
    <section id="inicio" className="section hero">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="kicker">Desenvolvedor front-end · React e TypeScript</p>
        <h1>Carlos<br />Eduardo<span className="h1-dot">.</span></h1>
        <p className="hero-text">
          Estudante de Análise e Desenvolvimento de Sistemas. Construo aplicações completas,
          da interface ao banco de dados, e deixo cada uma aberta para você testar.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">Ver projetos <ArrowDown size={17} aria-hidden="true" /></a>
          <a className="button button-ghost" href="https://github.com/EduuGah" target="_blank" rel="noreferrer"><Icon name="github" size={17} /> GitHub</a>
          <a className="button button-ghost" href="https://www.linkedin.com/in/carlos-eduardo-863015377/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={17} /> LinkedIn</a>
        </div>
      </motion.div>

      <motion.aside className="hero-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.12 }}>
        <img src="https://github.com/EduuGah.png" alt="Foto de Carlos Eduardo" className="hero-photo" width="460" height="460" />
        <div className="hero-card-meta">
          <p><span className="status-dot" aria-hidden="true" /> Aberto a estágio e vagas júnior</p>
          <p className="muted"><MapPin size={14} aria-hidden="true" /> Brasil</p>
        </div>
      </motion.aside>
    </section>
  );
}
