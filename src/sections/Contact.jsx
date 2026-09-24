import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "../components/Icon";

const links = [
  ["github", "GitHub", "github.com/EduuGah", "https://github.com/EduuGah"],
  ["linkedin", "LinkedIn", "in/carlos-eduardo", "https://www.linkedin.com/in/carlos-eduardo-863015377/"],
  ["instagram", "Instagram", "@eduugah", "https://www.instagram.com/eduugah/"],
];

export function Contact() {
  return (
    <section id="contato" className="section contact">
      <motion.div className="contact-panel" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="contact-intro">
          <p className="kicker">Contato</p>
          <h2>Vamos conversar?</h2>
          <p>Estou disponível para estágio e vagas júnior em desenvolvimento. Respondo por e-mail ou pelo LinkedIn.</p>
          <a className="contact-mail" href="mailto:edugah1809@gmail.com">
            <Icon name="mail" size={20} /> edugah1809@gmail.com
          </a>
        </div>
        <ul className="contact-links">
          {links.map(([icon, label, handle, href]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">
                <span className="contact-link-name"><Icon name={icon} size={18} /> {label}</span>
                <span className="contact-link-handle">{handle} <ArrowUpRight size={16} aria-hidden="true" /></span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
