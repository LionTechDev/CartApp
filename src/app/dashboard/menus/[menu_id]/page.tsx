import { Button } from "@/components/ui/button";
import AsideMenu from "../../../../components/AsideMenu";
import { getMenuCategories } from "./services/services";
import CreateCategoryButton from "./components/CreateCategoryButton";
import DeleteCategoryButton from "./components/DeleteCategoryButton";

const Menu = async ({ params }: { params: { menu_id: string } }) => {
	const { data } = await getMenuCategories(params.menu_id); // Pass menu_id to your service

	return (
		<div className="flex h-screen bg-gray-100">
			<AsideMenu href="/dashboard/menus">
				<CreateCategoryButton menu_id={params?.menu_id} />
			</AsideMenu>
			<main className="flex-1 overflow-y-auto p-8">
				<h1 className="text-3xl font-bold mb-6">Carta</h1>
				{/* Display menu details here */}
				<h6>CATEGORIAS:</h6>
				<div className="flex flex-col gap-5">
					{data && data?.length > 0 ? (
						data?.map((item) => (
							<div
								key={item.category_id}
								className="flex flex-col gap-5 p-5 bg-gray-200"
							>
								<div>{item.title}</div>
								<DeleteCategoryButton category_id={item.category_id} />
							</div>
						))
					) : (
						<h1>No hay categorias , Agrega una</h1>
					)}
				</div>
			</main>
		</div>
	);
};

export default Menu;
