import { useState } from "react";
import "./New-balance.css";
import adnImage from "../assets/marcas/nuestro-adn-new-balance.png";

const STORE_IMAGE =
  "https://estudiodemoda.co/wp-content/uploads/2023/02/new-balance-store.jpg";

// Pilares de New Balance
const pilares = [
  {
    name: "NACIMOS PARA MOVERNOS",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Maleta con ruedas */}
        {/* Asa */}
        <path
          d="M22 14 L22 8 L42 8 L42 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Cuerpo de la maleta */}
        <rect x="14" y="14" width="36" height="32" rx="2" />
        {/* Línea horizontal del cuerpo */}
        <line
          x1="14"
          y1="24"
          x2="50"
          y2="24"
          stroke="#fff"
          strokeWidth="2"
        />
        {/* Plataforma con ruedas */}
        <rect x="8" y="48" width="48" height="4" />
        <circle cx="16" cy="56" r="3" />
        <circle cx="48" cy="56" r="3" />
      </svg>
    ),
  },
  {
    name: "APOYAMOS A LOS ATLETAS",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Cintas de la medalla */}
        <polygon
          points="22 6 30 28 24 28 18 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <polygon
          points="42 6 34 28 40 28 46 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Medalla circular */}
        <circle cx="32" cy="42" r="14" />
        {/* Estrella dentro */}
        <polygon
          points="32 34 34 40 40 40 35 44 37 50 32 46 27 50 29 44 24 40 30 40"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    name: "DESARROLLO TECNOLÓGICO",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        {/* Engranaje grande */}
        <g transform="translate(22 22)">
          <path
            d="M10 -2 L13 -2 L14 -6 L18 -8 L21 -6 L24 -4 L28 -5 L30 -2 L29 2 L31 5 L29 8 L26 8 L24 12 L20 14 L17 12 L14 13 L12 12 L10 10 L8 8 L4 9 L2 6 L3 2 L1 -1 L3 -4 L6 -4 Z"
            transform="translate(-4 -4)"
          />
          <circle cx="14" cy="6" r="5" fill="#fff" />
        </g>
        {/* Engranaje pequeño arriba a la derecha */}
        <g transform="translate(40 8)">
          <circle cx="8" cy="8" r="8" />
          <circle cx="8" cy="8" r="3" fill="#fff" />
          <rect x="7" y="-1" width="2" height="3" />
          <rect x="7" y="14" width="2" height="3" />
          <rect x="-1" y="7" width="3" height="2" />
          <rect x="14" y="7" width="3" height="2" />
        </g>
      </svg>
    ),
  },
];

export default function NewBalance() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="newbalance">
      <section className="newbalance-historia">
        <div className="newbalance-historia__container">
          {/* Contenido */}
          <div
            className={`newbalance-historia__content${
              expanded ? " newbalance-historia__content--expanded" : ""
            }`}
          >
            <h1 className="newbalance-historia__title">Historia</h1>

            <p className="newbalance-historia__text">
              En 1906 William J. Riley a partir de su observación en el balance y
              desplazamiento de la gallina, crea soportes para el arco del pie y así
              mejorar el ajuste de los zapatos y la salud de sus consumidores.
            </p>

            <div className="newbalance-historia__more">
              <p className="newbalance-historia__text">
                Para 1938 confeccionan las primeras zapatillas de carreras. Cuatro años
                después y con un gran trabajo e investigación detrás, lanzan las
                Tracksters, las primeras zapatillas ofrecidas en diferentes anchos en el
                mundo.
              </p>

              <p className="newbalance-historia__text">
                Jim Davis compra la compañía en 1972, el mismo día de la maratón de Boston
                y junto a su equipo dieron un nuevo aire a la marca, cambiando desde el
                diseño de sus productos hasta el logo de la marca, por la característica
                "N".
              </p>

              <p className="newbalance-historia__text">
                Hoy somos la tercera marca multideportiva a nivel global. Con 111 años de
                experiencia, lideramos el segmento de ropa y calzado en las categorías
                deportivas y urbanas, donde la calidad, el rendimiento, la investigación y
                el desarrollo tecnológico son nuestros valores más importantes.
              </p>

              <p className="newbalance-historia__text">
                Las operaciones en territorio colombiano empezaron en el año 2000, a
                través de la modalidad de franquicia, con distribución en tiendas propias,
                socios comerciales y nuestro sitio web.
              </p>
            </div>

            {/* Botón Leer más / Leer menos — solo visible en mobile */}
            <button
              type="button"
              className="newbalance-historia__toggle"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <svg
                className={`newbalance-historia__toggle-icon${
                  expanded ? " newbalance-historia__toggle-icon--open" : ""
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
          <div className="newbalance-historia__image-wrapper">
            <img
              src={STORE_IMAGE}
              alt="Tienda New Balance"
              className="newbalance-historia__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Pilares + Nuestro ADN
          ============================================ */}
      <section className="newbalance-pilares">
        <div className="newbalance-pilares__container">
          <h2 className="newbalance-pilares__title">Pilares</h2>

          <div className="newbalance-pilares__grid">
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
        <div className="newbalance-adn">
          <img
            src={adnImage}
            alt="Nuestro ADN - New Balance"
            className="newbalance-adn__image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}