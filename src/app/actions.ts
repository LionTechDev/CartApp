'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function addTextToDb(formData: FormData) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const data = {
    text: formData.get('text') as string,
  }

  const { error } = await supabase.from('test-table').insert({
    user_id: user?.id,
    text: data.text,
  })

  if (error) {
    console.log(error)
  }

  revalidatePath('/', 'layout')
}
