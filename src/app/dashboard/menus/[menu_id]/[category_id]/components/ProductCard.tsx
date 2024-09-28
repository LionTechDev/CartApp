"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { deleteProduct } from "../services/services";

const ProductCard = ({ product }: any) => {
	return (
		<div
			key={product.product_id}
			className="flex justify-between items-center gap-5 border-b pb-5"
		>
			<div>
				<div className="font-bold text-xl">{product.title}</div>
				<div className="flex gap-5 items-center">
					<span className="text-gray-500 text-sm">{product.description}</span>
				</div>
				<div>
					<span className="text-gray-500 text-sm">Precio: </span>
					{product.price}€
				</div>
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
