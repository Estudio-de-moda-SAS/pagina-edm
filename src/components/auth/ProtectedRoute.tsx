import { Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from '../../services/supabase.service'

export function ProtectedRoute({allowedRoles = []}: { allowedRoles?: string[] }) {
  const [sessionLoading, setSessionLoading] = useState(true)
  const [claimsLoading, setClaimsLoading] = useState(true)
  const [hasSession, setHasSession] = useState(false)
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setHasSession(!!data.session)
      setSessionLoading(false)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setHasSession(!!session)
      setSessionLoading(false)
    })

    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const validate = async () => {
      setClaimsLoading(true)

      const { data, error } = await supabase.auth.getClaims();


      if (error || !data?.claims) {
        setHasAccess(false);
        setClaimsLoading(false);
        return;
      }

      const claims = data.claims

      console.log(claims)

      const roles = [
        ...(claims.app_metadata?.roles ?? []),
        ...(claims.user_metadata?.roles ?? []),
        ...(claims.user_metadata?.custom_claims?.roles ?? []),
        ...(claims.app_metadata?.role ? [claims.app_metadata.role] : []),
        ...(claims.user_metadata?.role ? [claims.user_metadata.role] : []),
      ];

      console.log('Roles del usuario:', roles);

      const allowed =
        allowedRoles.length === 0 ||
        allowedRoles.some((role) => roles.includes(role));

      console.log(allowed)

      setHasAccess(allowed);
      setClaimsLoading(false);
    };

    void validate();

    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      void validate();
    });

    return () => sub.subscription.unsubscribe();
  }, [allowedRoles]);

  if (sessionLoading || claimsLoading) return <div>Cargando...</div>
  if (!hasSession) return <Navigate to="/login" replace />
  if (!hasAccess) return <Navigate to="/unauthorized" replace />
  return <Outlet />
}
