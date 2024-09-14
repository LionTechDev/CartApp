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
	Globe,
	Printer,
	QrCode,
	Settings,
	Check,
	X,
	ArrowUp,
	ArrowDown,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type Menu = {
	id: number;
	name: string;
	isPublished: boolean;
	categories: string[];
	onlineUrl?: string;
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
			isPublished: true,
			categories: ["ENSALADAS", "BEBIDAS"],
		},
		{
			id: 2,
			name: "Carta de Invierno",
			isPublished: false,
			categories: ["PIZZAS", "HAMBURGUESAS"],
		},
		{
			id: 3,
			name: "Carta Especial",
			isPublished: false,
			categories: ["POSTRES", "BEBIDAS"],
		},
	]);
	const [searchTerm, setSearchTerm] = useState("");
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [isDeleteCategoryDialogOpen, setIsDeleteCategoryDialogOpen] =
		useState(false);
	const [
		isConfirmDeleteAllCategoriesDialogOpen,
		setIsConfirmDeleteAllCategoriesDialogOpen,
	] = useState(false);
	const [isConfirmDeleteMenuDialogOpen, setIsConfirmDeleteMenuDialogOpen] =
		useState(false);
	const [isOnlineMenuDialogOpen, setIsOnlineMenuDialogOpen] = useState(false);
	const [currentMenu, setCurrentMenu] = useState<Menu>({
		id: null,
		name: "",
		isPublished: false,
		categories: [],
	});
	const [editingId, setEditingId] = useState<number | null>(null);
	const [editingName, setEditingName] = useState("");
	const [categoryToDelete, setCategoryToDelete] = useState<{
		menuId: number;
		category: string;
	} | null>(null);
	const [menuToDeleteAllCategories, setMenuToDeleteAllCategories] = useState<
		number | null
	>(null);
	const [menuToDelete, setMenuToDelete] = useState<number | null>(null);
	const [menuToPublish, setMenuToPublish] = useState<number | null>(null);

	const filteredMenus = menus.filter((menu) =>
		menu.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleCreateMenu = () => {
		const newMenu = { ...currentMenu, id: Date.now() };
		setMenus([...menus, newMenu]);
		setIsDialogOpen(false);
		setCurrentMenu({ id: null, name: "", isPublished: false, categories: [] });
	};

	const handleDeleteMenu = () => {
		if (menuToDelete !== null) {
			setMenus(menus.filter((menu) => menu.id !== menuToDelete));
			setIsConfirmDeleteMenuDialogOpen(false);
			setMenuToDelete(null);
		}
	};

	const handleTogglePublish = (id: number) => {
		setMenus(
			menus.map((menu) =>
				menu.id === id ? { ...menu, isPublished: !menu.isPublished } : menu
			)
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

	const handleMoveCategory = (
		menuId: number,
		categoryIndex: number,
		direction: "up" | "down"
	) => {
		setMenus(
			menus.map((menu) => {
				if (menu.id === menuId) {
					const newCategories = [...menu.categories];
					if (direction === "up" && categoryIndex > 0) {
						[newCategories[categoryIndex - 1], newCategories[categoryIndex]] = [
							newCategories[categoryIndex],
							newCategories[categoryIndex - 1],
						];
					} else if (
						direction === "down" &&
						categoryIndex < newCategories.length - 1
					) {
						[newCategories[categoryIndex], newCategories[categoryIndex + 1]] = [
							newCategories[categoryIndex + 1],
							newCategories[categoryIndex],
						];
					}
					return { ...menu, categories: newCategories };
				}
				return menu;
			})
		);
	};

	const handlePublishMenu = (menuId: number) => {
		setMenus(
			menus.map((menu) =>
				menu.id === menuId
					? { ...menu, onlineUrl: `https://example.com/menu/${menuId}` }
					: menu
			)
		);
		setMenuToPublish(menuId);
		setIsOnlineMenuDialogOpen(true);
	};

	return (
		<div className="flex h-screen bg-gray-100">
			<aside className="w-64 bg-white shadow-md flex flex-col">
				<div className="p-4 flex-grow">
					<Button variant="ghost" className="w-full justify-start mb-4">
						<ArrowLeft className="mr-2 h-4 w-4" /> Volver
					</Button>
					<Button className="w-full mb-4" onClick={() => setIsDialogOpen(true)}>
						<Plus className="mr-2 h-4 w-4" /> Crear Nueva Carta
					</Button>
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
						<Card key={menu.id} className="flex flex-col">
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
									<Button
										variant="outline"
										size="sm"
										onClick={() => handleNavigateToManageCategories(menu.id)}
									>
										<Settings className="h-4 w-4 mr-2" /> Crear o Administrar
										categorías
									</Button>
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
											<div>
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														handleMoveCategory(menu.id, index, "up")
													}
													disabled={index === 0}
												>
													<ArrowUp className="h-4 w-4" />
												</Button>
												<Button
													variant="ghost"
													size="sm"
													onClick={() =>
														handleMoveCategory(menu.id, index, "down")
													}
													disabled={index === menu.categories.length - 1}
												>
													<ArrowDown className="h-4 w-4" />
												</Button>
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
							<CardFooter className="flex flex-col space-y-2">
								<div className="flex justify-between items-center w-full">
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
									<div className="flex items-center space-x-2">
										<Switch
											id={`publish-${menu.id}`}
											checked={menu.isPublished}
											onCheckedChange={() => handleTogglePublish(menu.id)}
										/>
										<Label htmlFor={`publish-${menu.id}`}>
											{menu.isPublished ? "Publicada" : "Sin publicar"}
										</Label>
									</div>
								</div>
								<Button
									variant="outline"
									size="sm"
									className="w-full"
									onClick={() => handlePublishMenu(menu.id)}
								>
									{menu.onlineUrl ? <Globe className="h-4 w-4 mr-2" /> : null}
									{menu.onlineUrl ? "Carta Online" : "Publicar Carta"}
								</Button>
							</CardFooter>
						</Card>
					))}
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

			<Dialog
				open={isOnlineMenuDialogOpen}
				onOpenChange={setIsOnlineMenuDialogOpen}
			>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Carta Online Publicada</DialogTitle>
					</DialogHeader>
					<DialogDescription>
						Tu carta online ha sido publicada exitosamente. ¿Qué deseas hacer?
					</DialogDescription>
					<div className="grid gap-4 py-4">
						<Button
							onClick={() =>
								window.open(
									menus.find((m) => m.id === menuToPublish)?.onlineUrl,
									"_blank"
								)
							}
						>
							<Globe className="h-4 w-4 mr-2" /> Ir a mi carta online
						</Button>
						<Button onClick={() => alert("Imprimiendo carta online...")}>
							<Printer className="h-4 w-4 mr-2" /> Imprimir carta online
						</Button>
						<Button onClick={() => alert("Imprimiendo QR...")}>
							<QrCode className="h-4 w-4 mr-2" /> Imprimir QR
						</Button>
					</div>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setIsOnlineMenuDialogOpen(false)}
						>
							Cerrar
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
