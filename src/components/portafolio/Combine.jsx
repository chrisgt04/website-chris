import Reveal from "../ui/Reveal";
import { portafolio } from "../../data/content";

/* Cierre: ingeniería + producto + inteligencia comercial. La experiencia
   en marketing/ventas entra aquí como el tercer pilar (T-shaped). */
export default function Combine() {
  const { combine, links, name, role, org } = portafolio;

  return (
    <section className="pf-section pf-combine shell" id="diferenciador">
      <Reveal as="span" className="pf-eyebrow">
        {combine.eyebrow}
      </Reveal>
      <Reveal as="h2" className="pf-h2" delay={0.05}>
        {combine.title}
      </Reveal>
      <Reveal as="p" className="pf-lead" delay={0.1}>
        {combine.intro}
      </Reveal>

      <div className="pf-combine-grid">
        {combine.pillars.map((p, i) => (
          <Reveal
            className={`pf-case${i === 0 ? " is-featured" : ""}`}
            key={p.title}
            delay={0.06 * i}
            y={24}
          >
            <span className="pf-build-ic" aria-hidden="true">{p.ic}</span>
            <h3 className="pf-case-name">{p.title}</h3>
            <p className="pf-case-desc">{p.desc}</p>
            <div className="pf-case-tags">
              {p.tags.map((t) => (
                <span className="pf-tag" key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Franja de liderazgo */}
      <Reveal className="pf-leadband" y={24} delay={0.08}>
        <span className="pf-leadband-ic" aria-hidden="true">{combine.lead.ic}</span>
        <div className="pf-leadband-body">
          <h3 className="pf-leadband-title">{combine.lead.title}</h3>
          <p className="pf-leadband-desc">{combine.lead.desc}</p>
          <div className="pf-case-tags">
            {combine.lead.tags.map((t) => (
              <span className="pf-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="pf-proof" y={18} delay={0.1}>
        <span className="pf-proof-k">Trayectoria que lo respalda</span>
        <div className="pf-proof-list">
          {combine.proof.map((p) => (
            <span className="pf-proof-item" key={p}>
              <span className="pf-proof-check" aria-hidden="true">✦</span> {p}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal as="p" className="pf-closing" y={20}>
        {combine.closing}
      </Reveal>

      {/* CTA final */}
      <Reveal className="pf-cta" y={28}>
        <h2 className="pf-cta-title">Trabajemos juntos.</h2>
        <p className="pf-cta-sub">
          {name} — {role} @ {org}. Respondo en menos de 24 horas.
        </p>
        <div className="pf-cta-btns">
          <a
            className="btn btn-mint"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-outline" href={`mailto:${links.email}`}>
            Email
          </a>
          <a
            className="btn btn-outline"
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
