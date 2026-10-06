import Reveal from "../ui/Reveal";
import { portafolio } from "../../data/content";

/* Stack técnico completo, agrupado por disciplina. */
export default function StackGrid() {
  return (
    <section className="pf-section pf-stack shell" id="stack">
      <Reveal as="span" className="pf-eyebrow">
        Stack técnico
      </Reveal>
      <Reveal as="h2" className="pf-h2" delay={0.05}>
        Con qué construyo a diario
      </Reveal>

      <div className="pf-stack-grid">
        {portafolio.stackGroups.map((col, ci) => (
          <Reveal className="pf-stack-col" key={col.title} delay={0.06 * ci} y={22}>
            <h3 className="pf-stack-title">{col.title}</h3>
            <ul className="pf-stack-list">
              {col.items.map((it) => (
                <li className="pf-stack-item" key={it.nm}>
                  <span className="pf-stack-ic" aria-hidden="true">{it.ic}</span>
                  <span className="pf-stack-txt">
                    <span className="pf-stack-nm">{it.nm}</span>
                    <span className="pf-stack-sub">{it.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
