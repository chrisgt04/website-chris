import Reveal from "./ui/Reveal";
import { stack } from "../data/content";

export default function TechStack() {
  return (
    <section id="stack">
      <div className="shell">
        <Reveal as="span" className="section-label">
          {stack.label}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          {stack.title}
        </Reveal>

        <div className="stack-grid">
          {stack.columns.map((col, i) => (
            <Reveal className="stack-col" key={col.title} delay={i * 0.1}>
              <h3>{col.title}</h3>
              {col.items.map((it) => (
                <div className="stack-item" key={it.nm}>
                  <span className="ic">{it.ic}</span>
                  <span className="nm">{it.nm}</span>
                  <span className="sub">{it.sub}</span>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
