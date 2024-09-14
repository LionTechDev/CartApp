"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import AsideMenu from "./components/AsideMenu";
import { CreateNewMenuDialog } from "./components/CreateNewMenuDialog";
import { DeleteCategoryDialog } from "./components/DeleteCategoryDialog";
import { DeleteAllCategoryDialog } from "./components/DeleteAllCategoryDialog";
import { DeleteMenuDialog } from "./components/DeleteMenuDialog";
import { PublishMenuDialog } from "./components/PublishMenuDialog";
import { MenuCard } from "./components/MenuCard";
import { useMenuHandlers } from "./hooks/useMenuHandlers";

export default function Component() {
	const {
		menus,
		searchTerm,
		setSearchTerm,
		isDialogOpen,
		setIsDialogOpen,
		isDeleteCategoryDialogOpen,
		setIsDeleteCategoryDialogOpen,
		isConfirmDeleteAllCategoriesDialogOpen,
		setIsConfirmDeleteAllCategoriesDialogOpen,
		isConfirmDeleteMenuDialogOpen,
		setIsConfirmDeleteMenuDialogOpen,
		isOnlineMenuDialogOpen,
		setIsOnlineMenuDialogOpen,
		currentMenu,
		setCurrentMenu,
		editingId,
		editingName,
		filteredMenus,
		handleCreateMenu,
		handleDeleteMenu,
		handleTogglePublish,
		handleAddCategory,
		handleRemoveCategory,
		handleRemoveAllCategories,
		handleEditName,
		handleConfirmEditName,
		handleCancelEditName,
		handleMoveCategory,
		handlePublishMenu,
		setCategoryToDelete,
		setMenuToDeleteAllCategories,
		setMenuToDelete,
		menuToPublish,
		setEditingName,
	} = useMenuHandlers();

	return (
		<div className="flex h-screen bg-gray-100">
			<AsideMenu setIsDialogOpen={setIsDialogOpen}></AsideMenu>

			<main className="flex-1 overflow-y-auto p-8">
				<h1 className="text-3xl font-bold mb-6">Mis Cartas</h1>

				<div className="mb-6">
					<Input
						type="text"
						placeholder="Buscar cartas..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full"
						/* 	icon={<Search className="h-4 w-4 text-gray-500" />} */
					/>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
					{filteredMenus.map((menu) => (
						<MenuCard
							key={menu.id}
							setIsDeleteCategoryDialogOpen={setIsDeleteCategoryDialogOpen}
							setIsConfirmDeleteAllCategoriesDialogOpen={
								setIsConfirmDeleteAllCategoriesDialogOpen
							}
							setIsConfirmDeleteMenuDialogOpen={
								setIsConfirmDeleteMenuDialogOpen
							}
							editingId={editingId}
							editingName={editingName}
							setEditingName={setEditingName}
							setCategoryToDelete={setCategoryToDelete}
							setMenuToDeleteAllCategories={setMenuToDeleteAllCategories}
							setMenuToDelete={setMenuToDelete}
							handleTogglePublish={handleTogglePublish}
							handleAddCategory={handleAddCategory}
							handleEditName={handleEditName}
							handleConfirmEditName={handleConfirmEditName}
							handleCancelEditName={handleCancelEditName}
							handleMoveCategory={handleMoveCategory}
							handlePublishMenu={handlePublishMenu}
							menu={menu}
						></MenuCard>
					))}
				</div>
			</main>
			<CreateNewMenuDialog
				isDialogOpen={isDialogOpen}
				setIsDialogOpen={setIsDialogOpen}
				currentMenu={currentMenu}
				setCurrentMenu={setCurrentMenu}
				handleCreateMenu={handleCreateMenu}
			></CreateNewMenuDialog>
			<DeleteCategoryDialog
				isDeleteCategoryDialogOpen={isDeleteCategoryDialogOpen}
				setIsDeleteCategoryDialogOpen={setIsDeleteCategoryDialogOpen}
				handleRemoveCategory={handleRemoveCategory}
			></DeleteCategoryDialog>

			<DeleteAllCategoryDialog
				isConfirmDeleteAllCategoriesDialogOpen={
					isConfirmDeleteAllCategoriesDialogOpen
				}
				setIsConfirmDeleteAllCategoriesDialogOpen={
					setIsConfirmDeleteAllCategoriesDialogOpen
				}
				handleRemoveAllCategories={handleRemoveAllCategories}
			></DeleteAllCategoryDialog>

			<DeleteMenuDialog
				isConfirmDeleteMenuDialogOpen={isConfirmDeleteMenuDialogOpen}
				setIsConfirmDeleteMenuDialogOpen={setIsConfirmDeleteMenuDialogOpen}
				handleDeleteMenu={handleDeleteMenu}
			></DeleteMenuDialog>

			<PublishMenuDialog
				find={menus.find}
				isOnlineMenuDialogOpen={isOnlineMenuDialogOpen}
				setIsOnlineMenuDialogOpen={setIsOnlineMenuDialogOpen}
				menuToPublish={menuToPublish}
			></PublishMenuDialog>
		</div>
	);
}
