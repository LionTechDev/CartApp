'use server'

import { createClient } from "@/utils/supabase/server"
import { getUser } from "@/utils/utils"
import { revalidatePath } from 'next/cache'

export const getMenuCategories = async (menuId: string) => {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('category')
    .select()
    .eq('menu_id', menuId)

return {data, error}
}


export const createCategory = async (categoryTitle: any, menuId: string) => {
  const supabase = createClient()
  const { user } = await getUser()
  const { error } = await supabase
    .from('category')
    .insert({ 
      title: categoryTitle,
      user_id: user?.id,
      menu_id: menuId 
    })
  revalidatePath('/dashboard/menus')

  if (error) throw new Error(error?.message)
}

export const deleteCategory = async (category_id: string) => {
  const supabase = createClient()
  await supabase.from('category').delete().eq('category_id', category_id)
  revalidatePath('/dashboard/menus')
}

