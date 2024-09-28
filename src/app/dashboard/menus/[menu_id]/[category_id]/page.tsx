import AsideMenu from "@/components/AsideMenu";
import { Button } from "@/components/ui/button";
import React from "react";
import { Product } from "@/types/types";
import CreateProduct from "./components/CreateProduct";
import { getMenuProducts } from "./services/services";
import ProductCard from "./components/ProductCard";

const Products = async ({
	params,
}: {
	params: { category_id: string; menu_id: string };
}) => {
	const { products } = await getMenuProducts(params.category_id);

	return (
		<div className="flex h-screen bg-gray-100">
			<AsideMenu href={`/dashboard/menus/${params.menu_id}`}>
				<></>
			</AsideMenu>
			<main className="flex flex-col overflow-y-auto p-8 gap-5">
				<div id="create-category" className="bg-white p-5 mb-5">
					<h1>Productos</h1>
					<CreateProduct category_id={params.category_id} />
				</div>
				<div className="flex flex-col gap-5">
					<div className="flex gap-5">
						{products && products?.length > 0 ? (
							products?.map((product) => (
								<ProductCard key={product.product_id} product={product} />
							))
						) : (
							<h1>No hay productos , Agrega uno</h1>
						)}
					</div>
				</div>
			</main>
		</div>
	);
};

export default Products;
