import { ArrowUpRight, ArrowDown } from "lucide-react";
import { MockFrame } from "react-mockframe";
import "react-mockframe/styles/mockframe.css";
import GaussianViewer from "./GaussianViewer";
import { useState, useCallback } from "react";

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleProgress = useCallback((percent) => {
    setProgress(percent);
  }, []);

  const handleLoaded = useCallback(() => {
    setProgress(100);
    setIsLoading(false);
  }, []);

  return (
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-grid" />
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="container hero-content">
        <div className="first">
          <div className="eyebrow">
            <span className="status-dot" />
            REAL ESTATE · INNOVACIÓN · TECNOLOGÍA
          </div>

          <h1>
            Mostrá<br />
            el <em>futuro</em>
            <span className="outline-word"> HOY.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Transformamos planos y terrenos en experiencias visuales
              que permiten descubrir un proyecto antes de que exista.
            </p>

            <a className="see-demo-button" href="https://effilms.com.ar/inmersive">Ver demo <ArrowUpRight size={18} /></a>
          </div>
          <button className="round-link" href="#manifesto" aria-label="Descubrir">
              <ArrowDown size={20} />
          </button>
        </div>

        <div className="second">
          <div className="model-loading">
            <span>
              {isLoading
                ? `Cargando modelo: ${Math.round(progress)}%`
                : "Modelo cargado"}
            </span>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
          </div>

          <MockFrame
            device="iPhone 17"
            color="mist-blue"
            width={300}
            height={600}
          >
            <GaussianViewer
              src="/assets/itaim-ii.ksplat"
              onProgress={handleProgress}
              onLoaded={handleLoaded}
            />
          </MockFrame>
        </div>
      </div>

      <div className="hero-side-label">
        HACE VISIBLE EL FUTURO
      </div>

      <a className="hero-scroll" href="#manifesto">
        <span />
        SCROLLEA PARA EXPLORAR
      </a>

      <div className="hero-corner">
        <span>· DE MAR DEL PLATA A TODO EL MUNDO</span>
      </div>
    </section>
  );
}