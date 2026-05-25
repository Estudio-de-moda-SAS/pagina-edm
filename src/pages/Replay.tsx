import { useState } from "react";
import "./Replay.css";
import adnImage from "../assets/marcas/nuestro-adn.png";
import storeImage from "../assets/marcas/replay-store.jpg";

// Pilares de Replay
const pilares = [
  {
    name: "ARTESANÍA ITALIANA",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Hilo y aguja / costura */}
        <path d="M14 50 Q24 30 32 30 Q40 30 50 14" />
        {/* Aguja */}
        <line x1="48" y1="12" x2="54" y2="18" />
        <line x1="50" y1="10" x2="52" y2="12" strokeWidth="3" />
        {/* Botón al final */}
        <circle cx="14" cy="50" r="4" fill="currentColor" />
        {/* Puntadas */}
        <line x1="20" y1="42" x2="22" y2="44" />
        <line x1="26" y1="36" x2="28" y2="38" />
        <line x1="34" y1="30" x2="36" y2="32" />
        <line x1="42" y1="22" x2="44" y2="24" />
      </svg>
    ),
  },
  {
    name: "DENIM ICÓNICO",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Jean / pantalón */}
        <path
          d="M18 8 L46 8 L48 20 L42 56 L34 56 L32 30 L30 56 L22 56 L16 20 Z"
        />
        {/* Cinturilla */}
        <rect x="18" y="8" width="28" height="4" fill="#fff" />
        {/* Bolsillo */}
        <path
          d="M22 16 L26 16 L28 24 L24 24 Z"
          fill="#fff"
        />
        {/* Botón */}
        <circle cx="32" cy="14" r="1.5" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "RE-CREAR",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Flecha circular / ciclo */}
        <path d="M52 32 A20 20 0 1 1 32 12" />
        <polyline points="32 4 32 12 40 12" />
        {/* Estrella interior */}
        <polygon
          points="32 22 35 28 41 28 36 32 38 38 32 34 26 38 28 32 23 28 29 28"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    name: "ESTILO ATEMPORAL",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Reloj */}
        <circle cx="32" cy="32" r="24" />
        {/* Manecillas */}
        <line x1="32" y1="32" x2="32" y2="18" />
        <line x1="32" y1="32" x2="42" y2="36" />
        {/* Marcas de hora */}
        <line x1="32" y1="10" x2="32" y2="14" />
        <line x1="32" y1="50" x2="32" y2="54" />
        <line x1="10" y1="32" x2="14" y2="32" />
        <line x1="50" y1="32" x2="54" y2="32" />
        {/* Centro */}
        <circle cx="32" cy="32" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Replay() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="replay">
      <section className="replay-historia">
        <div className="replay-historia__container">
          {/* Contenido */}
          <div
            className={`replay-historia__content${
              expanded ? " replay-historia__content--expanded" : ""
            }`}
          >
            <h1 className="replay-historia__title">Historia</h1>

            <p className="replay-historia__text">
              En <strong>1978</strong>, el visionario empresario italiano{" "}
              <strong>Claudio Buziol</strong>, con tan solo 21 años, registra la marca{" "}
              <strong>REPLAY</strong>. El nombre proviene del concepto de "re-crear",
              "re-hacer" y "re-interpretar", una idea que se le ocurrió al ver la palabra
              en su televisor durante un partido de fútbol del Mundial.
            </p>

            <div className="replay-historia__more">
              <p className="replay-historia__text">
                En <strong>1981</strong>, Buziol funda Fashion Box S.p.A. en la ciudad de
                Asolo, en las colinas trevisanas de Italia. Desde entonces, la marca se ha
                consolidado como pionera en el diseño de jeans de alta calidad, uniendo la
                artesanía italiana con un enfoque audaz hacia la moda.
              </p>

              <p className="replay-historia__text">
                En <strong>1989</strong>, Replay reinventa los jeans con el característico
                Double Ring Denim que Buziol descubre durante un viaje a Japón. En solo
                dos años se vendieron más de un millón de unidades, convirtiéndose en la
                marca de fábrica del brand.
              </p>

              <p className="replay-historia__text">
                Hoy, Replay está presente en más de 50 países en Europa, Medio Oriente,
                Asia, América y África. La marca italiana lleva por el mundo su estilo
                auténtico y contemporáneo, tomando lo mejor del pasado y dándole un giro
                moderno.
              </p>
            </div>

            {/* Botón Leer más / Leer menos — solo visible en mobile */}
            <button
              type="button"
              className="replay-historia__toggle"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <svg
                className={`replay-historia__toggle-icon${
                  expanded ? " replay-historia__toggle-icon--open" : ""
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* Imagen */}
          <div className="replay-historia__image-wrapper">
            <img
              src={storeImage}
              alt="Tienda Replay"
              className="replay-historia__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Pilares + Nuestro ADN
          ============================================ */}
      <section className="replay-pilares">
        <div className="replay-pilares__container">
          <h2 className="replay-pilares__title">Pilares</h2>

          <div className="replay-pilares__grid">
            {pilares.map((pilar) => (
              <div key={pilar.name} className="pilar">
                <div className="pilar__icon" aria-hidden="true">
                  {pilar.icon}
                </div>
                <span className="pilar__name">{pilar.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen Nuestro ADN (texto ya integrado) */}
        <div className="replay-adn">
          <img
            src={adnImage}
            alt="Nuestro ADN - Replay"
            className="replay-adn__image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}