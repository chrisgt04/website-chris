import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import { portafolio } from "../../data/content";

/* Banda de métricas técnicas con count-up. */
function MetricBand() {
  return (
    <div className="pf-metricband">
      {portafolio.metrics.map((m) => (
        <Reveal className="pf-metric" key={m.label} y={18}>
          <span className="pf-metric-val">
            <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
          </span>
          <span className="pf-metric-lab">{m.label}</span>
        </Reveal>
      ))}
    </div>
  );
}

/* Lo que construyo — capacidades técnicas. */
export default function CaseCards() {
  return (
    <section className="pf-section pf-cases shell" id="construyo">
      <Reveal as="span" className="pf-eyebrow">
        Lo que construyo
      </Reveal>
      <Reveal as="h2" className="pf-h2" delay={0.05}>
        De la query al deploy
      </Reveal>

      <MetricBand />

      <div className="pf-case-grid">
        {portafolio.build.map((c, i) => (
          <Reveal
            className={`pf-case${c.featured ? " is-featured" : ""}`}
            key={c.title}
            delay={0.05 * i}
            y={24}
          >
            <span className="pf-build-ic" aria-hidden="true">{c.ic}</span>
            <h3 className="pf-case-name">{c.title}</h3>
            <p className="pf-case-desc">{c.desc}</p>
            <div className="pf-case-tags">
              {c.tags.map((t) => (
                <span className="pf-tag" key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
