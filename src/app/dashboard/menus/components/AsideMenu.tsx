import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
// Define the prop type

export default function AsideMenu() {
	return (
		<aside className="w-64 bg-white shadow-md flex flex-col">
			<div className="p-4 flex-grow">
				<Link href="/dashboard">
					<Button variant="ghost" className="w-full justify-start mb-4">
						<ArrowLeft className="mr-2 h-4 w-4" /> Volver
					</Button>
				</Link>
				<div>
					<Button className="w-full mb-4">
						<Plus className="mr-2 h-4 w-4" /> Crear Nueva Carta
					</Button>
				</div>
			</div>
		</aside>
	);
}
