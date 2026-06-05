import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "./ui/Reveal";
import { conferences as c } from "../data/content";

export default function Talks() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 0.9]);

  const hasVideo = Boolean(c.video && c.video.id);

  return (
    <section className="talks" id="conferencias" ref={ref}>
      <div className="talks-grid">
        <div>
          <Reveal as="span" className="talks-kicker">
            {c.kicker}
          </Reveal>
          <Reveal as="h2" className="talks-title" delay={0.05}>
            {c.title}
          </Reveal>
          <Reveal as="p" className="talks-sub" delay={0.1}>
            {c.sub}
          </Reveal>
          <Reveal className="talk-topics" delay={0.18}>
            {c.topics.map((t) => (
              <span className="talk-chip" key={t}>
                {t}
              </span>
            ))}
          </Reveal>
        </div>

        <Reveal className="talks-photo">
          <motion.span className="stage-glow" style={{ scale: glowScale }} />
          <motion.div className="frame" style={{ y: playing ? 0 : photoY }}>
            {playing && hasVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${c.video.id}?autoplay=1&rel=0`}
                title="Conferencia de Christian Gutiérrez"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                <img src={c.photo} alt="Christian Gutiérrez dando una conferencia" />
                <button
                  className="play-btn"
                  aria-label="Reproducir video"
                  onClick={() => hasVideo && setPlaying(true)}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                {c.video?.caption && <span className="video-cap">{c.video.caption}</span>}
              </>
            )}
          </motion.div>
        </Reveal>
      </div>

      <Reveal className="talks-cta">
        <h3>{c.ctaText}</h3>
        <a className="btn btn-mint" href={c.cta.href} target="_blank" rel="noreferrer">
          {c.cta.label}
        </a>
      </Reveal>
    </section>
  );
}
