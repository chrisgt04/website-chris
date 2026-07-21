import { useState, useMemo } from "react";
import { motion } from "motion/react";
import {
  CALENDLY_URL,
  WHATSAPP_NUMBER,
  adsLanding,
  adsEnemy,
  adsWhoami,
  adsResults,
  adsPress,
  adsWhy,
  adsSteps,
  adsFaq,
  adsForm,
} from "../../data/ads";
import { portfolio, press } from "../../data/content";

const ease = [0.22, 1, 0.36, 1];

function Segments({ parts }) {
  return parts.map((p, i) => (
    <span key={i} className={p.accent ? "accent" : undefined}>
      {p.t}
    </span>
  ));
}

// No calificado: por debajo del piso de facturación ($50k/mes).
function isDisqualified(a) {
  return a.facturacion === "Menos de $50k";
}

// Segmento para utm_content de Calendly.
function segmentOf(a) {
  const tipo = (a.tipo || "").toLowerCase();
  if (tipo.startsWith("saas")) return "saas";
  if (tipo.startsWith("servicio")) return "servicio-digital";
  return "otro";
}

function buildCalendlyHref(a) {
  const resumen = [
    `Vende: ${a.tipo || "-"}`,
    `Factura/mes: ${a.facturacion || "-"}`,
    `Ticket: ${a.ticket || "-"}`,
    `Ads hoy: ${a.ads_hoy || "-"}`,
    `Inversión/mes: ${a.inversion || "-"}`,
    `Proceso de venta: ${a.proceso || "-"}`,
    `Meta: ${a.meta || "-"}`,
    `Empezar: ${a.urgencia || "-"}`,
    a.empresa ? `Empresa: ${a.empresa}` : null,
    a.sitio ? `Sitio: ${a.sitio}` : null,
  ]
    .filter(Boolean)
    .join(" | ");

  const params = new URLSearchParams({
    name: a.nombre || "",
    email: a.email || "",
    a1: resumen,
    utm_source: "ads",
    utm_medium: "landing",
    utm_content: segmentOf(a),
  });
  return `${CALENDLY_URL}?${params.toString()}`;
}

function buildWhatsappHref(a) {
  const text = `Hola Christian, aún no facturo $50k/mes pero me interesa el modelo por comisión. Empresa: ${a.empresa || "-"}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function AdsForm() {
  const totalChoiceSteps = adsForm.steps.length;
  const totalSteps = totalChoiceSteps + 1; // + paso de contacto
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const progress = Math.round(((step + (submitted ? 1 : 0)) / totalSteps) * 100);

  const pick = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setStep((s) => Math.min(s + 1, totalChoiceSteps));
  };

  const setField = (id, value) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const contactComplete =
    answers.nombre?.trim() && answers.email?.trim() && answers.empresa?.trim();

  const disq = isDisqualified(answers);
  const calendlyHref = useMemo(() => buildCalendlyHref(answers), [answers]);
  const whatsappHref = useMemo(() => buildWhatsappHref(answers), [answers]);

  const submit = () => {
    if (!contactComplete) return;
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
    setSubmitted(true);
    window.open(disq ? whatsappHref : calendlyHref, "_blank", "noopener");
  };

  // Pantalla final (enviado)
  if (submitted) {
    const firstName = answers.nombre?.split(" ")[0] || "";
    return (
      <div className="ads-form-card ads-form-done">
        <span className="ads-done-icon">{disq ? "📩" : "📅"}</span>
        <h3>
          {disq ? `Gracias, ${firstName}.` : `¡Listo, ${firstName}!`}
        </h3>
        <p>
          {disq
            ? "El modelo por comisión funciona mejor cuando ya facturas $50k+/mes. Te dejé un WhatsApp para ver cómo llegar ahí de la forma correcta."
            : "Abrí Calendly con tu contexto listo para que agendes tu llamada. Si no se abrió, toca el botón de abajo."}
        </p>
        <a
          className="btn btn-mint"
          href={disq ? whatsappHref : calendlyHref}
          target="_blank"
          rel="noreferrer"
        >
          {disq ? "Escribir por WhatsApp" : "Agendar llamada"}
        </a>
      </div>
    );
  }

  // Paso de contacto (último)
  if (step >= totalChoiceSteps) {
    return (
      <div className="ads-form-card">
        <div className="ads-progress">
          <div className="ads-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="ads-step-count">Último paso</span>
        <h3 className="ads-q">¿A dónde te contacto?</h3>
        <div className="ads-fields">
          {adsForm.contact.map((f) => (
            <label key={f.id} className="ads-field">
              <span>{f.label}</span>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={answers[f.id] || ""}
                onChange={(e) => setField(f.id, e.target.value)}
              />
            </label>
          ))}
        </div>
        <div className="ads-form-nav">
          <button className="ads-back" onClick={() => setStep((s) => s - 1)}>
            ← Atrás
          </button>
          <button
            className="btn btn-mint"
            disabled={!contactComplete}
            onClick={submit}
          >
            {disq ? "Enviar" : "Agendar llamada"}
          </button>
        </div>
      </div>
    );
  }

  // Pasos de opción múltiple
  const current = adsForm.steps[step];
  return (
    <div className="ads-form-card">
      <div className="ads-progress">
        <div className="ads-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <span className="ads-step-count">
        Paso {step + 1} de {totalSteps}
      </span>
      <h3 className="ads-q">{current.q}</h3>
      {current.hint && <p className="ads-hint">{current.hint}</p>}
      <div className="ads-options">
        {current.options.map((opt) => (
          <button
            key={opt}
            className={`ads-option ${answers[current.id] === opt ? "is-active" : ""}`}
            onClick={() => pick(current.id, opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      {step > 0 && (
        <div className="ads-form-nav">
          <button className="ads-back" onClick={() => setStep((s) => s - 1)}>
            ← Atrás
          </button>
        </div>
      )}
    </div>
  );
}

export default function AdsLanding() {
  return (
    <>
      <div className="vignette" />
      <div className="grain" />

      <header className="ads-nav">
        <div className="shell ads-nav-inner">
          <a className="ads-brand" href="/">
            christiangtzb
          </a>
          <a className="btn btn-mint ads-nav-cta" href="#aplicar">
            Aplicar
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="ads-hero">
          <div className="shell">
            <motion.span
              className="hero-kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="dot" />
              {adsLanding.kicker}
            </motion.span>

            <motion.h1
              className="ads-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
            >
              <Segments parts={adsLanding.title} />
            </motion.h1>

            <motion.p
              className="ads-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
            >
              <Segments parts={adsLanding.sub} />
            </motion.p>

            <motion.div
              className="ads-hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
            >
              <a className="btn btn-mint" href="#aplicar">
                {adsLanding.cta}
              </a>
            </motion.div>

            <div className="ads-proof">
              {adsLanding.proof.map((p) => (
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
            <span className="services-kicker">{adsEnemy.kicker}</span>
            <h2 className="ads-h2">
              <Segments parts={adsEnemy.title} />
            </h2>
            <p className="ads-enemy-desc">{adsEnemy.desc}</p>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section className="ads-section ads-section-alt">
          <div className="shell ads-who-grid">
            <div className="ads-who-portrait">
              <img src={adsWhoami.portrait} alt="Christian Gutiérrez" />
            </div>
            <div className="ads-who-copy">
              <span className="services-kicker">{adsWhoami.kicker}</span>
              <h2 className="ads-h2">
                <Segments parts={adsWhoami.title} />
              </h2>
              {adsWhoami.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="ads-who-p"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
              <div className="ads-who-chips">
                {adsWhoami.chips.map((c) => (
                  <span className="ads-chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ COMISIÓN */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{adsWhy.kicker}</span>
            <h2 className="ads-h2">{adsWhy.title}</h2>
            <div className="ads-cards">
              {adsWhy.cards.map((c) => (
                <div className="ads-card" key={c.title}>
                  <span className="ads-card-icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTADOS REALES */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{adsResults.kicker}</span>
            <h2 className="ads-h2">{adsResults.title}</h2>
            <p className="ads-sub ads-sub-left">{adsResults.sub}</p>
            <span className="ads-trust-badge">
              <span className="dot" />
              {adsResults.trust}
            </span>
            <div className="ads-results">
              {[
                ...portfolio.featured.filter((c) => !/leadsales/i.test(c.name)),
                ...adsResults.extra,
              ].map((c) => (
                <div className="ads-result-card" key={c.name}>
                  <div className="ads-result-head">
                    <span className="ads-result-initials">{c.initials}</span>
                    <div>
                      <h3>{c.name}</h3>
                      <span className="ads-result-cat">{c.cat}</span>
                    </div>
                  </div>
                  <div className="ads-result-metrics">
                    {c.metrics.map((m) => (
                      <div className="ads-result-metric" key={m.lab}>
                        <span className="ads-result-val">{m.val}</span>
                        <span className="ads-result-lab">{m.lab}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRENSA / EL FINANCIERO */}
        <section className="ads-section">
          <div className="shell ads-press-grid">
            <div className="ads-press-copy">
              <span className="services-kicker">{adsPress.kicker}</span>
              <h2 className="ads-h2">{adsPress.title}</h2>
              <p className="ads-sub ads-sub-left">{adsPress.sub}</p>
              <div className="ads-press-tags">
                {press.cards.map((c) => (
                  <span className="ads-chip" key={c.meta}>
                    {c.outlet} · {c.meta}
                  </span>
                ))}
              </div>
            </div>
            <div className="ads-press-media">
              <img src={adsPress.press} alt="Christian Gutiérrez en El Financiero · Bloomberg" />
              <img src={adsPress.talk} alt="Columna de Christian Gutiérrez en El Financiero · Bloomberg" />
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="ads-section ads-section-alt">
          <div className="shell">
            <span className="services-kicker">{adsSteps.kicker}</span>
            <h2 className="ads-h2">{adsSteps.title}</h2>
            <div className="ads-steps">
              {adsSteps.steps.map((s) => (
                <div className="ads-step" key={s.num}>
                  <span className="ads-step-num">{s.num}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MINI-FAQ */}
        <section className="ads-section">
          <div className="shell">
            <span className="services-kicker">{adsFaq.kicker}</span>
            <h2 className="ads-h2">{adsFaq.title}</h2>
            <div className="ads-faq">
              {adsFaq.items.map((f) => (
                <div className="ads-faq-item" key={f.q}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULARIO MATÓN */}
        <section className="ads-section ads-apply" id="aplicar">
          <div className="shell ads-apply-grid">
            <div className="ads-apply-copy">
              <span className="services-kicker">{adsForm.kicker}</span>
              <h2 className="ads-h2">{adsForm.title}</h2>
              <p className="ads-sub">{adsForm.sub}</p>
            </div>
            <AdsForm />
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
