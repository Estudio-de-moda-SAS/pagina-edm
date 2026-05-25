import { useState } from "react";
import "./Pilatos.css";
import adnImage from "../assets/marcas/nuestro-adn.png";
import storeImage from "../assets/inicio/pilatos-store.jpg";

// Pilares de Pilatos
const pilares = [
  {
    name: "MULTIMARCA",
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
        {/* Tres etiquetas/tags representando varias marcas */}
        <path d="M10 18 L24 18 L34 28 L24 38 L10 38 Z" />
        <circle cx="16" cy="28" r="2" fill="currentColor" />
        <path d="M22 30 L36 30 L46 40 L36 50 L22 50 Z" fill="currentColor" opacity="0.15" />
        <path d="M22 30 L36 30 L46 40 L36 50 L22 50 Z" />
        <circle cx="28" cy="40" r="2" fill="currentColor" />
        <path d="M30 14 L44 14 L54 24 L44 34 L30 34 Z" fill="currentColor" opacity="0.3" />
        <path d="M30 14 L44 14 L54 24 L44 34 L30 34 Z" />
        <circle cx="36" cy="24" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "CALIDAD PREMIUM",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Sello/medalla con check */}
        <path
          d="M32 4 L36 8 L42 6 L43 12 L49 14 L47 20 L51 24 L46 28 L48 34 L42 36 L42 42 L36 42 L32 46 L28 42 L22 42 L22 36 L16 34 L18 28 L13 24 L17 20 L15 14 L21 12 L22 6 L28 8 Z"
        />
        <polyline
          points="24 24 30 30 40 18"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cinta inferior */}
        <path
          d="M24 42 L20 58 L26 54 L32 58 L38 54 L44 58 L40 42"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "EXPERIENCIA URBANA",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Bolsa de compras */}
        <path
          d="M14 22 L50 22 L48 56 L16 56 Z"
        />
        {/* Asas */}
        <path
          d="M22 22 L22 14 Q22 8 32 8 Q42 8 42 14 L42 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Detalle estrella */}
        <polygon
          points="32 32 34 38 40 38 35 42 37 48 32 44 27 48 29 42 24 38 30 38"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "TENDENCIA",
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
        {/* Gráfica/flecha hacia arriba */}
        <polyline points="8 48 22 34 32 42 50 18" />
        {/* Punta de flecha */}
        <polyline points="42 18 50 18 50 26" />
        {/* Puntos en cada vértice */}
        <circle cx="22" cy="34" r="2.5" fill="currentColor" />
        <circle cx="32" cy="42" r="2.5" fill="currentColor" />
        {/* Base */}
        <line x1="8" y1="56" x2="56" y2="56" />
      </svg>
    ),
  },
];

export default function Pilatos() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="pilatos">
      <section className="pilatos-historia">
        <div className="pilatos-historia__container">
          {/* Contenido */}
          <div
            className={`pilatos-historia__content${
              expanded ? " pilatos-historia__content--expanded" : ""
            }`}
          >
            <h1 className="pilatos-historia__title">Historia</h1>

            <p className="pilatos-historia__text">
              Pilatos nace en <strong>1984</strong> como un concepto nuevo de tienda
              multimarca con lo mejor de las marcas internacionales. Este formato
              revolucionaría y transformaría el comercio de la moda en Colombia,
              ofreciendo a los consumidores un espacio donde encontrar las propuestas más
              destacadas de la industria bajo un mismo techo.
            </p>

            <div className="pilatos-historia__more">
              <p className="pilatos-historia__text">
                Actualmente contamos con más de 70 tiendas a nivel nacional, siendo la
                cadena más grande de tiendas multimarca premium en el mercado colombiano.
                Nuestro portafolio está conformado por más de 30 marcas líderes en la
                industria de la moda como Diesel, Superdry, Replay, Kipling, Adidas, New
                Balance, entre otras.
              </p>

              <p className="pilatos-historia__text">
                Somos una marca joven, pero con mucha experiencia. Estamos a la par de las
                tendencias de la moda urbana y buscamos ofrecer a nuestros clientes
                alternativas divertidas, exclusivas y de la mejor calidad.
              </p>

              <p className="pilatos-historia__text">
                Con el potencial y el reconocimiento de las tiendas Pilatos, y nuestro
                conocimiento en el desarrollo de productos de la mejor calidad, diseño y
                transformación de la moda, nace en el año <strong>2020</strong> la marca{" "}
                <strong>PILATOS</strong>, ofreciendo un producto urbano, divertido y
                exclusivo que complementa la oferta del portafolio.
              </p>
            </div>

            {/* Botón Leer más / Leer menos — solo visible en mobile */}
            <button
              type="button"
              className="pilatos-historia__toggle"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <svg
                className={`pilatos-historia__toggle-icon${
                  expanded ? " pilatos-historia__toggle-icon--open" : ""
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
          <div className="pilatos-historia__image-wrapper">
            <img
              src={storeImage}
              alt="Tienda Pilatos"
              className="pilatos-historia__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Pilares + Nuestro ADN
          ============================================ */}
      <section className="pilatos-pilares">
        <div className="pilatos-pilares__container">
          <h2 className="pilatos-pilares__title">Pilares</h2>

          <div className="pilatos-pilares__grid">
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
        <div className="pilatos-adn">
          <img
            src={adnImage}
            alt="Nuestro ADN - Pilatos"
            className="pilatos-adn__image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}