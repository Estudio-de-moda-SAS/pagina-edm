import { supabase } from '../../services/supabase.service'


export async function signInWithMicrosoft() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'email',
      redirectTo: 'https://estudiodemoda.co',
    },
  })

  if (error) throw error
}
