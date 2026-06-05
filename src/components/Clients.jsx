import { useRef } from "react";
import Reveal from "./ui/Reveal";
import { portfolio } from "../data/content";

const all = [...portfolio.featured, ...portfolio.more];

export default function Clients() {
  const railRef = useRef(null);

  const scrollByCard = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(".client-card");
    const amount = card ? card.offsetWidth + 22 : 340;
    rail.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="clients" id="clientes">
      <div className="clients-head">
        <Reveal as="span" className="clients-kicker">
          Clientes
        </Reveal>
        <Reveal as="h2" className="clients-title" delay={0.05}>
          Marcas que ya confiaron en este sistema.
        </Reveal>
        <Reveal as="p" className="clients-sub" delay={0.1}>
          De entretenimiento premium a PropTech, fintech y gastronomía — cada
          uno con métricas concretas. Estos son los que dieron pruebas.
        </Reveal>
      </div>

      <div className="clients-rail-wrap">
        <div className="clients-rail" ref={railRef}>
          {all.map((c, i) => (
            <Reveal className="client-card" key={c.name} delay={(i % 3) * 0.07}>
              <div className="client-head">
                <span className="client-init">{c.initials}</span>
                {c.pill && <span className="client-pill">{c.pill}</span>}
              </div>
              <div>
                <h3 className="client-name">{c.name}</h3>
                <div className="client-cat">{c.cat}</div>
              </div>
              <p className="client-desc">{c.desc}</p>
              {c.metrics && c.metrics.length > 0 && (
                <div className="client-metrics">
                  {c.metrics.slice(0, 3).map((m) => (
                    <div className="m" key={m.lab}>
                      <div className="v">{m.val}</div>
                      <div className="l">{m.lab}</div>
                    </div>
                  ))}
                </div>
              )}
              {c.tags && c.tags.length > 0 && (
                <div className="client-tags">
                  {c.tags.slice(0, 4).map((t) => (
                    <span className="t" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <div className="clients-nav">
        <button className="round-btn" aria-label="Anterior" onClick={() => scrollByCard(-1)}>
          ←
        </button>
        <button className="round-btn" aria-label="Siguiente" onClick={() => scrollByCard(1)}>
          →
        </button>
      </div>
    </section>
  );
}
