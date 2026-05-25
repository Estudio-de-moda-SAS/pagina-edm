import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";
import bannerDesktop from "../assets/nuestra-cultura/banner-landing-nuestra-cultura.png";
import bannerMobile from "../assets/nuestra-cultura/banner-landing-nuestra-cultura-mob.png";

// Logos de marcas
import pilatosLogo from "../assets/inicio/pilatos-store.jpg";
import dieselLogo from "../assets/inicio/diesel-colombia-tienda.jpeg";
import superdryLogo from "../assets/inicio/superdry-store-2.jpg";
import girbaudLogo from "../assets/inicio/girbaud-store.jpg";
import kiplingLogo from "../assets/inicio/kiplinh-store.jpg";
import newBalanceLogo from "../assets/inicio/new-balance-store.jpg";

// Features de la sección 2
const features = [
  {
    title: "Pasión por la moda",
    text: "Cobertura en más de 30 ciudades en Colombia en los principales Centros Comerciales.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M11 3 8 9l4 13 4-13-3-6" />
        <path d="M2 9h20" />
      </svg>
    ),
  },
  {
    title: "Canales de Distribución",
    text: "Actualmente tenemos 4 canales de distribución que garantizan un amplio cubrimiento del mercado",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 11l18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
  {
    title: "eCommerce",
    text: "Poseemos toda una infraestructura de eCommerce que respalda a cada una de nuestras marcas",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

// Marcas de la sección 3
const brands = [
  { name: "Pilatos", logo: pilatosLogo, href: "https://www.pilatos.com/" },
  { name: "Diesel", logo: dieselLogo, href: "https://co.diesel.com/" },
  { name: "Superdry", logo: superdryLogo, href: "https://www.superdry.com.co/" },
  { name: "Marithé François Girbaud", logo: girbaudLogo, href: "https://www.girbaud.com.co/" },
  { name: "Kipling", logo: kiplingLogo, href: "https://www.kipling.com.co/" },
  { name: "New Balance", logo: newBalanceLogo, href: "#" },
];

export default function Inicio() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // Detectar el slide activo por scroll en mobile
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const slideWidth = slider.offsetWidth;
      const newActive = Math.round(slider.scrollLeft / slideWidth);
      setActiveSlide(newActive);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (idx: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollTo({
      left: idx * slider.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <main className="inicio">
      {/* ============================================
          SECCIÓN 1 — Hero Banner
          ============================================ */}
      <section className="inicio-hero">
        <picture className="inicio-hero__picture">
          <source media="(max-width: 768px)" srcSet={bannerMobile} />
          <img
            src={bannerDesktop}
            alt="Estudio de Moda - Be Happy"
            className="inicio-hero__image"
          />
        </picture>
      </section>

      {/* ============================================
          SECCIÓN 2 — Features
          ============================================ */}
      <section className="inicio-features">
        <div className="inicio-features__container">
          {features.map((f) => (
            <article key={f.title} className="feature">
              <div className="feature__icon" aria-hidden="true">
                {f.icon}
              </div>
              <div className="feature__content">
                <h3 className="feature__title">{f.title}</h3>
                <p className="feature__text">{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============================================
          SECCIÓN 3 — Nuestras marcas
          ============================================ */}
      <section className="brands">
        <div className="brands__container">
          {/* Header */}
          <div className="brands__header">
            <h2 className="brands__title">Nuestras marcas</h2>
            <p className="brands__subtitle">
              Contamos con marcas reconocidas en todo el mundo dentro de nuestro
              portafolio.
            </p>
            <span className="brands__divider" aria-hidden="true" />
          </div>

          {/* Grid Desktop / Slider Mobile */}
          <div className="brands__slider" ref={sliderRef}>
            {brands.map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-card"
                aria-label={`Visitar sitio web de ${brand.name}`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="brand-card__logo"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          {/* Dots — solo visibles en mobile */}
          <div className="brands__dots" role="tablist" aria-label="Navegación de marcas">
            {brands.map((brand, idx) => (
              <button
                key={brand.name}
                type="button"
                role="tab"
                aria-selected={activeSlide === idx}
                aria-label={`Ir a ${brand.name}`}
                className={`brands__dot ${
                  activeSlide === idx ? "brands__dot--active" : ""
                }`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECCIÓN 4 — Línea Ética EDM
          ============================================ */}
      <section className="etica-home">
        <div className="etica-home__container">
          {/* Imagen */}
          <div className="etica-home__image-wrapper">
            <img
              src="https://estudiodemoda.co/wp-content/uploads/2023/03/LINEA-ETICA.jpg"
              alt="Equipo de Estudio de Moda celebrando"
              className="etica-home__image"
              loading="lazy"
            />
          </div>

          {/* Contenido */}
          <div className="etica-home__content">
            <h2 className="etica-home__title">Linea Ética EDM</h2>

            <p className="etica-home__text">
              En nuestra compañía, la ética y la transparencia son valores fundamentales,
              por eso, hemos creado nuestra Línea Ética, donde encontrarás las diferentes
              políticas y manuales que establecen los principios y valores que rigen
              nuestro comportamiento empresarial.
            </p>

            <p className="etica-home__text etica-home__text--strong">
              <strong>
                Todos los clientes, proveedores o terceros pueden reportar o denunciar
                conductas que vayan en contra de nuestros principios éticos al Canal de
                Denuncia{" "}
                <a
                  href="mailto:lineaetica@estudiodemoda.com.co"
                  className="etica-home__email"
                >
                  lineaetica@estudiodemoda.com.co
                </a>{" "}
                sobre el cual garantizamos su confidencialidad.
              </strong>
            </p>

            <Link to="/linea-etica" className="etica-home__button">
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
              <span>Descubre cómo nos regimos: Ver la línea ética de EDM</span>
              <svg
                className="etica-home__button-arrow"
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}