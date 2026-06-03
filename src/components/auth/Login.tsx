import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ensureLoginPopup, getAccessToken } from "../../auth/msal";
import "./Login.css";

type LocationState = {
  from?: {
    pathname?: string;
  };
};

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const state = location.state as LocationState | null;
  const redirectTo = state?.from?.pathname || "/auditoria";

  const handleLogin = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      await ensureLoginPopup();
      await getAccessToken({ forceSilent: true });
      navigate(redirectTo, { replace: true });
    } catch (err) {
      console.error("Error iniciando sesion con Graph", err);
      setError("No fue posible iniciar sesion con Microsoft Graph. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="login-screen">
      <section className="login-card">
        <p className="login-eyebrow">Acceso protegido</p>
        <h1 className="login-title">Inicia sesion para entrar a auditoria.</h1>
        <p className="login-copy">
          Usa tu cuenta corporativa de Microsoft para continuar con una sesion segura en esta seccion.
        </p>

        <div className="login-actions">
          <button type="button" className="login-button" onClick={handleLogin} disabled={isSubmitting}>
            {isSubmitting ? "Conectando..." : "Entrar con Microsoft"}
          </button>
        </div>

        <p className="login-note">Si ya tienes una sesion activa, el acceso se completara automaticamente.</p>
        {error ? <p className="login-error">{error}</p> : null}
      </section>
    </main>
  );
}
