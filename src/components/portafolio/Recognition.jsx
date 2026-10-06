import Reveal from "../ui/Reveal";
import { press, conferences, portafolio } from "../../data/content";

/* Reconocimiento: prensa + conferencias + educación. */
export default function Recognition() {
  const { education } = portafolio;

  return (
    <section className="pf-section pf-reco shell" id="reconocimiento">
      <Reveal as="span" className="pf-eyebrow">
        Reconocimiento & formación
      </Reveal>
      <Reveal as="h2" className="pf-h2" delay={0.05}>
        Prensa, escenario y academia
      </Reveal>

      <div className="pf-reco-grid">
        {/* Prensa */}
        <Reveal className="pf-reco-card" y={22}>
          <span className="pf-reco-k">Prensa</span>
          <p className="pf-reco-intro">{press.intro}</p>
          <ul className="pf-reco-list">
            {press.cards.map((c, i) => (
              <li key={i}>
                <span className="pf-reco-outlet">{c.outlet}</span>
                <span className="pf-reco-meta">{c.meta}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Conferencias */}
        <Reveal className="pf-reco-card" y={22} delay={0.06}>
          <span className="pf-reco-k">Conferencias</span>
          <p className="pf-reco-intro">{conferences.sub}</p>
          <div className="pf-reco-topics">
            {conferences.topics.map((t) => (
              <span className="pf-tag" key={t}>{t}</span>
            ))}
          </div>
        </Reveal>

        {/* Educación */}
        <Reveal className="pf-reco-card" y={22} delay={0.12}>
          <span className="pf-reco-k">Educación</span>
          <h3 className="pf-edu-degree">{education.degree}</h3>
          <span className="pf-edu-school">{education.school}</span>
          <span className="pf-edu-focus">{education.focus}</span>
        </Reveal>
      </div>
    </section>
  );
}
