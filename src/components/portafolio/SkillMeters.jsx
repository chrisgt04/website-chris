import { motion } from "motion/react";
import Reveal from "../ui/Reveal";
import { portafolio } from "../../data/content";

const ease = [0.22, 1, 0.36, 1];

/* Medidores de competencia: la barra se llena al entrar en vista. */
export default function SkillMeters() {
  return (
    <section className="pf-section pf-skills shell" id="competencias">
      <Reveal as="span" className="pf-eyebrow">
        Competencias
      </Reveal>
      <Reveal as="h2" className="pf-h2" delay={0.05}>
        En qué soy fuerte
      </Reveal>

      <div className="pf-meters">
        {portafolio.skills.map((s, i) => (
          <Reveal className="pf-meter" key={s.label} delay={0.06 * i} y={20}>
            <div className="pf-meter-top">
              <span className="pf-meter-label">{s.label}</span>
              <span className="pf-meter-pct">{s.level}%</span>
            </div>
            <div className="pf-meter-track">
              <motion.span
                className="pf-meter-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.06, ease }}
              />
            </div>
            <p className="pf-meter-note">{s.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
