import { useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import { DeviceMockup } from "../components/DeviceMockup";
const projects=[
 {name:"CodeFlow",subtitle:"Plataforma para aprender programação",description:"Plataforma de ensino de programação do zero, com aulas curtas divididas em passos e código do aluno rodando de verdade dentro do próprio navegador — sem enviar nada para um servidor. A correção explica o porquê do erro, não só se acertou, e o progresso vem com sequência de dias, XP e conquistas, no espírito do Duolingo. Já são 14 trilhas (JavaScript, TypeScript, React, SQL, Node, Python e mais), com mais de 800 exercícios.",stack:["React","TypeScript","Supabase","Vite"],repo:"https://github.com/EduuGah/CodeFlow",demo:"https://github.com/EduuGah/CodeFlow",desktopImages:["/projetos/codeflow.png"],mobileImages:["/projetos/codeflow-mobile.png"]},
 {name:"DineFlow",subtitle:"Pedidos em tempo real para restaurantes",description:"Sistema de pedidos para restaurantes: o garçom lança o pedido pelo celular, a mesa aparece ocupada na hora, e a cozinha recebe a comanda em tempo real — sem passar papel de mão em mão. Quando o prato fica pronto, a cozinha marca, e o garçom é avisado sozinho, sem precisar ficar checando. Cada restaurante tem os próprios dados isolados no banco, e a regra do projeto é simples: um sistema pode ser básico, mas nunca pode perder um pedido.",stack:["Next.js","TypeScript","Supabase"],repo:"https://github.com/EduuGah/DineFlow",demo:"https://dine-flow-zeta-snowy.vercel.app/",desktopImages:["/projetos/dineflow-1.png","/projetos/dineflow-2.png"],mobileImages:["/projetos/dineflow-3.png"]},
 {name:"CutFlow",subtitle:"Gestão para barbearias",description:"Agenda de barbearia que mostra só os horários que cada profissional realmente tem livre — sem depender de telefonema nem de decorar a grade de ninguém. O cliente escolhe o dia, vê os horários que sobraram considerando a duração de cada serviço, confirma, e a vaga já sai da agenda de todo mundo na hora — sem risco de dois clientes caírem no mesmo horário. O dono acompanha atendimentos, faturamento do dia e dos últimos 7 dias, e a agenda da casa inteira num painel só, com cadastro de profissionais, serviços e horários de funcionamento.",stack:["React","TypeScript","Node.js","PostgreSQL"],repo:"https://github.com/EduuGah/CutFlow",demo:"https://cut-flow-sandy.vercel.app/",desktopImages:["/projetos/cutflow-1.png","/projetos/cutflow-2.png"],mobileImages:["/projetos/cutflow-3.png"]},
 {name:"CoupleFlow",subtitle:"Organização compartilhada para casais",description:"Espaço compartilhado para um casal organizar a vida a dois num só lugar, em vez de espalhado entre grupos de mensagem e anotações soltas: ideias, atividades planejadas e metas em comum, visíveis para os dois ao mesmo tempo.",stack:["React","TypeScript","Firebase"],repo:"https://github.com/EduuGah/CoupleFlow",demo:"https://couple-flow.vercel.app/",desktopImages:["/projetos/coupleflow.png"],mobileImages:["/projetos/coupleflow-mobile.png"]}
];
const LEN=projects.length;
const track=[projects[LEN-1],...projects,projects[0]];
const N=track.length;
const SLIDE=100/N;
function usePerPage(){
  const [perPage,setPerPage]=useState(()=>typeof window!=="undefined"&&window.matchMedia("(max-width: 620px)").matches?1:2);
  useEffect(()=>{
    const mq=window.matchMedia("(max-width: 620px)");
    const handler=(e)=>setPerPage(e.matches?1:2);
    mq.addEventListener("change",handler);
    return ()=>mq.removeEventListener("change",handler);
  },[]);
  return perPage;
}
export function Projects(){
  const perPage=usePerPage();
  const [trackIndex,setTrackIndex]=useState(1);
  const [activeDot,setActiveDot]=useState(0);
  const [animated,setAnimated]=useState(true);

  const go=(dir)=>{
    setAnimated(true);
    setTrackIndex((i)=>i+dir);
    setActiveDot((i)=>(i+dir+LEN)%LEN);
  };

  const goToProject=(i)=>{
    setAnimated(true);
    setTrackIndex(i+1);
    setActiveDot(i);
  };

  const handleTransitionEnd=()=>{
    if(trackIndex===0){setAnimated(false);setTrackIndex(LEN);}
    else if(trackIndex===N-1){setAnimated(false);setTrackIndex(1);}
  };

  return <section id="projetos" className="section projects">
    <div className="section-heading"><p className="kicker">03 / Projetos</p><h2>Projetos em destaque.</h2><p>Alguns dos projetos que desenvolvi para praticar produto, interface e integração.</p></div>
    <div className="projects-carousel">
      <button type="button" className="projects-carousel-arrow projects-carousel-arrow-prev" onClick={()=>go(-1)} aria-label="Projeto anterior"><Icon name="arrow" size={18} className="projects-carousel-arrow-icon-prev"/></button>
      <div className="projects-carousel-viewport">
        <div className={`projects-carousel-track${animated?"":" no-transition"}`} style={{width:`${(N/perPage)*100}%`,transform:`translateX(-${trackIndex*SLIDE}%)`}} onTransitionEnd={handleTransitionEnd}>
          {track.map((p,i)=><div className="carousel-slide" key={`${p.name}-${i}`} style={{flex:`0 0 ${SLIDE}%`}}>
            <article className="project-card project-card-featured">
              <DeviceMockup desktopImages={p.desktopImages} alt={`Tela do projeto ${p.name}`} demo={p.demo}/>
              <div className="project-content">
                <div className="project-title-row"><div><h3>{p.name}</h3><strong className="project-subtitle">{p.subtitle}</strong></div></div>
                <p>{p.description}</p>
                <div className="tags">{p.stack.map(x=><span className="badge" key={x}>{x}</span>)}</div>
                <div className="project-links"><a className="demo-link" href={p.demo} target="_blank" rel="noreferrer"><Icon name="external" size={15}/> Projeto</a><a href={p.repo} target="_blank" rel="noreferrer"><Icon name="github" size={16}/> GitHub</a></div>
              </div>
            </article>
          </div>)}
        </div>
      </div>
      <button type="button" className="projects-carousel-arrow projects-carousel-arrow-next" onClick={()=>go(1)} aria-label="Próximo projeto"><Icon name="arrow" size={18}/></button>
    </div>
    <div className="projects-carousel-dots">{projects.map((p,i)=><button type="button" key={p.name} className={`projects-carousel-dot${i===activeDot?" active":""}`} onClick={()=>goToProject(i)} aria-label={`Ir para ${p.name}`}/>)}</div>
  </section>;
}
