import React from "react";
import { getMenuCategories } from "../services/services";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DeleteCategoryButton from "./DeleteCategoryButton";

const Categories = async ({ menu_id }: any) => {
	const { data } = await getMenuCategories(menu_id);

	return (
		<div className="flex flex-col gap-2">
			{data && data?.length > 0 ? (
				data?.map((item) => (
					<Link
						href={`/dashboard/menus/${menu_id}/${item.category_id}`}
						key={item.category_id}
					>
						<div
							className="flex gap-5 p-5 hover:bg-gray-200
            items-center justify-between
            "
						>
							<div>{item.title}</div>
							<DeleteCategoryButton category_id={item.category_id} />
						</div>
					</Link>
				))
			) : (
				<h1>No hay categorias , Agrega una</h1>
			)}
		</div>
	);
};

export default Categories;
