import { useState } from "react";
import "./NotificacionesJudiciales.css";

const LEGAL = {
  razonSocial: "ESTUDIO DE MODA S.A.S.",
  nit: "890.926.803-1",
  telefono: "(604) 607 36 93",
  telefonoRaw: "+576046073693",
  direccion: "Carrera 35 # 15 B 143, Piso 9, Medellín-Colombia",
  email: "edmgeneral@estudiodemoda.com.co",
  pqrsEmail: "tiendavirtual@estudiodemoda.com.co",
};

export default function NotificacionesJudiciales() {
  const [nitCopied, setNitCopied] = useState(false);

  const handleCopyNit = async () => {
    try {
      await navigator.clipboard.writeText(LEGAL.nit);
      setNitCopied(true);
      setTimeout(() => setNitCopied(false), 2000);
    } catch (err) {
      console.error("No se pudo copiar el NIT", err);
    }
  };

  return (
    <main className="judiciales">
      <section className="judiciales__hero">
        <div className="judiciales__container">
          {/* Header */}
          <div className="judiciales__header">
            <span className="judiciales__kicker">Información Legal</span>
            <h1 className="judiciales__title">Notificaciones Judiciales</h1>
            <p className="judiciales__subtitle">
              Canal oficial para la radicación de notificaciones judiciales y asuntos legales
              dirigidos a Estudio de Moda S.A.S.
            </p>
          </div>

          {/* Grid de información */}
          <div className="judiciales__grid">
            {/* Razón social */}
            <div className="judicial-card">
              <div className="judicial-card__icon" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M19 21V11l-6-4" />
                  <path d="M9 9v.01" />
                  <path d="M9 12v.01" />
                  <path d="M9 15v.01" />
                  <path d="M9 18v.01" />
                </svg>
              </div>
              <span className="judicial-card__label">Razón social</span>
              <span className="judicial-card__value">{LEGAL.razonSocial}</span>
            </div>

            {/* NIT */}
            <div className="judicial-card">
              <div className="judicial-card__icon" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                  <line x1="10" y1="3" x2="8" y2="21" />
                  <line x1="16" y1="3" x2="14" y2="21" />
                </svg>
              </div>
              <span className="judicial-card__label">NIT</span>
              <div className="judicial-card__value-row">
                <span className="judicial-card__value">{LEGAL.nit}</span>
                <button
                  type="button"
                  className="judicial-card__copy"
                  onClick={handleCopyNit}
                  aria-label="Copiar NIT al portapapeles"
                >
                  {nitCopied ? (
                    <>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
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
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Dirección */}
            <div className="judicial-card judicial-card--wide">
              <div className="judicial-card__icon" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="judicial-card__label">Dirección judicial</span>
              <span className="judicial-card__value">{LEGAL.direccion}</span>
            </div>

            {/* Email */}
            <a
              href={`mailto:${LEGAL.email}`}
              className="judicial-card judicial-card--link"
            >
              <div className="judicial-card__icon" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
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
              <span className="judicial-card__label">Correo electrónico</span>
              <span className="judicial-card__value">{LEGAL.email}</span>
              <svg
                className="judicial-card__arrow"
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

            {/* Teléfono */}
            <a
              href={`tel:${LEGAL.telefonoRaw}`}
              className="judicial-card judicial-card--link"
            >
              <div className="judicial-card__icon" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="judicial-card__label">Teléfono</span>
              <span className="judicial-card__value">{LEGAL.telefono}</span>
              <svg
                className="judicial-card__arrow"
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

          {/* Aviso legal */}
          <div className="judicial-notice">
            <div className="judicial-notice__icon" aria-hidden="true">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="judicial-notice__body">
              <h3 className="judicial-notice__title">Importante</h3>
              <p className="judicial-notice__text">
                Este canal es de uso exclusivo para la radicación de Notificaciones
                Judiciales o demás asuntos legales por parte de entidades competentes.{" "}
                <strong>No es un canal de servicio de atención al cliente.</strong>
              </p>
              <p className="judicial-notice__text">
                Estos contactos no son un canal ni una herramienta para radicar PQRS
                (Peticiones, quejas y reclamos). Para este fin por favor escriba a{" "}
                <a
                  href={`mailto:${LEGAL.pqrsEmail}`}
                  className="judicial-notice__link"
                >
                  {LEGAL.pqrsEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}