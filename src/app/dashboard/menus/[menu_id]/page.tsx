"use client";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AsideMenu from "../../../../components/AsideMenu";

const Menu = () => {
	const params = useParams(); // Obtiene los parámetros de la URL
	const menu_id = params?.menu_id; // Accede al parámetro dinámico
	return (
		<div className="flex h-screen bg-gray-100">
			<AsideMenu href="/dashboard/menus" />
			<main className="flex-1 overflow-y-auto p-8">
				<h1 className="text-3xl font-bold mb-6">Carta</h1>
				<p>Carta ID: {menu_id}</p>
			</main>
		</div>
	);
};

export default Menu;
