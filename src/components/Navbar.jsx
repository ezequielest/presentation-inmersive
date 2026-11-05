import { MessageCircleMore, Menu } from "lucide-react";

const links = [
  ["Capacidades", "#capabilities"],
  ["Experiencias", "#workflow"],
  ["Aplicaciones", "#applications"],
];

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#" aria-label="EF studio inicio">
          ef studio<span className="brand-dot">.</span>
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <a className="nav-cta" target="_blank" href="https://api.whatsapp.com/send?phone=542236674588&text=Hola, estoy interesado en los servicios inmersivos!">Contanos tu proyecto <MessageCircleMore size={20
        } /></a>
        <button className="mobile-menu" aria-label="Abrir menú"><Menu size={21} /></button>
      </nav>
    </header>
  );
}