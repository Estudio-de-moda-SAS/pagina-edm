import { useState } from "react";
import "./Diesel.css";
import adnImage from "../assets/marcas/nuestro-adn.png";

const HERO_IMAGE =
  "https://estudiodemoda.co/wp-content/uploads/2023/02/diesel-colombia-tienda-1536x836.jpeg";

// Pilares de Diesel
const pilares = [
  {
    name: "Inspiradora",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="28" />
        {/* Gafas de sol */}
        <path d="M14 26 L26 26 L26 34 Q26 38 22 38 L18 38 Q14 38 14 34 Z" fill="currentColor" />
        <path d="M38 26 L50 26 L50 34 Q50 38 46 38 L42 38 Q38 38 38 34 Z" fill="currentColor" />
        <line x1="26" y1="28" x2="38" y2="28" />
        {/* Sonrisa */}
        <path d="M22 44 Q32 52 42 44" />
      </svg>
    ),
  },
  {
    name: "Valiente",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="28" />
        <circle cx="22" cy="26" r="3" fill="#fff" />
        <circle cx="42" cy="26" r="3" fill="#fff" />
        <path
          d="M20 38 Q32 50 44 38"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Espíritu Joven",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Techo de tienda */}
        <path d="M8 22 L32 8 L56 22" />
        {/* Cuerpo */}
        <path d="M12 22 L12 56 L52 56 L52 22" />
        {/* Toldo */}
        <path d="M12 22 L12 28 L52 28 L52 22" fill="currentColor" />
        {/* Puerta */}
        <rect x="26" y="38" width="12" height="18" />
        <circle cx="35" cy="47" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Inesperado",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="32" cy="32" r="28" />
        {/* Cabeza */}
        <circle cx="32" cy="20" r="4" fill="currentColor" />
        {/* Brazos abiertos */}
        <line x1="14" y1="32" x2="50" y2="32" />
        {/* Cuerpo */}
        <line x1="32" y1="26" x2="32" y2="44" />
        {/* Piernas */}
        <line x1="32" y1="44" x2="24" y2="54" />
        <line x1="32" y1="44" x2="40" y2="54" />
      </svg>
    ),
  },
];

export default function Diesel() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main className="diesel">
      <section className="diesel-historia">
        <div className="diesel-historia__container">
          {/* Contenido */}
          <div
            className={`diesel-historia__content${
              expanded ? " diesel-historia__content--expanded" : ""
            }`}
          >
            <h1 className="diesel-historia__title">Historia</h1>

            <p className="diesel-historia__text">
              Diesel nace en el año 1978 de la mano de Renzo Rosso, un visionario diseñador
              que a los 15 años empezó a crear sus propios jeans usando la máquina de coser
              de su madre. Experimentó con muchos materiales, hasta que produjo algunos
              pares para sus amigos de colegio. Renzo se concentró en hacer que los jeans
              fueran de uso casual, ya que hasta en ese momento, solo se usaban como ropa
              de trabajo.
            </p>

            <div className="diesel-historia__more">
              <p className="diesel-historia__text">
                El nombre DIESEL fue escogido por su fácil recordación y pronunciación, a
                su vez que en aquel tiempo el diesel era considerado una posible energía
                alternativa frente a la crisis de combustibles, por lo que el nombre
                también representaba una alternativa en la ropa casual.
              </p>

              <p className="diesel-historia__text">
                En 1991 se lanzó la primera campaña publicitaria "For Successful Living"
                estableciendo instantáneamente una reputación innovadora en el mercado.
              </p>

              <p className="diesel-historia__text">
                Con presencia en Colombia desde 1989, Diesel se ha establecido como una
                marca premium líder en el mercado y actualmente cuenta con tiendas
                monomarca, distribución directa a través de socios comerciales y un sitio
                web de eCommerce donde se pueden adquirir todos los productos.
              </p>
            </div>

            {/* Botón Leer más / Leer menos — solo visible en mobile */}
            <button
              type="button"
              className="diesel-historia__toggle"
              onClick={() => setExpanded((p) => !p)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Leer menos" : "Leer más"}</span>
              <svg
                className={`diesel-historia__toggle-icon${
                  expanded ? " diesel-historia__toggle-icon--open" : ""
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
          <div className="diesel-historia__image-wrapper">
            <img
              src={HERO_IMAGE}
              alt="Tienda Diesel"
              className="diesel-historia__image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Pilares + Nuestro ADN
          ============================================ */}
      <section className="diesel-pilares">
        <div className="diesel-pilares__container">
          <h2 className="diesel-pilares__title">Pilares</h2>

          <div className="diesel-pilares__grid">
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
        <div className="diesel-adn">
          <img
            src={adnImage}
            alt="Nuestro ADN - Diesel"
            className="diesel-adn__image"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}