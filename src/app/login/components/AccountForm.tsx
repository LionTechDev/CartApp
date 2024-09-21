import { login, signup } from '../actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const AccountForm = ({
  message = null,
  variant,
}: {
  message: string | null
  variant: 'login' | 'register'
}) => {
  console.log('cargo en cliente?')
  return (
    <form>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Correo Electrónico</Label>
          <Input
            id='email'
            name='email'
            type='email'
            required
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='password'>Contraseña</Label>
          <Input
            id='password'
            name='password'
            type='password'
            required
          />
        </div>
        {message && <p className='text-red-500'>{message}</p>}

        {variant === 'login' && (
          <Button formAction={login}>Iniciar Sesión</Button>
        )}
        {variant === 'register' && (
          <Button formAction={signup}>Regístrate</Button>
        )}
      </div>
    </form>
  )
}
export default AccountForm
