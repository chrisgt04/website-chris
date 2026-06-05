import Reveal from "./ui/Reveal";
import { contact } from "../data/content";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="shell">
        <Reveal as="span" className="section-label">
          {contact.label}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={0.05}>
          {contact.title}
        </Reveal>
        <Reveal as="p" className="section-intro" delay={0.1}>
          {contact.intro}
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-methods" delay={0.1}>
            {contact.methods.map((m) => (
              <a
                className="method"
                key={m.val}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className="ic">{m.ic}</span>
                <span>
                  <span className="lab" dangerouslySetInnerHTML={{ __html: m.lab }} />
                  <br />
                  <span className="val">{m.val}</span>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal className="contact-aside" delay={0.2}>
            <h3>{contact.asideTitle}</h3>
            <p>{contact.asideText}</p>
            <ul className="checklist">
              {contact.checklist.map((c) => (
                <li key={c}>
                  <span className="ck">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
