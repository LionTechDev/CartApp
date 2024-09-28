'use server'
import { createClient } from "@/utils/supabase/server"
import { getUser } from "@/utils/utils"
import { revalidatePath } from "next/cache"

export const getMenuProducts = async(category_id: string)=>{
  const supabase = createClient()
  const { data, error } = await supabase
    .from('product')
    .select()
    .eq('category_id', category_id)

return {products: data, error}
}

export const createProduct = async(formData: FormData,category_id: {category_id: string})=>{
  const supabase = createClient()
  const { user } = await getUser()
  const product = Object.fromEntries(formData.entries())

const { error } = await supabase
    .from('product')
    .insert({ 
      category_id: category_id.category_id,
      user_id: user?.id ,
      title: product.title,
      price:  product.price,
      description: product.description,
     
     
    })
  revalidatePath('/dashboard/menus')
  if (error) throw new Error(error?.message)
}



export const deleteProduct = async (product_id: string) => {
  const supabase = createClient()
  await supabase.from('product').delete().eq('product_id', product_id)
  revalidatePath('/dashboard/menus')
}