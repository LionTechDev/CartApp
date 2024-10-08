'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function checkLogin() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return redirect('/login')
}

export async function getUser() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  return { user }
}
