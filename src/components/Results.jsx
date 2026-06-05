import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import { stats } from "../data/content";

export default function Results() {
  const hero = stats[0];
  const mini = stats.slice(1);

  return (
    <section className="results" id="resultados">
      <div className="results-head">
        <Reveal as="span" className="results-kicker">
          Resultados
        </Reveal>
        <Reveal as="h2" className="results-title" delay={0.05}>
          Números, no promesas.
        </Reveal>
        <Reveal as="p" className="results-sub" delay={0.1}>
          Cada cifra viene de una cuenta real, con tracking y atribución verificados.
          Si no se puede medir, no se cuenta aquí.
        </Reveal>
      </div>

      <div className="results-grid">
        <Reveal className="stat-hero">
          <span className="source">Cirque du Soleil · Joya</span>
          <span className="num">
            <Counter value={hero.value} prefix={hero.prefix || ""} suffix={hero.suffix || ""} />
          </span>
          <span className="label" dangerouslySetInnerHTML={{ __html: hero.label }} />
        </Reveal>

        <div className="stat-mini-grid">
          {mini.map((s, i) => (
            <Reveal className="stat-mini" key={i} delay={0.1 + i * 0.08}>
              <span className="num">
                <Counter value={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
              </span>
              <span className="label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
