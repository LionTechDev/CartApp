"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { createProduct } from "../services/services";

const CreateProduct = (category_id: any) => {
	return (
		<form className="flex gap-2 py-5">
			<Input placeholder="Title" name="title" required />
			<Input placeholder="Description" name="description" />
			<Input placeholder="Price" name="price" />
			{/* 	<Input placeholder="Image" name="image" /> */}
			<Button type="submit" formAction={(e) => createProduct(e, category_id)}>
				Crear Producto
			</Button>
		</form>
	);
};

export default CreateProduct;
