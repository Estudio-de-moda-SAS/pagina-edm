import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getAccessToken, initMSAL, isLoggedIn } from "../../auth/msal";

type AuthState = "checking" | "authorized" | "unauthorized";

export default function ProtectedRoute() {
  const location = useLocation();
  const [authState, setAuthState] = useState<AuthState>("checking");

  useEffect(() => {
    let cancelled = false;

    const validateSession = async () => {
      try {
        await initMSAL();

        if (!isLoggedIn()) {
          if (!cancelled) setAuthState("unauthorized");
          return;
        }

        await getAccessToken({ forceSilent: true });

        if (!cancelled) setAuthState("authorized");
      } catch {
        if (!cancelled) setAuthState("unauthorized");
      }
    };

    void validateSession();

    return () => {
      cancelled = true;
    };
  }, []);

  if (authState === "checking") {
    return <div style={{ padding: "3rem 1.5rem", textAlign: "center" }}>Validando sesion...</div>;
  }

  if (authState === "unauthorized") {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
