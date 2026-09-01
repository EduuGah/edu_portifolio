import { motion } from "motion/react";
import { Icon } from "./Icon";

const links = [
  ["inicio", "Início"], ["sobre", "Sobre"], ["skills", "Skills"],
  ["projetos", "Projetos"], ["contato", "Contato"]
];

export function Navigation({ active, onNavClick }) {
  return (
    <header className="nav-shell">
      <nav aria-label="Navegação principal">
        {links.map(([id, label]) => (
          <a 
            key={id} 
            className={active === id ? "active" : ""} 
            href={`#${id}`}
            onClick={(e) => {
              if (onNavClick) onNavClick(id);
            }}
          >
            {label}
            {active === id && (
              <motion.div
                layoutId="activeTab"
                className="active-indicator"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </a>
        ))}
      </nav>
      <a className="nav-contact" href="mailto:edugah1809@gmail.com">Disponível para oportunidades</a>
    </header>
  );
}
