import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)

export async function signInWithMicrosoft(redirectTo?: string) {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'email',
      redirectTo: redirectTo ? `${redirectTo}` : `${window.location.origin}/#/login`,
    },
  })

  if (error) throw error
}
