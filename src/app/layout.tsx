import type { Metadata } from "next"
import "./styles/globals.scss"
import { inter } from "@/styles/fonts"

export const metadata: Metadata = {
	title: "Damtracking",
	description: "service for find a paths",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
