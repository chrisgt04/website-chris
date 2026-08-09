import { useState, useMemo } from "react";

// Formulario matón genérico y reutilizable entre verticales.
// Props:
//   config: { steps, contact, consent }  (del data file)
//   scoring: mapa de puntos por respuesta
//   disqualify: (answers) => bool
//   source: string (ej. "landing-suscripcion")
//   webhookUrl, whatsappNumber: strings
//   summaryFields: [{ key, label }]  para el resumen de WhatsApp
//   copy: { disqMsg, doneMsg, waIntro, waDisqIntro }

function computeScore(answers, scoring) {
  let s = 0;
  for (const key of Object.keys(scoring)) {
    const val = answers[key];
    const pts = val != null ? scoring[key][val] : undefined;
    if (typeof pts === "number") s += pts;
  }
  return s;
}

function tierOf(answers, scoring, disqualify) {
  if (disqualify(answers)) return "C";
  const s = computeScore(answers, scoring);
  if (s >= 75) return "A";
  if (s >= 45) return "B";
  return "C";
}

function utmFromUrl() {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  const out = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
    const v = q.get(k);
    if (v) out[k] = v;
  });
  return out;
}

export default function LeadForm({
  config,
  scoring,
  disqualify,
  source,
  webhookUrl,
  whatsappNumber,
  summaryFields,
  copy,
}) {
  const totalChoiceSteps = config.steps.length;
  const submitStep = totalChoiceSteps + 1; // 0 = contacto · 1..N = preguntas · N+1 = envío
  const totalSteps = totalChoiceSteps + 2;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ whatsapp: "+52 " });
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState("idle"); // idle | sending | done | error

  const progress = Math.round(
    ((step + (status === "done" ? 1 : 0)) / (totalSteps - 1)) * 100
  );

  const pick = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setStep((s) => Math.min(s + 1, submitStep));
  };
  const setField = (id, value) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const phoneDigits = (answers.whatsapp || "").replace(/\D/g, "");
  const contactComplete =
    answers.nombre?.trim() &&
    phoneDigits.length >= 10 &&
    answers.email?.trim() &&
    answers.empresa?.trim() &&
    answers.consent;

  const disq = disqualify(answers);

  const whatsappHref = useMemo(() => {
    const summary = summaryFields
      .map(({ key, label }) => `${label}: ${answers[key] || "-"}`)
      .join(" | ");
    const text = disq ? copy.waDisqIntro : `${copy.waIntro} ${summary}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [answers, disq, summaryFields, copy, whatsappNumber]);

  const submit = async () => {
    if (!contactComplete || status === "sending") return;
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
    const payload = {
      ...answers,
      lead_score: computeScore(answers, scoring),
      tier: tierOf(answers, scoring, disqualify),
      source,
      submitted_at: new Date().toISOString(),
      website, // honeypot — n8n descarta si viene lleno
      ...utmFromUrl(),
    };
    setStatus("sending");
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };

  // Error — no perder el lead: fallback a WhatsApp.
  if (status === "error") {
    return (
      <div className="ads-form-card ads-form-done">
        <span className="ads-done-icon">📲</span>
        <h3>Casi listo.</h3>
        <p>
          No pude registrar tu aplicación automáticamente. Mándame el resumen por
          WhatsApp de un toque y le doy seguimiento personal.
        </p>
        <a className="btn btn-mint" href={whatsappHref} target="_blank" rel="noreferrer">
          Enviar por WhatsApp
        </a>
      </div>
    );
  }

  // Éxito.
  if (status === "done") {
    const firstName = answers.nombre?.split(" ")[0] || "";
    return (
      <div className="ads-form-card ads-form-done">
        <span className="ads-done-icon">{disq ? "📩" : "✅"}</span>
        <h3>{disq ? `Gracias, ${firstName}.` : `¡Recibido, ${firstName}!`}</h3>
        <p>{disq ? copy.disqMsg : copy.doneMsg}</p>
        <a className="btn btn-mint" href={whatsappHref} target="_blank" rel="noreferrer">
          {disq ? "Escribir por WhatsApp" : "Adelantar por WhatsApp"}
        </a>
      </div>
    );
  }

  // Paso 1 — datos de la persona.
  if (step === 0) {
    return (
      <div className="ads-form-card">
        <div className="ads-progress">
          <div className="ads-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="ads-step-count">Paso 1 de {totalSteps}</span>
        <h3 className="ads-q">Empecemos por tus datos</h3>
        <p className="ads-hint">Para contactarte con tu contexto listo. Toma 60 segundos.</p>
        <div className="ads-fields">
          {config.contact.map((f) => (
            <label key={f.id} className="ads-field">
              <span>{f.label}</span>
              <input
                type={f.type}
                inputMode={f.type === "tel" ? "tel" : undefined}
                placeholder={f.placeholder}
                value={answers[f.id] || ""}
                onChange={(e) => setField(f.id, e.target.value)}
              />
            </label>
          ))}
          <input
            type="text"
            className="ads-hp"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            aria-hidden="true"
          />
          <label className="ads-consent">
            <input
              type="checkbox"
              checked={!!answers.consent}
              onChange={(e) => setField("consent", e.target.checked)}
            />
            <span>{config.consent}</span>
          </label>
        </div>
        <div className="ads-form-nav">
          <span aria-hidden="true" />
          <button className="btn btn-mint" disabled={!contactComplete} onClick={() => setStep(1)}>
            Continuar →
          </button>
        </div>
      </div>
    );
  }

  // Pantalla final — envío.
  if (step >= submitStep) {
    return (
      <div className="ads-form-card">
        <div className="ads-progress">
          <div className="ads-progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <span className="ads-step-count">Último paso</span>
        <h3 className="ads-q">¡Todo listo!</h3>
        <p className="ads-hint">
          Tengo lo necesario para revisar tu caso. Envía tu aplicación y te escribo
          por WhatsApp en menos de 24 h.
        </p>
        <div className="ads-form-nav">
          <button className="ads-back" onClick={() => setStep((s) => s - 1)}>
            ← Atrás
          </button>
          <button
            className="btn btn-mint"
            disabled={!contactComplete || status === "sending"}
            onClick={submit}
          >
            {status === "sending" ? "Enviando…" : "Enviar aplicación"}
          </button>
        </div>
      </div>
    );
  }

  // Preguntas de calificación.
  const current = config.steps[step - 1];
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
      <div className="ads-form-nav">
        <button className="ads-back" onClick={() => setStep((s) => s - 1)}>
          ← Atrás
        </button>
      </div>
    </div>
  );
}
