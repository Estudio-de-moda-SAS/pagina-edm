import { useEffect, useState, useCallback } from "react";
import "./NuestraCultura.css";
import bannerDesktop from "../assets/nuestra-cultura/banner-landing-nuestra-cultura.png";
import bannerMobile from "../assets/nuestra-cultura/banner-landing-nuestra-cultura-mob.png";

// Imágenes de la galería "El equipo en imágenes"
const galleryImages = [
  // Las primeras 4 son las visibles en el grid
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/DSC01251-1365x2048.jpg",
    alt: "Equipo Estudio de Moda - Imagen 1",
  },
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/LANZAMIENTO-DIESEL.jpg",
    alt: "Lanzamiento Diesel",
  },
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/CINE-768x871.jpg",
    alt: "Equipo en cine",
  },
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/RITVALES.jpg",
    alt: "Equipo en RITVALES",
  },
  // Estas se ven solo al abrir el carrusel
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/JZ--1024x1000.jpg",
    alt: "Equipo en evento JZ",
  },
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/1feliz-2048x1365.jpg",
    alt: "Momentos felices del equipo",
  },
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/3felizcide-2048x1365.jpg",
    alt: "Celebración del equipo",
  },
  {
    src: "https://estudiodemoda.co/wp-content/uploads/2023/07/DSC01143-scaled.jpg",
    alt: "Equipo Estudio de Moda",
  },
];

// Beneficios EDM - 4 categorías con sus respectivos beneficios
const beneficios = [
  {
    title: "Felicidad",
    color: "#5cb85c",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="9" cy="10" r="1.2" fill="#fff" />
        <circle cx="15" cy="10" r="1.2" fill="#fff" />
        <path
          d="M8 14c1 1.5 2.5 2.5 4 2.5s3-1 4-2.5"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    items: [
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
          </svg>
        ),
        text: "Descuentos para ti, tu familia y amigos en las marcas que comercializamos",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <polyline points="9 16 11 18 15 14" />
          </svg>
        ),
        text: "Tiempo libre el día de tu cumpleaños, con retribución económica.",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        text: "Flexibilidad horaria, para roles aplicables",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
        text: "Posibilidad de trabajo en casa o desde donde prefieras, para roles aplicables.",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        ),
        text: "Programas para salud física y mental",
      },
    ],
  },
  {
    title: "Logros",
    color: "#f0c419",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.4 7.34l-2.74 2.74 1.41 1.41 2.74-2.74-1.41-1.41zM4.93 19.07l8.49-8.49-1.41-1.41-8.49 8.49 1.41 1.41zM15.07 4.93l1.41 1.41 1.41-1.41-1.41-1.41-1.41 1.41zM10.83 9.17l1.41-1.41-1.41-1.41-1.41 1.41 1.41 1.41z" />
        <circle cx="6" cy="6" r="1" />
        <circle cx="18" cy="14" r="1" />
        <circle cx="20" cy="4" r="1" />
      </svg>
    ),
    items: [
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" />
          </svg>
        ),
        text: "Plan de Reconocimientos e incentivos para feedback Day destacables",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="14" rx="2" />
            <polygon points="10 11 15 13 10 15" fill="currentColor" stroke="none" />
          </svg>
        ),
        text: "Remuneración variable que permite ganar más, por mejores resultados y cumplir sueños",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" />
          </svg>
        ),
        text: "Bilingüismo para todos, alianzas y apoyo económico para hablar inglés",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5" />
          </svg>
        ),
        text: "Plan de Reconocimientos e incentivos desempeños destacados",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
        text: "Alianzas educativas y apoyo económico para que logres tus metas",
      },
    ],
  },
  {
    title: "Satisfacción laboral",
    color: "#e91e8a",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="20" x2="12" y2="6" />
        <polyline points="6 12 12 6 18 12" />
      </svg>
    ),
    items: [
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15 8.5 22 9.3 17 14.1 18.2 21 12 17.8 5.8 21 7 14.1 2 9.3 9 8.5" />
          </svg>
        ),
        text: "Autenticidad, aquí puedes ser tú, con tus elecciones y tu forma de ser",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        text: "Días libres para conciliar vida laboral y familiar, más de 10 posibilidades adicionales al año.",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
        text: "Aquí tus ideas y proyectos son escuchados y valorados",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12" />
            <path d="M15 5.88L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88z" />
          </svg>
        ),
        text: "Planes de crecimiento o ascenso",
      },
    ],
  },
  {
    title: "Tranquilidad",
    color: "#1f4ea8",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 12c0-5 4-9 10-9s10 4 10 9H2z" />
        <path d="M12 12v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M12 21c-1.5 0-3-1-3-2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    items: [
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        ),
        text: "Préstamos sin interés",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" />
          </svg>
        ),
        text: "Seguro funerario para ti y para tu familia",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
        text: "Alianzas de enfocadas al bienestar económico y vivienda propia",
      },
      {
        bullet: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
        text: "Permanencia, incentivo económico por tu lealtad",
      },
    ],
  },
];

// Atributos para el modal de "Atributos EDM"
const atributos = [
  {
    icon: "https://estudiodemoda.co/wp-content/uploads/2023/08/FELICES-.jpg",
    title: "Felices",
    description:
      "Transmitimos una calidad humana única gracias a que hacemos lo que más nos gusta.",
  },
  {
    icon: "https://estudiodemoda.co/wp-content/uploads/2023/08/APASIONADOS.jpg",
    title: "Apasionados",
    description:
      "Vibramos de energía contagiosa por todo lo que hacemos y emprendemos.",
  },
  {
    icon: "https://estudiodemoda.co/wp-content/uploads/2023/08/CREATIVOS.jpg",
    title: "Creativos",
    description:
      "Buscamos formas diferentes de hacer las cosas, sea innovando o rompiendo paradigmas.",
  },
  {
    icon: "https://estudiodemoda.co/wp-content/uploads/2023/08/AUTENTICOS.jpg",
    title: "Auténticos",
    description:
      "Trabajamos sin ser juzgados, sintiéndonos incluidos, y con libertad de expresarnos y dar opiniones.",
  },
  {
    icon: "https://estudiodemoda.co/wp-content/uploads/2023/08/LEALES.jpg",
    title: "Leales",
    description:
      "Somos honestos y responsables con la empresa, sus marcas, y siempre al servicio nuestros clientes.",
  },
];

// Datos de las tarjetas (centralizado para fácil mantenimiento)
const cards = [
  {
    id: "atributos",
    title: "Atributos EDM",
    image: "https://estudiodemoda.co/wp-content/uploads/2023/07/CH-atributos-mobile.jpg",
    hideImageInModal: true,
    content: (
      <>
        <div className="cultura-modal__intro">
          <h3 className="cultura-modal__heading">¿Qué es lo que nos hace especiales?</h3>
          <p className="cultura-modal__lead">
            Tenemos un ADN único, nos caracterizamos por ser personas apasionadas y creativas,
            queremos transmitir al mundo la magia de trabajar justos, siempre guiándonos a
            resultados retadores, que nos permitan disfrutar día a día de nuestros logros,
            vibramos con energía contagiosa, trasmitiendo nuestra cercanía y haciendo lo que
            más nos gusta.
          </p>
        </div>

        <div className="cultura-modal__divider" />

        <h3 className="cultura-modal__heading cultura-modal__heading--center">
          Nuestros atributos
        </h3>

        <ul className="atributos-grid">
          {atributos.map((attr) => (
            <li key={attr.title} className="atributo">
              <div className="atributo__icon-wrapper">
                <img src={attr.icon} alt="" className="atributo__icon" />
              </div>
              <h4 className="atributo__title">{attr.title}</h4>
              <p className="atributo__description">{attr.description}</p>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "beneficios",
    title: "Beneficios EDM",
    image: "https://estudiodemoda.co/wp-content/uploads/2023/07/CH-beneficios-desk.jpg",
    hideImageInModal: true,
    content: (
      <>
        <h3 className="cultura-modal__heading cultura-modal__heading--center">
          Nuestros beneficios para ti
        </h3>
        <div className="cultura-modal__divider" />

        <div className="beneficios-grid">
          {beneficios.map((cat) => (
            <div key={cat.title} className="beneficio-cat">
              <div
                className="beneficio-cat__icon"
                style={{ color: cat.color }}
                aria-hidden="true"
              >
                {cat.icon}
              </div>
              <h4 className="beneficio-cat__title">{cat.title}</h4>
              <ul className="beneficio-cat__list">
                {cat.items.map((item, idx) => (
                  <li key={idx} className="beneficio-item">
                    <span
                      className="beneficio-item__bullet"
                      style={{ color: cat.color }}
                      aria-hidden="true"
                    >
                      {item.bullet}
                    </span>
                    <span className="beneficio-item__text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "trabaja",
    title: "Trabaja con nosotros",
    image: "https://estudiodemoda.co/wp-content/uploads/2023/07/CH-trabaja-con-nosotros-desk.jpg",
    hideImageInModal: true,
    content: (
      <>
        <h3 className="cultura-modal__heading cultura-modal__heading--center">
          Únete a nuestro equipo
        </h3>
        <p className="trabaja__lead">
          En Estudio de Moda buscamos personas apasionadas, creativas y auténticas, listas
          para crecer con nosotros y transmitir al mundo la magia de trabajar juntos.
        </p>
        <div className="cultura-modal__divider" />

        {/* Razones para trabajar con EDM */}
        <div className="trabaja__reasons">
          <div className="trabaja__reason">
            <div className="trabaja__reason-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h4 className="trabaja__reason-title">Cultura única</h4>
            <p className="trabaja__reason-text">
              Un ADN basado en pasión, creatividad y autenticidad.
            </p>
          </div>

          <div className="trabaja__reason">
            <div className="trabaja__reason-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 7 9 18 4 13" />
              </svg>
            </div>
            <h4 className="trabaja__reason-title">Beneficios reales</h4>
            <p className="trabaja__reason-text">
              Bienestar, flexibilidad y retribución variable.
            </p>
          </div>

          <div className="trabaja__reason">
            <div className="trabaja__reason-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="20" x2="12" y2="6" />
                <polyline points="6 12 12 6 18 12" />
              </svg>
            </div>
            <h4 className="trabaja__reason-title">Crecimiento</h4>
            <p className="trabaja__reason-text">
              Planes de carrera, alianzas educativas y formación continua.
            </p>
          </div>

          <div className="trabaja__reason">
            <div className="trabaja__reason-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h4 className="trabaja__reason-title">Equipo Be Happy</h4>
            <p className="trabaja__reason-text">
              Un ambiente cercano donde puedes ser tú mismo.
            </p>
          </div>
        </div>

        {/* Pasos del proceso */}
        <div className="trabaja__steps-section">
          <h4 className="trabaja__steps-title">¿Cómo aplicar?</h4>
          <ol className="trabaja__steps">
            <li className="trabaja__step">
              <span className="trabaja__step-number">01</span>
              <div>
                <h5 className="trabaja__step-name">Explora las vacantes</h5>
                <p className="trabaja__step-text">
                  Revisa las oportunidades disponibles en nuestro portal de empleos.
                </p>
              </div>
            </li>
            <li className="trabaja__step">
              <span className="trabaja__step-number">02</span>
              <div>
                <h5 className="trabaja__step-name">Postúlate</h5>
                <p className="trabaja__step-text">
                  Aplica a la vacante que se ajuste a tu perfil con tu hoja de vida actualizada.
                </p>
              </div>
            </li>
            <li className="trabaja__step">
              <span className="trabaja__step-number">03</span>
              <div>
                <h5 className="trabaja__step-name">Te contactaremos</h5>
                <p className="trabaja__step-text">
                  Si tu perfil encaja, nuestro equipo de selección se pondrá en contacto contigo.
                </p>
              </div>
            </li>
            <li className="trabaja__step">
              <span className="trabaja__step-number">04</span>
              <div>
                <h5 className="trabaja__step-name">¡Bienvenido al equipo!</h5>
                <p className="trabaja__step-text">
                  Tras el proceso de entrevistas, prepárate para ser parte de la familia EDM.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* CTA Principal */}
        <div className="trabaja__cta-box">
          <p className="trabaja__cta-text">
            ¿Listo para dar el siguiente paso?
          </p>
          <a
            href="https://www.magneto365.com/co/empresas/estudio-moda/empleos?forwardUrl=aHR0cHM6Ly93d3cubWFnbmV0bzM2NS5jb20vY28vZW1wcmVzYXMvZXN0dWRpby1tb2RhL2VtcGxlb3M%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="trabaja__cta-button"
          >
            <span>Ver vacantes disponibles</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <span className="trabaja__cta-hint">Te llevamos a nuestro portal en Magneto365</span>
        </div>
      </>
    ),
  },
];

export default function NuestraCultura() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isLightboxOpen = lightboxIndex !== null;

  // Funciones de navegación del carrusel
  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  // Cerrar con tecla Escape y bloquear scroll del body (para modal de tarjetas)
  useEffect(() => {
    if (!activeCard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCard(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCard]);

  // Navegación con teclado y bloqueo de scroll para el lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, goPrev, goNext]);

  const activeData = cards.find((c) => c.id === activeCard);

  return (
    <main className="nuestra-cultura">
      {/* ============================================
          SECCIÓN 1 — Hero Banner
          ============================================ */}
      <section className="cultura-hero">
        <picture className="cultura-hero__picture">
          <source media="(max-width: 768px)" srcSet={bannerMobile} />
          <img
            src={bannerDesktop}
            alt="Nuestra Cultura - Estudio de Moda"
            className="cultura-hero__image"
          />
        </picture>
      </section>

      {/* ============================================
          SECCIÓN 2 — Tarjetas (Atributos, Beneficios, Trabaja con nosotros)
          ============================================ */}
      <section className="cultura-cards">
        <div className="cultura-cards__grid">
          {cards.map((card) => (
            <article key={card.id} className="cultura-card">
              <div className="cultura-card__image-wrapper">
                <img
                  src={card.image}
                  alt={card.title}
                  className="cultura-card__image"
                  loading="lazy"
                />
              </div>

              <button
                type="button"
                className="cultura-card__button"
                onClick={() => setActiveCard(card.id)}
                aria-label={`Leer más sobre ${card.title}`}
              >
                <span>Leer más</span>
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
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================
          SECCIÓN 3 — Galería "El equipo en imágenes"
          ============================================ */}
      <section className="cultura-gallery">
        <div className="cultura-gallery__container">
          <h2 className="cultura-gallery__title">El equipo en imágenes</h2>

          <button
            type="button"
            className="cultura-gallery__see-more"
            onClick={() => setLightboxIndex(0)}
          >
            <span>Ver galería completa</span>
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
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>

          <div className="cultura-gallery__grid">
            {galleryImages.slice(0, 4).map((img, idx) => (
              <button
                type="button"
                key={idx}
                className="cultura-gallery__item"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`Ver imagen ${idx + 1} de la galería`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="cultura-gallery__image"
                  loading="lazy"
                />
                <span className="cultura-gallery__overlay" aria-hidden="true">
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
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          LIGHTBOX / CARRUSEL
          ============================================ */}
      {isLightboxOpen && lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de imágenes del equipo"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Cerrar galería"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Imagen anterior"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Imagen siguiente"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className="lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="lightbox__image"
              key={lightboxIndex}
            />
          </div>

          <div className="lightbox__footer" onClick={(e) => e.stopPropagation()}>
            <span className="lightbox__counter">
              {lightboxIndex + 1} / {galleryImages.length}
            </span>
            <div className="lightbox__dots">
              {galleryImages.map((_, idx) => (
                <button
                  type="button"
                  key={idx}
                  className={`lightbox__dot ${
                    idx === lightboxIndex ? "lightbox__dot--active" : ""
                  }`}
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Ir a imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================
          MODAL
          ============================================ */}
      {activeData && (
        <div
          className="cultura-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cultura-modal-title"
          onClick={() => setActiveCard(null)}
        >
          <div
            className={`cultura-modal__content ${
              activeData.id === "beneficios" || activeData.id === "trabaja"
                ? "cultura-modal__content--wide"
                : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cultura-modal__close"
              onClick={() => setActiveCard(null)}
              aria-label="Cerrar"
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {!activeData.hideImageInModal && (
              <div className="cultura-modal__image-wrapper">
                <img
                  src={activeData.image}
                  alt={activeData.title}
                  className="cultura-modal__image"
                />
              </div>
            )}

            <div className="cultura-modal__body">
              <h2 id="cultura-modal-title" className="cultura-modal__title">
                {activeData.title}
              </h2>
              <div className="cultura-modal__text">{activeData.content}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}