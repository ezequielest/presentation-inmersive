import { ArrowUpRight } from "lucide-react";

export default function Manifesto() {
  return (
    <section className="section manifesto container" id="manifesto">
      <div className="section-kicker"><span>01</span> / UNA NUEVA MANERA DE PRESENTAR TUS PROYECTOS</div>
      <div className="manifesto-layout">
        <div>
          <p className="overline">LOS PROYECTOS NO EMPIEZAN EN LA OBRA.</p>
          <h2>Empiezan con<br />una <span className="gradient-text">visión.</span></h2>
        </div>
        <div className="manifesto-copy">
          <p className="lead">Un desarrollo inmobiliario puede empezar a generar interés mucho antes de su construcción.</p>
          <p>En EF. Studio convertimos planos, ideas y espacios en relatos visuales y experiencias digitales. Creamos nuevas maneras de presentar arquitectura, transmitir valor y acercar a las personas a proyectos que todavía no existen.</p>
          <a className="text-link" href="#capabilities">Descubrí lo que podemos crear <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="manifesto-visual">
        <div className="visual-caption"><span>FIG. 001</span><span>FROM CONCEPT TO EXPERIENCE</span></div>
        <div className="visual-crosshair">+</div>
        <div className="visual-coordinate">34° 36' 12.0" S<br />58° 22' 54.0" W</div>
      </div>
    </section>
  );
}
