import { useState } from "react";
import "./PoliticaCookies.css";

// Contenido estructurado como secciones colapsables
const sections = [
  {
    id: "que-son",
    question: "¿Qué son y qué no son las cookies/datos de navegación?",
    content: (
      <>
        <p>
          Las cookies/datos de navegación son pequeños archivos de información o fragmentos
          de texto enviados por un Portal o Aplicación tecnológica de propiedad de{" "}
          <strong>ESTUDIO DE MODA S.A.S</strong> o alguna de sus sociedades controladas o que
          se encuentren bajo el mismo nivel de control (en adelante Portales y Aplicaciones
          EDM) y que se almacenan en el navegador o dispositivo del usuario.
        </p>
        <p>
          A través de las cookies, los Portales recuerdan información sobre la visita de los
          usuarios, lo que permite que se proporcione una mejor y más segura experiencia de
          navegación en el mismo. Las cookies se asocian tanto a usuarios anónimos, es decir,
          aquellos que visitan los Portales sin identificarse o registrarse, como aquellos
          que sí lo hacen.
        </p>
        <p>
          Por otro lado, las cookies <strong>no son un virus</strong> o cualquier otro tipo
          de programa malicioso que pueda dañar dispositivos de los usuarios. Adicionalmente,
          las cookies no pueden borrar ni leer información del computador o dispositivo de
          los usuarios.
        </p>
      </>
    ),
  },
  {
    id: "como-obtiene",
    question: "¿Cómo obtiene EDM las cookies?",
    content: (
      <p>
        Las cookies se crean y/o actualizan en el computador o dispositivo del usuario de
        manera automática, cuando éste accede a un Portal de EDM, lo cual permite a EDM o a
        las terceras personas que este contrate, realizar seguimiento a las cookies del
        usuario y por ende a la información que estas cookies contienen u obtienen del
        usuario. Es importante aclarar que las cookies solo son leídas por el sitio web que
        las creó.
      </p>
    ),
  },
  {
    id: "tipos",
    question: "¿Qué clase de cookies utiliza EDM y para qué las utiliza?",
    content: (
      <>
        <div className="cookie-type">
          <h4 className="cookie-type__title">Cookies Esenciales</h4>
          <p>
            Estas cookies son esenciales para el uso del Portal, en el sentido de facilitar
            el proceso de registro en el mismo, así como permitir a los usuarios un acceso
            más rápido y seguro a los servicios seleccionados dentro del Portal. Sin estas
            cookies, es posible que EDM no les pueda ofrecer a los usuarios ciertos
            servicios dentro del Portal y éste puede que no funcione con normalidad.
          </p>
        </div>

        <div className="cookie-type">
          <h4 className="cookie-type__title">Cookies Funcionales</h4>
          <p>
            Mediante el uso de las cookies funcionales, es posible para EDM o el tercero
            que este contrate, personalizar los servicios que se ofrecen en el Portal,
            facilitando a cada usuario información que es o puede ser de su interés, en
            atención al uso que realiza de los servicios y a las páginas específicas que
            visita dentro del Portal.
          </p>
        </div>

        <div className="cookie-type">
          <h4 className="cookie-type__title">Cookies de Publicidad</h4>
          <p>
            EDM o el tercero que este contrate, mediante el uso de estas cookies, podrá
            entregarle al usuario publicidad que considere que puede llegar a ser de su
            interés, según las preferencias y comportamientos que el usuario tiene o ha
            tenido dentro de la red de Portales de EDM. Las cookies de publicidad podrán
            ser entregadas a anunciantes de EDM, para que sean utilizadas por estos para
            sus campañas de mercadeo y publicidad.
          </p>
        </div>

        <div className="cookie-type">
          <h4 className="cookie-type__title">Cookies de Análisis o Desempeño</h4>
          <p>
            A través de las cookies de análisis o desempeño, EDM o el tercero que éste
            contrate, puede realizar distintos análisis y estudios de la información
            recolectada, con el fin de mejorar los productos y servicios que EDM ofrece a
            los usuarios.
          </p>
        </div>

        <p className="cookie-note">
          EDM y los terceros con los que contrate servicios para el uso de cookies, son los
          únicos que podrán acceder a la información almacenada en las cookies que se han
          instalado dentro del equipo del usuario.
        </p>
      </>
    ),
  },
  {
    id: "deshabilitar",
    question: "¿Puedo deshabilitar la instalación y uso de cookies por parte de EDM?",
    content: (
      <>
        <p>
          El usuario puede deshabilitar tanto la instalación de las cookies como el uso de
          las mismas por parte de EDM. Para deshabilitar la instalación y uso de cookies el
          usuario deberá realizar el procedimiento por navegador tal como se indica a
          continuación:
        </p>

        <ul className="browser-list">
          <li>
            <strong>Internet Explorer:</strong> Herramientas → Opciones de Internet →
            Privacidad → Configuración.
          </li>
          <li>
            <strong>Firefox:</strong> Herramientas → Opciones → Privacidad → Historial →
            Configuración Personalizada.
          </li>
          <li>
            <strong>Chrome:</strong> Configuración → Mostrar opciones avanzadas → Privacidad
            → Configuración de contenido.
          </li>
          <li>
            <strong>Safari:</strong> Preferencias → Seguridad.
          </li>
        </ul>

        <p>
          Los sistemas de opt-out indicados anteriormente pueden conllevar que se instale en
          su equipo una cookie "de rechazo" para que funcione su elección de desactivación.
        </p>

        <p>
          Adicionalmente, existen otras herramientas de terceros, disponibles online, que
          permiten a los usuarios detectar las cookies en cada sitio web que visita y
          gestionar su desactivación, por ejemplo:
        </p>

        <ul className="tools-list">
          <li>
            <strong>Ghostery:</strong>{" "}
            <a
              href="http://www.ghostery.com/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              ghostery.com/faq
            </a>
          </li>
          <li>
            <strong>Vanilla Cookie Manager:</strong>{" "}
            <a
              href="https://chrome.google.com/webstore/detail/vanilla-cookie-manager/"
              target="_blank"
              rel="noopener noreferrer"
            >
              chrome.google.com
            </a>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "consecuencias",
    question: "¿Qué ocurre si se deshabilitan las cookies?",
    content: (
      <>
        <p>
          Si el usuario deshabilita la instalación o el uso de las cookies para los
          Portales, podrá perder o afectar algunas funcionalidades del sitio, como por
          ejemplo:
        </p>
        <ol className="numbered-list">
          <li>
            Poder ingresar a los Portales sin necesidad de indicar en cada ocasión su
            usuario y contraseña, esto le ahorrará tiempo y le permitirá utilizar
            funcionalidades como boletines, alertas, noticias guardadas, entre otros.
          </li>
          <li>Publicación de comentarios dentro de los Portales.</li>
          <li>Acceso al contenido sin restricción dentro de los Portales.</li>
          <li>Seguridad en el uso de la información que se ingresa en los Portales.</li>
          <li>Rapidez en el uso de algún servicio dentro de los Portales.</li>
        </ol>
      </>
    ),
  },
  {
    id: "compartir",
    question: "¿EDM comparte la información obtenida a través de las cookies con terceros?",
    content: (
      <p>
        EDM podrá compartir información obtenida a través de las cookies con personas
        externas o terceros (aliados, clientes, proveedores o empresas vinculadas a EDM),
        con el fin de mejorar la usabilidad y servicios al usuario. Así mismo, la información
        que se recibe a través de las cookies será utilizada por EDM y los anteriores
        terceros, para los fines descritos en el presente documento, los indicados en
        nuestra Política de privacidad, y cualquiera de sus actualizaciones.
      </p>
    ),
  },
  {
    id: "almacenamiento",
    question: "¿Dónde está almacenada la información obtenida a través de las cookies?",
    content: (
      <>
        <p>
          EDM podrá contratar terceras personas encargadas de almacenar y obtener la
          información a través de las cookies, o que incluyan cookies dentro de los portales
          de EDM, personas que podrán estar localizadas dentro de Colombia o en el exterior.
          Así mismo, EDM podrá entregar a terceros, la información que se obtenga de las
          cookies para crear perfiles de usuarios, ofrecer campañas personalizadas, sin que
          lo anterior, implique entrega de información personal.
        </p>
        <p>
          La información obtenida a través de estas cookies, referida al equipo del usuario,
          podrá ser combinada con sus datos personales sólo si usted está registrado en un
          Portal de EDM.
        </p>
      </>
    ),
  },
  {
    id: "actualizaciones",
    question: "¿Qué debo tener en cuenta sobre la política de uso de cookies?",
    content: (
      <p>
        La presente Política contiene la información necesaria que debe conocer todo usuario
        de los Portales sobre el uso de las cookies que realiza EDM o los terceros que este
        contrate. EDM podrá modificar el presente documento en cualquier momento y sin
        previo aviso para mantenerlos vigentes y actualizados. Por lo anterior, recomendamos
        a los usuarios revisar la fecha de elaboración o actualización de los mismos, la
        cual se establece al final del presente documento.
      </p>
    ),
  },
];

export default function PoliticaCookies() {
  const [openSections, setOpenSections] = useState<string[]>([sections[0].id]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const expandAll = () => setOpenSections(sections.map((s) => s.id));
  const collapseAll = () => setOpenSections([]);

  const allOpen = openSections.length === sections.length;

  const scrollToSection = (id: string) => {
    if (!openSections.includes(id)) {
      setOpenSections((prev) => [...prev, id]);
    }
    // Pequeño delay para que el acordeón se abra antes de hacer scroll
    setTimeout(() => {
      const el = document.getElementById(`cookie-section-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <main className="cookies">
      <section className="cookies__hero">
        <div className="cookies__container">
          {/* Header */}
          <div className="cookies__header">
            <span className="cookies__kicker">Información Legal</span>
            <h1 className="cookies__title">Política de Cookies</h1>
            <p className="cookies__subtitle">
              Conoce cómo Estudio de Moda utiliza las cookies y datos de navegación para
              ofrecerte una mejor experiencia en nuestros portales.
            </p>
          </div>

          {/* Layout de 2 columnas: índice + contenido */}
          <div className="cookies__layout">
            {/* Sidebar: índice */}
            <aside className="cookies__sidebar">
              <div className="cookies__toc">
                <span className="cookies__toc-label">En esta página</span>
                <ul className="cookies__toc-list">
                  {sections.map((s, idx) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => scrollToSection(s.id)}
                        className="cookies__toc-link"
                      >
                        <span className="cookies__toc-number">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span>{s.question}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Contenido principal */}
            <div className="cookies__content">
              {/* Toggle expandir/colapsar todo */}
              <div className="cookies__controls">
                <button
                  type="button"
                  className="cookies__toggle-all"
                  onClick={allOpen ? collapseAll : expandAll}
                >
                  {allOpen ? (
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
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      Colapsar todo
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
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      Expandir todo
                    </>
                  )}
                </button>
              </div>

              {/* Acordeón */}
              <div className="cookies__accordion">
                {sections.map((s, idx) => {
                  const isOpen = openSections.includes(s.id);
                  return (
                    <div
                      key={s.id}
                      id={`cookie-section-${s.id}`}
                      className={`cookie-section ${
                        isOpen ? "cookie-section--open" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className="cookie-section__trigger"
                        onClick={() => toggleSection(s.id)}
                        aria-expanded={isOpen}
                        aria-controls={`cookie-content-${s.id}`}
                      >
                        <span className="cookie-section__number">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="cookie-section__question">{s.question}</span>
                        <svg
                          className="cookie-section__chevron"
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
                        id={`cookie-content-${s.id}`}
                        className="cookie-section__body"
                        role="region"
                      >
                        <div className="cookie-section__inner">{s.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Final - contacto */}
              <div className="cookies__contact">
                <div className="cookies__contact-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="cookies__contact-body">
                  <h3 className="cookies__contact-title">¿Tienes dudas o inquietudes?</h3>
                  <p className="cookies__contact-text">
                    Si tienes preguntas sobre el uso de cookies o cualquiera de los puntos
                    detallados en esta política, escríbenos a:
                  </p>
                  <a
                    href="mailto:habeasdata@estudiodemoda.com.co"
                    className="cookies__contact-button"
                  >
                    <span>habeasdata@estudiodemoda.com.co</span>
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
          </div>
        </div>
      </section>
    </main>
  );
}