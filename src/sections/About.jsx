import { motion } from "motion/react";
import { GraduationCap, Code2, BriefcaseBusiness } from "lucide-react";

export function About() {
  return (
    <motion.section id="sobre" className="section about" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-70px"}} transition={{duration:.5}}>
      <div className="section-heading about-heading"><p className="kicker">01 / Sobre</p><h2>Um pouco sobre mim.</h2></div>
      <div className="about-grid-new">
        <div className="about-copy">
          <p className="lead">Sou Carlos Eduardo, estudante de ADS na UNIP e desenvolvedor front-end em busca da minha primeira oportunidade profissional na área.</p>
          <p>Programação virou a forma que encontrei de transformar ideias em projetos que realmente funcionam. Ao longo dos estudos passei por front-end, banco de dados e back-end, criando aplicações próprias para colocar cada conceito em prática.</p>
          <p>Hoje meu foco principal é React e TypeScript. Também venho ampliando meus conhecimentos em APIs, Node.js e bancos de dados para conseguir participar de cada vez mais partes de um produto.</p>
        </div>
        <div className="about-cards">
          <article><GraduationCap size={21}/><div><span>Formação</span><strong>Análise e Desenvolvimento de Sistemas</strong><small>UNIP · 4º semestre</small></div></article>
          <article><Code2 size={21}/><div><span>Foco</span><strong>Desenvolvimento Front-end</strong><small>React · TypeScript · JavaScript</small></div></article>
          <article><BriefcaseBusiness size={21}/><div><span>Objetivo</span><strong>Primeira oportunidade em desenvolvimento</strong><small>Aberto a vagas júnior e estágio</small></div></article>
        </div>
      </div>
    </motion.section>
  );
}
