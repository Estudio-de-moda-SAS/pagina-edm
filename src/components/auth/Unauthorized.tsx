import { Link } from "react-router-dom";
import "./Unauthorized.css";

export default function Unauthorized() {
  return (
    <main className="unauthorized-screen">
      <section className="unauthorized-card">
        <p className="unauthorized-eyebrow">Acceso restringido</p>
        <h1 className="unauthorized-title">No tienes permisos para entrar aqui.</h1>
        <p className="unauthorized-copy">
          Tu sesion esta activa, pero tu cuenta no tiene los permisos necesarios para consultar esta seccion.
        </p>

        <div className="unauthorized-actions">
          <Link className="unauthorized-button unauthorized-button--primary" to="/">
            Volver al inicio
          </Link>
          <Link className="unauthorized-button unauthorized-button--secondary" to="/login">
            Cambiar de cuenta
          </Link>
        </div>
      </section>
    </main>
  );
}
