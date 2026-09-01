import { useEffect, useState, useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { ParticlesBackground } from "./components/ParticlesBackground";

export default function App() {
  const [active, setActive] = useState("inicio");
  const isClicking = useRef(false);

  useEffect(() => {
    const sections = ["inicio", "sobre", "skills", "projetos", "contato"];
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting && !isClicking.current) {
          setActive(entry.target.id);
        }
      }),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    isClicking.current = true;
    setActive(id);
    // Pause the scroll observer until the smooth scroll completes
    setTimeout(() => {
      isClicking.current = false;
    }, 1000);
  };

  return (
    <>
      <ParticlesBackground />
      <Navigation active={active} onNavClick={handleNavClick} />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
