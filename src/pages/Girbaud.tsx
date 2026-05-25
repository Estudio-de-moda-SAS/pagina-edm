import { useState } from "react";
import "./Girbaud.css";
import adnImage from "../assets/marcas/nuestro-adn-girbaud.png";
import storeImage from "../assets/inicio/girbaud-store.jpg";

// Pilares de Girbaud
const pilares = [
  {
    name: "Sustentabilidad",
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
        {/* Sello en forma de flor */}
        <path d="M32 8 L36 12 L42 10 L43 16 L49 18 L47 24 L51 28 L46 32 L48 38 L42 40 L42 46 L36 46 L32 50 L28 46 L22 46 L22 40 L16 38 L18 32 L13 28 L17 24 L15 18 L21 16 L22 10 L28 12 Z" />
        {/* Check al centro */}
        <polyline points="26 28 30 32 38 24" />
        {/* Hojita debajo */}
        <path d="M32 50 Q28 56 24 56 Q26 50 32 50" fill="currentColor" stroke="none" />
        <path d="M32 50 Q36 56 40 56 Q38 50 32 50" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Innovación",
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
        {/* Libro abierto / caja */}
        <path d="M14 14 L50 14 L50 54 L14 54 Z" />
        <line x1="32" y1="14" x2="32" y2="54" />
        {/* Bombilla dentro */}
        <circle cx="32" cy="30" r="6" />
        <path d="M29 38 L35 38" />
        <path d="M30 41 L34 41" />
        {/* Filamento bombilla */}
        <path d="M30 28 L32 32 L34 28" />
      </svg>
    ),
  },
  {
    name: "Tecnología",
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
        {/* Microscopio */}
        {/* Brazo */}
        <path d="M28 12 L36 12 L36 28 L28 28 Z" />
        {/* Lente superior */}
        <circle cx="32" cy="10" r="3" />
        {/* Cuerpo / soporte */}
        <path d="M32 28 L32 38" />
        <circle cx="32" cy="42" r="5" />
        {/* Base */}
        <path d="M20 54 L44 54" />
        <path d="M24 54 L24 48 L40 48 L40 54" />
      </svg>
    ),
  },
  {
    name: "Funcionalidad",
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
        {/* Círculo exterior */}
        <circle cx="32" cy="32" r="24" />
        {/* Cinta / curva interior estilizada */}
        <path d="M44 20 Q32 24 28 36 Q26 42 20 44" />
        <circle cx="44" cy="20" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Girbaud() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="girbaud">
      <section className="girbaud-historia">
        <div className="girbaud-historia__container">
          {/* Contenido */}
          <div
            className={`girbaud-historia__content${
              expanded ? " girbaud-historia__content--expanded" : ""
            }`}
          >
            <h1 className="girbaud-historia__title">Historia</h1>

            <p className="girbaud-historia__text">
              En 1972 se funda en Francia, Marithé François Girbaud, por el dúo de
              diseñadores François Girbaud y Marithé Bachellerie. Este equipo inició su
              carrera en una tienda de ropa ubicada en París y desde entonces se
              interesarían en la búsqueda de nuevas técnicas para intervenir el denim, que
              fueran innovadoras y a su vez amigables con el medio ambiente. Así mismo,
              tomarían en cuenta la ergonomía y el movimiento natural del cuerpo, y en
              base a esto crean prendas con detalles técnicos que aportan comodidad,
              facilidad de uso y versatilidad en diferentes situaciones.
            </p>

            <div className="girbaud-historia__more">
              <p className="girbaud-historia__text">
                Para 1985, la marca incursiona en el mercado colombiano a través de la
                tienda multimarca Pilatos, socios comerciales y posteriormente su página
                web, ganándose un espacio en el corazón del público colombiano.
              </p>
            </div>

            {/* Botón Leer más / Leer menos — solo visible en mobile */}
            <button
              type="button"
              className="girbaud-historia__toggle"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <svg
                className={`girbaud-historia__toggle-icon${
                  expanded ? " girbaud-historia__toggle-icon--open" : ""
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
          <div className="girbaud-historia__image-wrapper">
            <img
              src={storeImage}
              alt="Tienda Girbaud"
              className="girbaud-historia__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Pilares + Nuestro ADN
          ============================================ */}
      <section className="girbaud-pilares">
        <div className="girbaud-pilares__container">
          <h2 className="girbaud-pilares__title">Pilares</h2>

          <div className="girbaud-pilares__grid">
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
        <div className="girbaud-adn">
          <img
            src={adnImage}
            alt="Nuestro ADN - Girbaud"
            className="girbaud-adn__image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}