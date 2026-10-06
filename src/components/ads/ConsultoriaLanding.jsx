import { useMemo } from "react";
import { motion } from "motion/react";
import Reveal from "../ui/Reveal";
import Counter from "../ui/Counter";
import Bio from "../Bio";
import { HBars, GroupedBars, LineChart } from "../consultoria/Charts";
import RoiCalculator from "../consultoria/RoiCalculator";
import {
  CALENDLY_URL,
  WHATSAPP_URL,
  consHero,
  consFit,
  consPillars,
  consTalks,
  consStats,
  consLasso,
  consCases,
  consCalc,
  consSteps,
  consPricing,
  consFaq,
  consWhoami,
  consCta,
} from "../../data/consultoria";

const ease = [0.22, 1, 0.36, 1];

function Segments({ parts }) {
  return parts.map((p, i) => (
    <span key={i} className={p.accent ? "accent" : undefined}>
      {p.t}
    </span>
  ));
}

// Calendly acepta utm_* como query params → se reenvían desde la URL de la landing.
function buildCalendlyHref() {
  if (typeof window === "undefined") return CALENDLY_URL;
  const params = new URLSearchParams(window.location.search);
  const out = new URLSearchParams();
  for (const [k, v] of params) if (k.startsWith("utm_")) out.set(k, v);
  if (!out.has("utm_source")) out.set("utm_source", "christiangtzb");
  if (!out.has("utm_medium")) out.set("utm_medium", "landing-consultoria");
  return `${CALENDLY_URL}?${out.toString()}`;
}

function trackSchedule() {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Schedule");
}

function BookButton({ href, children, className = "btn btn-mint" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener" onClick={trackSchedule}>
      {children}
    </a>
  );
}

function ChartCard({ title, caption, children, className = "" }) {
  return (
    <Reveal className={`cons-chart-card ${className}`}>
      <h3 className="cons-chart-title">{title}</h3>
      {children}
      {caption && <p className="cons-chart-cap">{caption}</p>}
    </Reveal>
  );
}

export default function ConsultoriaLanding() {
  const calendlyHref = useMemo(buildCalendlyHref, []);
  const { doorvel, residenzo, roas } = consCases;

  return (
    <>
      <div className="vignette" />
      <div className="grain" />

      <header className="ads-nav">
        <div className="shell ads-nav-inner">
          <a className="ads-brand" href="/">
            christiangtzb
          </a>
          <BookButton href={calendlyHref} className="btn btn-mint ads-nav-cta">
            Agendar
          </BookButton>
        </div>
      </header>

      <main className="cons">
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
                  {consHero.kicker}
                </motion.span>
                <motion.h1
                  className="ads-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.05 }}
                >
                  <Segments parts={consHero.title} />
                </motion.h1>
                <motion.p
                  className="ads-sub"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.12 }}
                >
                  <Segments parts={consHero.sub} />
                </motion.p>
                <motion.div
                  className="ads-hero-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.18 }}
                >
                  <BookButton href={calendlyHref}>{consHero.cta}</BookButton>
                </motion.div>
                <motion.div
                  className="ads-who-chips cons-hero-proof"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {consHero.proof.map((p) => (
                    <span className="ads-chip" key={p}>
                      {p}
                    </span>
                  ))}
                </motion.div>
              </div>
              <motion.figure
                className="cons-hero-photo"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.2 }}
              >
                <img src={consHero.portrait} alt="Christian Gutiérrez" />
              </motion.figure>
            </div>
          </div>
        </section>

        {/* ¿QUIÉN ES ESTE TIPO? (timeline del home) */}
        <Bio />

        {/* CONFERENCIAS / PISSA */}
        <section className="ads-section ads-section-alt">
          <div className="shell cons-talks">
            <div>
              <span className="services-kicker">{consTalks.kicker}</span>
              <h2 className="ads-h2">
                <Segments parts={consTalks.title} />
              </h2>
              <p className="ads-sub ads-sub-left">{consTalks.sub}</p>
              <div className="cons-talks-stats">
                {consTalks.stats.map((s) => (
                  <div className="cons-stat" key={s.lab}>
                    <span className="cons-stat-val">
                      <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </span>
                    <span className="cons-stat-lab">{s.lab}</span>
                  </div>
                ))}
              </div>
              <div className="cons-orgs">
                {consTalks.orgs.map((o) => (
                  <span className="cons-org" key={o}>
                    {o}
                  </span>
                ))}
              </div>
            </div>
            <Reveal className="cons-talks-figure">
              <img src={consTalks.photo} alt="Christian Gutiérrez dando una conferencia de IA" loading="lazy" />
              <a className="cons-talks-video" href={consTalks.video.url} target="_blank" rel="noopener">
                <span>▶</span> {consTalks.video.label}
              </a>
            </Reveal>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{consFit.kicker}</span>
            <h2 className="ads-h2">{consFit.title}</h2>
            <div className="ads-fit">
              {[
                ["is-yes", consFit.yes],
                ["is-no", consFit.no],
              ].map(([cls, block]) => (
                <div className={`ads-fit-card ${cls}`} key={cls}>
                  <h4>{block.title}</h4>
                  <ul>
                    {block.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILARES */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{consPillars.kicker}</span>
            <h2 className="ads-h2">
              <Segments parts={consPillars.title} />
            </h2>
            <div className="cons-pillars">
              {consPillars.items.map((p, i) => (
                <Reveal className="ads-card cons-pillar" key={p.title} delay={i * 0.08}>
                  <span className="ads-card-icon">{p.icon}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul>
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{consStats.kicker}</span>
            <h2 className="ads-h2">{consStats.title}</h2>
            <div className="cons-stats">
              {consStats.items.map((s) => (
                <div className="cons-stat" key={s.lab}>
                  <span className="cons-stat-val">
                    <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                  <span className="cons-stat-lab">{s.lab}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASO LASSO */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{consLasso.kicker}</span>
            <h2 className="ads-h2">{consLasso.title}</h2>
            <p className="ads-sub ads-sub-left">{consLasso.sub}</p>
            <div className="cons-charts">
              <ChartCard title={consLasso.monthly.title}>
                <GroupedBars groups={consLasso.monthly.groups} series={consLasso.monthly.series} />
              </ChartCard>
              <ChartCard title={consLasso.payback.title} caption={consLasso.payback.caption}>
                <LineChart labels={consLasso.payback.labels} series={consLasso.payback.series} />
              </ChartCard>
              <ChartCard
                title={consLasso.projection.title}
                caption={consLasso.projection.caption}
                className="is-wide"
              >
                <LineChart
                  labels={consLasso.projection.labels}
                  series={consLasso.projection.series}
                  height={260}
                />
              </ChartCard>
              <ChartCard title={consLasso.leads.title}>
                <HBars items={consLasso.leads.items} />
              </ChartCard>
              <ChartCard title={consLasso.closeRate.title} caption={consLasso.closeRate.caption}>
                <HBars items={consLasso.closeRate.items} suffix="%" />
              </ChartCard>
            </div>
          </div>
        </section>

        {/* MÁS CASOS */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{consCases.kicker}</span>
            <h2 className="ads-h2">{consCases.title}</h2>
            <div className="cons-charts">
              <Reveal className="cons-chart-card cons-case">
                <img src={doorvel.image} alt={doorvel.name} loading="lazy" />
                <div className="cons-case-head">
                  <h3>{doorvel.name}</h3>
                  <span>{doorvel.tag}</span>
                </div>
                <p className="cons-case-desc">{doorvel.desc}</p>
                <h4 className="cons-chart-title">{doorvel.chart.title}</h4>
                <HBars items={doorvel.chart.items} prefix={doorvel.chart.prefix} />
              </Reveal>
              <Reveal className="cons-chart-card cons-case">
                <img src={residenzo.image} alt={residenzo.name} loading="lazy" />
                <div className="cons-case-head">
                  <h3>{residenzo.name}</h3>
                  <span>{residenzo.tag}</span>
                </div>
                <p className="cons-case-desc">{residenzo.desc}</p>
                <div className="cons-case-hl">
                  <b>{residenzo.highlight.val}</b>
                  <span>{residenzo.highlight.lab}</span>
                </div>
              </Reveal>
              <ChartCard title={roas.title} caption={roas.caption} className="is-wide">
                <HBars items={roas.items} suffix={roas.suffix} />
              </ChartCard>
            </div>
            <div className="ads-cards">
              {consCases.more.map((c) => (
                <div className="ads-card" key={c.name}>
                  <span className="cons-case-tag">{c.tag}</span>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALCULADORA */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{consCalc.kicker}</span>
            <h2 className="ads-h2">{consCalc.title}</h2>
            <RoiCalculator note={consCalc.note} />
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{consSteps.kicker}</span>
            <h2 className="ads-h2">{consSteps.title}</h2>
            <div className="ads-steps">
              {consSteps.steps.map((s) => (
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

        {/* PRECIO */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <div className="cons-price">
              <div>
                <span className="services-kicker">{consPricing.kicker}</span>
                <div className="cons-price-val">
                  <small>desde</small> {consPricing.price}
                  <span>{consPricing.unit}</span>
                </div>
                <p className="cons-price-note">{consPricing.note}</p>
              </div>
              <div>
                <ul className="cons-price-list">
                  {consPricing.includes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <BookButton href={calendlyHref}>Agendar mi sesión</BookButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{consFaq.kicker}</span>
            <h2 className="ads-h2">{consFaq.title}</h2>
            <div className="ads-faq">
              {consFaq.items.map((f) => (
                <div className="ads-faq-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUIÉN SOY + CTA FINAL */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <div className="ads-author">
              <img src={consWhoami.portrait} alt={consWhoami.name} />
              <div>
                <div className="ads-author-name">{consWhoami.name}</div>
                <div className="ads-author-role">{consWhoami.role}</div>
                <p className="ads-author-bio">{consWhoami.bio}</p>
              </div>
            </div>
            <div className="ads-cta-band">
              <h2>{consCta.title}</h2>
              <p>{consCta.sub}</p>
              <BookButton href={calendlyHref}>Agendar en Calendly →</BookButton>
              <a className="cons-alt-link" href={WHATSAPP_URL} target="_blank" rel="noopener">
                ¿Prefieres escribirme? WhatsApp
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
