import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

export const DeleteMenuDialog = (props) => {
	return (
		<Dialog
			open={props.isConfirmDeleteMenuDialogOpen}
			onOpenChange={props.setIsConfirmDeleteMenuDialogOpen}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Confirmar Eliminación de Carta</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					¿Estás seguro de que quieres eliminar esta carta? Esta acción no se
					puede deshacer.
				</DialogDescription>
				<DialogFooter>
					<Button
						variant="outline"
						onClick={() => props.setIsConfirmDeleteMenuDialogOpen(false)}
					>
						Cancelar
					</Button>
					<Button onClick={props.handleDeleteMenu}>Confirmar</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
