import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getUser } from '@/utils/utils'

const AccountInfo = async () => {
  const { user } = await getUser()
  const { email } = user!
  return (
    <section className='space-y-8'>
      <h2 className='text-xl font-semibold text-gray-800 mb-4'>
        Información de la Cuenta
      </h2>
      <div className='grid gap-6 md:grid-cols-2'>
        <Input
          placeholder='Usuario'
          className='bg-white border-gray-200'
          value={email}
          disabled
        />
        <Input
          type='password'
          placeholder='Contraseña'
          className='bg-white border-gray-200'
          value='*******'
          disabled
        />
        <Input
          type='email'
          placeholder='Correo electrónico'
          className='bg-white border-gray-200'
          value={user?.email}
          disabled
        />
        <Button
          variant='outline'
          className='text-gray-500 hover:bg-gray-50'
        >
          Restablecer contraseña
        </Button>
      </div>
    </section>
  )
}
export default AccountInfo
