import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor='email'>Email:</label>
      <input
        className='text-black'
        id='email 2'
        name='email'
        type='email'
        required
      />
      <label htmlFor='password'>Password:</label>
      <input
        className='text-black'
        id='password'
        name='password'
        type='password'
        required
      />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}
