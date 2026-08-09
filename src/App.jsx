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
import AdsLanding from "./components/ads/AdsLanding";
import InmobiliariasLanding from "./components/ads/InmobiliariasLanding";
import FormularioPage from "./components/ads/FormularioPage";
import SuscripcionLanding from "./components/ads/SuscripcionLanding";
import SuscripcionFormularioPage from "./components/ads/SuscripcionFormularioPage";

// Secciones siguientes (se reconstruirán al estilo del brief una por una):
// import Specialties from "./components/Specialties";
// import Portfolio from "./components/Portfolio";
// import Methodology from "./components/Methodology";
// import TechStack from "./components/TechStack";
// import Press from "./components/Press";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function App() {
  const path =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/$/, "")
      : "";
  const isAds = path === "/ads";
  const isInmobiliarias = path === "/inmobiliarias";
  const isFormulario = path === "/formulario";
  const isSuscripcion = path === "/suscripcion";
  const isSuscripcionForm = path === "/suscripcion/formulario";
  const isLanding =
    isAds || isInmobiliarias || isFormulario || isSuscripcion || isSuscripcionForm;

  const lenisRef = useRef(null);

  useEffect(() => {
    if (isLanding) return; // las landings de ads no usan smooth-scroll global
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

  if (isSuscripcionForm) return <SuscripcionFormularioPage />;
  if (isSuscripcion) return <SuscripcionLanding />;
  if (isFormulario) return <FormularioPage />;
  if (isInmobiliarias) return <InmobiliariasLanding />;
  if (isAds) return <AdsLanding />;

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
