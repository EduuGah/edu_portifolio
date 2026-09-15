import { motion } from "motion/react";
import { Icon } from "../components/Icon";
import { ArrowDownRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="hero section">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
        <p className="eyebrow"><span /> Disponível para oportunidades</p>
        <h1>Carlos Eduardo.</h1>
        <p className="hero-role">Front-end Developer</p>
        <p className="hero-text">Desenvolvedor e estudante de Análise e Desenvolvimento de Sistemas, com foco em React e TypeScript.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">Ver projetos <ArrowDownRight size={17}/></a>
          <a className="button button-secondary" href="https://github.com/EduuGah" target="_blank" rel="noreferrer"><Icon name="github" size={18}/> GitHub</a>
        </div>
        <div className="social-row">
          <a href="https://www.linkedin.com/in/carlos-eduardo-863015377/" target="_blank" rel="noreferrer"><Icon name="linkedin" size={17}/> LinkedIn</a>
          <a href="https://www.instagram.com/eduugah/" target="_blank" rel="noreferrer"><Icon name="instagram" size={17}/> Instagram</a>
          <span><MapPin size={16}/> Brasil</span>
        </div>
      </motion.div>
      <motion.div className="hero-photo-wrap" initial={{opacity:0,scale:.97,y:10}} animate={{opacity:1,scale:1,y:[0,-7,0]}} transition={{opacity:{duration:.55},scale:{duration:.55},y:{duration:5.5,repeat:Infinity,ease:"easeInOut",delay:.7}}}>
        <div className="hero-photo-frame">
          <img src="https://github.com/EduuGah.png" alt="Carlos Eduardo" className="hero-photo" />
        </div>
      </motion.div>
    </section>
  );
}
