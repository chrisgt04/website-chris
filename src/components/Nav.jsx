import { useEffect, useState } from "react";
import { nav } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="shell nav-inner">
        <a href="#top" className="wordmark">
          christian<span className="cut">gtzb</span>
        </a>
        <nav className="nav-links">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="nav-cta"
          href={nav.cta.href}
          {...(nav.cta.href.startsWith("http")
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
