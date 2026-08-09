import { motion } from "motion/react";
import InmoForm from "./InmoForm";
import { inmoForm } from "../../data/ads-inmobiliarias";

const ease = [0.22, 1, 0.36, 1];

export default function FormularioPage() {
  return (
    <>
      <div className="vignette" />
      <div className="grain" />

      <header className="ads-nav">
        <div className="shell ads-nav-inner">
          <a className="ads-brand" href="/inmobiliarias">
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
              {inmoForm.kicker}
            </motion.span>

            <motion.h1
              className="ads-h2 ads-form-page-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
            >
              {inmoForm.title}
            </motion.h1>

            <motion.p
              className="ads-sub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
            >
              {inmoForm.sub}
            </motion.p>

            <div className="ads-form-page-card">
              <InmoForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="ads-footer">
        <div className="shell ads-footer-inner">
          <span>© {new Date().getFullYear()} christiangtzb</span>
          <a href="/inmobiliarias">Ver la propuesta completa →</a>
        </div>
      </footer>
    </>
  );
}
