export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <a href="#top" className="wordmark">
          christian<b>gtzb</b>
        </a>
        <span className="tagline">
          Data Analysis · Paid Media · Automatización — Monterrey, MX
        </span>
        <span className="tagline">© {year} Christian Gutiérrez</span>
      </div>
    </footer>
  );
}
