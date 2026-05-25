import "./ProteccionDenunciante.css";

const PDF_URL =
  "https://estudiodemoda.co/wp-content/uploads/2024/01/Proteccion-al-denunciante_actualizado-comprimido.pdf";

const highlights = [
  {
    title: "Confidencialidad garantizada",
    text: "Protegemos la identidad de quienes reportan situaciones irregulares de buena fe.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Protección contra represalias",
    text: "Ningún denunciante de buena fe será sancionado, despedido ni discriminado por reportar.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Trato justo e imparcial",
    text: "Las denuncias son investigadas con rigor y objetividad por equipos competentes.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="3" x2="12" y2="21" />
        <path d="M12 6L4 9l3 7c0 1.5 2 2 5 2s5-.5 5-2l3-7-8-3z" />
        <path d="M2 9l3 7" />
        <path d="M22 9l-3 7" />
      </svg>
    ),
  },
  {
    title: "Canales seguros",
    text: "Múltiples vías oficiales para reportar de forma segura y trazable.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function ProteccionDenunciante() {
  return (
    <main className="denunciante">
      <section className="denunciante__hero">
        <div className="denunciante__container">
          {/* Header */}
          <div className="denunciante__header">
            <span className="denunciante__kicker">Información Legal</span>
            <h1 className="denunciante__title">
              Política de Protección al Denunciante
            </h1>
            <p className="denunciante__subtitle">
              En Estudio de Moda promovemos una cultura de transparencia y ética. Esta
              política garantiza que cualquier persona pueda reportar situaciones
              irregulares con total confianza y seguridad.
            </p>
          </div>

          {/* Card de descarga del PDF */}
          <div className="document-card">
            <div className="document-card__preview" aria-hidden="true">
              <div className="document-card__icon">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                  <line x1="9" y1="17" x2="15" y2="17" />
                  <line x1="9" y1="9" x2="11" y2="9" />
                </svg>
              </div>
              <span className="document-card__badge">PDF</span>
            </div>

            <div className="document-card__content">
              <span className="document-card__label">Documento oficial</span>
              <h2 className="document-card__title">
                Protección al Denunciante
              </h2>
              <p className="document-card__text">
                Conoce todos los detalles de nuestra política, los principios que la
                rigen, los canales disponibles para reportar y las garantías que
                ofrecemos a los denunciantes.
              </p>

              <div className="document-card__actions">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-card__button document-card__button--primary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                    <line x1="9" y1="11" x2="13" y2="11" />
                  </svg>
                  <span>Ver documento</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Highlights — qué encontrarás */}
          <div className="denunciante__highlights">
            <h3 className="denunciante__highlights-title">
              ¿Qué encontrarás en este documento?
            </h3>
            <div className="denunciante__highlights-grid">
              {highlights.map((h) => (
                <div key={h.title} className="highlight">
                  <div className="highlight__icon" aria-hidden="true">
                    {h.icon}
                  </div>
                  <h4 className="highlight__title">{h.title}</h4>
                  <p className="highlight__text">{h.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Final - reportar */}
          <div className="denunciante__cta">
            <div className="denunciante__cta-icon" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="denunciante__cta-body">
              <h3 className="denunciante__cta-title">
                ¿Necesitas reportar una situación?
              </h3>
              <p className="denunciante__cta-text">
                Escríbenos al canal oficial de Línea Ética. Garantizamos total
                confidencialidad sobre la información reportada.
              </p>
              <a
                href="mailto:lineaetica@estudiodemoda.com.co"
                className="denunciante__cta-button"
              >
                <span>lineaetica@estudiodemoda.com.co</span>
                <svg
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}