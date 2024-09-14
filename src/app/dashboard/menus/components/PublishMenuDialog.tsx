import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Globe, Printer, QrCode } from "lucide-react";

export const PublishMenuDialog = (props) => {
	return (
		<Dialog
			open={props.isOnlineMenuDialogOpen}
			onOpenChange={props.setIsOnlineMenuDialogOpen}
		>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Carta Online Publicada</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Tu carta online ha sido publicada exitosamente. ¿Qué deseas hacer?
				</DialogDescription>
				<div className="grid gap-4 py-4">
					<Button
						onClick={() =>
							window.open(
								props.find((m: any) => m.id === props.menuToPublish)?.onlineUrl,
								"_blank"
							)
						}
					>
						<Globe className="h-4 w-4 mr-2" /> Ir a mi carta online
					</Button>
					<Button onClick={() => alert("Imprimiendo carta online...")}>
						<Printer className="h-4 w-4 mr-2" /> Imprimir carta online
					</Button>
					<Button onClick={() => alert("Imprimiendo QR...")}>
						<QrCode className="h-4 w-4 mr-2" /> Imprimir QR
					</Button>
				</div>
				<DialogFooter>
					<Button
						variant="outline"
						onClick={() => props.setIsOnlineMenuDialogOpen(false)}
					>
						Cerrar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
