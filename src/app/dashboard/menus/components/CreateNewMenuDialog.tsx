"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useMenuHandlers } from "../hooks/useMenuHandlers";

export const CreateNewMenuDialog = (props: any) => {
	return (
		<Dialog open={props.isDialogOpen} onOpenChange={props.setIsDialogOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Crear Nueva Carta</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<label htmlFor="name" className="text-right">
							Nombre
						</label>
						<Input
							id="name"
							value={props.currentMenu.name}
							onChange={(e) =>
								props.setCurrentMenu({
									...props.currentMenu,
									name: e.target.value,
								})
							}
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit" onClick={props.handleCreateMenu}>
						Crear Carta
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
