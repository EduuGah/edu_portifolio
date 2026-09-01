import { motion } from "motion/react";

export function About() {
  return (
    <motion.section 
      id="sobre" 
      className="section about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-heading">
        <h2>Sobre mim</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">
            Estou no 4º semestre de Análise e Desenvolvimento de Sistemas
            na UNIP. Meu foco atual é no front-end, mas com o objetivo de
            dominar o back-end e me tornar um desenvolvedor Full Stack.
          </p>
          <p>
            Antes disso, explorei back-end e bancos de dados em projetos
            pessoais. Essa experiência me ajuda a pensar além da tela:
            entendo de onde os dados vêm e como a interface depende deles.
          </p>
          <p>
            No momento, dedico meu tempo a aprimorar minhas habilidades com
            React, TypeScript e a arquitetura de interfaces, enquanto me
            preparo para integrar sistemas mais complexos no futuro.
          </p>
        </div>
        <motion.div 
          className="about-photo-wrapper"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          animate={{ y: [0, -15, 0] }}
          viewport={{ once: true }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.2 },
            x: { duration: 0.6, delay: 0.2 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
        >
          <img src="https://github.com/EduuGah.png" alt="Carlos Eduardo" className="about-photo" />
        </motion.div>
      </div>
    </motion.section>
  );
}
