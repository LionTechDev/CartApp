import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Menus = () => {
	return (
		<div>
			{/* Sidebar */}
			<div className=" bg-white shadow-lg w-64 h-[100vh] ">
				<div className="p-4 border-b">
					<Link href="/dashboard">
						<Button variant="ghost" className="w-full justify-start">
							<ChevronLeft className="mr-2 h-4 w-4" />
							Volver
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Menus;
