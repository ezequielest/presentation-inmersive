import { ArrowUpRight, Scan, Clapperboard, Orbit } from "lucide-react";
import React from "react";

const items = [
  {
    number: "01",
    title: "AI FILM &\\nVISUALIZATION",
    tag: "IMAGINAR",
    description: "Mostramos lo que todavía no existe con inteligencia artificial. Producciones audiovisuales e imágenes de alto impacto para presentar la visión de cada desarrollo.",
    bullets: ["Films cinematográficos", "Visualización arquitectónica", "Imágenes y conceptos generativos", "IA"],
    icon: Clapperboard,
    className: "cap-ai",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85"
  },
  {
    number: "02",
    title: "GAUSSIAN\\nSPLATTING",
    tag: "RECONSTRUIR",
    description: "Capturamos espacios y entornos reales para convertirlos en escenarios digitales tridimensionales que pueden explorarse.",
    bullets: ["Captura espacial", "Reconstrucción 3D", "Recorridos de entornos reales"],
    icon: Scan,
    className: "cap-splat",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1500&q=85"
  },
  {
    number: "03",
    title: "IMMERSIVE\\nEXPERIENCES",
    tag: "EXPERIMENTAR",
    description: "Diseñamos nuestra propiea aplicación interactiva para que clientes, compradores e inversores puedan explorar un proyecto desde adentro.",
    bullets: ["Recorridos inmersivos", "Showrooms digitales", "Experiencias interactivas", "App"],
    icon: Orbit,
    className: "cap-immersive",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1500&q=85"
  }
];

export default function Capabilities() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="container">
        <div className="section-kicker"><span>02</span> / QUE HACEMOS</div>
        <div className="section-heading">
          <div><p className="overline">TRES CAMINOS. LA MISMA VISIÓN.</p><h2>Una nueva forma<br />de <span className="gradient-text">mostrar.</span></h2></div>
          <p className="section-intro">Combinamos herramientas creativas y tecnología para construir una presentación a la altura de cada proyecto.</p>
        </div>
        <div className="cap-grid">
          {items.map(({ number, title, tag, description, bullets, icon: Icon, className, image }) => (
            <article className={`cap-card ${className}`} key={number}>
              <div className="cap-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(8,10,13,.05), rgba(8,10,13,.88)), url(${image})` }} />
              <div className="cap-top"><span>{number}</span><Icon size={20} strokeWidth={1.4} /></div>
              <div className="cap-content">
                <span className="cap-tag">{tag}</span>
                <h3>{title.split("\\n").map((line) => <span key={line}>{line}<br /></span>)}</h3>
                <p>{description}</p>
                <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <a href="#contact" className="cap-link">Explorar posibilidad <ArrowUpRight size={16} /></a>
              </div>
              <div className="cap-glow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
