export function About() {
  return (
    <section id="sobre" className="section about">
      <div className="section-heading">
        <span className="section-index">01</span>
        <h2>Sobre mim</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">
            Estou no 4º semestre de Análise e Desenvolvimento de Sistemas
            na UNIP e encontrei no front-end a área em que quero crescer.
          </p>
          <p>
            Antes disso, explorei back-end e bancos de dados em projetos
            pessoais. Essa experiência me ajuda a pensar além da tela:
            entendo de onde os dados vêm e como a interface depende deles.
          </p>
          <p>
            Agora meu foco é transformar essa base em interfaces melhores,
            praticando arquitetura de componentes, APIs e performance.
          </p>
        </div>

        <div className="profile-code" aria-label="Dados profissionais">
          <div className="terminal-bar"><span></span><span></span><span></span><small>perfil.txt</small></div>
          <pre>{`$ cat perfil.txt

nome        Carlos Eduardo da Silva de Oliveira
formação    ADS — 4º semestre, UNIP
foco        Front-end Development
stack       React, Next.js, TypeScript, Vite
também      Python, Firebase, MySQL, PostgreSQL
estudando   APIs, componentes, performance

$ _`}</pre>
        </div>
      </div>
    </section>
  );
}