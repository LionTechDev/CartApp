"use client";
import Link from "next/link";
import React from "react";

const Home = () => {
	return (
		<div className="flex flex-col items-center  gap-5">
			<h1>Welcome Page</h1>
			<Link
				href={"/dashboard"}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Ir al dashboard
			</Link>
			<Link
				href={"/login"}
				className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
			>
				Ir al login
			</Link>
		</div>
	);
};

export default Home;
