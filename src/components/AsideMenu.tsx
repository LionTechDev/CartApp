import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AsideMenu({
	href,
	children,
}: {
	href: string;
	children?: JSX.Element;
}) {
	// Correct prop name: children
	return (
		<aside className="w-64 bg-white shadow-md flex flex-col">
			<div className="p-4 flex-grow">
				<Link href={href}>
					<Button variant="ghost" className="w-full justify-start mb-4">
						<ArrowLeft className="mr-2 h-4 w-4" /> Volver
					</Button>
				</Link>
				<div>{children}</div> {/* Render passed children here */}
			</div>
		</aside>
	);
}
