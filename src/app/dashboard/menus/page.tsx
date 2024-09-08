"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
	ArrowLeft,
	Plus,
	Trash2,
	Edit,
	Search,
	X,
	Check,
	NotebookText,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

type Menu = {
	id: number;
	name: string;
	description: string;
	isActive: boolean;
	categories: string[];
};

// Categorías predefinidas
const PREDEFINED_CATEGORIES = [
	"BEBIDAS",
	"PIZZAS",
	"HAMBURGUESAS",
	"ENSALADAS",
	"POSTRES",
];

export default function Component() {
	const [menus, setMenus] = useState<Menu[]>([
		{
			id: 1,
			name: "Carta de Verano",
			description: "Platos frescos y ligeros",
			isActive: true,
			categories: ["ENSALADAS", "BEBIDAS"],
		},
		{
			id: 2,
			name: "Carta de Invierno",
			description: "Comidas calientes y reconfortantes",
			isActive: false,
			categories: ["PIZZAS", "HAMBURGUESAS"],
		},
		{
			id: 3,
			name: "Carta Especial",
			description: "Selección gourmet del chef",
			isActive: false,
			categories: ["POSTRES", "BEBIDAS"],
		},
	]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [currentMenu, setCurrentMenu] = useState<Menu>({
		id: null,
		name: "",
		description: "",
		isActive: false,
		categories: [],
	});

	const filteredMenus = menus.filter(
		(menu) =>
			menu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			menu.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleCreateOrUpdateMenu = () => {
		if (currentMenu.id) {
			setMenus(
				menus.map((menu) => (menu.id === currentMenu.id ? currentMenu : menu))
			);
		} else {
			const newMenu = { ...currentMenu, id: Date.now() };
			setMenus([...menus, newMenu]);
		}
		setIsDialogOpen(false);
		setCurrentMenu({
			id: null,
			name: "",
			description: "",
			isActive: false,
			categories: [],
		});
	};

	const handleDeleteMenu = (id: number) => {
		setMenus(menus.filter((menu) => menu.id !== id));
	};

	const handleSetActiveMenu = (id: number) => {
		setMenus(
			menus.map((menu) => ({
				...menu,
				isActive: menu.id === id,
			}))
		);
	};

	const handleAddCategory = (menuId: number, category: string) => {
		setMenus(
			menus.map((menu) =>
				menu.id === menuId && !menu.categories.includes(category)
					? { ...menu, categories: [...menu.categories, category] }
					: menu
			)
		);
	};

	const handleRemoveCategory = (menuId: number, categoryToRemove: string) => {
		setMenus(
			menus.map((menu) =>
				menu.id === menuId
					? {
							...menu,
							categories: menu.categories.filter(
								(cat) => cat !== categoryToRemove
							),
					  }
					: menu
			)
		);
	};

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Menú lateral */}
			<aside className="w-64 bg-white shadow-md">
				<div className="p-4">
					<Link href="/dashboard">
						<Button variant="ghost" className="w-full justify-start">
							<ArrowLeft className="mr-2 h-4 w-4" /> Volver
						</Button>
					</Link>
				</div>
			</aside>

			{/* Contenido principal */}
			<main className=" flex flex-col flex-1 p-8 overflow-auto gap-5">
				<div className="flex items-center gap-3">
					<NotebookText />
					<h1 className="text-3xl font-bold ">Mis Cartas</h1>
				</div>

				{/* Buscador */}
				<div className="mb-6">
					<Input
						type="text"
						placeholder="Buscar cartas..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full"
					/>
				</div>

				{/* Lista de menús */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{filteredMenus.map((menu) => (
						<Card
							key={menu.id}
							className={`flex flex-col justify-between  ${
								menu.isActive ? "border-2 border-black" : ""
							}`}
						>
							<CardHeader className="pb-2">
								<CardTitle className="flex justify-between items-center">
									{menu.name}
									{menu.isActive && (
										<div className="bg-black text-white text-xs font-bold py-1 px-2 rounded-full">
											Activo
										</div>
									)}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-sm mb-2">{menu.description}</p>
								<div className="flex flex-wrap gap-3 mb-4 ">
									{menu.categories.map((category, index) => (
										<div
											key={index}
											className="bg-gray-200 text-xs rounded-full px-2 py-1 flex items-center cursor-pointer"
											onClick={() => handleRemoveCategory(menu.id, category)}
										>
											{category}
											<X size={12} className="ml-2" />
										</div>
									))}
								</div>
								<Select
									onValueChange={(value) => handleAddCategory(menu.id, value)}
									disabled={menu.categories.length >= 5}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Agregar categoría" />
									</SelectTrigger>
									<SelectContent>
										{PREDEFINED_CATEGORIES.filter(
											(cat) => !menu.categories.includes(cat)
										).map((category) => (
											<SelectItem key={category} value={category}>
												{category}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button
									variant="outline"
									size="sm"
									onClick={() => {
										setCurrentMenu(menu);
										setIsDialogOpen(true);
									}}
								>
									<Edit className="h-4 w-4 mr-2" /> Editar
								</Button>
								<Button
									variant="outline"
									size="sm"
									className="text-red-500"
									onClick={() => handleDeleteMenu(menu.id)}
								>
									<Trash2 className="h-4 w-4 mr-2" /> Eliminar
								</Button>
								<Button
									variant="outline"
									size="sm"
									className={menu.isActive ? "bg-black text-white" : ""}
									onClick={() => handleSetActiveMenu(menu.id)}
								>
									<Check className="h-4 w-4 mr-2" />{" "}
									{menu.isActive ? "Activa" : "Activar"}
								</Button>
							</CardFooter>
						</Card>
					))}

					{/* Tarjeta para crear nueva carta */}
					<Card className="flex items-center justify-center min-h-[200px]">
						<Button
							variant="ghost"
							className="h-full w-full flex flex-col items-center"
							onClick={() => {
								setCurrentMenu({
									id: null,
									name: "",
									description: "",
									isActive: false,
									categories: [],
								});
								setIsDialogOpen(true);
							}}
						>
							<Plus className="h-8 w-8 mb-2" />
							<span>Crear Nueva Carta</span>
						</Button>
					</Card>
				</div>
			</main>

			{/* Diálogo para crear/editar menú */}
			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{currentMenu.id ? "Editar Carta" : "Crear Nueva Carta"}
						</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Nombre
							</Label>
							<Input
								id="name"
								value={currentMenu.name}
								onChange={(e) =>
									setCurrentMenu({ ...currentMenu, name: e.target.value })
								}
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Descripción
							</Label>
							<Input
								id="description"
								value={currentMenu.description}
								onChange={(e) =>
									setCurrentMenu({
										...currentMenu,
										description: e.target.value,
									})
								}
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit" onClick={handleCreateOrUpdateMenu}>
							{currentMenu.id ? "Guardar Cambios" : "Crear Carta"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
