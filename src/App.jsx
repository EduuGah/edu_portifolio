import { useEffect, useState, useRef } from "react";
import { Navigation, sections } from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("inicio");
  const isClicking = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting && !isClicking.current) {
          setActive(entry.target.id);
        }
      }),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    isClicking.current = true;
    setActive(id);
    // Pausa o observer até a rolagem suave terminar
    setTimeout(() => {
      isClicking.current = false;
    }, 1000);
  };

  return (
    <>
      <Navigation active={active} onNavClick={handleNavClick} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
