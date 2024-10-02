"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { deleteCategory } from "../services/services";

const DeleteCategoryButton = ({ category_id }: { category_id: string }) => {
	return <Button onClick={() => deleteCategory(category_id)}>X</Button>;
};

export default DeleteCategoryButton;
