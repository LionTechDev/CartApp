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
	DialogDescription,
} from "@/components/ui/dialog";
import {
	ArrowLeft,
	Plus,
	Trash2,
	Pencil,
	Search,
	Check,
	Settings,
	X,
	ChevronLeft,
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
	isActive: boolean;
	categories: string[];
};

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
			isActive: true,
			categories: ["ENSALADAS", "BEBIDAS"],
		},
		{
			id: 2,
			name: "Carta de Invierno",
			isActive: false,
			categories: ["PIZZAS", "HAMBURGUESAS"],
		},
		{
			id: 3,
			name: "Carta Especial",
			isActive: false,
			categories: ["POSTRES", "BEBIDAS"],
		},
	]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
	const [isDeleteCategoryDialogOpen, setIsDeleteCategoryDialogOpen] =
		useState(false);
	const [
		isConfirmDeleteAllCategoriesDialogOpen,
		setIsConfirmDeleteAllCategoriesDialogOpen,
	] = useState(false);
	const [isConfirmDeleteMenuDialogOpen, setIsConfirmDeleteMenuDialogOpen] =
		useState(false);
	const [currentMenu, setCurrentMenu] = useState<Menu>({
		id: null,
		name: "",
		isActive: false,
		categories: [],
	});
	const [editingId, setEditingId] = useState<number | null>(null);
	const [editingName, setEditingName] = useState("");
	const [menuToActivate, setMenuToActivate] = useState<number | null>(null);
	const [categoryToDelete, setCategoryToDelete] = useState<{
		menuId: number;
		category: string;
	} | null>(null);
	const [menuToDeleteAllCategories, setMenuToDeleteAllCategories] = useState<
		number | null
	>(null);
	const [menuToDelete, setMenuToDelete] = useState<number | null>(null);

	const filteredMenus = menus.filter((menu) =>
		menu.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleCreateMenu = () => {
		const newMenu = { ...currentMenu, id: Date.now() };
		setMenus([...menus, newMenu]);
		setIsDialogOpen(false);
		setCurrentMenu({ id: null, name: "", isActive: false, categories: [] });
	};

	const handleDeleteMenu = () => {
		if (menuToDelete !== null) {
			setMenus(menus.filter((menu) => menu.id !== menuToDelete));
			setIsConfirmDeleteMenuDialogOpen(false);
			setMenuToDelete(null);
		}
	};

	const handleSetActiveMenu = (id: number) => {
		setMenuToActivate(id);
		setIsConfirmDialogOpen(true);
	};

	const confirmActivateMenu = () => {
		if (menuToActivate !== null) {
			setMenus(
				menus.map((menu) => ({
					...menu,
					isActive: menu.id === menuToActivate,
				}))
			);
			setIsConfirmDialogOpen(false);
			setMenuToActivate(null);
		}
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

	const handleRemoveCategory = () => {
		if (categoryToDelete) {
			setMenus(
				menus.map((menu) =>
					menu.id === categoryToDelete.menuId
						? {
								...menu,
								categories: menu.categories.filter(
									(cat) => cat !== categoryToDelete.category
								),
						  }
						: menu
				)
			);
			setIsDeleteCategoryDialogOpen(false);
			setCategoryToDelete(null);
		}
	};

	const handleRemoveAllCategories = () => {
		if (menuToDeleteAllCategories !== null) {
			setMenus(
				menus.map((menu) =>
					menu.id === menuToDeleteAllCategories
						? { ...menu, categories: [] }
						: menu
				)
			);
			setIsConfirmDeleteAllCategoriesDialogOpen(false);
			setMenuToDeleteAllCategories(null);
		}
	};

	const handleEditName = (id: number) => {
		setEditingId(id);
		setEditingName(menus.find((menu) => menu.id === id)?.name || "");
	};

	const handleConfirmEditName = () => {
		setMenus(
			menus.map((menu) =>
				menu.id === editingId ? { ...menu, name: editingName } : menu
			)
		);
		setEditingId(null);
		setEditingName("");
	};

	const handleCancelEditName = () => {
		setEditingId(null);
		setEditingName("");
	};

	const handleNavigateToManageCategories = (menuId: number) => {
		alert(
			`Navegando a la pantalla de administración de categorías para el menú con ID: ${menuId}`
		);
	};

	return (
		<div className="flex h-screen bg-gray-100">
			<aside className="w-64 bg-white shadow-md">
				<div className="p-4 border-b">
					<Link href="/dashboard">
						<Button variant="ghost" className="w-full justify-start">
							<ChevronLeft className="mr-2 h-4 w-4" />
							Volver
						</Button>
					</Link>
				</div>
			</aside>

			<main className="flex-1 overflow-y-auto p-8">
				<h1 className="text-3xl font-bold mb-6">Mis Cartas</h1>

				<div className="mb-6">
					<Input
						type="text"
						placeholder="Buscar cartas..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full"
						icon={<Search className="h-4 w-4 text-gray-500" />}
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{filteredMenus.map((menu) => (
						<Card
							key={menu.id}
							className={`flex flex-col ${
								menu.isActive ? "border-2 border-black" : ""
							}`}
						>
							<CardHeader className="pb-2">
								<CardTitle className="flex justify-between items-center">
									{editingId === menu.id ? (
										<div className="flex items-center w-full">
											<Input
												value={editingName}
												onChange={(e) => setEditingName(e.target.value)}
												className="mr-2"
												autoFocus
											/>
											<Button
												variant="ghost"
												size="sm"
												onClick={handleConfirmEditName}
											>
												<Check className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="sm"
												onClick={handleCancelEditName}
											>
												<X className="h-4 w-4" />
											</Button>
										</div>
									) : (
										<>
											{menu.name}
											<Button
												variant="ghost"
												size="sm"
												onClick={() => handleEditName(menu.id)}
											>
												<Pencil className="h-4 w-4" />
											</Button>
										</>
									)}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex flex-col space-y-2 mb-4">
									<Link
										href="/dashboard/catalog"
										className="border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground flex 
										h-8 rounded-md px-3 text-xs justify-center items-center"
									>
										<Settings className="h-4 w-4 mr-2" />
										<span>Crear o Administrar categorías</span>
									</Link>
									<Button
										variant="outline"
										size="sm"
										onClick={() => {
											setMenuToDeleteAllCategories(menu.id);
											setIsConfirmDeleteAllCategoriesDialogOpen(true);
										}}
									>
										<Trash2 className="h-4 w-4 mr-2" /> Quitar todas las
										categorías
									</Button>
								</div>
								<div className="space-y-2">
									{menu.categories.map((category, index) => (
										<div
											key={index}
											className="flex items-center justify-between"
										>
											<span>{category}</span>
											<Button
												variant="ghost"
												size="sm"
												onClick={() => {
													setCategoryToDelete({ menuId: menu.id, category });
													setIsDeleteCategoryDialogOpen(true);
												}}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									))}
								</div>
								<div className="mt-4">
									<Select
										onValueChange={(value) => handleAddCategory(menu.id, value)}
										disabled={PREDEFINED_CATEGORIES.every((cat) =>
											menu.categories.includes(cat)
										)}
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
								</div>
							</CardContent>
							<CardFooter className="flex justify-between mt-auto">
								<Button
									variant="outline"
									size="sm"
									className="text-red-500"
									onClick={() => {
										setMenuToDelete(menu.id);
										setIsConfirmDeleteMenuDialogOpen(true);
									}}
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

					<Card className="flex items-center justify-center">
						<Button
							variant="ghost"
							className="h-full w-full flex flex-col items-center py-8"
							onClick={() => setIsDialogOpen(true)}
						>
							<Plus className="h-8 w-8 mb-2" />
							<span>Crear Nueva Carta</span>
						</Button>
					</Card>
				</div>
			</main>

			<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Crear Nueva Carta</DialogTitle>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<label htmlFor="name" className="text-right">
								Nombre
							</label>
							<Input
								id="name"
								value={currentMenu.name}
								onChange={(e) =>
									setCurrentMenu({ ...currentMenu, name: e.target.value })
								}
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit" onClick={handleCreateMenu}>
							Crear Carta
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirmar Activación</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						¿Estás seguro de que quieres activar esta carta? La carta
						actualmente activa se desactivará.
					</DialogDescription>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setIsConfirmDialogOpen(false)}
						>
							Cancelar
						</Button>
						<Button onClick={confirmActivateMenu}>Confirmar</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Dialog
				open={isDeleteCategoryDialogOpen}
				onOpenChange={setIsDeleteCategoryDialogOpen}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirmar Eliminación</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						¿Estás seguro de que quieres eliminar esta categoría de la carta?
					</DialogDescription>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setIsDeleteCategoryDialogOpen(false)}
						>
							Cancelar
						</Button>
						<Button onClick={handleRemoveCategory}>Confirmar</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Dialog
				open={isConfirmDeleteAllCategoriesDialogOpen}
				onOpenChange={setIsConfirmDeleteAllCategoriesDialogOpen}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							Confirmar Eliminación de Todas las Categorías
						</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						¿Estás seguro de que quieres eliminar todas las categorías de esta
						carta? Esta acción no se puede deshacer.
					</DialogDescription>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setIsConfirmDeleteAllCategoriesDialogOpen(false)}
						>
							Cancelar
						</Button>
						<Button onClick={handleRemoveAllCategories}>Confirmar</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Dialog
				open={isConfirmDeleteMenuDialogOpen}
				onOpenChange={setIsConfirmDeleteMenuDialogOpen}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirmar Eliminación de Carta</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						¿Estás seguro de que quieres eliminar esta carta? Esta acción no se
						puede deshacer.
					</DialogDescription>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setIsConfirmDeleteMenuDialogOpen(false)}
						>
							Cancelar
						</Button>
						<Button onClick={handleDeleteMenu}>Confirmar</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
