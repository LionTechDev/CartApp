"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LockIcon } from "lucide-react";
import Link from "next/link";

interface HomeCardProps {
	title: string;
	description: string;
	isNew?: boolean;
	isPremium?: boolean;
	isLocked?: boolean;
	icon?: React.ReactElement;
	actionButton?: {
		title: string;
		link: string;
	};
	isVertical?: boolean;
}

const HomeCard = ({
	title,
	description,
	isNew,
	isPremium,
	isLocked,
	icon,
	actionButton,
	isVertical,
}: HomeCardProps) => {
	return (
		<Link href={actionButton?.link || "/"}>
			<Card
				className={`hover:shadow-lg transition-shadow min-h-[250px]  flex flex-col justify-center ${
					isVertical && "cursor-pointer"
				}
					${(isLocked || isNew || isPremium) && "pt-0"} 

			`}
			>
				{(isNew || isPremium) && (
					<CardHeader className="flex flex-row items-center justify-between ">
						<span
							className={`text-xs ${
								isPremium ? "bg-gray-500" : "bg-black"
							} text-white px-2 py-1 rounded`}
						>
							{isPremium && "PREMIUM"}
							{isNew && "NEW"}
						</span>
						{isLocked && <LockIcon className=" text-gray-500" size={16} />}
					</CardHeader>
				)}
				<CardContent>
					<div
						className={`flex gap-5 ${
							isVertical ? "flex-col justify-center items-center" : "flex-row"
						}`}
					>
						{icon}
						<div
							className={`${isVertical && "text-center"}  flex flex-col gap-2`}
						>
							<CardTitle>{title}</CardTitle>
							<p className="text-sm text-gray-500">{description}</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
};

export default HomeCard;
