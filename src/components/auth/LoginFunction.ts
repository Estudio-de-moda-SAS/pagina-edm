import { supabase } from '../../services/supabase.service'


export async function signInWithMicrosoft() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'azure',
    options: {
      scopes: 'email',
      redirectTo: 'http://localhost:5173/',
    },
  })

  if (error) throw error
}
