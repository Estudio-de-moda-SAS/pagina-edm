import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { signInWithMicrosoft } from "./LoginFunction";
import React from "react";
import { supabase } from "../../services/supabase.service";
import {
  clearPostLoginRedirectPending,
  consumePostLoginRedirectPending,
  hasPostLoginRedirectPending,
} from "../../utils/postLoginRedirect";

export default function Login() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcessingRedirect, setIsProcessingRedirect] = useState(false);
  const [error, setError] = useState("");
  const redirectTo = "/auditoria";
  const shouldRedirectAfterLogin = hasPostLoginRedirectPending();
  const hasAuthCallbackParams =
    typeof window !== "undefined" &&
    /(?:^#|[?#&])(code|error|id_token|access_token)=/i.test(
      `${window.location.search}${window.location.hash}`,
    );

  React.useEffect(() => {
    let cancelled = false;

    const syncSession = async () => {
      try {
        if ((hasAuthCallbackParams || shouldRedirectAfterLogin) && !cancelled) {
          setIsProcessingRedirect(true);
        }

        const { data, error } = await supabase.auth.getSession();

        if (error) throw error;
        if (cancelled) return;

        if (data.session && shouldRedirectAfterLogin) {
          consumePostLoginRedirectPending();
          navigate(redirectTo, { replace: true });
          return;
        }

        setIsProcessingRedirect(false);
      } catch (sessionError) {
        console.error("Error sincronizando sesion con Supabase", sessionError);
        if (!cancelled) {
          setIsProcessingRedirect(false);
        }
      }
    };

    void syncSession();

    return () => {
      cancelled = true;
    };
  }, [hasAuthCallbackParams, navigate, redirectTo, shouldRedirectAfterLogin]);

  const handleLogin = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      await signInWithMicrosoft();
    } catch (err) {
      console.error("Error iniciando sesion con Graph", err);
      clearPostLoginRedirectPending();
      setError("No fue posible iniciar sesion con Microsoft Graph. Intenta de nuevo.");
      setIsSubmitting(false);
    }
  };

  if (isProcessingRedirect) {
    return (
      <main className="login-screen">
        <section className="login-card">
          <p className="login-eyebrow">Microsoft Graph</p>
          <h1 className="login-title">Completando autenticacion.</h1>
          <p className="login-copy">Estamos terminando el inicio de sesion y validando tu sesion en esta pagina.</p>
        </section>
      </main>
    );
  }

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

        <p className="login-note">Si ya tienes una sesion activa, puedes seguir navegando sin redireccion automatica.</p>
        {error ? <p className="login-error">{error}</p> : null}
      </section>
    </main>
  );
}
