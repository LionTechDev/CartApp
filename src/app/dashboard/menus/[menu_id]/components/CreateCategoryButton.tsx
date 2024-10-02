"use client";
import { Button } from "@/components/ui/button";
import React, { FormEvent } from "react";
import { createCategory } from "../services/services";

import { Input } from "@/components/ui/input";

const CreateCategoryButton = ({ menu_id }: any) => {
	const handleSubmit = (formData: FormData) => {
		const title = formData.get("title");

		createCategory(title, menu_id);
	};

	return (
		<form className="flex justify-center items-center gap-5">
			<Input
				placeholder="title"
				id="title"
				name="title"
				className="bg-white border-gray-200 "
			/>
			<Button formAction={handleSubmit}>Crear nueva categoria</Button>
		</form>
	);
};

export default CreateCategoryButton;
