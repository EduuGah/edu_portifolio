import { motion } from "motion/react";
import { Icon } from "../components/Icon";

const contacts = [
  { label: "E-mail", value: "edugah1809@gmail.com", href: "mailto:edugah1809@gmail.com", icon: "mail" },
  { label: "LinkedIn", value: "/carlos-eduardo-863015377", href: "https://www.linkedin.com/in/carlos-eduardo-863015377/", icon: "linkedin" },
  { label: "GitHub", value: "/EduuGah", href: "https://github.com/EduuGah", icon: "github" },
  { label: "Instagram", value: "@eduugah", href: "https://www.instagram.com/eduugah/", icon: "instagram" }
];

export function Contact() {
  return (
    <section id="contato" className="section contact">
      <motion.div 
        className="contact-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Se você está procurando<br/>um dev front-end em início de carreira</h2>
        <p>Nos meus canais você encontra meu código, projetos pessoais e formas de entrar em contato comigo.</p>
      </motion.div>
      <div className="contact-grid">
        {contacts.map((item, i) => (
          <motion.a 
            className="contact-card" 
            href={item.href} 
            target={item.href.startsWith("http") ? "_blank" : undefined} 
            rel={item.href.startsWith("http") ? "noreferrer" : undefined} 
            key={item.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="contact-icon"><Icon name={item.icon} size={19}/></span>
            <div><strong>{item.label}</strong><small>{item.value}</small></div>
            <Icon name="arrow" size={16}/>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
