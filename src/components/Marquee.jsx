export default function Marquee() {
  const words = ["IMAGINAR", "VISUALIZAR", "EXPERIMENTAR", "PROYECTAR"];
  return (
    <div className="marquee" aria-label="Imaginar, visualizar, experimentar, proyectar">
      <div className="marquee-track">
        {[...words, ...words].map((word, i) => <span key={i}>{word}<b>✳</b></span>)}
      </div>
    </div>
  );
}
