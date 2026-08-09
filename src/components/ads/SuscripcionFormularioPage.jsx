import { motion } from "motion/react";
import LeadForm from "./LeadForm";
import {
  WEBHOOK_URL,
  WHATSAPP_NUMBER,
  suscForm,
  suscScoring,
} from "../../data/ads-suscripcion";

const ease = [0.22, 1, 0.36, 1];

const SUMMARY_FIELDS = [
  { key: "empresa", label: "Producto" },
  { key: "tipo", label: "Tipo" },
  { key: "cobro", label: "Cobro" },
  { key: "facturacion", label: "Factura/mes" },
  { key: "precio_plan", label: "Plan" },
  { key: "convierte", label: "Convierte" },
  { key: "pauta", label: "Pauta/mes" },
  { key: "urgencia", label: "Empezar" },
];

const COPY = {
  disqMsg:
    "El modelo funciona mejor cuando ya cobras de forma recurrente. Te dejé un WhatsApp para ver cómo llegar ahí de la forma correcta.",
  doneMsg:
    "Recibí tu aplicación. Te escribo por WhatsApp en menos de 24 h con los siguientes pasos.",
  waIntro: "Hola Christian, quiero aplicar al modelo de ads por comisión para mi negocio de suscripción.",
  waDisqIntro:
    "Hola Christian, aún no cobro de forma recurrente pero me interesa el modelo por comisión.",
};

export default function SuscripcionFormularioPage() {
  return (
    <>
      <div className="vignette" />
      <div className="grain" />

      <header className="ads-nav">
        <div className="shell ads-nav-inner">
          <a className="ads-brand" href="/suscripcion">
            ← Volver
          </a>
          <a className="ads-brand" href="/">
            christiangtzb
          </a>
        </div>
      </header>

      <main>
        <section className="ads-section ads-form-page">
          <div className="shell">
            <motion.span
              className="hero-kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="dot" />
              {suscForm.kicker}
            </motion.span>

            <motion.h1
              className="ads-h2 ads-form-page-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
            >
              {suscForm.title}
            </motion.h1>

            <motion.p
              className="ads-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
            >
              {suscForm.sub}
            </motion.p>

            <div className="ads-form-page-card">
              <LeadForm
                config={suscForm}
                scoring={suscScoring}
                disqualify={(a) => a.cobro === "Todavía no cobro"}
                source="landing-suscripcion"
                webhookUrl={WEBHOOK_URL}
                whatsappNumber={WHATSAPP_NUMBER}
                summaryFields={SUMMARY_FIELDS}
                copy={COPY}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="ads-footer">
        <div className="shell ads-footer-inner">
          <span>© {new Date().getFullYear()} christiangtzb</span>
          <a href="/suscripcion">Ver la propuesta completa →</a>
        </div>
      </footer>
    </>
  );
}
