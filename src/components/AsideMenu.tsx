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
		<aside
			className=" md:flex items-center justify-between  bg-white
		py-4 px-2
		shadow-md"
		>
			<Link href={href}>
				<Button variant="ghost" className="w-full justify-start">
					<ArrowLeft className="mr-2 h-4 w-4" /> Volver
				</Button>
			</Link>
			<div>{children}</div>
		</aside>
	);
}
