import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <a className="brand footer-brand" href="#">ef studio<span className="brand-dot">.</span></a>
        <p>Hacemos visible el futuro.</p>
        <a href="mailto:hello@effilms.com">CONTACTO <ArrowUpRight size={14} /></a>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} EFSTUDIO. TODOS LOS DERECHOS RESERVADOS.</span><span></span><a href="#">SUBIR ↑</a></div>
    </footer>
  );
}
