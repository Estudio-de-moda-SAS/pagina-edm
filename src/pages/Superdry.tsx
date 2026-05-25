import { useState } from "react";
import "./Superdry.css";
import adnImage from "../assets/marcas/nuestro-adn-superdry.png";

const STORE_IMAGE =
  "https://estudiodemoda.co/wp-content/uploads/2023/02/superdry-store-2.jpg";

// Pilares de Superdry
const pilares = [
  {
    name: "Calidad Premium",
    description:
      "Materiales de primera y procesos de fabricación que aseguran durabilidad en cada prenda.",
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
        {/* Medalla / sello de calidad */}
        <circle cx="32" cy="26" r="14" />
        <circle cx="32" cy="26" r="7" />
        <path d="M22 38 L18 56 L26 50 L32 56 L38 50 L46 56 L42 38" />
      </svg>
    ),
  },
  {
    name: "Estilo Vintage",
    description:
      "Inspiración en el vintage americano combinada con los gráficos japoneses característicos.",
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
        {/* Camiseta */}
        <path d="M14 18 L24 10 L40 10 L50 18 L46 26 L40 22 L40 54 L24 54 L24 22 L18 26 Z" />
        {/* Cuello */}
        <path d="M24 10 Q32 16 40 10" />
      </svg>
    ),
  },
  {
    name: "Innovación",
    description:
      "Diseños únicos que fusionan culturas y tendencias para crear piezas auténticas.",
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
        {/* Bombilla */}
        <path d="M22 40 Q22 28 32 24 Q42 28 42 40 L40 46 L24 46 Z" />
        <line x1="26" y1="50" x2="38" y2="50" />
        <line x1="28" y1="54" x2="36" y2="54" />
        {/* Filamento */}
        <path d="M28 38 L32 32 L36 38" />
      </svg>
    ),
  },
  {
    name: "Global",
    description:
      "Una marca presente alrededor del mundo, con un estilo que trasciende fronteras.",
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
        {/* Globo */}
        <circle cx="32" cy="32" r="22" />
        <ellipse cx="32" cy="32" rx="22" ry="10" />
        <line x1="32" y1="10" x2="32" y2="54" />
      </svg>
    ),
  },
];

export default function Superdry() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="superdry">
      <section className="superdry-historia">
        <div className="superdry-historia__container">
          {/* Contenido */}
          <div
            className={`superdry-historia__content${
              expanded ? " superdry-historia__content--expanded" : ""
            }`}
          >
            <h1 className="superdry-historia__title">Historia</h1>

            <p className="superdry-historia__text">
              El origen de la marca se remonta a un viaje a Japón donde sus fundadores
              Julian Dunkerton y James Holder, fusionarían la pasión que ambos compartían
              por el vintage americano, el amor por los gráficos japoneses y agregarían ese
              característico corte del estilo inglés que finalmente daría como resultado en
              2003 la creación de SUPERDRY.
            </p>

            <div className="superdry-historia__more">
              <p className="superdry-historia__text">
                En el año 2012 la marca incursiona en el mercado colombiano y hoy en día
                cuenta con presencia en el territorio nacional a través de tiendas propias
                monomarca, tiendas multimarca Pilatos, distribución directa con socios
                comerciales y una tienda en línea.
              </p>
            </div>

            {/* Botón Leer más / Leer menos — solo visible en mobile */}
            <button
              type="button"
              className="superdry-historia__toggle"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <svg
                className={`superdry-historia__toggle-icon${
                  expanded ? " superdry-historia__toggle-icon--open" : ""
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
          <div className="superdry-historia__image-wrapper">
            <img
              src={STORE_IMAGE}
              alt="Tienda Superdry"
              className="superdry-historia__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Pilares + Nuestro ADN
          ============================================ */}
      <section className="superdry-pilares">
        <div className="superdry-pilares__container">
          <h2 className="superdry-pilares__title">Pilares</h2>

          <div className="superdry-pilares__grid">
            {pilares.map((pilar) => (
              <div key={pilar.name} className="pilar">
                <div className="pilar__icon" aria-hidden="true">
                  {pilar.icon}
                </div>
                <span className="pilar__name">{pilar.name}</span>
                <p className="pilar__description">{pilar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen Nuestro ADN (texto ya integrado) */}
        <div className="superdry-adn">
          <img
            src={adnImage}
            alt="Nuestro ADN - Superdry"
            className="superdry-adn__image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}