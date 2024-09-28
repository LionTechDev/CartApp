"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { deleteProduct } from "../services/services";

const ProductCard = ({ product }: any) => {
	return (
		<div
			key={product.product_id}
			className="flex flex-col gap-2 p-5 bg-gray-200"
		>
			<div>{product.title}</div>
			<span className="text-gray-500 text-sm">Descripcion: </span>
			<div className="flex gap-5 justify-between">
				{product.description}
				<div>{product.price}€</div>
			</div>
			<Button
				variant="outline"
				onClick={() => deleteProduct(product.product_id)}
			>
				Eliminar
			</Button>
		</div>
	);
};
export default ProductCard;
