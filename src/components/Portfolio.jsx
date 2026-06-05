import Reveal from "./ui/Reveal";
import { portfolio } from "../data/content";

export default function Portfolio() {
  return (
    <section id="resultados">
      <div className="shell">
        <div className="work-head">
          <div>
            <Reveal as="span" className="section-label">
              {portfolio.label}
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.05}>
              {portfolio.title}
            </Reveal>
          </div>
          <Reveal as="p" className="section-intro" delay={0.1} style={{ marginTop: 0 }}>
            {portfolio.intro}
          </Reveal>
        </div>

        {/* Casos destacados */}
        <div className="featured">
          {portfolio.featured.map((c, i) => (
            <Reveal className="case" key={c.name} delay={(i % 2) * 0.08}>
              <span className="case-glow" />
              <div className="case-top">
                <span className="case-cat">{c.cat}</span>
                <span className="case-pill">{c.pill}</span>
              </div>
              <h3>{c.name}</h3>
              <p className="case-desc">{c.desc}</p>
              <div className="metric-row">
                {c.metrics.map((m) => (
                  <div className="metric" key={m.lab}>
                    <div className="metric-val">{m.val}</div>
                    <div className="metric-lab">{m.lab}</div>
                  </div>
                ))}
              </div>
              <div className="tag-row" style={{ marginTop: "1.4rem" }}>
                {c.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Más clientes */}
        <div className="work-grid">
          {portfolio.more.map((c, i) => (
            <Reveal className="mini" key={c.name} delay={(i % 3) * 0.07}>
              <h4>{c.name}</h4>
              <span className="case-cat">{c.cat}</span>
              <p>{c.desc}</p>
              <div className="mini-metrics">
                {c.metrics.map((m) => (
                  <div className="metric" key={m.lab}>
                    <div className="metric-val">{m.val}</div>
                    <div className="metric-lab">{m.lab}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
