import Reveal from "./ui/Reveal";
import { press } from "../data/content";

export default function Press() {
  return (
    <section id="prensa">
      <div className="shell">
        <Reveal as="span" className="section-label">
          {press.label}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          {press.title}
        </Reveal>
        <Reveal as="p" className="section-intro" delay={0.1}>
          {press.intro}
        </Reveal>

        <div className="press-grid">
          <Reveal className="press-photo">
            <img src={press.photo} alt="Christian Gutiérrez" />
          </Reveal>

          <div className="press-cards">
            {press.cards.map((c, i) => (
              <Reveal
                as="a"
                className="press-card"
                key={i}
                delay={0.1 + i * 0.1}
                href={c.href}
                target={c.href !== "#" ? "_blank" : undefined}
                rel="noreferrer"
              >
                <div>
                  <div className="outlet">{c.outlet}</div>
                  <div className="meta">{c.meta}</div>
                </div>
                <span className="arrow">↗</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
