import { useState } from "react";
import "./LineaEtica.css";

export default function LineaEtica() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="linea-etica">
      {/* ============================================
          SECCIÓN 1 — Línea Ética EDM
          ============================================ */}
      <section className="linea-etica__hero">
        <div className="linea-etica__grid">
          {/* Columna izquierda: contenido */}
          <div className="linea-etica__content">
            <h1 className="linea-etica__title">Linea Ética EDM</h1>

            <p className="linea-etica__paragraph">
              La Linea Ética de <strong>ESTUDIO DE MODA (EDM)</strong> es un medio para
              presentar denuncias de comportamientos o situaciones que vayan en contra de la
              ética y la transparencia en el actuar de las personas que hacen parte de nuestra
              compañía, colaboradores, proveedores y todo aquel relacionado con EDM.
            </p>

            {/* CTA destacado del correo */}
            <div className="linea-etica__cta">
              <span className="linea-etica__cta-label">Reportar o denunciar</span>
              <a
                href="mailto:lineaetica@estudiodemoda.com.co"
                className="linea-etica__cta-button"
              >
                <span>lineaetica@estudiodemoda.com.co</span>
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <span className="linea-etica__cta-hint">
                Garantizamos total confidencialidad
              </span>
            </div>

            {/* Acordeón */}
            <button
              type="button"
              className="linea-etica__accordion-trigger"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="linea-etica-info"
            >
              <span>Antes de denunciar, información importante</span>
              <svg
                className={`linea-etica__chevron ${
                  isOpen ? "linea-etica__chevron--open" : ""
                }`}
                width="20"
                height="20"
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

            <div
              id="linea-etica-info"
              className={`linea-etica__accordion-content ${
                isOpen ? "linea-etica__accordion-content--open" : ""
              }`}
              role="region"
            >
              <div className="linea-etica__accordion-inner">
                <p className="linea-etica__paragraph">
                  Recuerde que en este correo no se reciben quejas, reclamos, peticiones o
                  inquietudes frente a los productos de nuestras marcas, si no de aquellas
                  acciones que estén en contra de nuestro Código ético.
                </p>

                <ul className="linea-etica__list">
                  <li>
                    No es una linea de servicio al cliente, ni una herramienta de quejas y
                    reclamos, sino de reporte por conductas que van contra la transparencia e
                    integridad de la compañía.
                  </li>
                  <li>No es para sugerencias ni atención de temas de clima laboral.</li>
                  <li>
                    El canal de denuncias debe ser utilizado con responsabilidad, los hechos
                    reportados deben ser reales y pueden ser sancionados.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Columna derecha: imagen */}
          <div className="linea-etica__image-wrapper">
            <img
              src="https://estudiodemoda.co/wp-content/uploads/2023/03/LINEA-ETICA.jpg"
              alt="Linea Ética EDM"
              className="linea-etica__image"
            />
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 2 — Manual de Sagrilaft
          ============================================ */}
      <section className="sagrilaft">
        <div className="sagrilaft__grid">
          {/* Columna izquierda: imagen con decoraciones */}
          <div className="sagrilaft__image-wrapper">
            {/* Decoraciones azules de fondo */}
            <span className="sagrilaft__deco sagrilaft__deco--top" aria-hidden="true" />
            <span className="sagrilaft__deco sagrilaft__deco--right" aria-hidden="true" />
            <span className="sagrilaft__deco sagrilaft__deco--bottom" aria-hidden="true" />

            <div className="sagrilaft__image-frame">
              <img
                src="https://estudiodemoda.co/wp-content/uploads/2023/03/politica-sacri.png"
                alt="Política Sagrilaft - Equipo de Estudio de Moda"
                className="sagrilaft__image"
              />
            </div>
          </div>

          {/* Columna derecha: contenido */}
          <div className="sagrilaft__content">
            <h2 className="sagrilaft__title">Manual de Sagrilaft</h2>
            <p className="sagrilaft__subtitle">
              Sistema de Autocontrol y Gestión del Riesgo de Lavado de Activos y Financiación
              del Terrorismo
            </p>

            <a
              href="https://estudiodemoda.co/wp-content/uploads/2023/03/MANUAL-DE-SACRILAFT.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sagrilaft__button"
            >
              <svg
                width="20"
                height="20"
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
              <span>Ver manual de Sagrilaft</span>
              <svg
                className="sagrilaft__button-arrow"
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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <span className="sagrilaft__hint">PDF · Se abre en una nueva ventana</span>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 3 — Política de Tratamiento de Datos
          ============================================ */}
      <section className="sagrilaft sagrilaft--reverse">
        <div className="sagrilaft__grid">
          {/* Columna izquierda: contenido */}
          <div className="sagrilaft__content">
            <h2 className="sagrilaft__title">Política de Tratamiento de Datos EDM</h2>
            <p className="sagrilaft__subtitle">
              Conjunto de normas y procedimientos que regulan la recopilación, uso,
              almacenamiento y divulgación de información personal.
            </p>

            <a
              href="https://estudiodemoda.co/wp-content/uploads/2025/01/PDTDP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sagrilaft__button"
            >
              <svg
                width="20"
                height="20"
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
              <span>Ver política de tratamiento</span>
              <svg
                className="sagrilaft__button-arrow"
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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <span className="sagrilaft__hint">PDF · Se abre en una nueva ventana</span>
          </div>

          {/* Columna derecha: imagen con decoraciones */}
          <div className="sagrilaft__image-wrapper">
            <span className="sagrilaft__deco sagrilaft__deco--top" aria-hidden="true" />
            <span className="sagrilaft__deco sagrilaft__deco--right" aria-hidden="true" />
            <span className="sagrilaft__deco sagrilaft__deco--bottom" aria-hidden="true" />

            <div className="sagrilaft__image-frame">
              <img
                src="https://estudiodemoda.co/wp-content/uploads/2023/03/politica-tratamiento-de-dtos.png"
                alt="Política de Tratamiento de Datos Personales - Equipo de Estudio de Moda"
                className="sagrilaft__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 4 — Política Anticorrupción y Antisoborno
          ============================================ */}
      <section className="sagrilaft">
        <div className="sagrilaft__grid">
          {/* Columna izquierda: imagen (sin decoraciones, ya las trae) */}
          <div className="sagrilaft__image-wrapper sagrilaft__image-wrapper--clean">
            <div className="sagrilaft__image-frame">
              <img
                src="https://estudiodemoda.co/wp-content/uploads/2023/07/politica-transparenciayetica-1024x893.png"
                alt="Política de Transparencia y Ética Empresarial - Estudio de Moda"
                className="sagrilaft__image sagrilaft__image--contain"
              />
            </div>
          </div>

          {/* Columna derecha: contenido */}
          <div className="sagrilaft__content sagrilaft__content--wide">
            <h2 className="sagrilaft__title">Política Anticorrupción y Antisoborno</h2>

            <p className="sagrilaft__paragraph">
              <strong>ESTUDIO DE MODA</strong> ha asumido un compromiso activo tendiente al
              rechazo de cualquier conducta relacionada con el Soborno Transnacional y la
              corrupción, toda vez que es consciente de las consecuencias legales y
              reputacionales de incurrir en esta conducta. Por lo tanto, Estudio de Moda
              prohibe el Soborno Transnacional y la corrupción en cualquiera de sus formas, ya
              sea directo o indirecto.
            </p>

            <p className="sagrilaft__paragraph">
              Este compromiso se entiende asumido por todas las personas que tengan algún tipo
              de relación con Estudio de Moda, en cualquier calidad, sea esta como Empleado,
              proveedor, Contratista, incluso Clientes.
            </p>

            <a
              href="https://estudiodemoda.co/wp-content/uploads/2024/04/nPL-Codigo-de-Etica-22-04_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sagrilaft__button"
            >
              <svg
                width="20"
                height="20"
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
              <span>Ver política anticorrupción</span>
              <svg
                className="sagrilaft__button-arrow"
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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <span className="sagrilaft__hint">PDF · Se abre en una nueva ventana</span>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 5 — Código de Ética y Buen Gobierno
          (texto izquierda, imagen derecha)
          ============================================ */}
      <section className="sagrilaft sagrilaft--reverse">
        <div className="sagrilaft__grid">
          {/* Columna izquierda: contenido */}
          <div className="sagrilaft__content sagrilaft__content--wide">
            <h2 className="sagrilaft__title">Código de Ética y Buen Gobierno</h2>

            <p className="sagrilaft__paragraph">
              Estudio de Moda S.A.S, considera la ética como la disciplina que argumenta y
              fundamenta racionalmente lo que se debe hacer bien para lograr el buen, eficiente
              y eficaz funcionamiento de las actividades de su objeto social.
            </p>

            <p className="sagrilaft__paragraph">
              Somos una empresa donde los valores, el respeto a las leyes, autoridades,
              compromisos y personas hacen parte esencial de las normas y principios de la
              organización establecidos en el <strong>CÓDIGO DE ÉTICA Y BUEN GOBIERNO</strong>.
            </p>

            <a
              href="https://estudiodemoda.co/wp-content/uploads/2024/04/nPL-Codigo-de-Etica-22-04_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sagrilaft__button"
            >
              <svg
                width="20"
                height="20"
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
              <span>Ver código de ética</span>
              <svg
                className="sagrilaft__button-arrow"
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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <span className="sagrilaft__hint">PDF · Se abre en una nueva ventana</span>
          </div>

          {/* Columna derecha: imagen */}
          <div className="sagrilaft__image-wrapper sagrilaft__image-wrapper--clean">
            <div className="sagrilaft__image-frame">
              <img
                src="https://estudiodemoda.co/wp-content/uploads/2023/07/codigo-etica-buen-gobierno-1024x940.png"
                alt="Código de Ética y Buen Gobierno - Estudio de Moda"
                className="sagrilaft__image sagrilaft__image--contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 6 — Compromiso de la Alta Dirección
          (imagen izquierda, texto derecha)
          ============================================ */}
      <section className="sagrilaft">
        <div className="sagrilaft__grid">
          {/* Columna izquierda: imagen */}
          <div className="sagrilaft__image-wrapper sagrilaft__image-wrapper--clean sagrilaft__image-wrapper--wide">
            <div className="sagrilaft__image-frame">
              <img
                src="https://estudiodemoda.co/wp-content/uploads/2023/12/Captura-de-Pantalla-2023-12-27-a-las-8.41.44-a.-m-1024x653.png"
                alt="Compromiso de la Alta Dirección - Estudio de Moda"
                className="sagrilaft__image sagrilaft__image--contain"
              />
            </div>
          </div>

          {/* Columna derecha: contenido */}
          <div className="sagrilaft__content">
            <h2 className="sagrilaft__title">Compromiso de la Alta Dirección</h2>

            <p className="sagrilaft__paragraph">
              Estudio de Moda S.A.S declara su compromiso con la implementación, mantenimiento
              y mejora continua de las políticas de transparencia, ética empresarial y
              prevención de riesgos en todos los niveles de la organización.
            </p>

            <a
              href="https://estudiodemoda.co/wp-content/uploads/2023/12/COMPROMISO-ALTA-GESTION-comprimido.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sagrilaft__button"
            >
              <svg
                width="20"
                height="20"
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
              <span>Ver compromiso</span>
              <svg
                className="sagrilaft__button-arrow"
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
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            <span className="sagrilaft__hint">PDF · Se abre en una nueva ventana</span>
          </div>
        </div>
      </section>
    </main>
  );
}