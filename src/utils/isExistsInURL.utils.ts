/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import { usePathname } from "next/navigation"

const isExistsInURL = (path?: string) => {
	const pathname = usePathname()
	return pathname === path
}

export default isExistsInURL
