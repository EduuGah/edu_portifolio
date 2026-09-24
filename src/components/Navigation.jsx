import { motion } from "motion/react";

export const sections = [
  ["inicio", "Início"],
  ["projetos", "Projetos"],
  ["sobre", "Sobre"],
  ["skills", "Skills"],
  ["contato", "Contato"],
];

export function Navigation({ active, onNavClick }) {
  return (
    <header className="nav-shell">
      <div className="nav-inner">
        <a className="nav-brand" href="#inicio" onClick={() => onNavClick("inicio")}>
          Carlos Eduardo
        </a>
        <nav aria-label="Navegação principal">
          {sections.map(([id, label]) => (
            <a key={id} className={active === id ? "active" : ""} aria-current={active === id ? "true" : undefined} href={`#${id}`} onClick={() => onNavClick(id)}>
              {label}
              {active === id && (
                <motion.span layoutId="activeTab" className="active-indicator" transition={{ type: "spring", stiffness: 350, damping: 30 }} />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
