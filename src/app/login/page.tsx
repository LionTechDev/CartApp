/* eslint-disable @next/next/no-img-element */
'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AccountForm from './components/AccountForm'

export default function AuthPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className='flex min-h-screen'>
      {/* Columna de la imagen */}
      <div className='hidden w-1/2 bg-gray-100 lg:block'>
        <img
          src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Imagen de autenticación'
          className='object-cover w-full h-full max-h-screen'
        />
      </div>

      {/* Columna del formulario */}
      <div className='w-full lg:w-1/2 flex items-center justify-center p-8'>
        <Card className='w-full max-w-md'>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl font-bold'>Bienvenido</CardTitle>
            <CardDescription>
              Inicia sesión en tu cuenta o crea una nueva
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue='login'>
              <TabsList className='grid w-full grid-cols-2 mb-4'>
                <TabsTrigger value='login'>Iniciar Sesión</TabsTrigger>
                <TabsTrigger value='register'>Registrarse</TabsTrigger>
              </TabsList>
              <TabsContent value='login'>
                <AccountForm
                  message={searchParams?.message}
                  variant='login'
                />
              </TabsContent>
              <TabsContent value='register'>
                <AccountForm
                  message={searchParams?.message}
                  variant='register'
                />
              </TabsContent>
            </Tabs>
            <div className='relative my-4'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                  O continúa con
                </span>
              </div>
            </div>
            <div className='grid gap-2'>
              <Button
                variant='outline'
                type='button'
              >
                Google
              </Button>
            </div>
          </CardContent>
          <CardFooter className='flex flex-wrap items-center justify-between gap-2'>
            <div className='text-sm text-muted-foreground'>
              <span className='mr-1 hidden sm:inline-block'>
                ¿Necesitas ayuda?
              </span>
              <a
                aria-label='Términos de servicio'
                href='#'
                className='underline underline-offset-4 hover:text-primary'
              >
                Términos de servicio
              </a>
            </div>
            <div className='text-sm text-muted-foreground'>
              <a
                aria-label='Política de privacidad'
                href='#'
                className='underline underline-offset-4 hover:text-primary'
              >
                Política de privacidad
              </a>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
