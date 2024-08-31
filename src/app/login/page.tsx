"use client";
import { useState } from "react";
import { login, signup } from "./actions";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AuthPage() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}

	return (
		<div className="flex min-h-screen">
			{/* Columna de la imagen */}
			<div className="hidden w-1/2 bg-gray-100 lg:block">
				<Image
					src="/placeholder.svg?height=1080&width=1920"
					alt="Imagen de autenticación"
					width={1920}
					height={1080}
					className="object-cover w-full h-full"
				/>
			</div>

			{/* Columna del formulario */}
			<div className="w-full lg:w-1/2 flex items-center justify-center p-8">
				<Card className="w-full max-w-md">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold">Bienvenido</CardTitle>
						<CardDescription>
							Inicia sesión en tu cuenta o crea una nueva
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="login">
							<TabsList className="grid w-full grid-cols-2 mb-4">
								<TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
								<TabsTrigger value="register">Registrarse</TabsTrigger>
							</TabsList>
							<TabsContent value="login">
								<form>
									<div className="grid gap-4">
										<div className="grid gap-2">
											<Label htmlFor="email">Correo Electrónico</Label>
											<Input id="email 2" name="email" type="email" required />
										</div>
										<div className="grid gap-2">
											<Label htmlFor="password">Contraseña</Label>
											<Input
												id="password"
												name="password"
												type="password"
												required
											/>
										</div>
										<Button disabled={isLoading} formAction={login}>
											Iniciar Sesión
										</Button>
									</div>
								</form>
							</TabsContent>
							<TabsContent value="register">
								<form>
									<div className="grid gap-4">
										<div className="grid gap-2">
											<Label htmlFor="email">Correo Electrónico</Label>
											<Input id="email" name="email" type="email" required />
										</div>
										<div className="grid gap-2">
											<Label htmlFor="password">Contraseña</Label>
											<Input
												id="password"
												name="password"
												type="password"
												required
											/>
										</div>
										{/* 	<div className="grid gap-2">
											<Label htmlFor="confirm-password">
												Confirmar Contraseña
											</Label>
											<Input id="confirm-password" type="password" required />
										</div> */}
										<Button disabled={isLoading} formAction={signup}>
											Crear Cuenta
										</Button>
									</div>
								</form>
							</TabsContent>
						</Tabs>
						<div className="relative my-4">
							<div className="absolute inset-0 flex items-center">
								<span className="w-full border-t" />
							</div>
							<div className="relative flex justify-center text-xs uppercase">
								<span className="bg-background px-2 text-muted-foreground">
									O continúa con
								</span>
							</div>
						</div>
						<div className="grid gap-2">
							<Button variant="outline" type="button" disabled={isLoading}>
								Google
							</Button>
						</div>
					</CardContent>
					<CardFooter className="flex flex-wrap items-center justify-between gap-2">
						<div className="text-sm text-muted-foreground">
							<span className="mr-1 hidden sm:inline-block">
								¿Necesitas ayuda?
							</span>
							<a
								aria-label="Términos de servicio"
								href="#"
								className="underline underline-offset-4 hover:text-primary"
							>
								Términos de servicio
							</a>
						</div>
						<div className="text-sm text-muted-foreground">
							<a
								aria-label="Política de privacidad"
								href="#"
								className="underline underline-offset-4 hover:text-primary"
							>
								Política de privacidad
							</a>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
