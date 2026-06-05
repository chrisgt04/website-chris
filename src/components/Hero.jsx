import { motion } from "motion/react";
import { hero } from "../data/content";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

function Segments({ parts }) {
  return parts.map((p, i) => (
    <span key={i} className={p.accent ? "accent" : undefined}>
      {p.t}
    </span>
  ));
}

export default function Hero() {
  const dockRow = [...hero.clients, ...hero.clients];

  return (
    <section className="hero" id="top">
      <div className="shell hero-grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span className="hero-kicker" variants={item}>
            <span className="dot" />
            {hero.kicker}
          </motion.span>

          <motion.h1 variants={item}>
            <Segments parts={hero.title} />
          </motion.h1>

          <motion.p className="hero-sub" variants={item}>
            <Segments parts={hero.sub} />
          </motion.p>

          <motion.div className="hero-cta" variants={item}>
            <a
              className="btn btn-mint"
              href={hero.primary.href}
              {...(hero.primary.href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {hero.primary.label}
            </a>
            <a className="btn btn-outline" href={hero.secondary.href}>
              {hero.secondary.label}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
        >
          <span className="spotlight" />
          <span className="watermark" aria-hidden="true">
            {hero.watermark}
          </span>
          <img className="portrait-img" src={hero.portrait} alt="Christian Gutiérrez" />
        </motion.div>
      </div>

      {/* Dock flotante — el elemento más memorable del hero */}
      <motion.div
        className="hero-dock"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.6 }}
      >
        <span className="dock-label">{hero.dockLabel}</span>
        <div className="dock-marquee">
          <div className="dock-track">
            {dockRow.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
