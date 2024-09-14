import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

export const DeleteAllCategoryDialog = (props) => {
	return (
		<Dialog
			open={props.isConfirmDeleteAllCategoriesDialogOpen}
			onOpenChange={props.setIsConfirmDeleteAllCategoriesDialogOpen}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						Confirmar Eliminación de Todas las Categorías
					</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					¿Estás seguro de que quieres eliminar todas las categorías de esta
					carta? Esta acción no se puede deshacer.
				</DialogDescription>
				<DialogFooter>
					<Button
						variant="outline"
						onClick={() =>
							props.setIsConfirmDeleteAllCategoriesDialogOpen(false)
						}
					>
						Cancelar
					</Button>
					<Button onClick={props.handleRemoveAllCategories}>Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
