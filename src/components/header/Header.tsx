import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

// Marcas para el dropdown "Nuestras Marcas"
const brands = [
  { name: "Pilatos", href: "/pilatos" },
  { name: "Kipling", href: "/kipling" },
  { name: "Superdry", href: "/superdry" },
  { name: "Replay", href: "/replay" },
  { name: "Girbaud", href: "/girbaud" },
  { name: "Diesel", href: "/diesel" },
  { name: "New Balance", href: "/new-balance" },
];

// Tipo de link: navegable o dropdown
type NavLinkItem =
  | { label: string; href: string; type?: "link" }
  | { label: string; type: "dropdown"; items: typeof brands };

const navLinks: NavLinkItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nuestras Marcas", type: "dropdown", items: brands },
  { label: "Linea Ética", href: "/linea-etica" },
  { label: "Nuestra cultura", href: "/nuestra-cultura" },
  { label: "Comunícate con nosotros", href: "/comunicate" },
];

// Rutas adicionales que NO están en el menú pero SÍ en el footer u otros lugares.
const extraRoutes: Record<string, string> = {
  "/notificaciones-judiciales": "Notificaciones Judiciales",
  "/politica-cookies": "Política de Cookies",
  "/proteccion-denunciante": "Política de Protección al Denunciante",
  "/politica-datos": "Política de Tratamiento de Datos",
  "/formulario-etica": "Denuncias",
};

const slugToLabel = (path: string): string => {
  const slug = path.replace(/^\/+/, "").split("/")[0];
  if (!slug) return "Inicio";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpenDesktop, setBrandsOpenDesktop] = useState(false);
  const [brandsOpenMobile, setBrandsOpenMobile] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Resolución del breadcrumb (solo considera links navegables)
  const currentPage = navLinks.find(
    (link) => link.type !== "dropdown" && link.href === location.pathname
  );
  const breadcrumbLabel =
    (currentPage && currentPage.type !== "dropdown" && currentPage.label) ||
    extraRoutes[location.pathname] ||
    slugToLabel(location.pathname);

  const isHome = location.pathname === "/";

  // Cierra el menú al cambiar de página
  useEffect(() => {
    setMenuOpen(false);
    setBrandsOpenMobile(false);
    setBrandsOpenDesktop(false);
  }, [location.pathname]);

  // Bloquea scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handlers del dropdown desktop con pequeño delay al salir (mejor UX)
  const handleBrandsEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setBrandsOpenDesktop(true);
  };

  const handleBrandsLeave = () => {
    closeTimer.current = setTimeout(() => {
      setBrandsOpenDesktop(false);
    }, 150);
  };

  return (
    <>
      <header className="header">
        {/* Hamburguesa — solo mobile */}
        <button
          className="header__hamburger"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen(true)}
        >
          <span /><span /><span />
        </button>

        {/* Logo — centrado en mobile */}
        <NavLink to="/" className="header__logo">
          <img
            src="https://estudiodemoda.co/wp-content/uploads/2023/01/Logo-colores_0-15-1-1.png"
            alt="Estudio de Moda logo"
            className="header__logo-img"
          />
        </NavLink>

        {/* Nav desktop */}
        <nav className="header__nav">
          {navLinks.map((link) => {
            // Dropdown
            if (link.type === "dropdown") {
              return (
                <div
                  key={link.label}
                  className="header__dropdown"
                  onMouseEnter={handleBrandsEnter}
                  onMouseLeave={handleBrandsLeave}
                >
                  <button
                    type="button"
                    className={`header__nav-link header__nav-link--dropdown${
                      brandsOpenDesktop ? " header__nav-link--open" : ""
                    }`}
                    aria-expanded={brandsOpenDesktop}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      className="header__chevron"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div
                    className={`header__submenu${
                      brandsOpenDesktop ? " header__submenu--open" : ""
                    }`}
                    role="menu"
                  >
                    {link.items.map((brand) => (
                      <a
                        key={brand.name}
                        href={brand.href}
                   
                        rel="noopener noreferrer"
                        className="header__submenu-link"
                        role="menuitem"
                      >
                        {brand.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            // Link normal
            return (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `header__nav-link${isActive ? " header__nav-link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`drawer-overlay${menuOpen ? " drawer-overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer lateral */}
      <aside className={`drawer${menuOpen ? " drawer--open" : ""}`}>
        <button
          className="drawer__close"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <NavLink to="/" className="drawer__logo">
          <img
            src="https://estudiodemoda.co/wp-content/uploads/2023/01/Logo-colores_0-15-1-1.png"
            alt="Estudio de Moda"
          />
        </NavLink>

        <nav className="drawer__nav">
          {navLinks.map((link) => {
            // Dropdown en mobile (acordeón)
            if (link.type === "dropdown") {
              return (
                <div key={link.label} className="drawer__group">
                  <button
                    type="button"
                    className={`drawer__link drawer__link--dropdown${
                      brandsOpenMobile ? " drawer__link--open" : ""
                    }`}
                    onClick={() => setBrandsOpenMobile((p) => !p)}
                    aria-expanded={brandsOpenMobile}
                  >
                    <span>{link.label}</span>
                    <svg
                      className="drawer__chevron"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  <div
                    className={`drawer__sublist${
                      brandsOpenMobile ? " drawer__sublist--open" : ""
                    }`}
                  >
                    <div className="drawer__sublist-inner">
                      {link.items.map((brand) => (
                        <a
                          key={brand.name}
                          href={brand.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="drawer__sublink"
                        >
                          {brand.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Link normal
            return (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `drawer__link${isActive ? " drawer__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Breadcrumb */}
      {!isHome && (
        <div className="breadcrumb">
          <h1 className="breadcrumb__title">{breadcrumbLabel}</h1>
          <span className="breadcrumb__path">
            You are here: <NavLink to="/">Home</NavLink> / {breadcrumbLabel}
          </span>
        </div>
      )}
    </>
  );
}