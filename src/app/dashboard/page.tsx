import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { signOut } from "../login/actions";
import { checkLogin, getUser } from "@/utils/utils";
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
} from "lucide-react";

export default async function Dashboard() {
	const { user } = await getUser();

	return (
		<div className="bg-background text-foreground">
			<header className="flex items-center justify-between border-b px-6 py-4 sticky top-0 z-10 bg-background">
				<div>
					<h1 className="text-2xl font-bold">MENU APP</h1>
					<span className="text-sm sm">Bienvenido {user?.email}</span>
				</div>
				<div className="hidden md:flex items-center gap-4">
					<Button variant="ghost" className="flex items-center gap-2">
						<Earth className="h-5 w-5" />
						Ver Aplicación Online
					</Button>
					<Button variant="ghost" className="flex items-center gap-2">
						<QrCode className="h-5 w-5" />
						Descargar QR
					</Button>
					<Button variant="ghost" className="flex items-center gap-2">
						<Mail className="h-5 w-5" />
						Atención al Cliente
					</Button>
					<form>
						<Button
							variant="ghost"
							className="flex items-center gap-2"
							formAction={signOut}
						>
							<LogOut className="h-5 w-5" />
							Cerrar Sesión
						</Button>
					</form>
				</div>
				<div className="md:hidden">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="flex items-center gap-2">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-48">
							<DropdownMenuItem>
								<Button variant="ghost" className="flex items-center gap-2">
									<Earth className="h-5 w-5" />
									Ver Aplicación Online
								</Button>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Button variant="ghost" className="flex items-center gap-2">
									<QrCode className="h-5 w-5" />
									Descargar QR
								</Button>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Button variant="ghost" className="flex items-center gap-2">
									<Mail className="h-5 w-5" />
									Atención al Cliente
								</Button>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Button variant="ghost" className="flex items-center gap-2">
									<LogOut className="h-5 w-5" />
									Cerrar Sesión
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>
			<main className="container mx-auto grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
				<Link href="/dashboard/account" prefetch={false}>
					<Card className="flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
						<UserPen className="mb-4 h-12 w-12 text-muted-foreground" />
						<h2 className="text-lg font-semibold">Información de la cuenta</h2>
						<p className="text-muted-foreground">
							Administra y edita los datos de tu negocio
						</p>
					</Card>
				</Link>

				<Link href="/dashboard/catalog" prefetch={false}>
					<Card className="flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
						<Utensils className="mb-4 h-12 w-12 text-muted-foreground" />
						<h2 className="text-lg font-semibold">Categorías y Productos</h2>
						<p className="text-muted-foreground">
							Edita las categorías y productos
						</p>
					</Card>
				</Link>
				<Link href="/dashboard/menus" prefetch={false}>
					<Card className="flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
						<NotebookText className="mb-4 h-12 w-12 text-muted-foreground" />
						<h2 className="text-lg font-semibold">Mis Cartas</h2>
						<p className="text-muted-foreground">
							Edita los ajustes de tus cartas
						</p>
					</Card>
				</Link>
				<Link href="#" prefetch={false}>
					<Card className="relative flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
						<Badge variant="default" className="absolute top-4 left-4">
							NEW
						</Badge>
						<Sparkles className="mb-4 h-12 w-12 text-muted-foreground" />
						<h2 className="text-lg font-semibold">Generar carta con IA</h2>
						<p className="text-muted-foreground">
							Sube una fotografía y crea tu carta en segundos
						</p>
					</Card>
				</Link>
				<Link href="#" prefetch={false}>
					<Card className="flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
						<CalendarHeart className="mb-4 h-12 w-12 text-muted-foreground" />
						<h2 className="text-lg font-semibold">Menú Diario</h2>
						<p className="text-muted-foreground">
							Edita fácilmente tu menú diario
						</p>
					</Card>
				</Link>

				<Link href="#" prefetch={false}>
					<Card className="relative flex flex-col items-center rounded-lg border-0 bg-card p-6 shadow-sm hover:shadow-lg transition-shadow h-full">
						<Badge variant="secondary" className="absolute top-4 left-4">
							PREMIUM
						</Badge>
						<Gamepad2 className="mb-4 h-12 w-12 text-muted-foreground" />
						<h2 className="text-lg font-semibold">Premios y Juegos</h2>
						<p className="text-center text-muted-foreground">
							Conoce esta nueva forma revolucionaria de atraer y fidelizar a tus
							clientes
						</p>
					</Card>
				</Link>
			</main>
		</div>
	);
}
