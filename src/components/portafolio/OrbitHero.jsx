import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { portafolio } from "../../data/content";

const ease = [0.22, 1, 0.36, 1];

/* Un anillo de chips que orbita. La posición gira con el anillo (CSS),
   mientras cada chip se contra-rota para mantener el texto horizontal. */
function Ring({ items, variant }) {
  return (
    <div className={`pf-ring pf-ring-${variant}`}>
      {items.map((tool, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div
            className="pf-node"
            key={tool.label}
            style={{ transform: `rotate(${angle}deg) translateX(var(--pf-r))` }}
          >
            <div className="pf-chip-rot">
              <div className="pf-chip" style={{ transform: `rotate(${-angle}deg)` }}>
                <span className="pf-chip-ic" aria-hidden="true">{tool.ic}</span>
                <span>{tool.label}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function OrbitHero() {
  const { name, role, org, tagline, availability, location, orbit, links } =
    portafolio;

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // Parallax al hacer scroll: el sistema orbital sube, se encoge y se desvanece.
  const orbitY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbitScale = useTransform(scrollYProgress, [0, 1], [1, 0.82]);
  const orbitOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <header className="pf-hero" ref={heroRef}>
      <motion.div
        className="pf-orbit"
        style={{ y: orbitY, scale: orbitScale, opacity: orbitOpacity, rotate: orbitRotate }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease }}
      >
        <div className="pf-orbit-glow" aria-hidden="true" />
        <Ring items={orbit.outer} variant="2" />
        <Ring items={orbit.inner} variant="1" />
        <div className="pf-core">
          <span className="pf-core-mono">&lt;/&gt;</span>
        </div>
      </motion.div>

      <motion.div
        className="pf-hero-copy shell"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="pf-badge" variants={item}>
          <span className="pf-dot" /> {availability}
        </motion.span>
        <motion.h1 className="pf-name" variants={item}>
          {name}
        </motion.h1>
        <motion.p className="pf-role" variants={item}>
          <span className="accent">{role}</span> @ {org}
          <span className="pf-role-sep">·</span>
          <span className="pf-role-muted">Data · Agentes de IA · Software · Infra</span>
        </motion.p>
        <motion.p className="pf-tagline" variants={item}>
          {tagline}
        </motion.p>
        <motion.div className="pf-hero-meta" variants={item}>
          <span>📍 {location}</span>
        </motion.div>
        <motion.div className="pf-hero-cta" variants={item}>
          <a
            className="btn btn-mint"
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conectar en LinkedIn
          </a>
          <a className="btn btn-outline" href={`mailto:${links.email}`}>
            {links.email}
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
}
