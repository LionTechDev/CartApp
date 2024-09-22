import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { signOut } from '../login/actions'
import { checkLogin, getUser } from '@/utils/utils'
import {
  LogOut,
  QrCode,
  UserPen,
  Sparkles,
  NotebookText,
  CalendarHeart,
  Earth,
  Mail,
  Menu,
  Gamepad2,
  Utensils,
} from 'lucide-react'
export default async function Dashboard() {
  const { user } = await getUser()
  await checkLogin()

  return (
    <div className='bg-background text-foreground'>
      <header className='flex items-center justify-between border-b px-6 py-4 sticky top-0 z-10 bg-background'>
        <div>
          <h1 className='text-2xl font-bold'>MENU APP</h1>
          <span className='text-sm sm'>Bienvenido {user?.email}</span>
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <Button
            variant='ghost'
            className='flex items-center gap-2'
          >
            <Earth className='h-5 w-5' />
            Ver Aplicación Online
          </Button>
          <Button
            variant='ghost'
            className='flex items-center gap-2'
          >
            <QrCode className='h-5 w-5' />
            Descargar QR
          </Button>
          <Button
            variant='ghost'
            className='flex items-center gap-2'
          >
            <Mail className='h-5 w-5' />
            Atención al Cliente
          </Button>
          <form>
            <Button
              variant='ghost'
              className='flex items-center gap-2'
              formAction={signOut}
            >
              <LogOut className='h-5 w-5' />
              Cerrar Sesión
            </Button>
          </form>
        </div>
        <div className='md:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='flex items-center gap-2'
              >
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='w-48'
            >
              <DropdownMenuItem>
                <Button
                  variant='ghost'
                  className='flex items-center gap-2'
                >
                  <Earth className='h-5 w-5' />
                  Ver Aplicación Online
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant='ghost'
                  className='flex items-center gap-2'
                >
                  <QrCode className='h-5 w-5' />
                  Descargar QR
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant='ghost'
                  className='flex items-center gap-2'
                >
                  <Mail className='h-5 w-5' />
                  Atención al Cliente
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant='ghost'
                  className='flex items-center gap-2'
                >
                  <LogOut className='h-5 w-5' />
                  Cerrar Sesión
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className='container mx-auto grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
        <Link
          href='/dashboard/account'
          prefetch={false}
        >
          <Card className='flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full'>
            <UserPen className='mb-4 h-12 w-12 text-muted-foreground' />
            <h2 className='text-lg font-semibold'>Información de la cuenta</h2>
            <p className='text-muted-foreground'>
              Administra y edita los datos de tu negocio
            </p>
          </Card>
        </Link>

        <Link
          href='/dashboard/catalog'
          prefetch={false}
        >
          <Card className='flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full'>
            <Utensils className='mb-4 h-12 w-12 text-muted-foreground' />
            <h2 className='text-lg font-semibold'>Categorías y Productos</h2>
            <p className='text-muted-foreground'>
              Edita las categorías y productos
            </p>
          </Card>
        </Link>
        <Link
          href='/dashboard/menus'
          prefetch={false}
        >
          <Card className='flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full'>
            <NotebookText className='mb-4 h-12 w-12 text-muted-foreground' />
            <h2 className='text-lg font-semibold'>Mis Cartas</h2>
            <p className='text-muted-foreground'>
              Edita los ajustes de tus cartas
            </p>
          </Card>
        </Link>
        <Link
          href='#'
          prefetch={false}
        >
          <Card className='relative flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full'>
            <Badge
              variant='default'
              className='absolute top-4 left-4'
            >
              NEW
            </Badge>
            <Sparkles className='mb-4 h-12 w-12 text-muted-foreground' />
            <h2 className='text-lg font-semibold'>Generar carta con IA</h2>
            <p className='text-muted-foreground'>
              Sube una fotografía y crea tu carta en segundos
            </p>
          </Card>
        </Link>
        <Link
          href='#'
          prefetch={false}
        >
          <Card className='flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full'>
            <CalendarHeart className='mb-4 h-12 w-12 text-muted-foreground' />
            <h2 className='text-lg font-semibold'>Menú Diario</h2>
            <p className='text-muted-foreground'>
              Edita fácilmente tu menú diario
            </p>
          </Card>
        </Link>

        <Link
          href='#'
          prefetch={false}
        >
          <Card className='relative flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full'>
            <Badge
              variant='secondary'
              className='absolute top-4 left-4'
            >
              PREMIUM
            </Badge>
            <Gamepad2 className='mb-4 h-12 w-12 text-muted-foreground' />
            <h2 className='text-lg font-semibold'>Premios y Juegos</h2>
            <p className='text-center text-muted-foreground'>
              Conoce esta nueva forma revolucionaria de atraer y fidelizar a tus
              clientes
            </p>
          </Card>
        </Link>
      </main>
    </div>
  )
}

/* function AwardIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
			<circle cx="12" cy="8" r="6" />
		</svg>
	);
}

function BeerIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M17 11h1a3 3 0 0 1 0 6h-1" />
			<path d="M9 12v6" />
			<path d="M13 12v6" />
			<path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
			<path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
		</svg>
	);
}

function CalendarHeartIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
			<path d="M8 2v4" />
			<path d="M16 2v4" />
			<path d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z" />
		</svg>
	);
}

function GlobeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
			<path d="M2 12h20" />
		</svg>
	);
}

function HeadsetIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
			<path d="M21 16v2a4 4 0 0 1-4 4h-5" />
		</svg>
	);
}

function LogOutIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			<polyline points="16 17 21 12 16 7" />
			<line x1="21" x2="9" y1="12" y2="12" />
		</svg>
	);
}

function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}

function SparkleIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
		</svg>
	);
}

function UserIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

function UtensilsIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
			<path d="M7 2v20" />
			<path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
		</svg>
	);
} */
