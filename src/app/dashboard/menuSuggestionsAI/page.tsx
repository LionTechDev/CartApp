"use client";

import { useState, useEffect } from "react";
import { useGenerativeAI } from "@/hooks/useGenerativeAI";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Plus, Sparkles } from "lucide-react";
import { DATA, PROMPT } from "./utils/utils";
import { parse } from "path";
import Link from "next/link";

export default function Component() {
	const [query, setQuery] = useState("");
	const { output, isLoading, generateContent } = useGenerativeAI(); // Hook de generación de IA
	const [suggestions, setSuggestions] = useState<
		Array<{ titulo: string; descripcion: string; precio: number }>
	>([]);
	const [error, setError] = useState<string | null>(null);
	const [categories, setCategories] = useState([
		"Entradas",
		"Platos Principales",
		"Postres",
	]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [newCategory, setNewCategory] = useState("");

	const handleGenerate = () => {
		setError(null);
		generateContent(query, DATA, PROMPT); // Generar contenido usando el hook IA
		setQuery("");
	};

	useEffect(() => {
		if (output) {
			const cleanedOutput = output
				.trim()
				.replace(/^```json/, "")
				.replace(/```$/, "");

			const parsedOutput = JSON.parse(cleanedOutput);
			try {
				if (!parsedOutput.sugerencias) {
					setError(parsedOutput?.informacion);
				}
				setSuggestions(parsedOutput.sugerencias || []);
			} catch (e) {
				console.error("Error parsing JSON:", e);
				setError(parsedOutput?.informacion);
			}
		}
	}, [output]);

	const handleAddToMenu = (suggestion: {
		titulo: string;
		descripcion: string;
		precio: number;
	}) => {
		console.log(
			`Agregando ${suggestion.titulo} a la categoría ${
				selectedCategory || newCategory
			}`
		);
	};

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Sidebar */}
			<aside className="w-64 bg-white shadow-md">
				<div className="p-4">
					<Link href="/dashboard">
						<Button variant="ghost" className="w-full justify-start">
							<ArrowLeft className="mr-2 h-4 w-4" /> Volver
						</Button>
					</Link>
				</div>
			</aside>

			{/* Main content */}
			<div className="flex-1 p-8 overflow-auto">
				<h1 className="text-2xl font-bold mb-6">
					Generador de Sugerencias para Menú
				</h1>
				<form className="mb-8">
					<div className="flex items-center space-x-4">
						<div className="relative flex-grow">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<Sparkles className="h-5 w-5 text-primary" />
							</div>
							<Input
								type="text"
								placeholder="Ingrese un tema para el menú..."
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								className="pl-10 pr-4 py-3 w-full text-lg text-gray-900 bg-white rounded-lg border-2 border-primary focus:ring-primary focus:border-primary"
							/>
						</div>
						<Button
							onClick={handleGenerate}
							disabled={isLoading}
							className="px-6 py-3 text-lg font-medium text-white bg-primary rounded-lg hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light"
						>
							{isLoading ? "Generando..." : "Generar"}
						</Button>
					</div>
				</form>

				{error && (
					<div
						className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
						role="alert"
					>
						<p>{error}</p>
					</div>
				)}

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{suggestions.map((suggestion, index) => (
						<Card key={index}>
							<CardHeader>
								<CardTitle>{suggestion?.titulo}</CardTitle>
								<CardDescription>{suggestion?.descripcion}</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-2xl font-bold">
									${suggestion?.precio}
									<span className="text-sm font-normal text-gray-500 ml-2">
										(Precio sugerido)
									</span>
								</p>
							</CardContent>
							<CardFooter>
								<Dialog>
									<DialogTrigger asChild>
										<Button className="w-full">
											<Plus className="mr-2 h-4 w-4" /> Agregar al Menú
										</Button>
									</DialogTrigger>
									<DialogContent aria-describedby="dialog-description">
										<DialogHeader>
											<DialogTitle>Agregar al Menú</DialogTitle>
										</DialogHeader>
										<Select onValueChange={setSelectedCategory}>
											<SelectTrigger>
												<SelectValue placeholder="Seleccionar categoría" />
											</SelectTrigger>
											<SelectContent>
												{categories.map((category) => (
													<SelectItem key={category} value={category}>
														{category}
													</SelectItem>
												))}
												<SelectItem value="new">
													Crear nueva categoría
												</SelectItem>
											</SelectContent>
										</Select>
										{selectedCategory === "new" && (
											<Input
												placeholder="Nombre de la nueva categoría"
												value={newCategory}
												onChange={(e) => setNewCategory(e.target.value)}
											/>
										)}
										<Button onClick={() => handleAddToMenu(suggestion)}>
											Confirmar
										</Button>
									</DialogContent>
								</Dialog>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
