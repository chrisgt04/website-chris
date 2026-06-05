import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import { stats } from "../data/content";

export default function StatBand() {
  return (
    <section className="statband" aria-label="Métricas clave">
      <div className="shell stat-grid">
        {stats.map((s, i) => (
          <Reveal className="stat" key={i} delay={i * 0.08}>
            <div className="stat-num">
              <Counter value={s.value} prefix={s.prefix || ""} suffix={s.suffix || ""} />
            </div>
            <div className="stat-label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
