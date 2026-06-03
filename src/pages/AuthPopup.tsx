import { useEffect, useState } from "react";
import { initMSAL, isLoggedIn } from "../auth/msal";

export default function AuthPopup() {
  const [message, setMessage] = useState("Completando inicio de sesion...");

  useEffect(() => {
    let cancelled = false;

    const finishPopupLogin = async () => {
      try {
        await initMSAL();

        if (cancelled) return;

        setMessage(
          isLoggedIn()
            ? "Inicio de sesion completado. Cerrando ventana..."
            : "No se pudo completar el inicio de sesion."
        );

        window.setTimeout(() => {
          if (!cancelled) {
            window.close();
          }
        }, 250);
      } catch (error) {
        console.error("Error completando autenticacion en popup", error);
        if (!cancelled) {
          setMessage("Ocurrio un problema. Puedes cerrar esta ventana.");
        }
      }
    };

    void finishPopupLogin();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main style={{ padding: "2rem 1.5rem", textAlign: "center", fontFamily: "inherit" }}>
      <p>{message}</p>
    </main>
  );
}
