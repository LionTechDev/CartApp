"use client";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";

import { createNewMenu } from "../services/services";

const CreateMenu = () => {
	const [menuName, setMenuName] = useState("");
	const [uploading, setUploading] = useState(false);
	const [imageUrl, setImageUrl] = useState("");

	const handleInputMenuName = (e: any) => {
		setMenuName(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		await createNewMenu(menuName, imageUrl);
		setMenuName("");
		setImageUrl("");
	};

	const handleSuccess = (event: any) => {
		setUploading(true);
		setImageUrl(event.info.secure_url);
		setUploading(false);
	};
	return (
		<div className="bg-gray-100 rounded-lg shadow-md p-5">
			<form
				onSubmit={handleSubmit}
				/* className="flex flex-col items-center space-y-4" */
				className="flex flex-col md:flex-row  gap-5"
			>
				<Input
					value={menuName}
					onChange={handleInputMenuName}
					placeholder="Nombre de la carta"
					className="bg-white"
					required
				/>
				<CldUploadWidget
					uploadPreset="cartapp"
					onSuccess={handleSuccess}
					options={{
						sources: ["local"],
						multiple: false,
						maxFiles: 1,
					}}
				>
					{({ open }) => (
						<Button variant="outline" type="button" onClick={() => open()}>
							Subir Imagen
						</Button>
					)}
				</CldUploadWidget>
				{/* 		<Input
					type="file"
					onChange={handleFileChange}
					accept="image/*"
					className="bg-white"
				/> */}
				<Button type="submit" disabled={uploading}>
					{uploading ? "Subiendo..." : <Plus className="mr-2 h-4 w-4" />} CREAR
				</Button>
			</form>
		</div>
	);
};

export default CreateMenu;
