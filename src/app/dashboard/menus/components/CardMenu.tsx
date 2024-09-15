"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteMenu } from "../services/services";

interface Menu {
	menuId: number;
	title: string;
	categoriesId: number;
}

//TODO: CAMBIAR LINK POR CATALOG/CATALOGID

export const CardMenu = ({ Menu }: { Menu: Menu }) => {
	return (
		<div
			id="card-menu"
			className="bg-white rounded-lg shadow-md flex flex-col p-6 justify-center items-center"
		>
			<div id="card-menu-header" className="mb-4">
				{Menu?.title}
			</div>
			<div id="card-menu-body"></div>
			<div id="card-menu-footer" className="flex flex-col gap-2">
				<Link href={"/dashboard/catalog"}>
					<Button>Configurar Categorias</Button>
				</Link>
				<Button onClick={() => deleteMenu(Menu?.menuId)} variant="outline">
					Eliminar Menu
				</Button>
			</div>
		</div>
	);
};
