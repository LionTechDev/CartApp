import React from "react";
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
		<section className="flex flex-col gap-5 p-5">
			<div id="create-category">
				<h1>Productos</h1>
				<CreateProduct category_id={params.category_id} />
			</div>
			<div className="flex flex-col p-8 gap-5">
				{products && products?.length > 0 ? (
					products?.map((product) => (
						<ProductCard key={product.product_id} product={product} />
					))
				) : (
					<h1>No hay productos , Agrega uno</h1>
				)}
			</div>
		</section>
	);
};

export default Products;
