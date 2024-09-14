import { useState } from "react";
import { Menu } from "../interfaces/Menu";

export const useMenuHandlers = () => {
  const [menus, setMenus] = useState<Menu[]>([
    { id: 1, name: "Carta de Verano", isPublished: true, categories: ["ENSALADAS", "BEBIDAS"] },
    { id: 2, name: "Carta de Invierno", isPublished: false, categories: ["PIZZAS", "HAMBURGUESAS"] },
    { id: 3, name: "Carta Especial", isPublished: false, categories: ["POSTRES", "BEBIDAS"] },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteCategoryDialogOpen, setIsDeleteCategoryDialogOpen] = useState(false);
  const [isConfirmDeleteAllCategoriesDialogOpen, setIsConfirmDeleteAllCategoriesDialogOpen] = useState(false);
  const [isConfirmDeleteMenuDialogOpen, setIsConfirmDeleteMenuDialogOpen] = useState(false);
  const [isOnlineMenuDialogOpen, setIsOnlineMenuDialogOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<Menu>({ id: 0, name: "", isPublished: false, categories: [] });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState("");
  const [categoryToDelete, setCategoryToDelete] = useState<{ menuId: number; category: string } | null>(null);
  const [menuToDeleteAllCategories, setMenuToDeleteAllCategories] = useState<number | null>(null);
  const [menuToDelete, setMenuToDelete] = useState<number | null>(null);
  const [menuToPublish, setMenuToPublish] = useState<number | null>(null);

  const filteredMenus = menus.filter((menu) => menu.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleCreateMenu = () => {
    if (currentMenu.name.trim() === "") return;
    const newMenu = { ...currentMenu, id: Date.now() };
    setMenus([...menus, newMenu]);
    setIsDialogOpen(false);
    setCurrentMenu({ id: 0, name: "", isPublished: false, categories: [] });
  };

  const handleDeleteMenu = () => {
    if (menuToDelete !== null) {
      setMenus(menus.filter((menu) => menu.id !== menuToDelete));
      setIsConfirmDeleteMenuDialogOpen(false);
      setMenuToDelete(null);
    }
  };

  const handleTogglePublish = (id: number) => {
    setMenus(menus.map((menu) => (menu.id === id ? { ...menu, isPublished: !menu.isPublished } : menu)));
  };

  const handleAddCategory = (menuId: number, category: string) => {
    setMenus(
      menus.map((menu) =>
        menu.id === menuId && !menu.categories.includes(category)
          ? { ...menu, categories: [...menu.categories, category] }
          : menu
      )
    );
  };

  const handleRemoveCategory = () => {
    if (categoryToDelete) {
      setMenus(
        menus.map((menu) =>
          menu.id === categoryToDelete.menuId
            ? { ...menu, categories: menu.categories.filter((cat) => cat !== categoryToDelete.category) }
            : menu
        )
      );
      setIsDeleteCategoryDialogOpen(false);
      setCategoryToDelete(null);
    }
  };

  const handleRemoveAllCategories = () => {
    if (menuToDeleteAllCategories !== null) {
      setMenus(
        menus.map((menu) =>
          menu.id === menuToDeleteAllCategories ? { ...menu, categories: [] } : menu
        )
      );
      setIsConfirmDeleteAllCategoriesDialogOpen(false);
      setMenuToDeleteAllCategories(null);
    }
  };

  const handleEditName = (id: number) => {
    setEditingId(id);
    setEditingName(menus.find((menu) => menu.id === id)?.name || "");
  };

  const handleConfirmEditName = () => {
    setMenus(
      menus.map((menu) =>
        menu.id === editingId ? { ...menu, name: editingName } : menu
      )
    );
    setEditingId(null);
    setEditingName("");
  };

  const handleCancelEditName = () => {
    setEditingId(null);
    setEditingName("");
  };

  const handleMoveCategory = (menuId: number, categoryIndex: number, direction: "up" | "down") => {
    setMenus(
      menus.map((menu) => {
        if (menu.id === menuId) {
          const newCategories = [...menu.categories];
          if (direction === "up" && categoryIndex > 0) {
            [newCategories[categoryIndex - 1], newCategories[categoryIndex]] = [
              newCategories[categoryIndex],
              newCategories[categoryIndex - 1],
            ];
          } else if (direction === "down" && categoryIndex < newCategories.length - 1) {
            [newCategories[categoryIndex], newCategories[categoryIndex + 1]] = [
              newCategories[categoryIndex + 1],
              newCategories[categoryIndex],
            ];
          }
          return { ...menu, categories: newCategories };
        }
        return menu;
      })
    );
  };

  const handlePublishMenu = (menuId: number) => {
    setMenus(
      menus.map((menu) =>
        menu.id === menuId
          ? { ...menu, onlineUrl: `https://example.com/menu/${menuId}` }
          : menu
      )
    );
    setMenuToPublish(menuId);
    setIsOnlineMenuDialogOpen(true);
  };

  return {
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
    categoryToDelete,
    setCategoryToDelete,
    menuToDeleteAllCategories,
    setMenuToDeleteAllCategories,
    menuToDelete,
    setMenuToDelete,
    menuToPublish,
    setEditingName,
    setEditingId,
    setMenuToPublish,
  };
};
