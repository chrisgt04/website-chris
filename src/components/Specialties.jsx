import Reveal from "./ui/Reveal";
import { specialties } from "../data/content";

export default function Specialties() {
  return (
    <section id="especialidades">
      <div className="shell">
        <Reveal as="span" className="section-label">
          {specialties.label}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          {specialties.title}
        </Reveal>
        <Reveal as="p" className="section-intro" delay={0.1}>
          {specialties.intro}
        </Reveal>

        <div className="spec-grid">
          {specialties.cards.map((c, i) => (
            <Reveal className="spec-card" key={c.title} delay={i * 0.1}>
              <div className="spec-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="tag-row">
                {c.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
