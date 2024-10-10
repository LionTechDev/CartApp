/* "use client";

import { Button } from "@/components/ui/button";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

export default function UploadImage() {
	const [imageUrl, setImageUrl] = useState("");

	const handleSuccess = (event: any) => {
		console.log("Upload result:", event.info.secure_url);
		if (event.info && event.info.secure_url) {
			setImageUrl(event.info.secure_url);
		}
	};

	return (
		<>
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
					<Button variant="outline" onClick={() => open()}>
						Subir Imagen
					</Button>
				)}
			</CldUploadWidget>

			{imageUrl && (
				<div>
					<p>Imagen subida:</p>
					<Image src={imageUrl} alt="Imagen subida" width={500} height={500} />
				</div>
			)}
		</>
	);
}
 */
/*
VARIANTE SIN COMPONENTE CLOUDINARY

"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageUploader() {
	const [file, setFile] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [uploadedUrl, setUploadedUrl] = useState("");

	const handleFileChange = (e: any) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (!file) return;

		setUploading(true);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "cartapp"); // Reemplaza con tu upload preset

		try {
			const response = await fetch(
				`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
				{
					method: "POST",
					body: formData,
				}
			);

			if (!response.ok) {
				throw new Error("Error al subir la imagen");
			}

			const data = await response.json();
			setUploadedUrl(data.secure_url);
		} catch (error) {
			console.error("Error al subir el archivo:", error);
		} finally {
			setUploading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="file" onChange={handleFileChange} accept="image/*" />
			<button type="submit" disabled={!file || uploading}>
				{uploading ? "Subiendo..." : "Subir Imagen"}
			</button>
			{uploadedUrl && (
				<div>
					<p>Imagen subida:</p>
					<Image src={uploadedUrl} alt="Uploaded" width="300" height="300" />
				</div>
			)}
		</form>
	);
} */
