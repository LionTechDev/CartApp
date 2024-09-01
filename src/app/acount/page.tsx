"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	Clock,
	Upload,
	Plus,
	Trash2,
	Building,
	Calendar,
	User,
} from "lucide-react";
import Link from "next/link";

type TimeSlot = {
	start: string;
	end: string;
};

type DaySchedule = {
	isOpen: boolean;
	timeSlots: TimeSlot[];
};

type WeekSchedule = {
	[key: string]: DaySchedule;
};

export default function Component() {
	const [schedules, setSchedules] = useState<WeekSchedule>({
		monday: { isOpen: false, timeSlots: [{ start: "09:00", end: "17:00" }] },
		tuesday: { isOpen: false, timeSlots: [{ start: "09:00", end: "17:00" }] },
		wednesday: { isOpen: false, timeSlots: [{ start: "09:00", end: "17:00" }] },
		thursday: { isOpen: false, timeSlots: [{ start: "09:00", end: "17:00" }] },
		friday: { isOpen: false, timeSlots: [{ start: "09:00", end: "17:00" }] },
		saturday: { isOpen: false, timeSlots: [{ start: "09:00", end: "17:00" }] },
		sunday: { isOpen: false, timeSlots: [{ start: "09:00", end: "17:00" }] },
	});

	const handleScheduleChange = (
		day: string,
		field: string,
		value: boolean | TimeSlot[],
		slotIndex?: number
	) => {
		setSchedules((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				[field]: value,
			},
		}));
	};

	const addTimeSlot = (day: string) => {
		setSchedules((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				timeSlots: [...prev[day].timeSlots, { start: "09:00", end: "17:00" }],
			},
		}));
	};

	const removeTimeSlot = (day: string, index: number) => {
		setSchedules((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				timeSlots: prev[day].timeSlots.filter((_, i) => i !== index),
			},
		}));
	};

	const updateTimeSlot = (
		day: string,
		index: number,
		field: "start" | "end",
		value: string
	) => {
		setSchedules((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				timeSlots: prev[day].timeSlots.map((slot, i) =>
					i === index ? { ...slot, [field]: value } : slot
				),
			},
		}));
	};

	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-gray-800 text-white p-4">
				<div className="container mx-auto flex items-center">
					<Building className="w-6 h-6 mr-2" />
					<h1 className="text-2xl font-bold">Información de la cuenta</h1>
				</div>
			</header>

			<main className="flex-grow container mx-auto p-4 overflow-x-auto">
				<div className="flex flex-wrap gap-4 pb-4">
					<Card className="min-w-[300px] flex-shrink-0">
						<CardHeader>
							<CardTitle>Información de la Cuenta</CardTitle>
						</CardHeader>
						<Separator className="mb-4" />
						<CardContent className="space-y-4">
							<Input placeholder="Usuario" />
							<Input placeholder="Contraseña" type="password" />
							<Input placeholder="Correo electrónico" type="email" />
							<Button>Restablecer contraseña</Button>
						</CardContent>
					</Card>
					<Card className="w-[500px] flex-shrink-0">
						<CardHeader>
							<CardTitle>Información del Establecimiento</CardTitle>
						</CardHeader>
						<Separator className="mb-4" />
						<CardContent className="space-y-4 ">
							<div className="flex items-center space-x-4">
								<div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
									<Upload className="w-8 h-8 text-gray-400" />
								</div>
								<Button>Cargar Imagen</Button>
							</div>
							<Input placeholder="Nombre del establecimiento" />
							<div className="grid grid-cols-2 gap-4">
								<Input placeholder="Teléfono" type="tel" />
								<Input placeholder="Correo electrónico" type="email" />
							</div>
							<div className="grid grid-cols-3 gap-4">
								<Input placeholder="País" />
								<Input placeholder="Provincia" />
								<Input placeholder="Ciudad" />
							</div>
							<Input placeholder="Dirección" />
							<div className="grid grid-cols-2 gap-4">
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Tipo de moneda" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="usd">USD</SelectItem>
										<SelectItem value="eur">EUR</SelectItem>
										<SelectItem value="gbp">GBP</SelectItem>
									</SelectContent>
								</Select>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Idioma Principal" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="es">Español</SelectItem>
										<SelectItem value="en">English</SelectItem>
										<SelectItem value="fr">Français</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</CardContent>
					</Card>

					<Card className="min-w-[500px] flex-shrink-0">
						<CardHeader>
							<CardTitle>Horario de Atención</CardTitle>
						</CardHeader>
						<Separator className="mb-4" />

						<CardContent>
							<div className="space-y-6">
								{Object.entries(schedules).map(([day, schedule]) => (
									<div key={day} className="space-y-2">
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-4">
												<Switch
													checked={schedule.isOpen}
													onCheckedChange={(checked) =>
														handleScheduleChange(day, "isOpen", checked)
													}
												/>
												<Label className="w-24 capitalize font-medium">
													{day}
												</Label>
											</div>
											<div className="flex items-center space-x-2">
												<Clock className="w-4 h-4" />
												<Input
													type="time"
													value={schedule.timeSlots[0].start}
													onChange={(e) =>
														updateTimeSlot(day, 0, "start", e.target.value)
													}
													className="w-24"
													disabled={!schedule.isOpen}
												/>
												<span>-</span>
												<Input
													type="time"
													value={schedule.timeSlots[0].end}
													onChange={(e) =>
														updateTimeSlot(day, 0, "end", e.target.value)
													}
													className="w-24"
													disabled={!schedule.isOpen}
												/>
												<Button
													variant="outline"
													size="sm"
													onClick={() => addTimeSlot(day)}
													disabled={!schedule.isOpen}
												>
													<Plus className="w-4  " />
												</Button>
											</div>
										</div>
										{schedule.isOpen && schedule.timeSlots.length > 1 && (
											<div className=" flex items-end gap-2 flex-col">
												{schedule.timeSlots.slice(1).map((slot, index) => (
													<div
														key={index + 1}
														className="flex items-center space-x-2"
													>
														<Clock className="w-4 h-4" />
														<Input
															type="time"
															value={slot.start}
															onChange={(e) =>
																updateTimeSlot(
																	day,
																	index + 1,
																	"start",
																	e.target.value
																)
															}
															className="w-24"
														/>
														<span>-</span>
														<Input
															type="time"
															value={slot.end}
															onChange={(e) =>
																updateTimeSlot(
																	day,
																	index + 1,
																	"end",
																	e.target.value
																)
															}
															className="w-24"
														/>
														<Button
															variant="ghost"
															size="icon"
															onClick={() => removeTimeSlot(day, index + 1)}
														>
															<Trash2 className="w-4 h-4" />
														</Button>
													</div>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>
			</main>

			<footer className="bg-gray-100 p-4 fixed bottom-0 w-full">
				<div className="container mx-auto flex justify-center space-x-4">
					<Link href="/">
						<Button variant="outline">Volver</Button>
					</Link>
					<Button>Guardar información</Button>
				</div>
			</footer>
		</div>
	);
}
