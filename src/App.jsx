import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const sections = ["inicio", "sobre", "skills", "projetos", "contato"];
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      }),
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation active={active} />
      <main>
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