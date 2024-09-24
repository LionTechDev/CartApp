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
		<form>
			<Input
				placeholder="title"
				id="title"
				name="title"
				className="bg-white border-gray-200 mb-4"
			/>
			<Button formAction={handleSubmit}>Crear nueva carta</Button>
		</form>
	);
};

export default CreateCategoryButton;
