export const getMenus = () => {
	//aqui se realizara la llamada al back para traer los menus de ese cliente
	const Menus = [
		{
			menuId: 1,
			title: "Menu 1",
			categoriesId: 1,
		},
	];
	return { Menus };
};

export const deleteMenu = (menuId: number) => {
	console.log(menuId);
};

export const createNewMenu = ( menuTitle: string) => {
	console.log( menuTitle);
};
