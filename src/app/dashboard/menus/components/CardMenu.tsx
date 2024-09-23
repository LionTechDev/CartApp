"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteMenu } from "../services/services";
import { Menu } from "@/types/types";

//TODO: CAMBIAR LINK POR CATALOG/CATALOGID

export const CardMenu = ({ menu }: { menu: Menu }) => {
	const { title, menu_id } = menu;
	return (
		<div
			id="card-menu"
			className="bg-white rounded-lg shadow-md flex flex-col p-6 justify-center items-center"
		>
			<div id="card-menu-header" className="mb-4">
				{title}
			</div>
			<div id="card-menu-body"></div>
			<div id="card-menu-footer" className="flex flex-col gap-2">
				<Link href={`/dashboard/menus/${menu_id}`}>
					<Button>Configurar Categorias</Button>
				</Link>
				<Button onClick={() => deleteMenu(menu_id)} variant="outline">
					Eliminar Menu
				</Button>
			</div>
		</div>
	);
};
