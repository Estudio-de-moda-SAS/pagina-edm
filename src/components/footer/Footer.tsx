import React, { useState } from "react";
import "./Footer.css";

/* ─── SVG Icons ─────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.93 12a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3.84 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6.29 6.29l1.28-1.28a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

/* ─── Social icons ──────────────────────────────────────── */
const SocialIcons = ({ large = false }: { large?: boolean }) => (
  <>
    <a
      href="https://es.linkedin.com/company/estudio-de-moda"
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon social-icon--li${large ? " social-icon--lg" : ""}`}
      aria-label="LinkedIn"
    >
      <LinkedInIcon />
    </a>
    <a
      href="https://www.instagram.com/edm.behappy/?hl=es"
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon social-icon--ig${large ? " social-icon--lg" : ""}`}
      aria-label="Instagram"
    >
      <InstagramIcon />
    </a>
  </>
);

/* ─── Accordion section ──────────────────────────────────── */
interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="footer__section">
      <button
        className={`footer__col-title${open ? " open" : ""}`}
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
      >
        {title}
        <span className="footer__arrow" aria-hidden="true">▼</span>
      </button>
      <div className={`footer__col-body${open ? " open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

/* ─── Data ───────────────────────────────────────────────── */
const BRANDS = [
  { name: "Pilatos", href: "/pilatos" },
  { name: "Kipling", href: "/kipling" },
  { name: "Superdry", href: "/superdry" },
  { name: "Replay", href: "/replay" },
  { name: "Girbaud", href: "/girbaud" },
  { name: "Diesel", href: "/diesel" },
  { name: "New Balance", href: "/new-balance" },
];

const LEGAL_LINKS = [
  { name: "Línea Ética", href: "/linea-etica" },
  { name: "Notificaciones Judiciales", href: "/notificaciones-judiciales" },
  { name: "Política de tratamiento de datos", href: "/linea-etica#politica-datos" },
  { name: "Política de cookies", href: "/politica-cookies" },
  { name: "Política de protección al denunciante", href: "/proteccion-denunciante" },
  { name: "Denuncias", href: "/formulario-etica" },
];

/* ─── Footer ─────────────────────────────────────────────── */
const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__grid">

      {/* Col 1 */}
      <AccordionSection title="Acerca de nosotros">
        <p className="footer__label">Servicio al cliente</p>
        <div className="footer__contact-item">
          <span className="footer__contact-icon"><PhoneIcon /></span>
          <a href="tel:+576046073693" className="footer__contact-text footer__contact-link">
            (604) 6073693
          </a>
        </div>
        <div className="footer__contact-item">
          <span className="footer__contact-icon"><CalendarIcon /></span>
          <span className="footer__contact-text">
            Lunes – viernes 8:00am – 18:00,<br />
            sábados 9:00am – 12:00 medio día
          </span>
        </div>
        <div className="footer__social footer__social--desktop">
          <SocialIcons />
        </div>
      </AccordionSection>

      {/* Col 2 */}
      <AccordionSection title="Nuestras marcas">
        <ul className="footer__brands">
          {BRANDS.map((b) => (
            <li key={b.name}>
              <span className="footer__dot" aria-hidden="true" />
              <a href={b.href} rel="noopener noreferrer">
                {b.name}
              </a>
            </li>
          ))}
        </ul>
      </AccordionSection>

      {/* Col 3 */}
      <AccordionSection title="Información legal">
        <ul className="footer__legal">
          {LEGAL_LINKS.map((l) => (
            <li key={l.name}>
              <span className="footer__dot" aria-hidden="true" />
              <a href={l.href}>{l.name}</a>
            </li>
          ))}
        </ul>
      </AccordionSection>

    </div>

    {/* Social mobile */}
    <div className="footer__social footer__social--mobile">
      <SocialIcons large />
    </div>

    <hr className="footer__divider" />
    <p className="footer__bottom">© 2026 Todos los derechos reservados</p>
  </footer>
);

export default Footer;