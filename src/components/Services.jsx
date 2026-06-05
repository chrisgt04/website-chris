import Reveal from "./ui/Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services-head">
        <Reveal as="span" className="services-kicker">
          {services.kicker}
        </Reveal>
        <Reveal as="h2" className="services-title" delay={0.05}>
          {services.title}
        </Reveal>
        <Reveal as="p" className="services-sub" delay={0.1}>
          {services.sub}
        </Reveal>
      </div>

      <div className="services-grid">
        {services.items.map((s, i) => (
          <Reveal
            className={`service-card ${s.variant || ""} ${s.featured ? "featured" : ""}`}
            key={s.name}
            delay={i * 0.1}
          >
            <div className="top">
              {s.featured && <span className="badge">Recomendado</span>}
              <span className="micro">{s.tag}</span>
              <h3>{s.name}</h3>
              {s.price && <span className="price">{s.price}</span>}
            </div>
            <div className="bottom">
              <p>{s.desc}</p>
              <div className="chips">
                {s.tags.map((t) => (
                  <span className="chip-sm" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                className="btn-card"
                href={s.cta.href}
                target={s.cta.external ? "_blank" : undefined}
                rel={s.cta.external ? "noreferrer" : undefined}
              >
                {s.cta.label}
                {!s.cta.external && " →"}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
