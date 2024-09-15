import React from "react";
import AsideMenu from "./components/AsideMenu";
import CardMenu from "./components/CardMenu";

const Menus = () => {
	return (
		<div className="flex h-screen bg-gray-100">
			<AsideMenu />

			<main className="flex-1 overflow-y-auto p-8">
				<h1 className="text-3xl font-bold mb-6">Mis Cartas</h1>

				<div className="mb-6">{/* buscador */}</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					<CardMenu />
				</div>
			</main>
		</div>
	);
};

export default Menus;
