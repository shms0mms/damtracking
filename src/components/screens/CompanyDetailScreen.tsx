"use client"

import { useParams } from "next/navigation"
import BaseLayout from "../BaseLayout"
import companies from "@/assets/companies.assets"
import CompanyDetail from "../companies/CompanyDetail"

export default function CompanyDetailScreen() {
	const { id } = useParams()
	const company = companies[+id - 1]
	return (
		<BaseLayout>
			<CompanyDetail {...company} />
		</BaseLayout>
	)
}
