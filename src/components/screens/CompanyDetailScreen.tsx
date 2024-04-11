"use client"

import { useParams } from "next/navigation"
import BaseLayout from "../BaseLayout"
import CompanyDetail from "../companies/CompanyDetail"
import { useEffect, useState } from "react"
import useCompany from "@/hooks/useCompany"
import { CompanyDB } from "@/types/auth.types"
import Loader from "../ui/Loader"

export default function CompanyDetailScreen() {
	const { companyId: id } = useParams()
	const [company, setCompany] = useState<CompanyDB>()
	const { getAllCompanies } = useCompany()
	const updateCompany = async () => {
		const cmpns = await getAllCompanies()

		setCompany(cmpns[+id - 1])
	}
	useEffect(() => {
		updateCompany()
	}, [])

	return (
		<BaseLayout>
			{company ? <CompanyDetail {...company} /> : <Loader />}
		</BaseLayout>
	)
}
