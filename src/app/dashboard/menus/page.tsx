import React from "react";
import AsideMenu from "../../../components/AsideMenu";
import { CardMenu } from "./components/CardMenu";
import { getAllMenus } from "./services/services";
import CreateNewMenuButton from "./components/CreateNewMenuButton";
import { checkLogin } from "@/utils/utils";
import CreateMenu from "./components/CreateMenu";

const Menus = async () => {
	const { menus, error } = await getAllMenus();

	return (
		<div>
			<AsideMenu href="/dashboard"></AsideMenu>
			<main className="flex-1 overflow-y-auto p-8 gap-5 flex flex-col">
				<h1 className="text-3xl font-bold ">Mis Cartas</h1>
				<CreateMenu />
				{!error && (
					<div className="flex flex-wrap gap-4">
						{menus?.map((menu) => (
							<CardMenu menu={menu} key={menu?.menu_id} />
						))}
					</div>
				)}
			</main>
		</div>
	);
};

export default Menus;
