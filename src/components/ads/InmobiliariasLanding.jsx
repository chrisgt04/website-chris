import { motion } from "motion/react";
import {
  inmoLanding,
  inmoEnemy,
  inmoStats,
  inmoCostViz,
  inmoTrust,
  inmoPress,
  inmoModel,
  inmoWhy,
  inmoSteps,
  inmoFit,
  inmoFaq,
  inmoWhoami,
  inmoCta,
} from "../../data/ads-inmobiliarias";

const ease = [0.22, 1, 0.36, 1];

function Segments({ parts }) {
  return parts.map((p, i) => (
    <span key={i} className={p.accent ? "accent" : undefined}>
      {p.t}
    </span>
  ));
}

// Visual "solo pagas cuando vendes" — comparación mes a mes.
function CostViz({ data }) {
  return (
    <div className="ads-cost">
      <div className="ads-cost-months">
        <span />
        {data.months.map((m) => (
          <span className="ads-cost-month" key={m}>
            {m}
          </span>
        ))}
      </div>
      {data.rows.map((row) => (
        <div className={`ads-cost-row ${row.neo ? "is-neo" : ""}`} key={row.label}>
          <div className="ads-cost-legend">
            <span className="ads-cost-name">{row.label}</span>
            <span className="ads-cost-sub">{row.sublabel}</span>
          </div>
          {row.cells.map((c, i) => (
            <span
              key={i}
              className={`ads-cost-cell ${c.on ? "is-on" : "is-off"} ${
                row.neo ? "neo" : ""
              }`}
            >
              {c.tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function InmobiliariasLanding() {
  return (
    <>
      <div className="vignette" />
      <div className="grain" />

      <header className="ads-nav">
        <div className="shell ads-nav-inner">
          <a className="ads-brand" href="/">
            christiangtzb
          </a>
          <a className="btn btn-mint ads-nav-cta" href="/formulario">
            Aplicar
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="ads-hero ads-hero-split">
          <div className="shell">
            <div className="ads-hero-top">
              <div className="ads-hero-copy">
            <motion.span
              className="hero-kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="dot" />
              {inmoLanding.kicker}
            </motion.span>

            <motion.h1
              className="ads-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
            >
              <Segments parts={inmoLanding.title} />
            </motion.h1>

            <motion.p
              className="ads-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
            >
              <Segments parts={inmoLanding.sub} />
            </motion.p>

            <motion.div
              className="ads-hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
            >
              <a className="btn btn-mint" href="/formulario">
                {inmoLanding.cta}
              </a>
            </motion.div>
              </div>

              <motion.figure
                className="ads-hero-press"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.24 }}
              >
                <img
                  src={inmoPress.images[1]}
                  alt="Christian Gutiérrez en El Financiero · Bloomberg — Panorama Inmobiliario"
                  loading="lazy"
                />
                <figcaption>
                  📰 Publicado en El Financiero · Bloomberg — Panorama Inmobiliario
                </figcaption>
              </motion.figure>
            </div>

            <div className="ads-proof">
              {inmoLanding.proof.map((p) => (
                <div className="ads-proof-item" key={p.lab}>
                  <span className="ads-proof-val">{p.val}</span>
                  <span className="ads-proof-lab">{p.lab}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENEMIGO COMÚN */}
        <section className="ads-section ads-enemy">
          <div className="shell">
            <span className="services-kicker">{inmoEnemy.kicker}</span>
            <h2 className="ads-h2">
              <Segments parts={inmoEnemy.title} />
            </h2>
            <p className="ads-enemy-desc">{inmoEnemy.desc}</p>
          </div>
        </section>

        {/* STATS CON CLIENTES */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{inmoStats.kicker}</span>
            <h2 className="ads-h2">{inmoStats.title}</h2>
            <p className="ads-sub ads-sub-left">{inmoStats.sub}</p>
            <div className="ads-stats">
              {inmoStats.items.map((s) => (
                <div className="ads-stat" key={s.lab}>
                  <span className="ads-stat-icon">{s.icon}</span>
                  <span className="ads-stat-val">{s.val}</span>
                  <span className="ads-stat-lab">{s.lab}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONFIANZA / LOGOS */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{inmoTrust.kicker}</span>
            <h2 className="ads-h2">{inmoTrust.title}</h2>
            <p className="ads-sub ads-sub-left">{inmoTrust.sub}</p>
            <div className="ads-who-chips" style={{ marginTop: "1.4rem" }}>
              {inmoTrust.chips.map((c) => (
                <span className="ads-chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EL MODELO / SIN HONORARIOS */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{inmoModel.kicker}</span>
            <h2 className="ads-h2">
              <Segments parts={inmoModel.title} />
            </h2>
            <div className="ads-cards">
              {inmoModel.parts.map((c) => (
                <div className="ads-card" key={c.title}>
                  <span className="ads-card-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="ads-contrast">
              <div className="ads-contrast-card">
                <h4>{inmoModel.contrast.old.name}</h4>
                <ul className="ads-contrast-list is-old">
                  {inmoModel.contrast.old.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="ads-contrast-card is-neo">
                <h4>{inmoModel.contrast.neo.name}</h4>
                <ul className="ads-contrast-list is-neo">
                  {inmoModel.contrast.neo.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ads-costviz">
              <div className="ads-costviz-head">
                <span className="services-kicker">{inmoCostViz.kicker}</span>
                <h3 className="ads-costviz-title">{inmoCostViz.title}</h3>
              </div>
              <CostViz data={inmoCostViz} />
              <p className="ads-costviz-cap">{inmoCostViz.caption}</p>
            </div>
          </div>
        </section>

        {/* POR QUÉ COMISIÓN */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{inmoWhy.kicker}</span>
            <h2 className="ads-h2">{inmoWhy.title}</h2>
            <div className="ads-cards">
              {inmoWhy.cards.map((c) => (
                <div className="ads-card" key={c.title}>
                  <span className="ads-card-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{inmoSteps.kicker}</span>
            <h2 className="ads-h2">{inmoSteps.title}</h2>
            <div className="ads-steps">
              {inmoSteps.steps.map((s) => (
                <div className="ads-step" key={s.num}>
                  <span className="ads-step-num">{s.num}</span>
                  <div>
                    <h3>
                      <span className="ads-step-icon">{s.icon}</span> {s.title}
                    </h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ¿PARA QUIÉN ES? */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{inmoFit.kicker}</span>
            <h2 className="ads-h2">{inmoFit.title}</h2>
            <div className="ads-fit">
              <div className="ads-fit-card is-yes">
                <h4>{inmoFit.yes.title}</h4>
                <ul>
                  {inmoFit.yes.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="ads-fit-card is-no">
                <h4>{inmoFit.no.title}</h4>
                <ul>
                  {inmoFit.no.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MINI-FAQ / OBJECIONES */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{inmoFaq.kicker}</span>
            <h2 className="ads-h2">{inmoFaq.title}</h2>
            <div className="ads-faq">
              {inmoFaq.items.map((f) => (
                <div className="ads-faq-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — aplicar (link a /formulario) */}
        <section className="ads-section">
          <div className="shell">
            <div className="ads-cta-band">
              <h2>¿Califica tu inmobiliaria?</h2>
              <p>
                Cupo limitado. Contesta el formulario (60 seg) y, si calificas, te
                contacto por WhatsApp en menos de 24 h.
              </p>
              <a className="btn btn-mint" href="/formulario">
                Aplicar ahora →
              </a>
            </div>
          </div>
        </section>

        {/* QUIÉN SOY + CTA FINAL */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <div className="ads-author">
              <img src={inmoWhoami.portrait} alt={inmoWhoami.name} />
              <div>
                <div className="ads-author-name">{inmoWhoami.name}</div>
                <div className="ads-author-role">{inmoWhoami.role}</div>
                <p className="ads-author-bio">{inmoWhoami.bio}</p>
              </div>
            </div>

            <div className="ads-cta-band">
              <h2>{inmoCta.title}</h2>
              <p>{inmoCta.sub}</p>
              <a className="btn btn-mint" href="/formulario">
                Aplicar ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ads-footer">
        <div className="shell ads-footer-inner">
          <span>© {new Date().getFullYear()} christiangtzb</span>
          <a href="/">Ver sitio completo →</a>
        </div>
      </footer>
    </>
  );
}
