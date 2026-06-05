import Reveal from "./ui/Reveal";
import { methodology } from "../data/content";

export default function Methodology() {
  return (
    <section id="metodologia">
      <div className="shell">
        <Reveal as="span" className="section-label">
          {methodology.label}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          {methodology.title}
        </Reveal>
        <Reveal as="p" className="section-intro" delay={0.1}>
          {methodology.intro}
        </Reveal>

        <div className="steps">
          {methodology.steps.map((s, i) => (
            <Reveal className="step" key={s.num} delay={i * 0.06}>
              <div className="step-num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
