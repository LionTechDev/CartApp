import { checkLogin } from "@/utils/utils";
import React from "react";

const layout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	await checkLogin();
	return <>{children}</>;
};

export default layout;
