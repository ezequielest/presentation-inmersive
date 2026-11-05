import { ArrowUpRight } from "lucide-react";
import React from "react";

const cards = [
  ["01", "Comercialización anticipada", "Presentar y comunicar unidades antes de comenzar la construcción.", "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"],
  ["02", "Presentación a inversores", "Transmitir el potencial de un desarrollo con una visión clara y tangible.", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"],
  ["03", "Showrooms inmobiliarios", "Crear espacios digitales donde los clientes puedan experimentar el proyecto.", "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"],
  ["04", "Masterplans & urbanizaciones", "Mostrar proyectos de gran escala, su entorno y su integración territorial.", "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85"],
];

export default function Applications() {
  return (
    <section className="section applications" id="applications">
      <div className="container">
        <div className="section-kicker"><span>04</span> / WHERE IT COMES TO LIFE</div>
        <div className="section-heading">
          <div><p className="overline">BUILT AROUND YOUR BUSINESS</p><h2>Diseñado para<br /><span className="gradient-text">hacerlo posible.</span></h2></div>
          <p className="section-intro">Cada desarrollo tiene una historia y un objetivo comercial diferente. Creamos la experiencia adecuada para cada uno.</p>
        </div>
        <div className="application-grid">
          {cards.map(([n, title, text, image]) => (
            <article className="application-card" key={n}>
              <div className="application-image" style={{ backgroundImage: `linear-gradient(0deg, rgba(8,10,13,.8), transparent 75%), url(${image})` }}>
                <span className="application-number">{n} / APPLICATION</span>
                <ArrowUpRight size={20} className="application-arrow" />
              </div>
              <div className="application-copy"><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
