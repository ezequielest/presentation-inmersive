import { ArrowRight, Layers3, ScanLine, Play, PanelsTopLeft } from "lucide-react";

const steps = [
  { n: "01", title: "La visión", text: "Partimos de planos, referencias, renders, documentación y objetivos del desarrollo.", icon: Layers3 },
  { n: "02", title: "El universo", text: "Definimos el lenguaje visual y seleccionamos las tecnologías que mejor cuentan el proyecto.", icon: ScanLine },
  { n: "03", title: "La experiencia", text: "Producimos imágenes, films, entornos digitales y experiencias interactivas.", icon: Play },
  { n: "04", title: "La presentación", text: "Integramos los entregables en una herramienta pensada para comunicar y comercializar.", icon: PanelsTopLeft },
];

export default function Workflow() {
  return (
    <section className="section workflow" id="workflow">
      <div className="container">
        <div className="section-kicker"><span>03</span> / UNA EXPERIENCIA 100% INTEGRADA</div>
        <div className="section-heading">
          <div><p className="overline">DESDE EL CONCEPTO A LA IMPLEMENTACIÓN</p><h2>Un proyecto.<br /><span className="gradient-text">Múltiples dimensiones.</span></h2></div>
          <p className="section-intro">No son servicios aislados. Son herramientas que se conectan para crear una presentación integral, diseñada alrededor de cada desarrollo.</p>
        </div>
        <div className="workflow-panel">
          <div className="workflow-art">
            <div className="wire-ring ring-a" /><div className="wire-ring ring-b" /><div className="wire-ring ring-c" />
            <div className="wire-core"><span>EFF</span><small>PROJECT<br />UNIVERSE</small></div>
            <span className="art-label art-label-a">VISUAL</span><span className="art-label art-label-b">SPATIAL</span><span className="art-label art-label-c">IMMERSIVE</span>
            <div className="art-coord">SYSTEM 01<br />INTEGRATED OUTPUT</div>
          </div>
          <div className="steps">
            {steps.map(({ n, title, text, icon: Icon }, i) => (
              <div className="step" key={n}>
                <div className="step-icon"><Icon size={19} /></div>
                <div className="step-copy"><span>STEP {n}</span><h3>{title}</h3><p>{text}</p></div>
                {i < 3 && <ArrowRight className="step-arrow" size={17} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
