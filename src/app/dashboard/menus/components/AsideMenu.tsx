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
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { createNewMenu } from "../services/services";

export default function AsideMenu() {
	const [menuName, setMenuName] = useState("");
	const handleInputMenuName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMenuName(e.target.value);
	};
	return (
		<aside className="w-64 bg-white shadow-md flex flex-col">
			<div className="p-4 flex-grow">
				<Link href="/dashboard">
					<Button variant="ghost" className="w-full justify-start mb-4">
						<ArrowLeft className="mr-2 h-4 w-4" /> Volver
					</Button>
				</Link>
				<div>
					<Dialog>
						<DialogTrigger asChild>
							<Button className="w-full mb-4">
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
			</div>
		</aside>
	);
}
