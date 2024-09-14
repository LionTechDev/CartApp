import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	ArrowDown,
	ArrowUp,
	Check,
	Pencil,
	Trash2,
	X,
	Globe,
	Settings,
} from "lucide-react";
import Link from "next/link";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PREDEFINED_CATEGORIES = [
	"BEBIDAS",
	"PIZZAS",
	"HAMBURGUESAS",
	"ENSALADAS",
	"POSTRES",
];
export const MenuCard = (props: any) => {
	return (
		<Card className="flex flex-col">
			<CardHeader className="pb-2">
				<CardTitle className="flex justify-between items-center">
					{props.editingId === props.menu.id ? (
						<div className="flex items-center w-full">
							<Input
								value={props.editingName}
								onChange={(e) => props.setEditingName(e.target.value)}
								className="mr-2"
								autoFocus
							/>
							<Button
								variant="ghost"
								size="sm"
								onClick={props.handleConfirmEditName}
							>
								<Check className="h-4 w-4" />
							</Button>
							<Button
								variant="ghost"
								size="sm"
								onClick={props.handleCancelEditName}
							>
								<X className="h-4 w-4" />
							</Button>
						</div>
					) : (
						<>
							{props.menu.name}
							<Button
								variant="ghost"
								size="sm"
								onClick={() => props.handleEditName(props.menu.id)}
							>
								<Pencil className="h-4 w-4" />
							</Button>
						</>
					)}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col space-y-2 mb-4 ">
					<Link href={"/dashboard/catalog"}>
						<Button
							className="w-full"
							variant="outline"
							size="sm"
							/* onClick={() => handleNavigateToManageCategories(menu.id)} */
						>
							<Settings className="h-4 w-4 mr-2" /> Crear o Administrar
							categorías
						</Button>
					</Link>
					<div>
						<Button
							className="w-full"
							variant="outline"
							size="sm"
							onClick={() => {
								props.setMenuToDeleteAllCategories(props.menu.id);
								props.setIsConfirmDeleteAllCategoriesDialogOpen(true);
							}}
						>
							<Trash2 className="h-4 w-4 mr-2" /> Quitar todas las categorías
						</Button>
					</div>
				</div>
				<div className="space-y-2">
					{props.menu.categories.map((category: any, index: any) => (
						<div key={index} className="flex items-center justify-between">
							<span>{category}</span>
							<div>
								<Button
									variant="ghost"
									size="sm"
									onClick={() =>
										props.handleMoveCategory(props.menu.id, index, "up")
									}
									disabled={index === 0}
								>
									<ArrowUp className="h-4 w-4" />
								</Button>
								<Button
									variant="ghost"
									size="sm"
									onClick={() =>
										props.handleMoveCategory(props.menu.id, index, "down")
									}
									disabled={index === props.menu.categories.length - 1}
								>
									<ArrowDown className="h-4 w-4" />
								</Button>
								<Button
									variant="ghost"
									size="sm"
									onClick={() => {
										props.setCategoryToDelete({
											menuId: props.menu.id,
											category,
										});
										props.setIsDeleteCategoryDialogOpen(true);
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
						onValueChange={(value) =>
							props.handleAddCategory(props.menu.id, value)
						}
						disabled={PREDEFINED_CATEGORIES.every((cat) =>
							props.menu.categories.includes(cat)
						)}
					>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Agregar categoría" />
						</SelectTrigger>
						<SelectContent>
							{PREDEFINED_CATEGORIES.filter(
								(cat) => !props.menu.categories.includes(cat)
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
							props.setMenuToDelete(props.menu.id);
							props.setIsConfirmDeleteMenuDialogOpen(true);
						}}
					>
						<Trash2 className="h-4 w-4 mr-2" /> Eliminar
					</Button>
					<div className="flex items-center space-x-2">
						<Switch
							id={`publish-${props.menu.id}`}
							checked={props.menu.isPublished}
							onCheckedChange={() => props.handleTogglePublish(props.menu.id)}
						/>
						<Label htmlFor={`publish-${props.menu.id}`}>
							{props.menu.isPublished ? "Publicada" : "Sin publicar"}
						</Label>
					</div>
				</div>
				<Button
					variant="outline"
					size="sm"
					className="w-full"
					onClick={() => props.handlePublishMenu(props.menu.id)}
				>
					{props.menu.isPublished ? <Globe className="h-4 w-4 mr-2" /> : null}
					{props.menu.isPublished ? "Carta Online" : "Publicar Carta"}
				</Button>
			</CardFooter>
		</Card>
	);
};
