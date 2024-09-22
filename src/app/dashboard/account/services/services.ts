import { Store } from '@/types/types'
import { createClient } from '@/utils/supabase/server'
import { getUser } from '@/utils/utils'

export const getStores = async () => {
  const supabase = createClient()
  const { user } = await getUser()
  const { data: stores, error } = await supabase
    .from('stores')
    .select()
    .eq('user_id', user?.id)

  return { stores: stores as Store[], error }
}
