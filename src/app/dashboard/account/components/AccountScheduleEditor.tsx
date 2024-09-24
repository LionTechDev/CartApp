import { Plus, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import { Schedule } from "@/types/types";

export const AccountScheduleEditor = ({
	day,
	schedule,
	setSchedule,
}: {
	day: string;
	schedule: Schedule;
	setSchedule: React.Dispatch<React.SetStateAction<Schedule>>;
}) => {
	const { isOpen, timeSlots } = schedule[day];

	const toggleDay = () => {
		setSchedule((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				isOpen: !prev[day].isOpen,
				timeSlots: prev[day].isOpen ? [] : [{ start: "09:00", end: "17:00" }],
			},
		}));
	};

	const addTimeSlot = () => {
		setSchedule((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				timeSlots: [...prev[day].timeSlots, { start: "09:00", end: "17:00" }],
			},
		}));
	};

	const removeTimeSlot = (index: number) => {
		setSchedule((prev) => ({
			...prev,
			[day]: {
				...prev[day],
				timeSlots: prev[day].timeSlots.filter((_, i) => i !== index),
			},
		}));
	};

	const updateTimeSlot = (
		index: number,
		field: "start" | "end",
		value: string
	) => {
		setSchedule((prev) => ({
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
		<div className="bg-gray-50 rounded-lg p-4">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center space-x-4">
					<Switch id={day} checked={isOpen} onCheckedChange={toggleDay} />
					<label htmlFor={day} className="font-medium text-gray-700 text-lg">
						{day}
					</label>
				</div>
				{isOpen && (
					<Button
						variant="outline"
						size="sm"
						onClick={addTimeSlot}
						className="text-gray-500 hover:bg-gray-50"
					>
						<Plus className="h-4 w-4 mr-1" /> Agregar horario
					</Button>
				)}
			</div>
			{isOpen && (
				<div className="space-y-3 ml-4">
					{timeSlots.map((slot, index) => (
						<div key={index} className="flex items-center space-x-2">
							<Sun className="h-4 w-4 text-yellow-500" />
							<Input
								type="time"
								className="w-32 bg-white border-gray-200"
								value={slot.start}
								onChange={(e) => updateTimeSlot(index, "start", e.target.value)}
							/>
							<span className="text-gray-400">-</span>
							<Moon className="h-4 w-4 text-gray-500" />
							<Input
								type="time"
								className="w-32 bg-white border-gray-200"
								value={slot.end}
								onChange={(e) => updateTimeSlot(index, "end", e.target.value)}
							/>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => removeTimeSlot(index)}
								className="text-gray-400 hover:text-red-500"
							>
								<X className="h-4 w-4" />
							</Button>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
