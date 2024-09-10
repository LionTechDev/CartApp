/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
	ChevronLeft,
	Plus,
	Trash2,
	Edit,
	AlertTriangle,
	ChevronUp,
	ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Component() {
	const [categories, setCategories] = useState<
		{ name: string; count: number; image: string | null }[]
	>([
		{
			name: "Pizzas",
			count: 2,
			image:
				"https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			name: "Categoría 2",
			count: 1,
			image: "/placeholder.svg?height=100&width=200",
		},
		{
			name: "Categoría 3",
			count: 1,
			image: "/placeholder.svg?height=100&width=200",
		},
	]);
	const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [itemToDelete, setItemToDelete] = useState<{
		type: string;
		name: string;
	}>({ type: "", name: "" });
	const [newCategory, setNewCategory] = useState<{
		name: string;
		image: string | null;
	}>({ name: "", image: null });
	const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
	const [menuTitle, setMenuTitle] = useState("Carta sin título");
	const [isEditingTitle, setIsEditingTitle] = useState(false);
	const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
	const [menuName, setMenuName] = useState("");

	const products = [
		{
			id: 1,
			name: "Pizza Peperoni",
			price: "15€",
			description: "Deliciosa pizza con peperoni y queso mozzarella",
			image:
				"https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			category: "Pizzas",
		},
		{
			id: 2,
			name: "Pasta Carbonara",
			price: "12€",
			description: "Pasta con salsa carbonara cremosa",
			image: "https://placehold.co/500x500.png",
			category: "Pizzas",
		},
		{
			id: 3,
			name: "Ensalada César",
			price: "8€",
			description: "Ensalada fresca con pollo y aderezo César",
			image: "https://placehold.co/500x500.png",
			category: "Categoría 2",
		},
		{
			id: 4,
			name: "Tiramisú",
			price: "6€",
			description: "Postre italiano con café y mascarpone",
			image: "https://placehold.co/500x500.png",
			category: "Categoría 3",
		},
	];

	const handleDelete = (type: string, name: string) => {
		setItemToDelete({ type, name });
		setIsDeleteModalOpen(true);
	};

	const confirmDelete = () => {
		console.log(`Eliminando ${itemToDelete.type}: ${itemToDelete.name}`);
		setIsDeleteModalOpen(false);
	};

	const handleCreateCategory = () => {
		console.log("Creando nueva categoría:", newCategory);
		setCategories([...categories, { ...newCategory, count: 0 }]);
		setNewCategory({ name: "", image: null });
	};

	const handleProductSelect = (productId: number) => {
		setSelectedProducts((prev) =>
			prev.includes(productId)
				? prev.filter((id) => id !== productId)
				: [...prev, productId]
		);
	};

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setNewCategory({ ...newCategory, image: URL.createObjectURL(file) });
		}
	};

	const handleSaveMenu = () => {
		console.log("Guardando carta:", { title: menuTitle, selectedProducts });
		setIsSaveModalOpen(false);
		setMenuName("");
	};

	const moveCategory = (index: number, direction: "up" | "down") => {
		const newCategories = [...categories];
		if (direction === "up" && index > 0) {
			[newCategories[index - 1], newCategories[index]] = [
				newCategories[index],
				newCategories[index - 1],
			];
		} else if (direction === "down" && index < categories.length - 1) {
			[newCategories[index], newCategories[index + 1]] = [
				newCategories[index + 1],
				newCategories[index],
			];
		}
		setCategories(newCategories);
	};

	const filteredProducts = products.filter(
		(p) => p.category === selectedCategory
	);

	return (
		<div className="flex h-screen max-h-screen bg-gray-100">
			{/* Sidebar */}
			<div className=" bg-white shadow-lg w-64 ">
				<div className="p-4 border-b">
					<Link href="/dashboard/menus">
						<Button variant="ghost" className="w-full justify-start">
							<ChevronLeft className="mr-2 h-4 w-4" />
							Volver
						</Button>
					</Link>
				</div>
				<div className="p-4">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline" className="w-full">
								Crear Nueva Categoría
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Crear Nueva Categoría</DialogTitle>
								<DialogDescription>
									Ingrese el nombre y suba una imagen para la nueva categoría.
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Nombre
									</Label>
									<Input
										id="name"
										value={newCategory.name}
										onChange={(e) =>
											setNewCategory({ ...newCategory, name: e.target.value })
										}
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="image" className="text-right">
										Imagen
									</Label>
									<Input
										id="image"
										type="file"
										accept="image/*"
										onChange={handleImageUpload}
										className="col-span-3"
									/>
								</div>
							</div>
							<DialogFooter>
								<Button onClick={handleCreateCategory}>Crear Categoría</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
				<ScrollArea className="">
					{categories.map((category, index) => (
						<div key={category.name} className="flex items-center">
							<Button
								variant="ghost"
								className={`flex-grow justify-start py-2 px-4 ${
									selectedCategory === category.name
										? "bg-gray-100 rounded-none"
										: ""
								}`}
								onClick={() => setSelectedCategory(category.name)}
							>
								{category.name} ({category.count})
							</Button>
							<div className="flex flex-col mr-2">
								<Button
									variant="ghost"
									size="icon"
									className="h-6 w-6"
									onClick={() => moveCategory(index, "up")}
									disabled={index === 0}
								>
									<ChevronUp className="h-4 w-4" />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									className="h-6 w-6"
									onClick={() => moveCategory(index, "down")}
									disabled={index === categories.length - 1}
								>
									<ChevronDown className="h-4 w-4" />
								</Button>
							</div>
						</div>
					))}
				</ScrollArea>
				<div className="absolute bottom-0 w-64 p-4 border-t bg-white">
					<Button className="w-full">Generar carta con IA</Button>
					<p className="text-xs text-gray-500 mt-2 text-center">
						Con nuestra aplicación puedes crear tu carta en segundos utilizando
						los datos
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex flex-1 p-8">
				{/* Left side - Product Management */}
				<div className="w-full">
					<div className="flex flex-col mb-6">
						{isEditingTitle ? (
							<div className="flex items-center mb-2">
								<Input
									value={menuTitle}
									onChange={(e) => setMenuTitle(e.target.value)}
									className="text-3xl font-bold mr-2"
								/>
								<Button onClick={() => setIsEditingTitle(false)}>
									Guardar
								</Button>
							</div>
						) : (
							<div className="flex items-center mb-2">
								<h1 className="text-3xl font-bold mr-2">{menuTitle}</h1>
								<Button
									variant="ghost"
									size="sm"
									onClick={() => setIsEditingTitle(true)}
								>
									<Edit className="h-4 w-4" />
								</Button>
							</div>
						)}
						<h2 className="text-2xl font-bold">{selectedCategory}</h2>
					</div>
					<div className="flex justify-between items-center mb-4">
						<Button
							variant="outline"
							onClick={() => handleDelete("categoría", selectedCategory)}
						>
							<Trash2 className="mr-2 h-4 w-4" />
							Eliminar Categoría
						</Button>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							Agregar Producto
						</Button>
					</div>
					<div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4">
						{filteredProducts.map((product) => (
							<Card
								key={product.id}
								className={`overflow-hidden shadow-xl cursor-pointer transition-all ${
									selectedProducts.includes(product.id)
										? "ring-2 ring-primary"
										: ""
								}`}
								onClick={() => handleProductSelect(product.id)}
							>
								<CardContent className="p-0 relative">
									<div className="aspect-square flex items-center justify-center">
										<img
											src={product.image}
											alt={product.name}
											className="object-cover aspect-square"
										/>
									</div>
								</CardContent>
								<CardFooter className="flex flex-col p-2">
									<div className="flex justify-between w-full mb-2">
										<span className="text-sm font-medium">{product.name}</span>
										<span className="text-sm text-gray-600">
											{product.price}
										</span>
									</div>
									<div className="flex w-full gap-1">
										<Button
											variant="secondary"
											className="flex-1 text-xs py-1 px-0 h-auto"
											onClick={(e) => {
												e.stopPropagation();
												console.log(`Editando ${product.name}`);
											}}
										>
											<Edit className="h-3 w-3 mr-1" />
											Editar
										</Button>
										<Button
											variant="destructive"
											className="flex-1 text-xs py-1 px-0 h-auto"
											onClick={(e) => {
												e.stopPropagation();
												handleDelete("producto", product.name);
											}}
										>
											<Trash2 className="h-3 w-3 mr-1" />
											Eliminar
										</Button>
									</div>
								</CardFooter>
							</Card>
						))}
					</div>
				</div>
			</div>

			{/* Right side - Menu Preview */}
			<div className="w-96 flex flex-col mx-auto p-8 h-screen max-h-screen bg-slate-200">
				<h2 className="text-xl font-bold mb-4">Previsualización de la Carta</h2>
				<Card className="h-full min-h-[40vh] max-h-[36rem] border-0 overflow-y-auto">
					<CardContent className="p-0 rounded-t-xl overflow-hidden">
						<ScrollArea>
							{categories.map(({ name, image }) => {
								const categoryProducts = products.filter(
									({ category: cat, id }) =>
										cat === name && selectedProducts.includes(id)
								);
								if (categoryProducts.length === 0) return null;

								return (
									<div key={name}>
										<div
											className="relative py-12 overflow-hidden"
											style={{
												backgroundImage: `url(${image})`,
												backgroundSize: "cover",
												backgroundPosition: "center",
											}}
										>
											<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
												<h3 className="text-lg font-semibold text-white py-4">
													{name}
												</h3>
											</div>
										</div>
										<div className="flex flex-col gap-4 py-4">
											{categoryProducts.map((product) => (
												<div
													className="flex items-start gap-4 px-4"
													key={product.id}
												>
													<img
														src={product.image}
														alt={product.name}
														className="rounded-md object-cover aspect-square max-w-16"
													/>
													<div>
														<div className="flex justify-between">
															<span className="font-medium">
																{product.name}
															</span>
														</div>
														<p className="text-xs text-gray-600">
															{product.description}
														</p>
													</div>
													<div>
														<p>{product.price}</p>
													</div>
												</div>
											))}
										</div>
									</div>
								);
							})}
						</ScrollArea>
					</CardContent>
				</Card>
				<Button
					className="w-full mt-4"
					onClick={() => setIsSaveModalOpen(true)}
				>
					Guardar Carta
				</Button>
			</div>

			{/* Delete Confirmation Modal */}
			<Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle className="flex items-center gap-2 text-red-600">
							<AlertTriangle className="h-5 w-5" />
							Confirmar Eliminación
						</DialogTitle>
						<DialogDescription className="text-center pt-4">
							¿Está seg uro que desea eliminar
							<span className="font-semibold"> {itemToDelete.type}</span>
							{itemToDelete.name && `: ${itemToDelete.name}`}?
							<p className="mt-2 text-red-600">
								Esta acción no se puede deshacer.
							</p>
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="sm:justify-center">
						<Button
							variant="outline"
							onClick={() => setIsDeleteModalOpen(false)}
						>
							Cancelar
						</Button>
						<Button variant="destructive" onClick={confirmDelete}>
							Eliminar
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			{/* Save Menu Modal */}
			<Dialog open={isSaveModalOpen} onOpenChange={setIsSaveModalOpen}>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Guardar Carta</DialogTitle>
						<DialogDescription>
							Ingrese un nombre para guardar la carta.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="menu-name" className="text-right">
								Nombre
							</Label>
							<Input
								id="menu-name"
								value={menuName}
								onChange={(e) => setMenuName(e.target.value)}
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button onClick={handleSaveMenu}>Guardar</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
