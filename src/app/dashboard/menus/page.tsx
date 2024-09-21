import React from 'react'
import AsideMenu from './components/AsideMenu'
import { CardMenu } from './components/CardMenu'
import { getAllMenus } from './services/services'

const Menus = async () => {
  const { menus, error } = await getAllMenus()
  console.log(menus)

  return (
    <div className='flex h-screen bg-gray-100'>
      <AsideMenu />
      <main className='flex-1 overflow-y-auto p-8'>
        <h1 className='text-3xl font-bold mb-6'>Mis Cartas</h1>

        <div className='mb-6'>{/* buscador */}</div>

        {!error && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {menus?.map((menu) => (
              <CardMenu
                menu={menu}
                key={menu?.menu_id}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Menus
