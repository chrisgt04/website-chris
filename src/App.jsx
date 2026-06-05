import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Talks from "./components/Talks";
import Services from "./components/Services";
import Results from "./components/Results";
import Clients from "./components/Clients";
import Tech from "./components/Tech";

// Secciones siguientes (se reconstruirán al estilo del brief una por una):
// import Specialties from "./components/Specialties";
// import Portfolio from "./components/Portfolio";
// import Methodology from "./components/Methodology";
// import TechStack from "./components/TechStack";
// import Press from "./components/Press";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.09, // suavidad / inercia tipo Apple
      smoothWheel: true,
      wheelMultiplier: 1,
    });
    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smooth scroll en anclas internas (#seccion)
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -20 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="vignette" />
      <div className="grain" />

      <Nav />
      <main>
        <Hero />
        <Bio />
        <Services />
        <Clients />
        <Results />
        <Talks />
      </main>
    </>
  );
}
