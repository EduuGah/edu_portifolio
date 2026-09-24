import { motion } from "motion/react";
import { GraduationCap, Code2, BriefcaseBusiness } from "lucide-react";

const facts = [
  [GraduationCap, "Formação", "Análise e Desenvolvimento de Sistemas", "UNIP · 4º semestre"],
  [Code2, "Foco", "Desenvolvimento front-end", "React · TypeScript · JavaScript"],
  [BriefcaseBusiness, "Objetivo", "Primeira oportunidade em desenvolvimento", "Estágio ou vaga júnior"],
];

export function About() {
  return (
    <motion.section id="sobre" className="section about" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.5 }}>
      <div className="section-heading">
        <p className="kicker">Sobre</p>
        <h2>Um pouco sobre mim.</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">Sou Carlos Eduardo, estudante de ADS na UNIP e desenvolvedor front-end em busca da minha primeira oportunidade profissional na área.</p>
          <p>Programação virou a forma que encontrei de transformar ideias em projetos que funcionam de verdade. Ao longo dos estudos passei por front-end, banco de dados e back-end, criando aplicações próprias para colocar cada conceito em prática.</p>
          <p>Hoje meu foco principal é React e TypeScript. Também venho ampliando meus conhecimentos em APIs, Node.js e bancos de dados para participar de cada vez mais partes de um produto.</p>
        </div>
        <dl className="facts">
          {facts.map(([FactIcon, label, value, detail]) => (
            <div key={label}>
              <dt><FactIcon size={17} aria-hidden="true" /> {label}</dt>
              <dd><strong>{value}</strong><span>{detail}</span></dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.section>
  );
}
