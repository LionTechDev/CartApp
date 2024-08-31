import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { LockIcon, StarIcon, LogOut, QrCode } from "lucide-react";
import Image from "next/image";

export default function Component() {
	return (
		<div id="Home" className="flex min-h-screen  bg-gray-100">
			<div className="flex-1 p-8">
				<header className="flex justify-between items-center mb-8">
					<div>
						<h1 className="text-3xl font-bold">Bienvenido {"{ User Name }"}</h1>
						<p className="text-sm text-gray-500">
							Edita la información del local
						</p>
					</div>
					<LogOut className="text-gray-500" />
				</header>

				<div className="grid grid-cols-2 gap-6 mb-6">
					<Card className="hover:shadow-lg transition-shadow cursor-pointer">
						<CardHeader className="flex flex-row items-center space-x-4">
							<div className="w-12 h-12 rounded-full bg-gray-200" />
							<div className="space-y-2">
								<CardTitle>Información de la cuenta</CardTitle>
								<p className="text-sm text-gray-500">
									Información de la cuenta
								</p>
							</div>
						</CardHeader>
						<CardFooter>
							<Button variant="outline" className="ml-auto">
								Editar
							</Button>
						</CardFooter>
					</Card>
					<Card className="hover:shadow-lg transition-shadow cursor-pointer">
						<CardHeader className="flex flex-row items-center space-x-4">
							<div className="w-12 h-12 rounded-full bg-gray-200" />
							<div className="space-y-2 ">
								<CardTitle>Categorías y Productos</CardTitle>
								<p className="text-sm text-gray-500">
									Edita las categorías y productos
								</p>
							</div>
						</CardHeader>
						<CardFooter>
							<Button variant="outline" className="ml-auto">
								Editar
							</Button>
						</CardFooter>
					</Card>
				</div>
				<div className="grid grid-cols-4 gap-6 mb-6">
					{[
						{
							title: "Menú Diario",
							description:
								"Edita fácilmente tu menú diario para mantener tu menú actualizado al instante",
						},
						{
							title: "Carta de Bebidas",
							description: "Edita los Ajustes de tus bebidas en la carta",
						},
						{
							title: "Generar carta con IA",
							description:
								"Con nuestra aplicación podrás crear tu carta en segundos mejorando los textos",
							isNew: true,
							isLocked: true,
						},
						{
							title: "Descargar QR",
							description: "Descarga el QR de tu carta digital",
							hasQR: true,
						},
					].map((item, index) => (
						<Card
							key={index}
							className="hover:shadow-lg transition-shadow cursor-pointer"
						>
							<CardContent className="p-6 flex flex-col items-center justify-center h-full text-center relative">
								<div className="pb-5">
									{item.isNew && (
										<span className=" absolute top-2 left-2 text-xs bg-black text-white px-2 py-1 rounded">
											NEW
										</span>
									)}
									{item.isLocked && (
										<LockIcon
											className="absolute top-2 right-2 text-gray-500"
											size={16}
										/>
									)}
								</div>

								<h3 className="font-semibold mb-2">{item.title}</h3>
								<p className="text-sm text-gray-500">{item.description}</p>
								{item.hasQR && (
									<QrCode className="text-gray-500" />
									/* 		<Image
										src="/placeholder.svg"
										alt="QR Code"
										width={100}
										height={100}
										className="mt-2"
									/> */
								)}
							</CardContent>
						</Card>
					))}
				</div>

				<Card className="hover:shadow-lg transition-shadow cursor-pointer">
					<CardHeader className="flex flex-row items-center space-x-4">
						<StarIcon className="w-12 h-12 text-gray-300" />
						<div className="space-y-2">
							<CardTitle>Premios y Juegos</CardTitle>
							<p className="text-sm text-gray-500">
								En esta sección podrás encontrar y configurar diferentes premios
								para tus clientes y la posibilidad de activar los principales
								juegos de la marca.
							</p>
						</div>
					</CardHeader>
					<CardFooter>
						<Button variant="outline" className="ml-auto">
							Acceder
						</Button>
					</CardFooter>
				</Card>
			</div>

			<div
				id="App-Preview"
				className="hidden w-80 bg-white p-6 lg:flex flex-col justify-between "
			>
				<div className="rounded-lg bg-gray-100 h-3/4 mb-4" />
				<Button className="w-full mb-2">Ver Aplicación Online</Button>
				<Button variant="outline" className="w-full">
					Descargar QR
				</Button>
			</div>
		</div>
	);
}
