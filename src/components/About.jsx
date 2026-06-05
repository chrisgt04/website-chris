import { motion } from "motion/react";
import Reveal from "./ui/Reveal";
import { about } from "../data/content";

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about">
      <div className="shell about-grid">
        <Reveal className="about-photo">
          <img src={about.photo} alt="Christian Gutiérrez en conferencia" />
        </Reveal>

        <div className="about-body">
          <Reveal as="span" className="section-label">
            ¿Quién soy?
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.1, ease }}
              style={{ marginTop: i === 0 ? "1rem" : "1.2rem" }}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}

          <Reveal className="chips" delay={0.25}>
            {about.chips.map((c, i) => (
              <span className="chip" key={i}>
                {c}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
