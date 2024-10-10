"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteMenu } from "../services/services";
import { Menu } from "@/types/types";
import Image from "next/image";
import { transformCloudinaryUrl } from "@/utils/transformULRImg";

//TODO: CAMBIAR LINK POR CATALOG/CATALOGID

export const CardMenu = ({ menu }: { menu: Menu }) => {
	const { title, menu_id, image } = menu;
	const emptyPhotoURL =
		"https://res.cloudinary.com/dhoxoi8ob/image/upload/v1728565253/nophoto_q8qqts.jpg";
	return (
		<div
			id="card-menu"
			className="bg-white rounded-lg shadow-md flex flex-col  justify-center items-center md:max-w-80 min-w-80"
		>
			<Image
				src={
					image
						? transformCloudinaryUrl(image)
						: transformCloudinaryUrl(emptyPhotoURL)
				}
				alt={title}
				width={500}
				height={500}
				className="rounded-t-lg"
			/>

			<div id="card content" className="p-6 flex flex-col  text-center">
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
		</div>
	);
};
