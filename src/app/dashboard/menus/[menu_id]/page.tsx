import { Button } from "@/components/ui/button";
import AsideMenu from "../../../../components/AsideMenu";
import { getMenuCategories } from "./services/services";
import CreateCategoryButton from "./components/CreateCategoryButton";
import DeleteCategoryButton from "./components/DeleteCategoryButton";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Categories = async ({ params }: { params: { menu_id: string } }) => {
	const { data } = await getMenuCategories(params.menu_id); // Pass menu_id to your service

	return (
		<div>
			<AsideMenu href="/dashboard/menus">
				<CreateCategoryButton menu_id={params?.menu_id} />
			</AsideMenu>
			<main className="flex flex-col overflow-y-auto p-8 gap-5">
				{/* CATEGORIAS */}
				<div className="flex flex-col gap-5">
					<h1>Categorias</h1>
					<div className="flex gap-5 flex-wrap">
						{data && data?.length > 0 ? (
							data?.map((item) => (
								<div
									key={item.category_id}
									className="flex flex-col gap-5 p-5 bg-gray-200"
								>
									<div>{item.title}</div>
									<Link
										href={`/dashboard/menus/${params.menu_id}/${item.category_id}`}
									>
										<Button variant="outline">
											Agregar Productos a la categoria
										</Button>
									</Link>
									<DeleteCategoryButton category_id={item.category_id} />
								</div>
							))
						) : (
							<h1>No hay categorias , Agrega una</h1>
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Categories;
