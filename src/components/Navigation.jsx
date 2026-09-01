import { Icon } from "./Icon";

const links = [
  ["inicio", "Início"], ["sobre", "Sobre"], ["skills", "Skills"],
  ["projetos", "Projetos"], ["contato", "Contato"]
];

export function Navigation({ active }) {
  return (
    <header className="nav-shell">
      <a href="#inicio" className="brand" aria-label="Carlos Eduardo, início">
        <span className="brand-mark">ce</span>
        <span>Carlos Eduardo</span>
      </a>
      <nav aria-label="Navegação principal">
        {links.map(([id, label]) => (
          <a key={id} className={active === id ? "active" : ""} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-contact" href="mailto:edugah1809@gmail.com">Disponível para oportunidades</a>
    </header>
  );
}