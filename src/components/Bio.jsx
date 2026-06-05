import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { bio } from "../data/content";

const ease = [0.22, 1, 0.36, 1];

/* Cada card entra en 3D, escalonada según el progreso del scroll. */
function TimelineCard({ t, index, progress }) {
  const s = index * 0.05;
  const e = 0.38 + index * 0.05;
  const opacity = useTransform(progress, [s, s + 0.22], [0, 1]);
  const y = useTransform(progress, [s, e], [140, 0]);
  const rotateX = useTransform(progress, [s, e], [44, 0]);
  const rotateY = useTransform(progress, [s, e], [-24, 0]);
  const scale = useTransform(progress, [s, e], [0.78, 1]);

  return (
    <motion.article
      className="tl-card"
      style={{ opacity, y, rotateX, rotateY, scale, transformPerspective: 900 }}
    >
      {t.photo && (
        <img className="tl-img" src={t.photo} alt={t.title} loading="lazy" />
      )}
      <span className="tl-num">{t.n}</span>
      <h3>{t.title}</h3>
      <p>{t.desc}</p>
    </motion.article>
  );
}

/* Titular que se revela palabra por palabra (máscara + flip). */
function WordsReveal({ text, className }) {
  const words = text.split(" ");
  return (
    <h2 className={className} aria-label={text}>
      {words.map((w, i) => (
        <span className="word-mask" key={i} aria-hidden="true">
          <motion.span
            className="word"
            initial={{ y: "115%", rotate: 5 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.1 + i * 0.07, ease }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

export default function Bio() {
  const sectionRef = useRef(null);
  const railRef = useRef(null);

  // Entrada de las cards (de abajo del viewport hasta centrarse)
  const { scrollYProgress: entrance } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });
  // Parallax continuo durante todo el paso de la sección
  const { scrollYProgress: full } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const railX = useTransform(full, [0, 1], [50, -70]);
  const photoY = useTransform(full, [0, 1], [70, -55]);
  const photoScale = useTransform(full, [0, 1], [1.2, 1]);

  const scrollByCard = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(".tl-card");
    const amount = card ? card.offsetWidth + 19 : 320;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bio" id="about" ref={sectionRef}>
      <div className="bio-head">
        <motion.span
          className="bio-kicker"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          {bio.kicker}
        </motion.span>
        <WordsReveal text={bio.title} className="bio-title" />
      </div>

      <div className="bio-grid">
        <motion.div
          className="bio-photo"
          initial={{ clipPath: "inset(12% 10% 16% 10% round 28px)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease }}
        >
          <motion.img
            src={bio.photo}
            alt="Christian Gutiérrez"
            style={{ y: photoY, scale: photoScale }}
          />
          <p
            className="bio-lead"
            dangerouslySetInnerHTML={{
              __html: bio.lead.replace(
                "Christian Gutiérrez",
                "<b>Christian Gutiérrez</b>"
              ),
            }}
          />
        </motion.div>

        <div className="bio-rail-wrap">
          <motion.div className="rail-3d" style={{ x: railX }}>
            <div className="bio-rail" ref={railRef}>
              {bio.timeline.map((t, i) => (
                <TimelineCard key={t.n} t={t} index={i} progress={entrance} />
              ))}
            </div>
          </motion.div>

          <div className="carousel-nav">
            <button
              className="round-btn"
              aria-label="Anterior"
              onClick={() => scrollByCard(-1)}
            >
              ←
            </button>
            <button
              className="round-btn"
              aria-label="Siguiente"
              onClick={() => scrollByCard(1)}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
