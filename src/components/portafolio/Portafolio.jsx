import { portafolio } from "../../data/content";
import OrbitHero from "./OrbitHero";
import SkillMeters from "./SkillMeters";
import StackGrid from "./StackGrid";
import CaseCards from "./CaseCards";
import Recognition from "./Recognition";
import Combine from "./Combine";

/* Página /portafolio — CV visual estilo Tech Lead.
   Se renderiza dentro del árbol principal de App (hereda Lenis + grain/vignette). */
export default function Portafolio() {
  const { links } = portafolio;

  return (
    <div className="pf">
      {/* Header mínimo propio (no el Nav global, para evitar anclas rotas al home) */}
      <header className="pf-topbar">
        <div className="pf-topbar-inner shell">
          <a className="pf-brand" href="/">christiangtzb</a>
          <nav className="pf-topnav">
            <a href="/">Inicio</a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-topnav-cta"
            >
              LinkedIn ↗
            </a>
          </nav>
        </div>
      </header>

      <OrbitHero />
      <SkillMeters />
      <StackGrid />
      <CaseCards />
      <Recognition />
      <Combine />
    </div>
  );
}
