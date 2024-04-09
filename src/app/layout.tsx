import type { Metadata } from "next"
import { inter } from "@/styles/fonts"
import "../styles/globals.scss"
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
