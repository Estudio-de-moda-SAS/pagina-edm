import { supabase } from '../../services/supabase.service'
import { markPostLoginRedirectPending } from '../../utils/postLoginRedirect'


export async function signInWithMicrosoft() {
  markPostLoginRedirectPending()

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'email',
      redirectTo: 'https://estudiodemoda.co',
    },
  })

  if (error) throw error
}
