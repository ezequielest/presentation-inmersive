import { ArrowUpRight, MoveUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid" />
      <div className="container contact-content">
        <span className="overline">MOSTRA EL FUTURO CON NOSOTROS</span>
        <h2>No dejes<br /> <b>para mañana</b> lo que puedas <em>mostrar HOY</em></h2>
        <p>Contanos qué estás desarrollando. Pensemos juntos cómo convertir esa idea en una experiencia que se pueda ver, recorrer y vivir.</p>
        <a className="contact-button" href="mailto:hello@effilms.com.ar?subject=Quiero%20presentar%20mi%20proyecto">Hablemos de tu próximo proyecto <ArrowUpRight size={18} /></a>
        <div className="contact-note"><MoveUpRight size={16} /> Y HAGAMOS JUNTOS VISIBLE EL FUTURO.</div>
      </div>
    </section>
  );
}
