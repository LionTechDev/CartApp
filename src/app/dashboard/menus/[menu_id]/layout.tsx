import AsideMenu from "@/components/AsideMenu";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CreateCategoryButton from "./components/CreateCategoryButton";
import Categories from "./components/Categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Cart App - Category",
	description: "the firs cart app focus on marketing",
};

export default function categoryLayout({
	children,
	params,
}: {
	params: { menu_id: string };
	children: React.ReactNode;
}) {
	return (
		<div>
			<AsideMenu href="/dashboard/menus">
				<CreateCategoryButton menu_id={params?.menu_id} />
			</AsideMenu>
			<div className="grid grid-cols-4 gap-5">
				<div>
					<Categories menu_id={params.menu_id} />
				</div>
				<div className="col-span-3">{children}</div>
			</div>
		</div>
	);
}
