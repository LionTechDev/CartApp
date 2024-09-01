import HomeCard from "@/components/HomeCard";
import { Button } from "@/components/ui/button";
import {
	LockIcon,
	StarIcon,
	LogOut,
	QrCode,
	UserPen,
	Sparkles,
	CupSoda,
	CalendarHeart,
	Headset,
	Earth,
	CreditCard,
	Utensils,
} from "lucide-react";
import Link from "next/link";
import { title } from "process";

export default function Component() {
	return (
		<div id="Home" className="flex min-h-screen  bg-gray-100">
			<div className="flex-1 p-8">
				<header className="flex justify-between items-center mb-8">
					<div>
						<h1 className="text-3xl font-bold">Bienvenido {"{ User Name }"}</h1>
						<p className="text-sm text-gray-500">
							En este panel podras encontrar toda la Información de tu negocio
						</p>
					</div>
					<LogOut className="text-gray-500" />
				</header>

				<div className="grid gird-cols-1 md:grid-cols-2 mb-6  gap-6">
					<div id="informacion de usuario">
						<HomeCard
							title="Información de la cuenta"
							description="Administra y edita los datos de tu negocio"
							icon={
								<UserPen
									size={48}
									strokeWidth={1.5}
									className="text-gray-300 mb-2"
								/>
							}
							actionButton={{
								title: "Editar",
								link: "/acount",
							}}
						/>
						<div className="grid grid-cols-2 gap-6 my-6">
							<HomeCard
								title="Generar carta con IA"
								description="Sube una fotografia y crea tu carta en segundos"
								isLocked
								isNew
								isVertical
								icon={
									<Sparkles
										size={48}
										strokeWidth={2}
										className="text-gray-300 mb-2"
									/>
								}
							/>
							<HomeCard
								title="Pagos y Suscripciones"
								description="Accede a los pagos y suscripciones"
								isVertical
								icon={
									<CreditCard
										size={48}
										strokeWidth={1.5}
										className="text-gray-300 mb-2"
									/>
								}
								actionButton={{
									title: "acceder",
									link: "/acount",
								}}
							/>
						</div>
					</div>
					<div id="informacion de productos">
						<HomeCard
							title="Categorias y Productos"
							description="Edita las categorías y productos"
							icon={
								<Utensils
									size={48}
									strokeWidth={1.5}
									className="text-gray-300 mb-2"
								/>
							}
							actionButton={{
								title: "Editar",
								link: "/",
							}}
						/>
						<div className="grid grid-cols-2 gap-6 my-6">
							<HomeCard
								title="Menú Diario"
								description="Edita fácilmente tu menú diario"
								isVertical
								icon={
									<CalendarHeart
										size={48}
										strokeWidth={2}
										className="text-gray-300 mb-2"
									/>
								}
							/>
							<HomeCard
								title="Carta de Bebidas"
								description="Edita los Ajustes de tus bebidas en la carta"
								isVertical
								icon={
									<CupSoda
										size={48}
										strokeWidth={1.5}
										className="text-gray-300 mb-2"
									/>
								}
								actionButton={{
									title: "acceder",
									link: "/acount",
								}}
							/>
						</div>
					</div>
				</div>

				<HomeCard
					title="Premios y Juegos"
					description="En esta sección podrás encontrar y configurar diferentes premios
								para tus clientes y la posibilidad de activar los principales
								juegos de la marca. Esta es una revolucionaria forma de crear
								fidelizacion de tus clientes."
					isLocked
					isPremium
					icon={
						<StarIcon
							size={48}
							strokeWidth={2}
							className="text-gray-300 mb-2"
						/>
					}
					actionButton={{
						title: "acceder",
						link: "/acount",
					}}
				/>
			</div>

			<div
				id="App-Preview"
				className="hidden w-80 bg-white p-6 lg:flex flex-col justify-between "
			>
				<div
					className="rounded-lg bg-gray-100 h-3/4 mb-4 flex justify-center items-center
        text-gray-500"
				>
					PREVIEW
				</div>
				<div>
					<Button className="w-full mb-2">
						<Earth size={16} className="mr-2" />
						Ver Aplicación Online
					</Button>
					<Button className="w-full mb-2">
						<QrCode size={16} className="mr-2" />
						Descargar QR
					</Button>
					<Button variant="outline" className="w-full">
						<Headset size={16} className="mr-2" />
						Atencion al Cliente
					</Button>
				</div>
			</div>
		</div>
	);
}
