import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

export const DeleteCategoryDialog = (props) => {
	return (
		<Dialog
			open={props.isDeleteCategoryDialogOpen}
			onOpenChange={props.setIsDeleteCategoryDialogOpen}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Confirmar Eliminación</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					¿Estás seguro de que quieres eliminar esta categoría de la carta?
				</DialogDescription>
				<DialogFooter>
					<Button
						variant="outline"
						onClick={() => props.setIsDeleteCategoryDialogOpen(false)}
					>
						Cancelar
					</Button>
					<Button onClick={props.handleRemoveCategory}>Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
