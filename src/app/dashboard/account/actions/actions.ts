'use server'

// import { Store } from '@/types/types'
import { createClient } from '@/utils/supabase/server'
import { getUser } from '@/utils/utils'
import { revalidatePath } from 'next/cache'

export const createStore = async (formData: FormData) => {
  console.log(formData)
  const store = Object.fromEntries(formData.entries())

  const supabase = createClient()
  const { user } = await getUser()
  const { error } = await supabase.from('stores').insert({
    ...store,
    user_id: user?.id,
    email: user?.email,
  })
  if (error) throw new Error(error?.message)
  revalidatePath('/dashboard/account')
}

export const updateStore = async (formData: FormData) => {
  const store = Object.fromEntries(formData.entries())
  console.log(store)
  const supabase = createClient()
  const { error } = await supabase
    .from('stores')
    .update({
      ...store,
      zipcode: store.zipcode ? Number(store.zipcode) : 11111,
    })
    .eq('store_id', store.store_id)
  console.log(error)
  if (error) throw new Error(error?.message)
  revalidatePath('/dashboard/account')
}
