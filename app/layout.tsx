import type { Metadata } from "next";
import "./ui/globals.css";
export const metadata: Metadata = {
	title: "Creon Pass",
	description: "Tokenization",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
