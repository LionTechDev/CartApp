"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { createNewMenu } from "../services/services";

const CreateNewMenuButton = () => {
	const [menuName, setMenuName] = useState("");
	const handleInputMenuName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMenuName(e.target.value);
	};
	return (
		<div className="flex justify-center items-center">
			<Dialog>
				<DialogTrigger asChild>
					<Button className="w-full ">
						<Plus className="mr-2 h-4 w-4" /> Crear Nueva Carta
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogTitle>Crear Nueva Carta</DialogTitle>
					<Input
						onChange={handleInputMenuName}
						placeholder="Nombre de la carta"
					/>
					<DialogFooter className="grid grid-cols-2 gap-4 ">
						<DialogClose>CANCELAR</DialogClose>
						<Button onClick={() => createNewMenu(menuName)}>CREAR</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default CreateNewMenuButton;
