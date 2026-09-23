import { useState } from "react";
import { motion } from "motion/react";
import { Icon } from "../components/Icon";
import { DeviceMockup } from "../components/DeviceMockup";
const projects=[
 {name:"CodeFlow",subtitle:"Plataforma para aprender programação",description:"Ensino de programação do zero com aulas curtas, código rodando no próprio navegador e correção que explica o porquê do erro — inspirado no modelo do Duolingo.",stack:["React","TypeScript","Supabase","Vite"],repo:"https://github.com/EduuGah/CodeFlow",demo:"https://github.com/EduuGah/CodeFlow",desktopImage:"/projetos/codeflow.png",mobileImage:"/projetos/codeflow-mobile.png"},
 {name:"DineFlow",subtitle:"Pedidos em tempo real para restaurantes",description:"Fluxo de pedidos entre atendimento e cozinha, com dados isolados por restaurante.",stack:["Next.js","TypeScript","Supabase"],repo:"https://github.com/EduuGah/DineFlow",demo:"https://dine-flow-zeta-snowy.vercel.app/",desktopImage:"/projetos/dineflow-1.png",mobileImage:"/projetos/dineflow-3.png"},
 {name:"CutFlow",subtitle:"Gestão para barbearias",description:"Agenda, profissionais, serviços e horários reunidos em uma aplicação de gestão.",stack:["React","TypeScript","Node.js","PostgreSQL"],repo:"https://github.com/EduuGah/CutFlow",demo:"https://cut-flow-sandy.vercel.app/",desktopImage:"/projetos/cutflow-1.png",mobileImage:"/projetos/cutflow-3.png"},
 {name:"CoupleFlow",subtitle:"Organização compartilhada para casais",description:"Espaço para organizar ideias, atividades e planos compartilhados em um só lugar.",stack:["React","TypeScript","Firebase"],repo:"https://github.com/EduuGah/CoupleFlow",demo:"https://couple-flow.vercel.app/",desktopImage:"/projetos/coupleflow.png",mobileImage:"/projetos/coupleflow-mobile.png"}
];
export function Projects(){
  const [index,setIndex]=useState(0);
  const p=projects[index];
  const go=(dir)=>setIndex((i)=>(i+dir+projects.length)%projects.length);
  return <section id="projetos" className="section projects">
    <div className="section-heading"><p className="kicker">03 / Projetos</p><h2>Projetos em destaque.</h2><p>Alguns dos projetos que desenvolvi para praticar produto, interface e integração.</p></div>
    <div className="projects-carousel">
      <button type="button" className="projects-carousel-arrow projects-carousel-arrow-prev" onClick={()=>go(-1)} aria-label="Projeto anterior"><Icon name="arrow" size={18} className="projects-carousel-arrow-icon-prev"/></button>
      <motion.article className="project-card project-card-featured" key={p.name} initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.35}}>
        <DeviceMockup desktopImage={p.desktopImage} mobileImage={p.mobileImage} alt={`Tela do projeto ${p.name}`} demo={p.demo}/>
        <div className="project-content">
          <div className="project-title-row"><div><h3>{p.name}</h3><strong className="project-subtitle">{p.subtitle}</strong></div></div>
          <p>{p.description}</p>
          <div className="tags">{p.stack.map(x=><span className="badge" key={x}>{x}</span>)}</div>
          <div className="project-links"><a className="demo-link" href={p.demo} target="_blank" rel="noreferrer"><Icon name="external" size={15}/> Projeto</a><a href={p.repo} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> GitHub</a></div>
        </div>
      </motion.article>
      <button type="button" className="projects-carousel-arrow projects-carousel-arrow-next" onClick={()=>go(1)} aria-label="Próximo projeto"><Icon name="arrow" size={18}/></button>
    </div>
    <div className="projects-carousel-dots">{projects.map((proj,i)=><button type="button" key={proj.name} className={`projects-carousel-dot${i===index?" active":""}`} onClick={()=>setIndex(i)} aria-label={`Ir para ${proj.name}`}/>)}</div>
  </section>;
}
