import Reveal from "./ui/Reveal";
import { stack } from "../data/content";

export default function Tech() {
  return (
    <section className="tech" id="stack">
      <div className="tech-head">
        <Reveal as="span" className="tech-kicker">
          {stack.label}
        </Reveal>
        <Reveal as="h2" className="tech-title" delay={0.05}>
          {stack.title}
        </Reveal>
        <Reveal as="p" className="tech-sub" delay={0.1}>
          Tres categorías trabajando como una sola. La pila exacta con la que construyo
          tracking confiable, campañas medibles y flujos que escalan.
        </Reveal>
      </div>

      <div className="tech-grid">
        {stack.columns.map((col, i) => (
          <Reveal className="tech-col" key={col.title} delay={i * 0.1}>
            <h3>{col.title}</h3>
            {col.items.map((it) => (
              <div className="tech-item" key={it.nm}>
                <span className="ic" aria-hidden="true">
                  {it.ic}
                </span>
                <span className="nm">{it.nm}</span>
                <span className="sub">{it.sub}</span>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
