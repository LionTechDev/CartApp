'use server'

import { Menu } from '@/types/types'
import { createClient } from '@/utils/supabase/server'
import { getUser } from '@/utils/utils'
import { revalidatePath } from 'next/cache'

export const getAllMenus = async () => {
  const supabase = createClient()
  const { user } = await getUser()

  const { data: menus, error } = await supabase
    .from('menu')
    .select()
    .eq('user_id', user?.id)

  return { menus: menus as Menu[], error }
}

export const deleteMenu = async (menuId: string) => {
  const supabase = createClient()
  await supabase.from('menu').delete().eq('menu_id', menuId)
  revalidatePath('/dashboard/menus')
}

export const createNewMenu = async (menuTitle: string) => {
  const supabase = createClient()
  const { user } = await getUser()
  const { error } = await supabase
    .from('menu')
    .insert({ title: menuTitle, user_id: user?.id })
  revalidatePath('/dashboard/menus')

  if (error) return error
}
