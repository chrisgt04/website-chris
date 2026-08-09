import { motion } from "motion/react";
import CostViz from "./CostViz";
import {
  suscLanding,
  suscEnemy,
  suscStats,
  suscCostViz,
  suscTrust,
  suscPress,
  suscModel,
  suscWhy,
  suscSteps,
  suscFit,
  suscFaq,
  suscWhoami,
  suscCta,
} from "../../data/ads-suscripcion";

const ease = [0.22, 1, 0.36, 1];
const FORM_URL = "/suscripcion/formulario";

function Segments({ parts }) {
  return parts.map((p, i) => (
    <span key={i} className={p.accent ? "accent" : undefined}>
      {p.t}
    </span>
  ));
}

export default function SuscripcionLanding() {
  return (
    <>
      <div className="vignette" />
      <div className="grain" />

      <header className="ads-nav">
        <div className="shell ads-nav-inner">
          <a className="ads-brand" href="/">
            christiangtzb
          </a>
          <a className="btn btn-mint ads-nav-cta" href={FORM_URL}>
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
                  {suscLanding.kicker}
                </motion.span>

                <motion.h1
                  className="ads-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.05 }}
                >
                  <Segments parts={suscLanding.title} />
                </motion.h1>

                <motion.p
                  className="ads-sub"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.12 }}
                >
                  <Segments parts={suscLanding.sub} />
                </motion.p>

                <motion.div
                  className="ads-hero-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.18 }}
                >
                  <a className="btn btn-mint" href={FORM_URL}>
                    {suscLanding.cta}
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
                  src={suscPress.images[1]}
                  alt="Christian Gutiérrez en El Financiero · Bloomberg"
                  loading="lazy"
                />
                <figcaption>📰 Publicado en El Financiero · Bloomberg</figcaption>
              </motion.figure>
            </div>
          </div>
        </section>

        {/* ENEMIGO COMÚN */}
        <section className="ads-section ads-enemy">
          <div className="shell">
            <span className="services-kicker">{suscEnemy.kicker}</span>
            <h2 className="ads-h2">
              <Segments parts={suscEnemy.title} />
            </h2>
            <p className="ads-enemy-desc">{suscEnemy.desc}</p>
          </div>
        </section>

        {/* STATS CON CLIENTES */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{suscStats.kicker}</span>
            <h2 className="ads-h2">{suscStats.title}</h2>
            <p className="ads-sub ads-sub-left">{suscStats.sub}</p>
            <div className="ads-stats">
              {suscStats.items.map((s) => (
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
            <span className="services-kicker">{suscTrust.kicker}</span>
            <h2 className="ads-h2">{suscTrust.title}</h2>
            <p className="ads-sub ads-sub-left">{suscTrust.sub}</p>
            <div className="ads-who-chips" style={{ marginTop: "1.4rem" }}>
              {suscTrust.chips.map((c) => (
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
            <span className="services-kicker">{suscModel.kicker}</span>
            <h2 className="ads-h2">
              <Segments parts={suscModel.title} />
            </h2>
            <div className="ads-cards">
              {suscModel.parts.map((c) => (
                <div className="ads-card" key={c.title}>
                  <span className="ads-card-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="ads-contrast">
              <div className="ads-contrast-card">
                <h4>{suscModel.contrast.old.name}</h4>
                <ul className="ads-contrast-list is-old">
                  {suscModel.contrast.old.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="ads-contrast-card is-neo">
                <h4>{suscModel.contrast.neo.name}</h4>
                <ul className="ads-contrast-list is-neo">
                  {suscModel.contrast.neo.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="ads-costviz">
              <div className="ads-costviz-head">
                <span className="services-kicker">{suscCostViz.kicker}</span>
                <h3 className="ads-costviz-title">{suscCostViz.title}</h3>
              </div>
              <CostViz data={suscCostViz} />
              <p className="ads-costviz-cap">{suscCostViz.caption}</p>
            </div>
          </div>
        </section>

        {/* POR QUÉ COMISIÓN */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{suscWhy.kicker}</span>
            <h2 className="ads-h2">{suscWhy.title}</h2>
            <div className="ads-cards">
              {suscWhy.cards.map((c) => (
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
            <span className="services-kicker">{suscSteps.kicker}</span>
            <h2 className="ads-h2">{suscSteps.title}</h2>
            <div className="ads-steps">
              {suscSteps.steps.map((s) => (
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
            <span className="services-kicker">{suscFit.kicker}</span>
            <h2 className="ads-h2">{suscFit.title}</h2>
            <div className="ads-fit">
              <div className="ads-fit-card is-yes">
                <h4>{suscFit.yes.title}</h4>
                <ul>
                  {suscFit.yes.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="ads-fit-card is-no">
                <h4>{suscFit.no.title}</h4>
                <ul>
                  {suscFit.no.points.map((p) => (
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
            <span className="services-kicker">{suscFaq.kicker}</span>
            <h2 className="ads-h2">{suscFaq.title}</h2>
            <div className="ads-faq">
              {suscFaq.items.map((f) => (
                <div className="ads-faq-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA — aplicar */}
        <section className="ads-section">
          <div className="shell">
            <div className="ads-cta-band">
              <h2>¿Califica tu negocio?</h2>
              <p>
                Cupo limitado. Contesta el formulario (60 seg) y, si calificas, te
                contacto por WhatsApp en menos de 24 h.
              </p>
              <a className="btn btn-mint" href={FORM_URL}>
                Aplicar ahora →
              </a>
            </div>
          </div>
        </section>

        {/* QUIÉN SOY + CTA FINAL */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <div className="ads-author">
              <img src={suscWhoami.portrait} alt={suscWhoami.name} />
              <div>
                <div className="ads-author-name">{suscWhoami.name}</div>
                <div className="ads-author-role">{suscWhoami.role}</div>
                <p className="ads-author-bio">{suscWhoami.bio}</p>
              </div>
            </div>

            <div className="ads-cta-band">
              <h2>{suscCta.title}</h2>
              <p>{suscCta.sub}</p>
              <a className="btn btn-mint" href={FORM_URL}>
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
