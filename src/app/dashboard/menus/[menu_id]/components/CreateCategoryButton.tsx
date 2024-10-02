"use client";
import { Button } from "@/components/ui/button";
import React, { FormEvent, useState } from "react";
import { createCategory } from "../services/services";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const CreateCategoryButton = ({ menu_id }: any) => {
	const [categoryName, setCategoryName] = useState("");
	const handleSubmit = () => {
		createCategory(categoryName, menu_id);
	};
	const handleCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCategoryName(e.target.value);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full ">
					<Plus className="mr-2 h-4 w-4" /> Crear Nueva Categoria
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogTitle>Crear Nueva Categoria</DialogTitle>
				<Input
					onChange={handleCategoryName}
					placeholder="Nombre de la categoria"
				/>
				<Input type="file" accept="image/*" />
				<DialogFooter className="grid grid-cols-2 gap-4 ">
					<DialogClose>CANCELAR</DialogClose>
					<Button onClick={handleSubmit}>CREAR</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default CreateCategoryButton;
