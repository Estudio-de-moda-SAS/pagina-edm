import { useState } from "react";
import "./Kipling.css";
import adnImage from "../assets/marcas/nuestro-adn-kipling.png";

const STORE_IMAGE =
  "https://estudiodemoda.co/wp-content/uploads/2023/02/kiplinh-store-1024x682.jpg";

// Pilares de Kipling
const pilares = [
  {
    name: "SÉ QUIEN ERES",
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
        {/* Cara con estrellas en los ojos */}
        <circle cx="32" cy="32" r="26" />
        {/* Estrellas como ojos */}
        <polygon
          points="22 22 23.5 25 26.5 25 24 27 25 30 22 28 19 30 20 27 17.5 25 20.5 25"
          fill="currentColor"
          stroke="none"
        />
        <polygon
          points="42 22 43.5 25 46.5 25 44 27 45 30 42 28 39 30 40 27 37.5 25 40.5 25"
          fill="currentColor"
          stroke="none"
        />
        {/* Sonrisa */}
        <path d="M22 40 Q32 50 42 40" />
      </svg>
    ),
  },
  {
    name: "ESTILO CASUAL",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Cara feliz sólida */}
        <circle cx="32" cy="32" r="26" />
        {/* Ojos */}
        <ellipse cx="22" cy="26" rx="2.5" ry="3.5" fill="#fff" />
        <ellipse cx="42" cy="26" rx="2.5" ry="3.5" fill="#fff" />
        {/* Sonrisa abierta */}
        <path
          d="M18 36 Q32 52 46 36 Q40 42 32 42 Q24 42 18 36 Z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "DISFRUTAR LOS MOMENTOS",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Copa izquierda */}
        <path d="M12 12 L24 12 L22 28 Q18 32 14 28 Z" />
        <line
          x1="18"
          y1="32"
          x2="14"
          y2="52"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="54"
          x2="20"
          y2="54"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Copa derecha */}
        <path d="M40 12 L52 12 L50 28 Q46 32 42 28 Z" />
        <line
          x1="46"
          y1="32"
          x2="50"
          y2="52"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="44"
          y1="54"
          x2="56"
          y2="54"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "CURIOSIDAD URBANA.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Edificio izquierdo (alto) */}
        <rect x="10" y="20" width="20" height="36" />
        {/* Edificio derecho (más alto, con triángulo arriba) */}
        <rect x="32" y="10" width="22" height="46" />
        {/* Ventanas edificio izquierdo */}
        <rect x="14" y="26" width="3" height="3" fill="#fff" />
        <rect x="20" y="26" width="3" height="3" fill="#fff" />
        <rect x="14" y="34" width="3" height="3" fill="#fff" />
        <rect x="20" y="34" width="3" height="3" fill="#fff" />
        <rect x="14" y="42" width="3" height="3" fill="#fff" />
        <rect x="20" y="42" width="3" height="3" fill="#fff" />
        {/* Ventanas edificio derecho */}
        <rect x="37" y="16" width="3" height="3" fill="#fff" />
        <rect x="44" y="16" width="3" height="3" fill="#fff" />
        <rect x="37" y="24" width="3" height="3" fill="#fff" />
        <rect x="44" y="24" width="3" height="3" fill="#fff" />
        <rect x="37" y="32" width="3" height="3" fill="#fff" />
        <rect x="44" y="32" width="3" height="3" fill="#fff" />
        <rect x="37" y="40" width="3" height="3" fill="#fff" />
        <rect x="44" y="40" width="3" height="3" fill="#fff" />
      </svg>
    ),
  },
];

export default function Kipling() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="kipling">
      <section className="kipling-historia">
        <div className="kipling-historia__container">
          {/* Contenido */}
          <div
            className={`kipling-historia__content${
              expanded ? " kipling-historia__content--expanded" : ""
            }`}
          >
            <h1 className="kipling-historia__title">Historia</h1>

            <p className="kipling-historia__text">
              En 1987 tres empresarios belgas Paul Van de Velde, Vincent Haverbeke y Xavier
              Kegels, revolucionaron al mundo con bolsos funcionales, pero con estilo y
              alta calidad.
            </p>

            <div className="kipling-historia__more">
              <p className="kipling-historia__text">
                Inspirados por sus viajes alrededor del mundo y ese espíritu aventurero
                decidieron nombrar a la marca KIPLING, debido al famoso escritor y viajero
                Rudyard Kipling, quien es ampliamente conocido por ser el autor de "El
                libro de la selva".
              </p>

              <p className="kipling-historia__text">
                A partir del año 2000, la marca inicia su comercialización en el territorio
                colombiano a través de tiendas propias, tiendas multimarca y su propio
                sitio web.
              </p>
            </div>

            {/* Botón Leer más / Leer menos — solo visible en mobile */}
            <button
              type="button"
              className="kipling-historia__toggle"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <svg
                className={`kipling-historia__toggle-icon${
                  expanded ? " kipling-historia__toggle-icon--open" : ""
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
          <div className="kipling-historia__image-wrapper">
            <img
              src={STORE_IMAGE}
              alt="Tienda Kipling"
              className="kipling-historia__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Pilares + Nuestro ADN
          ============================================ */}
      <section className="kipling-pilares">
        <div className="kipling-pilares__container">
          <h2 className="kipling-pilares__title">Pilares</h2>

          <div className="kipling-pilares__grid">
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
        <div className="kipling-adn">
          <img
            src={adnImage}
            alt="Nuestro ADN - Kipling"
            className="kipling-adn__image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}